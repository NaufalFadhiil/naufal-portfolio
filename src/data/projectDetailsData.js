// --- Project Detail Data ---
// Pure data objects extracted from project detail components.
// This file is imported by aiContext.js and ChatWidget.jsx so that
// the React components (with JSX) remain lazily loaded and don't
// get pulled into the ChatWidget bundle.

export const PROJECT_DETAILS_DATA = {
  wargakita: {
    title: "WargaKita",
    category: "Mobile Application",
    tagline:
      "Empowering Community Collaboration and Mutual Support Through a Single Digital Platform.",
    year: "2025",
    stack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Provider",
      "Git",
      "GitHub",
    ],
    features: [
      "Community announcement board for sharing important updates such as neighborhood meetings, community service events, Independence Day celebrations, and other social activities accessible to all members.",
      "Item lending and assistance system that allows residents to request or borrow items such as chairs, ladders, drills, and other household tools, while enabling neighbors to respond and provide support.",
      "Resident profile management featuring basic user information such as name and contact details to promote transparency, trust, and stronger community connections.",
    ],
    impact: [
      "Promotes digitalized community cooperation by making neighborhood communication and coordination more accessible and efficient.",
      "Encourages stronger social connections and mutual assistance among residents through collaborative resource sharing.",
      "Supports the development of resilient and connected communities by fostering participation, trust, and collective action.",
    ],
    links: {
      live: "https://drive.google.com/drive/folders/1HbCRjYP_yOxrZmuRB7yIXV-xp8mDiYVD",
      repo: "https://github.com/NaufalFadhiil/WargaKitaAPP",
    },
  },
  villanakey: {
    title: "VillaNaKey",
    category: "Mobile Booking Application",
    tagline:
      "A Modern Villa Reservation Platform Designed for Convenient and Hassle-Free Bookings.",
    year: "2025",
    stack: [
      "Flutter",
      "Dart",
      "Firebase Authentication",
      "Cloud Firestore",
      "Provider",
      "Connectivity Plus",
      "Git",
      "GitHub",
    ],
    features: [
      "Interactive booking calendar that allows guests to easily select check-in and check-out dates while viewing real-time availability.",
      "Secure user authentication with email-based OTP verification for seamless registration and login.",
      "Reservation management system that enables users to view booking details, track reservation status, and access booking history.",
      "Automatic date-blocking mechanism that prevents double bookings by disabling dates that have already been reserved.",
      "User profile management featuring personal information and contact details for a personalized booking experience.",
      "Internet connectivity monitoring that detects online and offline status to improve application reliability and user experience.",
      "Skeleton loading states that provide visual feedback while data is being fetched, creating a smoother and more responsive interface.",
    ],
    impact: [
      "Simplifies the villa reservation process through a digital booking system that reduces manual coordination and booking errors.",
      "Improves booking accuracy by preventing scheduling conflicts with automated availability and date-blocking features.",
      "Enhances user experience through secure authentication, real-time reservation tracking, and responsive application performance.",
    ],
    links: {
      repo: "https://github.com/NaufalFadhiil/villaNaKey",
    },
  },
  "kalorin-ai-testing": {
    title: "KaloriN AI Testing",
    category: "Quality Assurance",
    tagline:
      "A Quality Assurance Testing Repository Focused on Validating Core User Flows and System Reliability.",
    year: "2025",
    stack: [
      "Manual Testing",
      "API Testing",
      "Postman",
      "Chrome DevTools",
      "Test Case Design",
      "Bug Reporting",
      "Git",
      "GitHub",
      "Cypress",
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
      live: "https://drive.google.com/drive/u/0/folders/1kZVv0f7NFfeeFQ00p0ktTxTpX7bBxkA2",
      repo: "https://github.com/NaufalFadhiil/kalorin-ai-testing",
    },
  },
  "fake-rest-api-books-testing": {
    title: "Fake REST API - Books Testing",
    category: "API Testing",
    tagline:
      "Evaluating API Reliability Through Structured Test Planning, Manual Testing, and Defect Analysis.",
    year: "2025",
    stack: [
      "Postman",
      "Manual Testing",
      "API Testing",
      "Test Planning",
      "Test Case Design",
      "Bug Reporting",
      "Git",
      "GitHub",
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
  },
  "booking-com-automation": {
    title: "Booking.com Automation Testing",
    category: "Test Automation",
    tagline:
      "Automating End-to-End Hotel Booking Scenarios Using Selenium WebDriver and Python.",
    year: "2025",
    stack: [
      "Python",
      "Selenium WebDriver",
      "ChromeDriver",
      "Git",
      "GitHub",
    ],
    features: [
      "Automated hotel search workflow including destination selection, check-in date, and check-out date inputs.",
      "End-to-end validation of booking functionality through browser-based UI automation.",
      "Automated interaction with dynamic web elements such as calendars, search filters, and booking forms.",
      "Execution of repeatable regression test scenarios to verify booking workflows and user journeys.",
      "Reusable Selenium scripts designed to improve testing efficiency and reduce repetitive manual testing activities.",
      "Automated verification of expected UI behavior and navigation across multiple booking pages.",
    ],
    impact: [
      "Reduced repetitive manual testing effort by automating critical hotel booking workflows.",
      "Improved testing efficiency through reusable Selenium automation scripts.",
      "Enhanced confidence in application stability by continuously validating core booking scenarios.",
    ],
    links: {
      repo: "https://github.com/NaufalFadhiil/qa-automation-portfolio-naufal/tree/main/selenium-basic/booking_com",
    },
  },
};
