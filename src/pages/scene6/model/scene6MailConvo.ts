import { isAnswerCorrect } from '../../../global/service/agent';
import { expectedDbOperationsRequirements, expectedAppUpdateRequirements } from './scene6Answer';

export async function createProjectFileReviewMail(dbOperationsContent: string, appContent: string) {
  const dbResult = await isAnswerCorrect(dbOperationsContent, expectedDbOperationsRequirements);
  const appResult = await isAnswerCorrect(appContent, expectedAppUpdateRequirements);

  const allCorrect = dbResult.result === 'correct' && appResult.result === 'correct';
  const timestamp = new Date().toLocaleString();
  
  const body = `Hi,

Thank you for submitting your SQLite database integration files for the Smart Customer Support Portal. Here is my review as your team lead:

Database Operations Review:
${dbResult.review}

Flask App Integration Review:
${appResult.review}

${allCorrect ?
  `Outstanding work! Your SQLite database integration is professional-grade. The database operations are well-structured with proper connection handling and table design, and your Flask app correctly initializes the database. Excellent job! You are ready to move on to data storage implementation. Please continue to Scene 7.` :
  `Please review the feedback above and update your files accordingly. Make sure your db_operations.py has proper SQLite functions and the Flask app correctly calls init_db(). Once you have made the necessary improvements, resubmit for another review.`}

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

Excellent progress on the Flask backend foundation! Your Flask server is running perfectly.

Now we need to add the data persistence layer. For the customer support portal to be truly useful, we need to store and manage:
- Customer support tickets with all their details
- User information for agents and customers
- Ticket status tracking and assignment data

We'll use SQLite with SQLAlchemy for this phase because:
1. Lightweight database perfect for development and small to medium scale
2. SQLAlchemy ORM makes database operations clean and secure
3. No additional database server setup required
4. Easy migration to PostgreSQL or MySQL in production

Your task is to design SQLAlchemy models that will handle thousands of support tickets efficiently while maintaining data integrity and enabling fast queries.

The senior development team is excited to see your database design skills!

Best,
Priya`,
    attachments: [
      {
        id: 1,
        name: "SQLAlchemy_Model_Design_Guide.pdf", 
        size: "312 KB",
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

I've completed the SQLite database integration for the Flask support portal.

Database Operations (backend/db_operations.py):
${dbOperationsContent}

Updated Flask App (backend/app.py):
${appContent}

The database is configured with SQLite using proper connection handling and table design. The Flask app now includes database initialization via the init_db() function.

Best,
You`,
    attachments: [],
    isFromMe: true
  };
}
