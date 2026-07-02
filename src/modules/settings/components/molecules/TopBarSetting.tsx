import { SettingTab } from "../../types/type";


interface Props {
  activeTab: SettingTab;
  setActiveTab: React.Dispatch<React.SetStateAction<SettingTab>>;
}

const tabs = [
  {
    id: "profile",
    title: "Profile",
  },
  {
    id: "notifications",
    title: "Notifications",
  },
  {
    id: "accounts",
    title: "Accounts",
  },
  {
    id: "security",
    title: "Security",
  },
] as const;

export default function TopBarSetting({
  activeTab,
  setActiveTab,
}: Props) {
  return (
    <div className="border-b border-gray-200">
      <ul className="flex gap-8">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`relative cursor-pointer pb-4 font-medium transition-colors ${
                activeTab === tab.id
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {tab.title}

              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-blue-600"></span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}