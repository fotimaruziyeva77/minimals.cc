'use client'

import { useState } from 'react'
import Sidebar from '../dashboard/components/Sidebar'
import Header from '../dashboard/components/Header'



export default function ClientLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const [collapsed, setCollapsed] = useState(false)

	const sidebarWidth = collapsed ? 72 : 260

	return (
		<div>
			{/* Sidebar */}
			<Sidebar collapsed={collapsed} width={sidebarWidth} />

			{/* Header */}
			<Header
				leftOffset={sidebarWidth}
				collapsed={collapsed}
				onToggle={() => setCollapsed(!collapsed)}
			/>

			{/* Content */}
			<main
				className='pt-16 min-h-screen overflow-y-auto transition-all duration-300'
				style={{ marginLeft: sidebarWidth }}
			>
				<div className='p-4 md:p-6'>{children}</div>
			</main>
		</div>
	)
}
