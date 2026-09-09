let soraSelectCount = 0;
let isRoxas = false;
const selectSound = new Audio('./sounds/SelectKH2.mp3');
selectSound.volume = 0.3; 

function selectCharacter(characterNumber) {
    selectSound.currentTime = 0;
    selectSound.play();

    const characterOptions = document.getElementsByClassName('character-option');
    for (let i = 0; i < characterOptions.length; i++) {
        characterOptions[i].classList.remove('selected');
    }

    const selectedOption = document.getElementById('option' + characterNumber);
    selectedOption.classList.add('selected');

    let characterName;
    let characterDescription;
    const characterImage = document.getElementById('selected-character-model');
    const characterIcon = selectedOption.querySelector('.icon'); 
    switch (characterNumber) {
        case 1: 
            if (isRoxas) {
                characterImage.src = './images/characters/SoraKH2.png';
                characterName = 'Sora';
                document.getElementById('char-name1').innerHTML = 'Sora';
                const soraOption = document.getElementById('option1');
                const soraIcon = soraOption.querySelector('.icon');
                soraIcon.src = './images/characters/SoraIcon.png';
                isRoxas = false;
            } else {
                characterImage.src = './images/characters/SoraKH2.png';
                soraSelectCount++;
                characterName = 'Sora';
            }
            characterDescription = 'Sora is a cheerful and determined Keyblade wielder who fights to protect his friends and the worlds from darkness.';
            break;
        case 2:
            if (isRoxas) {
                characterImage.src = './images/characters/SoraKH2.png';
                characterName = 'Sora';
                document.getElementById('char-name1').innerHTML = 'Sora';
                const soraOption = document.getElementById('option1');
                const soraIcon = soraOption.querySelector('.icon');
                soraIcon.src = './images/characters/SoraIcon.png';
                isRoxas = false;
            }
            characterImage.src = './images/characters/RikuKH2.png';
            soraSelectCount = 0;
            characterName = 'Riku';
            characterDescription = 'Riku is Sora\'s best friend, a skilled Keyblade master who struggles with his inner darkness but ultimately seeks redemption.';
            break;
        case 3:
            characterImage.src = './images/characters/KairiKH2.png';
            soraSelectCount = 0;
            characterName = 'Kairi';
            characterDescription = 'Kairi is one of the seven Princesses of Heart and Sora\'s close friend, often serving as his motivation and source of strength.';
            isRoxas = false;
            break;
        case 4:
            characterImage.src = './images/characters/GoofyKH2.png';
            soraSelectCount = 0;
            characterName = 'Goofy';
            characterDescription = 'Goofy is a captain of King Mickey\'s royal guard, always loyal and surprisingly wise despite his clumsy nature.';
            isRoxas = false;
            break;
        case 5: 
            characterImage.src = './images/characters/DonaldKH2.png';
            soraSelectCount = 0;
            characterName = 'Donald';
            characterDescription = 'Donald Duck is the royal court magician, short-tempered but powerful with magic, and always by Sora\'s side in battle.';
            isRoxas = false;
            break;
        case 6:
            characterImage.src = './images/characters/MickeyKH2.png';
            soraSelectCount = 0;
            characterName = 'Mickey';
            characterDescription = 'King Mickey is the wise and powerful ruler of Disney Castle, a Keyblade master who guides Sora in his journey.';
            isRoxas = false;
            break;
    }

    if (soraSelectCount === 4 && !isRoxas) {
        characterImage.src = './images/characters/RoxasKH2.png';
        characterName = 'Roxas';
        characterDescription = 'Roxas is Sora\'s Nobody, a Keyblade wielder with a conflicted heart, torn between friendship and duty to the Organization.';
        
        const soraOption = document.getElementById('option1');
        const soraIcon = soraOption.querySelector('.icon');
        soraIcon.src = './images/characters/RoxasIcon.png';
        document.getElementById('char-name1').innerHTML = 'Roxas';
        
        isRoxas = true;
        soraSelectCount = 0;
    }

    document.getElementById('character-name').innerHTML = characterName;
    document.getElementById('character-description').innerHTML = characterDescription;

    characterImage.style.display = 'block'; // Show the image
    document.querySelector('.character-image').style.display = 'flex';
}

function updateTime() {
    const footerTime = document.getElementById('footer-time');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    footerTime.innerHTML = `Current Time: ${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime();