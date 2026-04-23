import Logo from "@/assets/images/logo.png";
import Images from "../atoms/Image";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import Button from "../atoms/Button";

export default function NavBar() {
  return (
    <div className="w-full h-15 ds-bg-navbar px-10 flex items-center justify-between">
      <Images src={Logo} alt="logo" />

      <div className="flex items-center gap-4">
        <div className="cursor-pointer p-2 ">
          <IoNotificationsOutline className="w-7 h-7 ds-text-base" />
        </div>

        <Button variant="secondary" size="md" tag="link" href="login">
          Sign in
        </Button>

        {/* <div className="cursor-pointer p-2 ">
          <FaRegUser className="w-7 h-7 ds-text-base" />
        </div> */}
      </div>
    </div>
  );
}
