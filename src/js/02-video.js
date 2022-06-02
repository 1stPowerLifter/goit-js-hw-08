import Player from '@vimeo/player';
import * as _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', _.throttle(function ({ seconds }) {
    const timeOfVideo = JSON.stringify(seconds);
    localStorage.setItem("videoplayer-current-time", timeOfVideo)
}, 1000)
);

const currentTime = () => {
    try {
        const time = JSON.parse(localStorage.getItem("videoplayer-current-time"))
        return time >= 0 ? time : 0
    } catch {
        console.log("parse error")
    }
}

player.setCurrentTime(currentTime())