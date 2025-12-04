"use client";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const pieData = [
  { name: "Mac", value: 45000, color: "#C8FAD6" },
  { name: "Windows", value: 70000, color: "#005F56" },
  { name: "iOS", value: 30000, color: "#00A884" },
  { name: "Android", value: 43245, color: "#70F5A5" }
];

const barData = [
  { month: "Jan", Asia: 10, Europe: 5, Americas: 8 },
  { month: "Feb", Asia: 20, Europe: 15, Americas: 18 },
  { month: "Mar", Asia: 15, Europe: 12, Americas: 14 },
  { month: "Apr", Asia: 8, Europe: 10, Americas: 9 },
  { month: "May", Asia: 20, Europe: 18, Americas: 22 },
  { month: "Jun", Asia: 7, Europe: 5, Americas: 6 },
  { month: "Jul", Asia: 22, Europe: 20, Americas: 18 },
  { month: "Aug", Asia: 18, Europe: 17, Americas: 19 },
  { month: "Sep", Asia: 8, Europe: 6, Americas: 9 },
  { month: "Oct", Asia: 22, Europe: 20, Americas: 21 },
  { month: "Nov", Asia: 10, Europe: 8, Americas: 7 },
  { month: "Dec", Asia: 18, Europe: 15, Americas: 17 }
];

export default function DashboardCharts() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 p-4">
      {/* Pie Chart */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-2">Current Download</h2>
        <p className="text-sm text-gray-500 mb-4">Downloaded by operating system</p>
        <div className="w-full h-80">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={110}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
						<PieChart width={400} height={400}>
  <Pie
    data={[
      { name:'Mac', value:12000 },
      { name:'Windows', value:65000 },
      { name:'iOS', value:80000 },
      { name:'Android', value:31000 },
    ]}
    innerRadius={70}
    outerRadius={100}
    fill="#82ca9d"
    dataKey="value"
  >
  </Pie>
</PieChart>

          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-2">Area Installed</h2>
        <p className="text-sm text-gray-500 mb-4">(+43%) than last year</p>

        <div className="w-full h-80">
          <ResponsiveContainer>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Asia" stackId="a" fill="#007A5E" />
              <Bar dataKey="Europe" stackId="a" fill="#FFB300" />
              <Bar dataKey="Americas" stackId="a" fill="#00C2FF" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
