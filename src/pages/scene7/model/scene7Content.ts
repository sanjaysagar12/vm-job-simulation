// Story entries for Scene 7
export const storyEntries = [
  {
    text: "Perfect! Your SQLite database is properly set up and initialized. The table structure is clean and the connection handling is robust. Now it's time to actually store data in that database!",
    size: "1.6rem",
    speed: 50
  },
  {
    text: 'Priya: "Great database foundation! Now we need to make your Flask app actually save the incoming support requests. Currently it just logs to console - let\'s implement proper data persistence with validation and error handling."',
    size: "1.7rem",
    speed: 48
  },
  {
    text: "(This is where your portal gets real functionality - every form submission will be safely stored in the database with proper validation!)",
    size: "1.4rem",
    speed: 45
  },
  {
    text: "Task 2.3: Store Data in Database\nObjective: Implement database storage functions with proper validation, sanitization, and error handling for the support request system.",
    size: "1.5rem",
    speed: 45
  },
  {
    text: 'Priya: "We need to enhance your db_operations.py with functions to actually insert and update support requests. Include proper validation to ensure data quality and error handling for database failures."',
    size: "1.4rem",
    speed: 45
  },
  {
    text: 'Senior Developer: "Remember to sanitize all inputs, validate field lengths, and always use parameterized queries to prevent SQL injection. Return meaningful success/error responses."',
    size: "1.4rem",
    speed: 45
  },
  {
    text: "Your Action: Implement data storage functions that will safely persist every customer support request with proper validation and error handling.",
    size: "1.4rem",
    speed: 45
  }
];

export const requirementsMarkdown = `
# Task 2.3: Store Data in Database

## Objective
Implement database storage functions with proper validation, sanitization, and error handling for the support request system.

## Requirements

### 1. Enhanced Database Operations
- Add data insertion functions to db_operations.py
- Implement input validation and sanitization
- Include proper error handling with try-catch blocks
- Return meaningful success/error responses

### 2. Data Storage Functions
**insert_initial_request(subject, description)**:
- Validate required fields (subject, description)
- Sanitize input data (strip whitespace, validate length)
- Insert new support request with timestamp
- Return success/failure status with request ID or error message

**update_request_with_ai_results(request_id, summary, suggested_response, category)**:
- Update existing request with AI analysis results
- Validate request exists before updating
- Handle database errors gracefully
- Return success/failure status

### 3. Input Validation
- Required field validation
- Length restrictions (subject < 200 chars)
- Data sanitization to prevent injection
- Proper error messages for validation failures

### 4. Flask App Integration
- Update submit_request endpoint to use database functions
- Implement proper API response handling
- Include success/error status in JSON responses
- Simulate AI processing with placeholder functions

## Success Criteria
- All form data is properly validated and stored
- Database errors are handled gracefully
- API responses include appropriate status indicators
- Data persistence survives server restarts
- Request IDs are returned for successful submissions

## Files to Modify
- \`backend/db_operations.py\` - Enhanced with storage functions
- \`backend/app.py\` - Updated to use database storage

## Testing
- Test successful data storage
- Test validation error cases
- Test database error handling
- Verify data persistence across restarts
`;
