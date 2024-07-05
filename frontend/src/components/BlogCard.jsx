"use client";

import { findAllPosts, destroyPost } from "@/fetch/post";
import { useState, useEffect } from "react";
import { Pencil, Trash2 } from "lucide-react";
import Cookies from "js-cookie";
import moment from "moment";
import Link from "next/link";

export default function BlogCard() {
  const [posts, setPosts] = useState([]);
  const [accessToken, setAccessToken] = useState();
  const [postIdToDelete, setPostIdToDelete] = useState(null);

  useEffect(() => {
    setAccessToken(Cookies.get("accessToken"));
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await findAllPosts();
        if (data && data.posts) {
          setPosts(data.posts);
        }
      } catch (err) {
        console.error("Error fetching posts", err);
      }
    };

    fetchPosts();
  }, []);

  const handleConfirmModal = (postId) => {
    setPostIdToDelete(postId);
    document.getElementById("deletePost").showModal();
  };

  const handleDelete = async () => {
    try {
      await destroyPost(postIdToDelete);
      setPosts(posts.filter((post) => post.id !== postIdToDelete));
      setPostIdToDelete(null);
      document.getElementById("deletePost").close();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className='flex flex-col gap-5'>
      {posts.map((post) => (
        <div key={post.id} className='card bg-base-100 w-96 shadow-xl relative'>
          <div className='card-body'>
            <h2 className='card-title'>{post.title}</h2>
            <p className='text-sm'>
              Published on {moment(post.createdAt).format("DD MMM YYYY")}
            </p>
            <div
              className='overflow-hidden text-ellipsis h-24'
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <Link href={`/${post.slug}`}>
              <p className='text-blue-500 mt-2 inline-block'>Read More</p>
            </Link>

            {accessToken && (
              <div className='absolute top-3 right-3'>
                <Link href={`/edit/${post.slug}`}>
                  <button className='btn btn-ghost btn-sm btn-circle'>
                    <Pencil size={18} />
                  </button>
                </Link>
                <button
                  onClick={() => handleConfirmModal(post.id)}
                  className='btn btn-ghost btn-sm btn-circle'
                >
                  <Trash2 color='red' size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      ))}

      <dialog id='deletePost' className='modal modal-middle sm:modal-middle'>
        <div className='modal-box flex flex-col items-center gap-2'>
          <p>Are you sure you want to delete this post? </p>
          <div className='modal-action justify-center'>
            <button className='btn btn-error' onClick={handleDelete}>
              Confirm
            </button>
            <button
              className='btn'
              onClick={() => document.getElementById("deletePost").close()}
            >
              Cancel
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
