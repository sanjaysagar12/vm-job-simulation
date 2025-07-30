import { useState } from "react";
import TypingEffect from "./TypingEffect";
import MDtoHTML from "./MDtoHTML";
import MailConversation from "./MailConversation";
import { Mail } from "lucide-react";
import { usePageNavigation } from "../hooks/navigation";

export type SceneInputField = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  description?: string;
};

export type SceneTemplateProps = {
  storyEntries: any[];
  requirementsMarkdown: string;
  mailConvo: any[];
  createUserMail: (inputs: Record<string, string>, mailConvoLength: number) => any;
  createReviewMail: (inputs: Record<string, string>) => Promise<any[]>;
  inputFields: SceneInputField[];
  title: string;
  objective: string;
  nextScene?: string;
};

function SceneTemplate({
  storyEntries,
  requirementsMarkdown,
  mailConvo: initialMailConvo,
  createUserMail,
  createReviewMail,
  inputFields,
  title,
  objective,
  nextScene
}: SceneTemplateProps) {
  const [showTask, setShowTask] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [inputs, setInputs] = useState<Record<string, string>>(() => {
    const obj: Record<string, string> = {};
    inputFields.forEach(f => { obj[f.name] = ""; });
    return obj;
  });
  const [mailConvo, setMailConvo] = useState<any[]>(initialMailConvo);
  const [allCorrect, setAllCorrect] = useState(false);
  const { setCurrentPage } = usePageNavigation();

  const handleComplete = () => setShowTask(true);

  const handleInputChange = (name: string, value: string) => {
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const userMail = createUserMail(inputs, mailConvo.length);
    const aiMailArr = await createReviewMail(inputs);
    const aiMail = aiMailArr[0];
    setMailConvo([...mailConvo, userMail, aiMail]);
    setIsDrawerOpen(true);
    const allCorrectNow = aiMail.body.includes('Great job! Both files meet our standards') || aiMail.body.includes('Congratulations!');
    setAllCorrect(allCorrectNow);
  };

  const handleProceedToNextScene = () => {
    if (nextScene) setCurrentPage(nextScene);
  };

  const allRequiredFilled = inputFields.every(f => !f.required || inputs[f.name].trim());

  if (showTask) {
    return (
      <div className="h-screen bg-gray-100 flex flex-col relative">
        {/* Welcome Text in Background */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0">
          <h1 className="text-4xl font-bold text-gray-300 mb-2">{title}</h1>
          <p className="text-lg text-gray-400">Set up your project and check your mail for details.</p>
        </div>
        {/* Mail Icon Button (top right) */}
        <button
          className="fixed top-6 right-8 z-50 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors duration-300"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          aria-label={isDrawerOpen ? "Close Mail" : "Open Mail"}
        >
          <Mail className="w-7 h-7" />
        </button>
        {/* Overlay */}
        {isDrawerOpen && (
          <div
            className="fixed inset-0 bg-opacity-10 z-40 transition-opacity duration-300"
            onClick={() => setIsDrawerOpen(false)}
            style={{ opacity: isDrawerOpen ? 1 : 0 }}
          />
        )}
        {/* Side Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-full sm:w-[480px] bg-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ pointerEvents: isDrawerOpen ? 'auto' : 'none' }}
        >
          {isDrawerOpen && mailConvo && (
            <>
              <div className="flex justify-end px-4 pt-2">
                <button
                  className="ml-2 p-2 hover:bg-gray-200 rounded-full text-2xl font-bold text-gray-500"
                  aria-label="Close"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  ×
                </button>
              </div>
              <MailConversation initialConversation={mailConvo} />
            </>
          )}
        </div>
        {/* Main Content */}
        <div className="relative z-10 flex-1 overflow-y-auto">
          {/* Header */}
          <div className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">Project Assignment</h1>
                  <p className="text-gray-600 mt-1">{objective}</p>
                </div>
                {/* You can add scene number here if needed */}
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Requirements */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Project Setup Requirements</h3>
              <div className="markdown-body">
                <MDtoHTML
                  markdown={requirementsMarkdown}
                  className="prose max-w-none text-sm text-gray-700"
                />
              </div>
            </div>
            {/* Submission Form */}
            <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Submit Your Project Files</h3>
              <div className="space-y-6">
                {inputFields.map(f => (
                  <div key={f.name}>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      {f.label} {f.required && <span className="text-red-500">*</span>}
                    </label>
                    <textarea
                      rows={f.rows || 6}
                      value={inputs[f.name]}
                      onChange={e => handleInputChange(f.name, e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 resize-none"
                      placeholder={f.placeholder}
                    />
                    {f.description && <p className="text-xs text-gray-500 mt-2">{f.description}</p>}
                  </div>
                ))}
                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    disabled={!allRequiredFilled}
                    onClick={handleSubmit}
                    className="bg-gray-900 text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    Submit Files
                  </button>
                </div>
                {allCorrect && nextScene && (
                  <div className="text-center pt-4">
                    <p className="text-sm text-gray-700 mb-4">
                      Congratulations! Your project setup files are correct.
                    </p>
                    <button
                      onClick={handleProceedToNextScene}
                      className="bg-green-600 text-white px-6 py-3 text-sm font-medium rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      Proceed to Next Scene
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <TypingEffect
      entries={storyEntries}
      onComplete={handleComplete}
    />
  );
}

export default SceneTemplate;
