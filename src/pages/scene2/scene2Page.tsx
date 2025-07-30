import SceneTemplate, { useSceneNavigation } from "../../global/components/SceneTemplate";
import type { SceneInputField } from "../../global/components/SceneTemplate";
import { storyEntries, requirementsMarkdown } from "./model/scene2Content";
import { mailConvo, createUserMail, createProjectFileReviewMail } from "./model/scene2MailConvo";

const inputFields: SceneInputField[] = [
	{
		label: ".gitignore Content",
		name: "gitignoreContent",
		filename: ".gitignore",
		placeholder: `# Python\n__pycache__/\nvenv/\n*.db\n# OS\n.DS_Store\nThumbs.db`,
		required: true,
		rows: 6,
		description: "Include common ignores for Python and your OS.",
	},
	{
		label: "README.md Content",
		name: "readmeContent",
		filename: "README.md",
		placeholder: `# Smart Customer Support Portal\n\nInitial project setup for VelsyMedia's customer support portal.\n\n## Getting Started\nInstructions coming soon...`,
		required: true,
		rows: 6,
		description: "Add a project title and a short description.",
	},
];

function Scene2Page() {
	const { navigateToScene } = useSceneNavigation();

	return (
		<SceneTemplate
			storyEntries={storyEntries}
			requirementsMarkdown={requirementsMarkdown}
			mailConvo={mailConvo}
			createUserMail={(inputs, mailConvoLength) =>
				createUserMail(inputs.gitignoreContent, inputs.readmeContent, mailConvoLength)
			}
			createReviewMail={async (inputs) => createProjectFileReviewMail(inputs.gitignoreContent, inputs.readmeContent)}
			inputFields={inputFields}
			title="VelsyMedia Project Onboarding"
			objective="Initialize your Git repository, connect to GitHub, and create the required project files for the Smart Customer Support Portal. Submit your .gitignore and README.md contents below."
			sceneId="scene2"
		>
			<p className="text-sm text-gray-700 mb-4">
				Congratulations! Your project setup files are correct.
			</p>
			<button
				onClick={() => navigateToScene("scene3")}
				className="bg-green-600 text-white px-6 py-3 text-sm font-medium rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
			>
				Continue to Next Scene
			</button>
		</SceneTemplate>
	);
}

export default Scene2Page;
