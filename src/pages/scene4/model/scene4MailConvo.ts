// Mail conversation interface for Scene 4
interface MailMessage {
  id: number;
  sender: string;
  senderName: string;
  timestamp: string;
  content: string;
  isUser: boolean;
  isFromMe: boolean;
  body: string;
  recipient?: string;
  recipientName?: string;
  attachments?: any[];
}

// Mail conversation for Scene 4
export const scene4MailConvo: MailMessage[] = [
  {
    id: 1,
    sender: "you@email.com",
    senderName: "You",
    timestamp: "10:45 AM",
    content: "Hi Priya, I've completed the JavaScript validation for the support form. The form now has real-time validation for both subject and description fields, with proper error messaging and submission prevention when validation fails.",
    body: "Hi Priya, I've completed the JavaScript validation for the support form. The form now has real-time validation for both subject and description fields, with proper error messaging and submission prevention when validation fails.",
    isUser: true,
    isFromMe: true,
    attachments: []
  },
  {
    id: 2,
    sender: "priya.sharma@velsymedia.in",
    senderName: "Priya Sharma",
    timestamp: "10:52 AM", 
    content: "Excellent work! I can see the form now provides immediate feedback to users. The validation logic is clean and the error messages are helpful. This kind of client-side validation is essential for professional web applications. Your JavaScript skills are really showing through! Ready for the next challenge?",
    body: "Excellent work! I can see the form now provides immediate feedback to users. The validation logic is clean and the error messages are helpful. This kind of client-side validation is essential for professional web applications. Your JavaScript skills are really showing through! Ready for the next challenge?",
    isUser: false,
    isFromMe: false,
    attachments: []
  },
  {
    id: 3,
    sender: "you@email.com",
    senderName: "You",
    timestamp: "10:55 AM",
    content: "Thank you! I really enjoyed implementing the validation logic and seeing how it improves the user experience. The real-time feedback makes the form feel much more responsive and professional. I'm definitely ready for the next task!",
    body: "Thank you! I really enjoyed implementing the validation logic and seeing how it improves the user experience. The real-time feedback makes the form feel much more responsive and professional. I'm definitely ready for the next task!",
    isUser: true,
    isFromMe: true,
    attachments: []
  },
  {
    id: 4,
    sender: "priya.sharma@velsymedia.in",
    senderName: "Priya Sharma",
    timestamp: "11:00 AM",
    content: "Perfect! With the frontend foundation complete, our next step will be building the backend infrastructure. We need to create an API to handle form submissions and store the data properly. This will involve Python Flask development and database integration. Are you excited to dive into full-stack development?",
    body: "Perfect! With the frontend foundation complete, our next step will be building the backend infrastructure. We need to create an API to handle form submissions and store the data properly. This will involve Python Flask development and database integration. Are you excited to dive into full-stack development?",
    isUser: false,
    isFromMe: false,
    attachments: []
  },
  {
    id: 5,
    sender: "you@email.com",
    senderName: "You",
    timestamp: "11:03 AM",
    content: "Absolutely! I'm excited to learn how the frontend and backend work together. Building a complete API and database system sounds like an amazing learning experience. Thank you for this structured approach to the project!",
    body: "Absolutely! I'm excited to learn how the frontend and backend work together. Building a complete API and database system sounds like an amazing learning experience. Thank you for this structured approach to the project!",
    isUser: true,
    isFromMe: true,
    attachments: []
  }
];
