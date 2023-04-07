import { ChartBarIcon, ChatBubbleOvalLeftEllipsisIcon, EllipsisHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/24/solid"

const PostBox = ({ post }) => {
  return (
    <div className="flex p-3 cursor-pointer border-bottom border-gray-200 ">
      {/* user image */}
      <img className="mr-4 h-11 w-11 rounded-full" src={post.userimage} alt='user image' />
      {/* right side  */}
      <div className="">

        {/* Header */}
        <div className="flex items-center justify-between">

          {/* Post user info  */}
          <div className=" flex space-x-1 items-center whitespace-nowrap">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.name}</h4>
            <span className="text-sm sm:text-[15px] ">{post.username}</span>
            <span className="text-sm sm:text-[15px] hover:underline">{post.timestamp}</span>
          </div>
          {/* dot icons  */}
          <EllipsisHorizontalIcon className=" rounded-full w-10 h-10 hover:bg-sky-100 text-sky-500" />
        </div>

        {/* post text  */}
        <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">{post.text}</p>
        {/* post images */}
        <img className="rounded-2xl" src={post.postimage} alt="" />
        {/* icons  */}
        <div className="flex justify-around text-gray-500 p-3 ">
          <ChatBubbleOvalLeftEllipsisIcon className="h-9 w-9  hover:text-sky-500 hover:bg-sky-100 hoverEffect p-2"/>
          <TrashIcon className="h-9 w-9  hover:text-red-500 hover:bg-red-100 hoverEffect p-2"/>
          <HeartIcon className="h-9 w-9  hover:text-red-500 hover:bg-red-100 hoverEffect p-2"/>
          <ShareIcon className="h-9 w-9  hover:text-sky-500 hover:bg-sky-100 hoverEffect p-2"/>
          <ChartBarIcon className="h-9 w-9  hover:text-sky-500 hover:bg-sky-100 hoverEffect p-2"/>
        </div>

      </div>




    </div>
  )
}

export default PostBox