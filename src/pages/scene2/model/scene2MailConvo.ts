import { isAnswerCorrect } from '../../../global/service/agent';
import { expectedGitignoreRequirements, expectedReadmeRequirements } from './scene2Answer';

export async function createProjectFileReviewMail(gitignoreContent: string, readmeContent: string) {
  const gitignoreResult = await isAnswerCorrect(gitignoreContent, expectedGitignoreRequirements);
  const readmeResult = await isAnswerCorrect(readmeContent, expectedReadmeRequirements);

  const allCorrect = gitignoreResult.result === 'correct' && readmeResult.result === 'correct';
  const timestamp = new Date().toLocaleString();
  const body = `Hi,

Thank you for submitting your initial project files for the Smart Customer Support Portal. Here is my review as your team lead:

.gitignore Review:
${gitignoreResult.review}

README.md Review:
${readmeResult.review}

${allCorrect ?
  `Great job! Both files meet our standards for project setup. You are ready to proceed to the next phase of the onboarding process. Please continue to Scene 3.` :
  `Please review the feedback above and update your files accordingly. Once you have made the necessary improvements, resubmit for another review.`}

Best,
Priya Sharma
Team Lead, VelsyMedia`;

  return [{
    id: 1,
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
    body: `Hi and welcome to VelsyMedia!\n\nAs discussed, your first project is the Smart Customer Support Portal. Please find attached the initial project brief.\n\nLet me know if you have any questions.\n\nBest,\nPriya`,
    attachments: [
      {
        id: 1,
        name: "Smart_Customer_Support_Portal_Brief.docx",
        size: "24 KB",
        type: "doc",
      },
    ],
    isFromMe: false,
  },
];

export function createUserMail(gitignoreContent: string, readmeContent: string, mailConvoLength: number): Message {
  return {
    id: mailConvoLength + 1,
    sender: "you@email.com",
    senderName: "You",
    recipient: "priya.sharma@velsymedia.in",
    recipientName: "Priya Sharma",
    timestamp: new Date().toLocaleString(),
    body: `Hi Priya,\n\nI've completed the initial project setup and attached the .gitignore and README.md contents as requested.\n\n.gitignore:\n${gitignoreContent}\n\nREADME.md:\n${readmeContent}\n\nBest,\nYou`,
    attachments: [],
    isFromMe: true
  };
}