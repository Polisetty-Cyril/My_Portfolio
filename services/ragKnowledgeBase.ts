// RAG-like Knowledge Base for Portfolio Chat
// Each entry has: question patterns, keywords, and detailed answer

export interface KnowledgeEntry {
  id: string;
  category: string;
  keywords: string[];
  patterns: string[];
  answer: string;
  relatedIds?: string[];
}

export const KNOWLEDGE_BASE: KnowledgeEntry[] = [
  // === PROJECTS ===
  {
    id: "aragog_overview",
    category: "project",
    keywords: ["aragog", "rag", "evaluation", "framework", "automated"],
    patterns: ["what is aragog", "tell me about aragog", "aragog project"],
    answer: "ARAGOG is one of Cyril's most innovative projects! 🕷️\n\nIt's an automated framework for evaluating RAG (Retrieval-Augmented Generation) systems. The genius part? It assesses answer similarity and retrieval relevance WITHOUT needing human labeling!\n\nTech stack: Python, Jupyter Notebook, Machine Learning, RAG, React, FastAPI\n\nThe project has gained traction with 1 star and 4 forks on GitHub and is deployed on Hugging Face Spaces!",
    relatedIds: ["aragog_role", "aragog_tech"]
  },
  {
    id: "aragog_role",
    category: "project_role",
    keywords: ["aragog", "role", "responsibility", "what did", "contribution"],
    patterns: ["role in aragog", "what did he do in aragog", "aragog responsibilities"],
    answer: "In ARAGOG, Cyril took on a **full-stack ML role**:\n\n🤖 **Model Building (Core Role):**\n• Designed the automated evaluation framework\n• Implemented similarity metrics for answer assessment\n• Built retrieval relevance scoring algorithms\n• Developed the RAG evaluation pipeline\n\n⚡ **Backend:** FastAPI for serving the evaluation API\n⚛️ **Frontend:** React-based web interface\n\n💡 **Key Achievement:** Created an innovative solution that evaluates RAG systems WITHOUT human labeling!",
    relatedIds: ["aragog_overview", "aragog_tech"]
  },
  {
    id: "aragog_tech",
    category: "project_tech",
    keywords: ["aragog", "tech stack", "technology", "tools", "built with"],
    patterns: ["aragog tech stack", "what was aragog built with", "aragog technologies"],
    answer: "ARAGOG's tech stack is comprehensive! 🛠️\n\n🐍 Core: Python & Jupyter Notebook\n🤖 ML/AI: Machine Learning algorithms, RAG (Retrieval-Augmented Generation)\n⚛️ Frontend: React\n⚡ Backend: FastAPI\n\nThis combination enables:\n• Automated evaluation without human labeling\n• Fast API responses for real-time analysis\n• Interactive web interface\n• Scalable RAG system assessment",
    relatedIds: ["aragog_overview", "deployment_experience"]
  },
  {
    id: "argulex_overview",
    category: "project",
    keywords: ["argulex", "legal", "q&a", "assistant", "rag"],
    patterns: ["what is argulex", "tell me about argulex", "legal q&a"],
    answer: "ArguLex is Cyril's comprehensive AI-powered legal assistant! ⚖️\n\nIt uses RAG (Retrieval-Augmented Generation) and GANs to make law accessible to everyone:\n• Summarizes complex legal documents\n• Answers legal questions intelligently\n• Helps both the public AND legal professionals\n\nBuilt with: Python, RAG, PyTorch, Machine Learning, React\n\nDeployed on Vercel for easy access!",
    relatedIds: ["argulex_role", "pytorch_usage"]
  },
  {
    id: "argulex_role",
    category: "project_role",
    keywords: ["argulex", "role", "what did", "responsibility"],
    patterns: ["role in argulex", "what did he do in argulex"],
    answer: "In ArguLex, Cyril was **ML/NLP Engineer + Full-Stack Developer**:\n\n🤖 **Model Building (Primary):**\n• Implemented RAG system\n• Integrated GANs for text generation\n• Built NLP pipeline for legal document processing\n• Trained PyTorch models for legal Q&A\n\n📊 **Data Engineering:**\n• Processed large legal document datasets\n• Created embeddings for semantic search\n\n⚛️ **Frontend:** React interface\n\n💡 Main contribution: The intelligent RAG system making legal documents accessible!",
    relatedIds: ["argulex_overview", "rag_expertise"]
  },
  {
    id: "voice_legal_overview",
    category: "project",
    keywords: ["voice", "assistant", "speech", "legal ai"],
    patterns: ["voice assistant", "voice legal ai", "speech legal"],
    answer: "The Voice Assistant Legal AI is impressive! 🎤\n\nIt enables legal assistance through natural voice interaction:\n• Real-time voice-to-text processing\n• Legal Q&A capabilities\n• Intelligent document processing\n• Natural voice commands\n\nBuilt with: Python, Speech Recognition, FastAPI, ML algorithms\n\nMaking legal information accessible through simple conversation!",
    relatedIds: ["voice_legal_role"]
  },
  {
    id: "voice_legal_role",
    category: "project_role",
    keywords: ["voice", "role", "what did", "assistant"],
    patterns: ["role in voice assistant", "voice assistant work"],
    answer: "In Voice Assistant Legal AI, Cyril was **ML Engineer + Speech Processing Developer**:\n\n🎤 **Core ML Work:**\n• Integrated speech recognition models\n• Built voice-to-text pipeline\n• Developed NLP for query understanding\n• Implemented text-to-speech responses\n• Created legal knowledge retrieval system\n\n⚡ **Backend:** FastAPI for voice processing endpoints\n\n💡 Innovation: Making legal assistance accessible through natural voice interaction!",
    relatedIds: ["voice_legal_overview", "deployment_experience"]
  },
  {
    id: "vakil_overview",
    category: "project",
    keywords: ["vakil", "legal", "document", "demystify", "genai"],
    patterns: ["what is vakil", "tell me about vakil"],
    answer: "Vakil demystifies legal documents! 📄\n\nUsing Generative AI to:\n• Break down complex legal language\n• Analyze documents\n• Provide clear summaries\n• Explain legal concepts simply\n\nTech stack: TypeScript, React, OpenAI, NLP, Document Processing\n\nMaking law accessible to everyone, not just lawyers!",
    relatedIds: ["vakil_role"]
  },
  {
    id: "vakil_role",
    category: "project_role",
    keywords: ["vakil", "role", "what did", "responsibility"],
    patterns: ["role in vakil", "vakil work"],
    answer: "In Vakil, Cyril was **NLP Engineer + TypeScript Developer**:\n\n🤖 **NLP/AI Work (Primary):**\n• Integrated OpenAI for document analysis\n• Built prompts for legal text simplification\n• Developed document parsing pipeline\n• Created summarization algorithms\n\n⚛️ **Frontend:** TypeScript/React interface\n\n💡 Contribution: Using GenAI to break down complex legal jargon into simple language!",
    relatedIds: ["vakil_overview"]
  },
  {
    id: "aishield_overview",
    category: "project",
    keywords: ["ai-shield", "aishield", "security", "threat", "detection", "cybersecurity"],
    patterns: ["what is ai-shield", "ai shield", "security project", "tell me about ai-shield"],
    answer: "AI-Shield is Cyril's cybersecurity project! 🛡️\n\n**What it does:**\n• Detects threats intelligently using ML\n• Prevents security breaches proactively\n• Anomaly detection for unusual patterns\n• Continuous system monitoring\n• Real-time threat classification\n\n**Tech Stack:** JavaScript, Machine Learning, Node.js\n\n**Key Innovation:** Applying ML to cybersecurity - using data patterns to identify and prevent threats before they cause damage!\n\n**Use Cases:**\n• Network intrusion detection\n• Malware identification\n• Unusual behavior detection\n• Security log analysis\n\nIt's all about protecting systems through intelligent AI!",
    relatedIds: ["aishield_role", "aishield_tech", "ml_expertise"]
  },
  {
    id: "aishield_role",
    category: "project_role",
    keywords: ["ai-shield", "role", "what did", "security", "responsibility"],
    patterns: ["role in ai-shield", "ai-shield work", "what did he do in ai-shield"],
    answer: "In AI-Shield, Cyril was **ML Security Engineer**:\n\n🛡️ **Machine Learning (Core):**\n• Developed anomaly detection algorithms\n• Built threat classification models\n• Implemented ML-based security monitoring\n• Created pattern recognition for attacks\n• Trained models on security datasets\n\n⚙️ **Backend (Node.js):**\n• Security monitoring endpoints\n• Real-time threat detection system\n• Alert management and notification\n• API for security metrics\n\n📊 **Data Analysis:**\n• Security log processing\n• Feature extraction from network data\n• Statistical analysis for threat detection\n• Time-series analysis for patterns\n\n💡 His contribution: Applying ML to cybersecurity for intelligent threat detection - making security proactive instead of reactive!",
    relatedIds: ["aishield_overview", "aishield_tech"]
  },
  {
    id: "aishield_tech",
    category: "project_tech",
    keywords: ["ai-shield", "tech", "stack", "technology", "built with"],
    patterns: ["ai-shield tech stack", "ai-shield technologies", "what was ai-shield built with"],
    answer: "AI-Shield's tech stack for cybersecurity! 🛠️\n\n⚙️ **Backend:** Node.js for real-time processing\n💻 **Language:** JavaScript\n🤖 **ML:** Machine Learning algorithms for threat detection\n📊 **Data Processing:** Log analysis and feature extraction\n🔔 **Monitoring:** Real-time alert system\n\n**ML Capabilities:**\n• Anomaly detection algorithms\n• Classification models for threats\n• Pattern recognition\n• Statistical analysis\n\n**Infrastructure:**\n• Real-time data streaming\n• Alert notification system\n• Logging and metrics\n\nDesigned for production security monitoring!",
    relatedIds: ["aishield_overview", "aishield_role"]
  },

  // === SKILLS & EXPERIENCE ===
  {
    id: "skills_overview",
    category: "skills",
    keywords: ["skill", "technology", "tech", "know", "tools"],
    patterns: ["what skills", "technologies", "what does he know"],
    answer: "Cyril has a comprehensive data science toolkit! 📊\n\n💻 Programming: Python, SQL, Java\n📊 Data Science: Machine Learning, Deep Learning, Statistical Analysis, Predictive Modeling\n🛠️ Libraries: Pandas, NumPy, Scikit-learn, PyTorch, Matplotlib\n🗄️ Database: MongoDB\n⚙️ Tools: Git, GitHub, Jupyter Notebook, Google Colab\n🎯 Specialties: NLP, Feature Engineering, Data Visualization\n\nHe's especially passionate about training neural networks on large datasets!",
    relatedIds: ["python_expertise", "ml_expertise"]
  },
  {
    id: "python_expertise",
    category: "skills",
    keywords: ["python", "programming"],
    patterns: ["python skills", "python experience"],
    answer: "Python is Cyril's primary language! 🐍\n\nHe uses it extensively for:\n• Machine Learning & Deep Learning\n• Data analysis with Pandas & NumPy\n• Building ML models with Scikit-learn & PyTorch\n• NLP projects\n• Statistical analysis\n\nAll his data science work happens in Python!",
    relatedIds: ["skills_overview", "ml_expertise"]
  },
  {
    id: "ml_expertise",
    category: "skills",
    keywords: ["machine learning", "ml", "deep learning", "neural network"],
    patterns: ["machine learning skills", "ml experience", "deep learning"],
    answer: "Machine Learning is Cyril's forte! 🤖\n\nHe specializes in:\n• Building predictive models\n• Deep learning with PyTorch\n• NLP applications\n• Statistical analysis\n• RAG systems\n• Feature engineering\n\nHe loves training neural networks on large datasets and has applied ML across multiple domains!",
    relatedIds: ["pytorch_usage", "rag_expertise"]
  },
  {
    id: "pytorch_usage",
    category: "skills",
    keywords: ["pytorch", "deep learning", "neural network"],
    patterns: ["pytorch experience", "pytorch projects"],
    answer: "Cyril uses PyTorch extensively in his projects:\n\n🔥 **ArguLex:** Trained models for legal Q&A\n🤖 **Deep Learning:** Neural network implementations\n📊 **Model Training:** Large-scale model development\n\nPyTorch is his go-to framework for deep learning work!",
    relatedIds: ["ml_expertise", "argulex_overview"]
  },
  {
    id: "rag_expertise",
    category: "skills",
    keywords: ["rag", "retrieval", "augmented", "generation"],
    patterns: ["rag experience", "rag systems", "retrieval augmented"],
    answer: "Cyril is an expert in RAG (Retrieval-Augmented Generation) systems!\n\n🕷️ **ARAGOG:** Built evaluation framework for RAG systems\n⚖️ **ArguLex:** Implemented RAG for legal Q&A\n\nHis expertise includes:\n• Building retrieval pipelines\n• Creating embeddings for semantic search\n• Evaluating RAG performance\n• Deploying RAG applications\n\nThis is one of his key specializations!",
    relatedIds: ["aragog_overview", "argulex_overview"]
  },

  // === EXPERIENCE & EDUCATION ===
  {
    id: "experience_overview",
    category: "experience",
    keywords: ["experience", "work", "job", "career", "professional"],
    patterns: ["work experience", "professional experience", "career"],
    answer: "Cyril has impressive hands-on experience:\n\n💼 **Data Scientist (2023 - Present)**\nFreelance & Academic Projects:\n• Developed ARAGOG evaluation framework\n• Built ML models for legal document analysis\n• Performed data analysis on large datasets\n• Applied NLP & deep learning\n\n🌐 **Open Source Contributor (2024 - Present)**\nGoogle Summer of Code:\n• Built tools for chemical nomenclature conversion\n• Contributed to cheminformatics projects\n\nEarly career but strong practical experience!",
    relatedIds: ["years_experience", "gsoc_contribution"]
  },
  {
    id: "years_experience",
    category: "experience",
    keywords: ["how long", "years", "experience"],
    patterns: ["years of experience", "how long working"],
    answer: "Cyril is currently in his 3rd year of B.Tech with practical experience since 2023:\n\n📅 Data Science: 2023 - Present (2+ years)\n• Freelance & academic projects\n• Multiple production-ready ML applications\n\n📅 Open Source: 2024 - Present (1+ year)\n• Google Summer of Code contributor\n\nWhile early career, he's built impressive real-world projects demonstrating strong practical skills!",
    relatedIds: ["experience_overview", "projects_overview"]
  },
  {
    id: "education",
    category: "education",
    keywords: ["education", "college", "university", "degree", "study"],
    patterns: ["education background", "where did he study", "college"],
    answer: "Cyril is pursuing B.Tech in Computer Science:\n\n🎓 Degree: Bachelor of Technology in Computer Science\n🏫 College: Keshav Memorial College of Engineering\n📅 Duration: 2023 - 2027 (Currently 3rd Year)\n📊 CGPA: 7.8\n🎯 Focus: Artificial Intelligence & Machine Learning\n\nCombining strong academics with hands-on project experience!",
    relatedIds: ["experience_overview"]
  },

  // === HR/RECRUITER QUESTIONS ===
  {
    id: "deployment_experience",
    category: "technical",
    keywords: ["deploy", "deployment", "production", "hosting"],
    patterns: ["deployment experience", "how deploy", "production experience"],
    answer: "Cyril has demonstrated deployment capabilities:\n\n🚀 **Deployment Platforms:**\n• Hugging Face Spaces (ARAGOG)\n• Vercel (ArguLex, Vakil, Voice Legal AI)\n• FastAPI for serving ML models\n\n💡 **Skills:**\n• Containerization\n• RESTful API design\n• Frontend integration\n• Real-time inference optimization\n\nHis projects aren't just notebooks - they're deployed, accessible applications!",
    relatedIds: ["aragog_overview", "projects_overview"]
  },
  {
    id: "data_handling",
    category: "technical",
    keywords: ["data", "large dataset", "processing", "pipeline"],
    patterns: ["handle data", "work with data", "data processing"],
    answer: "Cyril has hands-on experience with large-scale data handling:\n\n📊 **Data Processing:**\n• Pandas & NumPy for manipulation\n• Feature engineering on large datasets\n• Statistical analysis and EDA\n• Data cleaning pipelines\n\n🔄 **Workflow:**\n• Jupyter Notebook for experimentation\n• Google Colab for GPU processing\n• Version control with Git\n\n💡 **Examples:**\n• ARAGOG: Processed evaluation datasets\n• Legal AI: Handled large document corpora\n• NLP pipelines: Text preprocessing and embeddings",
    relatedIds: ["skills_overview", "aragog_overview"]
  },
  {
    id: "mongodb_usage",
    category: "technical",
    keywords: ["mongodb", "database", "storage", "storing", "nosql"],
    patterns: ["mongodb usage", "which project uses mongodb", "database storage", "where mongodb"],
    answer: "Great question about MongoDB! 🗄️\n\nWhile MongoDB is in Cyril's tech stack, the showcased projects focus on ML implementations. MongoDB would typically be used for:\n\n• Storing user data and sessions\n• Caching processed results\n• Document metadata in legal-tech projects\n• Backend data management\n\nFor legal AI projects (ArguLex, Voice Assistant, Vakil), MongoDB is ideal for:\n• Legal document metadata\n• User queries and responses\n• Processed embeddings for RAG systems\n\nIt's perfect for flexible schema design in NLP applications!",
    relatedIds: ["skills_overview", "argulex_overview", "sql_usage"]
  },
  {
    id: "sql_usage",
    category: "technical",
    keywords: ["sql", "database", "query", "relational", "structured"],
    patterns: ["sql usage", "sql experience", "sql skills", "what about sql"],
    answer: "Cyril has strong SQL skills for data analysis! 📊\n\n**SQL Usage:**\n• Data querying and analysis\n• Database design and management\n• Complex joins and aggregations\n• Data extraction for ML pipelines\n• Statistical analysis queries\n\n**Where he uses SQL:**\n• Extracting data for ML model training\n• Data preprocessing and cleaning\n• Analyzing large datasets\n• Building data pipelines\n• Reporting and analytics\n\n**Combined with:** Python (Pandas), for powerful data workflows\n\nSQL is essential for his data science work - he uses it to pull, transform, and analyze structured data before feeding it into ML models!",
    relatedIds: ["mongodb_usage", "data_handling", "skills_overview"]
  },
  {
    id: "problem_solving",
    category: "soft_skills",
    keywords: ["problem", "solve", "approach", "methodology"],
    patterns: ["problem solving", "approach to problems", "methodology"],
    answer: "Cyril's problem-solving approach:\n\n1️⃣ **Problem Understanding:**\n• Define clear objectives\n• Understand domain requirements\n\n2️⃣ **Data Analysis:**\n• Exploratory data analysis\n• Identify patterns\n• Feature engineering\n\n3️⃣ **Model Development:**\n• Experiment with algorithms\n• Iterate and optimize\n• PyTorch & Scikit-learn implementation\n\n4️⃣ **Validation & Deployment:**\n• Rigorous testing\n• User-friendly interfaces\n• Real-world deployment\n\n💡 Example: ARAGOG shows his systematic approach to RAG evaluation without human labeling!",
    relatedIds: ["aragog_overview", "ml_expertise"]
  },
  {
    id: "why_hire",
    category: "assessment",
    keywords: ["why hire", "why should", "stand out", "what makes"],
    patterns: ["why hire", "why should we hire", "what makes him special"],
    answer: "Why Cyril stands out:\n\n🎯 **Practical Builder:**\n• 5+ production-ready projects\n• End-to-end ML skills\n• Solves real-world problems\n\n🚀 **Innovation:**\n• Created ARAGOG - novel RAG evaluation approach\n• Identifies gaps and builds solutions\n\n💡 **Self-Starter:**\n• Self-taught advanced concepts\n• Active open-source contributor (GSoC)\n• Continuous learner\n\n🔧 **Full Stack:**\n• Model building + deployment + frontend\n• Complete ML product lifecycle\n\n📈 **Domain Expertise:**\n• Specialized in legal-tech AI\n• NLP and RAG systems expert\n\nHe brings technical depth AND ability to ship products!",
    relatedIds: ["projects_overview", "skills_overview"]
  },
  {
    id: "strengths",
    category: "assessment",
    keywords: ["strength", "good at", "best at", "expert"],
    patterns: ["what are strengths", "what is he good at"],
    answer: "Cyril's Key Strengths:\n\n💪 **Technical:**\n• Deep Learning & Neural Networks (PyTorch)\n• NLP and RAG systems\n• End-to-end ML pipeline development\n• Practical problem-solving\n\n💪 **Soft Skills:**\n• Analytical thinking\n• Self-motivated learner\n• Translates complex problems into solutions\n• Attention to detail\n\n🎯 **Growth Areas:**\n• Building more industry experience\n• Larger enterprise-scale projects\n• More MLOps exposure\n\n💡 What stands out: His ability to identify problems (like RAG evaluation) and build innovative solutions independently!",
    relatedIds: ["why_hire", "skills_overview"]
  },
  {
    id: "collaboration",
    category: "soft_skills",
    keywords: ["team", "collaborate", "work together", "communication"],
    patterns: ["team work", "collaboration", "work with team"],
    answer: "Cyril demonstrates strong collaboration skills:\n\n👥 **Team Experience:**\n• Google Summer of Code - open-source community\n• Multiple GitHub repositories with contributions\n• Collaborative development workflows\n\n🛠️ **Collaboration Tools:**\n• Git/GitHub for version control\n• Code reviews and pull requests\n• Documentation and knowledge sharing\n\n💡 **Soft Skills:**\n• Effective communication\n• Problem-solving in groups\n• Leadership qualities\n• Continuous learning mindset\n\nHis open-source work shows he can work effectively in distributed teams!",
    relatedIds: ["experience_overview", "gsoc_contribution"]
  },
  {
    id: "contact",
    category: "contact",
    keywords: ["contact", "email", "phone", "reach", "linkedin", "github"],
    patterns: ["how to contact", "contact information", "reach out"],
    answer: "Want to connect with Cyril?\n\n📧 Email: cyrilp4107@gmail.com\n📱 Phone: +91-8125624037\n💼 LinkedIn: linkedin.com/in/polisetty-cyril\n💻 GitHub: github.com/Polisetty-Cyril\n\nHe's open to data science opportunities, ML research positions, and collaborations!",
    relatedIds: []
  },

  // === META ===
  {
    id: "projects_overview",
    category: "project",
    keywords: ["project", "built", "created", "developed", "portfolio"],
    patterns: ["what projects", "tell me about projects", "what has he built"],
    answer: "Cyril has built impressive AI projects:\n\n🕷️ **ARAGOG** - Automated RAG evaluation (GitHub: 1 star, 4 forks)\n⚖️ **ArguLex** - RAG-based legal Q&A\n🎤 **Voice Legal AI** - Real-time voice legal assistance\n📄 **Vakil** - Legal document demystifier\n🛡️ **AI-Shield** - Intelligent security threat detection\n\nAll focused on practical AI applications, especially legal-tech! Want details on any specific project?",
    relatedIds: ["aragog_overview", "argulex_overview", "voice_legal_overview", "vakil_overview", "aishield_overview"]
  },
  {
    id: "who_is_cyril",
    category: "about",
    keywords: ["who", "about", "cyril", "him"],
    patterns: ["who is cyril", "tell me about cyril", "about him"],
    answer: "Cyril is a passionate Data Scientist pursuing B.Tech in Computer Science at Keshav Memorial College of Engineering (3rd year, CGPA 7.8).\n\nHe specializes in:\n• Deep learning\n• Machine learning\n• Statistical analysis\n\nWhat he loves: Training deep neural networks on large datasets and building data-driven solutions!\n\nHe's developed impressive AI projects (especially in legal-tech) and actively contributes to open-source.",
    relatedIds: ["education", "projects_overview", "skills_overview"]
  }
];
