let songIndex = 0;
let audioElement = new Audio("songs/REVENGE.mp3")
let masterplay = document.getElementById("masterplay")
let myprogressbar = document.getElementById("myprogressbar")
let songItems= Array.from(document.getElementsByClassName("songItem"));

let songs = [
{songName : "changes", filePath: "songs/changes.mp3" , coverPath: "covers/1.jpg"},
{songName : "hope", filePath: "songs/Hope.mp3" , coverPath: "covers/2.jpg"},
{songName : "revenge", filePath: "songs/REVENGE.mp3" , coverPath: "covers/3.jpg"},
{songName : "sad", filePath: "songs/SAD.mp3" , coverPath: "covers/4.jpg"},
{songName : "ture love", filePath: "songs/true love.mp3" , coverPath: "covers/5.jpg"}
]

songItems.forEach((element , i )=>{ 
    element.getElementsByTagName("img")[0].scr= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
// audioElement.play();
masterplay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove("fa-circle-play")
        masterplay.classList.add("fa-circle-pause")    
    }
    else{
        audioElement.pause();
        masterplay.classList.remove("fa-circle-pause")
        masterplay.classList.add("fa-circle-play")  
    }
})

audioElement.addEventListener("timeupdate",()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myprogressbar.value = progress;
})
myprogressbar.addEventListener("change",()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100 ;
})


  const makeAllPlays = ()=>{

    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
  }


Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeAllPlays()
        songIndex = parseInt (e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.scr = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove("fa-circle-play")
        masterplay.classList.add("fa-circle-pause")  
    })
}
)

document.getElementById("next").addEventListener("click" , ()=>{
if(songIndex>4){
    songIndex = 0 
}
else{
    songIndex += 1;
}
})
