"use client";

import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";

const extensions = [StarterKit];

const content = `test content`;

const Tiptap = () => {
  return (
    <div className="border min-h-96">
      <EditorProvider
        slotBefore={<Toolbar />}
        extensions={extensions}
        content={content}
      />
    </div>
  );
};

export default Tiptap;
