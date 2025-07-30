// Story entries for Scene 6
export const storyEntries = [
  {
    text: "Excellent! Your Flask backend is now correctly hosting the frontend. The refactoring looks good, and the Flask server is serving your form properly. That's exactly how we build scalable full-stack apps!",
    size: "1.6rem",
    speed: 50
  },
  {
    text: 'Priya: "Perfect setup! Now that we have our backend server, the next crucial step is data persistence. Our current system loses all requests on restart. We need to set up a database to reliably store every incoming customer request."',
    size: "1.7rem",
    speed: 48
  },
  {
    text: "(This is where your portal gets its memory - no more losing customer data when the server restarts!)",
    size: "1.4rem",
    speed: 45
  },
  {
    text: "Task 2.2: Database Setup (SQLite) via db_operations.py\nObjective: Integrate a SQLite database into your Flask application and define the table structure for storing support requests, with database operations separated into db_operations.py.",
    size: "1.5rem",
    speed: 45
  },
  {
    text: 'Priya: "For our MVP, we\'ll use SQLite - excellent for rapid development and learning. You\'ll implement get_db_connection() and init_db() functions in db_operations.py, then integrate the database initialization into app.py."',
    size: "1.4rem",
    speed: 45
  },
  {
    text: 'Senior Developer: "The requests table needs comprehensive fields: id, subject, description, category, summary, suggested_response, agent_resolved, timestamp, and status. This will support the full customer support workflow."',
    size: "1.4rem",
    speed: 45
  },
  {
    text: "Your Action: Set up the database foundation that will give your support portal persistent memory.",
    size: "1.4rem",
    speed: 45
  }
];

export const requirementsMarkdown = `
### Database Setup (SQLite) via db_operations.py
- Objective: Integrate a SQLite database into your Flask application and define the table structure for storing support requests, with database operations separated into db_operations.py.

#### Modify db_operations.py:
- Import \`sqlite3\` and \`datetime\`
- Define \`DATABASE = 'support_requests.db'\`
- Create the \`get_db_connection()\` function to connect to DATABASE and set \`conn.row_factory = sqlite3.Row\`
- Create the \`init_db()\` function that:
  - Obtains a connection using \`get_db_connection()\`
  - Uses a cursor to execute SQL CREATE TABLE IF NOT EXISTS statement
  - Creates \`requests\` table with columns:
    - \`id\` (INTEGER PRIMARY KEY AUTOINCREMENT)
    - \`subject\` (TEXT NOT NULL)
    - \`description\` (TEXT NOT NULL)
    - \`category\` (TEXT DEFAULT 'Uncategorized')
    - \`summary\` (TEXT DEFAULT 'AI Analyzing...')
    - \`suggested_response\` (TEXT DEFAULT 'Pending AI analysis')
    - \`agent_resolved\` (BOOLEAN DEFAULT FALSE)
    - \`timestamp\` (TEXT NOT NULL)
    - \`status\` (TEXT DEFAULT 'New')
  - Commits and closes the connection

#### Modify app.py:
- Import \`init_db\` from \`db_operations\`: \`from db_operations import init_db\`
- Call \`init_db()\` within the \`if __name__ == '__main__':\` block before \`app.run()\`
- This ensures the database is created when the app starts

#### Expected Results:
- Run \`app.py\` and watch \`support_requests.db\` appear in your backend folder
- Verify the schema using DB Browser for SQLite or similar tool
- The empty \`requests\` table should be ready to store data
- Database initialization happens automatically when Flask starts
`;
