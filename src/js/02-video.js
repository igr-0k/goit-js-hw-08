import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on(
  'timeupdate',
  throttle(e => {
    localStorage.setItem('Player-Current-Time', e.seconds);
  }, 1000)
);

player
  .setCurrentTime(localStorage.getItem('Player-Current-Time') || 0)
  .catch(function (error) {
    console.error(error);
  });
