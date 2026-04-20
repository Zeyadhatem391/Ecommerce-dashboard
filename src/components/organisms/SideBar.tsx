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

const menus = [
  { icon: BiHome, name: "Dashboard", link: "/dashboard" },
  { icon: FiShoppingCart, name: "Orders", link: "/orders" },
  { icon: MdOutlineInventory2, name: "Products", link: "/products" },
  { icon: BiCategory, name: "Categories", link: "/categories" },
  { icon: BiUser, name: "Customers", link: "/customers" },
  { icon: HiOutlineDocumentReport, name: "Reports", link: "/reports" },
  { icon: RiCoupon3Line, name: "Coupons", link: "/coupons" },
  { icon: BiMessageDetail, name: "Inbox", link: "/inbox" },
];

const info = [
  { icon: BiBookOpen, name: "Knowledge Base", link: "/knowledge-base" },
  { icon: MdOutlineSystemUpdateAlt, name: "Product Updates", link: "/updates" },
];

const settings = [
  { icon: BiUser, name: "Personal Settings", link: "/personal-settings" },
  { icon: CiSettings, name: "Global Settings", link: "/global-settings" },
];

export default function SideBar() {
  return (
    <div className="w-64 h-screen ds-bg-sidbar border-r border-white/10">
      <div className="h-full overflow-y-auto px-6 py-6 space-y-4 custom-scroll pb-20">
        <ul className="flex flex-col ">
          {menus.map((menu, index) => {
            const Icon = menu.icon;
            return (
              <li key={index}>
                <a
                  href={menu.link}
                  className="group flex items-center gap-3 px-4 py-3 rounded-xl
                  ds-text-base transition-all duration-300
                  hover:bg-white/10 hover:translate-x-1"
                >
                  <Icon className="w-5 h-5 opacity-80 group-hover:opacity-100 transition" />
                  <span className="text-sm font-medium tracking-wide">
                    {menu.name}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <div>
          <p className="text-xs  ds-text-base mb-3 px-4">Other Information</p>
          <ul className="flex flex-col ">
            {info.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index}>
                  <a
                    href={item.link}
                    className="group flex items-center gap-3 px-4 py-3 rounded-xl
                    ds-text-base transition-all duration-300
                    hover:bg-white/10 hover:translate-x-1"
                  >
                    <Icon className="w-5 h-5 opacity-80 group-hover:opacity-100 transition" />
                    <span className="text-sm font-medium tracking-wide">
                      {item.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <p className="text-xs ds-text-base mb-3 px-4">Settings</p>
          <ul className="flex flex-col ">
            {settings.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index}>
                  <a
                    href={item.link}
                    className="group flex items-center gap-3 px-4 py-3 rounded-xl
                    ds-text-base transition-all duration-300
                    hover:bg-white/10 hover:translate-x-1"
                  >
                    <Icon className="w-5 h-5 opacity-80 group-hover:opacity-100 transition" />
                    <span className="text-sm font-medium tracking-wide">
                      {item.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
