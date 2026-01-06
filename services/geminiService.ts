// Local AI chat service - no API key required
// Answers questions based on portfolio data

export async function runChatQuery(prompt: string, context: string): Promise<string> {
  const lowerPrompt = prompt.toLowerCase();
  
  // Extract relevant information from context
  const skillsMatch = context.match(/Skills:\s*([^]*?)(?=Experience:|$)/);
  const projectsMatch = context.match(/Projects:\s*([^]*?)(?=Experience:|$)/);
  const experienceMatch = context.match(/Experience:\s*([^]*?)(?=Education:|$)/);
  const educationMatch = context.match(/Education:\s*([^]*?)(?=$)/);
  
  // Skills-related questions
  if (lowerPrompt.includes('skill') || lowerPrompt.includes('technology') || lowerPrompt.includes('know')) {
    const skills = skillsMatch ? skillsMatch[1] : '';
    return `Based on the portfolio, here are the skills:\n\n${skills}\n\nThese skills span across programming, technical tools, and soft skills, making for a well-rounded data science and development profile.`;
  }
  
  // Project-related questions
  if (lowerPrompt.includes('project') || lowerPrompt.includes('built') || lowerPrompt.includes('created')) {
    const projects = projectsMatch ? projectsMatch[1] : '';
    return `Here are the projects from the portfolio:\n\n${projects}\n\nThese projects demonstrate expertise in machine learning, data analysis, and full-stack development.`;
  }
  
  // Experience-related questions
  if (lowerPrompt.includes('experience') || lowerPrompt.includes('work') || lowerPrompt.includes('job')) {
    const experience = experienceMatch ? experienceMatch[1] : '';
    return `Professional experience:\n\n${experience}\n\nThis experience showcases work in computational chemistry and molecular informatics.`;
  }
  
  // Education-related questions
  if (lowerPrompt.includes('education') || lowerPrompt.includes('study') || lowerPrompt.includes('degree') || lowerPrompt.includes('university')) {
    const education = educationMatch ? educationMatch[1] : '';
    return `Educational background:\n\n${education}`;
  }
  
  // Contact/About questions
  if (lowerPrompt.includes('contact') || lowerPrompt.includes('reach') || lowerPrompt.includes('email') || lowerPrompt.includes('who')) {
    return `This is Polisetty Cyril's portfolio. You can reach out through:\n\n📧 Email: polisetty6@gmail.com\n📱 Phone: +91 8978494395\n📍 Location: Kurnool, Andhra Pradesh, India\n\nConnect on social media through the links in the Contact section!`;
  }
  
  // General/default response
  return `I can help you learn about Cyril's portfolio! Here's what I can tell you about:\n\n• Skills and Technologies\n• Projects and Work\n• Professional Experience\n• Educational Background\n• Contact Information\n\nFeel free to ask me anything specific about these topics!`;
}
