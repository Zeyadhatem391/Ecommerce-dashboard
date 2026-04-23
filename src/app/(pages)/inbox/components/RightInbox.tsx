import { FiCamera, FiSend, FiSettings, FiUser } from "@/assets/icons/icons";

export default function RightInbox() {
  return (
    <div className="w-4/6 flex flex-col bg-gray-50">
      <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
            <FiUser className="text-gray-600" size={18} />
          </div>
          <span className="font-semibold text-gray-800">Tom Anderson</span>
        </div>

        <div className="flex items-center gap-4 text-gray-600">
          <FiCamera
            size={20}
            className="cursor-pointer hover:text-black transition"
          />
          <FiSettings
            size={20}
            className="cursor-pointer hover:text-black transition"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
        <div className="flex justify-start">
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm max-w-xs text-sm text-gray-700">
            Hello, I need help with my order.
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-sm max-w-xs text-sm">
            Sure! Can you tell me the issue?
          </div>
        </div>

        <div className="flex justify-start">
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm max-w-xs text-sm text-gray-700">
            I received the wrong product.
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-gray-200 p-4 flex items-center gap-3">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
          <FiSend size={18} />
        </button>
      </div>
    </div>
  );
}
