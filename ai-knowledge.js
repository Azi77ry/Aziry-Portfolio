
// 1. Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // 2. Get all elements
    const askButton = document.getElementById('ai-submit');
    const questionInput = document.getElementById('ai-question');
    const responseArea = document.getElementById('ai-response');


// AI Knowledge Base - External JS File
const aiKnowledge = {
   //greatings
    "hi": "Hello there! How can I help you today?",
    "hello": "Hi! Nice to see you. What would you like to know?",
    "hey": "Hey! Ready to chat about tech?",
    "good morning": "Good morning! What shall we discuss today?",
    "good afternoon": "Good afternoon! How can I assist you?",
    "good evening": "Good evening! What brings you here?",
    "greetings": "Greetings! I'm Azizi's AI assistant. Ask me anything!",
    "howdy": "Howdy partner! Ready to talk tech?",
    "what's up": "Not much, just ready to answer your questions! What's up with you?",
    "yo": "Yo! Let's talk code, projects, or tech!",
    "hi there": "Hi there! Excited to help with your queries!",
    "hello there": "General Kenobi! Just kidding - hello! What's your question?",
    "good day": "Good day to you! How may I be of service?",
    "salutations": "Salutations! Shall we discuss technology?",
    "hi azizi": "Hi back at you! What would you like to know?",
    "hi aziry": "Hey that's me! What's on your mind?",
    "morning": "Morning sunshine! Ready to code?",
    "afternoon": "Afternoon! Need tech insights?",
    "evening": "Evening! Perfect time for tech talk!",
    "sup": "Just serving tech knowledge. Sup with you?",
    
    // Rest of your existing knowledge base...
    "your name": "I'm Azizi (or you can call me Aziry)! Nice to meet you!",
    "who are you": "I'm Azizi, a full-stack developer and AI enthusiast...",

    // Personal Questions
    "your name": "I'm Azizi (or you can call me Aziry)! Nice to meet you!",
    "who are you": "I'm Azizi, a full-stack developer and AI enthusiast. How can I help you today?",
    "azizi": "That's me! What would you like to know about my work?",
    "aziry": "Yes, that's my nickname! Did you want to ask about my projects or skills?",
    "what do you do": "I'm a full-stack developer specializing in AI integration and blockchain solutions.",
    "tell me about yourself": "I'm Azizi, a developer with 7+ years experience building AI-powered web applications and blockchain systems.",

    // Skills
    "skills": "My strongest skills: <br>- JavaScript/TypeScript <br>- React/Next.js <br>- Node.js <br>- Python <br>- AI/ML (TensorFlow) <br>- Blockchain",
    "languages": "I'm fluent in JavaScript, Python, Java, and Solidity for smart contracts.",
    "frameworks": "I work with: <br>- Frontend: React, Vue, Angular <br>- Backend: Express, Django <br>- Mobile: React Native",
    "database": "I'm experienced with MongoDB, PostgreSQL, Firebase, and MySQL.",
    "backend skills": "I specialize in Node.js, Django, and building RESTful APIs with database integration.",
    "frontend skills": "Expertise in React, Vue, responsive design, and state management solutions.",
    "ai skills": "I implement machine learning models using TensorFlow and integrate AI into web applications.",
    "blockchain skills": "I develop smart contracts with Solidity and build DApps on Ethereum blockchain.",

    // Experience
    "experience": "7+ years developing web/mobile apps, with 3 years specializing in AI integration.",
    "companies": "I've worked with startups and enterprises across fintech, healthcare, and e-commerce sectors.",
    "specialization": "My specialties are AI-powered web applications and blockchain solutions.",
    "current role": "Currently working as a Senior Full-Stack Developer with focus on AI integration.",
    "previous roles": "I've served as Lead Developer at a fintech startup and AI Engineer at a healthcare tech company.",
    "freelance experience": "Completed 50+ projects on platforms like Upwork with 100% client satisfaction.",

    // Projects
    "projects": "Notable projects: <br>1. AI E-commerce Platform <br>2. Healthcare Chatbot <br>3. Blockchain Voting System <br>Ask me about any!",
    "e-commerce": "My AI e-commerce platform uses recommendation algorithms to boost sales by 30%.",
    "blockchain": "The blockchain project is a secure voting system with Ethereum smart contracts.",
    "chatbot": "The healthcare chatbot uses NLP to answer patient queries with 92% accuracy.",
    "portfolio": "You can view my complete portfolio at [portfolio-link]. Would you like to see specific types of projects?",
    "open source": "I contribute to open source projects focused on AI tools and developer utilities.",
    "github": "My GitHub profile contains code samples and project repositories. Would you like the link?",

    // Education
    "education": "I hold a Bachelor's in Computer Science with AI specialization from University of XYZ.",
    "certificates": "Certified in: <br>- AWS Solutions Architect <br>- TensorFlow Developer <br>- Ethereum Developer",
    "courses": "Completed advanced courses in Machine Learning, Blockchain Development, and Cloud Computing.",
    "self learning": "I continuously learn through platforms like Coursera, Udemy, and technical documentation.",

    // Contact
    "contact": "Reach me at: <br>📧 aziziiddi555@gmail.com <br>💼 LinkedIn: linkedin.com/in/azizi",
    "hire": "I'm available for freelance work! Contact me to discuss your project needs.",
    "collaborate": "I'm open to collaborations on AI or blockchain projects. Let's connect!",
    "availability": "I'm currently available for new projects with a 2-week notice period.",
    "rates": "My rates vary based on project scope. Contact me for a detailed quote.",

     "your name": "I'm Azizi (or you can call me Aziry)! Nice to meet you!",
    "who are you": "I'm Azizi, a full-stack developer and AI enthusiast. How can I help you today?",
    "azizi": "That's me! What would you like to know about my work?",
    "aziry": "Yes, that's my nickname! Did you want to ask about my projects or skills?",
    "what do you do": "I'm a full-stack developer specializing in AI integration and blockchain solutions.",
    "tell me about yourself": "I'm Azizi, a developer with 7+ years experience building AI-powered web applications and blockchain systems.",

    // Creator/Owner Information (NEW SECTION)
    "who created you": "I was created by Aziry (Azizi), a full-stack developer and AI enthusiast!",
    "who made you": "Aziry (Azizi) developed this AI assistant as a personal project.",
    "who owns this site": "This website and AI assistant are owned and maintained by Aziry (Azizi).",
    "who is the creator": "The creator is Aziry (also known as Azizi), who built this as a showcase of AI integration skills.",
    "who developed this": "This AI assistant and website were developed by Aziry (Azizi) using JavaScript and AI technologies.",
    "who built this": "Aziry (Azizi) designed and built this entire platform from scratch.",

    // Skills
    "skills": "My strongest skills: <br>- JavaScript/TypeScript <br>- React/Next.js <br>- Node.js <br>- Python <br>- AI/ML (TensorFlow) <br>- Blockchain",
    "languages": "I'm fluent in JavaScript, Python, Java, and Solidity for smart contracts.",
    // ... [rest of the existing code remains exactly the same]


    // Personal
    "hobbies": "When not coding, I enjoy chess, open-source contributions, and AI research.",
    "location": "I'm based in Malaysia, but work with clients worldwide.",
    "started coding": "I wrote my first program at 15 and have been passionate ever since!",
    "coding journey": "Started with basic HTML, then moved to JavaScript, and now work with full-stack AI solutions.",
    "tech stack": "My preferred stack is MERN (MongoDB, Express, React, Node.js) with Python for AI components.",

    // Default
    "default": "I'm not sure I understand. Try asking about my:<br>- Skills<br>- Projects<br>- Experience<br>- How to contact me"
};

   // 4. Handle button click
    askButton.addEventListener('click', function() {
        const question = questionInput.value.toLowerCase().trim();
        let response = aiKnowledge.default;
        
        // Check for matching questions
        for (const [key, value] of Object.entries(aiKnowledge)) {
            if (question.includes(key)) {
                response = value;
                break;
            }
        }
        
        // Special handling for your name
        if (question.includes("azizi") || question.includes("aziry")) {
            response = "Yes, that's me! What would you like to know?";
        }
        
        // Show typing animation
        responseArea.innerHTML = '<span class="typing-animation">AI is thinking...</span>';
        
        // Simulate AI thinking delay
        setTimeout(() => {
            responseArea.innerHTML = response;
            questionInput.value = ''; // Clear input
        }, 800);
    });

    // 5. Handle Enter key
    questionInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            askButton.click();
        }
    });
});

// 6. Add typing animation style
const style = document.createElement('style');
style.textContent = `
    .typing-animation {
        color: #00f0ff;
        position: relative;
    }
    .typing-animation::after {
        content: '...';
        position: absolute;
        animation: blink 1s infinite;
    }
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }
`;
document.head.appendChild(style);

