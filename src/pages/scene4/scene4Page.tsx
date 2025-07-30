import SceneTemplate from "../../global/components/SceneTemplate";
import type { SceneInputField } from "../../global/components/SceneTemplate";
import { storyEntries, requirementsMarkdown } from "./model/scene4Content";
import { scene4MailConvo } from "./model/scene4MailConvo";
import { expectedJavaScriptRequirements, expectedValidationFeatures } from "./model/scene4Answer";
import { isAnswerCorrect } from "../../global/service/agent";

const inputFields: SceneInputField[] = [
  {
    label: "script.js Content",
    name: "scriptContent",
    filename: "frontend/script.js",
    placeholder: `// Form validation JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('supportForm');
    const subjectInput = document.getElementById('subject');
    const descriptionInput = document.getElementById('description');
    
    // Add validation logic here
});`,
    required: true,
    rows: 8,
    description: "Implement client-side form validation with real-time feedback and error handling.",
  },
  {
    label: "Updated index.html Content",
    name: "htmlContent", 
    filename: "frontend/index.html",
    placeholder: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VelsyMedia Support Request</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Your form HTML here -->
    <script src="script.js"></script>
</body>
</html>`,
    required: true,
    rows: 6,
    description: "Include the script tag linking to your JavaScript validation file.",
  },
  {
    label: "Updated style.css Content (Optional)",
    name: "cssContent",
    filename: "frontend/style.css", 
    placeholder: `/* Existing styles plus validation error styles */
.error {
    color: #dc3545;
    font-size: 0.875rem;
    margin-top: 4px;
}

.error-input {
    border: 1px solid #dc3545;
}

.success {
    color: #28a745;
}`,
    required: false,
    rows: 4,
    description: "Add CSS styles for validation states (error messages, field highlighting, etc.).",
  },
];

const createUserMail = (_scriptContent: string, _htmlContent: string, cssContent: string, mailConvoLength: number) => {
  return {
    id: mailConvoLength + 1,
    sender: "you@email.com",
    senderName: "You",
    timestamp: new Date().toLocaleTimeString(),
    content: `Hi Priya,

I've completed Task 1.3: Client-Side Form Validation for the customer support form.

Here's what I implemented:
- Created script.js with comprehensive validation logic
- Added real-time validation for subject (5-100 chars) and description (20-1000 chars)
- Implemented error messaging and visual feedback
- Prevented form submission when validation fails
- Added success message for valid submissions
- Updated HTML to include the JavaScript file
${cssContent ? '- Enhanced CSS with validation styling' : ''}

The form now provides immediate feedback to users and ensures data quality before submission. Please review my implementation.

Best regards`,
    body: `Hi Priya,

I've completed Task 1.3: Client-Side Form Validation for the customer support form.

Here's what I implemented:
- Created script.js with comprehensive validation logic
- Added real-time validation for subject (5-100 chars) and description (20-1000 chars)
- Implemented error messaging and visual feedback
- Prevented form submission when validation fails
- Added success message for valid submissions
- Updated HTML to include the JavaScript file
${cssContent ? '- Enhanced CSS with validation styling' : ''}

The form now provides immediate feedback to users and ensures data quality before submission. Please review my implementation.

Best regards`,
    isUser: true,
    isFromMe: true,
    attachments: []
  };
};

const createReviewMail = async (scriptContent: string, htmlContent: string, cssContent: string) => {
  // Combine all validation requirements for comprehensive review
  const allRequirements = [
    ...expectedJavaScriptRequirements,
    ...expectedValidationFeatures
  ].join('\n');

  const combinedContent = `JavaScript File:\n${scriptContent}\n\nHTML File:\n${htmlContent}\n\nCSS File:\n${cssContent}`;
  
  const result = await isAnswerCorrect(combinedContent, allRequirements);
  
  const timestamp = new Date().toLocaleTimeString();
  
  return [
    {
      id: Date.now(),
      sender: "priya.sharma@velsymedia.in",
      senderName: "Priya Sharma",
      timestamp: timestamp,
      content: `Hi there!

Thank you for submitting your JavaScript validation implementation. Here's my review:

**Task 1.3 Review - Client-Side Form Validation:**
${result.review}

${result.result === 'correct' ? 
  `Excellent work! Your JavaScript validation implementation demonstrates solid understanding of client-side form validation principles. The real-time feedback and comprehensive error handling will greatly improve the user experience.

Congratulations! With the frontend foundation now complete (HTML structure, CSS styling, and JavaScript validation), you have successfully built a professional customer support form. Your implementation shows great progress on the Smart Customer Support Portal project!

You're ready to move on to backend development in the next phase, which will involve building a Python Flask API to handle form submissions and integrate with a database.

Great job on completing the frontend foundation tasks!` :
  `Please review the feedback above and make the necessary improvements. Focus on implementing proper validation logic, error messaging, and user experience enhancements.`}

Best regards,
Priya Sharma
Team Lead, VelsyMedia`,
      body: `Hi there!

Thank you for submitting your JavaScript validation implementation. Here's my review:

**Task 1.3 Review - Client-Side Form Validation:**
${result.review}

${result.result === 'correct' ? 
  `Excellent work! Your JavaScript validation implementation demonstrates solid understanding of client-side form validation principles. The real-time feedback and comprehensive error handling will greatly improve the user experience.

Congratulations! With the frontend foundation now complete (HTML structure, CSS styling, and JavaScript validation), you have successfully built a professional customer support form. Your implementation shows great progress on the Smart Customer Support Portal project!

You're ready to move on to backend development in the next phase, which will involve building a Python Flask API to handle form submissions and integrate with a database.

Great job on completing the frontend foundation tasks!` :
  `Please review the feedback above and make the necessary improvements. Focus on implementing proper validation logic, error messaging, and user experience enhancements.`}

Best regards,
Priya Sharma
Team Lead, VelsyMedia`,
      isUser: false,
      isFromMe: false,
      attachments: []
    }
  ];
};

export default function Scene4Page() {
  return (
    <SceneTemplate
      storyEntries={storyEntries}
      requirementsMarkdown={requirementsMarkdown}
      mailConvo={scene4MailConvo}
      createUserMail={(inputs, mailConvoLength) =>
        createUserMail(inputs.scriptContent, inputs.htmlContent, inputs.cssContent, mailConvoLength)
      }
      createReviewMail={async (inputs) => createReviewMail(inputs.scriptContent, inputs.htmlContent, inputs.cssContent)}
      inputFields={inputFields}
      title="VelsyMedia Project Development"
      objective="Add JavaScript validation to your customer support form to provide real-time feedback and ensure data quality. Implement comprehensive client-side validation for all form fields."
      sceneId="scene4"
    >
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-green-600 text-2xl">🎉</span>
          </div>
        </div>
        <h3 className="text-lg font-medium text-green-900 mb-2">
          Congratulations! Task Completed Successfully!
        </h3>
        <p className="text-sm text-green-800 mb-4">
          Excellent work! You have successfully completed this scene. Your JavaScript validation implementation meets all the requirements and demonstrates professional-level skills.
        </p>
        <p className="text-xs text-green-700">
          Check your email for detailed feedback and next steps.
        </p>
      </div>
    </SceneTemplate>
  );
}
