// =================================================================================================
// EDIT THIS FILE TO PERSONALIZE YOUR PORTFOLIO
// =================================================================================================

export const PORTFOLIO_DATA = {
  // === Personal Information ===
  name: "Polisetty Cyril",
  title: "Data Scientist",
  profileImage: "https://avatars.githubusercontent.com/u/195519681?v=4", // GitHub profile image
  about: "Passionate Data Scientist specializing in deep learning, machine learning, and statistical analysis to extract insights from complex datasets. Currently pursuing B.Tech in Computer Science at Keshav Memorial College of Engineering. I love training Deep Neural Networks on large datasets and creating data-driven solutions that solve real-world problems through advanced analytics and predictive modeling.",
  
  // === Contact & Social Media ===
  contact: {
    phone: "+91-8125624037",
    email: "cyrilp4107@gmail.com",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/polisetty-cyril/",
    github: "https://github.com/Polisetty-Cyril",
  },

  // === Resume Section ===
  // This data populates the new, detailed resume page.
  resume: {
    profileImage: "https://avatars.githubusercontent.com/u/195519681?v=4",
    summary: "Ambitious Computer Science student with strong expertise in data science, machine learning, and statistical modeling. Specializing in data analysis, predictive modeling, NLP, and extracting actionable insights from complex datasets. Proven track record in building data-driven solutions and machine learning models. Seeking opportunities to leverage data science techniques to solve complex real-world challenges and drive business decisions.",
    experience: [
      {
        title: "Data Scientist",
        company: "Freelance & Academic Projects",
        date: "2023 - Present",
        description: [
          "Developed ARAGOG, an automated data evaluation framework for assessing model outputs using statistical analysis and similarity metrics",
          "Built machine learning models for legal document analysis, achieving high accuracy in text classification and information extraction",
          "Performed exploratory data analysis and feature engineering on large-scale datasets to improve model performance",
          "Applied NLP and deep learning techniques for document analysis, sentiment analysis, and predictive modeling"
        ],
      },
      {
        title: "Open Source Contributor",
        company: "GitHub",
        date: "2024 - Present",
        description: [
          "Active contributor to AI and legal-tech projects with multiple repository forks and contributions",
          "Achieved Pull Shark badge for significant pull request contributions",
          "Collaborated on projects involving AI Shield, Vakil legal assistant, and RAG-based systems",
        ],
      },
    ],
    education: [
      {
        degree: "Bachelor of Technology in Computer Science",
        school: "Keshav Memorial College of Engineering",
        date: "2023 - 2027",
        details: "Currently in 3rd Year | CGPA: 7.8 | Focus: Artificial Intelligence & Machine Learning",
      },
    ],
    skills: [ 
      "Python", "R", "SQL", "Java", "C++",
      "Machine Learning", "Deep Learning", "Statistical Analysis", "Data Visualization",
      "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch",
      "Data Mining", "Predictive Modeling", "NLP", "Feature Engineering",
      "Tableau", "Power BI", "Matplotlib", "Seaborn",
      "PostgreSQL", "MongoDB", "Big Data", "Git", "Jupyter Notebook"
    ],
    achievements: [
      {
        title: "Pull Shark Achievement",
        source: "GitHub",
        description: "Recognized for significant contributions through pull requests to open-source projects, demonstrating collaborative development skills and code quality.",
      },
      {
        title: "ARAGOG RAG Framework",
        source: "Personal Project",
        description: "Developed an innovative automated framework for evaluating RAG outputs on answer similarity and retrieval relevance, gaining recognition with 1 star and 4 forks on GitHub.",
      },
      {
        title: "AI-Powered Legal Tech Innovator",
        source: "Multiple Projects",
        description: "Created multiple AI-powered legal assistance applications including voice assistants, document summarization, and Q&A systems using advanced NLP techniques.",
      },
    ],
  },
  
  // === Projects Section ===
  projects: [
    {
      id: 1,
      title: "ARAGOG - RAG Evaluation Framework",
      description: "An automated framework for evaluating RAG (Retrieval-Augmented Generation) outputs on answer similarity and retrieval relevance without human labeling. Built using advanced NLP techniques and machine learning models.",
      imageUrl: "https://picsum.photos/seed/aragog/600/400",
      technologies: ["Python", "Jupyter Notebook", "NLP", "Machine Learning", "RAG"],
    },
    {
      id: 2,
      title: "Voice Assistant Legal AI",
      description: "AI-powered legal voice assistant featuring real-time voice interaction, legal Q&A capabilities, and intelligent document processing. Enables users to access legal information through natural voice commands.",
      imageUrl: "https://picsum.photos/seed/voicelegal/600/400",
      technologies: ["Python", "Speech Recognition", "NLP", "FastAPI", "Machine Learning"],
    },
    {
      id: 3,
      title: "Vakil - Legal Document Demystifier",
      description: "Generative AI application designed to demystify legal documents, making complex legal language accessible to everyone. Features document analysis, summarization, and explanation capabilities.",
      imageUrl: "https://picsum.photos/seed/vakil/600/400",
      technologies: ["TypeScript", "React", "OpenAI", "NLP", "Document Processing"],
    },
    {
      id: 4,
      title: "AI-Shield",
      description: "Security-focused AI project aimed at protecting systems through intelligent threat detection and prevention. Implements machine learning algorithms for anomaly detection and security monitoring.",
      imageUrl: "https://picsum.photos/seed/aishield/600/400",
      technologies: ["JavaScript", "Machine Learning", "Security", "Node.js"],
    },
    {
      id: 5,
      title: "RAG-based Legal Q&A System",
      description: "ArguLex – Comprehensive AI-powered legal assistant using RAG and GANs to simplify law for the public and enhance legal argumentation for professionals. Features document summarization and intelligent Q&A.",
      imageUrl: "https://picsum.photos/seed/argulex/600/400",
      technologies: ["Python", "RAG", "GANs", "NLP", "TensorFlow"],
    },
  ],

  // === AI Chat Assistant Settings ===
  aiChat: {
    starterPrompts: [
      "What are Cyril's data science specializations?",
      "Tell me about the ARAGOG project",
      "What data science tools does Cyril use?",
      "What are his data analysis achievements?",
    ],
    // This context is fed to the AI to answer questions about you.
    // It's automatically built from the resume data above, so you only need to edit it there.
    bioContext: `
      You are Cyril's personal AI assistant. Your goal is to answer questions from recruiters and potential collaborators based on the information below. Be friendly, professional, and concise.

      About Polisetty Cyril:
      - Name: Polisetty Cyril
      - Role: Data Scientist
      - Bio: I like to train Deep Neural Nets on large datasets and extract meaningful insights from data
      - Summary: Ambitious Computer Science student specializing in data science, machine learning, statistical analysis, and predictive modeling. Strong foundation in data analysis, visualization, and building data-driven solutions.

      Key Skills:
      - Programming: Python, R, SQL, Java, C++
      - Data Science: Machine Learning, Deep Learning, Statistical Analysis, Data Visualization, Predictive Modeling
      - Data Tools: Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch, Tableau, Power BI, Matplotlib, Seaborn
      - Database: PostgreSQL, MongoDB, Big Data
      - Tools: Git, Jupyter Notebook, Feature Engineering, Data Mining

      Notable Projects:
      - ARAGOG: Automated RAG evaluation framework for assessing answer similarity and retrieval relevance (1 star, 4 forks on GitHub)
      - Voice Assistant Legal AI: AI-powered legal voice assistant with real-time interaction and Q&A capabilities
      - Vakil: Generative AI for demystifying legal documents
      - AI-Shield: Security-focused AI for intelligent threat detection
      - RAG-based Legal Q&A (ArguLex): Comprehensive legal assistant using RAG and GANs

      Education:
      - B.Tech in Computer Science, Keshav Memorial College of Engineering (2023-2027)
      - Currently in 3rd Year | CGPA: 7.8
      - Focus: Artificial Intelligence & Machine Learning

      Achievements:
      - GitHub Pull Shark Achievement for significant open-source contributions
      - Developed multiple AI-powered legal-tech applications
      - Active open-source contributor with multiple repository contributions
      - Specialized in RAG systems and deep learning applications

      Professional Interests:
      - Training deep neural networks on large datasets and extracting insights
      - Building predictive models and statistical analysis systems
      - Data-driven decision making and business intelligence
      - Natural Language Processing and text analytics
      - Open-source collaboration and data science community contribution

      Career Goals:
      - Seeking opportunities in data science and machine learning research
      - Interested in applying advanced analytics to solve complex business problems
      - Passionate about turning data into actionable insights and strategic decisions
      - Eager to contribute to data-driven innovation and predictive modeling projects
    `,
  },
};