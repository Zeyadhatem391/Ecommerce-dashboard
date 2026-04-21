import { menus, info, settings } from "@/data/SideBar";

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
