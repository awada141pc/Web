from flask import Flask, jsonify, request, abort
from flask_cors import CORS
from datetime import datetime, timezone
import itertools

app = Flask(__name__)
CORS(app)

# ---------------------------
# In-memory "database"
# ---------------------------

novel_counter   = itertools.count(3)  # n1, n2 are seeded below
book_counter    = itertools.count(5)  # b1..b4 seeded
chapter_counter = itertools.count(9)  # c1..c8 seeded
comment_counter = itertools.count(3)  # cm1.. seeded

novels = {
    "n1": {
        "id": "n1",
        "name": "The Clockwork Isles",
        "cover": "https://picsum.photos/seed/clockwork/300/450",
        "description": "Steampunk archipelago, rogue inventors, and a brewing sky-war.",
        "book_ids": ["b1", "b2"],
        "featured": True,
    },
    "n2": {
        "id": "n2",
        "name": "Echoes of the Sunken City",
        "cover": "https://picsum.photos/seed/sunken/300/450",
        "description": "Divers, myths, and a drowned library full of secrets.",
        "book_ids": ["b3", "b4"],
        "featured": True,
    },
}

books = {
    "b1": {"id": "b1", "novel_id": "n1", "title": "Brass Tides", "chapter_ids": ["c1", "c2"]},
    "b2": {"id": "b2", "novel_id": "n1", "title": "Engines of Dawn", "chapter_ids": ["c3", "c4"]},
    "b3": {"id": "b3", "novel_id": "n2", "title": "Pearls of Silt", "chapter_ids": ["c5", "c6"]},
    "b4": {"id": "b4", "novel_id": "n2", "title": "Cathedral of Glass", "chapter_ids": ["c7", "c8"]},
}

chapters = {
    "c1": {"id": "c1", "book_id": "b1", "title": "Chapter 1: The Wind-Key", "paragraphs": [
        "On the quay, Tamsin cranked the wind-key and the sails unfurled like metal wings.",
        "The Isles hummed with gears hidden beneath the tide."
    ]},
    "c2": {"id": "c2", "book_id": "b1", "title": "Chapter 2: A Map of Rust", "paragraphs": [
        "They traded a compass for a rumor and a rumor for a debt.",
        "Rust traced the shape of countries no one remembered."
    ]},
    "c3": {"id": "c3", "book_id": "b2", "title": "Chapter 1: Dawn Engine", "paragraphs": [
        "Light condensed on brass pistons like dew.",
        "The engine coughed once, then roared into myth."
    ]},
    "c4": {"id": "c4", "book_id": "b2", "title": "Chapter 2: Sky Dock", "paragraphs": [
        "Masts pierced clouds as if stitching the sky to the sea.",
        "Tamsin learned the cost of altitude."
    ]},
    "c5": {"id": "c5", "book_id": "b3", "title": "Chapter 1: Divers’ Oath", "paragraphs": [
        "Below thirty fathoms, words become bubbles and promises.",
        "Neri signed the slate: No treasure over life."
    ]},
    "c6": {"id": "c6", "book_id": "b3", "title": "Chapter 2: Whale-Song in Stone", "paragraphs": [
        "The murals vibrated with whale-song only the silt could hear.",
        "A doorway opened where a fault line smiled."
    ]},
    "c7": {"id": "c7", "book_id": "b4", "title": "Chapter 1: The Glass Choir", "paragraphs": [
        "When the tide receded, the city sang in shards.",
        "Each note cut a memory loose."
    ]},
    "c8": {"id": "c8", "book_id": "b4", "title": "Chapter 2: Librarian of Currents", "paragraphs": [
        "She filed ripples and cataloged currents by taste.",
        "The index of storms was overdue."
    ]},
}

comments = {
    "b1": [
        {"id": "cm1", "user": "Guest", "text": "Love the setting!", "created_at": "2025-08-01T10:00:00Z"},
        {"id": "cm2", "user": "Alex", "text": "Chapter 2 hooked me.", "created_at": "2025-08-15T09:00:00Z"},
    ],
    "b2": [],
    "b3": [],
    "b4": [],
}

# ---------------------------
# Helpers
# ---------------------------

def now_iso():
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

def as_novel_summary(n):
    return {
        "id": n["id"],
        "name": n["name"],
        "cover": n["cover"],
        "description": n["description"],
    }

def as_book_meta(b):
    return {"id": b["id"], "title": b["title"]}

def as_chapter_meta(c):
    return {"id": c["id"], "title": c["title"]}

def require_superuser():
    if request.headers.get("X-Role", "").lower() != "superuser":
        abort(403, description="Superuser only. Send header 'X-Role: superuser'.")

def get_book_or_404(book_id):
    b = books.get(book_id)
    if not b:
        abort(404, description="Book not found")
    return b

def get_novel_or_404(novel_id):
    n = novels.get(novel_id)
    if not n:
        abort(404, description="Novel not found")
    return n

def get_chapter_or_404(chapter_id):
    c = chapters.get(chapter_id)
    if not c:
        abort(404, description="Chapter not found")
    return c

# ---------------------------
# Error handlers (JSON)
# ---------------------------

@app.errorhandler(400)
def bad_request(e):
    return jsonify({"error": "bad_request", "message": getattr(e, "description", str(e))}), 400

@app.errorhandler(403)
def forbidden(e):
    return jsonify({"error": "forbidden", "message": getattr(e, "description", str(e))}), 403

@app.errorhandler(404)
def not_found(e):
    return jsonify({"error": "not_found", "message": getattr(e, "description", str(e))}), 404

# ---------------------------
# Health
# ---------------------------

@app.get("/health")
def health():
    return jsonify({"status": "ok"})

# ---------------------------
# Public (GET) endpoints your React app can hit
# ---------------------------

@app.get("/novels")
def list_novels():
    """
    Optional query params:
      - frontpage=true|false (default false)
      - limit=<int> (default: all)
    """
    frontpage = request.args.get("frontpage", "false").lower() in ("1", "true", "yes")
    limit = request.args.get("limit", type=int)
    items = [as_novel_summary(n) for n in novels.values() if (n.get("featured") if frontpage else True)]
    if limit is not None:
        items = items[:max(0, limit)]
    return jsonify({"novels": items})

@app.get("/novels/<novel_id>")
def get_novel(novel_id):
    n = get_novel_or_404(novel_id)
    books_meta = [as_book_meta(books[bid]) for bid in n["book_ids"]]
    out = {**as_novel_summary(n), "books": books_meta}
    return jsonify(out)

@app.get("/novels/<novel_id>/books")
def list_books_under_novel(novel_id):
    n = get_novel_or_404(novel_id)
    return jsonify({"books": [as_book_meta(books[bid]) for bid in n["book_ids"]]})

@app.get("/books/<book_id>")
def get_book(book_id):
    b = get_book_or_404(book_id)
    chapter_meta = [as_chapter_meta(chapters[cid]) for cid in b["chapter_ids"]]
    return jsonify({"id": b["id"], "title": b["title"], "novel_id": b["novel_id"], "chapters": chapter_meta})

@app.get("/books/<book_id>/chapters")
def list_or_get_book_chapter_by_index(book_id):
    """
    If query param 'index' is provided (1-based), return that single chapter's full content.
    Otherwise, return chapter metadata list for the book.
    """
    b = get_book_or_404(book_id)
    index = request.args.get("index", type=int)
    if index is None:
        # Just the metas
        return jsonify({"chapters": [as_chapter_meta(chapters[cid]) for cid in b["chapter_ids"]]})
    if index < 1 or index > len(b["chapter_ids"]):
        abort(404, description="Chapter index out of range")
    cid = b["chapter_ids"][index - 1]
    c = chapters[cid]
    return jsonify({
        "id": c["id"],
        "title": c["title"],
        "paragraphs": c["paragraphs"],
        "index": index,
        "total": len(b["chapter_ids"]),
        "book_id": b["id"],
    })

@app.get("/chapters/<chapter_id>")
def get_chapter(chapter_id):
    c = get_chapter_or_404(chapter_id)
    b = books[c["book_id"]]
    return jsonify({
        "id": c["id"],
        "title": c["title"],
        "paragraphs": c["paragraphs"],
        "book_id": b["id"]
    })

@app.get("/books/<book_id>/comments")
def get_book_comments(book_id):
    get_book_or_404(book_id)
    return jsonify({"comments": comments.get(book_id, [])})

# ---------------------------
# Mock write endpoints (superuser only)
# ---------------------------

@app.post("/books/<book_id>/comments")
def add_comment(book_id):
    get_book_or_404(book_id)
    data = request.get_json(silent=True) or {}
    text = data.get("text")
    user = data.get("user", "Guest")
    if not text or not isinstance(text, str):
        abort(400, description="Field 'text' (string) is required.")
    cid = f"cm{next(comment_counter)}"
    entry = {"id": cid, "user": user, "text": text, "created_at": now_iso()}
    comments.setdefault(book_id, []).append(entry)
    return jsonify(entry), 201

# --- Novels ---
@app.post("/novels")
def create_novel():
    require_superuser()
    data = request.get_json(silent=True) or {}
    name = data.get("name")
    cover = data.get("cover", "https://picsum.photos/seed/newnovel/300/450")
    desc  = data.get("description", "")
    featured = bool(data.get("featured", False))
    if not name:
        abort(400, description="Field 'name' is required.")
    nid = f"n{next(novel_counter)}"
    novels[nid] = {"id": nid, "name": name, "cover": cover, "description": desc, "book_ids": [], "featured": featured}
    return jsonify(as_novel_summary(novels[nid]) | {"featured": featured}), 201

@app.put("/novels/<novel_id>")
def update_novel(novel_id):
    require_superuser()
    n = get_novel_or_404(novel_id)
    data = request.get_json(silent=True) or {}
    for k in ("name", "cover", "description", "featured"):
        if k in data:
            n[k] = data[k]
    return jsonify(as_novel_summary(n) | {"featured": n["featured"]})

@app.delete("/novels/<novel_id>")
def delete_novel(novel_id):
    require_superuser()
    n = get_novel_or_404(novel_id)
    # cascade delete books, chapters, comments
    for bid in list(n["book_ids"]):
        _ = delete_book(bid, _internal=True)
    del novels[novel_id]
    return jsonify({"deleted": novel_id})

# --- Books ---
@app.post("/novels/<novel_id>/books")
def create_book(novel_id):
    require_superuser()
    n = get_novel_or_404(novel_id)
    data = request.get_json(silent=True) or {}
    title = data.get("title")
    if not title:
        abort(400, description="Field 'title' is required.")
    bid = f"b{next(book_counter)}"
    books[bid] = {"id": bid, "novel_id": novel_id, "title": title, "chapter_ids": []}
    n["book_ids"].append(bid)
    comments.setdefault(bid, [])
    return jsonify(as_book_meta(books[bid])), 201

@app.put("/books/<book_id>")
def update_book(book_id):
    require_superuser()
    b = get_book_or_404(book_id)
    data = request.get_json(silent=True) or {}
    if "title" in data:
        b["title"] = data["title"]
    return jsonify({"id": b["id"], "title": b["title"], "novel_id": b["novel_id"]})

@app.delete("/books/<book_id>")
def delete_book(book_id, _internal=False):
    if not _internal:
        require_superuser()
    b = get_book_or_404(book_id)
    # remove from parent novel
    n = novels[b["novel_id"]]
    if book_id in n["book_ids"]:
        n["book_ids"].remove(book_id)
    # cascade delete chapters
    for cid in list(b["chapter_ids"]):
        _ = delete_chapter(cid, _internal=True)
    # delete comments bucket
    comments.pop(book_id, None)
    del books[book_id]
    if _internal:
        return True
    return jsonify({"deleted": book_id})

# --- Chapters ---
@app.post("/books/<book_id>/chapters")
def create_chapter(book_id):
    require_superuser()
    b = get_book_or_404(book_id)
    data = request.get_json(silent=True) or {}
    title = data.get("title")
    paragraphs = data.get("paragraphs", [])
    if not title:
        abort(400, description="Field 'title' is required.")
    if not isinstance(paragraphs, list) or not all(isinstance(p, str) for p in paragraphs):
        abort(400, description="'paragraphs' must be a list of strings.")
    cid = f"c{next(chapter_counter)}"
    chapters[cid] = {"id": cid, "book_id": book_id, "title": title, "paragraphs": paragraphs}
    b["chapter_ids"].append(cid)
    return jsonify({"id": cid, "title": title}), 201

@app.put("/chapters/<chapter_id>")
def update_chapter(chapter_id):
    require_superuser()
    c = get_chapter_or_404(chapter_id)
    data = request.get_json(silent=True) or {}
    if "title" in data:
        c["title"] = data["title"]
    if "paragraphs" in data:
        paragraphs = data["paragraphs"]
        if not isinstance(paragraphs, list) or not all(isinstance(p, str) for p in paragraphs):
            abort(400, description="'paragraphs' must be a list of strings.")
        c["paragraphs"] = paragraphs
    return jsonify({"id": c["id"], "title": c["title"], "book_id": c["book_id"]})

@app.delete("/chapters/<chapter_id>")
def delete_chapter(chapter_id, _internal=False):
    if not _internal:
        require_superuser()
    c = get_chapter_or_404(chapter_id)
    b = books[c["book_id"]]
    if chapter_id in b["chapter_ids"]:
        b["chapter_ids"].remove(chapter_id)
    del chapters[chapter_id]
    if _internal:
        return True
    return jsonify({"deleted": chapter_id})

# ---------------------------
# Run
# ---------------------------

if __name__ == "__main__":
    # Use host="0.0.0.0" if you want to hit it from other devices on your LAN.
    app.run(debug=True, port=5000)
