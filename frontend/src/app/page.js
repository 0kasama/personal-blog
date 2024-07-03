import BlogCard from "@/components/BlogCard";

export default function Home() {
  return (
    <div className='container mx-auto h-screen flex flex-col items-center w-2/3 lg:w-1/4'>
      <div className="mt-10">
        <h1 className='text-left font-bold text-3xl mb-4'>Latest Post</h1>
        <BlogCard />
      </div>
    </div>
  );
}
