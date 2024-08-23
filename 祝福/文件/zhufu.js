console.log("1");

const music = document.getElementById('music');
let isPlaying = false;
function playMusic() {
    if (!isPlaying) {
        music.play();
        isPlaying = true;
    }
}
function pauseMusic() {
    if (isPlaying) {
        music.pause();
        isPlaying = false;
    }
}

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        pauseMusic();
    } else {
        playMusic();
    }
});
