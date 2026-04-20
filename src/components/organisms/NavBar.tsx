import Logo from "@/assets/images/logo.png";
import Images from "../atoms/Image";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

export default function NavBar() {
  return (
    <div className="w-full h-15 ds-bg-navbar px-10 flex items-center justify-between">
      <Images src={Logo} alt="logo" />

      <div className="flex items-center gap-4">
        <div className="cursor-pointer p-2 ">
          <IoNotificationsOutline className="w-7 h-7 ds-text-base" />
        </div>

        <div className="cursor-pointer p-2 ">
          <FaRegUser className="w-7 h-7 ds-text-base" />
        </div>
      </div>
    </div>
  );
}
