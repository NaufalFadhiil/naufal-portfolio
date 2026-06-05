import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "VillaNaKey",
  category: "Mobile Booking Application",
  heroImg: "/hero-villanakey.png",
  tagline:
    "Villa Na Key is an exclusive mobile application designed for booking a single private villa, offering users a seamless and convenient reservation experience directly from their smartphones.",
  year: "2025",
  stack: [
    "Flutter",
    "Dart",
    "Firebase Authentication",
    "Cloud Firestore",
    "Provider",
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
};

export default function VillaNaKeyDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
