import DashbordLayout from "@/components/layout/DashbordLayout";
import AddressSection from "@/components/molecules/AddressSection";
import Toolbar from "@/components/molecules/Toolbar";

const dataTable = [
  {
    id: "12512B",
    date: "May 5, 4:20 PM",
    customer: "Tom Anderson",
    paymentStatus: "Paid",
    orderStatus: "Ready",
    total: "$49.90",
  },
  {
    id: "12513C",
    date: "May 6, 2:10 PM",
    customer: "Sarah Johnson",
    paymentStatus: "Pending",
    orderStatus: "Shipped",
    total: "$89.00",
  },
  {
    id: "12514D",
    date: "May 7, 1:00 PM",
    customer: "Michael Brown",
    paymentStatus: "Paid",
    orderStatus: "Received",
    total: "$120.50",
  },
];

const paymentStyle = (status: string) => {
  switch (status) {
    case "Paid":
      return "bg-green-100 text-green-700";
    case "Pending":
      return "bg-gray-100 text-gray-700";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const orderStyle = (status: string) => {
  switch (status) {
    case "Ready":
      return "bg-orange-400 ";
    case "Shipped":
      return "bg-purple-900 ";
    case "Received":
      return "bg-blue-500 ";
    default:
      return "bg-gray-100 ";
  }
};

export default function OrdersPage() {
  return (
    <DashbordLayout>
      <AddressSection titel="Orders" />

      <div className="ds-bg-alt w-full p-4 rounded-md shadow-xs">
        <Toolbar />

        <table className="w-full table-fixed ">
          <thead className="border-b-2 border-gray-300">
            <tr className="ds-text-disabled">
              <th className="w-1/6 text-left p-3 font-normal">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                  <span>Order</span>
                </div>
              </th>

              <th className="w-1/6 text-left p-3 font-normal">Date</th>
              <th className="w-1/6 text-left p-3 font-normal">Customer</th>
              <th className="w-1/6 text-left p-3 font-normal">
                Payment status
              </th>
              <th className="w-1/6 text-left p-3 font-normal">Order Status</th>
              <th className="w-1/6 text-left p-3 font-normal">Total</th>
            </tr>
          </thead>

          <tbody>
            {dataTable.map((item) => (
              <tr
                key={item.id}
                className="ds-text-primary border-b border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="w-1/6 p-3">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                    <span>#{item.id}</span>
                  </div>
                </td>

                <td className="w-1/6 p-3">{item.date}</td>

                <td className="w-1/6 p-3">{item.customer}</td>

                <td className="w-1/6 p-3">
                  <span
                    className={`font-medium px-2.5 py-1.5 rounded-sm ${paymentStyle(
                      item.paymentStatus,
                    )}`}
                  >
                    {item.paymentStatus}
                  </span>
                </td>

                <td className="w-1/6 p-3">
                  <span
                    className={`font-medium px-2.5 py-1.5 rounded-sm text-white ${orderStyle(
                      item.orderStatus,
                    )}`}
                  >
                    {item.orderStatus}
                  </span>
                </td>

                <td className="w-1/6 p-3">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashbordLayout>
  );
}
