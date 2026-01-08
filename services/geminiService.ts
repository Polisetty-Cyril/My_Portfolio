// HR-focused AI assistant - Answers like a professional portfolio assistant

export async function runChatQuery(prompt: string, context: string): Promise<string> {
  const lowerPrompt = prompt.toLowerCase().trim();
  
  // === DATABASE & TECHNOLOGY USAGE ===
  if (lowerPrompt.match(/(mongodb|database|storing|storage|which project.*use)/)) {
    if (lowerPrompt.includes('mongodb')) {
      return "Great question about MongoDB usage! 🗄️\n\nWhile MongoDB is listed in Cyril's tech stack, the specific projects showcased here primarily focus on ML/AI implementations. MongoDB would typically be used for:\n\n• Storing user data and session information\n• Caching processed results\n• Storing document metadata in legal-tech projects\n• Backend data management in full-stack applications\n\nFor the legal AI projects (ArguLex, Voice Assistant, Vakil), a database like MongoDB would be ideal for storing:\n• Legal document metadata\n• User queries and responses\n• Processed embeddings for RAG systems\n\nWould you like to know more about how he implements data storage in his RAG systems?";
    }
    return "Cyril works with MongoDB for NoSQL data storage needs. In data science projects, databases are crucial for:\n\n• Storing large datasets and processed features\n• Caching model predictions\n• Managing unstructured data (documents, embeddings)\n• Storing experiment results and metrics\n\nFor his ML projects, he likely uses MongoDB for flexible schema design, especially useful in NLP and RAG applications where document structures vary.";
  }
  
  // === HR/RECRUITER QUESTIONS - EXPERIENCE ===
  if (lowerPrompt.match(/(years of experience|how long|work experience|professional experience)/)) {
    return "Cyril is currently in his 3rd year of B.Tech (graduating 2027) with practical experience since 2023:\n\n📅 Data Science Experience: 2023 - Present (2+ years)\n• Freelance & academic projects\n• Built multiple production-ready ML applications\n• Specialized in NLP and RAG systems\n\n📅 Open Source: 2024 - Present (1+ year)\n• Google Summer of Code contributor\n• Active in cheminformatics projects\n\nWhile he's early in his career, he's built impressive real-world projects demonstrating strong practical skills in ML, NLP, and data analysis. His portfolio shows hands-on experience with production-grade AI systems.";
  }
  
  // === HR - DATA HANDLING ===
  if (lowerPrompt.match(/(handle.*data|work with.*data|large dataset|data pipeline|data processing)/)) {
    return "Cyril has hands-on experience with large-scale data handling:\n\n📊 Data Processing:\n• Pandas & NumPy for data manipulation\n• Feature engineering on large datasets\n• Statistical analysis and exploratory data analysis (EDA)\n• Data cleaning and preprocessing pipelines\n\n🔄 Workflow:\n• Jupyter Notebook for experimentation\n• Google Colab for GPU-accelerated processing\n• Version control with Git for data pipeline tracking\n\n💡 Specific Examples:\n• ARAGOG: Processed evaluation datasets for RAG systems\n• Legal AI projects: Handled large legal document corpora\n• NLP pipelines: Text preprocessing and embedding generation\n\nHe's comfortable working with both structured and unstructured data at scale.";
  }
  
  // === HR - MODEL DEPLOYMENT ===
  if (lowerPrompt.match(/(deploy|deployment|production|live|hosting)/)) {
    return "Cyril has demonstrated deployment capabilities:\n\n🚀 Deployment Platforms:\n• Hugging Face Spaces (ARAGOG live demo)\n• Vercel (ArguLex, Vakil, Voice Legal AI)\n• FastAPI for serving ML models\n\n💡 Deployment Skills:\n• Containerization for reproducibility\n• RESTful API design with FastAPI\n• Frontend integration (React)\n• Real-time inference optimization\n\n📈 Production Considerations:\n• Model serving and inference speed\n• Error handling and monitoring\n• User interface design for ML applications\n\nHis projects aren't just notebooks - they're deployed, accessible applications demonstrating end-to-end ML skills.";
  }
  
  // === HR - PROBLEM SOLVING ===
  if (lowerPrompt.match(/(solve problem|approach|methodology|how do you|process)/)) {
    return "Cyril's problem-solving approach in data science:\n\n1️⃣ Problem Understanding:\n• Define clear objectives and metrics\n• Understand domain requirements (e.g., legal-tech needs)\n\n2️⃣ Data Analysis:\n• Exploratory data analysis (EDA)\n• Identify patterns and anomalies\n• Feature engineering\n\n3️⃣ Model Development:\n• Experiment with different algorithms\n• Iterate and optimize performance\n• PyTorch & Scikit-learn for implementation\n\n4️⃣ Validation & Deployment:\n• Rigorous testing (see ARAGOG evaluation framework)\n• Build user-friendly interfaces\n• Deploy for real-world use\n\n💡 Example: ARAGOG shows his systematic approach to solving the RAG evaluation problem WITHOUT human labeling - innovative thinking!";
  }
  
  // === HR - COLLABORATION ===
  if (lowerPrompt.match(/(team|collaborate|work with.*team|communication)/)) {
    return "Cyril demonstrates strong collaboration skills:\n\n👥 Team Experience:\n• Google Summer of Code contributor - worked with open-source community\n• Multiple GitHub repositories with active contributions\n• Experience in collaborative development workflows\n\n🛠️ Collaboration Tools:\n• Git/GitHub for version control\n• Experience with code reviews and pull requests\n• Documentation and knowledge sharing\n\n💡 Soft Skills:\n• Effective communication\n• Problem-solving in group settings\n• Leadership qualities\n• Continuous learning mindset\n\nHis open-source contributions show he can work effectively in distributed teams and contribute to existing codebases.";
  }
  
  // === HR - STRENGTHS & WEAKNESSES ===
  if (lowerPrompt.match(/(strength|weakness|good at|challenge)/)) {
    return "Cyril's Key Strengths:\n\n💪 Technical:\n• Deep Learning & Neural Networks (PyTorch)\n• NLP and RAG systems\n• End-to-end ML pipeline development\n• Practical problem-solving with AI\n\n💪 Soft Skills:\n• Analytical thinking\n• Self-motivated learner\n• Translates complex problems into working solutions\n• Attention to detail in model evaluation\n\n🎯 Growth Areas:\n• Early career - building more industry experience\n• Expanding to larger enterprise-scale projects\n• More production ML operations (MLOps) exposure\n\n💡 What stands out: His ability to identify real problems (like RAG evaluation) and build innovative solutions independently.";
  }
  
  // === HR - WHY HIRE ===
  if (lowerPrompt.match(/(why hire|why should|what makes|stand out)/)) {
    return "Why Cyril stands out as a Data Science candidate:\n\n🎯 Practical Builder:\n• Not just theoretical - builds deployed, working applications\n• 5+ production-ready projects demonstrating end-to-end skills\n• Focuses on solving real-world problems\n\n🚀 Innovation:\n• Created ARAGOG - novel approach to RAG evaluation\n• Identified gaps in existing solutions and built innovative tools\n\n💡 Self-Starter:\n• Self-taught many advanced concepts\n• Active open-source contributor (GSoC)\n• Continuously learning and applying new technologies\n\n🔧 Full Stack:\n• Not just model building - handles deployment, frontend, APIs\n• Understands the complete ML product lifecycle\n\n📈 Domain Expertise:\n• Specialized knowledge in legal-tech AI applications\n• NLP and RAG systems expertise\n\nHe brings both technical depth AND the ability to ship products.";
  }
  
  // === HR - LEARNING & GROWTH ===
  if (lowerPrompt.match(/(learn|growth|improve|develop|upskill)/)) {
    return "Cyril's approach to continuous learning:\n\n📚 How He Learns:\n• Hands-on projects (best way to learn!)\n• Open-source contributions\n• Academic foundation (B.Tech CS with AI/ML focus)\n• Self-directed learning through building\n\n🎓 Recent Growth:\n• RAG systems and evaluation methodologies\n• Production ML deployment\n• Full-stack AI application development\n• Open-source collaboration (GSoC)\n\n🔮 Areas of Interest:\n• Advanced deep learning architectures\n• MLOps and production systems\n• Large-scale data processing\n• Cutting-edge NLP techniques\n\n💡 His project portfolio shows rapid skill acquisition and application - from concept to deployed product.";
  }
  
  // === GREETINGS & CASUAL ===
  if (lowerPrompt.match(/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)$/)) {
    return "Hey there! 👋 I'm Cyril's AI assistant. I can tell you all about his data science projects, skills, experience, and how to get in touch. What would you like to know?";
  }
  
  // === AFFIRMATIVE RESPONSES (yes, sure, tell me more) ===
  if (lowerPrompt.match(/^(yes|yeah|yep|sure|okay|ok|tell me|tell me more|go ahead|continue|more|please)$/)) {
    return "Great! Here's a quick overview of Cyril's key projects:\n\n🕷️ **ARAGOG** - Automated RAG evaluation without human labeling\n⚖️ **ArguLex** - Legal Q&A using RAG & PyTorch\n🎤 **Voice Legal AI** - Speech-enabled legal assistant\n📄 **Vakil** - Legal document simplifier with GenAI\n🛡️ **AI-Shield** - ML-powered security threat detection\n\nEach project showcases different skills:\n• ARAGOG → Research & Innovation\n• ArguLex → NLP & RAG systems\n• Voice AI → Speech processing\n• Vakil → GenAI integration\n• AI-Shield → Security ML\n\nWant to dive deeper into any of these? Or ask about:\n• His technical skills\n• Deployment experience\n• How he works with data\n• Why hire him?";
  }
  
  if (lowerPrompt.includes('how are you') || lowerPrompt.includes('whats up') || lowerPrompt.includes("what's up")) {
    return "I'm doing great, thanks for asking! 😊 I'm here to help you learn about Cyril's work in data science and AI. What interests you most - his projects, technical skills, or experience?";
  }
  
  if (lowerPrompt.includes('thank') || lowerPrompt.includes('thanks')) {
    return "You're welcome! Happy to help. Feel free to ask if you have more questions about Cyril! 😊";
  }
  
  // === WHO IS CYRIL ===
  if (lowerPrompt.match(/(who is|who's|tell me about) (cyril|he|him)/)) {
    return "Cyril is a passionate Data Scientist currently pursuing B.Tech in Computer Science at Keshav Memorial College of Engineering (3rd year, CGPA 7.8). He specializes in deep learning, machine learning, and statistical analysis.\n\nWhat he loves most? Training deep neural networks on large datasets and building data-driven solutions! He's developed several impressive AI projects, especially in the legal-tech space, and actively contributes to open-source.\n\nWant to know more about his projects or skills?";
  }
  
  // === SPECIFIC PROJECTS ===
  if (lowerPrompt.includes('aragog')) {
    // Check for role/responsibility questions
    if (lowerPrompt.match(/(role|responsibility|what.*do|what.*did|contribution|build|develop)/)) {
      return "In ARAGOG, Cyril took on a **full-stack ML role**:\n\n🤖 **Model Building (Core Role):**\n• Designed the automated evaluation framework\n• Implemented similarity metrics for answer assessment\n• Built retrieval relevance scoring algorithms\n• Developed the RAG evaluation pipeline\n• Used Python & Jupyter for ML experimentation\n\n⚡ **Backend:**\n• FastAPI for serving the evaluation API\n• Model inference endpoints\n• Data processing pipelines\n\n⚛️ **Frontend:**\n• React-based web interface\n• User interaction for RAG testing\n\n💡 **Key Achievement:** Created an innovative solution that evaluates RAG systems WITHOUT human labeling - that's the ML innovation part!\n\nHe handled the entire pipeline from ML research to deployment!";
    }
    // Check if asking specifically about tech stack
    if (lowerPrompt.match(/(tech|technology|stack|technique|tool|built with|using what)/)) {
      return "ARAGOG's tech stack is pretty robust! 🛠️\n\n🐍 Core: Python & Jupyter Notebook\n🤖 ML/AI: Machine Learning algorithms, RAG (Retrieval-Augmented Generation)\n⚛️ Frontend: React\n⚡ Backend: FastAPI\n\nThe combination allows for:\n• Automated evaluation without human labeling\n• Fast API responses for real-time analysis\n• Interactive web interface\n• Scalable RAG system assessment\n\nIt's deployed on Hugging Face Spaces for easy access!";
    }
    return "ARAGOG is one of Cyril's coolest projects! 🕷️\n\nIt's an automated framework for evaluating RAG (Retrieval-Augmented Generation) systems. The genius part? It assesses answer similarity and retrieval relevance WITHOUT needing human labeling!\n\nTech stack: Python, Jupyter Notebook, Machine Learning, RAG, React, FastAPI\n\nThe project has gained traction with 1 star and 4 forks on GitHub. You can check out the live demo on Hugging Face!\n\nInterested in his other AI projects?";
  }
  
  if (lowerPrompt.includes('argulex') || lowerPrompt.includes('legal q')) {
    if (lowerPrompt.match(/(role|responsibility|what.*do|what.*did|contribution)/)) {
      return "In ArguLex, Cyril's role was **ML/NLP Engineer + Full-Stack Developer**:\n\n🤖 **Model Building (Primary Role):**\n• Implemented RAG (Retrieval-Augmented Generation) system\n• Integrated GANs for text generation\n• Built NLP pipeline for legal document processing\n• Trained PyTorch models for legal Q&A\n• Developed document summarization algorithms\n\n📊 **Data Engineering:**\n• Processed large legal document datasets\n• Created embeddings for semantic search\n• Built vector databases for retrieval\n\n⚛️ **Frontend:**\n• React interface for user queries\n• Document upload and display\n\n💡 His main contribution: The intelligent RAG system that makes legal documents accessible to everyone - that's the ML magic!";
    }
    if (lowerPrompt.match(/(tech|technology|stack|technique|tool|built with)/)) {
      return "ArguLex's tech stack breakdown! ⚖️\n\n🐍 Core: Python\n🤖 AI: RAG (Retrieval-Augmented Generation), GANs\n🔥 ML Framework: PyTorch\n⚛️ Frontend: React\n📚 NLP: Natural Language Processing libraries\n\nThis stack enables:\n• Intelligent document summarization\n• Context-aware Q&A\n• Legal text analysis\n• User-friendly interface\n\nPerfect for making legal info accessible!";
    }
    return "ArguLex is Cyril's comprehensive AI-powered legal assistant! ⚖️\n\nIt uses RAG (Retrieval-Augmented Generation) and GANs to make law accessible to everyone. The system can:\n• Summarize complex legal documents\n• Answer legal questions intelligently\n• Help both the public AND legal professionals\n\nBuilt with: Python, RAG, PyTorch, Machine Learning, React\n\nPretty impressive for simplifying something as complex as legal language, right? Want to hear about his other projects?";
  }
  
  if (lowerPrompt.includes('voice assistant') || lowerPrompt.includes('voice legal')) {
    if (lowerPrompt.match(/(role|responsibility|what.*do|what.*did|contribution)/)) {
      return "In Voice Assistant Legal AI, Cyril was the **ML Engineer + Speech Processing Developer**:\n\n🎤 **Core ML Work:**\n• Integrated speech recognition models\n• Built voice-to-text pipeline\n• Developed NLP for query understanding\n• Implemented text-to-speech responses\n• Created legal knowledge retrieval system\n\n⚡ **Backend:**\n• FastAPI for voice processing endpoints\n• Real-time audio streaming\n• ML model serving for inference\n\n🧠 **AI Pipeline:**\n• Voice → Text → Intent Recognition → Legal Q&A → Response\n• Document processing and retrieval\n\n💡 His innovation: Making legal assistance accessible through natural voice interaction - combining speech AI with legal knowledge!";
    }
    return "The Voice Assistant Legal AI is super cool! 🎤\n\nImagine asking legal questions just by speaking - that's what this does! It features:\n• Real-time voice interaction\n• Legal Q&A capabilities\n• Intelligent document processing\n• Natural voice commands\n\nBuilt using Python, Speech Recognition, FastAPI, and ML algorithms. It makes legal information accessible through something as simple as talking!\n\nCurious about his other AI innovations?";
  }
  
  if (lowerPrompt.includes('vakil')) {
    if (lowerPrompt.match(/(role|responsibility|what.*do|what.*did|contribution)/)) {
      return "In Vakil, Cyril was **NLP Engineer + TypeScript Developer**:\n\n🤖 **NLP/AI Work (Primary):**\n• Integrated OpenAI for document analysis\n• Built prompts for legal text simplification\n• Developed document parsing pipeline\n• Created summarization algorithms\n• Implemented explanation generation\n\n⚛️ **Frontend (TypeScript/React):**\n• User interface for document upload\n• Real-time text processing display\n• Interactive explanation features\n\n📄 **Document Processing:**\n• PDF/text extraction\n• Legal terminology simplification\n• Structured output generation\n\n💡 Key contribution: Using GenAI to break down complex legal jargon into simple language anyone can understand!";
    }
    return "Vakil is all about demystifying legal documents! 📄\n\nLegal jargon can be intimidating, right? Vakil uses Generative AI to:\n• Break down complex legal language\n• Analyze documents\n• Provide clear summaries\n• Explain legal concepts simply\n\nTech stack: TypeScript, React, OpenAI, NLP, Document Processing\n\nIt's making law accessible to everyone, not just lawyers! Want to know about his other projects?";
  }
  
  if (lowerPrompt.includes('ai-shield') || lowerPrompt.includes('aishield') || lowerPrompt.includes('ai shield')) {
    if (lowerPrompt.match(/(role|responsibility|what.*do|what.*did|contribution)/)) {
      return "In AI-Shield, Cyril's role was **ML Security Engineer**:\n\n🛡️ **Machine Learning (Core):**\n• Developed anomaly detection algorithms\n• Built threat classification models\n• Implemented ML-based security monitoring\n• Created pattern recognition for attacks\n\n⚙️ **Backend (Node.js):**\n• Security monitoring endpoints\n• Real-time threat detection system\n• Alert management\n\n📊 **Data Analysis:**\n• Security log processing\n• Feature extraction from network data\n• Statistical analysis for threat detection\n\n💡 His contribution: Applying ML to cybersecurity - using data patterns to identify and prevent threats intelligently!";
    }
    return "AI-Shield focuses on cybersecurity! 🛡️\n\nIt's a security-focused AI project that:\n• Detects threats intelligently\n• Prevents security breaches\n• Uses ML for anomaly detection\n• Monitors systems continuously\n\nBuilt with JavaScript, Machine Learning, and Node.js. It's all about protecting systems through smart AI!\n\nWant to know about his other projects (ARAGOG, ArguLex, Voice AI, Vakil)?";
  }
  
  // === GENERAL PROJECTS ===
  if (lowerPrompt.match(/(what|tell).*(project|built|created|developed|made)/)) {
    // Check if asking about roles
    if (lowerPrompt.match(/(role|what.*do|what.*did|responsibility|contribution)/)) {
      return "Great question! Let me break down Cyril's roles across his projects:\n\n🕷️ **ARAGOG - Full-Stack ML Engineer:**\n• Model building (evaluation algorithms)\n• Backend (FastAPI)\n• Frontend (React)\n\n⚖️ **ArguLex - ML/NLP Engineer:**\n• RAG system implementation\n• PyTorch model training\n• Legal document processing\n\n🎤 **Voice Legal AI - ML + Speech Engineer:**\n• Speech recognition integration\n• NLP for query understanding\n• Real-time voice processing\n\n📄 **Vakil - NLP Engineer + Frontend:**\n• GenAI integration (OpenAI)\n• TypeScript/React development\n• Document simplification\n\n🛡️ **AI-Shield - ML Security Engineer:**\n• Anomaly detection algorithms\n• Threat classification models\n\n💡 **Pattern:** Cyril consistently takes on **model building as his core strength**, but also handles backend APIs and frontend when needed - true full-stack ML engineer!\n\nWant details on any specific project's role?";
    }
    return "Cyril has built some seriously impressive AI projects! Here are the highlights:\n\n🕷️ ARAGOG - Automated RAG evaluation framework (GitHub: 1 star, 4 forks)\n⚖️ ArguLex - RAG-based legal Q&A system\n🎤 Voice Assistant Legal AI - Real-time voice legal assistance\n📄 Vakil - Legal document demystifier using GenAI\n🛡️ AI-Shield - Intelligent security & threat detection\n\nAll focused on practical AI applications, especially in legal-tech! He loves combining ML, NLP, and deep learning to solve real problems.\n\nWant details on any specific project?";
  }
  
  // === TECH STACK QUESTIONS (general) ===
  if (lowerPrompt.match(/(tech stack|technique stack|technology stack|what.*built|tools used)/)) {
    return "Here's Cyril's technology stack across his projects:\n\n💻 Languages: Python, SQL, Java, TypeScript, JavaScript\n🤖 ML/AI: PyTorch, Scikit-learn, TensorFlow, RAG systems\n📊 Data: Pandas, NumPy, Matplotlib\n🌐 Web: React, FastAPI, Node.js\n🗄️ Database: MongoDB\n⚙️ Tools: Git, Jupyter Notebook, Google Colab\n🎯 Specialties: NLP, Deep Learning, Statistical Analysis\n\nEach project uses different combinations depending on the requirements. Want to know about a specific project's stack?";
  }
  
  // === SKILLS & TECHNOLOGIES ===
  if (lowerPrompt.match(/(what|which).*(skill|technology|tech|tool|language|know)/)) {
    return "Cyril has a solid data science toolkit! Here's the breakdown:\n\n💻 Programming: Python, SQL, Java\n📊 Data Science: Machine Learning, Deep Learning, Statistical Analysis, Predictive Modeling\n🛠️ Libraries: Pandas, NumPy, Scikit-learn, PyTorch, Matplotlib\n🗄️ Database: MongoDB\n⚙️ Tools: Git, GitHub, Jupyter Notebook, Google Colab\n🎯 Specialties: NLP, Feature Engineering, Data Visualization\n\n🧠 Soft Skills: Analytical Thinking, Problem Solving, Team Collaboration, Leadership\n\nHe's especially passionate about training neural networks on large datasets! Want to know how he applies these skills?";
  }
  
  if (lowerPrompt.includes('python')) {
    return "Python is Cyril's primary language! 🐍 He uses it extensively for:\n• Machine Learning & Deep Learning\n• Data analysis with Pandas & NumPy\n• Building ML models with Scikit-learn & PyTorch\n• NLP projects\n• Statistical analysis\n\nBasically, all his data science magic happens in Python! It's his go-to for everything from data processing to deploying AI models.";
  }
  
  if (lowerPrompt.includes('machine learning') || lowerPrompt.includes('ml ')) {
    return "Machine Learning is Cyril's forte! 🤖\n\nHe specializes in:\n• Building predictive models\n• Deep learning with PyTorch\n• NLP applications\n• Statistical analysis\n• RAG systems\n• Feature engineering\n\nHe loves training neural networks on large datasets and has applied ML across multiple domains - from legal document analysis to security systems. His projects showcase practical ML applications that solve real-world problems!";
  }
  
  // === EDUCATION ===
  if (lowerPrompt.match(/(education|study|college|university|degree|school)/)) {
    return "Cyril is currently pursuing his B.Tech in Computer Science at Keshav Memorial College of Engineering!\n\n🎓 Degree: Bachelor of Technology in Computer Science\n🏫 College: Keshav Memorial College of Engineering\n📅 Duration: 2023 - 2027 (Currently in 3rd Year)\n📊 CGPA: 7.8\n🎯 Focus Areas: Artificial Intelligence & Machine Learning\n\nHe's combining strong academic foundations with hands-on project experience in data science and AI!";
  }
  
  // === EXPERIENCE ===
  if (lowerPrompt.match(/(experience|work|job|career)/)) {
    return "Cyril has impressive hands-on experience, even as a student!\n\n💼 Data Scientist (2023 - Present)\nFreelance & Academic Projects:\n• Developed ARAGOG evaluation framework with statistical analysis\n• Built ML models for legal document analysis\n• Performed data analysis & feature engineering on large datasets\n• Applied NLP & deep learning for document analysis & predictive modeling\n\n🌐 Open Source Contributor (2024 - Present)\nGoogle Summer of Code:\n• Built tools for chemical nomenclature conversion (SMILES ↔ IUPAC)\n• Contributed to cheminformatics projects\n• Collaborated with open-source community\n\nHe's gaining real-world experience through meaningful projects!";
  }
  
  // === ACHIEVEMENTS ===
  if (lowerPrompt.match(/(achievement|accomplishment|award|recognition)/)) {
    return "Here are some of Cyril's notable achievements:\n\n🏆 ARAGOG RAG Framework - Created an innovative automated evaluation framework that gained recognition (1 star, 4 forks on GitHub)\n\n🏆 AI-Powered Legal Tech Innovator - Developed multiple AI applications including voice assistants, document summarization, and Q&A systems\n\n🏆 Active Open-Source Contributor - Contributed to multiple repositories and collaborated on GSoC projects\n\nHe's making real impact in the AI and legal-tech space!";
  }
  
  // === CONTACT ===
  if (lowerPrompt.match(/(contact|reach|email|phone|connect|hire|linkedin|github)/)) {
    return "Want to get in touch with Cyril? Here's how:\n\n📧 Email: cyrilp4107@gmail.com\n📱 Phone: +91-8125624037\n💼 LinkedIn: linkedin.com/in/polisetty-cyril\n💻 GitHub: github.com/Polisetty-Cyril\n\nHe's open to opportunities in data science, ML research, and collaborations. Feel free to reach out!";
  }
  
  // === SPECIALIZATION ===
  if (lowerPrompt.match(/(specialize|specialization|expert|good at|focus)/)) {
    return "Cyril specializes in:\n\n🎯 Core Expertise:\n• Deep Learning & Neural Networks\n• Machine Learning & Predictive Modeling\n• Statistical Analysis & Data Visualization\n• Natural Language Processing (NLP)\n• RAG (Retrieval-Augmented Generation) Systems\n\n💡 What he loves most:\nTraining deep neural networks on large datasets and extracting meaningful insights!\n\nHe's especially strong in combining ML, NLP, and data analysis to build practical AI solutions. His legal-tech projects showcase these skills beautifully!";
  }
  
  // === CAREER GOALS ===
  if (lowerPrompt.match(/(goal|looking for|seeking|want|future|aspiration)/)) {
    return "Cyril's career goals are focused on making an impact with data!\n\n🎯 He's seeking:\n• Opportunities in data science & ML research\n• Roles applying advanced analytics to complex business problems\n• Projects involving predictive modeling & data-driven innovation\n\n💡 His passion:\nTurning data into actionable insights and strategic decisions that drive real business value!\n\nHe's eager to work on challenging problems where he can leverage his skills in ML, NLP, and statistical analysis. Sounds like your kind of candidate?";
  }
  
  // === DATA SCIENCE SPECIFIC ===
  if (lowerPrompt.includes('data scien')) {
    return "Data Science is Cyril's passion! 📊\n\nHis data science expertise includes:\n• Statistical analysis & hypothesis testing\n• Predictive modeling & forecasting\n• Data visualization with Matplotlib\n• Feature engineering & data preprocessing\n• Working with large datasets\n• Extracting actionable insights\n\nHe uses tools like Pandas, NumPy, Scikit-learn, and PyTorch to transform raw data into valuable insights. His approach combines strong statistical foundations with modern ML techniques!\n\nWant to know about his data science projects?";
  }
  
  // === GENERAL/DEFAULT ===
  if (lowerPrompt.match(/(help|what can you|what do you)/)) {
    return "I'm here to tell you all about Cyril! 😊\n\nI can answer questions about:\n• His data science & AI projects\n• Technical skills & technologies\n• Education & experience\n• Achievements & specializations\n• How to contact him\n• Career goals & interests\n\nWhat would you like to know?";
  }
  
  // If nothing matches, provide a helpful fallback with HR-relevant suggestions
  return "I can help you evaluate Cyril as a candidate! Here are common interview topics I can address:\n\n💼 Experience & Skills:\n• Years of experience and background\n• Technical skills and tools\n• Project portfolio and achievements\n\n🎯 Technical Deep-Dive:\n• How he handles large datasets\n• Model deployment experience\n• Specific technology usage (MongoDB, PyTorch, etc.)\n• Problem-solving methodology\n\n👥 Soft Skills:\n• Team collaboration experience\n• Strengths and growth areas\n• Learning approach\n\n📊 Fit Assessment:\n• Why hire Cyril?\n• What makes him stand out?\n\nWhat specific aspect would you like to explore?";
}
