/* Buildsasa — website form submissions.
 *
 * These forms used to POST to Formspree. They now go to the Buildsasa backend, so
 * every enquiry lands in the Lead table and appears in the admin panel with all of
 * its fields, rather than living on a third party behind an archive limit.
 *
 * The backend takes JSON, not form-encoded data, so the submit is intercepted and
 * re-sent as JSON. Forms opt in with `data-lead-form` and `data-lead-kind`.
 */
(function () {
  // A static asset cannot read Next's build-time env, so layout.jsx publishes the
  // API base on window. The literal below is a last resort for the case where that
  // inline script does not run.
  function apiBase() {
    var fromWindow = (typeof window !== 'undefined' && window.__BUILDSASA_API__) || '';
    return String(fromWindow || 'https://api.buildsasa.com').replace(/\/$/, '');
  }

  function showMsg(form, text, ok) {
    var m = form.querySelector('.bsa-form-msg');
    if (!m) {
      m = document.createElement('p');
      m.className = 'bsa-form-msg';
      m.style.cssText = 'margin-top:14px;font-weight:600;';
      form.appendChild(m);
    }
    m.textContent = text;
    m.style.color = ok ? '#16A34A' : '#D8480F';
  }

  function valueOf(form, names) {
    for (var i = 0; i < names.length; i++) {
      var el = form.querySelector('[name="' + names[i] + '"]');
      if (el && String(el.value || '').trim()) return String(el.value).trim();
    }
    return '';
  }

  function submit(form) {
    var kind = form.getAttribute('data-lead-kind') || 'contact';
    var email = valueOf(form, ['email']);
    var name = valueOf(form, ['name', 'fullname']);

    // The newsletter box asks only for an address, but the API needs a name. The
    // API only accepts letters in a name, so the part before the @ (john99,
    // j_doe) would be refused; a fixed label keeps the signup and the email
    // still identifies the person.
    if (kind === 'newsletter' && email && !name) name = 'Newsletter subscriber';

    if (!name || !email) {
      showMsg(form, 'Please give your name and email address.', false);
      return;
    }

    var payload = {
      // "newsletter" is not a kind the API knows; it is stored as a contact whose
      // interest records where it came from.
      kind: kind === 'demo' ? 'demo' : 'contact',
      name: name,
      email: email,
      phone: valueOf(form, ['phone', 'phone_number']),
      company: valueOf(form, ['company', 'company_name']),
      // Several forms label this field "subject"; the API calls it interest.
      interest: kind === 'newsletter' ? 'Newsletter signup' : valueOf(form, ['interest', 'subject']),
      message: valueOf(form, ['message']),
      website: valueOf(form, ['website']), // honeypot — bots fill it, people do not
      pageUrl: window.location.href
    };

    var btn = form.querySelector('[type="submit"]');
    var original = btn ? btn.innerHTML : null;
    if (btn) btn.disabled = true;

    fetch(apiBase() + '/api/public/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (data) {
        if (res.ok) {
          form.reset();
          showMsg(form, kind === 'newsletter'
            ? 'Thank you — you are on the list.'
            : 'Thank you! Your message has reached our team and we will be in touch.', true);
          return;
        }
        // Rate limiting is the one refusal a real person is likely to meet, so it
        // gets an explanation instead of a generic failure.
        if (res.status === 429) {
          showMsg(form, 'That is several messages in a short time. Please wait a moment and try again.', false);
          return;
        }
        showMsg(form, (data && data.error) || 'Sorry, something went wrong. Please try again.', false);
      });
    }).catch(function () {
      showMsg(form, 'Network error. Please check your connection and try again.', false);
    }).finally(function () {
      if (btn) { btn.disabled = false; if (original !== null) btn.innerHTML = original; }
    });
  }

  // Delegated, so forms injected into the page after load are still handled.
  document.addEventListener('submit', function (e) {
    var form = e.target;
    if (!form || !form.getAttribute || form.getAttribute('data-lead-form') === null) return;
    e.preventDefault();
    submit(form);
  }, true);
})();
