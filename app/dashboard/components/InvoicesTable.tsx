'use client';
type InvoiceStatus = "paid" | "out" | "progress";

interface Invoice {
  id: string;
  category: string;
  price: string;
  status: InvoiceStatus;
}


const invoices: Invoice[] = [
  {
    id: "INV-1990",
    category: "Android",
    price: "$83.74",
    status: "paid",
  },
  {
    id: "INV-1991",
    category: "Mac",
    price: "$97.14",
    status: "out",
  },
  {
    id: "INV-1992",
    category: "Windows",
    price: "$68.71",
    status: "progress",
  },
  {
    id: "INV-1993",
    category: "Android",
    price: "$85.21",
    status: "paid",
  },
  {
    id: "INV-1994",
    category: "Mac",
    price: "$52.17",
    status: "paid",
  },
];


const statusStyle: Record<InvoiceStatus, string> = {
  paid: "bg-green-100 text-green-700",
  out: "bg-red-100 text-red-600",
  progress: "bg-yellow-100 text-yellow-700",
};

export default function InvoicesTable() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-medium mb-4">New Invoices</h2>

      <table className="w-full text-sm">
        <thead className="border-b text-gray-500">
          <tr>
            <th className="text-left py-3">Invoice ID</th>
            <th className="text-left">Category</th>
            <th className="text-left">Price</th>
            <th className="text-left">Status</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {invoices.map((item) => (
            <tr
              key={item.id}
              className="border-b last:border-none hover:bg-gray-50 transition"
            >
              <td className="py-4 font-medium">{item.id}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle[item.status]}`}
                >
                  {item.status === "paid"
                    ? "Paid"
                    : item.status === "out"
                    ? "Out of date"
                    : "Progress"}
                </span>
              </td>

              <td className="text-right text-gray-400 cursor-pointer">
                ⋮
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-right text-sm font-medium text-gray-600 cursor-pointer">
        View all →
      </div>
    </div>
  );
}
