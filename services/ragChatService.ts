// Semantic RAG Chat Service
// Uses keyword matching + semantic similarity for intelligent responses

import { KNOWLEDGE_BASE, type KnowledgeEntry } from './ragKnowledgeBase';

// Simple text preprocessing
function preprocessText(text: string): string {
  return text.toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Extract keywords from query
function extractKeywords(query: string): string[] {
  const stopWords = new Set(['what', 'is', 'the', 'a', 'an', 'how', 'tell', 'me', 'about', 'does', 'he', 'his', 'do', 'did']);
  const words = preprocessText(query).split(' ');
  return words.filter(word => word.length > 2 && !stopWords.has(word));
}

// Calculate similarity score between query and knowledge entry
function calculateScore(query: string, entry: KnowledgeEntry): number {
  const queryProcessed = preprocessText(query);
  const queryKeywords = extractKeywords(query);
  
  let score = 0;
  
  // Check pattern matches (highest weight)
  for (const pattern of entry.patterns) {
    if (queryProcessed.includes(preprocessText(pattern))) {
      score += 50;
      break;
    }
  }
  
  // Check keyword matches
  for (const keyword of entry.keywords) {
    if (queryProcessed.includes(keyword)) {
      score += 10;
    }
  }
  
  // Check query keywords in entry keywords
  for (const queryWord of queryKeywords) {
    if (entry.keywords.some(k => k.includes(queryWord) || queryWord.includes(k))) {
      score += 5;
    }
  }
  
  // Bonus for exact category match in query
  if (queryProcessed.includes(entry.category)) {
    score += 15;
  }
  
  return score;
}

// Find best matching knowledge entries
function findBestMatches(query: string, topK: number = 3): KnowledgeEntry[] {
  const scores = KNOWLEDGE_BASE.map(entry => ({
    entry,
    score: calculateScore(query, entry)
  }));
  
  // Sort by score descending
  scores.sort((a, b) => b.score - a.score);
  
  // Return top matches with score > 0
  return scores
    .filter(s => s.score > 0)
    .slice(0, topK)
    .map(s => s.entry);
}

// Handle affirmative responses
function handleAffirmativeResponse(): string {
  return "Great! Here's a quick overview of Cyril's key projects:\n\n🕷️ **ARAGOG** - Automated RAG evaluation without human labeling\n⚖️ **ArguLex** - Legal Q&A using RAG & PyTorch\n🎤 **Voice Legal AI** - Speech-enabled legal assistant\n📄 **Vakil** - Legal document simplifier with GenAI\n🛡️ **AI-Shield** - ML-powered security threat detection\n\nEach showcases different skills:\n• ARAGOG → Research & Innovation\n• ArguLex → NLP & RAG systems\n• Voice AI → Speech processing\n• Vakil → GenAI integration\n• AI-Shield → Security ML\n\nWant to dive deeper into any of these? Or ask about his technical skills, deployment experience, or how he works with data!";
}

// Handle greetings
function handleGreeting(): string {
  return "Hey there! 👋 I'm Cyril's AI assistant. I can tell you all about his data science projects, skills, experience, and how to get in touch. What would you like to know?";
}

// Handle thanks
function handleThanks(): string {
  return "You're welcome! Happy to help. Feel free to ask if you have more questions about Cyril! 😊";
}

// Main RAG query function
export async function runChatQuery(prompt: string, context: string): Promise<string> {
  const lowerPrompt = prompt.toLowerCase().trim();
  
  // Handle special cases
  if (lowerPrompt.match(/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)$/)) {
    return handleGreeting();
  }
  
  if (lowerPrompt.match(/^(yes|yeah|yep|sure|okay|ok|tell me|tell me more|go ahead|continue|more|please)$/)) {
    return handleAffirmativeResponse();
  }
  
  if (lowerPrompt.includes('thank') || lowerPrompt.includes('thanks')) {
    return handleThanks();
  }
  
  if (lowerPrompt.match(/(how are you|whats up|what's up)/)) {
    return "I'm doing great, thanks for asking! 😊 I'm here to help you learn about Cyril's work in data science and AI. What interests you most - his projects, technical skills, or experience?";
  }
  
  // Handle "what about X" or "tell me about X" follow-up questions
  if (lowerPrompt.match(/^(what about|tell me about|how about|and what about)/)) {
    // Extract the topic after "what about"
    const topicMatch = lowerPrompt.match(/(?:what about|tell me about|how about|and what about)\s+(.+)/);
    if (topicMatch && topicMatch[1]) {
      const topic = topicMatch[1];
      // Re-run the query with just the topic
      return runChatQuery(topic, context);
    }
  }
  
  // Handle "tell me more" or "more details" without specific topic
  if (lowerPrompt.match(/^(tell me more|more details|more info|i would like to know more|want to know more|more about (this|that|it))/)) {
    return "I'd love to share more! Could you specify what you'd like to know more about?\n\nFor example:\n• \"Tell me more about ARAGOG\"\n• \"More details on his role in ArguLex\"\n• \"What's the tech stack for AI-Shield?\"\n• \"How does he handle data?\"\n• \"What are his deployment skills?\"\n\nOr ask about any of his projects: ARAGOG, ArguLex, Voice Legal AI, Vakil, or AI-Shield!";
  }
  
  // Find best matching knowledge entries
  const matches = findBestMatches(prompt, 1);
  
  if (matches.length > 0 && matches[0]) {
    const bestMatch = matches[0];
    let response = bestMatch.answer;
    
    // Add related topics if available
    if (bestMatch.relatedIds && bestMatch.relatedIds.length > 0) {
      const relatedEntries = KNOWLEDGE_BASE.filter(e => 
        bestMatch.relatedIds!.includes(e.id)
      );
      
      if (relatedEntries.length > 0) {
        response += "\n\n💡 You might also want to ask about:";
        relatedEntries.slice(0, 3).forEach(entry => {
          const exampleQuestion = entry.patterns[0];
          response += `\n• ${exampleQuestion}`;
        });
      }
    }
    
    return response;
  }
  
  // Fallback response with helpful suggestions
  return "I can help you evaluate Cyril as a candidate! Here are topics I can address:\n\n💼 **Experience & Skills:**\n• Years of experience and background\n• Technical skills and tools\n• Project portfolio and achievements\n\n🎯 **Technical Deep-Dive:**\n• How he handles large datasets\n• Model deployment experience\n• Specific technology usage (MongoDB, PyTorch, etc.)\n• Problem-solving methodology\n\n👥 **Soft Skills:**\n• Team collaboration experience\n• Strengths and growth areas\n• Learning approach\n\n📊 **Fit Assessment:**\n• Why hire Cyril?\n• What makes him stand out?\n\nTry asking: \"Tell me about ARAGOG\" or \"What are his deployment skills?\"";
}
