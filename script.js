var arr = [
    {name : "Solitaires", url : "./solitaires.mp3", image : "https://i.pinimg.com/564x/a7/87/c3/a787c37735287b605d185019707cec71.jpg", duration : "3:26", artist : "Future, Travis Scott"},
    {name : "Starboy", url : "./starboy.mp3", image : "https://i.pinimg.com/564x/cd/4d/fc/cd4dfc935b03e0034ff4eddc9d4685cf.jpg", duration : "3:51", artist : "The Weeknd"},
    {name : "One Dance", url : "./oneDance.mp3", image : "https://cdns-images.dzcdn.net/images/cover/56bdb7a86a27fadb96332c0c8f1b8e81/1900x1900-000000-80-0-0.jpg", duration : "2:54", artist : "Drake"},
    {name : "Sunflower", url : "./sunflower.mp3", image : "https://i.pinimg.com/564x/d2/dd/5e/d2dd5e33ca0d25cf8938f0a044879600.jpg", duration : "2:38", artist : "Post Malone, Swae Lee"},
    {name : "Watermelon Sugar", url : "./watermelonSugar.mp3", image : "https://i.pinimg.com/564x/5e/f3/d3/5ef3d3afe3447df7338a64fc8f5f1d21.jpg", duration : "2:54", artist : "Harry Styles"},
    {name : "New Drop", url : "./newDrop.mp3", image : "https://cdns-images.dzcdn.net/images/cover/04921f1352dbbe5944574e196e422a9f/1900x1900-000000-80-0-0.jpg", duration : "3:38", artist : "Don Toliver"},
    {name : "Under The Influence", url : "./underTheInfluence.mp3", image : "https://i.pinimg.com/564x/f9/ae/d2/f9aed21383608edc4bf84b86c8d3ca7c.jpg", duration : "3:04", artist : "Chris Brown"},
    {name : "Yummy", url : "./yummy.mp3", image : "https://cdns-images.dzcdn.net/images/cover/03c1486d3a4d7b3b99b21024a5530162/1900x1900-000000-80-0-0.jpg", duration : "3:24", artist : "Justin Bieber"},
    {name : "Blinding Lights", url : "./blindingLights.mp3", image : "https://i.pinimg.com/originals/6e/20/fa/6e20fa93624bccfe571c9ef164ca7065.jpg", duration : "3:24", artist : "The Weeknd"},
    {name : "Counting Stars", url : "./countingStars.mp3", image : "https://i1.sndcdn.com/artworks-000040814493-eu3kr3-t1080x1080.jpg", duration : "4:18", artist : "OneRepublic"}   
]

var audio = new Audio();
var selectedSong = arr[0];
var current = 0
var songs = document.querySelector("#songs");
var cover1 = document.querySelector("#cover1");
var cover2 = document.querySelector("#cover2");
var playing = document.querySelector("#playing-info")
var playingName = document.querySelector("#playing-info h1")
var playingArtist = document.querySelector("#playing-info h3")
var playingDuration = document.querySelector("#playing-info h5")
var play = document.querySelector("#play-btn")
var pause = document.querySelector("#pause-btn")
var forward = document.querySelector("#forward-btn")
var back = document.querySelector("#back-btn")
var hide = document.querySelector("#hide")

function showSongCards() {
    var clutter ="";

    arr.forEach(function(song, index) {
        clutter += `<div id="${index}" class="song-card">
                        <img src="${song.image}">
                       <div class="song-info">
                        <h3>${song.name}</h3>
                        <h2>${song.artist}</h2>
                        <h1>${song.duration}</h1>
                       </div>
                    </div>`
    })

    document.querySelector("#songs").innerHTML = clutter;
}
showSongCards();

songs.addEventListener("click", function(dets) {
    selectedSong = arr[dets.target.id]
    current = dets.target.id
    playSong()
})

function playSong()
{
        cover1.src = selectedSong.image;
        cover2.src = selectedSong.image;
        playingName.innerHTML = selectedSong.name;
        playingArtist.innerHTML = selectedSong.artist
        playingDuration.innerHTML = selectedSong.duration
        pause.style.display = "block"
        play.style.display = "none"

        if(current == arr.length-1)
        {
            forward.style.color = "#c6ff0057"
            back.style.color = "#c6ff00"
        }
        else if (current == 0)
        {
            forward.style.color = "#c6ff00"
            back.style.color = "#c6ff0057"
        }
        else 
        {
            forward.style.color = "#c6ff00"
            back.style.color = "#c6ff00"
        }

        audio.src = selectedSong.url
        audio.play()
        hide.style.display = "none"
}



play.addEventListener("click", function() {
    if(current == 0)
    {
       back.style.color = "#c6ff0057"
    }
        pause.style.display = "block"
        play.style.display = "none"
        playSong()
        audio.play()
}) 

pause.addEventListener("click", function() {
    pause.style.display = "none"
    play.style.display = "block"
    hide.style.display = "inline-flex"
    audio.pause()
})

forward.addEventListener("click", function() {
    if(current < arr.length-2)
    {
        current++
        selectedSong = arr[current]
        back.style.color = "#c6ff00"
        playSong()
    }
    else if (current == arr.length-2)
    {
        current++
        selectedSong = arr[current]
        back.style.color = "#c6ff00"
        playSong()
        forward.style.color = "#c6ff0057"
    }
    
})

back.addEventListener("click", function() {
    if(current > 1)
        {
            current--
            selectedSong = arr[current]
            forward.style.color = "#c6ff00"
            playSong()
        }
        else if (current == 1)
        {
            current--
            selectedSong = arr[current]
            forward.style.color = "#c6ff00"
            playSong()
            back.style.color = "#c6ff0057"
        }
})
