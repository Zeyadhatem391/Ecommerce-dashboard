"use client";

import { useState } from "react";

import TopBarSetting from "@/modules/settings/components/molecules/TopBarSetting";
import AccountsSection from "@/modules/settings/components/organisms/AccountsSection";
import NotificationsSection from "@/modules/settings/components/organisms/NotificationsSection";
import ProfileSection from "@/modules/settings/components/organisms/ProfileSection";
import SecuritySection from "@/modules/settings/components/organisms/SecuritySection";
import AddPageLayout from "@/shared/components/layout/AddPageLayout";
import { SettingTab } from "@/modules/settings/types/type";

export default function Page() {
  const [activeTab, setActiveTab] = useState<SettingTab>("profile");

  return (
    <AddPageLayout titel="Settings">
      <div className="ds-bg-alt rounded-xl p-6 shadow-sm">
        <TopBarSetting activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="mt-8">
          {activeTab === "profile" && <ProfileSection />}

          {activeTab === "notifications" && <NotificationsSection />}

          {activeTab === "accounts" && <AccountsSection />}

          {activeTab === "security" && <SecuritySection />}
        </div>
      </div>
    </AddPageLayout>
  );
}
