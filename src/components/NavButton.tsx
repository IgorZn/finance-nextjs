import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavButtonProps {
	href: string
	label: string
	keyData: string
	isActive?: boolean
}

function NavButton({ href, label, keyData, isActive }: NavButtonProps) {
	return (
		<Button
			asChild
			size="sm"
			variant={'outline'}
			className={cn(
				'w-full md:w-auto justify-between font-normal hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition',
				isActive ? 'bg-white/10 text-white' : 'bg-transparent'
			)}>
			<Link href={href} key={keyData}>
				{label}
			</Link>
		</Button>
	)
}

export default NavButton
