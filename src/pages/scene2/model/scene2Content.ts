// Story entries for Scene 2
export const storyEntries = [
  {
    text: "The weekend passes in a blur of anticipation. Then, on Monday morning, July 28, 2025, your phone rings. It's VelsyMedia HR – you're in! A wave of excitement washes over you. Your first day is set. You arrive at the bustling VelsyMedia office in Chennai. The energy is palpable. Priya Sharma, your Team Lead, greets you warmly.",
    size: "1.6rem",
    speed: 50
  },
  {
    text: 'Priya: "Welcome to VelsyMedia! So glad to have you on board. I\'m Priya, your team lead. We\'ve been looking forward to you joining us. Get comfortable. We\'re a very hands-on team here, and we believe in learning by doing. So, we\'re going to dive straight into your first real contribution. You mentioned the \'Smart Customer Support Portal\' in your application, right? Well, that’s actually your first major project here!"',
    size: "1.7rem",
    speed: 48
  },
  {
    text: "(Your eyes widen slightly – this is exactly what you hoped for!)",
    size: "1.4rem",
    speed: 45
  },
  {
    text: 'Priya: "Our current customer support is a major bottleneck. Emails everywhere, no centralized tracking, and our agents are swamped with repetitive queries. Our goal is to fix that, starting with this new portal. It\'s a critical project for VelsyMedia as we scale. For your very first task, we need to get the project infrastructure set up. In a startup like ours, efficient collaboration and robust version control are non-negotiable from day one. This ensures we can all work on the same codebase, track changes, and roll back if needed."',
    size: "1.6rem",
    speed: 48
  },
  {
    text: "Task 1: Frontend Foundation\n(Overall Goal for Task 1: Establish project structure and build the customer-facing web form.)",
    size: "1.5rem",
    speed: 45
  },
  {
    text: "Task 1.1: Project Setup & Version Control (Git & GitHub)\nObjective: Initialize the project's local Git repository, connect it to a remote GitHub repository, and make the first commit. This is crucial for tracking changes and future collaboration.",
    size: "1.5rem",
    speed: 45
  },
  {
    text: 'Instructions from Priya: Create a Project Folder: On your VelsyMedia laptop, create a new empty directory for the project. Let\'s call it velsymedia-support-portal. Open in VS Code. Initialize Git. Create Essential Files. Create GitHub Repository. Connect Local to Remote. First Commit & Push. (You diligently follow Priya\'s instructions, typing the commands, and watching the terminal output. The feeling of pushing code to a real company repository is exhilarating.)',
    size: "1.4rem",
    speed: 45
  },
  {
    text: "Your Action: You've completed Task 1.1.",
    size: "1.4rem",
    speed: 45
  }
];

// Markdown for requirements/instructions
export const requirementsMarkdown = `
## Task 1.1: Project Setup & Version Control (Git & GitHub)

**Objective:** Initialize the project's local Git repository, connect it to a remote GitHub repository, and make the first commit. This is crucial for tracking changes and future collaboration.

### Instructions from Priya
- **Create a Project Folder:** On your VelsyMedia laptop, create a new empty directory for the project. Let's call it velsymedia-support-portal.
- **Open in VS Code:** Open this empty folder in Visual Studio Code.
- **Initialize Git:** Open the integrated terminal and run git init.
- **Create Essential Files:** Create README.md (with a title and placeholder text) and .gitignore (add common Python and OS ignores like __pycache__/, venv/, *.db).
- **Create GitHub Repository:** I've set up an empty private repo for you on VelsyMedia's GitHub: [https://github.com/VelsyMedia-Org/smart-support-portal.git](https://github.com/VelsyMedia-Org/smart-support-portal.git). Do **NOT** initialize it with any files on GitHub.
- **Connect Local to Remote:** In your terminal, run git remote add origin https://github.com/VelsyMedia-Org/smart-support-portal.git.
- **First Commit & Push:** Stage all files (git add .), commit with a descriptive message (git commit -m "feat: Initial project setup...") and push (git push -u origin main).

---
You diligently follow Priya's instructions, typing the commands, and watching the terminal output. The feeling of pushing code to a real company repository is exhilarating.
`;

