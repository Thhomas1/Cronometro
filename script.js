const stopwatch = document.getElementById('stopwatch');
const playPauseButton = document.getElementById('play-pause');
const secondsSphere = document.getElementById('seconds-sphere');


let stopWatchInterval; // guardar el intervalo para ir modificando de a un segundo el segundero
let runningTime = 0; // ir llevando cuenta de cuando tiempo paso

const playPause = () => {
    const isPaused = !playPauseButton.classList.contains('running');
    // para saber si esta pausado o no 

    if(isPaused) {
        playPauseButton.classList.add('running');
        start();
    } else {
        playPauseButton.classList.remove('running');
        pause();
    } // creando el if y else del button play y pause /// ahora creamos las variables

}

const pause = () => {

    secondsSphere.style.animationPlayState = 'paused';
    clearInterval(stopWatchInterval);

}

const stop = () => {


    secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
    playPauseButton.classList.remove('running');
    runningTime = 0; // para reiniciarlo
    clearInterval(stopWatchInterval);
    stopwatch.textContent = '00:00';

}












const start = () => {
    secondsSphere.style.animation = 'rotacion 60s linear infinite';
    let startTime = Date.now() - runningTime;
    secondsSphere.style.animationPlayState = 'running';
    stopWatchInterval = setInterval( ()  => {
        runningTime = Date.now() - startTime;
        stopwatch.textContent = calculateTime(runningTime);

    }, 1000)
}

const calculateTime = runningTime => {
    const total_seconds = Math.floor(runningTime / 1000);
    const total_minutes = Math.floor(total_seconds / 60);


    const display_seconds = (total_seconds % 60).toString().padStart(2,"0");
    const display_minutes = total_minutes.toString().padStart(2, "0");


    return `${display_minutes}:${display_seconds}`
} // pa' q no se vayan to' lo numero'











//8:00