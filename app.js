(function () {
    'use strict';

    /* ===== SVG ICONS ===== */
    const SVG = {
        github: '<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
        linkedin: '<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',
        email: '<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
        externalLink: '<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>',
        playStore: '<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>',
        appStore: '<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/></svg>',
        location: '<svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
        phone: '<svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>',
        education: '<svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/></svg>',
        pkg: '<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>',
        arrowRight: '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>',
        platforms: '⚡',
        architecture: '🏗️',
        advanced: '🚀',
        stateManagement: '🔄',
        integration: '🔌',
        devops: '⚙️',
        softSkills: '💡'
    };

    const skillColors = ['purple', 'blue', 'cyan', 'emerald', 'amber', 'rose', 'purple'];
    const skillIcons = [SVG.platforms, SVG.architecture, SVG.advanced, SVG.stateManagement, SVG.integration, SVG.devops, SVG.softSkills];
    const skillProgress = [95, 90, 88, 92, 90, 85, 88];

    const esc = (text) => {
        const d = document.createElement('div');
        d.textContent = text;
        return d.innerHTML;
    };

    /* ===== THEME TOGGLE ===== */
    let currentTheme = 'dark';

    function getParticleColor(opacity) {
        if (currentTheme === 'light') {
            return `rgba(108, 71, 240, ${opacity * 0.7})`;
        }
        return `rgba(124, 91, 245, ${opacity})`;
    }

    function initThemeToggle() {
        const toggle = document.getElementById('themeToggle');
        if (!toggle) return;

        // Determine initial theme
        const saved = localStorage.getItem('portfolio-theme');
        if (saved) {
            currentTheme = saved;
        } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            currentTheme = 'light';
        }

        applyTheme(currentTheme);

        toggle.addEventListener('click', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(currentTheme);
            localStorage.setItem('portfolio-theme', currentTheme);
        });

        // Listen for system preference changes
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
            if (!localStorage.getItem('portfolio-theme')) {
                currentTheme = e.matches ? 'light' : 'dark';
                applyTheme(currentTheme);
            }
        });
    }

    function applyTheme(theme) {
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }

    /* ===== CANVAS PARTICLE NETWORK ===== */
    function initCanvas() {
        const canvas = document.getElementById('heroCanvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let w, h;
        let particles = [];
        let mouse = { x: -1000, y: -1000 };
        let animId;
        let time = 0;

        // Color palette for particles
        const particleColors = [
            [124, 91, 245],   // Purple
            [168, 85, 247],   // Violet
            [99, 102, 241],   // Indigo
            [59, 130, 246],   // Blue
            [6, 182, 212],    // Cyan
        ];

        function resize() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        }

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.vx = (Math.random() - 0.5) * 0.6;
                this.vy = (Math.random() - 0.5) * 0.6;
                this.radius = Math.random() * 2.5 + 0.8;
                this.opacity = Math.random() * 0.6 + 0.15;
                this.baseOpacity = this.opacity;
                this.color = particleColors[Math.floor(Math.random() * particleColors.length)];
                this.pulseSpeed = Math.random() * 0.02 + 0.005;
                this.pulseOffset = Math.random() * Math.PI * 2;
                this.floatAmplitude = Math.random() * 0.3 + 0.1;
                this.floatSpeed = Math.random() * 0.008 + 0.003;
            }

            update() {
                // Base movement + gentle sine-wave float
                this.x += this.vx + Math.sin(time * this.floatSpeed + this.pulseOffset) * this.floatAmplitude;
                this.y += this.vy + Math.cos(time * this.floatSpeed * 0.7 + this.pulseOffset) * this.floatAmplitude;

                // Wrap around edges smoothly
                if (this.x < -20) this.x = w + 20;
                if (this.x > w + 20) this.x = -20;
                if (this.y < -20) this.y = h + 20;
                if (this.y > h + 20) this.y = -20;

                // Pulsing opacity
                const pulse = Math.sin(time * this.pulseSpeed + this.pulseOffset) * 0.15;
                this.opacity = this.baseOpacity + pulse;

                // Mouse interaction — stronger push
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const mouseRadius = 250;
                if (dist < mouseRadius) {
                    const factor = 1 - dist / mouseRadius;
                    this.opacity = Math.min(this.baseOpacity + factor * 0.6, 1);
                    const force = factor * factor;
                    this.x += dx * force * 0.025;
                    this.y += dy * force * 0.025;
                }
            }

            draw() {
                const lightMode = currentTheme === 'light';
                const alpha = lightMode ? this.opacity * 0.6 : this.opacity;
                const [r, g, b] = this.color;

                // Glow halo for larger particles
                if (this.radius > 1.5) {
                    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 4);
                    gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 0.3})`);
                    gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius * 4, 0, Math.PI * 2);
                    ctx.fillStyle = gradient;
                    ctx.fill();
                }

                // Core dot
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
                ctx.fill();
            }
        }

        function init() {
            resize();
            const count = Math.min(Math.floor((w * h) / 6000), 180);
            particles = [];
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        }

        function drawConnections() {
            const connectionDist = 180;
            const mouseConnectionDist = 280;

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDist) {
                        const opacity = (1 - dist / connectionDist) * 0.25;
                        const lightMode = currentTheme === 'light';
                        const finalOpacity = lightMode ? opacity * 0.5 : opacity;

                        // Blend colors of the two connected particles
                        const [r1, g1, b1] = particles[i].color;
                        const [r2, g2, b2] = particles[j].color;
                        const r = Math.round((r1 + r2) / 2);
                        const g = Math.round((g1 + g2) / 2);
                        const b = Math.round((b1 + b2) / 2);

                        // Thicker lines near mouse
                        const midX = (particles[i].x + particles[j].x) / 2;
                        const midY = (particles[i].y + particles[j].y) / 2;
                        const mouseDist = Math.sqrt((midX - mouse.x) ** 2 + (midY - mouse.y) ** 2);
                        const lineWidth = mouseDist < mouseConnectionDist
                            ? 0.6 + (1 - mouseDist / mouseConnectionDist) * 1.2
                            : 0.6;

                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${finalOpacity})`;
                        ctx.lineWidth = lineWidth;
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, w, h);
            time++;

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            drawConnections();
            animId = requestAnimationFrame(animate);
        }

        window.addEventListener('resize', () => {
            resize();
            particles.forEach(p => {
                if (p.x > w + 20) p.x = Math.random() * w;
                if (p.y > h + 20) p.y = Math.random() * h;
            });
        });

        document.addEventListener('mousemove', e => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        init();
        animate();
    }

    /* ===== CURSOR GLOW ===== */
    function initCursorGlow() {
        const glow = document.getElementById('cursorGlow');
        if (!glow || window.matchMedia('(pointer: coarse)').matches) return;

        let targetX = 0, targetY = 0;
        let currentX = 0, currentY = 0;

        document.addEventListener('mousemove', e => {
            targetX = e.clientX;
            targetY = e.clientY;
            glow.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            glow.style.opacity = '0';
        });

        function animateGlow() {
            currentX += (targetX - currentX) * 0.08;
            currentY += (targetY - currentY) * 0.08;
            glow.style.transform = `translate(${currentX - 300}px, ${currentY - 300}px)`;
            requestAnimationFrame(animateGlow);
        }

        animateGlow();
    }

    /* ===== SCROLL REVEAL ===== */
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal, .stagger-reveal');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.delay || 0;
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                        // For skill cards, also add 'revealed' class
                        if (entry.target.classList.contains('skill-card')) {
                            entry.target.classList.add('revealed');
                        }
                    }, parseInt(delay));
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => observer.observe(el));

        // Also observe dynamically added elements
        const bodyObserver = new MutationObserver(() => {
            document.querySelectorAll('.reveal:not(.visible), .stagger-reveal:not(.visible)').forEach(el => {
                observer.observe(el);
            });
        });

        bodyObserver.observe(document.body, { childList: true, subtree: true });
    }

    /* ===== 3D TILT ON PROJECT CARDS ===== */
    function initTiltCards() {
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.project-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / centerY * -3;
                    const rotateY = (x - centerX) / centerX * 3;

                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(5px)`;
                } else {
                    card.style.transform = '';
                }
            });
        });
    }

    /* ===== NAVBAR ===== */
    function initNavbar() {
        const navbar = document.getElementById('navbar');
        const menuBtn = document.getElementById('menuBtn');
        const closeBtn = document.getElementById('closeMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const navLinks = document.querySelectorAll('.nav-link');

        // Scroll detection
        let prevScroll = 0;
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            navbar.classList.toggle('scrolled', scrollY > 50);
            prevScroll = scrollY;
        }, { passive: true });

        // Active section tracking
        const sections = document.querySelectorAll('section[id]');
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    navLinks.forEach(link => {
                        link.classList.toggle('active', link.dataset.section === id);
                    });
                }
            });
        }, { threshold: 0.3 });

        sections.forEach(section => sectionObserver.observe(section));

        // Mobile menu
        const toggleMenu = (open) => {
            mobileMenu.classList.toggle('open', open);
            menuBtn.classList.toggle('active', open);
            document.body.style.overflow = open ? 'hidden' : '';
        };

        menuBtn?.addEventListener('click', () => toggleMenu(true));
        closeBtn?.addEventListener('click', () => toggleMenu(false));
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => toggleMenu(false));
        });
    }

    /* ===== RENDER FUNCTIONS ===== */

    function renderHero(data) {
        const p = data.personal;
        const s = data.social;

        document.getElementById('navImage').src = p.image;
        document.getElementById('navImage').alt = p.name;
        document.getElementById('heroImage').src = p.image;
        document.getElementById('heroImage').alt = p.name;
        document.getElementById('heroName').textContent = p.name;
        document.getElementById('heroTitle').textContent = p.title;
        document.getElementById('heroDescription').textContent = p.description;

        document.title = `${p.name} - ${p.title}`;
        document.querySelector('meta[name="description"]').content = `${p.name} - ${p.title}. ${p.description}`;

        const social = document.getElementById('heroSocial');
        const links = [
            { url: s.github, icon: SVG.github, label: 'GitHub' },
            { url: s.linkedin, icon: SVG.linkedin, label: 'LinkedIn' },
            { url: `mailto:${p.email}`, icon: SVG.email, label: 'Email' }
        ];

        links.forEach(l => {
            const a = document.createElement('a');
            a.href = l.url;
            a.className = 'social-link';
            a.setAttribute('aria-label', l.label);
            if (!l.url.startsWith('mailto:')) {
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
            }
            a.innerHTML = l.icon;
            social.appendChild(a);
        });
    }

    function renderAbout(data) {
        const p = data.personal;
        const c = document.getElementById('aboutContainer');

        c.innerHTML = `
            <div class="about-card reveal" data-delay="0">
                <div class="about-card-icon location">${SVG.location}</div>
                <h3>Location</h3>
                <p>${esc(p.location)}</p>
            </div>
            <div class="about-card reveal" data-delay="100">
                <div class="about-card-icon contact">${SVG.phone}</div>
                <h3>Contact</h3>
                <p>${esc(p.phone)}</p>
                <p class="sub-text">${esc(p.email)}</p>
            </div>
            <div class="about-card about-card-span2 reveal" data-delay="200">
                <div class="about-card-icon education">${SVG.education}</div>
                <h3>Education</h3>
                <p>${esc(p.education.degree)}</p>
                <p class="sub-text">${esc(p.education.institution)} — ${esc(p.education.period)}</p>
            </div>
        `;
    }

    function renderExperience(data) {
        const c = document.getElementById('experienceContainer');
        c.innerHTML = data.experience.map((e, i) => `
            <div class="timeline-item reveal" data-delay="${i * 100}">
                <div class="timeline-dot"></div>
                <div class="timeline-card">
                    <div class="timeline-header">
                        <div>
                            <h3 class="timeline-title">${esc(e.title)}</h3>
                            <p class="timeline-company">${esc(e.company)}</p>
                            <p class="timeline-type">${esc(e.type)}</p>
                        </div>
                        <span class="timeline-period">${esc(e.period)}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    function renderSkills(data) {
        const c = document.getElementById('skillsContainer');
        c.innerHTML = data.skills.map((s, i) => `
            <div class="skill-card reveal" data-color="${skillColors[i] || 'purple'}" data-delay="${i * 80}" style="--progress: ${skillProgress[i] || 85}%">
                <div class="skill-card-header">
                    <div class="skill-card-icon">${skillIcons[i] || '💻'}</div>
                    <h3>${esc(s.category)}</h3>
                </div>
                <div class="skill-tags">
                    ${s.items.map(item => `<span class="skill-tag">${esc(item)}</span>`).join('')}
                </div>
                <div class="skill-progress">
                    <div class="skill-progress-bar"></div>
                </div>
            </div>
        `).join('');

        c.classList.add('stagger-reveal');
    }

    function renderProjects(data) {
        const c = document.getElementById('projectsContainer');

        c.innerHTML = data.projects.map((p, i) => {
            const hasLinks = p.playStore || p.appStore;

            let linksHtml = '';
            if (hasLinks) {
                linksHtml = '<div class="project-links">';
                if (p.playStore) {
                    linksHtml += `<a href="${p.playStore}" target="_blank" rel="noopener noreferrer" class="store-link play-store">${SVG.playStore}<span>Play Store</span></a>`;
                }
                if (p.appStore) {
                    linksHtml += `<a href="${p.appStore}" target="_blank" rel="noopener noreferrer" class="store-link app-store">${SVG.appStore}<span>App Store</span></a>`;
                }
                linksHtml += '</div>';
            }

            return `
                <article class="project-card reveal" data-delay="${i * 80}">
                    <div class="project-card-header">
                        <div class="project-icon">${esc(p.icon)}</div>
                        ${hasLinks ? `<span class="project-external-link">${SVG.externalLink}</span>` : ''}
                    </div>
                    <h3>${esc(p.name)}</h3>
                    <p class="project-meta">${esc(p.company)} · ${p.year}</p>
                    <p class="project-desc">${esc(p.description)}</p>
                    <div class="project-techs">
                        ${p.technologies.map(t => `<span class="project-tech">${esc(t)}</span>`).join('')}
                    </div>
                    ${linksHtml}
                </article>
            `;
        }).join('');
    }

    function renderPackages(data) {
        const c = document.getElementById('packagesContainer');

        c.innerHTML = data.packages.map((p, i) => `
            <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="package-card reveal" data-delay="${i * 100}">
                <div class="package-icon">${SVG.pkg}</div>
                <h3>${esc(p.name)}</h3>
                <p>${esc(p.description)}</p>
                <span class="package-link-arrow">View on pub.dev ${SVG.arrowRight}</span>
            </a>
        `).join('');
    }

    function renderContact(data) {
        const p = data.personal;
        const s = data.social;

        document.getElementById('contactContainer').innerHTML = `
            <a href="mailto:${p.email}" class="contact-btn primary reveal" data-delay="0">
                ${SVG.email}
                <span>Send Email</span>
            </a>
            <a href="${s.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-btn secondary reveal" data-delay="100">
                ${SVG.linkedin}
                <span>Connect on LinkedIn</span>
            </a>
            <a href="${s.github}" target="_blank" rel="noopener noreferrer" class="contact-btn secondary reveal" data-delay="200">
                ${SVG.github}
                <span>View GitHub</span>
            </a>
        `;

        // Ripple effect on buttons
        document.querySelectorAll('.contact-btn').forEach(btn => {
            btn.addEventListener('click', function (e) {
                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
                ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
                this.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    function renderFooter(data) {
        const p = data.personal;
        const s = data.social;

        document.getElementById('footerCopyright').textContent =
            `© ${new Date().getFullYear()} ${p.name}. Crafted with passion for mobile development.`;

        const fl = document.getElementById('footerLinks');
        const items = [
            { label: 'GitHub', url: s.github },
            { label: 'LinkedIn', url: s.linkedin },
            { label: 'Medium', url: s.medium },
            { label: 'WakaTime', url: s.wakatime }
        ];

        fl.innerHTML = items.map(i =>
            `<a href="${i.url}" target="_blank" rel="noopener noreferrer">${i.label}</a>`
        ).join('');
    }

    /* ===== SMOOTH ACTIVE NAV ON SCROLL ===== */
    function initSmoothNav() {
        const navLinks = document.querySelectorAll('.nav-link[data-section]');
        const sections = [];

        navLinks.forEach(link => {
            const sectionId = link.dataset.section;
            const section = document.getElementById(sectionId);
            if (section) sections.push({ link, section });
        });

        function updateActive() {
            const scrollPos = window.scrollY + window.innerHeight / 3;

            sections.forEach(({ link, section }) => {
                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;

                if (scrollPos >= top && scrollPos < bottom) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', updateActive, { passive: true });
        updateActive();
    }

    /* ===== TYPEWRITER EFFECT FOR HERO TITLE ===== */
    function typeWriter(element, text, speed = 80) {
        let i = 0;
        element.textContent = '';
        element.style.opacity = '1';

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        type();
    }

    /* ===== INIT ===== */
    function init() {
        const data = typeof PORTFOLIO_DATA !== 'undefined' ? PORTFOLIO_DATA : null;
        if (!data) {
            console.warn('PORTFOLIO_DATA not found');
            return;
        }

        // Render all sections
        renderHero(data);
        renderAbout(data);
        renderExperience(data);
        renderSkills(data);
        renderProjects(data);
        renderPackages(data);
        renderContact(data);
        renderFooter(data);

        // Init interactive features
        initThemeToggle();
        initCanvas();
        initCursorGlow();
        initNavbar();
        initScrollReveal();
        initTiltCards();
        initSmoothNav();

        // Typewriter effect for hero name
        setTimeout(() => {
            const heroName = document.getElementById('heroName');
            if (heroName && data.personal.name) {
                typeWriter(heroName, data.personal.name, 100);
            }
        }, 400);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
