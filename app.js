// Application State
let appState = {
    currentScenario: null,
    currentScenarioIndex: 0,
    scenarioList: [],
    escalationLevel: 0,
    currentProgressionStep: 0,
    userResponses: [],
    feedback: [],
    scenariosCompleted: [],
    trainingInProgress: false
};

// Initialize application on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('App initialized');
});

// Show/Hide screens
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show selected screen
    const selectedScreen = document.getElementById(screenId);
    if (selectedScreen) {
        selectedScreen.classList.add('active');
    }
}

// Start training
function startTraining() {
    appState.scenarioList = scenarios.slice(); // Copy all scenarios
    appState.trainingInProgress = true;
    appState.currentScenarioIndex = 0;
    appState.scenariosCompleted = [];
    
    loadScenario();
}

// Load a scenario
function loadScenario() {
    if (appState.currentScenarioIndex >= appState.scenarioList.length) {
        showResults();
        return;
    }
    
    appState.currentScenario = appState.scenarioList[appState.currentScenarioIndex];
    appState.escalationLevel = appState.currentScenario.initialEscalation;
    appState.currentProgressionStep = 0;
    appState.userResponses = [];
    
    showScreen('scenarioScreen');
    displayScenario();
}

// Display scenario content
function displayScenario() {
    const scenario = appState.currentScenario;
    
    // Update header
    document.getElementById('scenarioTitle').textContent = scenario.title;
    document.getElementById('scenarioNumber').textContent = appState.currentScenarioIndex + 1;
    document.getElementById('scenarioTotal').textContent = appState.scenarioList.length;
    
    // Clear previous dialogue
    document.getElementById('dialogueMessages').innerHTML = '';
    
    // Add scenario situation
    addDialogueMessage('situation', scenario.situation);
    
    // Update escalation bar
    updateEscalationBar();
    
    // Show user response input
    document.getElementById('userResponse').value = '';
    document.getElementById('userResponse').parentElement.style.display = 'block';
    document.querySelector('.response-input .btn-primary').style.display = 'block';
    
    // Hide feedback box
    document.getElementById('feedbackBox').classList.add('hidden');
}

// Add message to dialogue
function addDialogueMessage(type, text) {
    const messagesDiv = document.getElementById('dialogueMessages');
    const messageEl = document.createElement('div');
    messageEl.className = 'message';
    
    if (type === 'situation') {
        messageEl.classList.add('system');
        messageEl.textContent = '📋 ' + text;
    } else if (type === 'student') {
        messageEl.classList.add('student');
        messageEl.textContent = '👤 Student: ' + text;
    } else if (type === 'staff') {
        messageEl.classList.add('staff');
        messageEl.textContent = '👨‍🏫 You: ' + text;
    } else if (type === 'system') {
        messageEl.classList.add('system');
        messageEl.textContent = text;
    }
    
    messagesDiv.appendChild(messageEl);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Update escalation bar
function updateEscalationBar() {
    const percentage = Math.min(100, Math.max(0, appState.escalationLevel));
    document.getElementById('escalationBar').style.width = percentage + '%';
}

// Submit user response
function submitResponse() {
    const userResponse = document.getElementById('userResponse').value.trim();
    
    if (!userResponse) {
        alert('Please enter a response');
        return;
    }
    
    // Hide input
    document.getElementById('userResponse').parentElement.style.display = 'none';
    document.querySelector('.response-input .btn-primary').style.display = 'none';
    
    // Add user's response to dialogue
    addDialogueMessage('staff', userResponse);
    
    // Evaluate response
    const evaluation = evaluateResponse(userResponse, appState.currentScenario);
    appState.userResponses.push({
        response: userResponse,
        evaluation: evaluation
    });
    
    // Update escalation level
    appState.escalationLevel += evaluation.escalationIncrease;
    appState.escalationLevel = Math.max(0, Math.min(100, appState.escalationLevel));
    updateEscalationBar();
    
    // Add a brief pause, then show student's next response
    setTimeout(() => {
        showNextProgression(evaluation);
    }, 1500);
}

// Show next progression step
function showNextProgression(evaluation) {
    const scenario = appState.currentScenario;
    
    // Determine if scenario escalates or de-escalates
    if (appState.escalationLevel <= 20) {
        // Scenario resolved - student calms down
        showFeedback(evaluation, true);
    } else if (appState.escalationLevel >= 85) {
        // Scenario escalated - student becomes aggressive
        showFeedback(evaluation, false);
    } else if (appState.currentProgressionStep < scenario.progression.length - 1) {
        // Continue progression
        appState.currentProgressionStep++;
        const nextMessage = scenario.progression[appState.currentProgressionStep];
        
        setTimeout(() => {
            addDialogueMessage('student', nextMessage.text);
            appState.escalationLevel = nextMessage.escalation;
            updateEscalationBar();
            
            // Show input again
            document.getElementById('userResponse').value = '';
            document.getElementById('userResponse').parentElement.style.display = 'block';
            document.querySelector('.response-input .btn-primary').style.display = 'block';
        }, 500);
    } else {
        // Last progression - determine outcome
        showFeedback(evaluation, evaluation.isEffective);
    }
}

// Show feedback
function showFeedback(evaluation, isCalmed) {
    const scenario = appState.currentScenario;
    const feedbackBox = document.getElementById('feedbackBox');
    const feedbackContent = document.getElementById('feedbackContent');
    const feedbackTitle = document.getElementById('feedbackTitle');
    
    // Clear previous feedback
    feedbackContent.innerHTML = '';
    
    // Add outcome message
    if (isCalmed) {
        feedbackTitle.textContent = '✓ Successful De-escalation';
        feedbackBox.classList.add('positive');
        feedbackBox.classList.remove('negative');
        
        addDialogueMessage('outcome', '✓ Student has calmed down. De-escalation was successful!');
        feedbackContent.innerHTML += `<p><strong>Outcome:</strong> ${scenario.calmOutcome}</p>`;
    } else {
        feedbackTitle.textContent = '✗ Escalation Occurred';
        feedbackBox.classList.add('negative');
        feedbackBox.classList.remove('positive');
        
        addDialogueMessage('outcome negative', '✗ The situation escalated to physical aggression. De-escalation was unsuccessful.');
        feedbackContent.innerHTML += `<p><strong>Outcome:</strong> ${scenario.aggressiveOutcome}</p>`;
    }
    
    // Add evaluation feedback
    if (evaluation.feedback.length > 0 || evaluation.techniques.length > 0) {
        feedbackContent.innerHTML += '<div class="feedback-section">';
        
        // Positive feedback
        if (evaluation.techniques.length > 0) {
            feedbackContent.innerHTML += '<h4>What You Did Well:</h4>';
            evaluation.techniques.forEach(technique => {
                feedbackContent.innerHTML += `<div class="feedback-item positive">${technique}</div>`;
            });
        }
        
        // Areas to improve
        if (evaluation.feedback.length > 0) {
            feedbackContent.innerHTML += '<h4>Areas to Improve:</h4>';
            evaluation.feedback.forEach(item => {
                feedbackContent.innerHTML += `<div class="feedback-item negative">${item}</div>`;
            });
        }
        
        feedbackContent.innerHTML += '</div>';
    }
    
    // Add best practices
    feedbackContent.innerHTML += '<div class="feedback-section">';
    feedbackContent.innerHTML += '<h4>💡 Best Practices for This Scenario:</h4>';
    scenario.bestPractices.forEach(practice => {
        feedbackContent.innerHTML += `<div class="feedback-item tip">• ${practice}</div>`;
    });
    feedbackContent.innerHTML += '</div>';
    
    // Store completed scenario
    appState.scenariosCompleted.push({
        scenario: scenario.title,
        successful: isCalmed,
        score: evaluation.score,
        escalationLevel: appState.escalationLevel
    });
    
    // Show feedback box
    feedbackBox.classList.remove('hidden');
}

// Next scenario
function nextScenario() {
    appState.currentScenarioIndex++;
    loadScenario();
}

// Show results
function showResults() {
    showScreen('resultsScreen');
    
    const resultsContent = document.getElementById('resultsContent');
    const completed = appState.scenariosCompleted;
    const successful = completed.filter(s => s.successful).length;
    const avgScore = Math.round(completed.reduce((sum, s) => sum + s.score, 0) / completed.length);
    
    let html = `<div class="results-stats">`;
    html += `<div class="stat-card">`;
    html += `<div class="stat-number">${successful}/${completed.length}</div>`;
    html += `<div class="stat-label">Scenarios Successful</div>`;
    html += `</div>`;
    
    html += `<div class="stat-card">`;
    html += `<div class="stat-number">${avgScore}%</div>`;
    html += `<div class="stat-label">Average Score</div>`;
    html += `</div>`;
    
    html += `<div class="stat-card">`;
    html += `<div class="stat-number">${completed.length}</div>`;
    html += `<div class="stat-label">Scenarios Completed</div>`;
    html += `</div>`;
    html += `</div>`;
    
    // Scenario breakdown
    html += `<h3>Scenario Breakdown:</h3>`;
    html += `<div style="margin: 20px 0;">`;
    completed.forEach((scenario, index) => {
        const status = scenario.successful ? '✓' : '✗';
        const statusClass = scenario.successful ? 'positive' : 'negative';
        html += `<div class="feedback-item ${statusClass}">`;
        html += `${status} ${scenario.scenario} - Score: ${scenario.score}%`;
        html += `</div>`;
    });
    html += `</div>`;
    
    // Recommendations
    html += `<h3>Key Takeaways:</h3>`;
    html += `<div class="feedback-item tip">`;
    html += `• Focus on validation and empathy first`;
    html += `</div>`;
    html += `<div class="feedback-item tip">`;
    html += `• Use open-ended questions to understand the real issue`;
    html += `</div>`;
    html += `<div class="feedback-item tip">`;
    html += `• Maintain a calm tone regardless of student behavior`;
    html += `</div>`;
    html += `<div class="feedback-item tip">`;
    html += `• Avoid power struggles - offer choices instead`;
    html += `</div>`;
    html += `<div class="feedback-item tip">`;
    html += `• Practice these techniques regularly for better results`;
    html += `</div>`;
    
    resultsContent.innerHTML = html;
}

// Utility function to show/hide specific tips
function updateTips(scenario) {
    const tipsList = document.getElementById('tipsList');
    tipsList.innerHTML = '';
    
    const tips = [
        'Use a calm, respectful tone',
        'Maintain non-threatening body language',
        'Listen actively and show empathy',
        'Avoid arguing or being defensive',
        'Give the person space and choices'
    ];
    
    tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });
}
