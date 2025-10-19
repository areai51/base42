# Database Setup Guide

This document explains how to set up and use the database functionality in Base42.

## 🚀 Quick Setup

### 1. Configure Environment Variables

Make sure your `.env` file contains the database URL:

```env
DATABASE_URL=postgresql://neondb_owner:npg_g0FH5iuphYWQ@ep-autumn-frog-a82r85vo-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require
```

### 2. Execute Database Schema

Run the database setup script to create the todos table and insert sample data:

```bash
npm run setup-db
```

This will:
- Create the `todos` table with proper indexes
- Add triggers for automatic timestamp updates
- Insert sample todo data
- Show confirmation of successful setup

### 3. Start the Application

```bash
npm run dev
```

Navigate to `http://localhost:8787/todo` to see the working todo application.

## 📊 Database Schema

### Todos Table Structure

```sql
CREATE TABLE todos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Features

- **UUID Primary Keys**: Each todo gets a unique identifier
- **Automatic Timestamps**: `created_at` and `updated_at` are managed automatically
- **Performance Indexes**: Indexes on `completed` and `created_at` fields
- **Data Integrity**: Proper constraints and validation

## 🔌 API Endpoints

The todo system provides the following API endpoints:

### Get All Todos
```
GET /api/todos
```

### Create Todo
```
POST /api/todos
Content-Type: application/json

{
  "title": "Your todo title"
}
```

### Toggle Todo Completion
```
POST /api/todos/{id}/toggle
```

### Delete Todo
```
DELETE /api/todos/{id}
```

### Get Specific Todo
```
GET /api/todos/{id}
```

### Update Todo
```
PUT /api/todos/{id}
Content-Type: application/json

{
  "title": "Updated title",
  "completed": true
}
```

## 🎯 Frontend Features

The todo page at `/todo` includes:

- **Real-time Data Fetching**: Automatically loads todos from the database
- **CRUD Operations**: Create, Read, Update, Delete todos
- **Responsive Design**: Works on all screen sizes
- **Error Handling**: User-friendly error messages
- **Loading States**: Visual feedback during API calls
- **Confirmation Dialogs**: Safe deletion with confirmation

## 🛠️ Development

### Adding New Database Tables

1. Create a migration script in `db/` directory
2. Update the database service in `src/db/database.ts`
3. Add corresponding API endpoints
4. Build frontend components

### Database Service Pattern

The `DatabaseService` class provides a clean interface for database operations:

```typescript
const db = new DatabaseService(env);
const todos = await db.getTodos();
```

### Error Handling

All database operations include comprehensive error handling:

- Database connection errors
- Query validation
- Proper HTTP status codes
- User-friendly error messages

## 🔒 Security Considerations

- Input validation on all API endpoints
- SQL injection prevention through parameterized queries
- CORS configuration for cross-origin requests
- Environment variable protection for sensitive data

## 🧪 Testing

To test the database functionality:

1. Run the setup script: `npm run setup-db`
2. Start the dev server: `npm run dev`
3. Visit `/todo` and test all operations
4. Check browser console for any errors
5. Verify data persistence across page refreshes

## 📝 Notes

- The database is connected via HTTP requests to your Neon database
- All operations are asynchronous and handle network errors gracefully
- The application works with or without a database (falls back gracefully)
- Sample data is provided for easy testing and demonstration