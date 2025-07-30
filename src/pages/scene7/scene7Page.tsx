import SceneTemplate, { useSceneNavigation } from "../../global/components/SceneTemplate";
import type { SceneInputField } from "../../global/components/SceneTemplate";
import { storyEntries, requirementsMarkdown } from "./model/scene7Content";
import { mailConvo, createUserMail, createProjectFileReviewMail } from "./model/scene7MailConvo";

const inputFields: SceneInputField[] = [
  {
    label: "Enhanced db_operations.py with Data Storage Functions",
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
    print("Database initialized successfully!")

def insert_initial_request(subject, description):
    """Insert a new support request with sanitized input"""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Input validation and sanitization
    subject = subject.strip() if subject else ""
    description = description.strip() if description else ""
    
    if not subject or not description:
        conn.close()
        return False, "Subject and description are required"
    
    if len(subject) > 200:
        conn.close()
        return False, "Subject must be less than 200 characters"
    
    timestamp = datetime.now().isoformat()
    
    try:
        cursor.execute('''
            INSERT INTO requests (subject, description, timestamp)
            VALUES (?, ?, ?)
        ''', (subject, description, timestamp))
        
        conn.commit()
        request_id = cursor.lastrowid
        conn.close()
        
        print(f"Request inserted successfully with ID: {request_id}")
        return True, request_id
    except sqlite3.Error as e:
        conn.close()
        print(f"Database error: {e}")
        return False, str(e)

def update_request_with_ai_results(request_id, summary, suggested_response, category="General"):
    """Update request with AI-generated analysis results"""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    try:
        cursor.execute('''
            UPDATE requests 
            SET summary = ?, suggested_response = ?, category = ?
            WHERE id = ?
        ''', (summary, suggested_response, category, request_id))
        
        if cursor.rowcount == 0:
            conn.close()
            return False, "Request not found"
        
        conn.commit()
        conn.close()
        
        print(f"Request {request_id} updated with AI results")
        return True, "Updated successfully"
    except sqlite3.Error as e:
        conn.close()
        print(f"Database error: {e}")
        return False, str(e)`,
    required: true,
    rows: 15,
    description: "Add data insertion and update functions with proper validation and error handling.",
  },
  {
    label: "Updated app.py with Data Storage Endpoints",
    name: "appContent",
    filename: "backend/app.py",
    placeholder: `from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from db_operations import init_db, insert_initial_request, update_request_with_ai_results

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
        
        # Insert into database
        success, result = insert_initial_request(subject, description)
        
        if success:
            request_id = result
            
            # Simulate AI processing (placeholder for now)
            ai_summary = f"AI-generated summary for: {subject[:50]}..."
            ai_response = f"Suggested response based on: {description[:100]}..."
            
            # Update with AI results
            update_success, update_result = update_request_with_ai_results(
                request_id, ai_summary, ai_response, "General"
            )
            
            if update_success:
                return jsonify({
                    "status": "success",
                    "message": "Request stored and analyzed successfully",
                    "request_id": request_id
                }), 200
            else:
                return jsonify({
                    "status": "partial_success",
                    "message": "Request stored but AI analysis failed",
                    "request_id": request_id,
                    "error": update_result
                }), 200
        else:
            return jsonify({
                "status": "error",
                "message": "Failed to store request",
                "error": result
            }), 400
    else:
        return jsonify({"error": "Request must be JSON"}), 400

if __name__ == '__main__':
    # Initialize database before starting the app
    init_db()
    app.run(host='0.0.0.0', port=5000, debug=True)`,
    required: true,
    rows: 12,
    description: "Update Flask app to use database storage functions with proper API responses.",
  },
];

function Scene7Page() {
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
      title="Store Data in Database with Validation"
      objective="Implement database storage functions with proper validation, sanitization, and error handling for the support request system."
      sceneId="scene7"
    >
      <p className="text-sm text-gray-700 mb-4">
        Excellent! Your data storage system is now complete with validation and error handling.
      </p>
      <button
        onClick={() => navigateToScene("scene8")}
        className="bg-green-600 text-white px-6 py-3 text-sm font-medium rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Continue to Next Scene
      </button>
    </SceneTemplate>
  );
}

export default Scene7Page;
