import Comment from "./Comment";
const Comments = () => {
  return (
    <div className="flex flex-col items-start gap-5">
      <h1 className="text-xl font-semibold p-3">Comments</h1>
      <div className="flex items-center justify-between gap-8 w-full">
        <textarea
          placeholder="Comment your thoughts..."
          className="w-full p-4 rounded-xl border-3 border-[#BDB76B]"
        />
        <button className="bg-linear-to-r/oklab  from-[#c5b358] to-[#BDB76B] p-3 text-light rounded-xl font-semibold content-center hover:bg-[#b5a642] cursor-pointer">
          Send
        </button>
      </div>

      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};
export default Comments;
