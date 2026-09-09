function displayGameInfo(gameId) {
    const gameLogos = document.querySelectorAll('.game-logo');
    const selectedGame = document.getElementById('game' + gameId);
    const clickSound = document.getElementById('ZoomKH');
    const outSound = document.getElementById('OutKH');
    
    clickSound.volume = 0.3;
    outSound.volume = 0.3;

    const isActive = selectedGame.classList.contains('active');

    gameLogos.forEach((logo) => {
        const gameInfo = logo.querySelector('.game-info');
        const gameName = logo.querySelector('p');

        logo.classList.remove('active');
        if (gameInfo) {
            gameInfo.classList.remove('fade-in');
            gameInfo.classList.add('fade-out');
        }
        if (gameName) {
            gameName.style.display = 'block';
        }
    });

    if (!isActive) {
        clickSound.play();
        selectedGame.classList.add('active');

        const selectedGameName = selectedGame.querySelector('p');
        if (selectedGameName) {
            selectedGameName.style.display = 'none';
        }

        const gameInfo = selectedGame.querySelector('.game-info');
        const gameDetails = {
            1: {
                title: "Kingdom Hearts I",
                releaseDate: "March 28, 2002",
                genre: "Action RPG",
                platforms: "PS2, PS3, PS4, Xbox One, Nintendo Switch"
            },
            2: {
                title: "Kingdom Hearts II",
                releaseDate: "December 22, 2005",
                genre: "Action RPG",
                platforms: "PS2, PS3, PS4, Xbox One, Nintendo Switch"
            },
            3: {
                title: "Kingdom Hearts III",
                releaseDate: "January 25, 2019",
                genre: "Action RPG",
                platforms: "PS4, Xbox One, Nintendo Switch"
            },
            4: {
                title: "Kingdom Hearts: Chain of Memories",
                releaseDate: "December 2, 2004",
                genre: "Card-based RPG",
                platforms: "GBA, PS2, PS3, PS4, Xbox One"
            },
            5: {
                title: "Kingdom Hearts 358/2 Days",
                releaseDate: "May 30, 2009",
                genre: "Action RPG",
                platforms: "Nintendo DS"
            },
            6: {
                title: "Kingdom Hearts: Birth by Sleep",
                releaseDate: "January 9, 2010",
                genre: "Action RPG",
                platforms: "PSP, PS3, PS4, Xbox One"
            },
            7: {
                title: "Kingdom Hearts: Dream Drop Distance",
                releaseDate: "March 29, 2012",
                genre: "Action RPG",
                platforms: "3DS, PS4, Xbox One"
            },
            8: {
                title: "Kingdom Hearts: 0.2 Birth by Sleep",
                releaseDate: "January 12, 2017",
                genre: "Action RPG",
                platforms: "PS4, Xbox One"
            },
            9: {
                title: "Kingdom Hearts: Coded",
                releaseDate: "January 11, 2011",
                genre: "Action RPG",
                platforms: "Nintendo DS, mobile devices"
            }
        };

        const gameDetailsInfo = gameDetails[gameId];
        gameInfo.innerHTML = `
            <h3>${gameDetailsInfo.title}</h3>
            <p>Release Date: ${gameDetailsInfo.releaseDate}</p>
            <p>Genre: ${gameDetailsInfo.genre}</p>
            <p>Platforms: ${gameDetailsInfo.platforms}</p>
        `;
        gameInfo.classList.remove('fade-out');
        gameInfo.classList.add('fade-in');
    } else {
        outSound.play();
        selectedGame.classList.remove('active');
        const gameInfo = selectedGame.querySelector('.game-info');
        if (gameInfo) {
            gameInfo.classList.remove('fade-in');
            gameInfo.classList.add('fade-out');
        }
        const selectedGameName = selectedGame.querySelector('p');
        if (selectedGameName) {
            selectedGameName.style.display = 'block';
        }
    }
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
