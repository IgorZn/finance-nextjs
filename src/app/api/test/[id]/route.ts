import { NextResponse } from 'next/server'

export const GET = async (req, { params }) => {
	const { id } = params
	return NextResponse.json({ hello: 'Hello from test api', id })
}
