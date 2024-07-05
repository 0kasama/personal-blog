"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "@/components/Toolbar";
import { findPost, updatePost } from "@/fetch/post";

export default function EditPage({ params }) {
  const router = useRouter();
  const { slug } = params;
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");

  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Write your content here</p>",
  });

  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleTagChange = (e) => setTag(e.target.value);

  const handleCancel = () => {
    router.push("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editor) {
      const content = editor.getHTML();
      const post = { title, tag, content };
      try {
        await updatePost(slug, post);
        router.push("/");
      } catch (err) {
        console.error("Error updating post", err);
      }
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await findPost(slug);
        if (data && data.post) {
          const post = data.post;
          setTitle(post.title);
          setTag(post.tag);
          if (editor) {
            editor.commands.setContent(post.content);
          }
        }
      } catch (err) {
        console.error("Error fetching post", err);
      }
    };

    fetchPost();
  }, [slug, editor]);

  return (
    <div className='flex flex-col w-2/3 mx-auto mt-10'>
      <form>
        <label className='form-control w-full'>
          <div className='label'>
            <span className='label-text text-lg font-bold'>Title</span>
          </div>
          <input
            type='text'
            placeholder='Enter blog title'
            className='input input-bordered w-full'
            value={title}
            onChange={handleTitleChange}
          />
        </label>

        <label className='form-control w-full pb-5'>
          <div className='label'>
            <span className='label-text text-lg font-bold'>Tag</span>
          </div>
          <input
            type='text'
            placeholder='Enter blog tag'
            className='input input-bordered w-full'
            value={tag}
            onChange={handleTagChange}
          />
        </label>

        <div className='border border-slate-700 rounded-lg min-h-96 pt-3'>
          {editor && <Toolbar editor={editor} />}
          <EditorContent editor={editor} className='mt-2' />
        </div>
      </form>
      <div className='flex justify-center mt-5 gap-5'>
        <button
          onClick={handleSubmit}
          type='submit'
          className='btn btn-primary w-1/3'
        >
          Save Change
        </button>

        <button onClick={handleCancel} className='btn btn-neutral w-1/3'>
          Cancel
        </button>
      </div>
    </div>
  );
}
