"use client";

import { findPost } from "@/fetch/post";
import { useEffect, useState } from "react";
import moment from "moment";

export default function BlogDetailPage({ params }) {
  const { slug } = params;
  const [post, setPost] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await findPost(slug);
        if (data && data.post) {
          setPost(data.post);
        }
      } catch (err) {
        console.error("Error fetching post", err);
      }
    };

    fetchPost();
  }, [slug]);

  return (
    <div className='container mx-auto h-screen flex flex-col items-center'>
      <div className='mt-10'>
        <div className='container mx-auto h-screen flex flex-col items-center w-3/4 lg:w-3/5'>
          {post && (
            <div key={post.id}>
              <h1 className='text-center font-bold text-3xl'>
                {post.title}
              </h1>
              <p className='text-sm mb-4'>
                Published on {moment(post.createdAt).format("DD MMM YYYY")}
              </p>
              <div
                className='text-justify'
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
