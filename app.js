/**
 * ASTRA Brand Identity & Creative Agency Web Engine
 * Implements interactive canvas constellation, brand lab inspector,
 * modern dialog modals, dynamic brief calculator, and audio feedback.
 */

document.addEventListener('DOMContentLoaded', () => {
  initConstellationCanvas();
  initHeader();
  initLogoLab();
  initColorCopy();
  initTypeTester();
  initManualLightbox();
  initBriefSimulator();
  initContactForm();
  initAudioSynth();
});

/* ==========================================================================
   1. CONSTELLATION PARTICLES CANVAS (ASTRA = STARS & CONNECTIONS)
   ========================================================================== */
function initConstellationCanvas() {
  const canvas = document.getElementById('constellation-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const mouse = { x: -1000, y: -1000, active: false };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });

  window.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  // Star Particles
  const PARTICLE_COUNT = Math.min(Math.floor((width * height) / 18000), 75);
  const particles = [];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.8 + 0.8,
      color: Math.random() > 0.3 ? '#cfff02' : '#ffffff',
      alpha: Math.random() * 0.5 + 0.3
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw Particles & Connections
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Draw dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Inter-particle links
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = '#cfff02';
          ctx.globalAlpha = (1 - dist / 130) * 0.18;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Mouse attraction & connection
      if (mouse.active) {
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < 160) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = '#1046c0';
          ctx.globalAlpha = (1 - mdist / 160) * 0.35;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    ctx.globalAlpha = 1.0;
    requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================================
   2. HEADER & MOBILE NAVIGATION
   ========================================================================== */
function initHeader() {
  const header = document.getElementById('main-header');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });

    // Close when clicking mobile nav links
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
      });
    });
  }
}

/* ==========================================================================
   3. BRAND LAB & LOGO VECTOR SWITCHER
   ========================================================================== */
function initLogoLab() {
  const activeLogoImg = document.getElementById('active-logo-img');
  const variantBtns = document.querySelectorAll('.logo-variant-btn');
  const toggleGridBtn = document.getElementById('toggle-grid-btn');
  const blueprintLayer = document.getElementById('blueprint-layer');

  const variantMap = {
    corp: 'assets/logos/astra-logo.svg',
    white: 'assets/logos/astra-logo-white.svg',
    volt: 'assets/logos/astra-logo-volt.svg',
    blue: 'assets/logos/astra-logo-blue.svg',
    orange: 'assets/logos/astra-logo-orange.svg',
    symbol: 'assets/logos/astra-symbol.svg'
  };

  variantBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      variantBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const variantKey = btn.getAttribute('data-variant');
      if (variantMap[variantKey] && activeLogoImg) {
        // Subtle scaling animation
        activeLogoImg.style.opacity = '0';
        activeLogoImg.style.transform = 'scale(0.92)';

        setTimeout(() => {
          activeLogoImg.src = variantMap[variantKey];
          activeLogoImg.style.opacity = '1';
          activeLogoImg.style.transform = 'scale(1)';
        }, 150);

        playBeep(440, 0.05);
      }
    });
  });

  if (toggleGridBtn && blueprintLayer) {
    let isGridOn = false;
    toggleGridBtn.addEventListener('click', () => {
      isGridOn = !isGridOn;
      if (isGridOn) {
        blueprintLayer.style.opacity = '1';
        toggleGridBtn.classList.add('bg-volt', 'text-black');
      } else {
        blueprintLayer.style.opacity = '0';
        toggleGridBtn.classList.remove('bg-volt', 'text-black');
      }
      playBeep(620, 0.05);
    });
  }
}

/* ==========================================================================
   4. 1-CLICK CLIPBOARD COPY FOR BRAND COLORS
   ========================================================================== */
function initColorCopy() {
  const copyBtns = document.querySelectorAll('.copy-val-btn');
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');

  copyBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-copy');
      if (!val) return;

      navigator.clipboard.writeText(val).then(() => {
        showToast(`Copiado: ${val}`);
        playBeep(880, 0.06);
      }).catch(() => {
        showToast(`Valor: ${val}`);
      });
    });
  });

  function showToast(text) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = text;
    toast.classList.add('show');
    clearTimeout(toast.timeoutId);
    toast.timeoutId = setTimeout(() => {
      toast.classList.remove('show');
    }, 2200);
  }
}

/* ==========================================================================
   5. TYPE TESTER INTERACTIVE PLAYGROUND
   ========================================================================== */
function initTypeTester() {
  const input = document.getElementById('type-tester-input');
  const previewNeue = document.getElementById('preview-neue-jothama');
  const previewQubic = document.getElementById('preview-qubic-grid');

  if (input && previewNeue && previewQubic) {
    input.addEventListener('input', () => {
      const text = input.value.trim() || 'HAGAMOS ALGO DIGNO DE RECORDAR';
      previewNeue.textContent = text;
      previewQubic.textContent = text;
    });
  }
}

/* ==========================================================================
   6. BRAND MANUAL LIGHTBOX (NATIVE <dialog> MODAL)
   ========================================================================== */
function initManualLightbox() {
  const dialog = document.getElementById('page-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxPageNum = document.getElementById('lightbox-page-number');
  const pageCards = document.querySelectorAll('.manual-page-card');

  if (!dialog || !lightboxImg) return;

  pageCards.forEach((card) => {
    card.addEventListener('click', () => {
      const pageNum = card.getAttribute('data-page');
      const title = card.getAttribute('data-title') || 'Manual de Marca ASTRA';
      const formattedNum = String(pageNum).padStart(2, '0');

      lightboxImg.src = `assets/manual/page-${formattedNum}.png`;
      if (lightboxTitle) lightboxTitle.textContent = `Página ${formattedNum}: ${title}`;
      if (lightboxPageNum) lightboxPageNum.textContent = `Manual de Marca Oficial ASTRA — Sección ${title}`;

      dialog.showModal();
      playBeep(520, 0.06);
    });
  });

  // Light dismiss on backdrop click
  dialog.addEventListener('click', (e) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog = (
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      dialog.close();
    }
  });
}

/* ==========================================================================
   7. BRIEF & ESTIMATE SIMULATOR ("DISEÑA TU ÓRBITA")
   ========================================================================== */
function initBriefSimulator() {
  const scopeBtns = document.querySelectorAll('#brief-scope-group .brief-option');
  const stageBtns = document.querySelectorAll('#brief-stage-group .brief-stage');
  const addonBoxes = document.querySelectorAll('#brief-addons-group .addon-checkbox');
  const totalDisplay = document.getElementById('brief-total-estimate');
  const sendBriefBtn = document.getElementById('send-brief-btn');

  let currentBase = 1800;
  let currentMultiplier = 1.0;
  let currentScopeLabel = 'Brand Identity 360';
  let currentStageLabel = 'Startup / Lanzamiento';

  function recalculate() {
    let addonsTotal = 0;
    addonBoxes.forEach((cb) => {
      if (cb.checked) {
        addonsTotal += parseFloat(cb.getAttribute('data-add') || 0);
      }
    });

    const total = Math.round((currentBase * currentMultiplier) + addonsTotal);
    if (totalDisplay) {
      totalDisplay.textContent = `$${total.toLocaleString('en-US')} USD`;
    }
  }

  scopeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      scopeBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentBase = parseFloat(btn.getAttribute('data-base') || 1800);
      currentScopeLabel = btn.querySelector('span')?.textContent || '';
      recalculate();
      playBeep(380, 0.05);
    });
  });

  stageBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      stageBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentMultiplier = parseFloat(btn.getAttribute('data-multiplier') || 1.0);
      currentStageLabel = btn.querySelector('span')?.textContent || '';
      recalculate();
      playBeep(420, 0.05);
    });
  });

  addonBoxes.forEach((cb) => {
    cb.addEventListener('change', () => {
      recalculate();
      playBeep(cb.checked ? 650 : 320, 0.04);
    });
  });

  if (sendBriefBtn) {
    sendBriefBtn.addEventListener('click', () => {
      const serviceSelect = document.getElementById('contact-service');
      const messageTextarea = document.getElementById('contact-message');
      const contactSection = document.getElementById('contacto');

      const selectedAddons = [];
      addonBoxes.forEach((cb) => {
        if (cb.checked) {
          selectedAddons.push(cb.getAttribute('data-label'));
        }
      });

      const addonsText = selectedAddons.length > 0 
        ? `\nMódulos adicionales seleccionados: ${selectedAddons.join(', ')}.` 
        : '';

      if (messageTextarea) {
        messageTextarea.value = `Hola ASTRA,\n\nHe configurado un brief inicial con los siguientes parámetros:\n- Objetivo: ${currentScopeLabel}\n- Etapa: ${currentStageLabel}${addonsText}\n- Presupuesto estimado referencial: ${totalDisplay.textContent}\n\nMe gustaría agendar una llamada exploratoria para profundizar en los detalles del proyecto.`;
      }

      if (serviceSelect) {
        if (currentScopeLabel.includes('Brand')) serviceSelect.value = 'brand-identity';
        else if (currentScopeLabel.includes('Web')) serviceSelect.value = 'futuristic-web';
        else serviceSelect.value = 'full-universe';
      }

      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }

      playBeep(780, 0.08);
    });
  }
}

/* ==========================================================================
   8. CONTACT FORM WITH ACCESSIBLE <dialog> MODAL
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const successDialog = document.getElementById('success-dialog');

  if (!form || !successDialog) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Modern feedback: Open native modal
    successDialog.showModal();
    playBeep(880, 0.12);
    form.reset();
  });
}

/* ==========================================================================
   9. SUBTLE WEB AUDIO SYNTHESIZER (MICRO-SFX)
   ========================================================================== */
let audioCtx = null;
let soundEnabled = false;

function initAudioSynth() {
  const soundToggle = document.getElementById('sound-toggle');
  const soundStatus = soundToggle ? soundToggle.querySelector('.sound-status') : null;

  if (soundToggle) {
    soundToggle.addEventListener('click', () => {
      if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          audioCtx = new AudioContextClass();
        }
      }

      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      soundEnabled = !soundEnabled;
      if (soundStatus) {
        soundStatus.textContent = soundEnabled ? 'SFX: ON' : 'SFX: OFF';
      }
      soundToggle.classList.toggle('border-volt', soundEnabled);
      soundToggle.classList.toggle('text-volt', soundEnabled);

      if (soundEnabled) {
        playBeep(720, 0.08);
      }
    });
  }
}

function playBeep(freq = 440, duration = 0.06) {
  if (!soundEnabled || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (err) {
    // Audio context silent fallback
  }
}
