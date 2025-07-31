// Story entries for Scene 5
export const storyEntries = [
  {
    text: "Congratulations! Your frontend form is working beautifully. The validation catches errors, the styling is professional, and the user experience is smooth. The VelsyMedia team is impressed!",
    size: "1.6rem",
    speed: 50
  },
  {
    text: 'Priya: "Excellent work on the frontend! Now we need to refactor and establish the backend that will serve this form and handle API requests. Time for Task 2.1: Backend API Setup & Frontend Integration."',
    size: "1.7rem",
    speed: 48
  },
  {
    text: "(This is where we establish proper separation of concerns - Flask will serve your frontend and handle the backend logic!)",
    size: "1.4rem",
    speed: 45
  },
  {
    text: "Task 2.1: Backend API Setup (Python Flask) & Frontend Integration\nObjective: Set up Flask to serve the frontend from its final location and handle API requests, with proper module separation for database operations.",
    size: "1.5rem",
    speed: 45
  },
  {
    text: 'Priya: "We need to refactor your frontend files into the backend structure. Move index.html to backend/templates/, move CSS and JS to backend/static/, and create a Flask app to serve them properly using Flask templating."',
    size: "1.4rem",
    speed: 45
  },
  {
    text: 'Senior Developer: "Create db_operations.py for future database functions, set up proper Flask routing with render_template, and ensure static assets work correctly with url_for. This is production-ready architecture."',
    size: "1.4rem",
    speed: 45
  },
  {
    text: "Your Action: Refactor the project structure and create a Flask application that properly serves your frontend with separation of concerns.",
    size: "1.4rem",
    speed: 45
  }
];

export const requirementsMarkdown = `
### Backend API Setup (Python Flask) & Frontend Integration
- Objective: Set up Flask to serve the frontend and handle API requests, with proper file organization and module separation.

#### Refactor Frontend Files:
- Create the \`backend\` folder (if it doesn't exist).
- Inside \`backend/\`, create two new subfolders: \`templates\` and \`static\`.
- Move \`index.html\` from \`frontend/\` to \`backend/templates/\`.
- Move \`style.css\` from \`frontend/\` to \`backend/static/\`.
- Move \`script.js\` from \`frontend/\` to \`backend/static/\`.
- You can now delete the empty \`frontend/\` folder from the project root.

#### Set Up Virtual Environment:
- Create and activate a virtual environment (venv) from your project root.
- Install Flask & Flask-CORS: With venv active, install Flask and Flask-CORS.

#### Create db_operations.py:
- Inside your \`backend/\` folder, create \`db_operations.py\`.
- This file will be empty for now, but will eventually hold DB functions.

#### Create/Modify app.py:
- Inside \`backend/\`, create \`app.py\` (if it doesn't exist).
- Import Flask, request, jsonify, and render_template from flask.
- Import CORS from flask_cors.
- Initialize Flask app and CORS(app).
- Define a root route (\`/\`) that uses \`return render_template('index.html')\`.
- Define a POST route \`/submit_request\`. For this task, it should just confirm it receives JSON (\`request.is_json\`), extract subject and description, print them to the console, and return a JSON success response \`{"status": "received"}\`.
- Include \`if __name__ == '__main__':\` to run on port 5000.

#### Update index.html & script.js for Flask Serving:
- Open \`backend/templates/index.html\`.
- Update the link to style.css: \`<link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">\`.
- Update the link to script.js: \`<script src="{{ url_for('static', filename='script.js') }}"></script>\`.

#### Run Backend:
- Run \`app.py\` from your backend folder.
- Access \`http://127.0.0.1:5000/\` in your browser.
- Confirm that the styled frontend form is now rendered correctly by Flask.
`;
