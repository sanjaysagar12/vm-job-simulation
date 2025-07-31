import SceneTemplate, { useSceneNavigation } from "../../global/components/SceneTemplate";
import type { SceneInputField } from "../../global/components/SceneTemplate";
import { storyEntries, requirementsMarkdown } from "./model/scene5Content";
import { mailConvo, createUserMail, createProjectFileReviewMail } from "./model/scene5MailConvo";

const inputFields: SceneInputField[] = [
  {
    label: "Flask app.py",
    name: "appContent",
    filename: "backend/app.py",
    placeholder: `from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

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
    app.run(host='0.0.0.0', port=5000, debug=True)`,
    required: true,
    rows: 12,
    description: "Create Flask app that serves the frontend and handles form submissions.",
  },
  {
    label: "Empty db_operations.py",
    name: "dbOperationsContent",
    filename: "backend/db_operations.py",
    placeholder: `# Database operations module
# This file will contain database functions in future tasks

# TODO: Add database connection functions
# TODO: Add CRUD operations
# TODO: Add data validation functions

pass`,
    required: true,
    rows: 4,
    description: "Create empty db_operations.py file for future database functions.",
  },
  {
    label: "Updated index.html (Flask templating)",
    name: "indexContent",
    filename: "backend/templates/index.html",
    placeholder: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Customer Support Portal - VelsyMedia</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>VelsyMedia Customer Support</h1>
            <p>How can we help you today?</p>
        </div>
        
        <form id="supportForm" class="support-form">
            <div class="form-group">
                <label for="subject">Subject *</label>
                <input type="text" id="subject" name="subject" required 
                       placeholder="Brief description of your issue">
                <span class="error-message" id="subjectError"></span>
            </div>
            
            <div class="form-group">
                <label for="description">Description *</label>
                <textarea id="description" name="description" required 
                          placeholder="Please provide detailed information about your issue"
                          rows="5"></textarea>
                <span class="error-message" id="descriptionError"></span>
            </div>
            
            <button type="submit">Submit Request</button>
        </form>
    </div>
    
    <script src="{{ url_for('static', filename='script.js') }}"></script>
</body>
</html>`,
    required: true,
    rows: 10,
    description: "Update HTML to use Flask templating with url_for for static assets.",
  },
  {
    label: "requirements.txt",
    name: "requirementsContent",
    filename: "backend/requirements.txt",
    placeholder: `Flask>=2.3.0
Flask-CORS>=4.0.0`,
    required: true,
    rows: 3,
    description: "List the required Python packages for the Flask application.",
  },
];

function Scene5Page() {
  const { navigateToScene } = useSceneNavigation();

  return (
    <SceneTemplate
      storyEntries={storyEntries}
      requirementsMarkdown={requirementsMarkdown}
      mailConvo={mailConvo}
      createUserMail={(inputs, mailConvoLength) =>
        createUserMail(inputs.appContent, inputs.dbOperationsContent, inputs.indexContent, inputs.requirementsContent, mailConvoLength)
      }
      createReviewMail={async (inputs) => createProjectFileReviewMail(inputs.appContent, inputs.dbOperationsContent, inputs.indexContent, inputs.requirementsContent)}
      inputFields={inputFields}
      title="Backend API Setup & Frontend Integration"
      objective="Set up Flask to serve the frontend from its final location and handle API requests, with proper module separation for database operations."
      sceneId="scene5"
    >
      <p className="text-sm text-gray-700 mb-4">
        Excellent! Your Flask backend is now serving the frontend properly with clean architecture.
      </p>
      <button
        onClick={() => navigateToScene("scene6")}
        className="bg-green-600 text-white px-6 py-3 text-sm font-medium rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Continue to Next Scene
      </button>
    </SceneTemplate>
  );
}

export default Scene5Page;
