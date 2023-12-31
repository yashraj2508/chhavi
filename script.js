const container1 = document.querySelector('.container1');

const fireworks1 = new Fireworks.default(container1, {
    autoresize: true,
    opacity: 0.5,
    acceleration: 1.2,
    friction: 0.97,
    gravity: 1.5,
    particles: 50,
    traceLength: 3,
    traceSpeed: 60,
    explosion: 5,
    intensity: 30,
    flickering: 50,
    lineStyle: 'round',
    hue: {
      min: 0,
      max: 360
    },
    delay: {
      min: 200,
      max: 300
    },
    rocketsPoint: {
      min: 50,
      max: 50
    },
    lineWidth: {
      explosion: {
        min: 1,
        max: 3
      },
      trace: {
        min: 1,
        max: 2
      }
    },
    brightness: {
      min: 50,
      max: 80
    },
    decay: {
      min: 0.02,
      max: 0.03
    },
    sound: {
        enabled: true,
        files: ['sound/explosion0.mp3', 'sound/explosion1.mp3', 'sound/explosion2.mp3'],
        volume: {
            min: 30,
            max: 31
        }
    },
    mouse: {
      click: false,
      move: false,
      max: 1
    }
  });
fireworks1.start();

new Snowflakes();

let message = "My Dearest chhavi ,      > sukriya meri life me aane ke liye tu,ahre saath mera bahut memories rahi hai 2023 me wo sb ko yaad kr ke bahut accha lagta hai  i am luckiest man in the earth to have you my girlfriend ,  < lets creates the more memory together > ";



let para = document.querySelector('.message');
let i = 0;
let interval = 100;
const typeWriter = () => {
    if (i < message.length) {
        if (message[i] === '>') para.innerHTML += '<br>';
        else if (message[i] === '<') para.innerHTML = '';
        else if (message[i] === ' ') para.innerHTML += ' ';
        else para.innerHTML += message[i];
        i++;
    }
    else clearInterval(callback);
}

const callback = setInterval(typeWriter, interval);
let audio = new Audio('sound/music.mp3');
let isPlaying = false;
audio.loop = true;
const background = () => {
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
    }
}
window.addEventListener('click', background);