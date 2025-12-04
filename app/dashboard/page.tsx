
import DashboardCharts from './components/downloadcharts'
import DashboardTopSection from './components/slider'
import StatsCards from './components/stats-card'




export default function Home() {
  return (
    <div className="">
     <DashboardTopSection/>
     <StatsCards/>
<DashboardCharts/>

    </div>
  )
}