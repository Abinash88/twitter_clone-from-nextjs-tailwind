import { db } from "@/firebase";
import {
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { collection, deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore";
import Moment from "react-moment";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { HeartIcon as HeartFillIcon } from "@heroicons/react/24/solid";
import signin from "@/pages/auth/signin";

const PostBox = ({ post }) => {
  const { data: session } = useSession();
  const [likes, setLikes] = useState([]);
  const [HasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", post.id, "likes"),
      (snapshot) => setLikes(snapshot.docs)
    );
  }, [db]);

  useEffect(() => {
    setHasLiked(likes.findIndex((like) => like.id === session?.user.uid) !== -1);
  }, [likes]);

  async function LikePost() {
    if(session) {

      if (HasLiked) {
        await deleteDoc(doc(db, 'posts', post.id, 'likes', session?.user.uid))
      } else {
        await setDoc(doc(db, "posts", post.id, "likes", session?.user.uid), {
          username: session.user.username,
        });
      }
    }else{
      signin();
    }
  }
  return (
    <div className="flex p-3 cursor-pointer border-bottom border-gray-200 ">
      {/* user image */}
      <img
        className="mr-4 h-11 w-11 rounded-full"
        src={post.data().userImg}
        alt="user image"
      />
      {/* right side  */}
      <div className="">
        {/* Header */}
        <div className="flex items-center justify-between">
          {/* Post user info  */}
          <div className=" flex space-x-2 items-center whitespace-nowrap">
            <div className="flex flex-col">
              <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
                {post.data().name}
              </h4>
            <span className="text-sm sm:text-[13px] hover:underline">
              <Moment fromNow>{post?.data().timestamp?.toDate()}</Moment>
            </span>
            </div>

          </div>
          {/* dot icons  */}
          <EllipsisHorizontalIcon className=" rounded-full w-10 h-10 hover:bg-sky-100 text-sky-500" />
        </div>

        {/* post text  */}
        <p className="text-gray-800  text-[15px] sm:text-[16px] mb-2">
          {post.data().tweet}
        </p>
        {/* post images */}
        <img className="rounded-2xl" src={post.data().postimage} alt="" />
        {/* icons  */}
        <div className="flex justify-around text-gray-500 p-3 ">
          <ChatBubbleOvalLeftEllipsisIcon className="h-10 w-10  hover:text-sky-500 hover:bg-sky-100 hoverEffect p-2" />
          <TrashIcon className="h-10 w-10  hover:text-red-500 hover:bg-red-100 hoverEffect p-2" />
          <div className="flex items-center relative">
            {
              HasLiked ? (

                <HeartFillIcon
                  onClick={LikePost}
                  className="h-10 w-10  text-red-600 hover:text-red-500 hover:bg-red-100 hoverEffect p-2"
                />
              ) :
                <HeartIcon
                  onClick={LikePost}
                  className="h-10 w-10  hover:text-red-500 hover:bg-red-100 hoverEffect p-2"
                />
            }
            {
              likes.length > 0 && (
                <span className="absolute right-[-5px] ">{likes.length}</span>
              )
            }
          </div>

          <ShareIcon className="h-10 w-10  hover:text-sky-500 hover:bg-sky-100 hoverEffect p-2" />
          <ChartBarIcon className="h-10 w-10  hover:text-sky-500 hover:bg-sky-100 hoverEffect p-2" />
        </div>
      </div>
    </div>
  );
};

export default PostBox;
