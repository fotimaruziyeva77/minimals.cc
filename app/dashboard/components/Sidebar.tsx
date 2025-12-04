'use client'

import {
  Home,
  BarChart3,
  Users,
  Download,
  Settings,
  HelpCircle,
  Menu,
  X
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface SidebarProps {
  collapsed: boolean
  width: number
}

const menuItems = [
  {
    icon: Home,
    label: 'Dashboard',
    href: '/dashboard',
  },
  {
    icon: BarChart3,
    label: 'Analytics',
    href: '/analytics',
  },
  {
    icon: Users,
    label: 'Users',
    href: '/users',
  },
  {
    icon: Download,
    label: 'Downloads',
    href: '/downloads',
  },
  {
    icon: Settings,
    label: 'Settings',
    href: '/settings',
  },
  {
    icon: HelpCircle,
    label: 'Help',
    href: '/help',
  },
]

export default function Sidebar({ collapsed, width }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* MOBILE TOGGLE BTN */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow"
      >
        <Menu />
      </button>

      {/* SIDEBAR */}
      <aside
        className="fixed inset-y-0 left-0 bg-white border-r z-40 transition-all duration-300 flex flex-col"
        style={{
          width
        }}
      >

        {/* LOGO */}
        <div className="h-16 border-b flex items-center px-4 gap-2">
          <div className="w-8 h-8 rounded bg-indigo-500" />
          {!collapsed && (
            <span className="font-bold text-lg">Dashboard</span>
          )}
        </div>

        {/* MENU */}
        <nav className="flex-1 p-2 space-y-1">
          {menuItems.map((item, i) => {
            const Icon = item.icon

            return (
              <button
                key={i}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition"
              >
                <Icon className="h-5 w-5 shrink-0" />

                {!collapsed &&
								<Link href={item.href}>

                  <span className="text-sm font-medium">
                    {item.label}
                  </span>
								</Link>
                }
              </button>
            )
          })}	
        </nav>

        {/* USER */}
        <div className="p-4 border-t">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="text-indigo-600 font-bold">JF</span>
            </div>

            {!collapsed && (
              <div>
                <p className="font-semibold text-sm">
                  Jayden Frankie
                </p>
                <p className="text-xs text-gray-500">
                  Administrator
                </p>
              </div>
            )}
          </div>
        </div>

      </aside>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <>
          <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-white p-4 transition">
            <button
              onClick={() => setMobileOpen(false)}
              className="mb-4"
            >
              <X />
            </button>

            <nav className="space-y-2">
              {menuItems.map((item, i) => {
                const Icon = item.icon

                return (
                  <button
                    key={i}
                    className="flex gap-3 items-center w-full px-3 py-2 rounded-md hover:bg-gray-100"
                  >
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </button>
                )
              })}
            </nav>
          </aside>

          <div
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black/40 z-40"
          />
        </>
      )}
    </>
  )
}
