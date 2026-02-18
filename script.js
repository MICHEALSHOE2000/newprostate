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

  // === Conversion Booster: 2-step order form (reduces initial friction) ===
  function enhanceOrderForms() {
    document.querySelectorAll('#orderForm').forEach(form => {
      if (form.dataset.enhanced === 'true') return;

      const primaryPhone = form.querySelector('#phone');
      const altPhone = form.querySelector('#alt-phone');
      const state = form.querySelector('#state');
      const lga = form.querySelector('#lga');
      const quantity = form.querySelector('#quantity');
      const address = form.querySelector('#address');
      const submitBtn = form.querySelector('button[type="submit"]');

      if (!primaryPhone || !altPhone || !state || !lga || !quantity || !address || !submitBtn) {
        return;
      }


      const advancedWrap = document.createElement('div');
      advancedWrap.className = 'form-step-2';

      const fields = [altPhone, state, lga, quantity, address];
      fields.forEach(field => {
        const label = form.querySelector(`label[for="${field.id}"]`);
        if (label) advancedWrap.appendChild(label);
        advancedWrap.appendChild(field);
      });

      submitBtn.textContent = 'Continue to Delivery Details';
      submitBtn.type = 'button';

      const progress = document.createElement('div');
      progress.className = 'form-progress';
      progress.innerHTML = '<span class="active">Step 1: Contact</span><span>Step 2: Delivery</span>';
      form.prepend(progress);

      const helper = document.createElement('p');
      helper.className = 'form-helper-text';
      helper.textContent = 'Fill your main details first. It takes less than 30 seconds.';
      progress.insertAdjacentElement('afterend', helper);


      fields.forEach(field => {
        if (field.required) {
          field.dataset.wasRequired = 'true';
          field.required = false;
        }
      });

      // Move step 2 fields into wrapper
      const firstStep2Label = form.querySelector('label[for="alt-phone"]');
      if (firstStep2Label) {
        firstStep2Label.parentNode.insertBefore(advancedWrap, firstStep2Label);
      } else {
        form.insertBefore(advancedWrap, submitBtn);
      }

      advancedWrap.style.display = 'none';
      form.insertBefore(submitBtn, advancedWrap);

      const inlineError = document.createElement('p');
      inlineError.className = 'inline-form-error';
      inlineError.style.display = 'none';
      submitBtn.insertAdjacentElement('beforebegin', inlineError);

      const finalButton = document.createElement('button');
      finalButton.type = 'submit';
      finalButton.className = 'final-submit-btn';
      finalButton.textContent = 'Submit Order Securely';
      finalButton.style.display = 'none';
      form.appendChild(finalButton);

      submitBtn.addEventListener('click', () => {
        const nameField = form.querySelector('#name');
        const phoneField = form.querySelector('#phone');
        const phoneRegex = /^\d{11}$/;

        const nameOk = !!nameField?.value.trim();
        const phoneOk = phoneRegex.test(phoneField?.value.trim() || '');

        if (!nameOk || !phoneOk) {
          inlineError.textContent = 'Enter your full name and a valid 11-digit phone number to continue.';
          inlineError.style.display = 'block';
          return;
        }

        inlineError.style.display = 'none';
        advancedWrap.style.display = 'block';
        fields.forEach(field => {
          if (field.dataset.wasRequired === 'true') field.required = true;
        });

        progress.innerHTML = '<span class="done">Step 1: Contact ✓</span><span class="active">Step 2: Delivery</span>';
        helper.textContent = 'Great. Add your delivery details and place your order.';
        submitBtn.style.display = 'none';
        finalButton.style.display = 'block';
        advancedWrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });

      form.dataset.enhanced = 'true';

      // Prevent accidental double-submit UX
      form.addEventListener('submit', () => {
        finalButton.disabled = true;
        finalButton.textContent = 'Submitting...';
      }, { once: true });
    });
  }

  injectTrustBar();
  injectSocialProof();
  injectFormTrustSignals();
  enhanceOrderForms();

  // === Countdown Timer ===
  function countdown() {
    const offerDate = new Date("2025-10-30T23:59:59");
    const now = new Date();
    const diff = offerDate - now;

    if (diff <= 0) {
      document.getElementById("countdown").textContent = "Offer ended!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    const countdownElement = document.getElementById("countdown");
    if (countdownElement) {
      countdownElement.innerHTML = `${days}d ${hours}h ${mins}m ${secs}s`;
    }
  }
  setInterval(countdown, 1000);
  countdown(); // run immediately


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

