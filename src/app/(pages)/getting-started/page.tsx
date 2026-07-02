import SearchKnowledge from "@/modules/knowledge-base/components/molecules/SearchKnowledge";
import Text from "@/shared/components/atoms/Text";
import Titel from "@/shared/components/atoms/Titel";
import DashbordLayout from "@/shared/components/layout/DashbordLayout";
import AddressSection from "@/shared/components/molecules/AddressSection";
import BackPage from "@/shared/components/molecules/BackPage";

export default function page() {
  return (
    <DashbordLayout>
      <BackPage />

      <AddressSection titel="Getting Started" />

      <div className="flex flex-col gap-3 mt-5">
        <SearchKnowledge />
        <div className="ds-bg-alt rounded-xl p-6 shadow-sm">
          <div className="flex flex-col gap-8">
            <div>
              <Titel size="lg" className="mb-2 font-semibold">
                Introduction to Product
              </Titel>
              <Text>
                Bolt is content management system, or CMS. Subscription includes
                content hosting, professionally designed layouts, 24/7 support,
                and access to our user-friendly platform for managing your
                business. You can use bolt to create management systems.
              </Text>
            </div>
            <div className="p-6 flex flex-col gap-1 bg-gray-200 rounded-md">
              <Text>Recommended:</Text>
              <Text>
                You can learn faster by looking some onboarding videos in video
                gallery.
              </Text>
            </div>
          </div>

          <div className="my-7 border-b-2 border-gray-200"></div>

          <div className="flex flex-col gap-8">
            <div>
              <Titel size="lg" className="mb-2 font-semibold">
                Starting Guide
              </Titel>
              <Text>
                You can choose from a range of billing plans to get your idea
                working, whether you’re starting with a website or launching a
                new business.
              </Text>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-6 items-center">
                <div className="bg-gray-200 rounded-full py-2 px-4 text-2xl">
                  1
                </div>
                <Text>
                  All billing plans are available on monthly and annual payment
                  cycles. On an annual billing cycle, the average monthly cost
                  is lower, and you can get a 3 months free.
                </Text>
              </div>

              <div className="flex gap-6 items-center">
                <div className="bg-gray-200 rounded-full py-2 px-4 text-2xl">
                  2
                </div>
                <Text>
                  Upgrade to paid service to make your site public. If you need
                  more time to design your site before going live, you can hide
                  it behind a password.
                </Text>
              </div>

              <div className="flex gap-6 items-center">
                <div className="bg-gray-200 rounded-full py-2 px-4 text-2xl">
                  3
                </div>
                <Text>
                  Site has a trial period. Trial period is free two-week period
                  where you can explore the platform, upload content, experiment
                  with ecommerce website.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashbordLayout>
  );
}
