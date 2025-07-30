import SceneTemplate from "../../global/components/SceneTemplate";
import type { SceneInputField } from "../../global/components/SceneTemplate";
import { storyEntries, requirementsMarkdown } from "./model/scene3Content";
import { mailConvo, createUserMail, createProjectFileReviewMail } from "./model/scene3MailConvo";

const inputFields: SceneInputField[] = [
  {
    label: "index.html Content",
    name: "htmlContent",
    filename: "frontend/index.html",
    placeholder: `<!DOCTYPE html>\n<html lang=\"en\">...`,
    required: true,
    rows: 16,
    description: "Paste your complete HTML for the support form."
  },
  {
    label: "style.css Content",
    name: "cssContent",
    filename: "frontend/style.css",
    placeholder: `body {\n  font-family: Arial, sans-serif;...`,
    required: true,
    rows: 12,
    description: "Paste your CSS for the support form styling."
  }
];

function Scene3Page() {
  return (
    <SceneTemplate
      storyEntries={storyEntries}
      requirementsMarkdown={requirementsMarkdown}
      mailConvo={mailConvo}
      createUserMail={(inputs, mailConvoLength) => createUserMail(inputs.htmlContent, inputs.cssContent, mailConvoLength)}
      createReviewMail={async (inputs) => createProjectFileReviewMail(inputs.htmlContent, inputs.cssContent)}
      inputFields={inputFields}
      title="Static Customer Submission Form (HTML & CSS)"
      objective="Build the basic visual structure and apply initial styling for the customer-facing support form within a simple, root-level frontend/ directory."
      nextScene="scene4"
      sceneId="scene3"
    />
  );
}

export default Scene3Page;
