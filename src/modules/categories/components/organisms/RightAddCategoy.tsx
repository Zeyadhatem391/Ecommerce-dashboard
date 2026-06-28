import Text from "@/shared/components/atoms/Text";
import Titel from "@/shared/components/atoms/Titel";
import SwitchText from "@/shared/components/molecules/SwitchText";

export default function RightAddCategoy() {
  return (
    <div className="flex flex-col gap-6">
      <div className="ds-bg-alt rounded-xl p-6 shadow-sm">
        <Titel size="lg" className="mb-5 font-semibold">
          Categories
        </Titel>

        <SwitchText text="Visible on site" />
      </div>

      <div className="ds-bg-alt rounded-xl p-6 shadow-sm">
        <Titel size="lg" className="mb-6 font-semibold">
          Category Info
        </Titel>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="font-medium">Category Name</label>

            <input
              type="text"
              placeholder="Women Clothes"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            />
          </div>

          <div>
            <label className="font-medium">Images</label>

            <input type="file" accept="image/*" hidden />

            <div className="mt-2 flex h-60 w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-gray-300 transition hover:border-black">
              <>
                <button
                  type="button"
                  className="rounded-lg border border-gray-300 px-5 py-2 font-medium transition hover:bg-gray-100"
                >
                  Add File
                </button>

                <Text className="mt-4 text-gray-500">
                  Or drag and drop files
                </Text>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
