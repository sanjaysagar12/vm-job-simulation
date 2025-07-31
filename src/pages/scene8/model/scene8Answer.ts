// Expected requirements for Scene 8 frontend-backend connection
export const expectedJavaScriptRequirements = `
The frontend JavaScript file should contain:
- Form submission event handler that prevents default behavior
- fetch() API call to '/submit_request' endpoint with POST method
- Proper request headers including 'Content-Type': 'application/json'
- Form data serialization using FormData or manual JSON construction
- Response handling with .then() and .catch() methods
- Success message display when status is 'success'
- Error message display for failed requests
- Form clearing on successful submission
- Loading state management during API calls
- User-friendly error messages for different error scenarios
`;

export const expectedHtmlRequirements = `
The updated HTML template should contain:
- Message display areas for success/error feedback
- Proper form structure with appropriate input names
- Submit button with loading state capabilities
- CSS classes for styling message areas
- JavaScript script inclusion and proper DOM ready handling
- Accessible form labels and error message associations
- All previous functionality preserved
- Clean, semantic HTML structure
`;
