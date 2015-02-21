if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    })();
}

function randomRange(min, max) {
    return ((Math.random() * (max - min)) + min);
}

function hexToR(h) {
    return parseInt((cutHex(h)).substring(0, 2), 16);
}

function hexToG(h) {
    return parseInt((cutHex(h)).substring(2, 4), 16);
}

function hexToB(h) {
    return parseInt((cutHex(h)).substring(4, 6), 16);
}

function cutHex(h) {
        return (h.charAt(0) == "#") ? h.substring(1, 7) : h;
    }

    // // Bottom to top
    // var MAX_PARTICLES = 500,
    //    MAX_SPAWNRATE = 100,
    //    MAX_VELOCITY = 30,
    //    MAX_ACCELERATION = 1.5,
    //    MAX_VELOCITY_DEVIATION = 15,
    //    MAX_DEGREE = 360,
    //    MAX_DEGREE_DEVIATION = 180,
    //    MAX_SIZE = 100,
    //    MAX_STROKE_SIZE = 10,

    //    configDefault = {
    //       particles: 60,
    //       spawnrate: 1,
    //       color: "#ffffff",
    //       shape: "circle",
    //       position: "random",
    //       random_color: 0,
    //       velocity: 30,
    //       velocity_deviation: 15,
    //       acceleration: 0.0,
    //       direction_accel: 360,
    //       direction: 270,
    //       direction_deviation: 0,
    //       back_color: 'rgba(0, 0, 0, 0)',
    //       stroke_size: 0,
    //       stroke_color: '#ffffff',
    //       opacity: 1,
    //       random_size: false,
    //       size: 5,
    //       particle_dead: true,
    //       shadow_blur: 0
    //    },
    // config,
    // centerX,
    // centerY,
    // mousePosX = window.innerWidth / 2,
    // mousePosY = window.innerHeight / 2,
    // degreesToRadians = (Math.PI / 180),
    // canvas,
    // c,
    // particleArray = [],
    // adjustingTool;

    // var scrollObject = {};
    // window.onscroll = getScrollPosition;

    // function getScrollPosition(){
    //     scrollObject = {
    //        x: window.pageXOffset,
    //        y: window.pageYOffset
    //     }
    //     // If you want to check distance
    //     if(scrollObject.y > 0) {
    //         console.log("scrolled");
    //     } else {
    //         console.log('loaded');
    //     }
    // }

    //Left to Right
    var MAX_PARTICLES = 500,
       MAX_SPAWNRATE = 100,
       MAX_VELOCITY = 30,
       MAX_ACCELERATION = 1.5,
       MAX_VELOCITY_DEVIATION = 15,
       MAX_DEGREE = 360,
       MAX_DEGREE_DEVIATION = 180,
       MAX_SIZE = 100,
       MAX_STROKE_SIZE = 10,

       configDefault = {
          particles: 40,
          spawnrate: 1,
          color: "#ffffff",
          shape: "circle",
          position: "random",
          random_color: 0,
          velocity: 15,
          velocity_deviation: 15,
          acceleration: 0.0,
          direction_accel: 360,
          direction: 360,
          direction_deviation: 0,
          back_color: 'rgba(0, 0, 0, 0)',
          stroke_size: 0,
          stroke_color: '#ffffff',
          opacity: 1,
          random_size: false,
          size: 3,
          particle_dead: true,
          shadow_blur: 0
       },
    config,
    centerX,
    centerY,
    mousePosX = window.innerWidth / 2,
    mousePosY = window.innerHeight / 2,
    degreesToRadians = (Math.PI / 180),
    canvas,
    c,
    particleArray = [],
    adjustingTool;



$(document).ready(function() {
    config = $.extend({}, configDefault);
    refreshCenter();
    initializeCanvas();
    stepAnimate();
});

function refreshCenter() {
    centerX = window.innerWidth / 2;
    centerY = window.innerHeight / 2;
};
$(window).resize(function() {
    // D.River patch
    var winWidth           = $(window).width();//get width
    var winHeight          = $(window).height();//get height
    
    canvas.width = winWidth;
    canvas.height = winHeight;
});

function createParticle() {
    var particle = {};
    switch (config.position) {
        case 'center':
            particle.x = window.innerWidth / 2;
            particle.y = window.innerHeight / 2;
            break;
        case 'random':
            particle.x = randomRange(0, window.innerWidth);
            particle.y = randomRange(0, window.innerHeight);
            break;
    }
    var dirVel = randomRange(config.direction - config.direction_deviation, config.direction + config.direction_deviation),
        radVel = dirVel * degreesToRadians,
        xVel = Math.cos(radVel),
        yVel = Math.sin(radVel),
        radAccel = config.direction_accel * degreesToRadians,
        xAccel = config.acceleration * Math.cos(radAccel),
        yAccel = config.acceleration * Math.sin(radAccel),
        velocity = randomRange(config.velocity - config.velocity_deviation, config.velocity + config.velocity_deviation);
    particle.xSpeed = xVel * velocity;
    particle.ySpeed = yVel * velocity;
    particle.xAccel = xAccel;
    particle.yAccel = yAccel;
    var size;
    if (config.random_size) {
        size = randomRange(1, MAX_SIZE);
    } else {
        size = config.size;
    }
    particle.size = size;
    particle.active = true;
    return particle;
}

function initializeCanvas() {
    // D.River patch
    var winWidth           = $(window).width();//get width
    var winHeight          = $(window).height();//get height
    
    canvas = document.getElementById("canvas");
    
    c = canvas.getContext("2d");
    c.canvas.width = winWidth;
    c.canvas.height = winHeight;
}

function update(particle) {
    var particle_color = config.color;
    if (config.random_color) {
        var r = Math.random() * 255 >> 0;
        var g = Math.random() * 255 >> 0;
        var b = Math.random() * 255 >> 0;
        particle_color = "rgba(" + r + ", " + g + ", " + b + ", " + config.opacity + ")";
    } else {
        particle_color = "rgba(" + hexToR(particle_color) + ", " + hexToG(particle_color) + ", " + hexToB(particle_color) + ", " + config.opacity + ")";
    }
    c.beginPath();
    c.lineWidth = config.stroke_size;
    c.fillStyle = particle_color;
    if (config.shadow_blur > 0) {
        c.shadowBlur = config.shadow_blur;
        c.shadowOffsetX = 1;
        c.shadowOffsetY = 1;
        c.shadowColor = "rgba(100, 100, 100, 1)";
    } else {
        c.shadowBlur = null;
        c.shadowOffsetX = 0;
        c.shadowOffsetY = 0;
        c.shadowColor = "rgba(100, 100, 100, 0)";
    }
    var particle_stroke_color = "rgba(" + hexToR(config.stroke_color) + ", " + hexToG(config.stroke_color) + ", " + hexToB(config.stroke_color) + ", " + config.opacity + ")";
    c.strokeStyle = particle_stroke_color;
    var radius = particle.size / 2;
    c.arc(particle.x, particle.y, radius, 0, 2 * Math.PI);
    c.fill();
    if (config.stroke_size > 0) {
        c.stroke();
    }
    c.closePath();
    particle.x = particle.x + particle.xSpeed;
    particle.y = particle.y + particle.ySpeed;
    particle.xSpeed += particle.xAccel;
    particle.ySpeed += particle.yAccel;
    if (config.particle_dead) {
        particle.size = particle.size * (0.9 + (randomRange(1, 10) / 100));
        if (particle.size <= 0.25) {
            particle.active = false;
        }
    } else {
        if (particle.x < -(particle.size) || particle.y < -(particle.size) || particle.x > window.innerWidth + particle.size || particle.y > window.innerHeight + particle.size) {
            particle.active = false;
        }
    }
}

function draw() {
    var particle, i, spawned;
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    c.fillStyle = config.back_color;
    c.fillRect(0, 0, window.innerWidth, window.innerHeight);
    for (i in particleArray) {
        particle = particleArray[i];
        if (particle.active) {
            update(particle);
        } else {
            particleArray.splice(i, 1);
        }
    }
    //adjustingTool.draw();
    for (spawned = 0; spawned < config.spawnrate; spawned++) {
        if (particleArray.length >= config.particles) {
            return;
        }
        particleArray.push(createParticle());
    }
}

function stepAnimate() {
    requestAnimationFrame(stepAnimate);
    draw();
}