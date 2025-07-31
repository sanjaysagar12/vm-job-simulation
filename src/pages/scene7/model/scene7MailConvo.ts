import { isAnswerCorrect } from '../../../global/service/agent';
import { expectedDbOperationsRequirements, expectedAppUpdateRequirements } from './scene7Answer';

export async function createProjectFileReviewMail(dbOperationsContent: string, appContent: string) {
  const dbResult = await isAnswerCorrect(dbOperationsContent, expectedDbOperationsRequirements);
  const appResult = await isAnswerCorrect(appContent, expectedAppUpdateRequirements);

  const allCorrect = dbResult.result === 'correct' && appResult.result === 'correct';
  const timestamp = new Date().toLocaleString();
  
  const body = `Hi,

Thank you for submitting your SQLite data storage implementation for the Smart Customer Support Portal. Here is my review as your team lead:

Database Operations Review:
${dbResult.review}

Flask App Integration Review:
${appResult.review}

${allCorrect ?
  `Outstanding work! Your data storage implementation is professional-grade. The database functions include proper validation, sanitization, and error handling. The Flask integration handles data persistence correctly with appropriate API responses. Excellent job! You are ready to move on to frontend-backend connection. Please continue to Scene 8.` :
  `Please review the feedback above and update your files accordingly. Make sure your database functions include proper validation and error handling, and the Flask app correctly stores and processes the data. Once you have made the necessary improvements, resubmit for another review.`}

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

Outstanding progress on the SQLAlchemy database integration! Your models are well-designed and the Flask database connection is solid.

Now for the final piece of the backend puzzle: Flask REST API development. This is where everything comes together - your frontend will communicate with these Flask endpoints to create, read, update, and delete support tickets.

Key considerations for this Flask implementation:
1. RESTful design principles - clear, predictable URL patterns with Flask routes
2. Comprehensive input validation - never trust client data, validate JSON requests
3. Proper error handling - users need clear JSON feedback
4. Consistent response formats - make frontend integration seamless
5. Performance considerations - pagination using SQLAlchemy, filtering, efficient queries
6. Flask Blueprints - organize routes for maintainability

Your Flask API endpoints will be the bridge between the beautiful frontend you built and the robust SQLAlchemy database layer you just implemented. This is critical infrastructure that needs to handle production traffic reliably.

The development team is excited to see your Flask API design skills in action!

Best,
Priya`,
    attachments: [
      {
        id: 1,
        name: "Flask_REST_API_Best_Practices.pdf", 
        size: "465 KB",
        type: "pdf",
      },
    ],
    isFromMe: false,
  },
];

export function createUserMail(dbOperationsContent: string, appContent: string, mailConvoLength: number): Message {
  return {
    id: mailConvoLength + 1,
    sender: "you@email.com",
    senderName: "You",
    recipient: "priya.sharma@velsymedia.in",
    recipientName: "Priya Sharma",
    timestamp: new Date().toLocaleString(),
    body: `Hi Priya,

I've completed the SQLite data storage implementation for the support portal.

Enhanced Database Operations (backend/db_operations.py):
${dbOperationsContent}

Updated Flask App (backend/app.py):
${appContent}

The implementation includes proper data validation, sanitization, error handling, and database storage functions. The Flask app now actually stores requests in the database with AI analysis simulation.

Best,
You`,
    attachments: [],
    isFromMe: true
  };
}
