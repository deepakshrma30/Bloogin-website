import Placeholder from "@tiptap/extension-placeholder";
import Dropcursor from '@tiptap/extension-dropcursor'
import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import {
  CodeIcon,
  FontBoldIcon,
  FontItalicIcon,
  HeadingIcon,
  ListBulletIcon,
  StrikethroughIcon,
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from "@radix-ui/react-icons";

interface props {
  data: any;
  setData: any;
}

const Editor = ({ data, setData }: props) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Write something …",
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Dropcursor.configure({
        color:"gray",
        width:2
      })
    ],
    editorProps: {
      attributes: {
        class: "prose max-w-full",
      },
    },
    autofocus: true,
    content: data || "",
    onUpdate: ({ editor }) => {
      setData(editor.getJSON());
    },
  });

  return (
    <div className="mx-auto my-4 p-4 w-full">
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className="bubble-menu bg-gray-800 text-gray-300 rounded-md flex flex-wrap items-center gap-1 p-1 shadow-md">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`p-1 rounded hover:bg-gray-700 ${
                editor.isActive("bold") ? "bg-gray-700" : ""
              }`}
            >
              <FontBoldIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`p-1 rounded hover:bg-gray-700 ${
                editor.isActive("italic") ? "bg-gray-700" : ""
              }`}
            >
              <FontItalicIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={`p-1 rounded hover:bg-gray-700 ${
                editor.isActive("strike") ? "bg-gray-700" : ""
              }`}
            >
              <StrikethroughIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              className={`p-1 rounded hover:bg-gray-700 ${
                editor.isActive("codeBlock") ? "bg-gray-700" : ""
              }`}
            >
              <CodeIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className={`p-1 rounded hover:bg-gray-700 ${
                editor.isActive("heading") ? "bg-gray-700" : ""
              }`}
            >
              <HeadingIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign("left").run()}
              className={`p-1 rounded hover:bg-gray-700 ${
                editor.isActive({ textAlign: "left" }) ? "bg-gray-700" : ""
              }`}
            >
              <TextAlignLeftIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().setTextAlign("center").run()
              }
              className={`p-1 rounded hover:bg-gray-700 ${
                editor.isActive({ textAlign: "center" }) ? "bg-gray-700" : ""
              }`}
            >
              <TextAlignCenterIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign("right").run()}
              className={`p-1 rounded hover:bg-gray-700 ${
                editor.isActive({ textAlign: "right" }) ? "bg-gray-700" : ""
              }`}
            >
              <TextAlignRightIcon className="w-4 h-4" />
            </button>
          </div>
        </BubbleMenu>
      )}

      {editor && (
        <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className="floating-menu bg-gray-800 text-gray-300 rounded-md flex flex-wrap items-center gap-2 p-2 shadow-md">
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className={`p-2 rounded hover:bg-gray-700 flex items-center ${
                editor.isActive("heading", { level: 1 }) ? "bg-gray-700" : ""
              }`}
            >
              <span className="text-sm">Heading 1</span>
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
              className={`p-2 rounded hover:bg-gray-700 flex items-center ${
                editor.isActive("heading", { level: 2 }) ? "bg-gray-700" : ""
              }`}
            >
              <span className="text-sm">Heading 2</span>
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={`p-2 rounded hover:bg-gray-700 flex items-center ${
                editor.isActive("bulletList") ? "bg-gray-700" : ""
              }`}
            >
              <ListBulletIcon className="w-4 h-4 mr-1" />
            </button>
          </div>
        </FloatingMenu>
      )}

      <EditorContent
        editor={editor}
        className="border shadow-lg rounded-lg border-gray-300 rounded-md w-full min-h-[24rem] p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};

export default Editor;
