// authors.ts
import { Hono } from 'hono'

const app = new Hono()

app.get('/', c => c.json('list authors'))
app.post('/', c => c.json('create an author', 201))
app.get('/:id', c =>
	c.json({
		param: `ID ${c.req.param('id')}`,
	})
)

export default app
