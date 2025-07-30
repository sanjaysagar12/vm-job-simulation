import SceneTemplate, { useSceneNavigation } from "../../global/components/SceneTemplate";
import type { SceneInputField } from "../../global/components/SceneTemplate";
import { storyEntries, requirementsMarkdown } from "./model/scene6Content";
import { mailConvo, createUserMail, createProjectFileReviewMail } from "./model/scene6MailConvo";

const inputFields: SceneInputField[] = [
  {
    label: "db_operations.py with Database Functions",
    name: "dbOperationsContent",
    filename: "backend/db_operations.py",
    placeholder: `import sqlite3
from datetime import datetime

DATABASE = 'support_requests.db'

def get_db_connection():
    """Get database connection with row factory"""
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    """Initialize the database and create tables"""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Create requests table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS requests (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject TEXT NOT NULL,
            description TEXT NOT NULL,
            category TEXT DEFAULT 'Uncategorized',
            summary TEXT DEFAULT 'AI Analyzing...',
            suggested_response TEXT DEFAULT 'Pending AI analysis',
            agent_resolved BOOLEAN DEFAULT FALSE,
            timestamp TEXT NOT NULL,
            status TEXT DEFAULT 'New'
        )
    ''')
    
    conn.commit()
    conn.close()
    print("Database initialized successfully!")`,
    required: true,
    rows: 12,
    description: "Implement database connection and initialization functions using SQLite.",
  },
  {
    label: "Updated app.py with Database Integration",
    name: "appContent",
    filename: "backend/app.py",
    placeholder: `from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from db_operations import init_db

# Create Flask application
app = Flask(__name__)

# Configure CORS
CORS(app)

# Root route to serve the frontend
@app.route('/')
def index():
    return render_template('index.html')

# API route to handle form submissions
@app.route('/submit_request', methods=['POST'])
def submit_request():
    if request.is_json:
        data = request.get_json()
        subject = data.get('subject')
        description = data.get('description')
        
        # Print to console for now
        print(f"Received request - Subject: {subject}, Description: {description}")
        
        return jsonify({"status": "received"}), 200
    else:
        return jsonify({"error": "Request must be JSON"}), 400

if __name__ == '__main__':
    # Initialize database before starting the app
    init_db()
    app.run(host='0.0.0.0', port=5000, debug=True)`,
    required: true,
    rows: 10,
    description: "Update Flask app to import and call init_db() before starting the server.",
  },
];

function Scene6Page() {
  const { navigateToScene } = useSceneNavigation();

  return (
    <SceneTemplate
      storyEntries={storyEntries}
      requirementsMarkdown={requirementsMarkdown}
      mailConvo={mailConvo}
      createUserMail={(inputs, mailConvoLength) =>
        createUserMail(inputs.dbOperationsContent, inputs.appContent, mailConvoLength)
      }
      createReviewMail={async (inputs) => createProjectFileReviewMail(inputs.dbOperationsContent, inputs.appContent)}
      inputFields={inputFields}
      title="Database Setup (SQLite) via db_operations.py"
      objective="Integrate a SQLite database into your Flask application and define the table structure for storing support requests, with database operations separated into db_operations.py."
      sceneId="scene6"
    >
      <p className="text-sm text-gray-700 mb-4">
        Perfect! Your database is initialized and ready to store customer support requests.
      </p>
      <button
        onClick={() => navigateToScene("scene7")}
        className="bg-green-600 text-white px-6 py-3 text-sm font-medium rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Continue to Next Scene
      </button>
    </SceneTemplate>
  );
}

export default Scene6Page;
