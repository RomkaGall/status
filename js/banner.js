let progressBar1; 
let progressBar2; 
let progressBar3; 
let progressBar4; 
let video_duration1;
let video_duration2; 
let video_duration3; 
let video_duration4;
let player1;
let player2;
let player3;
let player4;
let playerId;
let videoId;
let playerVarsList = {
    'controls': 0,
    'disablekb' : 1,
    'enablejsapi': 1,
    'fs': 0,
    'iv_load_policy': 3,
    'modestbranding': 1,
    'rel': 0,
    'showinfo': 0,
    'cc_load_policy': 0
}

function onYouTubeIframeAPIReady(state) {
    player1 = new YT.Player('player1', {
    videoId: '1La4QzGeaaQ',
    playerVars : playerVarsList,
    events: {
        'onReady': onPlayerReady1,
        'onStateChange': onPlayerStateChange1
    }
    });
    player2 = new YT.Player('player2', {
    videoId: 'LfmdPsXeOTM',
    playerVars : playerVarsList,
    events: {
        'onReady': onPlayerReady2,
        'onStateChange': onPlayerStateChange2
    }
    });
    player3 = new YT.Player('player3', {
    videoId: 'TvWcU3aztmo',
    playerVars : playerVarsList,
    events: {
        'onReady': onPlayerReady3,
        'onStateChange': onPlayerStateChange3
    }
    });
    player4 = new YT.Player('player4', {
    videoId: '7LJIcrJKDI0',
    playerVars : playerVarsList,
    events: {
        'onReady': onPlayerReady4,
        'onStateChange': onPlayerStateChange4
    }
    });
    
}
function onPlayerStateChange1(event) {
    video_duration1 = player1.getDuration()
}
function onPlayerStateChange2(event) {
    video_duration2 = player2.getDuration()
}
function onPlayerStateChange3(event) {
    video_duration3 = player3.getDuration()
}
function onPlayerStateChange4(event) {
    video_duration4 = player4.getDuration()
}
function pauseVideo1() {
    player1.pauseVideo();
    clearInterval(progressBar1)
}
function pauseVideo2() {
    player2.pauseVideo();
    clearInterval(progressBar2)
}
function pauseVideo3() {
    player3.pauseVideo();
    clearInterval(progressBar3)
}
function pauseVideo4() {
    player4.pauseVideo();
    clearInterval(progressBar4)
}
function playVideo1() {
    player1.playVideo();
    player1.mute();
    
    progressBar1 = setInterval(() => {
        $('.video_progress1 .bar').css('width', `${(player1.getCurrentTime() / video_duration1) * 100}%`)
    }, 100);
}
function playVideo2() {
    player2.playVideo();
    player2.mute();
    
    progressBar2 = setInterval(() => {
        $('.video_progress2 .bar').css('width', `${(player2.getCurrentTime() / video_duration2) * 100}%`)
    }, 100);
}
function playVideo3() {
    player3.playVideo();
    player3.mute();
    
    progressBar3 = setInterval(() => {
        $('.video_progress3 .bar').css('width', `${(player3.getCurrentTime() / video_duration3) * 100}%`)
    }, 100);
}
function playVideo4() {
    player4.playVideo();
    player4.mute();
    
    progressBar4 = setInterval(() => {
        $('.video_progress4 .bar').css('width', `${(player4.getCurrentTime() / video_duration4) * 100}%`)
    }, 100);
}

function onPlayerReady1(event) {     
    // player1.playVideo()
}
function onPlayerReady2(event) {     
    // player2.playVideo()
}
function onPlayerReady3(event) {     
    // player3.playVideo()
}
function onPlayerReady4(event) {     
    // player4.playVideo()
}
const videoStart = () => {
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}


$(document).on('click', '.banner__control', function () {
    if ($(this).hasClass('start')) {
       
        $(this).removeClass('start')
        videoStart() 
        
          
        // $(this).toggleClass('pause')
        $(this).parents('.swiper-slide').find('.player_overlay').addClass('hidden')
    } else {

        if($(this).hasClass('pause')) {    
            switch ($(this).parents('.swiper-slide').find('.player_container').attr('id')) {
                case 'player1':
                    pauseVideo1()
                    break;
                case 'player2':
                    pauseVideo2()
                    break;
                case 'player3':
                    pauseVideo3() 
                    break;
                case 'player4':
                    pauseVideo4() 
                    break;
            
                default:
                    break;
            }   
        } else {
            switch ($(this).parents('.swiper-slide').find('.player_container').attr('id')) {
                case 'player1':
                    playVideo1() 
                    break;
                case 'player2':
                    playVideo2() 
                    break;
                case 'player3':
                    playVideo3() 
                    break;
                case 'player4':
                    playVideo4() 
                    break;
            
                default:
                    break;
            }
        }
        $(this).toggleClass('pause')
    }
    
})