import Player from '@vimeo/player';
import Lodash from 'lodash.throttle';

    
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', Lodash(onPlay, 1000));

function onPlay({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
};

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
