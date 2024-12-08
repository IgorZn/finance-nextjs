'use client'
import { useEffect, useState } from 'react'
import { SignedIn, UserButton } from '@clerk/nextjs'

export default function Home() {
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		setLoading(false)
	}, [])

	return <>{!loading && <h1>Welcome back!</h1>}</>
}
