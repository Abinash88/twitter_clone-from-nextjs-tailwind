import SideBarMenuItem from "./SideBarMenuItem";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  HashtagIcon,
  HomeIcon,
  InboxIcon,
  UserIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";
import { signIn, useSession, signOut } from "next-auth/react";

const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <div className="hidden sm:flex flex-col p-2 xl:item-center fixed h-full bg-white  xl:w-[275px]  xl:ml-24">
      {/* twitter logo  */}
      <div className="hoverEffect w-[55px] h-[55px] flex items-center justify-center hover:bg-blue-100 trasnition duration-200">
        <i
          className="fab fa-twitter text-blue-500"
          style={{ fontSize: "35px" }}
        ></i>
      </div>

      {/* menu box  */}
      <div className="SideBarMenu my-5 ">
        <SideBarMenuItem Text="Home" Icon={HomeIcon} active />
        <SideBarMenuItem Text="Explore" Icon={HashtagIcon} />
        {session && (
          <>
            <SideBarMenuItem Text="Notification" Icon={BellIcon} />
            <SideBarMenuItem Text="Messages" Icon={InboxIcon} />
            <SideBarMenuItem Text="Bookmarks" Icon={BookmarkIcon} />
            <SideBarMenuItem Text="List" Icon={ClipboardIcon} />
            <SideBarMenuItem Text="Profile" Icon={UserIcon} />
          </>
        )}
      </div>

      {/* button  */}
      {session ? (
        <>
          <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold  hover:brightness-95 shadow-xl text-lg   xl:inline hidden">
            Tweet
          </button>

          {/* mini profile  */}
          <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto ">
            <img onClick={signOut}
              className="rounded-full h-10 w-10 xl:mr-2"
              alt="user Image"
              src={session.user.image}
            ></img>
            <div className="leading-5 xl:inline hidden ">
              <h1 className="text-gray-500 font-bold">{session.user.name}</h1>
              <p>{session.user.username}</p>
            </div>
            <EllipsisHorizontalIcon className="h-5 xl:ml-8 xl:inline hidden " />
          </div>
        </>
      ) : (
        <button onClick={() => signIn()} className="bg-blue-400 text-white rounded-full w-35 h-10 font-bold  hover:brightness-95 shadow-xl text-lg  hidden xl:inline    ">Sign in</button>
      )}

    </div>
  );
};

export default Sidebar;
