import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Booking.com Automation Testing",
  category: "Selenium - Test Automation",
  heroImg: "/dashboard-bookingcom.png",
  tagline:
    "Automating End-to-End Hotel Booking Scenarios Using Selenium WebDriver and Python.",
  year: "2026",
  stack: [
    "Python",
    "Selenium WebDriver",
    "Pytest",
    "ChromeDriver",
    "Git",
    "GitHub",
  ],
  features: [
    "Automated hotel search workflow including destination selection, check-in date, and check-out date inputs.",
    "End-to-end validation of the booking process through browser-based UI automation using Selenium WebDriver.",
    "Automated interaction with dynamic web elements such as calendars, search filters, and booking forms.",
    "Execution of repeatable regression test scenarios to verify booking functionality and user flows.",
    "Structured test scripts designed to improve test efficiency and reduce repetitive manual testing efforts.",
    "Automated verification of expected UI behavior and navigation across multiple booking pages.",
  ],
  impact: [
    "Reduced repetitive manual testing effort by automating critical hotel booking workflows.",
    "Improved testing efficiency through reusable Selenium scripts for regression and functional validation.",
    "Enhanced confidence in application stability by continuously verifying core user journeys and booking functionality.",
  ],
  links: {
    repo: "https://github.com/NaufalFadhiil/qa-automation-portfolio-naufal/tree/main/selenium-basic/booking_com",
  },
};

export default function BookingComDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}