function togglePlay() {
    var tune = document.getElementById('sm-m5');
    var playButton = document.getElementById('playButton')

    if (tune.paused) {
        tune.play();
        playButton.setAttribute('class', 'fa fa-pause'); 
    } else {
        tune.pause();
        playButton.setAttribute('class', 'fa fa-play');
    }

    // var audio = document.createElement('audio');
    // audio.src = "maroon5SundayMorning.mp3";
    // audio.style.display = 'none';
    // audio.autoplay = false;
    // audio.onended = function(){
    //     audio.remove();
    // };
    // document.body.appendChild(audio);
}