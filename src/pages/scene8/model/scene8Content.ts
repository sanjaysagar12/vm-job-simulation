// Scene 8 Content: Task 2.4 - Connect Frontend to Backend
export const storyEntries = [
  {
    text: `You're nearing completion of your first major project! Your database is properly set up and storing data correctly. Now comes the final crucial step - connecting your frontend form to the Flask backend API.

Sarah mentions in passing, "The form submission feels a bit disconnected. Can we make sure it actually talks to our backend instead of just console logging?" She's right - currently the frontend form submits data, but it's not actually being sent to your Flask API endpoint.

Your task is to implement the frontend-backend connection using JavaScript's fetch API to send form data to your Flask server and handle the responses appropriately.`,
    speaker: 'Developer Experience',
    size: "1.5rem",
    speed: 50
  },
  {
    text: `Task 2.4: Connect Frontend to Backend

Now that your backend is storing data properly, you need to connect your HTML form to the Flask API. This involves:

1. **Frontend JavaScript**: Implement fetch() calls to send form data to the backend
2. **Response Handling**: Process success/error responses from the Flask API  
3. **User Feedback**: Display appropriate messages based on the API responses
4. **Error Handling**: Handle network errors and API errors gracefully

The frontend should use relative URLs to communicate with the Flask backend, and all responses should be processed to provide meaningful feedback to users.`,
    speaker: 'Technical Requirements',
    size: "1.4rem",
    speed: 48
  }
];

export const requirementsMarkdown = `
# Task 2.4: Connect Frontend to Backend

## Objective
Implement the frontend-backend connection to complete the full-stack support request system.

## Requirements

### 1. Frontend JavaScript Implementation
- Replace console.log with actual fetch() API calls
- Use relative URLs (e.g., '/submit_request') for API calls
- Implement proper request headers (Content-Type: application/json)
- Handle form data serialization to JSON

### 2. Response Processing
- Process success responses (status: "success")  
- Handle error responses (status: "error")
- Display appropriate user feedback messages
- Clear form on successful submission

### 3. Error Handling
- Network error handling (fetch failures)
- API error handling (4xx, 5xx responses)
- User-friendly error messages
- Graceful degradation for connectivity issues

### 4. User Experience
- Loading states during API calls
- Success/error message display
- Form validation feedback
- Responsive UI updates

## Success Criteria
- Form data is successfully sent to Flask backend
- Database storage is triggered via frontend submission
- Users receive clear feedback on submission status
- Error cases are handled gracefully
- Frontend and backend work together seamlessly

## Files to Modify
- \`frontend/static/script.js\` (or equivalent) - Frontend JavaScript
- \`frontend/templates/index.html\` - Form and messaging elements

## Testing
- Test successful form submissions
- Test error cases (missing fields, server errors)
- Verify data persistence in the database
- Test user feedback and messaging
`;
