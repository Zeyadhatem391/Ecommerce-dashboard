import {
    BiHome,
    BiCategory,
    BiUser,
    BiMessageDetail,
    BiBookOpen,
} from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineInventory2 } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { RiCoupon3Line } from "react-icons/ri";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { CiSettings } from "react-icons/ci";

export const menus = [
    { icon: BiHome, name: "Dashboard", link: "/" },
    { icon: FiShoppingCart, name: "Orders", link: "/orders" },
    { icon: MdOutlineInventory2, name: "Products", link: "/products" },
    { icon: BiCategory, name: "Categories", link: "/categories" },
    { icon: BiUser, name: "Customers", link: "/customers" },
    { icon: HiOutlineDocumentReport, name: "Reports", link: "/reports" },
    { icon: RiCoupon3Line, name: "Coupons", link: "/coupons" },
    { icon: BiMessageDetail, name: "Inbox", link: "/inbox" },
];

export const info = [
    { icon: BiBookOpen, name: "Knowledge Base", link: "/knowledge-base" },
    { icon: MdOutlineSystemUpdateAlt, name: "Product Updates", link: "/updates" },
];

export const settings = [
    { icon: BiUser, name: "Personal Settings", link: "/personal-settings" },
    { icon: CiSettings, name: "Global Settings", link: "/global-settings" },
];