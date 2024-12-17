class Player{
    constructor(){
        var heightMain = document.getElementById("player");
        heightMain.style.height = screen.height+ "px";
        if(screen.width<500){
            heightMain.style.width = screen.width + "px";
        }
        var heightDiv = document.getElementById("content");
        heightDiv.style.height = screen.height-300 +"px";
    }
}

onload = new Player();

class Audio_Player{
    constructor(){
        this.audio_file = document.getElementById("audio");
        this.title_audio =  document.getElementById("title_radio");
        this.play_pause_button = document.getElementById("play_pause");
        this.isplayed;
        this.play_pause_button.addEventListener("click",()=>{
            this.play_pause();
        });

        this.names_radio = [];
        this.names_radio[0]="أنشودة أرى الأحبة";
        this.names_radio[1]="أنشودة ما هم بأمة أحمد";
        this.names_radio[2]="أنشودة أبدا لا لن نحيد";
        this.names_radio[3]="أنشودة قالو انها وعد";
        this.names_radio[4]="أنشودة جنة جنة ";
        this.names_radio[5]="أنشودة القول قول الصوارم";
        
        this.source_audio = [];  
        this.source_audio[0]= "photos/a1.mp3";
        this.source_audio[1]= "photos/a2.mp3";
        this.source_audio[2]= "photos/a3.mp3";
        this.source_audio[3]= "photos/a4.mp3";
        this.source_audio[4]= "photos/a5.mp3";
        this.source_audio[5]= "photos/a6.mp3";
        this.server = 0;
        this.setResource();
        document.getElementById("next").addEventListener("click",()=>{
            if(this.server<this.source_audio.length-1){
                ++this.server;
                this.isplayed =false;
            }else{
                this.server = 0;
            }
            localStorage.setItem("save-pos",this.server);
            this.setResource();
        })
        document.getElementById("back").addEventListener("click",()=>{
            if(this.server>0){
                --this.server;
                this.isplayed =false;
            }else{
                this.server = this.source_audio.length-1;
            }
            localStorage.setItem("save-pos",this.server);
            this.setResource();
        })

    }
    setResource(){
        if(localStorage.getItem("save-pos")!=null){
            this.server = localStorage.getItem("save-pos");
        }
        this.audio_file.src = this.source_audio[this.server];
        this.title_audio.innerHTML = this.names_radio[this.server];
        this.play_pause();
    }
    play_pause(){
        if(this.isplayed == false){
            this.play_pause_button.src = "photos/pause.png";
            this.audio_file.play();
            this.isplayed = true;

        }else{
            this.audio_file.pause();
            this.isplayed = false;
            this.play_pause_button.src = "photos/play.png";
        }
    }
}

onload = new Audio_Player();
