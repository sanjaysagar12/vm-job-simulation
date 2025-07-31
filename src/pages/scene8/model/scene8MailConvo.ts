import { isAnswerCorrect } from '../../../global/service/agent';
import { expectedJavaScriptRequirements, expectedHtmlRequirements } from './scene8Answer';

export async function createProjectFileReviewMail(javascriptContent: string, htmlContent: string) {
  const jsResult = await isAnswerCorrect(javascriptContent, expectedJavaScriptRequirements);
  const htmlResult = await isAnswerCorrect(htmlContent, expectedHtmlRequirements);

  const allCorrect = jsResult.result === 'correct' && htmlResult.result === 'correct';
  const timestamp = new Date().toLocaleString();
  
  const body = `Hi,

Thank you for submitting your frontend-backend connection implementation for the Smart Customer Support Portal. Here is my final review as your team lead:

Frontend JavaScript Review:
${jsResult.review}

HTML Template Review:
${htmlResult.review}

${allCorrect ?
  `Outstanding work! Your frontend-backend integration is complete and professional. The fetch API implementation is robust, error handling is comprehensive, and the user experience is smooth. Congratulations! You have successfully completed Chapter 2: Backend with Database. Your full-stack implementation demonstrates excellent understanding of Flask, SQLite, and frontend-backend communication. This is production-ready code! Well done!` :
  `Please review the feedback above and update your files accordingly. Make sure your JavaScript properly handles fetch requests and responses, and the HTML provides appropriate user feedback elements. Once you have made the necessary improvements, resubmit for another review.`}

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
  attachments: string[];
  isFromMe: boolean;
};

export const mailConvo: Message[] = [
  {
    id: 1,
    sender: "priya.sharma@velsymedia.in",
    senderName: "Priya Sharma",
    recipient: "you@email.com",
    recipientName: "You",
    timestamp: "2024-01-15 14:30:00",
    body: `Hi!

Great work on the database implementation! I can see the data is being stored correctly in SQLite. 

For this final task, we need to connect the frontend form to your Flask backend. Currently, the form is just logging to console, but we need it to actually send data to your API endpoint.

Please implement:
1. Frontend JavaScript with fetch() calls to '/submit_request'
2. Proper response handling and user feedback
3. Error handling for network and API errors

This will complete our full-stack support request system. Looking forward to seeing the final integration!

Best,
Priya Sharma
Team Lead, VelsyMedia`,
    attachments: [],
    isFromMe: false
  },
];

export function createUserMail(javascriptContent: string, htmlContent: string, mailConvoLength: number): Message {
  return {
    id: mailConvoLength + 1,
    sender: "you@email.com",
    senderName: "You",
    recipient: "priya.sharma@velsymedia.in",
    recipientName: "Priya Sharma",
    timestamp: new Date().toLocaleString(),
    body: `Hi Priya,

I've completed the frontend-backend connection for the support portal.

Frontend JavaScript (frontend/static/script.js):
${javascriptContent}

Updated HTML Template (frontend/templates/index.html):
${htmlContent}

The frontend now properly communicates with the Flask backend using fetch API, handles all responses appropriately, and provides excellent user feedback for both success and error cases.

Best,
You`,
    attachments: [],
    isFromMe: true
  };
}
