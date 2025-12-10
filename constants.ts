// =================================================================================================
// EDIT THIS FILE TO PERSONALIZE YOUR PORTFOLIO
// =================================================================================================

export const PORTFOLIO_DATA = {
  // === Personal Information ===
  name: "Polisetty Cyril",
  title: "Creative Developer & UI/UX Enthusiast",
  profileImage: "https://i.imgur.com/8I2tQ61.jpeg", // A professional, friendly headshot. Replace with your image URL.
  about: "I'm a passionate developer with a knack for creating beautiful, intuitive, and highly functional user interfaces. I love bringing ideas to life, from the initial concept in Figma to a fully deployed application. Let's build something amazing together.",
  
  // === Contact & Social Media ===
  contact: {
    phone: "+91-8125624037",
    email: "cyrilp4107@gmail.com",
  },
  socials: {
    linkedin: "https://www.linkedin.com/", // Add your LinkedIn profile URL
    twitter: "https://twitter.com/",   // Add your Twitter profile URL
  },

  // === Resume Section ===
  // This data populates the new, detailed resume page.
  resume: {
    profileImage: "https://i.imgur.com/5za8v56.jpeg", // A different professional photo for the resume page.
    summary: "Highly motivated and driven computer science student seeking internship opportunities to enhance practical software development skills. Proficient in Python, Java, and C++, with a strong coding background and a passion for innovation.",
    experience: [
      {
        title: "Software Development Intern",
        company: "Innovate Inc.",
        date: "Summer 2023",
        description: [
          "Assisted in developing a new backend database using Microsoft Prelude.",
          "Wrote and updated backend API performance, leading to a 10% reduction in latency.",
          "Collaborated with the lead developer in Python to improve code stability and engagement."
        ],
      },
      {
        title: "IT Support Assistant",
        company: "Tech Desk",
        date: "2022 - 2023",
        description: [
          "Provided technical support for students and faculty regarding system issues.",
          "Developed troubleshooting guides for the network and software performance.",
        ],
      },
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "Keshav Memorial College of Engineering",
        date: "2023 - 2027",
        details: "Currently in 3rd Year | CGPA: 7.8",
      },
    ],
    skills: [ "Python", "Java", "C++", "JavaScript", "React", "Node.js", "Problem-Solving", "Software Development" ],
    achievements: [
      {
        title: "Top Coder Coding Challenge",
        source: "National Competition",
        description: "Achieved the highest score in a coding challenge against 500+ participants by efficiently solving data structure and algorithm problems.",
      },
      {
        title: "Outstanding Hackathon Participant",
        source: "Hackathon XYZ",
        description: "Received recognition for exceptional problem-solving skills and teamwork.",
      },
    ],
  },
  
  // === Projects Section ===
  projects: [
    {
      id: 1,
      title: "Project One",
      description: "A description of the first project, highlighting the technologies used and the problems solved.",
      imageUrl: "https://picsum.photos/seed/project1/600/400",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Project Two",
      description: "A detailed overview of the second project, focusing on the creative process and outcomes.",
      imageUrl: "https://picsum.photos/seed/project2/600/400",
      technologies: ["Node.js", "Express", "MongoDB"],
    },
    {
      id: 3,
      title: "Project Three",
      description: "Showcasing a collaborative effort, this project demonstrates teamwork and modern development practices.",
      imageUrl: "https://picsum.photos/seed/project3/600/400",
      technologies: ["Figma", "Next.js", "Vercel"],
    },
  ],

  // === AI Chat Assistant Settings ===
  aiChat: {
    starterPrompts: [
      "What are Cyril's key skills?",
      "Tell me about his experience at Innovate Inc.",
      "What are his notable achievements?",
    ],
    // This context is fed to the AI to answer questions about you.
    // It's automatically built from the resume data above, so you only need to edit it there.
    bioContext: `
      You are Cyril's personal AI assistant. Your goal is to answer questions from recruiters and potential collaborators based on the information below. Be friendly, professional, and concise.

      About Polisetty Cyril:
      - Name: ${"Polisetty Cyril"}
      - Role: ${"Creative Full-Stack Developer"}
      - Summary: ${"Highly motivated and driven computer science student seeking internship opportunities to enhance practical software development skills. Proficient in Python, Java, and C++, with a strong coding background and a passion for innovation."}

      Key Skills:
      - ${["Python", "Java", "C++", "JavaScript", "React", "Node.js", "Problem-Solving", "Software Development"].join("\n- ")}

      Work Experience:
      - Software Development Intern at Innovate Inc. (Summer 2023): Assisted in developing a new backend database using Microsoft Prelude, improved API performance by 10%, and collaborated on Python code stability.
      - IT Support Assistant at Tech Desk (2022-2023): Provided technical support and developed troubleshooting guides.

      Education:
      - Bachelor of Science in Computer Science from the University of Dreams (2020-2024), graduated with honors (3.8 GPA).

      Notable Achievements:
      - Won the Top Coder Coding Challenge against 500+ participants.
      - Recognized as an Outstanding Hackathon Participant at Hackathon XYZ for problem-solving and teamwork.

      Career Goals:
      - To join a forward-thinking company where she can contribute to building innovative and user-friendly digital products.
      - Aspires to grow into a senior leadership role, mentoring other developers and influencing product strategy.
      - Passionate about accessibility and wants to champion inclusive design in her next role.
    `,
  },
};