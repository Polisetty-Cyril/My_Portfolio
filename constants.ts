// =================================================================================================
// EDIT THIS FILE TO PERSONALIZE YOUR PORTFOLIO
// =================================================================================================

export const PORTFOLIO_DATA = {
  // === Personal Information ===
  name: "Polisetty Cyril",
  title: "Data Scientist",
  profileImage: "/Cyril.jpg", // Local profile image
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

  // === Resume Section ===t 
  // This data populates the new, detailed resume page.
  resume: {
    profileImage: "/Cyril.jpg",
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
        company: "Google Summer of Code",
        date: "2024 - Present",
        description: [
          "Developed tools for converting chemical nomenclature between SMILES (Simplified Molecular Input Line Entry System) and IUPAC naming conventions",
          "Implemented bidirectional conversion algorithms to translate SMILES notation to IUPAC names and vice versa",
          "Contributed to open-source cheminformatics projects, enhancing molecular structure representation and standardization",
          "Collaborated with the open-source community to improve chemical data processing and molecular notation systems",
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
    skills: {
      "Programming & Development": [
        "Python", "SQL", "Java", "Git", "GitHub"
      ],
      "Technical Skills & Tools": [
        "Machine Learning", "Deep Learning", "Statistical Analysis", "Data Visualization",
        "Pandas", "NumPy", "Scikit-learn", "PyTorch",
        "Predictive Modeling", "NLP", "Feature Engineering",
        "Matplotlib",
        "MongoDB", "Jupyter Notebook", "Google Colab"
      ],
      "Soft Skills & Qualities": [
        "Analytical Thinking", "Problem Solving", "Research & Development",
        "Data-Driven Decision Making", "Attention to Detail", "Continuous Learning",
        "Team Collaboration", "Effective Communication", "Leadership"
      ]
    },
    achievements: [
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
      technologies: ["Python", "Jupyter Notebook", "MoE", "Machine Learning", "RAG", "React", "FastAPI"],
      demoUrl: "https://huggingface.co/spaces/CyrilPolisetty/aragog-medical-ai",
      sourceCode: "https://github.com/Polisetty-Cyril/ARAGOG",
    },
    {
      id: 2,
      title: "RAG-based Legal Q&A System",
      description: "ArguLex – Comprehensive AI-powered legal assistant using RAG and GANs to simplify law for the public and enhance legal argumentation for professionals. Features document summarization and intelligent Q&A.",
      imageUrl: "https://picsum.photos/seed/argulex/600/400",
      technologies: ["Python", "RAG", "PyTorch", "Machine Learning", "React"],
      demoUrl: "https://argulex.vercel.app",
      sourceCode: "https://github.com/Polisetty-Cyril/ArguLex",
    },
    {
      id: 3,
      title: "Voice Assistant Legal AI",
      description: "AI-powered legal voice assistant featuring real-time voice interaction, legal Q&A capabilities, and intelligent document processing. Enables users to access legal information through natural voice commands.",
      imageUrl: "https://picsum.photos/seed/voicelegal/600/400",
      technologies: ["Python", "Speech Recognition", "FastAPI", "Machine Learning"],
      demoUrl: "https://voice-legal-ai.vercel.app",
      sourceCode: "https://github.com/Polisetty-Cyril/Voice-Assistant-Legal-AI",
    },
    {
      id: 4,
      title: "Vakil - Legal Document Demystifier",
      description: "Generative AI application designed to demystify legal documents, making complex legal language accessible to everyone. Features document analysis, summarization, and explanation capabilities.",
      imageUrl: "https://picsum.photos/seed/vakil/600/400",
      technologies: ["TypeScript", "React", "OpenAI", "NLP", "Document Processing"],
      demoUrl: "https://vakil-legal.vercel.app",
      sourceCode: "https://github.com/Polisetty-Cyril/Vakil",
    },
    {
      id: 5,
      title: "AI-Shield",
      description: "Security-focused AI project aimed at protecting systems through intelligent threat detection and prevention. Implements machine learning algorithms for anomaly detection and security monitoring.",
      imageUrl: "https://picsum.photos/seed/aishield/600/400",
      technologies: ["JavaScript", "Machine Learning", "Security", "Node.js"],
      demoUrl: "https://ai-shield-demo.vercel.app",
      sourceCode: "https://github.com/Polisetty-Cyril/AI-Shield",
    },
  ],

  // === AI Chat Assistant Settings ===
  aiChat: {
    starterPrompts: [
      "How does Cyril handle large datasets?",
      "Tell me about his model deployment experience",
      "Which projects use MongoDB for data storage?",
      "What's his problem-solving approach?",
      "Why should we hire Cyril?",
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
      - Programming: Python, SQL, Java
      - Data Science: Machine Learning, Deep Learning, Statistical Analysis, Data Visualization, Predictive Modeling
      - Data Tools: Pandas, NumPy, Scikit-learn, PyTorch, Matplotlib
      - Database: MongoDB
      - Tools: Git, GitHub, Jupyter Notebook, Google Colab, Feature Engineering
      Notable Projects:
      - ARAGOG: Automated RAG evaluation framework for assessing answer similarity and retrieval relevance (1 star, 4 forks on GitHub)
      - Voice Assistant Legal AI: AI-powered legal voice assistant with real-time interaction and Q&A capabilities
      - Vakil: Generative AI for demystifying legal documents
      - AI-Shield: Security-focused AI for intelligent threat detection
      - RAG-based Legal Q&A (ArguLex): Comprehensive legal assistant using RAG and PyTorch

      Education:
      - B.Tech in Computer Science, Keshav Memorial College of Engineering (2023-2027)
      - Currently in 3rd Year | CGPA: 7.8
      - Focus: Artificial Intelligence & Machine Learning

      Achievements:
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