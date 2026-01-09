const apps = [
  { name: "Microsoft office 365", size: "9.68 Mb", downloads: "9.91k", price: "Free" },
  { name: "Opera", size: "1.9 Mb", downloads: "1.95k", price: "Free" },
  { name: "Adobe acrobat reader DC", size: "8.91 Mb", downloads: "9.12k", price: "$68.71" },
  { name: "Joplin", size: "6.82 Mb", downloads: "6.98k", price: "Free" },
  { name: "Topaz photo AI", size: "8.29 Mb", downloads: "8.49k", price: "$52.17" },
];

export default function RelatedApps() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-medium mb-4">Related applications</h2>

      <div className="flex gap-2 mb-4">
        {["Top 7 days", "Top 30 days", "All times"].map((tab, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-lg text-sm ${
              i === 0 ? "bg-gray-100 font-medium" : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {apps.map((app, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-100 rounded-xl" />
            <div className="flex-1">
              <p className="font-medium text-sm">{app.name}</p>
              <p className="text-xs text-gray-500">
                ⭐ {app.downloads} · 💾 {app.size}
              </p>
            </div>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-100 text-green-700">
              {app.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
