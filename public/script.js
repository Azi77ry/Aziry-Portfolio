// Aziry Tech portfolio — interactions
document.addEventListener('DOMContentLoaded', () => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const escapeHtml = (t) => t.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const now = () => new Date().toTimeString().slice(0, 5);

  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll reveal
  if ('IntersectionObserver' in window && !reduceMotion) {
    const targets = $$('main > section:not(.hero) .wrap > *, .features > div, .quotes > figure, .skills > div, .index li, details');
    targets.forEach((el) => el.classList.add('reveal'));
    const ro = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const sibs = Array.from(e.target.parentElement.children);
        e.target.style.transitionDelay = Math.min(sibs.indexOf(e.target), 5) * 70 + 'ms';
        e.target.classList.add('in');
        ro.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    targets.forEach((el) => ro.observe(el));
  }

  // Cursor spotlight on glass cards
  $$('.spot').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  // Mobile menu
  const menuBtn = $('.menu-btn');
  const navList = $('#nav-list');
  if (menuBtn && navList) {
    menuBtn.addEventListener('click', () => {
      const open = navList.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.textContent = open ? 'Close' : 'Menu';
    });
    $$('a', navList).forEach((a) => a.addEventListener('click', () => {
      navList.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.textContent = 'Menu';
    }));
  }

  // Current section in nav
  const navLinks = $$('#nav-list a');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        navLinks.forEach((l) => l.classList.toggle('is-current', l.getAttribute('href') === '#' + e.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    navLinks.forEach((l) => { const s = $(l.getAttribute('href')); if (s) io.observe(s); });
  }

  // Project filter
  const filters = $$('.filter');
  const rows = $$('.index li');
  filters.forEach((btn) => btn.addEventListener('click', () => {
    const f = btn.dataset.filter;
    filters.forEach((b) => { const on = b === btn; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', String(on)); });
    rows.forEach((r) => { r.hidden = !(f === 'all' || (r.dataset.category || '').split(' ').includes(f)); });
  }));

  // WhatsApp simulator
  const chat = $('#waChatBody');
  const status = $('#waHeaderStatus');
  const replies = [
    [/ban|salama|block/, 'Mfumo unaandika kwa kasi ya binadamu (sekunde 2–5), una mipaka ya ujumbe kwa siku, na unaheshimu wateja wanaosema "STOP". Hivyo ndivyo WhatsApp inavyotarajia biashara ya kawaida ifanye.'],
    [/bei|gharama|cost|price|shilingi|tsh/, 'Bei inaanzia <strong>TZS 30,000 kwa mwezi</strong>, pamoja na kuweka bidhaa zako, usanidi na msaada wa kiufundi.'],
    [/duka|bidhaa|unganisha|product|shop/, 'Tunaweka orodha ya bidhaa zako, picha, bei na namba ya malipo (M-Pesa, Airtel Money, HaloPesa). Mteja akiuliza, AI inamtumia picha na bei papo hapo.'],
    [/anza|leo|start|join/, 'Safi! Bonyeza "Jaribu demo sasa" au tuma ujumbe WhatsApp kwa +255 692 350 076, tutakuanzishia ndani ya siku 1–3.'],
    [/habari|mambo|hello|hi\b|salam/, 'Habari! Karibu Aziry Tech. Niulize kuhusu bei, usalama wa namba au kuunganisha duka lako.'],
  ];
  const fallback = 'Swali zuri! AI inajibu wateja saa 24, inatoa bei na kuchukua oda yenyewe. Kwa maelezo zaidi, tuma ujumbe WhatsApp kwa +255 692 350 076.';
  const waReply = (t) => { const q = t.toLowerCase(); const hit = replies.find(([re]) => re.test(q)); return hit ? hit[1] : fallback; };

  function addBubble(cls, html) {
    const b = document.createElement('div');
    b.className = 'bubble ' + cls;
    b.lang = 'sw';
    b.innerHTML = html + '<time>' + now() + '</time>';
    chat.appendChild(b);
    chat.scrollTop = chat.scrollHeight;
  }
  function simulate(text) {
    if (!chat || !text.trim()) return;
    addBubble('in', escapeHtml(text));
    if (status) status.textContent = 'typing…';
    const typing = document.createElement('div');
    typing.className = 'typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    chat.appendChild(typing);
    chat.scrollTop = chat.scrollHeight;
    setTimeout(() => {
      typing.remove();
      addBubble('out', waReply(text));
      if (status) status.textContent = 'online';
    }, 900);
  }
  $$('.wa-chip').forEach((c) => c.addEventListener('click', () => simulate(c.dataset.msg || c.textContent)));
  const waForm = $('#waSimulatorForm');
  const waInput = $('#waSimInput');
  if (waForm && waInput) waForm.addEventListener('submit', (e) => { e.preventDefault(); simulate(waInput.value); waInput.value = ''; });

  // Estimator: 3 minutes per customer, 30 days
  const slider = $('#roiSlider');
  if (slider) {
    const out = $('#sliderValDisplay'), hrs = $('#statHoursSaved'), chats = $('#statChats');
    const update = () => {
      const v = +slider.value;
      out.textContent = v;
      hrs.textContent = Math.round(v * 3 * 30 / 60).toLocaleString('en-US');
      chats.textContent = (v * 30).toLocaleString('en-US');
    };
    slider.addEventListener('input', update);
    update();
  }

  // Assistant
  const toggle = $('.assist-toggle');
  const panel = $('#assistant');
  const log = $('.assist-log');
  const aInput = $('#assistInput');
  const kb = window.aiKnowledge || {};
  const answer = (q) => {
    const t = q.toLowerCase().trim();
    const key = Object.keys(kb).sort((a, b) => b.length - a.length).find((k) => t.includes(k));
    return key ? kb[key] : 'Asante! Kwa swali hili, ni bora uongee na Azizi moja kwa moja: <a href="https://wa.me/255692350076" target="_blank" rel="noopener">WhatsApp +255 692 350 076</a>.';
  };
  function say(cls, html) {
    const p = document.createElement('p');
    p.className = 'msg ' + cls;
    p.innerHTML = html;
    log.appendChild(p);
    log.scrollTop = log.scrollHeight;
  }
  function ask(q) {
    if (!q.trim()) return;
    say('me', escapeHtml(q));
    setTimeout(() => say('bot', answer(q)), 350);
  }
  function setOpen(open) {
    panel.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    if (open) aInput.focus(); else toggle.focus();
  }
  if (toggle && panel) {
    toggle.addEventListener('click', () => setOpen(panel.hidden));
    $('.assist-close').addEventListener('click', () => setOpen(false));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !panel.hidden) setOpen(false); });
    $$('.assist-chips button').forEach((b) => b.addEventListener('click', () => ask(b.dataset.q === 'bei' ? 'bei' : b.dataset.q)));
    $('.assist-input').addEventListener('submit', (e) => { e.preventDefault(); ask(aInput.value); aInput.value = ''; });
  }

  // Contact form
  const form = $('#contactForm');
  const msg = $('#contactStatus');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = { name: form.name.value.trim(), email: form.email.value.trim(), message: form.message.value.trim() };
      if (!data.name || !data.email || !data.message) {
        msg.className = 'status err';
        msg.textContent = 'Fill in your name, a way to reach you, and your message.';
        return;
      }
      const btn = form.querySelector('button[type=submit]');
      btn.disabled = true;
      msg.className = 'status';
      msg.textContent = 'Sending…';
      try {
        const base = (window.BACKEND_BASE_URL || '').replace(/\/$/, '');
        const res = await fetch(base + '/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
        if (!res.ok) throw new Error(res.status);
        msg.className = 'status ok';
        msg.textContent = 'Message sent. Azizi will reply soon.';
        form.reset();
      } catch (err) {
        msg.className = 'status err';
        msg.innerHTML = 'Your message could not be sent. Please send it on <a href="https://wa.me/255692350076" target="_blank" rel="noopener">WhatsApp</a> instead.';
      } finally {
        btn.disabled = false;
      }
    });
  }
});
