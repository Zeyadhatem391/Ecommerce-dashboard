import Images from "@/components/atoms/Image";
import Titel from "@/components/atoms/Titel";
import { inboxData } from "@/data/Inbox";


export default function LeftInbox() {
  return (
     <div className="w-2/6 border-r border-gray-200 flex flex-col bg-white">
              <div className="p-5">
                <Titel variant="primary" size="2xl">
                  Conversations
                </Titel>
    
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full mt-4 px-4 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
    
              <div className="flex-1 overflow-y-auto">
                {inboxData.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition"
                  >
                    <Images
                      src={item.image}
                      alt="Product"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
    
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold">{item.name}</span>
                        <span className="text-xs text-gray-400">{item.date}</span>
                      </div>
    
                      <p className="text-sm text-gray-500 truncate">
                        {item.lastMasseg}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
    
  )
}
