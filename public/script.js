// ========================================================
// AZIRY TECH PORTFOLIO & AI SHOWCASE - SCRIPT
// ========================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navigation Sticky & Active Link on Scroll
  const header = document.querySelector('header');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-links');
  const backToTopBtn = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header shadow & background
    if (scrollPos > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to top button
    if (backToTopBtn) {
      if (scrollPos > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Active nav link highlight
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Mobile menu toggle
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // Back to top click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 2. Typed.js Animated Headline in Hero
  const typedTarget = document.querySelector('.typed-text');
  if (typedTarget && typeof Typed !== 'undefined') {
    new Typed('.typed-text', {
      strings: [
        'Python & Django Developer',
        'Full-Stack & Next.js Engineer',
        'AI & WhatsApp Automation Specialist',
        'Data Scientist & ML Researcher',
        'Founder of Aziry Tech'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1800,
      loop: true
    });
  }

  // 3. Stats Counter Animation
  const statNumbers = document.querySelectorAll('.stat-num');
  let animatedStats = false;

  function countUpStats() {
    if (animatedStats) return;
    const triggerBottom = window.innerHeight * 0.85;

    statNumbers.forEach(stat => {
      const box = stat.getBoundingClientRect();
      if (box.top < triggerBottom) {
        animatedStats = true;
        const target = parseInt(stat.getAttribute('data-count') || '0', 10);
        let count = 0;
        const step = Math.max(1, Math.floor(target / 40));
        const timer = setInterval(() => {
          count += step;
          if (count >= target) {
            stat.textContent = target + '+';
            clearInterval(timer);
          } else {
            stat.textContent = count + '+';
          }
        }, 35);
      }
    });
  }

  window.addEventListener('scroll', countUpStats);
  countUpStats(); // initial check

  // 4. Project Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter') || 'all';

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        if (filterVal === 'all' || category.includes(filterVal)) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });

  // 5. In-Page AI Assistant
  const aiSubmitBtn = document.getElementById('ai-submit');
  const aiQuestionInput = document.getElementById('ai-question');
  const aiResponseBox = document.getElementById('ai-response');
  const promptChips = document.querySelectorAll('.ai-prompt-chips .chip');

  function getAiAnswer(query) {
    const q = query.toLowerCase().trim();
    if (!q) return "Tafadhali andika swali lako nami nitakujibu mara moja!";

    const kb = window.aiKnowledge || {};

    // Direct key match
    for (const [key, answer] of Object.entries(kb)) {
      if (q.includes(key)) {
        return answer;
      }
    }

    // Default intelligent fallback
    return "Asante kwa swali lako kuhusu <strong>" + query + "</strong>. Azizi Iddi ni mtaalamu mbobezi wa Python, Django, mifumo ya AI, WhatsApp AI Sales Agents, na Web Applications. Unaweza kuwasiliana naye moja kwa moja kupitia WhatsApp (+255 692 350 076) kwa maelezo zaidi!";
  }

  function handleInPageAi() {
    if (!aiQuestionInput || !aiResponseBox) return;
    const text = aiQuestionInput.value.trim();
    if (!text) return;

    aiResponseBox.innerHTML = '<span style="color: #64748b;"><i class="fas fa-spinner fa-spin"></i> Azizi AI is thinking...</span>';

    setTimeout(() => {
      const answer = getAiAnswer(text);
      aiResponseBox.innerHTML = answer;
    }, 400);
  }

  if (aiSubmitBtn && aiQuestionInput) {
    aiSubmitBtn.addEventListener('click', handleInPageAi);
    aiQuestionInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleInPageAi();
    });
  }

  promptChips.forEach(chip => {
    chip.addEventListener('click', () => {
      if (aiQuestionInput) {
        aiQuestionInput.value = chip.textContent.trim();
        handleInPageAi();
      }
    });
  });

  // 6. Floating Chatbot Window
  const chatbotToggle = document.querySelector('.chatbot-toggle');
  const chatbotWindow = document.getElementById('ai-chatbot-interface');
  const chatbotCloseBtn = document.querySelector('.chatbot-close-btn');
  const chatbotMessages = document.querySelector('.chatbot-messages');
  const userInput = document.getElementById('user-input');
  const sendBtn = document.getElementById('send-btn');

  if (chatbotToggle && chatbotWindow) {
    chatbotToggle.addEventListener('click', () => {
      chatbotWindow.classList.toggle('open');
      if (chatbotWindow.classList.contains('open') && userInput) {
        userInput.focus();
      }
    });
  }

  if (chatbotCloseBtn && chatbotWindow) {
    chatbotCloseBtn.addEventListener('click', () => {
      chatbotWindow.classList.remove('open');
    });
  }

  function appendChatMessage(sender, text) {
    if (!chatbotMessages) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = 'message ' + (sender === 'user' ? 'user-message' : 'ai-message');
    msgDiv.innerHTML = '<p>' + text + '</p>';
    chatbotMessages.appendChild(msgDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function handleChatbotInput() {
    if (!userInput) return;
    const val = userInput.value.trim();
    if (!val) return;

    appendChatMessage('user', val);
    userInput.value = '';

    setTimeout(() => {
      const reply = getAiAnswer(val);
      appendChatMessage('ai', reply);
    }, 450);
  }

  if (sendBtn && userInput) {
    sendBtn.addEventListener('click', handleChatbotInput);
    userInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleChatbotInput();
    });
  }

  // 7. Contact Form AJAX Submission
  const contactForm = document.getElementById('contactForm');
  const contactStatus = document.getElementById('contactStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (contactStatus) {
        contactStatus.className = 'contact-status';
        contactStatus.style.display = 'block';
        contactStatus.textContent = 'Inatuma ujumbe... Tafadhali subiri.';
      }

      const formData = {
        name: contactForm.name ? contactForm.name.value : '',
        email: contactForm.email ? contactForm.email.value : '',
        message: contactForm.message ? contactForm.message.value : ''
      };

      const backendBase = (typeof window.BACKEND_BASE_URL !== 'undefined' && window.BACKEND_BASE_URL) 
        ? window.BACKEND_BASE_URL.replace(/\/$/, '') 
        : '';

      const apiUrl = (backendBase ? backendBase : '') + '/api/contact';

      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
          if (contactStatus) {
            contactStatus.className = 'contact-status success';
            contactStatus.textContent = data.message || 'Ujumbe wako umetumwa kikamilifu!';
          }
          contactForm.reset();
        } else {
          if (contactStatus) {
            contactStatus.className = 'contact-status error';
            contactStatus.textContent = data.message || 'Hitilafu imetokea. Tafadhali jaribu tena au tuma kupitia WhatsApp.';
          }
        }
      } catch (err) {
        console.error('Submission error:', err);
        if (contactStatus) {
          contactStatus.className = 'contact-status error';
          contactStatus.innerHTML = 'Ujumbe umepokelewa lakini hauwezi kutumwa kwa barua pepe kwa sasa. Tafadhali tutumie ujumbe moja kwa moja WhatsApp: <a href="https://wa.me/255692350076" style="color: #047857; text-decoration: underline;">Bofya Hapa</a>.';
        }
      }
    });
  }
});
