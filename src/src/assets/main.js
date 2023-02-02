var streamUrl = "https://radio.itsmelody.net"
var paused = false

$(document).ready(function () {
    $('#stream').prop('src', streamUrl);
    try{
        document.getElementById("stream").play()
    }catch(e){
        alert("Unable to automatically start player. Please manually press play. ")
    }
    
    if(localStorage.getItem("playerVolume")){
        document.getElementById('volume').value = localStorage.getItem("playerVolume")
    }

    function stats() {
        var api = 'https://azura.itsmelody.net/api/nowplaying/1'
        
        $.get(api, function(res) {
            console.log(res)
            $('.album-art').prop('src', res['now_playing'].song.art);
            $('.song-title').text(res['now_playing'].song.title);
            $('.song-artist').text(res['now_playing'].song.artist);
            $('.presenter-title').text(res['live'].is_live ? res['live'].streamer_name : "AutoDJ")
            $('.presenter-photo').prop('src', 'https://itsmelody.net/storage/images/logo.png');
            $('.bg img').prop('src', res['now_playing'].song.art);
        })
        .fail(function(err) {
            $('.song-title').text('Error');
            $('.song-artist').text('');
        })
    }
    stats()
    setInterval(stats, 15000);

    $("#playpause").on("click", function () {
        $("#playpause").toggleClass("fa-play")
        $("#playpause").toggleClass("fa-pause")
    
        if (paused == true) {
            paused=false
            $('#stream').prop('src', streamUrl);

            $('#stream').volume = 0

            document.getElementById("stream").play()
    
            var fadeVol = $('#volume').val()

            if(localStorage.getItem("playerVolume")){
                fadeVol = localStorage.getItem("playerVolume")
            }

            $('#stream').animate({volume: fadeVol}, 1000)
            
            $('#volume').fadeIn(650)
          } else {
            paused=true
            $('#stream').animate({volume: 0}, 1000, function() {
                $('#stream').prop('src', '')
            });
            $('#playBtn>i').removeClass('fa-pause')
            $('#playBtn>i').addClass('fa-play')
            $('#volume').fadeOut(650)
          }
    });
        
    $('#volume').on("input", function() {
        localStorage.setItem("playerVolume", $('#volume').val());
        document.getElementById("stream").volume = $('#volume').val()
    })
});