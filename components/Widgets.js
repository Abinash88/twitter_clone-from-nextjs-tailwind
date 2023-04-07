import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import News from "./News";
import { useState } from "react";

const Widgets = ({ newsResults, RandomUserResults }) => {

    const [articleNum, setArticleNum] = useState(3);
    let currentPos = 3;

    // hook for cutting the follow people in right bottom 
    const [slicefollow, setSlicefollow] = useState(3);

    return (
        <div className=" xl:w-[600px] hidden lg:inline ml-8 space-y-5">
            <div className=" w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
                <div className="flex items-center p-3 rounded-full  bg-gray-300 relative">
                    <MagnifyingGlassIcon className="h-7 z-50 text-gray-500 " />
                    <input className="pl-11 border-none text-gray-700 focus:shadow-lg focus:bg-white bg-gray-200 focus:border-none  absolute rounded-full  inset-0" type="text" placeholder="Search Twitter " />
                </div>
            </div>

            <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
                <h4 className="font-bold text-xl px-4 py-2">What's happening</h4>
                {
                    newsResults.slice(0, articleNum).map((article) => {
                        return <News key={article.title} article={article} />
                    })
                }
                <div className="flex items-center justify-between">
                    <button onClick={() => setArticleNum(articleNum + 3)} className="text-blue-300  pl-4 pb-3 hover:text-blue-400"> Show more</button>
                    {articleNum > 3 ?
                        <button onClick={() => setArticleNum(currentPos)} className="text-blue-300  pr-4 pb-3 hover:text-blue-400"> Show Less</button>
                        : null
                    }
                </div>
            </div>

            {/* bottom who to follow section start  */}
            <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
                <h4 className="font-bold text-xl px-4 py-2">Who to Follow?</h4>
            {
                RandomUserResults.slice(0, slicefollow).map((item) => {
                    return <div key={item.login.username} className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-200">
                        <img className="rounded-full" src={item.picture.thumbnail} alt="user image" />
                        <div className="truncate ml-4 leading-5">
                            <h4 className="font-bold hover:underline text-[14px] truncate">{item.login.username}</h4>
                            <h5 className="text-[13px] text-gray-500 truncate">{item.name.first + ' ' + item.name.last}</h5>
                        </div>
                        <button className="ml-auto bg-black text-white  rounded-full text-sm px-3.5 py-1.5 font-bold">Follow</button>
                    </div>
                })
            }
            <div className="flex items-center justify-between">
                <button onClick={() => setSlicefollow(slicefollow + 3)} className="text-blue-300  pl-4 pb-3 hover:text-blue-400">Show More</button>
               {slicefollow > 3 ? <button onClick={() => setSlicefollow(currentPos)} className="text-blue-300  pr-4 pb-3 hover:text-blue-400">Show Less</button> : null}
            </div>
            </div>
        </div >
    )
}

export default Widgets