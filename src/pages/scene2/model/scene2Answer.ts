// Expected requirements for Scene 2 project setup
export const expectedGitignoreRequirements = `
The .gitignore file should include:
- Python-related ignores: __pycache__/ directories, virtual environment folders (venv/, env/), database files (*.db, *.sqlite)
- Operating system ignores: .DS_Store (macOS), Thumbs.db (Windows), *.tmp files
- Editor ignores: .vscode/, .idea/ (optional but good practice)
- Log files: *.log
- Environment variables: .env files
- Build artifacts: dist/, build/ folders
The file should follow standard gitignore patterns and cover common development artifacts.
`;

export const expectedReadmeRequirements = `
The README.md should contain:
- A clear project title: "Smart Customer Support Portal" or similar
- A brief description explaining this is a customer support portal for VelsyMedia
- Project purpose/objective statement
- Basic structure with proper markdown headers
- A placeholder section for "Getting Started" or "Installation" instructions
- Professional tone and clear formatting
- Should indicate this is an initial setup/work-in-progress
- Optional: Technology stack mentions, contribution guidelines, or license info
`;