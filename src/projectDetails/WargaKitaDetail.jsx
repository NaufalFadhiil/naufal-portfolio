import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "WargaKita",
  category: "Mobile Application",
  heroImg: "/hero-wargakita.png",
  tagline:
    "Empowering Community Collaboration and Mutual Support Through a Single Digital Platform.",
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
};

export default function WargaKitaDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}