import Text from "@/shared/components/atoms/Text";
import Titel from "@/shared/components/atoms/Titel";

export default function ProfileSection() {
  return (
    <>
      <div>
        <div className="flex flex-col mb-6">
          <Titel size="lg" className="font-semibold">
            Profile Details
          </Titel>
          <Text>Enter your profile information</Text>
        </div>

        <div>
          <Text >Profile Image</Text>

          <input type="file" accept="image/*" hidden />

          <div className="flex h-40 w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-gray-300 transition hover:border-black">
            <>
              <button
                type="button"
                className="rounded-lg border border-gray-300 px-5 py-2 font-medium transition hover:bg-gray-100"
              >
                Add File
              </button>

              <Text className="mt-4 text-gray-500">Or drag and drop files</Text>
            </>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-7">
          <div className="flex gap-5">
            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium">First Name</label>

              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium">Last Name</label>

              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium">Email Address</label>

              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium">Phone Number</label>

              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="my-7 border-b-2 border-gray-200"></div>

      <div>
        <div className="flex flex-col mb-6">
          <Titel size="lg" className="font-semibold">
            Regional Settings
          </Titel>
          <Text>Set your language and timezone</Text>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium">Language</label>

              <input
                type="text"
                placeholder="English"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium">Timezone</label>

              <input
                type="text"
                placeholder="GMT +02:00"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
