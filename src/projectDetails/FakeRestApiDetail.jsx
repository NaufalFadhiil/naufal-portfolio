import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Fake REST API - Books Testing",
  category: "API Testing",
  heroImg: "/hero-fakerestapi.png",
  tagline:
  "Evaluating API Reliability Through Structured Test Planning, Manual Testing, and Defect Analysis.",
  year: "2026",
  stack: [
    "Postman",
    "Google Docs",
    "Manual Testing",
    "API Testing",
    "Test Planning",
    "Test Case Design",
    "Bug Reporting",
  ],
  features: [
    "Designed a comprehensive test plan defining testing objectives, scope, approach, and success criteria for the Books API endpoint.",
    "Created detailed test cases covering CRUD operations, data validation, and negative testing scenarios.",
    "Executed manual API testing using Postman to validate request and response behavior across multiple endpoints.",
    "Performed error-handling validation for invalid payloads, duplicate identifiers, and unexpected user inputs.",
    "Documented defects through structured bug reports including reproduction steps, expected results, actual results, and severity assessment.",
    "Produced a test summary report containing testing metrics, defect analysis, and overall quality evaluation of the API.",
  ],
  impact: [
    "Discovered defects in 87.5% of executed test cases, highlighting significant reliability issues within the API implementation.",
    "Enabled clearer decision-making regarding product readiness through comprehensive testing documentation and quality assessment.",
    "Improved visibility into system weaknesses by validating both positive and negative API scenarios.",
],
  links: {
    live: "https://drive.google.com/drive/folders/1jynIsETRC1gyUjRLEwxO1Vt7nBHjBSIi",
    repo: "https://github.com/NaufalFadhiil/qa-manual-portfolio-naufal/tree/main/fake-restapi-books-testing",
  },
};

export default function FakeRestApiDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
