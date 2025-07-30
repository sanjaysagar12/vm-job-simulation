import { isAnswerCorrect } from '../../../global/service/agent';
import { expectedAppRequirements, expectedDbOperationsRequirements, expectedIndexRequirements, expectedRequirementsRequirements } from './scene5Answer';

export async function createProjectFileReviewMail(appContent: string, dbOperationsContent: string, indexContent: string, requirementsContent: string) {
  const appResult = await isAnswerCorrect(appContent, expectedAppRequirements);
  const dbOperationsResult = await isAnswerCorrect(dbOperationsContent, expectedDbOperationsRequirements);
  const indexResult = await isAnswerCorrect(indexContent, expectedIndexRequirements);
  const requirementsResult = await isAnswerCorrect(requirementsContent, expectedRequirementsRequirements);

  const allCorrect = appResult.result === 'correct' && dbOperationsResult.result === 'correct' && indexResult.result === 'correct' && requirementsResult.result === 'correct';
  const timestamp = new Date().toLocaleString();
  
  const body = `Hi,

Thank you for submitting your Flask Backend Setup & Frontend Integration files for the Smart Customer Support Portal. Here is my review as your team lead:

Flask App Review:
${appResult.review}

Database Operations Module Review:
${dbOperationsResult.review}

Updated HTML Template Review:
${indexResult.review}

Requirements File Review:
${requirementsResult.review}

${allCorrect ?
  `Outstanding work! Your Flask backend is now properly serving the frontend with clean architecture. The refactoring is excellent - moving files to backend/templates/ and backend/static/ with proper Flask templating using url_for is exactly right. The separation of concerns with db_operations.py shows good planning. Your Flask app correctly handles both serving the frontend and API requests. Ready to move on to database setup! Please continue to Scene 6.` :
  `Please review the feedback above and update your files accordingly. Focus on proper Flask templating with url_for, correct file structure, and ensuring the Flask app serves both frontend and API endpoints. Once you have made the necessary improvements, resubmit for another review.`}

Best,
Priya Sharma
Team Lead, VelsyMedia`;

  return [{
    id: mailConvo.length + 1,
    sender: "priya.sharma@velsymedia.in",
    senderName: "Priya Sharma",
    recipient: "you@email.com",
    recipientName: "You",
    timestamp,
    body,
    attachments: [],
    isFromMe: false
  }];
}

export type Message = {
  id: number;
  sender: string;
  senderName: string;
  recipient: string;
  recipientName: string;
  timestamp: string;
  body: string;
  attachments: any[];
  isFromMe: boolean;
};

export const mailConvo: Message[] = [
  {
    id: 1,
    sender: "priya.sharma@velsymedia.in",
    senderName: "Priya Sharma",
    recipient: "you@email.com",
    recipientName: "You",
    timestamp: new Date().toLocaleString(),
    body: `Hi,

Excellent work on completing the frontend phase! The form validation is working perfectly, and your code quality is impressive.

Now it's time for Task 2.1: Backend API Setup & Frontend Integration. We need to refactor your frontend files into a proper Flask architecture and establish the backend that will serve your frontend and handle API requests.

For this task, you'll be:
1. Moving frontend files to backend/templates/ and backend/static/
2. Setting up Flask to serve the frontend using render_template
3. Creating proper Flask routing with /submit_request endpoint
4. Establishing separation of concerns with db_operations.py module
5. Using Flask templating with url_for for static assets

This refactoring establishes proper full-stack architecture where Flask serves both frontend and API endpoints. The separation into templates and static folders follows Flask best practices.

This is exactly how we build scalable full-stack applications here at VelsyMedia!

Best,
Priya`,
    attachments: [
      {
        id: 1,
        name: "Flask_Frontend_Integration_Guide.pdf", 
        size: "187 KB",
        type: "pdf",
      },
    ],
    isFromMe: false,
  },
];

export function createUserMail(appContent: string, dbOperationsContent: string, indexContent: string, requirementsContent: string, mailConvoLength: number): Message {
  return {
    id: mailConvoLength + 1,
    sender: "you@email.com",
    senderName: "You",
    recipient: "priya.sharma@velsymedia.in",
    recipientName: "Priya Sharma",
    timestamp: new Date().toLocaleString(),
    body: `Hi Priya,

I've completed Task 2.1: Backend API Setup & Frontend Integration. The frontend files have been refactored and Flask is now serving them properly.

Flask app.py:
${appContent}

db_operations.py:
${dbOperationsContent}

Updated index.html (with Flask templating):
${indexContent}

requirements.txt:
${requirementsContent}

The frontend has been successfully moved to backend/templates/ and backend/static/, and Flask is serving the frontend via render_template. The /submit_request endpoint is handling form data and the url_for templating is working correctly for static assets. The separation of concerns with db_operations.py is established for future database functions.

The refactoring is complete and the Flask server is running correctly on port 5000!

Best,
You`,
    attachments: [],
    isFromMe: true
  };
}
