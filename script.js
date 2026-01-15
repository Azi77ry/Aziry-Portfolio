 // Initialize particles.js
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#00f0ff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00f0ff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });

        // Typed.js initialization
        const typed = new Typed('.typed-text', {
            strings: [
                'Artificial Intelligent (AI) Developer',
                'Machine learning engineering',
                'System Design and Web Developer',
                'Data Analysis With Full Visualization And Interpetation',
                'Big Data Analysis',
                'Database Management',
                'IT support And Technology Innovations'

            ],
            typeSpeed: 70,
            backSpeed: 30,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            smartBackspace: true
        });

        // Initialize Google Maps
        function initMap() {``
          const location = { lat: -6.7924, lng: 39.2083 }; //DSM

            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 12,
                center: location,
                styles: [
                    {
                        "featureType": "all",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 13
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#000000"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#144b53"
                            },
                            {
                                "lightness": 14
                            },
                            {
                                "weight": 1.4
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#08304b"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#0c4152"
                            },
                            {
                                "lightness": 5
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#000000"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#0b434f"
                            },
                            {
                                "lightness": 25
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#000000"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#0b3d51"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#000000"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#146474"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#021019"
                            }
                        ]
                    }
                ]
            });
            new google.maps.Marker({
                position: location,
                map: map,
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 8,
                    fillColor: "#00f0ff",
                    fillOpacity: 1,
                    strokeWeight: 0,
                }
            });
        }

        // Initialize Charts
        const frontendCtx = document.getElementById('frontendChart').getContext('2d');
        const frontendChart = new Chart(frontendCtx, {
            type: 'radar',
            data: {
                labels: ['Python', 'PHP', 'Javascript', 'SQL', 'CSS/Bootstrap', 'C++'],
                datasets: [{
                    label: 'Frontend Skills',
                    data: [95, 80, 70, 90, 95, 75],
                    backgroundColor: 'rgba(0, 240, 255, 0.2)',
                    borderColor: 'rgba(0, 240, 255, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(0, 240, 255, 1)',
                    pointRadius: 4
                }]
            },
            options: {
                scales: {
                    r: {
                        angleLines: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        suggestedMin: 0,
                        suggestedMax: 100,
                        pointLabels: {
                            color: 'rgba(255, 255, 255, 0.8)'
                        },
                        ticks: {
                            backdropColor: 'transparent',
                            color: 'rgba(255, 255, 255, 0.5)',
                            showLabelBackdrop: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'rgba(255, 255, 255, 0.8)'
                        }
                    }
                }
            }
        });

        const backendCtx = document.getElementById('backendChart').getContext('2d');
        const backendChart = new Chart(backendCtx, {
            type: 'bar',
            data: {
                labels: ['Node.js', 'Python', 'Javascript', 'Django', 'PHP', 'SQL'],
                datasets: [{
                    label: 'Backend Skills',
                    data: [90, 85, 75, 80, 70, 65],
                    backgroundColor: [
                        'rgba(123, 45, 255, 0.7)',
                        'rgba(123, 45, 255, 0.7)',
                        'rgba(123, 45, 255, 0.7)',
                        'rgba(123, 45, 255, 0.7)',
                        'rgba(123, 45, 255, 0.7)',
                        'rgba(123, 45, 255, 0.7)'
                    ],
                    borderColor: [
                        'rgba(123, 45, 255, 1)',
                        'rgba(123, 45, 255, 1)',
                        'rgba(123, 45, 255, 1)',
                        'rgba(123, 45, 255, 1)',
                        'rgba(123, 45, 255, 1)',
                        'rgba(123, 45, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'rgba(255, 255, 255, 0.8)'
                        }
                    }
                }
            }
        });

        const aiCtx = document.getElementById('aiChart').getContext('2d');
        const aiChart = new Chart(aiCtx, {
            type: 'doughnut',
            data: {
                labels: ['TensorFlow', 'Regressions', 'Scikit-Learn', 'NLP', 'Reinforcement', 'ML-Algorithims'],
                datasets: [{
                    label: 'AI/ML Skills',
                    data: [85, 80, 75, 70, 65, 60],
                    backgroundColor: [
                        'rgba(255, 0, 228, 0.7)',
                        'rgba(200, 0, 255, 0.7)',
                        'rgba(150, 0, 255, 0.7)',
                        'rgba(100, 0, 255, 0.7)',
                        'rgba(50, 0, 255, 0.7)',
                        'rgba(0, 50, 255, 0.7)'
                    ],
                    borderColor: 'rgba(10, 10, 26, 0.8)',
                    borderWidth: 2
                }]
            },
            options: {
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            color: 'rgba(255, 255, 255, 0.8)'
                        }
                    }
                },
                cutout: '70%'
            }
        });

        const devopsCtx = document.getElementById('devopsChart').getContext('2d');
        const devopsChart = new Chart(devopsCtx, {
            type: 'line',
            data: {
                labels: ['', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform', 'Monitoring'],
                datasets: [{
                    label: 'DevOps Skills',
                    data: [85, 80, 75, 90, 70, 80],
                    fill: true,
                    backgroundColor: 'rgba(0, 240, 255, 0.1)',
                    borderColor: 'rgba(0, 240, 255, 1)',
                    tension: 0.4,
                    pointBackgroundColor: 'rgba(0, 240, 255, 1)',
                    pointRadius: 5
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'rgba(255, 255, 255, 0.8)'
                        }
                    }
                }
            }
        });

        // Animate stats counting
        function animateStats() {
            const statNumbers = document.querySelectorAll('.stat-number');
            
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                const duration = 2000; // 2 seconds
                const start = 0;
                const increment = target / (duration / 16); // 60fps
                let current = start;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        clearInterval(timer);
                        current = target;
                    }
                    stat.textContent = Math.floor(current);
                }, 16);
            });
        }

        // Intersection Observer for animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    
                    if (entry.target.id === 'about') {
                        animateStats();
                    }
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('section, .section-title, .portfolio-item').forEach(el => {
            observer.observe(el);
        });

        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Sticky header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            header.classList.toggle('scrolled', window.scrollY > 0);
            
            // Back to top button
            const backToTop = document.querySelector('.back-to-top');
            backToTop.classList.toggle('active', window.scrollY > 500);
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Back to top button
        document.querySelector('.back-to-top').addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // AI Assistant functionality (integrated into new chatbot)

        // AI Knowledge Base
        const aiKnowledge = {
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
            "hi aziry": "Hey that's me! What's on my mind?",
            "morning": "Morning sunshine! Ready to code?",
            "afternoon": "Afternoon! Need tech insights?",
            "evening": "Evening! Perfect time for tech talk!",
            "sup": "Just serving tech knowledge. Sup with you?",
            // Personal Questions
            "your name": "I'm Azizi (or you can call me Aziry)! Nice to meet you!",
            "who are you": "I'm Azizi, a full-stack developer and AI enthusiast. How can I help you today?",
            "azizi": "That's me! What would you like to know about my work?",
            "aziry": "Yes, that's my nickname! Did you want to ask about my projects or skills?",
            "what do you do": "I'm a full-stack developer specializing in AI integration and blockchain solutions.",
            "tell me about yourself": "I'm Azizi, a developer with 7+ years experience building AI-powered web applications and blockchain systems.",
            // Creator/Owner Information
            "who created you": "I was created by Aziry (Azizi), a full-stack developer and AI enthusiast!",
            "who made you": "Aziry (Azizi) developed this AI assistant as a personal project.",
            "who owns this site": "This website and AI assistant are owned and maintained by Aziry (Azizi).",
            "who is the creator": "The creator is Aziry (also known as Azizi), who built this as a showcase of AI integration skills.",
            "who developed this": "This AI assistant and website were developed by Aziry (Azizi) using JavaScript and AI technologies.",
            "who built this": "Aziry (Azizi) designed and built this entire platform from scratch.",
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
            // Personal
            "hobbies": "When not coding, I enjoy chess, open-source contributions, and AI research.",
            "location": "I'm based in Malaysia, but work with clients worldwide.",
            "started coding": "I wrote my first program at 15 and have been passionate ever since!",
            "coding journey": "Started with basic HTML, then moved to JavaScript, and now work with full-stack AI solutions.",
            "tech stack": "My preferred stack is MERN (MongoDB, Express, React, Node.js) with Python for AI components.",
            // Default
            "default": "I'm not sure I understand. Try asking about my:<br>- Skills<br>- Projects<br>- Experience<br>- How to contact me"
        };
        
        const chatbotToggle = document.querySelector('.chatbot-toggle');
        const chatbotWindow = document.getElementById('ai-chatbot-interface');
        const chatbotCloseBtn = document.querySelector('.chatbot-close-btn');
        const chatbotMessages = document.querySelector('.chatbot-messages');
        const userInput = document.getElementById('user-input');
        const sendBtn = document.getElementById('send-btn');

        // Toggle chatbot window visibility
        chatbotToggle.addEventListener('click', () => {
            chatbotWindow.classList.toggle('open');
        });

        // Close chatbot window
        chatbotCloseBtn.addEventListener('click', () => {
            chatbotWindow.classList.remove('open');
        });

        function appendMessage(sender, message) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', `${sender}-message`);
            messageElement.innerHTML = `<p>${message}</p>`;
            chatbotMessages.appendChild(messageElement);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Auto-scroll to latest message
        }

        function getAiResponse(question) {
            question = question.toLowerCase().trim();
            let response = aiKnowledge.default;

            for (const [key, value] of Object.entries(aiKnowledge)) {
                if (question.includes(key)) {
                    response = value;
                    break;
                }
            }
            return response;
        }

        function handleUserInput() {
            const question = userInput.value;
            if (question.trim() === '') return;

            appendMessage('user', question);
            userInput.value = ''; // Clear input

            // Simulate AI thinking delay
            setTimeout(() => {
                appendMessage('ai', getAiResponse(question));
            }, 800);
        }

        // Event listeners for sending messages
        sendBtn.addEventListener('click', handleUserInput);
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleUserInput();
            }
        });

        // Add typing animation style for the chatbot messages
        const style = document.createElement('style');
        style.textContent = `
            .typing-animation {
                color: var(--primary);
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

        // Remove the old AI Assistant functionality
        // document.getElementById('ai-submit').addEventListener('click', respondToQuestion);
        // document.getElementById('ai-question').addEventListener('keypress', function(e) {
        //     if (e.key === 'Enter') respondToQuestion();
        // });

        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            // Removed subject as it's not in the new HTML for contact form
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For demonstration, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon at ${email}.`);
            
            // Reset the form
            this.reset();
        });

        // Simple 3D model with Three.js
        function init3DModel() {
            const container = document.getElementById('model-container');
            if (!container) return;
            
            const width = container.clientWidth;
            const height = container.clientHeight;
            
            // Create scene
            const scene = new THREE.Scene();
            scene.background = new THREE.Color(0x0a0a1a);
            
            // Create camera
            const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
            camera.position.z = 5;
            
            // Create renderer
            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(width, height);
            container.appendChild(renderer.domElement);
            
            // Create geometry
            const geometry = new THREE.IcosahedronGeometry(1.5, 1);
            const material = new THREE.MeshPhongMaterial({
                color: 0x00f0ff,
                emissive: 0x0077ff,
                specular: 0xffffff,
                shininess: 50,
                wireframe: false,
                transparent: true,
                opacity: 0.9
            });
            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);
            
            // Add lights
            const ambientLight = new THREE.AmbientLight(0x404040);
            scene.add(ambientLight);
            
            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(1, 1, 1);
            scene.add(directionalLight);
            
            const pointLight = new THREE.PointLight(0x00f0ff, 1, 100);
            pointLight.position.set(5, 5, 5);
            scene.add(pointLight);
            
            // Animation loop
            function animate() {
                requestAnimationFrame(animate);
                
                mesh.rotation.x += 0.005;
                mesh.rotation.y += 0.01;
                
                renderer.render(scene, camera);
            }
            
            animate();
            
            // Handle window resize
            window.addEventListener('resize', () => {
                const newWidth = container.clientWidth;
                const newHeight = container.clientHeight;
                
                camera.aspect = newWidth / newHeight;
                camera.updateProjectionMatrix();
                
                renderer.setSize(newWidth, newHeight);
            });
        }
        
        // Initialize 3D model when page loads
        window.addEventListener('load', init3DModel);


        // --- Original AI Assistant functionality (re-enabled) ---

        const oldAiResponseArea = document.getElementById('ai-response');
        const oldAiQuestionInput = document.getElementById('ai-question');
        const oldAiSubmitButton = document.getElementById('ai-submit');

        function handleOldAiUserInput() {
            const question = oldAiQuestionInput.value;
            if (question.trim() === '') return;

            // Display typing animation
            oldAiResponseArea.innerHTML = '<span class="typing-animation">AI is thinking...</span>';
            oldAiQuestionInput.value = ''; // Clear input

            // Simulate AI thinking delay and get response
            setTimeout(() => {
                oldAiResponseArea.innerHTML = getAiResponse(question);
            }, 800);
        }

        if (oldAiSubmitButton) {
            oldAiSubmitButton.addEventListener('click', handleOldAiUserInput);
        }
        if (oldAiQuestionInput) {
            oldAiQuestionInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    handleOldAiUserInput();
                }
            });
        }