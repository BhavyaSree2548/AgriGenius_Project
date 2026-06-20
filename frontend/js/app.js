const API_BASE = "https://agrigenius-backend.onrender.com";

/* =========================
   TRANSLATIONS
========================= */
const translations = {
    en: { login: "Login", register: "Register", loading: "Working..." },
    te: { login: "లాగిన్", register: "నమోదు", loading: "పని జరుగుతోంది..." }
};

const state = {
    lang: localStorage.getItem("agriLang") || "en"
};

/* =========================
   INIT
========================= */
document.addEventListener("DOMContentLoaded", () => {
    applyLanguage();
    bindLanguageToggle();
    bindAuthForms();
});

/* =========================
   LANGUAGE
========================= */
function t(key) {
    return translations[state.lang][key] || key;
}

function applyLanguage() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        el.textContent = t(el.dataset.i18n);
    });
}

function bindLanguageToggle() {
    document.querySelectorAll("[data-lang-toggle]").forEach(btn => {
        btn.addEventListener("click", () => {
            state.lang = state.lang === "en" ? "te" : "en";
            localStorage.setItem("agriLang", state.lang);
            applyLanguage();
        });
    });
}

/* =========================
   AUTH FORMS
========================= */
function bindAuthForms() {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");

    if (registerForm) {
        registerForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const msg = document.getElementById("registerMessage");

            try {
                setMessage(msg, t("loading"));

                const payload = Object.fromEntries(new FormData(registerForm));

                const data = await apiFetch("/api/auth/register", {
                    method: "POST",
                    body: JSON.stringify(payload)
                }, false);

                saveSession(data);
                setMessage(msg, "Registration successful!");

                setTimeout(() => {
                    window.location.href = "dashboard.html";
                }, 800);

            } catch (err) {
                setMessage(msg, err.message, true);
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const msg = document.getElementById("loginMessage");

            try {
                setMessage(msg, t("loading"));

                const payload = Object.fromEntries(new FormData(loginForm));

                const data = await apiFetch("/api/auth/login", {
                    method: "POST",
                    body: JSON.stringify(payload)
                }, false);

                saveSession(data);
                setMessage(msg, "Login successful!");

                setTimeout(() => {
                    window.location.href = "dashboard.html";
                }, 800);

            } catch (err) {
                setMessage(msg, err.message, true);
            }
        });
    }
}

/* =========================
   SAFE API CALL (FIXED)
========================= */
async function apiFetch(path, options = {}, withAuth = true) {
    const headers = new Headers(options.headers || {});

    if (!(options.body instanceof FormData)) {
        headers.set("Content-Type", "application/json");
    }

    if (withAuth) {
        const token = localStorage.getItem("agriToken");
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
    }

    const response = await fetch(`${API_BASE}${path}`, {
        ...options,
        headers
    });

    const contentType = response.headers.get("content-type");

    let data = null;

    // ✅ SAFE JSON HANDLING
    if (contentType && contentType.includes("application/json")) {
        data = await response.json();
    } else {
        const text = await response.text();
        console.error("NON-JSON RESPONSE:", text);

        throw new Error(`Server error (${response.status}). Check backend endpoint.`);
    }

    if (!response.ok) {
        throw new Error(data.message || `Request failed (${response.status})`);
    }

    return data;
}

/* =========================
   SESSION
========================= */
function saveSession(data) {
    localStorage.setItem("agriToken", data.token || "");
    localStorage.setItem("agriName", data.fullName || "");
    localStorage.setItem("agriEmail", data.email || "");
}

/* =========================
   UI HELPERS
========================= */
function setMessage(node, text, isError = false) {
    if (!node) return;
    node.textContent = text;
    node.classList.toggle("error", isError);
}