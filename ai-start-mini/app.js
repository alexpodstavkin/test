(function () {
  "use strict";

  // ─── НАСТРОЙКИ ───────────────────────────────────────────────────────────────
  var APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxhu5yH5utuH4YYcil_0T18szWnlbARzCuq7KPXi5YcYFY-Q5HVtsQfE2ZSs3dM0CGo/exec";
  // ─────────────────────────────────────────────────────────────────────────────

  var overlay   = document.getElementById("modalOverlay");
  var closeBtn  = document.getElementById("modalClose");
  var form      = document.getElementById("leadForm");
  var submitBtn = document.getElementById("formSubmit");
  var successEl = document.getElementById("formSuccess");
  var errorEl   = document.getElementById("formError");

  // Курс по умолчанию для этой страницы
  var currentCourse = window.PAGE_COURSE || "AI-старт мини";

  if (!overlay) return; // страница без модалки

  function openModal(course) {
    currentCourse = course || window.PAGE_COURSE || "AI-старт мини";
    overlay.classList.add("is-open");
    document.body.classList.add("modal-open");
    setTimeout(function () {
      var first = form && form.querySelector("input");
      if (first) first.focus();
    }, 200);
  }

  function closeModal() {
    overlay.classList.remove("is-open");
    document.body.classList.remove("modal-open");
  }

  function resetForm() {
    if (!form) return;
    form.reset();
    form.hidden = false;
    if (successEl)   successEl.hidden = true;
    if (errorEl)     errorEl.hidden   = true;
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Отправить заявку <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="cta-arrow"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
    }
    form.querySelectorAll(".input-error").forEach(function (el) {
      el.classList.remove("input-error");
    });
  }

  // Открытие по любой кнопке с class open-modal-btn или id openModalBtn
  document.addEventListener("click", function (e) {
    var opener = e.target.closest(".open-modal-btn, #openModalBtn");
    if (opener) {
      resetForm();
      openModal(opener.dataset.course);
      return;
    }
    // Закрытие по элементам с data-close (крестик, бэкдроп)
    var closer = e.target.closest("[data-close]");
    if (closer && overlay.contains(closer)) {
      closeModal();
    }
  });

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) closeModal();
  });

  // Валидация
  function validateForm(name, email, phone) {
    var valid = true;
    [
      { id: "fieldName",  ok: name.trim().length >= 2 },
      { id: "fieldEmail", ok: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) },
      { id: "fieldPhone", ok: phone.replace(/\D/g, "").length >= 7 }
    ].forEach(function (f) {
      var el = document.getElementById(f.id);
      if (!el) return;
      el.classList.toggle("input-error", !f.ok);
      if (!f.ok) valid = false;
    });
    return valid;
  }

  // Отправка формы
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name  = document.getElementById("fieldName").value;
      var email = document.getElementById("fieldEmail").value;
      var phone = document.getElementById("fieldPhone").value;

      if (!validateForm(name, email, phone)) return;

      submitBtn.disabled = true;
      submitBtn.textContent = "Отправляем...";
      if (errorEl) errorEl.hidden = true;

      var payload = {
        name:   name.trim(),
        email:  email.trim(),
        phone:  phone.trim(),
        course: currentCourse,
        date:   new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })
      };

      // GET + URLSearchParams — обход CORS-ограничений Google Apps Script
      var params = new URLSearchParams(payload);
      fetch(APPS_SCRIPT_URL + "?" + params.toString(), {
        method: "GET",
        mode:   "no-cors"
      })
        .then(function () {
          if (form)      form.hidden = true;
          if (successEl) successEl.hidden = false;
        })
        .catch(function () {
          if (errorEl) errorEl.hidden = false;
          submitBtn.disabled = false;
          submitBtn.textContent = "Отправить заявку";
        });
    });
  }
})();
