/* Buildsasa — AJAX submit for Formspree forms: clears fields & shows a message, no page reload */
document.addEventListener('DOMContentLoaded', function () {
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
  var forms = document.querySelectorAll('form[action^="https://formspree.io/"]');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('[type="submit"]');
      var original = btn ? btn.innerHTML : null;
      if (btn) { btn.disabled = true; }
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (res) {
        if (res.ok) {
          form.reset();                                   // clears the fields
          showMsg(form, 'Thank you! Your message has been sent.', true);
        } else {
          res.json().then(function (d) {
            showMsg(form, (d && d.errors) ? d.errors.map(function (x) { return x.message; }).join(', ') : 'Sorry, something went wrong. Please try again.', false);
          }).catch(function () { showMsg(form, 'Sorry, something went wrong. Please try again.', false); });
        }
      }).catch(function () {
        showMsg(form, 'Network error. Please check your connection and try again.', false);
      }).finally(function () {
        if (btn) { btn.disabled = false; if (original !== null) btn.innerHTML = original; }
      });
    });
  });
});
