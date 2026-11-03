/* ==========================================================================
   THE DENTAL DEN BY DR. PRAKRUTI SHAH — V3 INTERACTIVE ENGINE (main.js)
   ========================================================================== */

(function () {
  'use strict';

  document.documentElement.setAttribute('data-theme', 'light');
  document.documentElement.classList.add('js-ready');

  /* ------------------------------------------------------------------------
     1. UPGRADED MOBILE DRAWER + EXPANDABLE TREATMENTS ACCORDION (B5)
     ------------------------------------------------------------------------ */
  function initMobileDrawer() {
    const openBtn = document.getElementById('mobileMenuBtn');
    const drawer = document.getElementById('mobileDrawer');
    if (!drawer) return;

    // Upgrade drawer contents to V3 clean white layout with expandable Treatments accordion
    const panel = drawer.querySelector('.mobile-drawer-panel');
    if (panel && !panel.dataset.v3Upgraded) {
      panel.dataset.v3Upgraded = 'true';
      panel.innerHTML = `
        <div>
          <div class="drawer-top">
            <a href="index.html" class="brand-logo" aria-label="The Dental Den Home">
              <img src="assets/logo-nav-light.webp" alt="The Dental Den Logo" style="height:40px;width:auto;">
            </a>
            <button class="mobile-menu-btn" id="mobileCloseBtn" aria-label="Close navigation menu" style="display:inline-flex;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
          </div>

          <div class="drawer-status-pill">
            <span class="status-dot"></span>
            <span>Open Today · 11:00 AM – 9:00 PM · Prabhadevi</span>
          </div>

          <nav class="mobile-nav-list" aria-label="Mobile Navigation">
            <a href="index.html"><span>Home</span><span>→</span></a>
            <a href="about.html"><span>About Dr. Prakruti Shah</span><span>→</span></a>

            <button type="button" class="drawer-acc-toggle" aria-expanded="true" id="drawerTreatBtn">
              <span>Specialist Treatments (20+)</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="drawer-acc-panel open" id="drawerTreatPanel">
              <a href="dental-implants.html">01 · Dental Implants & Full-Mouth Rehab</a>
              <a href="clear-aligners.html">02 · Invisalign & Clear Aligners</a>
              <a href="cosmetic-dentistry.html">03 · Cosmetic Veneers & Smile Design</a>
              <a href="root-canal-treatment.html">04 · Painless Single-Sitting Root Canal</a>
              <a href="general-dentistry.html">05 · General, Preventive & Kids Dentistry</a>
              <a href="hair-prp.html">06 · Hair PRP Regrowth Therapy</a>
              <a href="treatments.html" style="color:var(--teal);font-weight:700;">View All 20 Treatments →</a>
            </div>

            <a href="hair-prp.html"><span>Hair PRP Therapy</span><span>→</span></a>
            <a href="reviews.html"><span>Patient Reviews (5.0 ★)</span><span>→</span></a>
            <a href="contact.html"><span>Location & Contact</span><span>→</span></a>
          </nav>
        </div>

        <div style="padding-top:16px;border-top:1px solid var(--line);">
          <div class="drawer-quick-grid">
            <a href="tel:+919372951399" class="drawer-quick-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Call Clinic</span>
            </a>
            <a href="https://wa.me/919372951399?text=Hi%20Dr.%20Prakruti%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20The%20Dental%20Den." target="_blank" rel="noopener" class="drawer-quick-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              <span>WhatsApp</span>
            </a>
            <a href="https://maps.app.goo.gl/qgpQpd8vG98as5N77" target="_blank" rel="noopener" class="drawer-quick-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Google Map</span>
            </a>
          </div>
          <button type="button" class="btn btn-primary" data-open-booking="true" style="width:100%;justify-content:space-between;">
            <span>Book Consultation</span>
          </button>
        </div>
      `;
    }

    const closeBtn = document.getElementById('mobileCloseBtn');
    const accBtn = document.getElementById('drawerTreatBtn');
    const accPanel = document.getElementById('drawerTreatPanel');

    function closeDrawer() {
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    if (openBtn) {
      openBtn.addEventListener('click', () => {
        drawer.classList.add('open');
        drawer.setAttribute('aria-hidden', 'false');
        openBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      });
    }

    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) closeDrawer();
    });

    if (accBtn && accPanel) {
      accBtn.addEventListener('click', () => {
        const expanded = accBtn.getAttribute('aria-expanded') === 'true';
        accBtn.setAttribute('aria-expanded', String(!expanded));
        accPanel.classList.toggle('open', !expanded);
      });
    }

    drawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeDrawer);
    });

    // Also ensure all header "Reviews" links point to reviews.html (B6)
    document.querySelectorAll('a.nav-link').forEach((a) => {
      if (a.textContent.trim().toLowerCase().includes('review')) {
        a.setAttribute('href', 'reviews.html');
      }
    });
  }

  /* ------------------------------------------------------------------------
     2. BEFORE & AFTER SLIDER WITH DYNAMIC VANISHING BADGES (C2)
     ------------------------------------------------------------------------ */
  const smileCases = [
    {
      badge: 'Case 01 · In-Office Laser Teeth Whitening',
      title: 'Single-Sitting VITA Shade Brightening (C4 → B1)',
      desc: 'Years of coffee and tea chromogen staining lifted by 6 VITA shades in a single 45-minute chairside photo-activated whitening session with zero post-procedure sensitivity.',
      duration: '45 Minutes (1 Visit)',
      longevity: '18–24 Months',
      before: 'assets/ba-whitening-before-v2.webp',
      after: 'assets/ba-whitening-after-v2.webp',
      beforeLabel: 'Before',
      afterLabel: 'After'
    },
    {
      badge: 'Case 02 · Porcelain Veneers & Crown Bridge',
      title: 'Full Anterior Smile Design & Discolored Tooth Restoration',
      desc: 'Severe yellow-brown enamel staining and a darkened non-vital central incisor transformed with digital smile design and hand-layered E.max porcelain veneers—preserving natural lip symmetry.',
      duration: '2 Visits (7 Days)',
      longevity: '12–15+ Years',
      before: 'assets/ba-veneers-before-v2.webp',
      after: 'assets/ba-veneers-after-v2.webp',
      beforeLabel: 'Before',
      afterLabel: 'After'
    },
    {
      badge: 'Case 03 · Clear Aligner Therapy',
      title: 'Adult Crowding & Arch Alignment Without Metal Braces',
      desc: 'Noticeable upper and lower anterior crowding, rotated lateral incisors, and uneven bite corrected using custom 3D-printed invisible aligner trays with zero brackets or dietary restrictions.',
      duration: '7 Months',
      longevity: 'Permanent w/ Retainer',
      before: 'assets/ba-aligners-before-v2.webp',
      after: 'assets/ba-aligners-after-v2.webp',
      beforeLabel: 'Before',
      afterLabel: 'After'
    },
    {
      badge: 'Case 04 · Single-Tooth Dental Implant & Crown',
      title: 'Missing Tooth Restored with Precision Dental Implant',
      desc: 'Upper tooth gap seamlessly replaced with a permanent implant and natural shade-matched zirconia crown, restoring full chewing strength and smile symmetry.',
      duration: '3 Visits',
      longevity: '20+ Years / Lifetime',
      before: 'assets/ba-implants-before-v2.webp',
      after: 'assets/ba-implants-after-v2.webp',
      beforeLabel: 'Before',
      afterLabel: 'After'
    }
  ];

  const prpCases = [
    {
      badge: 'PRP Case 01 · Female Parting & Hairline Regrowth',
      title: 'Post-Stress Center Parting & Hairline Thinning',
      desc: 'Autologous double-spin Platelet-Rich Plasma (PRP) growth factor micro-activation awakened dormant follicles along the widened center parting and frontal hairline—visibly reducing scalp show-through.',
      duration: '4 Monthly Sessions',
      longevity: 'Natural Own Hair Growth',
      before: 'assets/ba-prp-1-before-v2.webp',
      after: 'assets/ba-prp-1-after-v2.webp',
      beforeLabel: 'Before',
      afterLabel: 'After'
    },
    {
      badge: 'PRP Case 02 · Crown Vertex Density Restoration',
      title: 'Early-Stage Crown Thinning & Scalp Visibility',
      desc: 'Concentrated autologous platelet growth factors stimulated follicular stem cells across the vertex whorl, significantly thickening hair shaft diameter and scalp coverage.',
      duration: '4–6 Sessions',
      longevity: 'Zero Surgery · Zero Downtime',
      before: 'assets/ba-prp-2-before-v2.webp',
      after: 'assets/ba-prp-2-after-v2.webp',
      beforeLabel: 'Before',
      afterLabel: 'After'
    },
    {
      badge: 'PRP Case 03 · Frontal Mid-Scalp Strengthening',
      title: 'Diffuse Frontal Hair Fall & Follicle Miniaturisation',
      desc: 'Targeted PRP therapy arrested active hair shedding on the comb within 6 weeks and restored noticeably thicker, darker terminal hair strands across the frontal scalp.',
      duration: '4 Sessions',
      longevity: '100% Own Blood Platelets',
      before: 'assets/ba-prp-3-before-v2.webp',
      after: 'assets/ba-prp-3-after-v2.webp',
      beforeLabel: 'Before',
      afterLabel: 'After'
    }
  ];

  function bindInteractiveSlider(viewport) {
    if (!viewport || viewport.dataset.bound) return;
    viewport.dataset.bound = 'true';

    const beforeTag = viewport.querySelector('.ba-tag.before');
    const afterTag = viewport.querySelector('.ba-tag.after');

    // Progressive shading layers: the side that is being closed darkens in
    // proportion to how far the handle has travelled from the centre.
    const beforeLayer = viewport.querySelector('.ba-before-clip, .ba-before-wrap');
    let shadeBefore = viewport.querySelector('.ba-shade-before');
    let shadeAfter = viewport.querySelector('.ba-shade-after');
    if (!shadeBefore && beforeLayer) {
      shadeBefore = document.createElement('div');
      shadeBefore.className = 'ba-shade ba-shade-before';
      beforeLayer.appendChild(shadeBefore);
    }
    if (!shadeAfter) {
      shadeAfter = document.createElement('div');
      shadeAfter.className = 'ba-shade ba-shade-after';
      viewport.insertBefore(shadeAfter, beforeLayer ? beforeLayer.nextSibling : viewport.firstChild);
    }

    function setSliderPos(pct) {
      const clamped = Math.max(0, Math.min(100, pct));
      viewport.style.setProperty('--pos', clamped + '%');
      viewport.setAttribute('aria-valuenow', Math.round(clamped));

      // 0 at the centre -> 1 at the edge, on each side
      const closingBefore = Math.max(0, (50 - clamped) / 50);
      const closingAfter = Math.max(0, (clamped - 50) / 50);

      if (shadeBefore) shadeBefore.style.opacity = (closingBefore * 0.7).toFixed(3);
      if (shadeAfter) shadeAfter.style.opacity = (closingAfter * 0.7).toFixed(3);

      // Labels start fading immediately as you slide away from 50% and glide smoothly toward their own edge without getting clipped mid-word
      if (beforeTag) {
        const t = Math.min(1, Math.pow(closingBefore * 1.15, 0.9));
        beforeTag.style.opacity = Math.max(0, 1 - t).toFixed(3);
        beforeTag.style.transform = 'translateX(' + (-t * 22).toFixed(1) + 'px)';
      }
      if (afterTag) {
        const t = Math.min(1, Math.pow(closingAfter * 1.15, 0.9));
        afterTag.style.opacity = Math.max(0, 1 - t).toFixed(3);
        afterTag.style.transform = 'translateX(' + (t * 22).toFixed(1) + 'px)';
      }    }

    function updateFromClientX(clientX) {
      const rect = viewport.getBoundingClientRect();
      if (!rect.width) return;
      const pct = ((clientX - rect.left) / rect.width) * 100;
      setSliderPos(pct);
    }

    let dragging = false;

    viewport.addEventListener('pointerdown', (e) => {
      dragging = true;
      if (viewport.setPointerCapture) {
        try { viewport.setPointerCapture(e.pointerId); } catch (_) {}
      }
      updateFromClientX(e.clientX);
    });

    viewport.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      updateFromClientX(e.clientX);
    });

    const stopDrag = () => { dragging = false; };
    viewport.addEventListener('pointerup', stopDrag);
    viewport.addEventListener('pointercancel', stopDrag);

    viewport.addEventListener('keydown', (e) => {
      const current = parseFloat(viewport.style.getPropertyValue('--pos')) || 50;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setSliderPos(current - 5);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setSliderPos(current + 5);
      }
    });

    setSliderPos(50);
    viewport._setSliderPos = setSliderPos;
  }

  function initBeforeAfterStudios() {
    document.querySelectorAll('.ba-viewport, .ba-stage').forEach(bindInteractiveSlider);

    // Subpage data-attribute tabs (data-ba-before / data-ba-after) -> upgrade to Option B Thumbnail Strip
    document.querySelectorAll('.ba-tabs').forEach((tabsEl) => {
      const btns = tabsEl.querySelectorAll('.ba-tab[data-ba-after]');
      if (!btns.length) return;
      tabsEl.classList.remove('ba-tabs');
      tabsEl.classList.add('ba-thumbs');
      btns.forEach((btn) => {
        btn.classList.add('ba-thumb-btn');
        const rawLabel = btn.textContent.replace(/^(Case\s*)?0?\d+\s*[·•-]\s*/i, '').trim();
        btn.innerHTML = `<img src="${btn.dataset.baAfter}" alt="${rawLabel}" loading="lazy"><span>${rawLabel}</span>`;
      });
      const section = tabsEl.closest('section');
      const stageWrap = section ? section.querySelector('.ba-stage-wrap') : null;
      const stage = stageWrap ? stageWrap.querySelector('.ba-stage') : null;
      if (stageWrap && stage) {
        stage.insertAdjacentElement('afterend', tabsEl);
      }
    });

    document.querySelectorAll('.ba-tab[data-ba-before]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const parent = btn.closest('section') || document;
        const stage = parent.querySelector('.ba-stage, .ba-viewport');
        const beforeImg = parent.querySelector('#baBeforeImg, .ba-before-wrap img, .ba-img-before');
        const afterImg = parent.querySelector('#baAfterImg, .ba-after, .ba-img-after');
        const beforeTag = parent.querySelector('#baBeforeTag, .ba-tag.before');
        const afterTag = parent.querySelector('#baAfterTag, .ba-tag.after');
        const titleEl = parent.querySelector('#baCaseTitle');
        const noteEl = parent.querySelector('#baCaseNote');

        btn.parentElement.querySelectorAll('.ba-tab').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        if (beforeImg && btn.dataset.baBefore) beforeImg.src = btn.dataset.baBefore;
        if (afterImg && btn.dataset.baAfter) afterImg.src = btn.dataset.baAfter;
        if (beforeTag && btn.dataset.baBtag) beforeTag.textContent = btn.dataset.baBtag;
        if (afterTag && btn.dataset.baAtag) afterTag.textContent = btn.dataset.baAtag;
        if (titleEl && btn.dataset.baTitle) titleEl.textContent = btn.dataset.baTitle;
        if (noteEl && btn.dataset.baNote) noteEl.textContent = btn.dataset.baNote;
        if (stage && stage._setSliderPos) stage._setSliderPos(50);
      });
    });

    // Home / Treatments Smile Studio Tabs
    const mainViewport = document.getElementById('baViewport');
    const tabsWrap = document.getElementById('baCaseTabs');
    if (mainViewport && tabsWrap) {
      const isPrpPage = window.location.pathname.includes('hair-prp');
      const dataset = isPrpPage ? prpCases : smileCases;

      const beforeImg = document.getElementById('baBeforeImg');
      const afterImg = document.getElementById('baAfterImg');
      const beforeTag = document.getElementById('baBeforeTag') || mainViewport.querySelector('.ba-tag.before');
      const afterTag = document.getElementById('baAfterTag') || mainViewport.querySelector('.ba-tag.after');
      const badgeEl = document.getElementById('baCaseBadge');
      const titleEl = document.getElementById('baCaseTitle');
      const descEl = document.getElementById('baCaseDesc');
      const durEl = document.getElementById('baCaseDuration');
      const longEl = document.getElementById('baCaseLongevity');

      tabsWrap.querySelectorAll('.ba-tab').forEach((btn, idx) => {
        btn.addEventListener('click', () => {
          const item = dataset[idx] || dataset[0];
          tabsWrap.querySelectorAll('.ba-tab').forEach((b) => {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
          });
          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');

          if (beforeImg) beforeImg.src = item.before;
          if (afterImg) afterImg.src = item.after;
          if (beforeTag) beforeTag.textContent = item.beforeLabel;
          if (afterTag) afterTag.textContent = item.afterLabel;
          if (badgeEl) badgeEl.textContent = item.badge;
          if (titleEl) titleEl.textContent = item.title;
          if (descEl) descEl.textContent = item.desc;
          if (durEl) durEl.textContent = item.duration;
          if (longEl) longEl.textContent = item.longevity;

          if (mainViewport._setSliderPos) mainViewport._setSliderPos(50);
        });
      });
    }
  }

  /* ------------------------------------------------------------------------
     3. 60-SECOND SMILE FINDER (A8 & C7)
     ------------------------------------------------------------------------ */
  const finderData = {
    missing: {
      tag: 'Recommended · Implantology & Prosthodontics',
      title: '3D-Guided Titanium Dental Implants & Zirconia Crowns',
      desc: 'Replace missing or failing teeth permanently with root-form titanium implants and natural-looking Zirconia ceramic crowns—restoring 100% chewing strength without grinding adjacent healthy teeth.',
      time: '2–3 Visits',
      longevity: '20+ Yrs / Lifetime',
      comfort: 'Painless 3D Guided',
      link: 'dental-implants.html',
      wa: 'Hi Dr. Prakruti, I have a missing/damaged tooth and would like to consult about Dental Implants at The Dental Den.',
      steps: [
        { num: '01', title: '3D CBCT Bone Scan & Digital Planning', desc: 'Precision mapping of jawbone density and nerve pathways for zero-guesswork placement.' },
        { num: '02', title: 'Painless Keyhole Implant Placement', desc: 'Gentle 30-minute placement under computer-guided local anaesthesia with zero stitches.' },
        { num: '03', title: 'Custom Monolithic Zirconia Crown', desc: 'Hand-finished ceramic tooth shade-matched to your natural enamel for effortless chewing.' }
      ],
      checks: [
        'One or more missing teeth affecting your bite or smile confidence',
        'Loose, uncomfortable removable dentures or failing old bridges',
        'Difficulty chewing firm foods comfortably on both sides'
      ]
    },
    crooked: {
      tag: 'Recommended · Invisible Orthodontics',
      title: 'Invisalign & Custom 3D Clear Aligners',
      desc: 'Straighten crowded, gapped, or crooked teeth discreetly using removable medical-grade transparent aligners. Eat normally, brush effortlessly, and preview your final smile digitally.',
      time: '6–12 Months',
      longevity: 'Permanent w/ Retainer',
      comfort: 'Zero Metal or Wires',
      link: 'clear-aligners.html',
      wa: 'Hi Dr. Prakruti, I am interested in Clear Aligners / Invisalign for teeth straightening at The Dental Den.',
      steps: [
        { num: '01', title: '3D Intraoral Digital Smile Scan', desc: 'Fast, gag-free digital impression that previews your future straight smile on screen.' },
        { num: '02', title: 'Custom Clear Aligner Trays', desc: 'Wear featherlight transparent trays 20–22 hrs/day; remove easily for meals & photos.' },
        { num: '03', title: 'Refinement & Invisible Retainers', desc: 'Monthly progress checks with Dr. Prakruti followed by invisible Vivera-style retainers.' }
      ],
      checks: [
        'Crowded, overlapping, or protruding front teeth',
        'Visible gaps (diastema) or shifting bite after past braces',
        'Wanting discreet adult/teen orthodontics without metal brackets'
      ]
    },
    stained: {
      tag: 'Recommended · Aesthetic & Cosmetic Dentistry',
      title: 'Porcelain Veneers, Laminates & Laser Teeth Whitening',
      desc: 'Transform yellow, chipped, or uneven front teeth with ultra-thin E.max porcelain veneers or single-sitting in-office laser whitening for a bright, natural smile.',
      time: '1–2 Visits',
      longevity: '12–15+ Years',
      comfort: 'Enamel-Safe Protocol',
      link: 'cosmetic-dentistry.html',
      wa: 'Hi Dr. Prakruti, I would like to book a Smile Design / Teeth Whitening consultation at The Dental Den.',
      steps: [
        { num: '01', title: 'Facial Proportion & VITA Shade Analysis', desc: 'Selecting the ideal tooth shape and natural brightness to complement your face and lips.' },
        { num: '02', title: 'Mock-Up Trial or Laser Activation', desc: 'Test-drive your new smile design or complete a 45-minute photo-activated whitening session.' },
        { num: '03', title: 'Hand-Layered E.max Ceramic Bonding', desc: 'Micro-precision bonding of ultra-thin porcelain laminates with natural translucency.' }
      ],
      checks: [
        'Deep coffee, tea, or intrinsic yellow-brown tooth discoloration',
        'Chipped, worn, asymmetrical, or small front teeth',
        'Looking for a camera-ready Hollywood or bridal smile makeover'
      ]
    },
    pain: {
      tag: 'Recommended · Microscopic Endodontics',
      title: 'Painless Single-Sitting Root Canal Treatment (RCT)',
      desc: 'Stop acute toothache, hot/cold sensitivity, or deep decay in a single comfortable appointment using rotary endodontics and digital apex locators, followed by a protective Zirconia crown.',
      time: 'Single Sitting (45m)',
      longevity: '15+ Years w/ Crown',
      comfort: '100% Numb & Painless',
      link: 'root-canal-treatment.html',
      wa: 'Hi Dr. Prakruti, I have tooth pain/sensitivity and need an urgent Root Canal consultation at The Dental Den.',
      steps: [
        { num: '01', title: 'Low-Radiation Digital X-Ray & Numbing', desc: 'Instant RVG radiograph and topical numbing gel before painless local anaesthesia.' },
        { num: '02', title: 'Rotary Canal Cleaning & Laser Disinfection', desc: 'Quiet motorised NiTi files and electronic apex locators clear infection in one sitting.' },
        { num: '03', title: '3D Core Build-Up & Zirconia Cap', desc: 'Sealing and reinforcing the saved natural tooth with a fracture-proof ceramic crown.' }
      ],
      checks: [
        'Sharp throbbing toothache, night pain, or lingering hot/cold sensitivity',
        'Deep cavity, cracked tooth, or gum swelling near a molar',
        'Wanting to save your natural tooth instead of extracting it'
      ]
    },
    checkup: {
      tag: 'Recommended · Preventive & Family Care',
      title: 'Ultrasonic Scaling, Polishing, Kids Care & Wisdom Teeth',
      desc: 'Maintain healthy gums and cavity-free teeth for the whole family with gentle ultrasonic plaque removal, tooth-coloured composite fillings, and friendly paediatric dental visits.',
      time: '30–45 Minutes',
      longevity: '6-Month Protection',
      comfort: 'Gentle Airflow Polish',
      link: 'general-dentistry.html',
      wa: 'Hi Dr. Prakruti, I would like to schedule a routine Dental Checkup & Cleaning at The Dental Den.',
      steps: [
        { num: '01', title: 'Full-Mouth Intraoral & Gum Assessment', desc: 'Checking every tooth, gum pocket, and existing filling with clear explanation.' },
        { num: '02', title: 'Ultrasonic Tartar Removal & Stain Polish', desc: 'Gentle vibration waves lift stubborn tartar and surface stains without scraping enamel.' },
        { num: '03', title: 'Fluoride Shield / Tooth-Coloured Fillings', desc: 'Remineralizing enamel protection and invisible composite restoration if needed.' }
      ],
      checks: [
        'Bleeding gums while brushing, tartar buildup, or morning bad breath',
        'Routine 6-month family & children preventive dental checkup',
        'Impacted wisdom tooth discomfort requiring specialist evaluation'
      ]
    },
    hair: {
      tag: 'Recommended · Regenerative Hair Therapy',
      title: 'Autologous Hair PRP Regrowth Therapy',
      desc: 'Combat hair thinning, receding temples, and excess hair fall on your comb naturally using growth factors concentrated from your own blood platelets—with zero surgery and zero downtime.',
      time: '45 Mins / Session',
      longevity: '3–4 Monthly Sessions',
      comfort: 'Topical Numbing Gel',
      link: 'hair-prp.html',
      wa: 'Hi Dr. Prakruti, I would like to book a consultation for Hair PRP Regrowth Therapy at The Dental Den.',
      steps: [
        { num: '01', title: 'Scalp Follicle Evaluation & Blood Draw', desc: 'Small sample of your own blood collected in a sterile medical tube.' },
        { num: '02', title: 'Double-Spin Centrifuge Concentration', desc: 'Separating pure Platelet-Rich Plasma packed with 5x natural hair growth factors.' },
        { num: '03', title: 'Painless Micro-Activation on Scalp', desc: 'After numbing cream, growth factors are gently delivered to dormant hair roots.' }
      ],
      checks: [
        'Excessive daily hair fall on your pillow, shower drain, or comb',
        'Thinning crown, widening hair part, or receding hairline temples',
        'Seeking a 100% natural, non-surgical regrowth solution with zero downtime'
      ]
    }
  };

  /* Custom brand illustrations for the Smile Finder (one unique scene per concern).
     Flat duotone style: navy canvas, teal/cyan line-art, white highlights. */
  const TOOTH = 'M-34,-40C-46,-40-52,-28-50,-12C-48,6-40,18-36,40C-34,52-26,56-22,44L-14,18C-12,12-6,10 0,10C6,10 12,12 14,18L22,44C26,56 34,52 36,40C40,18 48,6 50,-12C52,-28 46,-40 34,-40C22,-40 14,-34 0,-34C-14,-34-22,-40-34,-40Z';
  const tooth = (x, y, s, fill, stroke, extra) =>
    `<path d="${TOOTH}" transform="translate(${x} ${y}) scale(${s})" fill="${fill}" stroke="${stroke}" stroke-width="${2.4 / s}" stroke-linejoin="round" ${extra || ''}/>`;

  const illusFrame = (id, inner) => `
    <svg viewBox="0 0 480 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="fbg-${id}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#141A47"/><stop offset="1" stop-color="#0B0F2B"/>
        </linearGradient>
        <radialGradient id="fglow-${id}" cx="0.5" cy="0.45" r="0.5">
          <stop offset="0" stop-color="#1D8A8E" stop-opacity="0.55"/><stop offset="1" stop-color="#1D8A8E" stop-opacity="0"/>
        </radialGradient>
        <pattern id="fgrid-${id}" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="#FFFFFF" stroke-opacity="0.05" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="480" height="200" fill="url(#fbg-${id})"/>
      <rect width="480" height="200" fill="url(#fgrid-${id})"/>
      <ellipse cx="240" cy="92" rx="200" ry="110" fill="url(#fglow-${id})"/>
      ${inner}
    </svg>`;

  const finderIllustrations = {
    missing: illusFrame('missing', `
      <g class="fi-float">
        ${tooth(240, 62, 0.95, '#FFFFFF', '#6CE5E8')}
        <rect x="226" y="100" width="28" height="12" rx="3" fill="#9AA6C8"/>
        <path d="M228 114h24l-3 64h-18z" fill="#6E7BA3"/>
        ${[122, 134, 146, 158, 170].map((y) => `<path d="M224 ${y}l32 -5" stroke="#C7D0EA" stroke-width="3" stroke-linecap="round"/>`).join('')}
      </g>
      <path d="M150 112h50M280 112h50" stroke="#6CE5E8" stroke-width="1.5" stroke-dasharray="4 5"/>
      <circle cx="150" cy="112" r="4" fill="#6CE5E8"/><circle cx="330" cy="112" r="4" fill="#6CE5E8"/>
      <text x="96" y="104" fill="#6CE5E8" font-family="JetBrains Mono, monospace" font-size="10">CROWN</text>
      <text x="340" y="104" fill="#6CE5E8" font-family="JetBrains Mono, monospace" font-size="10">IMPLANT</text>`),

    crooked: illusFrame('crooked', `
      <g>
        ${tooth(138, 98, 0.5, '#FFFFFF', '#C7D0EA')}
        <g transform="rotate(-12 190 96)">${tooth(190, 96, 0.55, '#FFFFFF', '#C7D0EA')}</g>
        ${tooth(240, 90, 0.62, '#FFFFFF', '#C7D0EA')}
        <g transform="rotate(10 290 98)">${tooth(290, 98, 0.55, '#FFFFFF', '#C7D0EA')}</g>
        ${tooth(342, 98, 0.5, '#FFFFFF', '#C7D0EA')}
      </g>
      <path class="fi-float" d="M106 74Q240 44 374 74L378 128Q240 150 102 128Z" fill="#6CE5E8" fill-opacity="0.16" stroke="#6CE5E8" stroke-width="2"/>
      <path d="M170 166h-26m0 0l7-6m-7 6l7 6M310 166h26m0 0l-7-6m7 6l-7 6" stroke="#6CE5E8" stroke-width="2" stroke-linecap="round" fill="none"/>
      <text x="240" y="170" text-anchor="middle" fill="#6CE5E8" font-family="JetBrains Mono, monospace" font-size="10">CLEAR ALIGNER TRAY</text>`),

    stained: illusFrame('stained', `
      <defs><linearGradient id="fshade" x1="0" x2="1"><stop offset="0" stop-color="#D9B46A"/><stop offset="1" stop-color="#FFFFFF"/></linearGradient></defs>
      <g class="fi-float">${tooth(240, 84, 0.95, '#FFFFFF', '#6CE5E8')}</g>
      <path class="fi-twinkle" d="M318 44l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="#6CE5E8"/>
      <path class="fi-twinkle fi-d2" d="M166 60l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="#FFFFFF"/>
      <path class="fi-twinkle fi-d3" d="M330 112l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#FFFFFF"/>
      <rect x="150" y="158" width="180" height="12" rx="6" fill="url(#fshade)"/>
      <circle cx="318" cy="164" r="9" fill="#FFFFFF" stroke="#6CE5E8" stroke-width="2.5"/>
      <text x="150" y="150" fill="#C7D0EA" font-family="JetBrains Mono, monospace" font-size="9">C4</text>
      <text x="330" y="150" text-anchor="end" fill="#6CE5E8" font-family="JetBrains Mono, monospace" font-size="9">B1</text>`),

    pain: illusFrame('pain', `
      <g class="fi-float">
        ${tooth(240, 88, 1.15, '#FFFFFF', '#6CE5E8')}
        <path d="M222 70c0 18-2 30-8 52M258 70c0 18 2 30 8 52" stroke="#1D8A8E" stroke-width="4" stroke-linecap="round" fill="none"/>
        <ellipse cx="240" cy="66" rx="20" ry="9" fill="#1D8A8E" fill-opacity="0.25" stroke="#1D8A8E" stroke-width="2"/>
      </g>
      <g transform="translate(330 46)">
        <path d="M18 0l18 7v12c0 12-8 20-18 25C8 39 0 31 0 19V7z" fill="#16A34A"/>
        <path d="M10 21l6 6 11-12" stroke="#FFFFFF" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <path class="fi-twinkle" d="M150 70l12 -8M146 90h14M150 110l12 8" stroke="#6CE5E8" stroke-width="2.5" stroke-linecap="round"/>`),

    checkup: illusFrame('checkup', `
      <g class="fi-float">${tooth(220, 92, 0.9, '#FFFFFF', '#6CE5E8')}</g>
      <circle cx="226" cy="76" r="20" fill="#16A34A"/>
      <path d="M216 76l7 7 13-14" stroke="#FFFFFF" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <g transform="rotate(-35 330 110)">
        <rect x="326" y="60" width="8" height="90" rx="4" fill="#C7D0EA"/>
        <circle cx="330" cy="52" r="16" fill="#0E1233" stroke="#C7D0EA" stroke-width="4"/>
        <circle cx="325" cy="47" r="5" fill="#6CE5E8" fill-opacity="0.6"/>
      </g>
      <g transform="translate(110 54)">
        <rect width="56" height="56" rx="10" fill="#FFFFFF" fill-opacity="0.08" stroke="#6CE5E8" stroke-width="2"/>
        <path d="M0 18h56" stroke="#6CE5E8" stroke-width="2"/>
        <text x="28" y="44" text-anchor="middle" fill="#FFFFFF" font-family="JetBrains Mono, monospace" font-size="16" font-weight="700">6M</text>
      </g>`),

    hair: illusFrame('hair', `
      <path d="M90 150Q240 128 390 150" stroke="#C7D0EA" stroke-width="2.5" fill="none"/>
      <g class="fi-grow">
        ${[150, 185, 220, 260, 295, 330].map((x, i) => {
          const h = [52, 70, 86, 84, 68, 50][i];
          return `<path d="M${x} ${144 - (i === 2 || i === 3 ? 4 : 0)}q${i % 2 ? 10 : -10} -${h / 2} ${i % 2 ? -2 : 4} -${h}" stroke="#FFFFFF" stroke-width="3" fill="none" stroke-linecap="round"/>
                  <circle cx="${x}" cy="${150 - (i === 2 || i === 3 ? 4 : 0)}" r="4" fill="#6CE5E8"/>`;
        }).join('')}
      </g>
      <g class="fi-float" transform="translate(372 46)">
        <path d="M14 0C14 0 0 16 0 26a14 14 0 0 0 28 0C28 16 14 0 14 0z" fill="#E8B04A"/>
        <path d="M8 26a6 6 0 0 0 6 6" stroke="#FFFFFF" stroke-width="2" fill="none" stroke-linecap="round"/>
      </g>
      <text x="386" y="104" text-anchor="middle" fill="#E8B04A" font-family="JetBrains Mono, monospace" font-size="10">PRP</text>
      <path d="M104 110v-36m0 0l-7 8m7-8l7 8" stroke="#6CE5E8" stroke-width="2.5" fill="none" stroke-linecap="round"/>`)
  };

  function initSmileFinder() {
    const buttons = document.querySelectorAll('.concern-btn[data-concern]');
    if (!buttons.length) return;

    const outputCard = document.getElementById('finderOutputCard');
    const illusEl = document.getElementById('finderIllus');
    const renderIllus = (key) => {
      if (illusEl && finderIllustrations[key]) illusEl.innerHTML = finderIllustrations[key];
    };
    const initialBtn = document.querySelector('.concern-btn.active[data-concern]') || buttons[0];
    renderIllus(initialBtn.getAttribute('data-concern'));
    const tagEl = document.getElementById('finderTag');
    const titleEl = document.getElementById('finderTitle');
    const descEl = document.getElementById('finderDesc');
    const timeEl = document.getElementById('finderTime');
    const longEl = document.getElementById('finderLongevity');
    const comfortEl = document.getElementById('finderComfort');
    const linkEl = document.getElementById('finderLink');
    const waEl = document.getElementById('finderWa');
    const stepsListEl = document.getElementById('finderStepsList');
    const checkListEl = document.getElementById('finderCheckList');

    // View tabs inside finder output card
    const viewTabs = document.querySelectorAll('.finder-view-tab[data-fview]');
    const viewPanes = document.querySelectorAll('.finder-view-pane[data-fpane]');
    viewTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-fview');
        viewTabs.forEach((t) => t.classList.toggle('active', t === tab));
        viewPanes.forEach((p) => p.classList.toggle('active', p.getAttribute('data-fpane') === target));
      });
    });

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-concern');
        const info = finderData[key];
        if (!info) return;

        buttons.forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        if (outputCard) {
          outputCard.classList.remove('finder-fade');
          void outputCard.offsetWidth;
          outputCard.classList.add('finder-fade');
        }

        renderIllus(key);
        if (tagEl) tagEl.textContent = info.tag;
        if (titleEl) titleEl.textContent = info.title;
        if (descEl) descEl.textContent = info.desc;
        if (timeEl) timeEl.textContent = info.time;
        if (longEl && info.longevity) longEl.textContent = info.longevity;
        if (comfortEl) comfortEl.textContent = info.comfort;
        if (linkEl) linkEl.setAttribute('href', info.link);
        if (waEl) {
          waEl.setAttribute(
            'href',
            'https://wa.me/919372951399?text=' + encodeURIComponent(info.wa)
          );
        }
        if (stepsListEl && info.steps) {
          stepsListEl.innerHTML = info.steps
            .map(
              (s) =>
                '<div class="finder-step-row"><span class="finder-step-num">' +
                s.num +
                '</span><div><strong>' +
                s.title +
                '</strong><p>' +
                s.desc +
                '</p></div></div>'
            )
            .join('');
        }
        if (checkListEl && info.checks) {
          checkListEl.innerHTML = info.checks
            .map((c) => '<li><span class="f-tick">✓</span> ' + c + '</li>')
            .join('');
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     4. TESTIMONIALS HORIZONTAL CAROUSEL + PROGRESS BAR (C6)
     ------------------------------------------------------------------------ */
  function initReviewsCarousel() {
    const track = document.getElementById('reviewsCarouselTrack');
    const prevBtn = document.getElementById('reviewsPrevBtn');
    const nextBtn = document.getElementById('reviewsNextBtn');
    const fill = document.getElementById('reviewsProgressFill');
    if (!track) return;

    function updateProgress() {
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= 0) {
        if (fill) fill.style.width = '100%';
        return;
      }
      const ratio = Math.max(0.15, Math.min(1, (track.scrollLeft + track.clientWidth * 0.35) / track.scrollWidth));
      const pct = Math.min(100, Math.max(20, (track.scrollLeft / maxScroll) * 80 + 20));
      if (fill) fill.style.width = pct + '%';
    }

    function scrollStep(dir) {
      const card = track.querySelector('.review-card');
      const step = card ? card.offsetWidth + 20 : 360;
      track.scrollBy({ left: dir * step, behavior: 'smooth' });
    }

    if (prevBtn) prevBtn.addEventListener('click', () => scrollStep(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => scrollStep(1));
    track.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();
  }

  /* ------------------------------------------------------------------------
     5. MOBILE FLOATING DOCK + QUICK BOOKING BOTTOM SHEET POP-UP (B2)
     ------------------------------------------------------------------------ */
  function initQuickBookingModal() {
    if (!document.getElementById('quickBookModal')) {
      const modalHtml = `
        <div class="quick-book-backdrop" id="quickBookModal" aria-hidden="true" role="dialog" aria-label="Quick Appointment Booking">
          <div class="quick-book-sheet">
            <div class="quick-sheet-head">
              <div>
                <span class="eyebrow" style="margin-bottom:4px;">Instant WhatsApp Desk</span>
                <h3 style="font-size:1.25rem;color:var(--navy);">Book Your Visit in 30 Seconds</h3>
              </div>
              <button type="button" class="mobile-menu-btn" id="closeQuickBookBtn" aria-label="Close booking popup" style="display:inline-flex;width:38px;height:38px;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <form id="quickBookForm" class="form-grid">
              <div class="form-field">
                <label for="qbName">Your Full Name *</label>
                <input type="text" id="qbName" required placeholder="e.g. Rohan Mehta">
              </div>
              <div class="form-field">
                <label for="qbPhone">Phone / WhatsApp Number *</label>
                <input type="tel" id="qbPhone" required placeholder="+91 98XXX XXXXX">
              </div>
              <div class="form-field">
                <label for="qbTreatment">Treatment Needed</label>
                <select id="qbTreatment">
                  <option value="General Consultation & Digital X-Ray">General Consultation & Digital X-Ray</option>
                  <option value="Dental Implants / Full-Mouth Rehab">Dental Implants / Full-Mouth Rehab</option>
                  <option value="Invisalign & Clear Aligners">Invisalign & Clear Aligners</option>
                  <option value="Smile Designing & Porcelain Veneers">Smile Designing & Porcelain Veneers</option>
                  <option value="Painless Single-Sitting Root Canal">Painless Single-Sitting Root Canal</option>
                  <option value="Teeth Whitening / Cleaning & Polishing">Teeth Whitening / Cleaning & Polishing</option>
                  <option value="Hair PRP Regrowth Therapy">Hair PRP Regrowth Therapy</option>
                  <option value="Paediatric / Kids Dental Visit">Paediatric / Kids Dental Visit</option>
                </select>
              </div>
              <div class="form-field">
                <label for="qbSlot">Preferred Day & Time</label>
                <select id="qbSlot">
                  <option value="Today · Evening (5 PM – 9 PM)">Today · Evening (5 PM – 9 PM)</option>
                  <option value="Tomorrow · Morning (11 AM – 2 PM)">Tomorrow · Morning (11 AM – 2 PM)</option>
                  <option value="Tomorrow · Evening (5 PM – 9 PM)">Tomorrow · Evening (5 PM – 9 PM)</option>
                  <option value="This Weekend (Sat / Sun)">This Weekend (Sat / Sun)</option>
                </select>
              </div>
              <div class="form-field full" style="margin-top:6px;">
                <button type="submit" class="btn btn-primary" style="width:100%;justify-content:space-between;">
                  <span>Confirm Appointment via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', modalHtml);
    }

    const modal = document.getElementById('quickBookModal');
    const closeBtn = document.getElementById('closeQuickBookBtn');
    const form = document.getElementById('quickBookForm');

    function openModal(e) {
      if (e) e.preventDefault();
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    }

    function closeModal() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }

    // Make Mobile Bottom Bar "Book" button + any [data-open-booking] button trigger the sheet
    document.querySelectorAll('.mobile-bottom-bar .mob-tab.primary, [data-open-booking="true"]').forEach((btn) => {
      btn.addEventListener('click', openModal);
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('qbName').value.trim();
        const phone = document.getElementById('qbPhone').value.trim();
        const treat = document.getElementById('qbTreatment').value;
        const slot = document.getElementById('qbSlot').value;
        const msg = `Hi Dr. Prakruti, I would like to book an appointment at The Dental Den (Prabhadevi).\n\n• Name: ${name}\n• Phone: ${phone}\n• Treatment: ${treat}\n• Preferred Time: ${slot}`;
        window.open('https://wa.me/919372951399?text=' + encodeURIComponent(msg), '_blank');
        closeModal();
      });
    }
  }

  /* ------------------------------------------------------------------------
     6. SCROLL-TO-TOP PROGRESS RING (B4) + DESKTOP FLOATING WHATSAPP (B3)
     ------------------------------------------------------------------------ */
  function initFloatingButtons() {
    if (!document.getElementById('scrollTopBtn')) {
      const floatHtml = `
        <button type="button" class="scroll-top-btn" id="scrollTopBtn" aria-label="Scroll to top">
          <svg class="progress-ring" viewBox="0 0 46 46">
            <circle cx="23" cy="23" r="21" fill="none" stroke="rgba(29,138,142,0.16)" stroke-width="2.5"></circle>
            <circle id="scrollRingCircle" cx="23" cy="23" r="21" fill="none" stroke="#1D8A8E" stroke-width="2.5" stroke-dasharray="131.95" stroke-dashoffset="131.95" stroke-linecap="round"></circle>
          </svg>
          <span class="arrow-up">↑</span>
        </button>
        <a href="https://wa.me/919372951399?text=Hi%20Dr.%20Prakruti%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20The%20Dental%20Den." target="_blank" rel="noopener" class="float-wa-desktop" aria-label="Chat with The Dental Den on WhatsApp">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        </a>
      `;
      document.body.insertAdjacentHTML('beforeend', floatHtml);
    }

    const btn = document.getElementById('scrollTopBtn');
    const circle = document.getElementById('scrollRingCircle');
    const heroBg = document.querySelector('.hero-bg');
    const midParallax = document.querySelector('.parallax-section');
    const circumference = 131.95;

    let ticking = false;
    function updateScrollEffects() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, scrollTop / docHeight));

      if (btn) {
        btn.classList.toggle('visible', scrollTop > 280);
      }
      if (circle) {
        circle.style.strokeDashoffset = String(circumference * (1 - progress));
      }

      // Smooth 60fps Parallax for Hero & Mid-Page Banner on both Desktop and Mobile (increased speed, clamped within bleed)
      if (heroBg && scrollTop < 900) {
        const offset = Math.min(42, Math.round(scrollTop * 0.24));
        heroBg.style.setProperty('--hero-parallax', offset + 'px');
      }
      if (midParallax) {
        const rect = midParallax.getBoundingClientRect();
        const viewH = window.innerHeight;
        if (rect.top < viewH && rect.bottom > 0) {
          // Image drifts 0.32px for every 1px scrolled (about 4.5x faster than before), clamped to the 200px bleed
          const centerOffset = (viewH / 2 - (rect.top + rect.height / 2)) * 0.32;
          const clamped = Math.max(-195, Math.min(195, centerOffset));
          midParallax.style.setProperty('--mid-parallax', clamped.toFixed(1) + 'px');
        }
      }
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollEffects);
        ticking = true;
      }
    }

    if (btn) {
      btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ------------------------------------------------------------------------
     7. FAQ ACCORDIONS, PAGE BOOKING FORMS & SCROLL REVEAL (A7)
     ------------------------------------------------------------------------ */
  function initFaqAndForms() {
    // Wrap FAQ answer contents in .faq-a-inner if not present, enabling smooth CSS grid accordion height animation
    document.querySelectorAll('.faq-item .faq-a').forEach((ans) => {
      if (!ans.querySelector('.faq-a-inner')) {
        const wrap = document.createElement('div');
        wrap.className = 'faq-a-inner';
        while (ans.firstChild) {
          wrap.appendChild(ans.firstChild);
        }
        ans.appendChild(wrap);
      }
    });

    document.querySelectorAll('.faq-item .faq-q').forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        if (!item) return;
        const isOpen = item.classList.contains('open');
        item.parentElement.querySelectorAll('.faq-item').forEach((el) => el.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    });

    const contactForm = document.getElementById('appointmentForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = (contactForm.querySelector('[name="name"]')?.value || '').trim();
        const phone = (contactForm.querySelector('[name="phone"]')?.value || '').trim();
        const service = (contactForm.querySelector('[name="service"]')?.value || 'Consultation').trim();
        const slot = (contactForm.querySelector('[name="slot"]')?.value || 'Flexible').trim();
        const notes = (contactForm.querySelector('[name="notes"]')?.value || '').trim();
        const text = `Hi Dr. Prakruti, I would like to book an appointment at The Dental Den.\n\n• Name: ${name}\n• Phone: ${phone}\n• Treatment: ${service}\n• Preferred Time: ${slot}${notes ? '\n• Notes: ' + notes : ''}`;
        window.open('https://wa.me/919372951399?text=' + encodeURIComponent(text), '_blank');
      });
    }

    // Paginated & Filterable 78 Google Reviews Directory on reviews.html
    const revGrid = document.getElementById('reviewsStaticGrid');
    const revFilterBar = document.getElementById('reviewsFilterBar');
    const revShowingText = document.getElementById('reviewsShowingText');
    const revPagination = document.getElementById('reviewsPagination');
    const revPageNumbers = document.getElementById('revPageNumbers');
    const revPrevBtn = document.getElementById('revPrevPageBtn');
    const revNextBtn = document.getElementById('revNextPageBtn');

    if (revGrid && revFilterBar) {
      const allCards = Array.from(revGrid.querySelectorAll('.review-card'));
      const filterBtns = Array.from(revFilterBar.querySelectorAll('.rev-filter-btn'));
      const PAGE_SIZE = 9;
      let currentFilter = 'all';
      let currentPage = 1;

      function getFilteredCards() {
        if (currentFilter === 'all') return allCards;
        return allCards.filter((card) => {
          const cats = (card.getAttribute('data-categories') || '').split(/\s+/);
          return cats.includes(currentFilter);
        });
      }

      function renderReviewsPage(shouldScroll) {
        const filtered = getFilteredCards();
        const total = filtered.length;
        const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
        if (currentPage > totalPages) currentPage = totalPages;
        if (currentPage < 1) currentPage = 1;

        const startIdx = (currentPage - 1) * PAGE_SIZE;
        const endIdx = Math.min(startIdx + PAGE_SIZE, total);

        allCards.forEach((c) => {
          c.style.display = 'none';
        });
        filtered.slice(startIdx, endIdx).forEach((c) => {
          c.style.display = 'flex';
        });

        if (revShowingText) {
          const activeBtn = filterBtns.find((b) => b.getAttribute('data-filter') === currentFilter);
          const catLabel = activeBtn ? activeBtn.childNodes[0].textContent.trim() : 'All Reviews';
          revShowingText.innerHTML =
            total > 0
              ? `Showing <strong>${startIdx + 1}–${endIdx}</strong> of <strong>${total}</strong> Verified Google Reviews <span class="showing-cat-pill">${catLabel} · Page ${currentPage} of ${totalPages}</span>`
              : `No reviews found in this category.`;
        }

        if (revPagination) {
          revPagination.style.display = totalPages > 1 ? 'flex' : 'none';
        }
        if (revPrevBtn) {
          revPrevBtn.disabled = currentPage <= 1;
        }
        if (revNextBtn) {
          revNextBtn.disabled = currentPage >= totalPages;
        }
        if (revPageNumbers) {
          revPageNumbers.innerHTML = '';
          for (let p = 1; p <= totalPages; p++) {
            const pBtn = document.createElement('button');
            pBtn.type = 'button';
            pBtn.className = 'page-num-btn' + (p === currentPage ? ' active' : '');
            pBtn.textContent = String(p);
            pBtn.setAttribute('aria-label', `Page ${p}`);
            if (p === currentPage) pBtn.setAttribute('aria-current', 'page');
            pBtn.addEventListener('click', () => {
              if (currentPage !== p) {
                currentPage = p;
                renderReviewsPage(true);
              }
            });
            revPageNumbers.appendChild(pBtn);
          }
        }

        if (shouldScroll) {
          const sec = document.getElementById('all-google-reviews');
          if (sec) {
            const top = sec.getBoundingClientRect().top + window.scrollY - 88;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }
      }

      filterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          currentFilter = btn.getAttribute('data-filter') || 'all';
          currentPage = 1;
          filterBtns.forEach((b) => {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
          });
          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');
          renderReviewsPage(false);
        });
      });

      if (revPrevBtn) {
        revPrevBtn.addEventListener('click', () => {
          if (currentPage > 1) {
            currentPage--;
            renderReviewsPage(true);
          }
        });
      }
      if (revNextBtn) {
        revNextBtn.addEventListener('click', () => {
          const filtered = getFilteredCards();
          const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
          if (currentPage < totalPages) {
            currentPage++;
            renderReviewsPage(true);
          }
        });
      }

      renderReviewsPage(false);
    }

    // Department filter tabs on treatments.html
    const deptBtns = document.querySelectorAll('[data-dept-filter]');
    if (deptBtns.length) {
      const groups = document.querySelectorAll('[data-dept-group]');
      deptBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const target = btn.getAttribute('data-dept-filter');
          deptBtns.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          groups.forEach((grp) => {
            const gName = grp.getAttribute('data-dept-group');
            grp.style.display = (target === 'all' || gName === target) ? '' : 'none';
          });
        });
      });
    }

    // Subtle Scroll Reveal
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && reveals.length) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
      );
      reveals.forEach((el) => io.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add('in-view'));
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initMobileDrawer();
    initBeforeAfterStudios();
    initSmileFinder();
    initReviewsCarousel();
    initQuickBookingModal();
    initFloatingButtons();
    initFaqAndForms();
  });
})();
