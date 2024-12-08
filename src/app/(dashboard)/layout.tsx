import React from 'react'
import Header from '@/components/Header'

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<main className={'px-3 md:px-14'}>{children}</main>
		</>
	)
}

export default Layout
