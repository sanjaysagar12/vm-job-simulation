// Expected requirements for Scene 6 SQLite database setup
export const expectedDbOperationsRequirements = `
The db_operations.py file should contain:
- SQLite3 import and database connection function get_db_connection()
- Row factory configuration for dictionary-like access: conn.row_factory = sqlite3.Row
- Database initialization function init_db() that creates the requests table
- Proper table schema with id (INTEGER PRIMARY KEY AUTOINCREMENT), subject (TEXT NOT NULL), description (TEXT NOT NULL)
- Additional fields: category (TEXT DEFAULT 'Uncategorized'), summary (TEXT DEFAULT 'AI Analyzing...'), suggested_response (TEXT DEFAULT 'Pending AI analysis')
- Status tracking fields: agent_resolved (BOOLEAN DEFAULT FALSE), timestamp (TEXT NOT NULL), status (TEXT DEFAULT 'New')
- Proper connection handling with commit() and close() operations
- Error handling and informative print statements
- Clean, well-structured functions following Python best practices
`;

export const expectedAppUpdateRequirements = `
The updated app.py file should contain:
- Import of init_db from db_operations module
- Database initialization call init_db() before app.run()
- All previous functionality preserved (Flask, CORS, routes, etc.)
- Proper integration without breaking existing features
- Clean code structure with proper imports
- The database initialization should happen in the main block before starting the server
- No changes to existing routes and functionality
`;
