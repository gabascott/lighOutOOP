
class Lampa{
    constructor(elem, index){
        this.elem = elem;
        this.allapot = false;
        this.index = index;
        this.setSzin();
        
        this.elem.on("click", ()=>{
//            console.log(this);
            this.setAllapot();
            this.KattintTrigger();
        });
    }
    
    setSzin(){
        if (this.allapot) {
            this.elem.css("background-color", "green");
        }else{
            this.elem.css("background-color", "orange");
        }
    }
    
    setAllapot(){
        this.allapot = !this.allapot;
        this.setSzin();
    }
    
    KattintTrigger(){
        let esemeny = new CustomEvent("lampaFelkapcsol", {detail:this.index});
        window.dispatchEvent(esemeny);
    }
}