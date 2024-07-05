"use client"

import {
  Bold,
  Italic,
  Strikethrough,
  Pilcrow,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Code,
  Quote,
} from "lucide-react";

const Toolbar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className='control-group border-b border-slate-700 justify-center pb-3 flex flex-wrap gap-2'>
      <div className='button-group flex flex-wrap gap-2'>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`btn btn-sm btn-square ${
            editor.isActive("bold") ? "btn-primary" : "btn-outline"
          }`}
        >
          <Bold />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`btn btn-sm btn-square ${
            editor.isActive("italic") ? "btn-primary" : "btn-outline"
          }`}
        >
          <Italic />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={`btn btn-sm btn-square ${
            editor.isActive("strike") ? "btn-primary" : "btn-outline"
          }`}
        >
          <Strikethrough />
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`btn btn-sm btn-square ${
            editor.isActive("paragraph") ? "btn-primary" : "btn-outline"
          }`}
        >
          <Pilcrow />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`btn btn-sm btn-square ${
            editor.isActive("heading", { level: 1 })
              ? "btn-primary"
              : "btn-outline"
          }`}
        >
          <Heading1 />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`btn btn-sm btn-square ${
            editor.isActive("heading", { level: 2 })
              ? "btn-primary"
              : "btn-outline"
          }`}
        >
          <Heading2 />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`btn btn-sm btn-square ${
            editor.isActive("bulletList") ? "btn-primary" : "btn-outline"
          }`}
        >
          <List />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`btn btn-sm btn-square ${
            editor.isActive("orderedList") ? "btn-primary" : "btn-outline"
          }`}
        >
          <ListOrdered />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`btn btn-sm btn-square ${
            editor.isActive("codeBlock") ? "btn-primary" : "btn-outline"
          }`}
        >
          <Code />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`btn btn-sm btn-square ${
            editor.isActive("blockquote") ? "btn-primary" : "btn-outline"
          }`}
        >
          <Quote />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
