interface Props {
  id: string;
  date: string;
  customer: string;
  paymentStatus: string;
  orderStatus: string;
  total: string;
}

export default function OrderCard({
  id,
  date,
  customer,
  paymentStatus,
  orderStatus,
  total,
}: Props) {
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

  return (
    <tr className="ds-text-primary border-b border-gray-100 hover:bg-gray-50 transition">
      <td className="w-1/6 px-3 py-4 ">
        <div className="flex items-center gap-3">
          <input type="checkbox" className="w-4 h-4 cursor-pointer" />
          <span>#{id}</span>
        </div>
      </td>

      <td className="w-1/6 px-3 py-4">{date}</td>

      <td className="w-1/6 px-3 py-4">{customer}</td>

      <td className="w-1/6 px-3 py-4">
        <span
          className={`font-medium px-2.5 py-1.5 rounded-sm ${paymentStyle(
            paymentStatus,
          )}`}
        >
          {paymentStatus}
        </span>
      </td>

      <td className="w-1/6 px-3 py-4">
        <span
          className={`font-medium px-2.5 py-1.5 rounded-sm text-white ${orderStyle(
            orderStatus,
          )}`}
        >
          {orderStatus}
        </span>
      </td>

      <td className="w-1/6 px-3 py-4">{total}</td>
    </tr>
  );
}
