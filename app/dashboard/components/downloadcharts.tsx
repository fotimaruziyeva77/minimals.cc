'use client'
import {
	PieChart,
	Pie,
	Cell,
	ResponsiveContainer,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts'

const pieData = [
  { name: 'Mac', value: 45000, color: '#C8FAD6' },
  { name: 'Windows', value: 70000, color: '#005F56' },
  { name: 'iOS', value: 30000, color: '#00A884' },
  { name: 'Android', value: 43245, color: '#70F5A5' },
]

const total = pieData.reduce((sum, item) => sum + item.value, 0)
const barData = [
	{ month: 'Jan', Asia: 10, Europe: 5, Americas: 8 },
	{ month: 'Feb', Asia: 20, Europe: 15, Americas: 18 },
	{ month: 'Mar', Asia: 15, Europe: 12, Americas: 14 },
	{ month: 'Apr', Asia: 8, Europe: 10, Americas: 9 },
	{ month: 'May', Asia: 20, Europe: 18, Americas: 22 },
	{ month: 'Jun', Asia: 7, Europe: 5, Americas: 6 },
	{ month: 'Jul', Asia: 22, Europe: 20, Americas: 18 },
	{ month: 'Aug', Asia: 18, Europe: 17, Americas: 19 },
	{ month: 'Sep', Asia: 8, Europe: 6, Americas: 9 },
	{ month: 'Oct', Asia: 22, Europe: 20, Americas: 21 },
	{ month: 'Nov', Asia: 10, Europe: 8, Americas: 7 },
	{ month: 'Dec', Asia: 18, Europe: 15, Americas: 17 },
]

export default function DashboardCharts() {
	return (
		<div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-6 p-2'>
			{/* Pie Chart */}
		<div className="bg-white rounded-2xl shadow p-6 w-full ">
      <h2 className="text-lg font-semibold mb-1">Current Download</h2>
      <p className="text-sm text-gray-500 mb-4">
        Downloaded by operating system
        
      </p>

      <div className="relative w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={75}
              outerRadius={110}
              paddingAngle={2}
            >
              {pieData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>

            <Legend
              verticalAlign="bottom"
              iconType="circle"
              formatter={(value) => (
                <span className="text-sm text-gray-700">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* MARKAZDAGI TEXT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-sm text-gray-500">Total</span>
          <span className="text-2xl font-bold">
            {total.toLocaleString()}
          </span>
        </div>
      </div>
    </div>

			{/* Bar Chart */}
			<div className='bg-white rounded-2xl shadow p-6'>
				<h2 className='text-xl font-semibold mb-2'>Area Installed</h2>
				<p className='text-sm text-gray-500 mb-4'>(+43%) than last year</p>

				<div className='w-full h-80'>
					<ResponsiveContainer>
						<BarChart data={barData}>
							<CartesianGrid strokeDasharray='3 3' />
							<XAxis dataKey='month' />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey='Asia' stackId='a' fill='#007A5E' />
							<Bar dataKey='Europe' stackId='a' fill='#FFB300' />
							<Bar dataKey='Americas' stackId='a' fill='#00C2FF' />
						</BarChart>
					</ResponsiveContainer>
				</div>
			</div>
		</div>
	)
}
