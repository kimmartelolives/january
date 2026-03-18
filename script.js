// Map pose names to their horizontal position index (0-4) in the sprite sheet
const poses = {
    smile: 0,
    heh: 1, // The signature smug face
    shock: 2,
    bored: 3,
    cry: 4
};

const spriteWidth = 150; // Must match --sprite-width in CSS
let currentPoseIndex = 0;

const anyaEl = document.getElementById('anyaCharacter');
const bubbleEl = document.getElementById('thoughtBubble');
const thoughtEl = document.getElementById('anyaThought');
const inputEl = document.getElementById('userInput');

// 1. Click Anya to cycle her expressions
function cycleExpression() {
    hideThought(); // Hide mind-reading if cycling
    currentPoseIndex = (currentPoseIndex + 1) % 5;
    setAnyaPose(currentPoseIndex);
}

// 2. Button triggers the 'Mind Reading' interaction
function anyaReadMind() {
    const text = inputEl.value;
    
    if (text.length > 0) {
        // Exaggerated reaction (Shocked!)
        setAnyaPose(poses.shock);
        showThought("*Gasp!* (Mental noise!) Anya hears... '" + text.substring(0, 20) + "...'!");
        
        // After a delay, switch to the 'Heh' smug face
        setTimeout(() => {
            setAnyaPose(poses.heh);
            showThought("Heh. I knew that.");
        }, 2000);

    } else {
        // If input is empty, she gets bored.
        setAnyaPose(poses.bored);
        showThought("...Anya is bored. You aren't thinking hard enough.");
        setTimeout(hideThought, 3000);
    }
}

// Helper: Sets the specific sprite background position
function setAnyaPose(index) {
    // Moves the sprite sheet horizontally by multiples of the sprite width
    const positionX = -(index * spriteWidth);
    anyaEl.style.backgroundPosition = `${positionX}px 0px`;
}

function showThought(message) {
    thoughtEl.textContent = message;
    bubbleEl.classList.add('active');
}

function hideThought() {
    bubbleEl.classList.remove('active');
}

// Initialize default pose
setAnyaPose(currentPoseIndex);