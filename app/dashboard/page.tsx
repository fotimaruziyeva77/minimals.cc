import DashboardCharts from './components/downloadcharts'
import InvoicesTable from './components/InvoicesTable'
import RelatedApps from './components/RelatedApps'
import DashboardTopSection from './components/slider'
import StatsCards from './components/stats-card'

export default function Home() {
	return (
		<div className=''>
			<DashboardTopSection />
			<StatsCards />
			<DashboardCharts />
			 <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <InvoicesTable />
      </div>
      <div>
        <RelatedApps />
      </div>
    </section>
		</div>
	)
}
