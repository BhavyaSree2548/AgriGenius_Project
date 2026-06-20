const API_BASE = "";

const translations = {
    en: {
        login: "Login",
        register: "Register",
        homeEyebrow: "AI-powered crop care",
        homeTitle: "AgriGenius",
        homeCopy: "Detect plant disease, get crop advisory, and turn weather into practical field decisions.",
        startNow: "Start now",
        smartTools: "Smart tools",
        fieldSupport: "Field support",
        languages: "Languages",
        featuresEyebrow: "One dashboard",
        featuresTitle: "Crop decisions with less guesswork",
        diseaseTitle: "Plant Disease Detector",
        diseaseCopy: "Upload a leaf photo, preview it, and receive a likely diagnosis with treatment steps.",
        advisoryTitle: "AI Advisory",
        advisoryCopy: "Choose soil, season, and crop to get suitable crops, fertilizer, and irrigation tips.",
        weatherTitle: "Weather Guide",
        weatherCopy: "Search a city and convert temperature and humidity into farming advice.",
        footerText: "Smart farming support for modern growers.",
        createAccount: "Create account",
        registerTitle: "Register with AgriGenius",
        fullName: "Full name",
        email: "Email",
        password: "Password",
        haveAccount: "Already have an account?",
        welcomeBack: "Welcome back",
        loginTitle: "Login to your dashboard",
        newHere: "New here?",
        logout: "Logout",
        dashboardEyebrow: "Smart farming workspace",
        dashboardTitle: "Your AgriGenius Dashboard",
        dashboardCopy: "Use plant diagnosis, advisory, and weather guidance from one responsive workspace.",
        database: "Database",
        secure: "Secure",
        uploadCopy: "Upload a plant image or describe symptoms for clear disease and prevention guidance.",
        chooseImage: "Choose plant image",
        detectDisease: "Detect disease",
        advisoryFormCopy: "Ask in chat using soil, season, and crop details.",
        soilType: "Soil type",
        season: "Season",
        crop: "Crop",
        getAdvice: "Get advice",
        weatherFormCopy: "Check current conditions and farming advice.",
        city: "City",
        checkWeather: "Check weather",
        diseaseName: "Disease",
        treatment: "Treatment",
        confidence: "Confidence",
        suitableCrops: "Suitable crops",
        fertilizers: "Fertilizers",
        irrigationTips: "Irrigation tips",
        temperature: "Temperature",
        humidity: "Humidity",
        farmingAdvice: "Farming advice",
        loading: "Working...",
        registrationSuccess: "Registration successful. Opening dashboard...",
        loginSuccess: "Login successful. Opening dashboard..."
    },
    te: {
        login: "లాగిన్",
        register: "నమోదు",
        homeEyebrow: "AI ఆధారిత పంట సంరక్షణ",
        homeTitle: "అగ్రిజీనియస్",
        homeCopy: "మొక్కల వ్యాధిని గుర్తించండి, పంట సలహా పొందండి, వాతావరణాన్ని పనికొచ్చే వ్యవసాయ నిర్ణయాలుగా మార్చండి.",
        startNow: "ప్రారంభించండి",
        smartTools: "స్మార్ట్ సాధనాలు",
        fieldSupport: "క్షేత్ర సహాయం",
        languages: "భాషలు",
        featuresEyebrow: "ఒకే డ్యాష్‌బోర్డ్",
        featuresTitle: "తక్కువ అంచనాలతో మెరుగైన పంట నిర్ణయాలు",
        diseaseTitle: "మొక్కల వ్యాధి గుర్తింపు",
        diseaseCopy: "ఆకు ఫోటోను అప్‌లోడ్ చేసి, ప్రివ్యూ చూసి, చికిత్స సూచనలతో వ్యాధి వివరాలు పొందండి.",
        advisoryTitle: "AI సలహా",
        advisoryCopy: "నేల, సీజన్, పంటను ఎంచుకుని సరైన పంటలు, ఎరువులు, నీటి సూచనలు పొందండి.",
        weatherTitle: "వాతావరణ మార్గదర్శి",
        weatherCopy: "నగరాన్ని వెతికి ఉష్ణోగ్రత, తేమ ఆధారంగా వ్యవసాయ సలహా పొందండి.",
        footerText: "ఆధునిక రైతుల కోసం స్మార్ట్ వ్యవసాయ సహాయం.",
        createAccount: "ఖాతా సృష్టించండి",
        registerTitle: "అగ్రిజీనియస్‌లో నమోదు",
        fullName: "పూర్తి పేరు",
        email: "ఇమెయిల్",
        password: "పాస్‌వర్డ్",
        haveAccount: "ఇప్పటికే ఖాతా ఉందా?",
        welcomeBack: "తిరిగి స్వాగతం",
        loginTitle: "మీ డ్యాష్‌బోర్డ్‌కు లాగిన్ అవ్వండి",
        newHere: "ఇక్కడ కొత్తవారా?",
        logout: "లాగౌట్",
        dashboardEyebrow: "స్మార్ట్ వ్యవసాయ వర్క్‌స్పేస్",
        dashboardTitle: "మీ అగ్రిజీనియస్ డ్యాష్‌బోర్డ్",
        dashboardCopy: "మొక్కల నిర్ధారణ, పంట సలహా, వాతావరణ మార్గదర్శకాన్ని ఒకే చోట ఉపయోగించండి.",
        database: "డేటాబేస్",
        secure: "భద్రత",
        uploadCopy: "తక్షణ మార్గదర్శకానికి మొక్క చిత్రం అప్‌లోడ్ చేయండి.",
        chooseImage: "మొక్క చిత్రం ఎంచుకోండి",
        detectDisease: "వ్యాధి గుర్తించండి",
        advisoryFormCopy: "సిఫార్సుల కోసం పొలం పరిస్థితులు ఎంచుకోండి.",
        soilType: "నేల రకం",
        season: "సీజన్",
        crop: "పంట",
        getAdvice: "సలహా పొందండి",
        weatherFormCopy: "ప్రస్తుత పరిస్థితులు మరియు వ్యవసాయ సలహా చూడండి.",
        city: "నగరం",
        checkWeather: "వాతావరణం చూడండి",
        diseaseName: "వ్యాధి",
        treatment: "చికిత్స",
        confidence: "నమ్మకం",
        suitableCrops: "అనుకూల పంటలు",
        fertilizers: "ఎరువులు",
        irrigationTips: "నీటి సూచనలు",
        temperature: "ఉష్ణోగ్రత",
        humidity: "తేమ",
        farmingAdvice: "వ్యవసాయ సలహా",
        loading: "పని జరుగుతోంది...",
        registrationSuccess: "నమోదు విజయవంతం. డ్యాష్‌బోర్డ్ తెరుచుకుంటోంది...",
        loginSuccess: "లాగిన్ విజయవంతం. డ్యాష్‌బోర్డ్ తెరుచుకుంటోంది..."
    }
};

const state = {
    lang: localStorage.getItem("agriLang") || "en"
};

document.addEventListener("DOMContentLoaded", () => {
    applyLanguage();
    bindLanguageToggle();
    bindAuthForms();
    bindDashboard();
});

function t(key) {
    return translations[state.lang][key] || translations.en[key] || key;
}

function applyLanguage() {
    document.documentElement.lang = state.lang;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
        node.textContent = t(node.dataset.i18n);
    });
    document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
        button.textContent = state.lang === "en" ? "తెలుగు" : "English";
    });
}

function bindLanguageToggle() {
    document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
        button.addEventListener("click", () => {
            state.lang = state.lang === "en" ? "te" : "en";
            localStorage.setItem("agriLang", state.lang);
            applyLanguage();
        });
    });
}

function bindAuthForms() {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");

    if (registerForm) {
        registerForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            const message = document.getElementById("registerMessage");
            setMessage(message, t("loading"));
            const payload = Object.fromEntries(new FormData(registerForm).entries());

            try {
                const data = await apiFetch("/api/auth/register", {
                    method: "POST",
                    body: JSON.stringify(payload)
                }, false);
                saveSession(data);
                setMessage(message, t("registrationSuccess"));
                window.setTimeout(() => window.location.href = "dashboard.html", 650);
            } catch (error) {
                setMessage(message, error.message, true);
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            const message = document.getElementById("loginMessage");
            setMessage(message, t("loading"));
            const payload = Object.fromEntries(new FormData(loginForm).entries());

            try {
                const data = await apiFetch("/api/auth/login", {
                    method: "POST",
                    body: JSON.stringify(payload)
                }, false);
                saveSession(data);
                setMessage(message, t("loginSuccess"));
                window.setTimeout(() => window.location.href = "dashboard.html", 650);
            } catch (error) {
                setMessage(message, error.message, true);
            }
        });
    }
}

function bindDashboard() {
    const dashboard = document.querySelector(".dashboard-page");
    if (!dashboard) {
        return;
    }

    const token = localStorage.getItem("agriToken");
    if (!token) {
        window.location.href = "login.html";
        return;
    }

    const name = localStorage.getItem("agriName") || "Farmer";
    const chip = document.getElementById("userChip");
    if (chip) {
        chip.textContent = name;
    }

    document.getElementById("logoutBtn")?.addEventListener("click", () => {
        localStorage.removeItem("agriToken");
        localStorage.removeItem("agriName");
        localStorage.removeItem("agriEmail");
        window.location.href = "index.html";
    });

    bindDiseaseTool();
    bindAdvisoryTool();
    bindWeatherTool();
}

function bindDiseaseTool() {
    const imageInput = document.getElementById("plantImage");
    const preview = document.getElementById("imagePreview");
    const form = document.getElementById("diseaseForm");
    const result = document.getElementById("diseaseResult");
    const symptomForm = document.getElementById("symptomForm");
    const symptomChat = document.getElementById("symptomChat");

    imageInput?.addEventListener("change", () => {
        const file = imageInput.files?.[0];
        if (!file) {
            preview.classList.remove("active");
            return;
        }
        preview.src = URL.createObjectURL(file);
        preview.classList.add("active");
    });

    form?.addEventListener("submit", async (event) => {
        event.preventDefault();
        showResult(result, `<p>${t("loading")}</p>`);

        try {
            const body = new FormData(form);
            const data = await apiFetch("/api/disease/detect", {
                method: "POST",
                body
            });
            showResult(result, renderDiseaseAnswer(data));
        } catch (error) {
            showResult(result, `<p>${escapeHtml(error.message)}</p>`);
        }
    });

    symptomForm?.addEventListener("submit", async (event) => {
        event.preventDefault();
        const input = symptomForm.elements.symptoms;
        const symptoms = input.value.trim();
        if (!symptoms) {
            return;
        }

        appendChat(symptomChat, symptoms, "user");
        input.value = "";
        const loading = appendChat(symptomChat, t("loading"), "bot");

        try {
            const data = await apiFetch("/api/disease/symptoms", {
                method: "POST",
                body: JSON.stringify({ symptoms })
            });
            loading.innerHTML = renderDiseaseAnswer(data);
        } catch (error) {
            loading.textContent = error.message;
        }
    });
}

function bindAdvisoryTool() {
    const form = document.getElementById("advisoryChatForm");
    const chat = document.getElementById("advisoryChat");

    form?.addEventListener("submit", async (event) => {
        event.preventDefault();
        const input = form.elements.message;
        const message = input.value.trim();
        if (!message) {
            return;
        }

        appendChat(chat, message, "user");
        input.value = "";
        await requestAdvisoryFromChat(message, chat);
    });

    document.querySelectorAll("[data-advisory-prompt]").forEach((button) => {
        button.addEventListener("click", async () => {
            const message = button.dataset.advisoryPrompt;
            appendChat(chat, message, "user");
            await requestAdvisoryFromChat(message, chat);
        });
    });
}

function bindWeatherTool() {
    const form = document.getElementById("weatherForm");
    const result = document.getElementById("weatherResult");

    form?.addEventListener("submit", async (event) => {
        event.preventDefault();
        showResult(result, `<p>${t("loading")}</p>`);
        const city = new FormData(form).get("city");

        try {
            const data = await apiFetch(`/api/weather?city=${encodeURIComponent(city)}`, {
                method: "GET"
            });
            showResult(result, `
                <h3>${escapeHtml(data.city)}</h3>
                <p><strong>${t("temperature")}:</strong> ${Number(data.temperature).toFixed(1)}°C</p>
                <p><strong>${t("humidity")}:</strong> ${data.humidity}%</p>
                <p><strong>${t("farmingAdvice")}:</strong> ${escapeHtml(data.advice)}</p>
            `);
        } catch (error) {
            showResult(result, `<p>${escapeHtml(error.message)}</p>`);
        }
    });
}

async function requestAdvisoryFromChat(message, chat) {
    const loading = appendChat(chat, t("loading"), "bot");
    const payload = parseAdvisoryMessage(message);

    if (!payload) {
        loading.innerHTML = `
            <h3>Need field details</h3>
            <p>Please include soil type, season, and crop in one message.</p>
            <ul>
                <li>Soil: black, red, alluvial, or sandy</li>
                <li>Season: kharif, rabi, or summer</li>
                <li>Crop: rice, cotton, wheat, groundnut, tomato, or watermelon</li>
            </ul>
        `;
        return;
    }

    try {
        const data = await apiFetch("/api/advisory", {
            method: "POST",
            body: JSON.stringify(payload)
        });
        loading.innerHTML = renderAdvisoryAnswer(payload, data);
    } catch (error) {
        loading.textContent = error.message;
    }
}

function parseAdvisoryMessage(message) {
    const text = message.toLowerCase();
    const soilType = pickValue(text, ["black", "red", "alluvial", "sandy"]);
    const season = pickValue(text, ["kharif", "rabi", "summer"]);
    const crop = pickValue(text, ["rice", "cotton", "wheat", "groundnut", "tomato", "watermelon"]);

    if (!soilType || !season || !crop) {
        return null;
    }

    return {
        soilType: titleCase(soilType),
        season: titleCase(season),
        crop: titleCase(crop)
    };
}

function pickValue(text, values) {
    return values.find((value) => text.includes(value));
}

function renderAdvisoryAnswer(payload, data) {
    return `
        <h3>${escapeHtml(payload.crop)} plan for ${escapeHtml(payload.soilType)} soil</h3>
        <p><strong>Field:</strong> ${escapeHtml(payload.soilType)} soil, ${escapeHtml(payload.season)} season, ${escapeHtml(payload.crop)} crop.</p>
        <ul>
            <li><strong>${t("suitableCrops")}:</strong> ${escapeHtml(data.suitableCrops)}</li>
            <li><strong>${t("fertilizers")}:</strong> ${escapeHtml(data.fertilizers)}</li>
            <li><strong>${t("irrigationTips")}:</strong> ${escapeHtml(data.irrigationTips)}</li>
        </ul>
    `;
}

function renderDiseaseAnswer(data) {
    return `
        <h3>${escapeHtml(data.diseaseName)}</h3>
        <p><strong>${t("confidence")}:</strong> ${Math.round(data.confidence * 100)}%</p>
        <p><strong>Disease and prevention:</strong></p>
        <ul>${sentenceItems(data.treatment)}</ul>
    `;
}

function sentenceItems(text) {
    return String(text)
        .split(/(?<=\.)\s+/)
        .filter(Boolean)
        .map((sentence) => `<li>${escapeHtml(sentence)}</li>`)
        .join("");
}

function appendChat(container, content, role) {
    const message = document.createElement("div");
    message.className = `chat-message ${role}`;
    message.textContent = content;
    container?.appendChild(message);
    if (container) {
        container.scrollTop = container.scrollHeight;
    }
    return message;
}

function titleCase(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

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
    const text = await response.text();
    const data = text ? JSON.parse(text) : {};

    if (!response.ok) {
        if (response.status === 401 && withAuth) {
            localStorage.removeItem("agriToken");
        }
        throw new Error(data.message || "Request failed");
    }
    return data;
}

function saveSession(data) {
    localStorage.setItem("agriToken", data.token);
    localStorage.setItem("agriName", data.fullName);
    localStorage.setItem("agriEmail", data.email);
}

function setMessage(node, text, isError = false) {
    if (!node) {
        return;
    }
    node.textContent = text;
    node.classList.toggle("error", isError);
}

function showResult(node, html) {
    if (!node) {
        return;
    }
    node.innerHTML = html;
    node.classList.add("active");
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}
