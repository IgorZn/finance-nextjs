'use client'
import React from 'react'
import { useUser } from '@clerk/nextjs'
import { LoaderCircle } from 'lucide-react'

function WelcomeMsg(props) {
	const { user, isLoaded } = useUser()
	console.log(useUser())
	return (
		<div className={'space-y-4 mb-4'}>
			<h2 className={'text-2xl md:text-4xl text-white font-medium'}>
				{isLoaded ? (
					`Welcome back, ${user?.firstName} ${user?.lastName}`
				) : (
					<LoaderCircle className={'size-5 animate-ping text-slate-950'} />
				)}
			</h2>
			<p className={'text-sm md:text-base text-blue-800'}>This is your Finance Overview</p>
		</div>
	)
}

export default WelcomeMsg
