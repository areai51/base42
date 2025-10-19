import type { Env } from '../types'

interface Todo {
  id: string
  title: string
  completed: boolean
  created_at: string
  updated_at: string
}

export class DatabaseService {
  private env: Env

  constructor(env: Env) {
    this.env = env
  }

  async getTodos(): Promise<Todo[]> {
    if (!this.env.DATABASE_URL) {
      throw new Error('DATABASE_URL is not configured')
    }

    try {
      const response = await fetch(this.env.DATABASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            SELECT id, title, completed, created_at, updated_at
            FROM todos
            ORDER BY created_at DESC
          `,
        }),
      })

      if (!response.ok) {
        throw new Error(`Database query failed: ${response.statusText}`)
      }

      const result = await response.json()
      return result.rows || []
    } catch (error) {
      console.error('Error fetching todos:', error)
      throw error
    }
  }

  async getTodo(id: string): Promise<Todo | null> {
    if (!this.env.DATABASE_URL) {
      throw new Error('DATABASE_URL is not configured')
    }

    try {
      const response = await fetch(this.env.DATABASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            SELECT id, title, completed, created_at, updated_at
            FROM todos
            WHERE id = $1
          `,
          params: [id],
        }),
      })

      if (!response.ok) {
        throw new Error(`Database query failed: ${response.statusText}`)
      }

      const result = await response.json()
      return result.rows?.[0] || null
    } catch (error) {
      console.error('Error fetching todo:', error)
      throw error
    }
  }

  async createTodo(title: string): Promise<Todo> {
    if (!this.env.DATABASE_URL) {
      throw new Error('DATABASE_URL is not configured')
    }

    try {
      const response = await fetch(this.env.DATABASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            INSERT INTO todos (title, completed)
            VALUES ($1, $2)
            RETURNING id, title, completed, created_at, updated_at
          `,
          params: [title.trim(), false],
        }),
      })

      if (!response.ok) {
        throw new Error(`Database query failed: ${response.statusText}`)
      }

      const result = await response.json()
      return result.rows[0]
    } catch (error) {
      console.error('Error creating todo:', error)
      throw error
    }
  }

  async updateTodo(id: string, title?: string, completed?: boolean): Promise<Todo> {
    if (!this.env.DATABASE_URL) {
      throw new Error('DATABASE_URL is not configured')
    }

    const updates = []
    const params = []
    let paramIndex = 1

    if (title !== undefined) {
      updates.push(`title = $${paramIndex++}`)
      params.push(title.trim())
    }

    if (completed !== undefined) {
      updates.push(`completed = $${paramIndex++}`)
      params.push(completed)
    }

    if (updates.length === 0) {
      throw new Error('No fields to update')
    }

    params.push(id)

    try {
      const response = await fetch(this.env.DATABASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            UPDATE todos
            SET ${updates.join(', ')}
            WHERE id = $${paramIndex}
            RETURNING id, title, completed, created_at, updated_at
          `,
          params,
        }),
      })

      if (!response.ok) {
        throw new Error(`Database query failed: ${response.statusText}`)
      }

      const result = await response.json()
      return result.rows[0]
    } catch (error) {
      console.error('Error updating todo:', error)
      throw error
    }
  }

  async deleteTodo(id: string): Promise<void> {
    if (!this.env.DATABASE_URL) {
      throw new Error('DATABASE_URL is not configured')
    }

    try {
      const response = await fetch(this.env.DATABASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            DELETE FROM todos
            WHERE id = $1
          `,
          params: [id],
        }),
      })

      if (!response.ok) {
        throw new Error(`Database query failed: ${response.statusText}`)
      }
    } catch (error) {
      console.error('Error deleting todo:', error)
      throw error
    }
  }

  async toggleTodo(id: string): Promise<Todo> {
    // First get the current todo to check its completed status
    const todo = await this.getTodo(id)
    if (!todo) {
      throw new Error('Todo not found')
    }

    // Toggle the completed status
    return await this.updateTodo(id, undefined, !todo.completed)
  }
}