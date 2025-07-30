import { isAnswerCorrect } from '../../../global/service/agent';
import { expectedHtmlRequirements, expectedCssRequirements } from './scene3Answer';

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
    body: `Hi! Your next task is to build the static customer support form. Please submit your HTML and CSS for review. Let me know if you have any questions.\n\nBest,\nPriya`,
    attachments: [],
    isFromMe: false,
  },
];

export function createUserMail(htmlContent: string, cssContent: string, mailConvoLength: number): Message {
  return {
    id: mailConvoLength + 1,
    sender: "you@email.com",
    senderName: "You",
    recipient: "priya.sharma@velsymedia.in",
    recipientName: "Priya Sharma",
    timestamp: new Date().toLocaleString(),
    body: `Hi Priya,\n\nI've completed the static support form.\n\nindex.html:\n${htmlContent}\n\nstyle.css:\n${cssContent}\n\nBest,\nYou`,
    attachments: [],
    isFromMe: true
  };
}

export async function createProjectFileReviewMail(htmlContent: string, cssContent: string) {
  const htmlResult = await isAnswerCorrect(htmlContent, expectedHtmlRequirements);
  const cssResult = await isAnswerCorrect(cssContent, expectedCssRequirements);
  const allCorrect = htmlResult.result === 'correct' && cssResult.result === 'correct';
  const timestamp = new Date().toLocaleString();
  const body = `Hi,\n\nThank you for submitting your static support form files. Here is my review as your team lead:\n\nindex.html Review:\n${htmlResult.review}\n\nstyle.css Review:\n${cssResult.review}\n\n${allCorrect ?
    `Great job! Both files meet our standards for the static form. You are ready to proceed to the next phase. Please continue to Scene 4.` :
    `Please review the feedback above and update your files accordingly. Once you have made the necessary improvements, resubmit for another review.`}
\nBest,\nPriya Sharma\nTeam Lead, VelsyMedia`;
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
