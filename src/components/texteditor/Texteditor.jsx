import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor } from "@tiptap/react";
import React from "react";

export default () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text],
    content: ``,
    editorProps: {
      attributes: {
        class:
          " h-[30rem] text-lg border-none rounded-md shadow-md overflow-y-auto p-10",
      },
    },
  });

  return (
    <div className="">
      <EditorContent editor={editor} />
    </div>
  );
};
