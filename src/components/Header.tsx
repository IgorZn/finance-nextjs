import React from 'react'
import HeaderLogo from '@/components/Header-logo'
import Navigation from '@/components/Navigation'
import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'
import WelcomeMsg from '@/components/WelcomeMsg'

function Header(props) {
	return (
		<header className={'bg-gradient-to-b from-blue-700 to-blue-50 px-4 py-8 md:px-14 pb-36'}>
			<div className="max-w-screen-2xl mx-auto">
				<div className="w-full flex justify-between items-center mb-14">
					<div className="flex items-center md:gap-x-16">
						<HeaderLogo />
						<Navigation />
					</div>
					<ClerkLoaded>
						<UserButton afterSignOutUrl={'/'} />
					</ClerkLoaded>
					<ClerkLoading>
						<Loader2 className={'size-5 animate-spin text-slate-400'} />
					</ClerkLoading>
				</div>
				<WelcomeMsg />
			</div>
		</header>
	)
}

export default Header
