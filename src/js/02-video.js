import Player from '@vimeo/player';
import Lodash from 'lodash.throttle';

    
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', Lodash(onPlay, 1000));

function onPlay({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
};


if (currentTime) {
  player.setCurrentTime(currentTime);  
};

