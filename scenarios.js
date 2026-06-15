// School-based scenarios for verbal de-escalation training
const scenarios = [
    {
        id: 1,
        title: "Refusing to Follow Instructions",
        situation: "During independent work time, you ask Jordan to sit down and complete the assignment. He refuses and says 'I'm not doing this. You can't make me.'",
        initialEscalation: 30,
        studentResponses: [
            {
                trigger: "you",
                good: [
                    "i understand",
                    "i hear you",
                    "tell me what's wrong",
                    "what's going on",
                    "i want to help",
                    "let's talk about this",
                    "take a breath",
                    "i respect you",
                    "your feelings matter",
                    "what do you need"
                ],
                bad: [
                    "you have to",
                    "do it now",
                    "sit down",
                    "stop being difficult",
                    "that's not acceptable",
                    "don't talk to me like that",
                    "you'll regret it",
                    "that's disrespectful",
                    "i don't care",
                    "detention"
                ],
                neutral: ["ok", "alright", "fine", "whatever", "sure"]
            }
        ],
        progression: [
            {
                escalation: 30,
                text: "I'm not doing this. You can't make me!",
                speaker: "student"
            },
            {
                escalation: 45,
                text: "This is stupid anyway. Why would I listen to you?",
                speaker: "student"
            },
            {
                escalation: 60,
                text: "You always pick on me! Everyone hates this class!",
                speaker: "student"
            },
            {
                escalation: 75,
                text: "I'm leaving this stupid school!",
                speaker: "student"
            }
        ],
        calmOutcome: "Thank you for talking with me. I see you're frustrated. Let's figure this out together. Would you like to take a break first?",
        aggressiveOutcome: "Jordan stands up abruptly and knocks over his desk, then storms out of the classroom.",
        bestPractices: [
            "Validate the student's feelings",
            "Use a calm, steady tone",
            "Offer choices and autonomy",
            "Listen to understand the root cause",
            "Avoid power struggles"
        ]
    },
    {
        id: 2,
        title: "Student Upset After Being Corrected",
        situation: "During math, you correct Marcus's answer. He immediately says 'Whatever, I'm stupid anyway. Everyone knows I suck at math.'",
        initialEscalation: 25,
        studentResponses: [
            {
                trigger: "you",
                good: [
                    "that's not true",
                    "you're smart",
                    "you can do this",
                    "let me help",
                    "mistakes help us learn",
                    "this is one problem",
                    "i believe in you",
                    "take your time",
                    "no one's perfect",
                    "you're capable"
                ],
                bad: [
                    "you are stupid",
                    "that's correct",
                    "stop complaining",
                    "you're being dramatic",
                    "many people find this hard",
                    "just do better",
                    "i can't help",
                    "give up then",
                    "that's life",
                    "who cares"
                ],
                neutral: ["ok", "alright", "i see", "sure", "hmm"]
            }
        ],
        progression: [
            {
                escalation: 25,
                text: "Whatever, I'm stupid anyway.",
                speaker: "student"
            },
            {
                escalation: 40,
                text: "Don't bother. I'll never be good at math. Why even try?",
                speaker: "student"
            },
            {
                escalation: 55,
                text: "You think I'm dumb too, don't you? Everyone does!",
                speaker: "student"
            },
            {
                escalation: 70,
                text: "I'm not coming to your class anymore! It's humiliating!",
                speaker: "student"
            }
        ],
        calmOutcome: "I can see this is frustrating. One mistake doesn't define your abilities. Let me show you a different way to approach this. I know you can do this.",
        aggressiveOutcome: "Marcus crumples up his paper and throws it across the room, then tells other students you're unfair.",
        bestPractices: [
            "Separate the action from the person",
            "Build confidence and hope",
            "Normalize mistakes as learning",
            "Offer specific support",
            "Maintain belief in their abilities"
        ]
    },
    {
        id: 3,
        title: "Confrontation During Transition",
        situation: "You ask the class to transition to group work. Alexis says loudly 'I'm not working with them! That's the worst group ever. This is unfair!'",
        initialEscalation: 35,
        studentResponses: [
            {
                trigger: "you",
                good: [
                    "i hear your concern",
                    "let's talk about it",
                    "what would help",
                    "i understand",
                    "tell me more",
                    "you can work with",
                    "it might go better",
                    "i'm listening",
                    "we can adjust",
                    "what's the issue"
                ],
                bad: [
                    "tough luck",
                    "just do it",
                    "stop complaining",
                    "you have no choice",
                    "that's the group",
                    "deal with it",
                    "i don't care",
                    "everyone has problems",
                    "you're being selfish",
                    "sit down now"
                ],
                neutral: ["ok", "fine", "alright", "whatever", "sure"]
            }
        ],
        progression: [
            {
                escalation: 35,
                text: "I'm not working with them! That's the worst group ever!",
                speaker: "student"
            },
            {
                escalation: 50,
                text: "This is so unfair! Why do you always do this to me?",
                speaker: "student"
            },
            {
                escalation: 65,
                text: "You don't even care about what I think! Nobody does!",
                speaker: "student"
            },
            {
                escalation: 80,
                text: "I'm done! I'm leaving this classroom!",
                speaker: "student"
            }
        ],
        calmOutcome: "I understand you have concerns about your group. Let's step outside for a moment and talk about what would help. I value your input.",
        aggressiveOutcome: "Alexis stands up angrily, pushes their chair back hard, and storms out of the room, slamming the door.",
        bestPractices: [
            "Validate concerns without agreeing/disagreeing",
            "Listen to the underlying issue",
            "Show they have a voice",
            "Offer solutions and flexibility when possible",
            "Maintain respectful boundaries"
        ]
    },
    {
        id: 4,
        title: "Student Late for Class Multiple Times",
        situation: "Kayla walks in 10 minutes late for the 3rd time this week. You pull her aside and say 'Kayla, you need to be on time.' She immediately responds 'You don't even care. No one here cares about me.'",
        initialEscalation: 40,
        studentResponses: [
            {
                trigger: "you",
                good: [
                    "i do care",
                    "tell me what's happening",
                    "i want to understand",
                    "is something going on",
                    "i'm listening",
                    "how can i help",
                    "let's figure this out",
                    "you matter to me",
                    "talk to me",
                    "what's going on"
                ],
                bad: [
                    "i don't care",
                    "the rules are clear",
                    "detention",
                    "your parents will hear",
                    "you need to do better",
                    "others manage to be on time",
                    "it's your responsibility",
                    "no excuses",
                    "you're lazy",
                    "that's a lie"
                ],
                neutral: ["ok", "alright", "sure", "fine", "i see"]
            }
        ],
        progression: [
            {
                escalation: 40,
                text: "You don't even care. No one here cares about me.",
                speaker: "student"
            },
            {
                escalation: 55,
                text: "I'm dealing with so much at home and you just treat me like I'm nothing!",
                speaker: "student"
            },
            {
                escalation: 70,
                text: "I knew it. Teachers always act like they care but they don't. I'm out!",
                speaker: "student"
            },
            {
                escalation: 85,
                text: "Don't touch me! I'm leaving!",
                speaker: "student"
            }
        ],
        calmOutcome: "I do care about you. I've noticed the pattern and I want to understand what's happening. Can we talk about what's going on at home? How can I support you?",
        aggressiveOutcome: "Kayla becomes angry and confrontational. She pushes past you to leave the classroom, nearly knocking you over in the process.",
        bestPractices: [
            "Show genuine concern",
            "Look beyond the behavior",
            "Create safe space to share",
            "Seek to understand root causes",
            "Offer support and resources"
        ]
    },
    {
        id: 5,
        title: "Peer Conflict Escalating",
        situation: "Two students, Devon and Chris, are arguing loudly about who gets which assignment role. Devon says 'You always get the easy part! This is so unfair!' You intervene and ask them to settle down.",
        initialEscalation: 45,
        studentResponses: [
            {
                trigger: "you",
                good: [
                    "let's work this out",
                    "both of you matter",
                    "i hear both sides",
                    "we can find a solution",
                    "let's talk calmly",
                    "what's fair to you",
                    "how can we compromise",
                    "i understand your frustration",
                    "take a breath",
                    "let me help"
                ],
                bad: [
                    "be quiet both of you",
                    "you're being immature",
                    "that's enough",
                    "i don't care who's right",
                    "stop now",
                    "detention for both",
                    "you're acting like children",
                    "just do the assignment",
                    "figure it out yourselves",
                    "i'm done with this"
                ],
                neutral: ["ok", "fine", "alright", "whatever", "sure"]
            }
        ],
        progression: [
            {
                escalation: 45,
                text: "You always get the easy part! This is so unfair!",
                speaker: "student"
            },
            {
                escalation: 60,
                text: "You're lying! And the teacher always takes your side!",
                speaker: "student"
            },
            {
                escalation: 75,
                text: "I'm not working with you! You can do it yourself!",
                speaker: "student"
            },
            {
                escalation: 88,
                text: "You know what? Forget this!",
                speaker: "student"
            }
        ],
        calmOutcome: "I can see you both care about this project. Let's pause and talk about what fair looks like to each of you. I'll help you find a solution together.",
        aggressiveOutcome: "Devon stands up and confronts Chris physically, pushing him and creating a classroom disruption that requires additional intervention.",
        bestPractices: [
            "Separate students if escalating",
            "Validate both perspectives",
            "Use mediative language",
            "Focus on solutions, not blame",
            "Teach negotiation skills"
        ]
    },
    {
        id: 6,
        title: "Student Frustrated with Assignment Difficulty",
        situation: "During a challenging assessment, Taylor looks visibly frustrated and says 'I can't do this. This is impossible. Why are you making us do this?'",
        initialEscalation: 35,
        studentResponses: [
            {
                trigger: "you",
                good: [
                    "let's break it down",
                    "you can do hard things",
                    "this is a challenge but",
                    "let me help you",
                    "let's start with",
                    "you're capable of",
                    "take your time",
                    "i believe in you",
                    "it's ok to struggle",
                    "we'll figure this out"
                ],
                bad: [
                    "you just aren't trying",
                    "it's not that hard",
                    "other students can do it",
                    "stop complaining",
                    "you're giving up",
                    "that's a bad attitude",
                    "you're lazy",
                    "it's too easy",
                    "you don't care",
                    "quit being dramatic"
                ],
                neutral: ["ok", "alright", "sure", "fine", "i see"]
            }
        ],
        progression: [
            {
                escalation: 35,
                text: "I can't do this. This is impossible!",
                speaker: "student"
            },
            {
                escalation: 50,
                text: "Why are you making us do this? Nobody can solve these!",
                speaker: "student"
            },
            {
                escalation: 65,
                text: "This is unfair. You don't actually care if we learn or fail!",
                speaker: "student"
            },
            {
                escalation: 80,
                text: "I'm not doing this anymore!",
                speaker: "student"
            }
        ],
        calmOutcome: "I can see this is challenging. That's actually good - it means you're learning. Let's look at this together. What part feels most confusing?",
        aggressiveOutcome: "Taylor tears up the paper, throws it on the ground, and says 'I'm done with school!' Then walks out of the classroom.",
        bestPractices: [
            "Normalize struggle as part of learning",
            "Offer scaffolded support",
            "Build confidence and growth mindset",
            "Break down problems into manageable parts",
            "Show belief in their ability"
        ]
    }
];

// Function to get a random scenario
function getRandomScenario() {
    return scenarios[Math.floor(Math.random() * scenarios.length)];
}

// Function to get scenario by ID
function getScenarioById(id) {
    return scenarios.find(s => s.id === id);
}

// Function to evaluate response quality
function evaluateResponse(userResponse, scenario) {
    const response = userResponse.toLowerCase().trim();
    
    // Get the first scenario progression (initial responses)
    const firstProgression = scenario.progression[0];
    const studentResponses = scenario.studentResponses[0];
    
    let score = 0;
    let feedback = [];
    let escalationIncrease = 0;
    let techniques = [];
    
    // Check for good techniques
    let foundGood = false;
    for (let goodPhrase of studentResponses.good) {
        if (response.includes(goodPhrase)) {
            foundGood = true;
            score += 25;
            techniques.push(`✓ Used phrase: "${goodPhrase}"`);
            break;
        }
    }
    
    // Check for bad techniques
    let foundBad = false;
    for (let badPhrase of studentResponses.bad) {
        if (response.includes(badPhrase)) {
            foundBad = true;
            score -= 20;
            escalationIncrease += 15;
            feedback.push(`✗ Avoid: "${badPhrase}" - This can escalate the situation`);
            break;
        }
    }
    
    // Evaluate response characteristics
    const responseLength = response.length;
    
    // Check for calming words
    const calmingWords = ['calm', 'understand', 'listen', 'help', 'talk', 'support', 'respect', 'appreciate', 'concern', 'feel', 'hear'];
    const foundCalmingWords = calmingWords.filter(word => response.includes(word));
    
    if (foundCalmingWords.length > 0) {
        score += 10;
        techniques.push(`✓ Used calming language`);
    }
    
    // Check for questions/listening
    if (response.includes('?')) {
        score += 10;
        techniques.push(`✓ Asked questions to understand`);
    }
    
    // Check for empathy
    const empathyWords = ['feel', 'understand', 'care', 'respect', 'appreciate', 'value'];
    const foundEmpathy = empathyWords.filter(word => response.includes(word));
    
    if (foundEmpathy.length > 0) {
        score += 10;
        techniques.push(`✓ Showed empathy and respect`);
    }
    
    // Penalize if too short
    if (responseLength < 10) {
        score -= 5;
        feedback.push(`✗ Response too brief - More explanation and warmth needed`);
    }
    
    // Penalize for defensive language
    const defensiveWords = ['no', 'not', 'dont', 'can\'t', 'rules', 'detention', 'parent'];
    const foundDefensive = defensiveWords.filter(word => response.includes(word));
    
    if (foundDefensive.length > 2) {
        score -= 10;
        feedback.push(`✗ Avoid defensive language - Focus on understanding, not rules`);
    }
    
    // Determine escalation level
    if (score >= 40) {
        escalationIncrease = -10; // De-escalates
    } else if (score >= 20) {
        escalationIncrease = 5; // Neutral
    } else if (score >= 0) {
        escalationIncrease = 15; // Slight escalation
    } else {
        escalationIncrease = 25; // Major escalation
    }
    
    return {
        score: Math.max(0, Math.min(100, score)),
        feedback: feedback,
        techniques: techniques,
        escalationIncrease: escalationIncrease,
        isEffective: score >= 20
    };
}
