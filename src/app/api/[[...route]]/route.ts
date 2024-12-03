import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import type { PageConfig } from 'next'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'
import { clerkMiddleware, getAuth } from '@hono/clerk-auth'

import authors from './authors'

export const config: PageConfig = {
	runtime: 'edge',
}

const app = new Hono().basePath('/api')

app.use('*', clerkMiddleware())

app.get('/hello', c => {
	return c.json({
		message: 'Hello Next.js!',
	})
}).get('/dom/:id', zValidator('param', z.object({ id: z.string() })), c => {
	const { id } = c.req.valid('param')
	const auth = getAuth(c)
	console.log(auth)
	if (auth?.sessionId) {
		return c.json({
			message: 'Hello Next.js! ID - HONO',
			sessionId: auth.sessionId,
			id,
		})
	}
	return c.json(
		{
			error: 'Unauthorized',
			id,
		},
		401
	)
})

app.route('/authors', authors)

export const GET = handle(app)
export const POST = handle(app)
