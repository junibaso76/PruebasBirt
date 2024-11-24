'use strict'
document.addEventListener("DOMContentLoaded", () => {
    // Cargar usuarios en LocalStorage
    const users = [
        { usuario: "player1", password: "password123" },
        { usuario: "player2", password: "secure456" },
        { usuario: "admin", password: "admin789" }
    ];
    localStorage.setItem("users", JSON.stringify(users));

    // Validación de Login
    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const storedUsers = JSON.parse(localStorage.getItem("users"));

        const isValidUser = storedUsers.some(
            (user) =>
                user.usuario === username &&
                user.password === password &&
                /^[a-zA-Z0-9]+$/.test(password) // Validar contraseña alfanumérica
        );

        if (isValidUser) {
            loginMessage.textContent = "";
            redirect("welcome");
        } else {
            loginMessage.textContent = "Usuario o contraseña incorrectos o formato no válido.";
        }
    });

    // Temporizador del Juego
    let timer;
    function startTimer(duration, display) {
        let time = duration;
        timer = setInterval(() => {
            display.textContent = time;
            if (time-- <= 0) {
                clearInterval(timer);
                redirect("login");
            }
        }, 1000);
    }

    // Cambiar entre pantallas
    function redirect(screenId) {
        document.querySelectorAll(".screen").forEach((screen) => {
            screen.classList.add("hidden");
        });
        document.getElementById(screenId).classList.remove("hidden");

        if (screenId === "game") {
            const timerDisplay = document.getElementById("timer");
            startTimer(100, timerDisplay);
        }
    }
});

