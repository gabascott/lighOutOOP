$(function() {
    const szuloElem = $("article");
    const sablonElem = $(".lampa");
    const lampaTomb = [];
    
    const meret = 9;
    
    for (let index = 0; index < meret; index++) {
        const ujElem = sablonElem.clone().appendTo(szuloElem);
        const lampa = new Lampa(ujElem, index);
        lampaTomb.push(lampa);
    }
    
    sablonElem.remove();
    console.log(lampaTomb);
    
    
    $(window).on("lampaFelkapcsol", (esemeny)=>{
//        console.log(esemeny.detail);
        let elemID = esemeny.detail;
        lampaTomb[elemID+1].setAllapot();
    });
});
