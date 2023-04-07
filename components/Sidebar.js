import Image from "next/image";
import SideBarMenuItem from "./SideBarMenuItem";
import { BellIcon, BookmarkIcon, ClipboardIcon, HashtagIcon, HomeIcon, InboxIcon, UserIcon,EllipsisHorizontalIcon } from '@heroicons/react/24/solid'


const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:item-center fixed h-full ">

      {/* twitter logo  */}
      <div className='hoverEffect w-[55px] h-[55px] flex items-center justify-center hover:bg-blue-100 trasnition duration-200'>
        <i className="fab fa-twitter text-blue-500" style={{fontSize:'35px'}}></i>
      </div>

      {/* menu box  */}
      <div className="SideBarMenu my-5">
        <SideBarMenuItem Text='Home' Icon={HomeIcon}  active/>
        <SideBarMenuItem Text='Explore' Icon={HashtagIcon} />
        <SideBarMenuItem Text='Notification' Icon={BellIcon} />
        <SideBarMenuItem Text='Messages' Icon={InboxIcon} />
        <SideBarMenuItem Text='Bookmarks' Icon={BookmarkIcon} />
        <SideBarMenuItem Text='List' Icon={ClipboardIcon} />
        <SideBarMenuItem Text='Profile' Icon={UserIcon} />
      </div>

      {/* button  */}
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 shadow-xl text-lg  hidden xl:inline   flex ">Tweet</button>

      {/* mini profile  */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto ">
        <img className="rounded-full h-10 w-10 xl:mr-2" alt="user Image" src='https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
        <div className="leading-5 xl:inline hidden xl:inline">
          <h1 className="text-gray-500 font-bold">Abinash subedi</h1>
          <p>@abinashsubedi.com</p>
        </div>
        <EllipsisHorizontalIcon className="h-5 xl:ml-8 xl:inline hidden xl:inline" />
      </div>

    </div>
  )
}

export default Sidebar