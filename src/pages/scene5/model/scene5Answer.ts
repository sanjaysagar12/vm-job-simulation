// Expected requirements for Scene 5 Flask Backend Setup & Frontend Integration
export const expectedAppRequirements = `
The app.py file should contain:
- Flask, request, jsonify, and render_template imports from flask
- CORS import from flask_cors and CORS(app) configuration
- Flask application initialization with app = Flask(__name__)
- Root route (@app.route('/')) that returns render_template('index.html')
- POST route @app.route('/submit_request', methods=['POST']) that checks request.is_json, extracts subject and description, prints to console, and returns JSON success response {"status": "received"}
- if __name__ == '__main__': block to run on port 5000 with debug=True
- Proper error handling for non-JSON requests returning appropriate error messages
`;

export const expectedDbOperationsRequirements = `
The db_operations.py file should contain:
- Comments indicating this is for database operations module
- TODO comments for future database functions (connection, CRUD, validation)
- Empty file structure with pass statement or placeholder comments
- Proper Python file structure ready for future database implementation
- Clean module organization for separation of concerns
`;

export const expectedIndexRequirements = `
The index.html file should contain:
- Flask templating syntax for static assets using url_for
- {{ url_for('static', filename='style.css') }} for CSS link in head section
- {{ url_for('static', filename='script.js') }} for JavaScript script before closing body
- Complete HTML structure with proper DOCTYPE and meta tags
- Form elements with proper IDs and structure for subject and description
- Error message spans for client-side validation
- All existing form functionality preserved but adapted for Flask templating
- Proper semantic HTML structure with container and form groups
`;

export const expectedRequirementsRequirements = `
The requirements.txt file should contain:
- Flask>=2.3.0 dependency for the web framework
- Flask-CORS>=4.0.0 dependency for cross-origin requests
- Proper version specifications using >= notation
- Clean format with one dependency per line
- No unnecessary dependencies for this basic setup
- Compatible versions that work together
`;
