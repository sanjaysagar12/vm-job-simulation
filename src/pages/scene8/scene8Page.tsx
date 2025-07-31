import SceneTemplate, { useSceneNavigation } from "../../global/components/SceneTemplate";
import type { SceneInputField } from "../../global/components/SceneTemplate";
import { storyEntries, requirementsMarkdown } from "./model/scene8Content";
import { mailConvo, createUserMail, createProjectFileReviewMail } from "./model/scene8MailConvo";

const inputFields: SceneInputField[] = [
  {
    label: "Frontend JavaScript with fetch() API",
    name: "javascriptContent",
    filename: "frontend/static/script.js",
    placeholder: `document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('support-form');
    const messageDiv = document.getElementById('message');
    const submitButton = document.getElementById('submit-btn');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = {
            subject: formData.get('subject'),
            description: formData.get('description')
        };
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';
        messageDiv.innerHTML = '';
        
        try {
            // Send data to Flask backend
            const response = await fetch('/submit_request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            
            if (response.ok && result.status === 'success') {
                // Success
                messageDiv.innerHTML = \`
                    <div class="alert alert-success">
                        <strong>Success!</strong> \${result.message}
                        <br>Request ID: \${result.request_id}
                    </div>
                \`;
                form.reset();
            } else {
                // API error
                messageDiv.innerHTML = \`
                    <div class="alert alert-error">
                        <strong>Error:</strong> \${result.message || result.error || 'Something went wrong'}
                    </div>
                \`;
            }
        } catch (error) {
            // Network error
            messageDiv.innerHTML = \`
                <div class="alert alert-error">
                    <strong>Network Error:</strong> Unable to connect to server. Please try again.
                </div>
            \`;
            console.error('Network error:', error);
        } finally {
            // Reset button state
            submitButton.disabled = false;
            submitButton.textContent = 'Submit Request';
        }
    });
});`,
    required: true,
    rows: 15,
    description: "Implement JavaScript to connect the form to Flask backend using fetch API.",
  },
  {
    label: "Updated HTML Template with Message Areas",
    name: "htmlContent",
    filename: "frontend/templates/index.html",
    placeholder: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Customer Support Portal</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input, textarea { width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; }
        button { background: #007bff; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; }
        button:hover { background: #0056b3; }
        button:disabled { background: #6c757d; cursor: not-allowed; }
        .alert { padding: 15px; margin: 15px 0; border-radius: 4px; }
        .alert-success { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .alert-error { background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
    </style>
</head>
<body>
    <h1>Smart Customer Support Portal</h1>
    <p>Submit your support request and our AI will analyze it for faster resolution.</p>
    
    <!-- Message display area -->
    <div id="message"></div>
    
    <form id="support-form">
        <div class="form-group">
            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required maxlength="200">
        </div>
        
        <div class="form-group">
            <label for="description">Description:</label>
            <textarea id="description" name="description" rows="5" required maxlength="2000"></textarea>
        </div>
        
        <button type="submit" id="submit-btn">Submit Request</button>
    </form>
    
    <script src="{{ url_for('static', filename='script.js') }}"></script>
</body>
</html>`,
    required: true,
    rows: 12,
    description: "Update HTML template to include message display areas and proper form structure.",
  },
];

function Scene8Page() {
  const { navigateToScene } = useSceneNavigation();

  return (
    <SceneTemplate
      storyEntries={storyEntries}
      requirementsMarkdown={requirementsMarkdown}
      mailConvo={mailConvo}
      createUserMail={(inputs, mailConvoLength) =>
        createUserMail(inputs.javascriptContent, inputs.htmlContent, mailConvoLength)
      }
      createReviewMail={async (inputs) => createProjectFileReviewMail(inputs.javascriptContent, inputs.htmlContent)}
      inputFields={inputFields}
      title="Connect Frontend to Backend"
      objective="Complete the full-stack implementation by connecting the frontend form to the Flask backend API with proper response handling and user feedback."
      sceneId="scene8"
    >
      <p className="text-sm text-gray-700 mb-4">
        Congratulations! You have successfully completed Chapter 2: Backend with Database. Your full-stack support portal is now complete!
      </p>
      <button
        onClick={() => navigateToScene("welcome")}
        className="bg-green-600 text-white px-6 py-3 text-sm font-medium rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Continue to Next Chapter
      </button>
    </SceneTemplate>
  );
}

export default Scene8Page;
