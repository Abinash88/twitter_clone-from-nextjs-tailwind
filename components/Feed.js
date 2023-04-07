import { SparklesIcon } from "@heroicons/react/24/solid"
import InputBox from "./InputBox"
import PostBox from "./PostBox"

const Feed = () => {

    const posts = [
        {
            id: '1',
            name: 'abinash subedi',
            username: 'subediabinas@gmail.com',
            userimage: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
            postimage: 'https://images.pexels.com/photos/290470/pexels-photo-290470.jpeg?auto=compress&cs=tinysrgb&w=600',
            text: 'nice picture',
            timestamp: '2hours ago'
        },
        {
            id: '2',
            name: 'Rajesh gautam',
            username: 'rajeshguatam@gmail.com',
            userimage: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
            postimage: 'https://images.pexels.com/photos/6325001/pexels-photo-6325001.jpeg?auto=compress&cs=tinysrgb&w=600',
            text: 'great picture dude',
            timestamp: '1day ago'
        },
    ]
    return (
        <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
            <div className=" flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
                <h2 className="text-lg sm:text-xl font-bold cursor-pointer ">Home</h2>
                <div className="hoverEffect ml-auto flex items-center justify-center p-0">
                    <SparklesIcon className="h-5" />
                </div>
            </div>
            <InputBox className='bg-gray-500' />
            {posts.map((post) => {
               return <PostBox key={post.id} post={post} />
            })
            }
        </div>
    )
}

export default Feed