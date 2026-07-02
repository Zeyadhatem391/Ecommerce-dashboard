import { BiBookOpen, BiCategory, BiDollarCircle, BiHome,
     BiMessageDetail, BiUser, CiSettings, FiShoppingCart, 
     HiOutlineDocumentReport, MdOutlineInventory2, RiCoupon3Line,
     RiInformationLine 
    
    } from "@/assets/icons/icons";


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
];

export const settings = [
    { icon: BiDollarCircle, name: "Pricing", link: "/pricing" },
    { icon: CiSettings, name: "Settings", link: "/settings" },

];

export const aboutMe = [
    {
        icon: RiInformationLine,
        name: "About",
        link: "/about",
    },
];