console.log("working");

let creativePrompts = [
    'Write a 3-4 sentence story about',
    'Write 100 words about',
    'Write a haiku about',
    'Write a limmerick about'
];

let creativePromptAdjectives = [
    'a powerful ',
    'a big ',
    'a funny ',
    'a loud ',
    'a hot ',
    'a loving ',
    'a dancing ',
    'a royal '
];

let creativePromptObjects = [
    'snail.',
    'sandwich.',
    'turtle.',
    'journey.',
    'fruit.',
    'moose.',
    'book.',
    'criminal.',
    'friend.'
];

let secondText = document.getElementById('second-text');
let thirdText = document.getElementById('third-text');
let progressText = document.getElementById('progress-text');
let creativeInput = document.getElementById('creative-input');

console.log(`prompt length: ${creativePrompts.length}`);

let promptNum1 = Math.floor(Math.random() * creativePrompts.length);
let promptNum2 = Math.floor(Math.random() * creativePromptAdjectives.length);
let promptNum3 = Math.floor(Math.random() * creativePromptObjects.length);
secondText.innerHTML = creativePrompts[promptNum1];
thirdText.innerHTML = `${creativePromptAdjectives[promptNum2]}${creativePromptObjects[promptNum3]}`;

console.log(promptNum1);

if (promptNum1 == 1) {
    progressText.innerHTML = `Progress: 0/100`;
    creativeInput.addEventListener('input', () => {
        progressText.innerHTML = `Progress: ${creativeInput.value.length}/100`;
    });
} else {
    progressText.innerHTML = `Progress: `;
};