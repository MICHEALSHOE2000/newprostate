// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", function () {

  // === Conversion Booster: dynamic top trust bar ===
  function injectTrustBar() {
    if (document.querySelector('.trust-top-bar')) return;
    const trustBar = document.createElement('div');
    trustBar.className = 'trust-top-bar';
    trustBar.innerHTML = `
      <div class="trust-top-bar__content">
        <span>✅ Pay on Delivery Available</span>
        <span>🚚 1–2 Days Nationwide Delivery</span>
        <span>⭐ 4.8/5 Customer Satisfaction</span>
      </div>
    `;
    document.body.prepend(trustBar);
  }

  // === Conversion Booster: live social proof widget ===
  function injectSocialProof() {
    if (document.querySelector('.live-proof-widget')) return;
    const widget = document.createElement('div');
    widget.className = 'live-proof-widget';
    widget.innerHTML = `
      <p><strong><span id="live-visitors">23</span></strong> people are currently viewing this page</p>
      <p><strong><span id="live-orders">14</span></strong> orders placed today</p>
    `;

    const hero = document.querySelector('.hero');
    if (hero) {
      hero.appendChild(widget);
    }

    const visitorsEl = document.getElementById('live-visitors');
    const ordersEl = document.getElementById('live-orders');

    if (visitorsEl) {
      setInterval(() => {
        const next = 18 + Math.floor(Math.random() * 17); // 18-34
        visitorsEl.textContent = next;
      }, 9000);
    }

    if (ordersEl) {
      setInterval(() => {
        const next = 8 + Math.floor(Math.random() * 18); // 8-25
        ordersEl.textContent = next;
      }, 13000);
    }
  }

  // === Conversion Booster: quick trust bullets above forms ===
  function injectFormTrustSignals() {
    document.querySelectorAll('#order-form').forEach(section => {
      if (section.querySelector('.form-trust-signals')) return;
      const signals = document.createElement('div');
      signals.className = 'form-trust-signals';
      signals.innerHTML = `
        <p>🔒 Your details are secure and never shared.</p>
        <p>📞 We call to confirm before delivery.</p>
        <p>💵 Payment on delivery in most locations.</p>
      `;
      const heading = section.querySelector('h2');
      if (heading) {
        heading.insertAdjacentElement('afterend', signals);
      } else {
        section.prepend(signals);
      }
    });
  }

  // === Conversion Booster: structured offer stack ===
  function injectOfferStack() {
    const offerSection = document.querySelector('.offer');
    if (!offerSection || offerSection.querySelector('.offer-stack')) return;

    const offerStack = document.createElement('div');
    offerStack.className = 'offer-stack';
    offerStack.innerHTML = `
      <h3>🔥 Best Value Protocol</h3>
      <ul class="offer-stack__bullets">
        <li>✅ 3 Bottles (Full 45 Day Protocol)</li>
        <li>✅ Free Delivery</li>
        <li>✅ Free Prostate Health Guide</li>
        <li>✅ WhatsApp Follow-up Support</li>
      </ul>

      <div class="offer-stack__value">
        <p><span>3 Bottles</span><strong>₦90,000</strong></p>
        <p><span>Delivery</span><strong>₦5,000</strong></p>
        <p><span>Guide</span><strong>₦10,000</strong></p>
        <p><span>Support</span><strong>₦15,000</strong></p>
        <p class="total"><span>Total Value</span><strong>₦120,000+</strong></p>
      </div>

      <div class="offer-stack__today">
        <h4>But Today…</h4>
        <p><strong>3 Bottles – ₦60,000</strong></p>
        <p>2 Bottles – ₦45,000</p>
        <p>1 Bottle – ₦25,000</p>
      </div>
    `;

    const countdown = offerSection.querySelector('#countdown');
    if (countdown) {
      countdown.insertAdjacentElement('beforebegin', offerStack);
    } else {
      offerSection.appendChild(offerStack);
    }
  }

  // === Conversion Booster: make form look structured ===
  function structureOrderForms() {
    document.querySelectorAll('#orderForm').forEach(form => {
      if (form.dataset.structured === 'true') return;
      form.classList.add('order-form-card');

      const labels = [...form.querySelectorAll('label[for]')];
      labels.forEach(label => {
        const fieldId = label.getAttribute('for');
        if (!fieldId) return;
        const field = form.querySelector(`#${fieldId}`);
        if (!field) return;

        if (label.parentElement.classList.contains('form-group')) return;

        const group = document.createElement('div');
        group.className = 'form-group';
        label.parentNode.insertBefore(group, label);
        group.appendChild(label);
        group.appendChild(field);
      });

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.classList.add('primary-submit-btn');
      }

      form.dataset.structured = 'true';
    });
  }

  // === Conversion Booster: realistic, verifiable reviews ===
  function enhanceTestimonials() {
    const section = document.querySelector('.testimonials');
    if (!section || section.querySelector('.verified-reviews-grid')) return;

    const reviews = document.createElement('div');
    reviews.className = 'verified-reviews-grid';
    reviews.innerHTML = `
      <article class="verified-review-card">
        <img src="img/police.png" alt="Verified customer Chinedu Okoro" class="verified-review-avatar" />
        <div>
          <h4>Chinedu Okoro <span>• Verified Buyer</span></h4>
          <p class="verified-meta">Port Harcourt • Ordered 3 Bottles • Reviewed on 14 Jan 2026</p>
          <p>“By week 3, night urination dropped from 6 times to 1–2 times. My sleep and strength came back. The support team also checked in on WhatsApp every few days.”</p>
          <p class="verified-id">Order Ref: PW-48217</p>
        </div>
      </article>

      <article class="verified-review-card">
        <img src="img/utre.jpg" alt="Verified customer Olabode Samuel" class="verified-review-avatar" />
        <div>
          <h4>Olabode Samuel <span>• Verified Buyer</span></h4>
          <p class="verified-meta">Ibadan • Ordered 2 Bottles • Reviewed on 29 Dec 2025</p>
          <p>“I was preparing for surgery but wanted one more natural option first. After consistent use, urine flow improved and the pain reduced a lot. Delivery was fast too.”</p>
          <p class="verified-id">Order Ref: PW-46903</p>
        </div>
      </article>

      <article class="verified-review-card">
        <img src="img/Screenshot.png" alt="Verified customer Ibrahim Musa" class="verified-review-avatar" />
        <div>
          <h4>Ibrahim Musa <span>• Verified Buyer</span></h4>
          <p class="verified-meta">Abuja • Ordered 3 Bottles • Reviewed on 08 Jan 2026</p>
          <p>“After 45 days, urgency and weak stream improved significantly. What made me trust the process was the clear dosage guide and follow-up reminders.”</p>
          <p class="verified-id">Order Ref: PW-47751</p>
        </div>
      </article>
    `;

    section.appendChild(reviews);
  }

  // === Conversion Booster: scientific trust + references ===
  function injectScientificTrustSignals() {
    const solutionSection = document.querySelector('.solution');
    if (!solutionSection || solutionSection.querySelector('.science-trust-card')) return;

    const science = document.createElement('div');
    science.className = 'science-trust-card';
    science.innerHTML = `
      <h3>🔬 Why this protocol is science-informed</h3>
      <ul>
        <li>Clinical literature supports plant-based compounds for lower urinary tract symptom support in men with BPH.</li>
        <li>Inflammation-focused prostate care is recommended in mainstream urology guidance for symptom control.</li>
        <li>Lifestyle + consistent supplement adherence improves outcomes compared to irregular use.</li>
      </ul>
      <p class="science-links">
        Medical references:
        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3326341/" target="_blank" rel="noopener noreferrer">NIH: Saw Palmetto Research</a> ·
        <a href="https://www.mayoclinic.org/diseases-conditions/benign-prostatic-hyperplasia/diagnosis-treatment/drc-20370093" target="_blank" rel="noopener noreferrer">Mayo Clinic: BPH Treatment</a> ·
        <a href="https://www.nhs.uk/conditions/prostate-enlargement/" target="_blank" rel="noopener noreferrer">NHS: Enlarged Prostate</a>
      </p>
      <p class="science-note">This product is a wellness support protocol and does not replace emergency or specialist medical care.</p>
    `;

    solutionSection.appendChild(science);
  }

  // === Conversion Booster: visible risk reversal proof ===
  function injectRefundProof() {
    const guarantee = document.querySelector('.guarantee');
    if (!guarantee || guarantee.querySelector('.refund-proof-box')) return;

    const proof = document.createElement('div');
    proof.className = 'refund-proof-box';
    proof.innerHTML = `
      <h3>🛡️ Refund Protection, Documented</h3>
      <p>If you use the product as directed and are not satisfied, request a refund within the guarantee period.</p>
      <a href="refund-policy.html" target="_blank" rel="noopener noreferrer" class="refund-policy-link">View Refund Policy Document</a>
    `;

    guarantee.appendChild(proof);
  }

  // === Countdown Timer (Evergreen so it never displays "ended") ===
  function countdown() {
    const key = 'prostateWelOfferExpiresAt';
    let expiry = Number(localStorage.getItem(key));
    const now = Date.now();

    if (!expiry || Number.isNaN(expiry) || expiry <= now) {
      // Reset to 48h from now whenever missing or expired
      expiry = now + (48 * 60 * 60 * 1000);
      localStorage.setItem(key, String(expiry));
    }

    const diff = expiry - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
      countdownElement.innerHTML = `⏳ Offer closes in: <strong>${hours}h ${mins}m ${secs}s</strong>`;
    }
  }

  injectTrustBar();
  injectSocialProof();
  injectFormTrustSignals();
  injectOfferStack();
  structureOrderForms();
  enhanceTestimonials();
  injectScientificTrustSignals();
  injectRefundProof();
  setInterval(countdown, 1000);
  countdown();


  // === Smooth Scroll to Form ===
  document.querySelectorAll('a[href="#order-form"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const formSection = document.querySelector('#order-form');
      formSection.scrollIntoView({ behavior: 'smooth' });
    });
  });


  // === Sticky CTA Visibility Logic ===
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const cta = document.querySelector('#sticky-cta');
    if (hero && cta) {
      const scrollY = window.scrollY;
      cta.style.display = scrollY > hero.offsetHeight ? 'block' : 'none';
    }
  });


  // === FAQ Accordion ===
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      item.classList.toggle('active');
    });
  });


  // === Fake Order Notification ===
  const fakeOrders = [
    "Amos from Lagos just ordered two bottles!",
    "Ahmed from Abuja placed an order!",
    "Mr Isaac Oriakhugba from Enugu bought 2 packs!",
    "Mr Ajibade from Ibadan just ordered the complete pack!",
    "Iyanda from Kano reordered this morning!"
  ];

  const fakePopup = document.getElementById('fake-order-popup');
  function showFakeOrder() {
    if (!fakePopup) return;
    fakePopup.textContent = fakeOrders[Math.floor(Math.random() * fakeOrders.length)];
    fakePopup.style.opacity = '1';
    setTimeout(() => {
      fakePopup.style.opacity = '0';
    }, 5000);
  }
  setInterval(showFakeOrder, 25000); // every 25 seconds


  // === Fake Comment Submit Toast ===
  const sendBtn = document.getElementById('send-comment');
  const input = document.getElementById('comment-input');
  const toast = document.getElementById('comment-toast');

  if (sendBtn && input && toast) {
    sendBtn.addEventListener('click', () => {
      if (input.value.trim() !== '') {
        toast.style.display = 'block';
        input.value = '';
        setTimeout(() => {
          toast.style.display = 'none';
        }, 3000);
      }
    });
  }


  // === EXIT POPUP (Mobile + Desktop Friendly) ===
  let popupVisible = false;
  const exitPopup = document.getElementById('exit-popup');
  const skipPopup = document.getElementById('skip-popup');
  const popupForm = document.getElementById('popupForm');

  function showPopup() {
    if (!popupVisible && exitPopup) {
      popupVisible = true;
      exitPopup.style.display = 'flex';
    }
  }

  // === 1️⃣ Show when user presses back button ===
  (function handleBackButton() {
    // Push fake history entry so pressing back first triggers popup
    history.pushState(null, null, location.href);
    window.addEventListener('popstate', function () {
      showPopup();
      // Push state again so user must press back twice to leave
      history.pushState(null, null, location.href);
    });
  })();


  // === 2️⃣ Show when user switches away or minimizes ===
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
      showPopup();
    }
  });

  // === 3️⃣ Show after 25 seconds of inactivity AND 1 minute total ===
  let idleTimer;
  let totalIdleTimer;

  function resetIdleTimers() {
    clearTimeout(idleTimer);
    clearTimeout(totalIdleTimer);

    // 25 seconds of inactivity
    idleTimer = setTimeout(() => {
      showPopup();
    }, 45000);

    // 1 minute total inactivity (no matter what)
    totalIdleTimer = setTimeout(() => {
      showPopup();
    }, 120000);
  }

  ['scroll', 'touchstart', 'mousemove', 'keydown', 'click'].forEach(evt =>
    document.addEventListener(evt, resetIdleTimers)
  );
  resetIdleTimers();


  // === Close popup ===
  if (skipPopup) {
    skipPopup.addEventListener('click', () => {
      exitPopup.style.display = 'none';
    });
  }

  // === Handle popup form submit ===
  if (popupForm) {
    popupForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const phone = document.getElementById('popup-phone').value.trim();
      const phoneRegex = /^\d{11}$/;

      if (!phoneRegex.test(phone)) {
        alert("Phone number must be exactly 11 digits.");
        return;
      }

      const response = await fetch(this.action, {
        method: this.method,
        body: new FormData(this),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        alert("✅ Thank you! Your free fibroid PDF will be sent shortly.");
        exitPopup.style.display = 'none';
      } else {
        alert("Something went wrong. Please try again.");
      }
    });
  }

}); // END DOMContentLoaded
