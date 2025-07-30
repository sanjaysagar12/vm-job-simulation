// Story entries for Scene 4
export const storyEntries = [
  {
    text: "Great work on the static form! Priya reviews your HTML and CSS, nodding approvingly. 'Clean structure and good styling,' she says. 'Now let's make it interactive.'",
    size: "1.6rem",
    speed: 50
  },
  {
    text: 'Priya: "Static forms are just the beginning. In real applications, we need client-side validation to provide immediate feedback to users before they submit. This improves user experience and reduces server load by catching errors early."',
    size: "1.7rem",
    speed: 48
  },
  {
    text: "(You lean in, excited to add your first JavaScript functionality to the project!)",
    size: "1.4rem",
    speed: 45
  },
  {
    text: 'Priya: "Add JavaScript validation to ensure users fill out all required fields properly. Show helpful error messages, and only allow submission when everything is valid. This is crucial for any professional web application."',
    size: "1.6rem",
    speed: 48
  },
  {
    text: "Task 1.3: Client-Side Form Validation (JavaScript - Interactive Frontend)",
    size: "1.5rem",
    speed: 45
  },
  {
    text: 'Instructions from Priya: "Create a script.js file in your frontend/ folder. Add validation for required fields, minimum character limits, and show real-time feedback. Make sure the form only submits when all validation passes."',
    size: "1.4rem",
    speed: 45
  },
  {
    text: "(You crack your knuckles and open VS Code, ready to bring your form to life with JavaScript!)",
    size: "1.4rem",
    speed: 45
  }
];

// Markdown for requirements/instructions
export const requirementsMarkdown = `
## Task 1.3: Client-Side Form Validation (JavaScript - Interactive Frontend)

**Objective:** Add JavaScript validation to the customer support form to provide immediate user feedback and ensure data quality before submission.

### Requirements:
- Create a \`script.js\` file in your \`frontend/\` folder
- Link the JavaScript file to your \`index.html\`
- Add the following validation features:

#### Validation Rules:
1. **Subject field:**
   - Required (cannot be empty)
   - Minimum 5 characters
   - Maximum 100 characters

2. **Description field:**
   - Required (cannot be empty)
   - Minimum 20 characters
   - Maximum 1000 characters

3. **Real-time feedback:**
   - Show error messages below each field when validation fails
   - Error messages should be styled (red text, clear formatting)
   - Clear error messages when validation passes

4. **Form submission:**
   - Prevent form submission if any validation fails
   - Show a success message when all validations pass
   - Optionally: Display submitted data in a formatted way

#### Implementation Guidelines:
- Use modern JavaScript (ES6+)
- Add event listeners for real-time validation (on input/blur events)
- Create reusable validation functions
- Ensure accessibility (proper ARIA labels and error associations)
- Style error states with CSS

#### Testing Checklist:
- Try submitting empty form (should show errors)
- Test minimum/maximum character limits
- Verify real-time validation works as you type
- Confirm successful submission message appears

**Deliverables:** Updated \`script.js\`, modified \`index.html\` (with script link), and any additional CSS for validation styling.
`;
