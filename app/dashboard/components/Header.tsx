'use client'

import {
	Search,
	Bell,
	Settings,
	User,
	Globe,
	ChevronLeft,
	ChevronRight,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

interface HeaderProps {
	leftOffset: number
	collapsed: boolean
	onToggle: () => void
}

export default function Header({
	leftOffset,
	collapsed,
	onToggle,
}: HeaderProps) {
	return (
		<header
			className='fixed top-0 h-16 border-b bg-white flex items-center justify-between px-4 z-30 transition-all duration-300'
			style={{
				marginLeft: leftOffset,
				width: `calc(100vw - ${leftOffset}px)`,
			}}
		>
			{/* LEFT SIDE */}
			<div className='flex items-center gap-3'>
				{/* SIDEBAR TOGGLE */}
				<Button size='icon' variant='ghost' onClick={onToggle} className='mr-2'>
					{collapsed ? <ChevronRight /> : <ChevronLeft />}
				</Button>

				{/* LOGO */}

				<Image
					src={'/assets/logo-1.webp'}
					alt=''
					width={300}
					height={300}
					className='w-8 h-8'
				/>
				<div className='flex items-center text-sm font-medium gap-1'>
					<span>Team 1</span>
					<Badge variant='secondary'>Free</Badge>
				</div>
			</div>

			{/* RIGHT SIDE */}
			<div className='flex items-center gap-4'>
				<div className='relative w-48 hidden sm:block'>
					<Search className='absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground' />
					<Input className='pl-8 h-8' placeholder='Search...' />
				</div>

				<Badge variant='outline' className='hidden sm:flex'>
					⌘K
				</Badge>

				<Button variant='ghost' size='icon'>
					<Globe className='w-5 h-5' />
				</Button>

				<div className='relative'>
					<Button variant='ghost' size='icon'>
						<Bell className='w-5 h-5' />
					</Button>
					<span className='absolute top-0 right-0 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full'>
						4
					</span>
				</div>

				<Button variant='ghost' size='icon'>
					<Settings className='w-5 h-5' />
				</Button>

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='ghost' className='flex items-center p-1'>
							<Avatar className='w-8 h-8'>
								<AvatarImage src='https://i.pravatar.cc/40' />
								<AvatarFallback>FN</AvatarFallback>
							</Avatar>
						</Button>
					</DropdownMenuTrigger>

					<DropdownMenuContent align='end' className='w-40'>
						<DropdownMenuItem>
							<User className='w-4 h-4 mr-2' />
							Profile
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Settings className='w-4 h-4 mr-2' />
							Settings
						</DropdownMenuItem>
						<DropdownMenuItem className='text-red-500'>Logout</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	)
}
