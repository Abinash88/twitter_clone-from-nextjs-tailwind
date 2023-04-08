import { SparklesIcon } from "@heroicons/react/24/solid";
import InputBox from "./InputBox";
import PostBox from "./PostBox";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    return (
      onSnapshot(query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      })
    );
  }, []);

  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className=" flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer ">Home</h2>
        <div className="hoverEffect ml-auto flex items-center justify-center p-0">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <InputBox className="bg-gray-500" />
      {posts.map((post) => {
        return <PostBox key={post.id} post={post} />;
      })}
    </div>
  );
};

export default Feed;
