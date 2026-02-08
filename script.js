// Vokabeldaten
const vocabulary = {
    grundnahrungsmittel: ['Brot', 'Reis', 'Nudeln', 'Käse', 'Ei', 'Fleisch', 'Fisch', 'Suppe'],
    obst: ['Apfel', 'Banane', 'Orange', 'Erdbeere', 'Traube', 'Wassermelone', 'Ananas'],
    gemüse: ['Karotte', 'Tomate', 'Kartoffel', 'Zwiebel', 'Salat', 'Brokkoli', 'Pilz'],
    süßigkeitenGetränke: ['Kuchen', 'Schokolade', 'Eis', 'Saft', 'Kaffee', 'Tee', 'Wasser']
};

// Testfragen
const quizQuestions = [
    // Kategorie 1: Wähle die richtige Übersetzung
    {
        question: "Wie sagt man 'хлеб' auf Deutsch?",
        options: ["Brot", "Reis", "Käse", "Fleisch"],
        correctIndex: 0,
        type: "choose"
    },
    {
        question: "Wie sagt man 'яблоко' auf Deutsch?",
        options: ["Banane", "Orange", "Apfel", "Erdbeere"],
        correctIndex: 2,
        type: "choose"
    },
    {
        question: "Wie sagt man 'сыр' auf Deutsch?",
        options: ["Ei", "Fleisch", "Käse", "Fisch"],
        correctIndex: 2,
        type: "choose"
    },
    {
        question: "Wie sagt man 'вода' auf Deutsch?",
        options: ["Saft", "Kaffee", "Tee", "Wasser"],
        correctIndex: 3,
        type: "choose"
    },
    {
        question: "Wie sagt man 'кофе' auf Deutsch?",
        options: ["Tee", "Saft", "Kaffee", "Wasser"],
        correctIndex: 2,
        type: "choose"
    },
    {
        question: "Wie sagt man 'мясо' auf Deutsch?",
        options: ["Fisch", "Ei", "Fleisch", "Käse"],
        correctIndex: 2,
        type: "choose"
    },
    {
        question: "Wie sagt man 'чай' auf Deutsch?",
        options: ["Kaffee", "Tee", "Saft", "Wasser"],
        correctIndex: 1,
        type: "choose"
    },
    {
        question: "Wie sagt man 'торт' auf Deutsch?",
        options: ["Schokolade", "Eis", "Kuchen", "Kekse"],
        correctIndex: 2,
        type: "choose"
    },
    
    // Kategorie 2: Was ist das für ein Wort?
    {
        question: "Apfel - was ist das?",
        options: ["Gemüse", "Obst", "Getränk", "Fleisch"],
        correctIndex: 1,
        type: "category"
    },
    {
        question: "Karotte - was ist das?",
        options: ["Obst", "Gemüse", "Süßigkeit", "Getränk"],
        correctIndex: 1,
        type: "category"
    },
    {
        question: "Schokolade - was ist das?",
        options: ["Gemüse", "Obst", "Süßigkeit", "Getränk"],
        correctIndex: 2,
        type: "category"
    },
    {
        question: "Kaffee - was ist das?",
        options: ["Essen", "Obst", "Gemüse", "Getränk"],
        correctIndex: 3,
        type: "category"
    },
    {
        question: "Fisch - was ist das?",
        options: ["Gemüse", "Obst", "Fleisch/Fisch", "Getränk"],
        correctIndex: 2,
        type: "category"
    },
    {
        question: "Kuchen - was ist das?",
        options: ["Grundnahrungsmittel", "Gemüse", "Süßigkeit", "Getränk"],
        correctIndex: 2,
        type: "category"
    },
    {
        question: "Tee - was ist das?",
        options: ["Essen", "Obst", "Gemüse", "Getränk"],
        correctIndex: 3,
        type: "category"
    },
    
    // Kategorie 3: Wähle das falsche Wort
    {
        question: "Welches Wort passt nicht?",
        options: ["Apfel", "Banane", "Karotte", "Orange"],
        correctIndex: 2,
        type: "category"
    },
    {
        question: "Welches Wort passt nicht?",
        options: ["Kaffee", "Tee", "Saft", "Käse"],
        correctIndex: 3,
        type: "category"
    },
    {
        question: "Welches Wort passt nicht?",
        options: ["Brot", "Reis", "Nudeln", "Wassermelone"],
        correctIndex: 3,
        type: "category"
    },
    {
        question: "Welches Wort passt nicht?",
        options: ["Karotte", "Tomate", "Kartoffel", "Schokolade"],
        correctIndex: 3,
        type: "category"
    },
    {
        question: "Welches Wort passt nicht?",
        options: ["Kuchen", "Eis", "Schokolade", "Fleisch"],
        correctIndex: 3,
        type: "category"
    },
    
    // Kategorie 4: Einfache Situationen
    {
        question: "Was isst du zum Frühstück?",
        options: ["Brot", "Suppe", "Kuchen", "Eis"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Was trinkst du morgens?",
        options: ["Kaffee", "Suppe", "Eis", "Fleisch"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Was ist süß?",
        options: ["Schokolade", "Reis", "Fleisch", "Fisch"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Was wächst auf einem Baum?",
        options: ["Apfel", "Karotte", "Kartoffel", "Reis"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Was isst du im Salat?",
        options: ["Tomate", "Schokolade", "Kuchen", "Kaffee"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Was ist kalt und süß?",
        options: ["Eis", "Suppe", "Reis", "Brot"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Welches ist Obst?",
        options: ["Banane", "Karotte", "Kartoffel", "Brot"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Welches ist Gemüse?",
        options: ["Kartoffel", "Apfel", "Banane", "Orange"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Was kann man trinken?",
        options: ["Wasser", "Brot", "Fleisch", "Käse"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Was wird aus Milch gemacht?",
        options: ["Käse", "Fleisch", "Fisch", "Brot"],
        correctIndex: 0,
        type: "situation"
    }
];

// Spielstatus
const gameState = {
    currentScreen: 'vocabulary',
    currentQuestionIndex: 0,
    score: 0,
    userAnswers: [],
    quizStarted: false
};

// DOM Elemente
const screens = {
    vocabulary: document.getElementById('vocabulary-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen')
};

const startQuizBtn = document.getElementById('start-quiz-btn');
const nextQuestionBtn = document.getElementById('next-question-btn');
const restartQuizBtn = document.getElementById('restart-quiz-btn');
const backToVocabBtn = document.getElementById('back-to-vocab-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const scoreDisplay = document.getElementById('score');
const currentQuestionDisplay = document.getElementById('current-question');
const progressFill = document.getElementById('progress-fill');
const resultsMessage = document.getElementById('results-message');
const correctCountDisplay = document.getElementById('correct-count');
const incorrectCountDisplay = document.getElementById('incorrect-count');
const percentageDisplay = document.getElementById('percentage');
const circleScoreText = document.getElementById('circle-score-text');
const scoreCircle = document.getElementById('score-circle');

// Spiel initialisieren
function initGame() {
    // Event-Listener einrichten
    startQuizBtn.addEventListener('click', startQuiz);
    nextQuestionBtn.addEventListener('click', showNextQuestion);
    restartQuizBtn.addEventListener('click', restartQuiz);
    backToVocabBtn.addEventListener('click', showVocabularyScreen);
    
    // Startbildschirm anzeigen
    showScreen('vocabulary');
    
    console.log("Deutsch Vokabelspiel 'Essen' initialisiert!");
}

// Bestimmten Bildschirm anzeigen
function showScreen(screenName) {
    // Alle Bildschirme ausblenden
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Angefragten Bildschirm anzeigen
    screens[screenName].classList.add('active');
    gameState.currentScreen = screenName;
    
    // UI basierend auf Bildschirm aktualisieren
    if (screenName === 'quiz') {
        updateQuizUI();
    } else if (screenName === 'results') {
        showResults();
    }
}

// Test starten
function startQuiz() {
    // Spielstatus zurücksetzen
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    gameState.userAnswers = [];
    gameState.quizStarted = true;
    
    // UI aktualisieren
    scoreDisplay.textContent = '0';
    currentQuestionDisplay.textContent = '1';
    progressFill.style.width = '0%';
    
    // Testbildschirm anzeigen
    showScreen('quiz');
    
    // Erste Frage anzeigen
    displayQuestion();
}

// Aktuelle Frage anzeigen
function displayQuestion() {
    if (gameState.currentQuestionIndex >= quizQuestions.length) {
        showScreen('results');
        return;
    }
    
    const question = quizQuestions[gameState.currentQuestionIndex];
    
    // Fragetext aktualisieren
    questionText.textContent = question.question;
    
    // Optionscontainer leeren
    optionsContainer.innerHTML = '';
    
    // Optionsbuttons erstellen
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        button.dataset.index = index;
        
        button.addEventListener('click', () => selectAnswer(index));
        
        optionsContainer.appendChild(button);
    });
    
    // Fortschritt aktualisieren
    currentQuestionDisplay.textContent = gameState.currentQuestionIndex + 1;
    const progressPercent = (gameState.currentQuestionIndex / quizQuestions.length) * 100;
    progressFill.style.width = `${progressPercent}%`;
    
    // "Nächste Frage"-Button deaktivieren, bis Antwort gewählt
    nextQuestionBtn.disabled = true;
}

// Antwortauswahl verarbeiten
function selectAnswer(selectedIndex) {
    const question = quizQuestions[gameState.currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');
    const selectedButton = buttons[selectedIndex];
    const correctButton = buttons[question.correctIndex];
    
    // Alle Buttons deaktivieren
    buttons.forEach(button => {
        button.disabled = true;
    });
    
    // Richtige/falsche Antworten markieren
    if (selectedIndex === question.correctIndex) {
        selectedButton.classList.add('correct');
        gameState.score++;
        scoreDisplay.textContent = gameState.score;
        
        // Puls-Animation zum Punktestand hinzufügen
        scoreDisplay.parentElement.classList.add('pulse');
        setTimeout(() => {
            scoreDisplay.parentElement.classList.remove('pulse');
        }, 500);
    } else {
        selectedButton.classList.add('wrong');
        correctButton.classList.add('correct');
    }
    
    // Benutzerantwort speichern
    gameState.userAnswers.push({
        questionIndex: gameState.currentQuestionIndex,
        selectedIndex: selectedIndex,
        isCorrect: selectedIndex === question.correctIndex
    });
    
    // "Nächste Frage"-Button aktivieren
    nextQuestionBtn.disabled = false;
}

// Nächste Frage anzeigen
function showNextQuestion() {
    gameState.currentQuestionIndex++;
    
    if (gameState.currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        showScreen('results');
    }
}

// Ergebnisbildschirm anzeigen
function showResults() {
    // Endstatistik berechnen
    const totalQuestions = quizQuestions.length;
    const correctCount = gameState.score;
    const incorrectCount = totalQuestions - correctCount;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    
    // Ergebnis-UI aktualisieren
    correctCountDisplay.textContent = correctCount;
    incorrectCountDisplay.textContent = incorrectCount;
    percentageDisplay.textContent = percentage;
    circleScoreText.textContent = correctCount;
    
    // Ergebnis-Kreis animieren
    const circleCircumference = 2 * Math.PI * 54; // r = 54
    const offset = circleCircumference - (correctCount / totalQuestions) * circleCircumference;
    scoreCircle.style.strokeDashoffset = offset;
    
    // Endzustand der Fortschrittsleiste setzen
    progressFill.style.width = '100%';
    
    // Passende Nachricht basierend auf Ergebnis anzeigen
    let message = '';
    if (percentage >= 90) {
        message = "Ausgezeichnet! Du kennst die Vokabeln zum Thema 'Essen' perfekt!";
    } else if (percentage >= 70) {
        message = "Gute Arbeit! Du kennst die Wörter zum Thema Essen gut.";
    } else if (percentage >= 50) {
        message = "Nicht schlecht! Übe weiter, um dein Ergebnis zu verbessern.";
    } else {
        message = "Lerne weiter! Wiederhole die Vokabeln und versuche es noch einmal.";
    }
    
    resultsMessage.textContent = message;
}

// Test neu starten
function restartQuiz() {
    startQuiz();
}

// Vokabelbildschirm anzeigen
function showVocabularyScreen() {
    showScreen('vocabulary');
}

// Test-UI-Elemente aktualisieren
function updateQuizUI() {
    // Derzeit nichts benötigt
}

// Spiel initialisieren, wenn DOM geladen ist
document.addEventListener('DOMContentLoaded', initGame);
