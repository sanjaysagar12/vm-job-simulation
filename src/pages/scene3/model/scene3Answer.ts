// Expected requirements for Scene 3 static support form
export const expectedHtmlRequirements = `
The HTML file should contain:
- Proper HTML5 document structure with DOCTYPE declaration
- Valid head section with charset, viewport, title, and CSS link
- Title should reference VelsyMedia Support Request
- Body should include a clear heading like "Submit Your Support Request"
- A form element containing:
  * Subject input field (text type, required, with proper label and id)
  * Description textarea field (required, with proper label and id)
  * Submit button with appropriate type and text
- Semantic HTML structure with proper form labels using "for" attribute
- All form elements should have name attributes for functionality
- Clean, accessible markup following HTML5 standards
- Link to external CSS file (style.css)
`;

export const expectedCssRequirements = `
The CSS file should contain:
- Body styling: proper font family (like Arial, sans-serif), background color, margin/padding reset
- Form styling: centered layout, background color (white), maximum width constraint, proper margins
- Form visual enhancements: padding, border-radius, box-shadow for professional appearance
- Input and textarea styling: consistent padding, border styling, border-radius, proper font sizing
- Submit button styling: background color, text color, border removal, padding, hover effects
- Flexbox or similar layout technique for form organization
- Proper spacing between form elements (gap or margins)
- Responsive and professional appearance
- Consistent color scheme and typography
- Hover states and transitions for better user experience
`;
