import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Kalorin AI Testing (E2E)",
  category: "E2E Testing (Manual & Automation) - Quality Assurance",
  heroImg:
    "/hero-kalorinai.png",
  tagline:
    "Ensuring Application Quality, Reliability, and User Experience Through Comprehensive QA Testing.",
  year: "2026",
  stack: [
    "Manual Testing",
    "Automation Testing",
    "API Testing",
    "Postman",
    "Chrome DevTools",
    "Test Case Design Qase.io",
    "Bug Reporting",
    "Git",
    "GitHub",
    "Cypress"
  ],
  features: [
    "Comprehensive manual testing documentation including test plans, test scenarios, test cases, bug reports, and testing summaries.",
    "Functional, UI, form validation, negative, and exploratory testing covering critical user journeys and application workflows.",
    "API testing process using Postman to validate endpoints, request and response structures, and error-handling mechanisms.",
    "Structured testing coverage for authentication, protected routes, onboarding, food search, AI food scanner, meal tracking, recommendations, weekly insights, and profile management.",
    "Centralized bug reporting and issue-tracking workflow to identify, document, and communicate defects effectively.",
    "Automation testing preparation with Cypress for future regression testing of core application features.",
  ],
  impact: [
    "Improved application reliability by identifying functional defects and validating critical user flows before release.",
    "Enhanced software quality through systematic testing, comprehensive documentation, and structured defect reporting.",
    "Reduced the risk of production issues by validating application behavior, API integrations, and user experience across key features.",
  ],
  links: {
    live: "https://drive.google.com/drive/folders/1kZVv0f7NFfeeFQ00p0ktTxTpX7bBxkA2?usp=sharing",
    repo: "https://github.com/NaufalFadhiil/kalorin-ai-testing",
  },
};

export default function KaloriNAIDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
