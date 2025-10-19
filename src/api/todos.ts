import { Hono } from 'hono'
import { DatabaseService } from '../db/database'
import type { Env } from '../types'

const todosApi = new Hono<{ Bindings: Env }>()

// CORS middleware
todosApi.use('*', async (c, next) => {
  c.header('Access-Control-Allow-Origin', '*')
  c.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  c.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  if (c.req.method === 'OPTIONS') {
    return c.text('', 200)
  }

  await next()
})

// GET /api/todos - Get all todos
todosApi.get('/', async (c) => {
  try {
    const db = new DatabaseService(c.env)
    const todos = await db.getTodos()
    return c.json({ data: todos })
  } catch (error) {
    console.error('Error fetching todos:', error)
    return c.json({ error: 'Failed to fetch todos' }, 500)
  }
})

// GET /api/todos/:id - Get a specific todo
todosApi.get('/:id', async (c) => {
  try {
    const id = c.req.param('id')
    const db = new DatabaseService(c.env)
    const todo = await db.getTodo(id)

    if (!todo) {
      return c.json({ error: 'Todo not found' }, 404)
    }

    return c.json({ data: todo })
  } catch (error) {
    console.error('Error fetching todo:', error)
    return c.json({ error: 'Failed to fetch todo' }, 500)
  }
})

// POST /api/todos - Create a new todo
todosApi.post('/', async (c) => {
  try {
    const body = await c.req.json()

    if (!body.title || typeof body.title !== 'string') {
      return c.json({ error: 'Title is required and must be a string' }, 400)
    }

    if (body.title.trim().length === 0) {
      return c.json({ error: 'Title cannot be empty' }, 400)
    }

    if (body.title.trim().length > 255) {
      return c.json({ error: 'Title must be less than 255 characters' }, 400)
    }

    const db = new DatabaseService(c.env)
    const newTodo = await db.createTodo(body.title.trim())
    return c.json({ data: newTodo }, 201)
  } catch (error) {
    console.error('Error creating todo:', error)
    return c.json({ error: 'Failed to create todo' }, 500)
  }
})

// PUT /api/todos/:id - Update a todo
todosApi.put('/:id', async (c) => {
  try {
    const id = c.req.param('id')
    const body = await c.req.json()

    const db = new DatabaseService(c.env)

    // Check if todo exists first
    const existingTodo = await db.getTodo(id)
    if (!existingTodo) {
      return c.json({ error: 'Todo not found' }, 404)
    }

    const updatedTodo = await db.updateTodo(
      id,
      body.title !== undefined ? body.title : undefined,
      body.completed !== undefined ? body.completed : undefined
    )

    return c.json({ data: updatedTodo })
  } catch (error) {
    console.error('Error updating todo:', error)
    return c.json({ error: 'Failed to update todo' }, 500)
  }
})

// DELETE /api/todos/:id - Delete a todo
todosApi.delete('/:id', async (c) => {
  try {
    const id = c.req.param('id')
    const db = new DatabaseService(c.env)

    // Check if todo exists first
    const existingTodo = await db.getTodo(id)
    if (!existingTodo) {
      return c.json({ error: 'Todo not found' }, 404)
    }

    await db.deleteTodo(id)
    return c.json({ message: 'Todo deleted successfully' })
  } catch (error) {
    console.error('Error deleting todo:', error)
    return c.json({ error: 'Failed to delete todo' }, 500)
  }
})

// POST /api/todos/:id/toggle - Toggle todo completion status
todosApi.post('/:id/toggle', async (c) => {
  try {
    const id = c.req.param('id')
    const db = new DatabaseService(c.env)

    const updatedTodo = await db.toggleTodo(id)
    return c.json({ data: updatedTodo })
  } catch (error) {
    console.error('Error toggling todo:', error)
    if (error.message === 'Todo not found') {
      return c.json({ error: 'Todo not found' }, 404)
    }
    return c.json({ error: 'Failed to toggle todo' }, 500)
  }
})

export { todosApi }