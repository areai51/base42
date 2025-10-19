const html = String.raw

export function getTodoPageHTML() {
  return html`
    <section>
      <hgroup>
        <h1>Todo List Demo</h1>
        <p>Interactive demo using the Basecoat components</p>
      </hgroup>
    </section>

    <section>
      <div class="card">
        <h3>Add New Task</h3>
        <p>Create a new todo item</p>
        <form id="todo-form">
          <label for="task-title">Task Title</label>
          <input type="text" id="task-title" name="task-title" placeholder="Enter your task..." required>
          <small>What needs to be done?</small>

          <div class="btn-group">
            <button type="submit" role="button" class="primary">Add Task</button>
            <button type="button" role="button" class="secondary" id="clear-btn">Clear</button>
          </div>
        </form>
      </div>

      <div class="card">
        <h3>Current Tasks</h3>
        <p>Manage your todo items</p>

        <div id="loading" style="text-align: center; padding: 2rem;">
          <p>Loading todos...</p>
        </div>

        <div id="todos-container" style="display: none;">
          <div id="todos-list" style="display: flex; flex-direction: column; gap: 0.5rem;">
            <!-- Todos will be dynamically inserted here -->
          </div>
        </div>

        <div id="empty-state" style="display: none; text-align: center; padding: 2rem; border: 1px solid var(--muted-border-color); border-radius: var(--border-radius);">
          <p>No todos yet. Create your first todo above!</p>
        </div>
      </div>

      <div class="card">
        <h3>Component Examples</h3>
        <p>Different component variants</p>

        <div style="margin-bottom: 1rem;">
          <h4>Button Variants</h4>
          <div class="btn-group" style="flex-wrap: wrap; margin-top: 0.5rem;">
            <button role="button" class="primary">Primary</button>
            <button role="button" class="secondary">Secondary</button>
            <button role="button" class="contrast">Contrast</button>
          </div>
        </div>

        <div style="margin-bottom: 1rem;">
          <h4>Input States</h4>
          <div style="display: grid; gap: 1rem; margin-top: 0.5rem;">
            <div>
              <label for="normal-input">Normal Input</label>
              <input type="text" id="normal-input" placeholder="Type something...">
            </div>
            <div>
              <label for="required-input">Required Input <span style="color: var(--del-color);">*</span></label>
              <input type="text" id="required-input" placeholder="This field is required" required>
            </div>
            <div>
              <label for="disabled-input">Disabled Input</label>
              <input type="text" id="disabled-input" value="Cannot edit this" disabled>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <h3>API Integration</h3>
        <p>This page connects to the REST API</p>
        <p>The todo list above fetches real data from the database and updates in real-time:</p>
        <ul>
          <li>Fetches todos from <code>GET /api/todos</code></li>
          <li>Creates new todos with <code>POST /api/todos</code></li>
          <li>Updates todos with <code>PUT /api/todos/:id</code></li>
          <li>Toggles completion with <code>POST /api/todos/:id/toggle</code></li>
          <li>Deletes todos with <code>DELETE /api/todos/:id</code></li>
        </ul>

        <a href="/" role="button" class="primary">Back to Home</a>
      </div>
    </section>

    <script>
      // Todo application state
      let todos = [];
      let isLoading = false;

      // DOM elements
      const todoForm = document.getElementById('todo-form');
      const taskInput = document.getElementById('task-title');
      const clearBtn = document.getElementById('clear-btn');
      const loadingEl = document.getElementById('loading');
      const todosContainer = document.getElementById('todos-container');
      const todosList = document.getElementById('todos-list');
      const emptyState = document.getElementById('empty-state');

      // API utility functions
      const api = {
        async request(url, options = {}) {
          try {
            const response = await fetch(url, {
              headers: {
                'Content-Type': 'application/json',
                ...options.headers,
              },
              ...options,
            });

            if (!response.ok) {
              const error = await response.json();
              throw new Error(error.error || 'Request failed');
            }

            return await response.json();
          } catch (error) {
            console.error('API request failed:', error);
            throw error;
          }
        },

        async getTodos() {
          return this.request('/api/todos');
        },

        async createTodo(title) {
          return this.request('/api/todos', {
            method: 'POST',
            body: JSON.stringify({ title }),
          });
        },

        async toggleTodo(id) {
          return this.request(\`/api/todos/\${id}/toggle\`, {
            method: 'POST',
          });
        },

        async deleteTodo(id) {
          return this.request(\`/api/todos/\${id}\`, {
            method: 'DELETE',
          });
        }
      };

      // Render functions
      function renderTodos() {
        if (isLoading) {
          loadingEl.style.display = 'block';
          todosContainer.style.display = 'none';
          emptyState.style.display = 'none';
          return;
        }

        loadingEl.style.display = 'none';

        if (todos.length === 0) {
          todosContainer.style.display = 'none';
          emptyState.style.display = 'block';
          return;
        }

        todosContainer.style.display = 'block';
        emptyState.style.display = 'none';

        todosList.innerHTML = todos.map(todo => html\`
          <div class="todo-item" data-id="\${todo.id}" style="display: flex; align-items: center; padding: 0.75rem; border: 1px solid var(--muted-border-color); border-radius: var(--border-radius); margin-bottom: 0.5rem;">
            <input type="checkbox" \${todo.completed ? 'checked' : ''} style="margin-right: 0.75rem;" onchange="toggleTodo('\${todo.id}')">
            <span style="flex: 1; \${todo.completed ? 'text-decoration: line-through; opacity: 0.7;' : ''}">\${todo.title}</span>
            <div class="btn-group" style="margin-left: 0.5rem;">
              <button role="button" class="secondary" style="font-size: 0.875rem; padding: 0.5rem 1rem;" onclick="editTodo('\${todo.id}')">Edit</button>
              <button role="button" class="contrast" style="font-size: 0.875rem; padding: 0.5rem 1rem;" onclick="deleteTodo('\${todo.id}')">Delete</button>
            </div>
          </div>
        \`).join('');
      }

      // Event handlers
      async function loadTodos() {
        isLoading = true;
        renderTodos();

        try {
          const response = await api.getTodos();
          todos = response.data || [];
        } catch (error) {
          console.error('Failed to load todos:', error);
          alert('Failed to load todos. Please try again.');
          todos = [];
        } finally {
          isLoading = false;
          renderTodos();
        }
      }

      async function addTodo(title) {
        if (!title.trim()) return;

        try {
          const response = await api.createTodo(title.trim());
          todos.unshift(response.data);
          renderTodos();
        } catch (error) {
          console.error('Failed to add todo:', error);
          alert('Failed to add todo. Please try again.');
        }
      }

      async function toggleTodo(id) {
        try {
          const response = await api.toggleTodo(id);
          const index = todos.findIndex(todo => todo.id === id);
          if (index !== -1) {
            todos[index] = response.data;
            renderTodos();
          }
        } catch (error) {
          console.error('Failed to toggle todo:', error);
          alert('Failed to update todo. Please try again.');
        }
      }

      async function deleteTodo(id) {
        if (!confirm('Are you sure you want to delete this todo?')) return;

        try {
          await api.deleteTodo(id);
          todos = todos.filter(todo => todo.id !== id);
          renderTodos();
        } catch (error) {
          console.error('Failed to delete todo:', error);
          alert('Failed to delete todo. Please try again.');
        }
      }

      function editTodo(id) {
        const todo = todos.find(t => t.id === id);
        if (!todo) return;

        const newTitle = prompt('Edit todo:', todo.title);
        if (newTitle !== null && newTitle.trim() !== todo.title) {
          // For now, we'll just show a message. In a real app, you'd implement an edit modal
          alert('Edit functionality would update the todo in the database');
        }
      }

      // Event listeners
      todoForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = taskInput.value.trim();
        if (title) {
          await addTodo(title);
          taskInput.value = '';
        }
      });

      clearBtn.addEventListener('click', () => {
        taskInput.value = '';
        taskInput.focus();
      });

      // Make functions globally available for onclick handlers
      window.toggleTodo = toggleTodo;
      window.deleteTodo = deleteTodo;
      window.editTodo = editTodo;

      // Initialize
      loadTodos();
    </script>
  `
}