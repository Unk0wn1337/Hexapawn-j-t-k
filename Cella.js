class Cella{
    #adat;
    #id;
    #divElem;
    constructor(id, adat, szuloELEM){
        console.log("valami")
        this.#id = id;
        this.#adat = adat;
        szuloELEM.append(`<div class="divElem">
        <p>${adat}</p>
        </div>`);
        this.divElem = $("article div:last-child");
        this.szinBeallit(id);
        this.kattintasTrigger()

    }
    setAllapot(){

    }
    szinBeallit(id){
        if(id % 2 == 0){
            $(this.divElem).css("background-color", "yellow");
        }
        
    }
    kattintasTrigger(){
        const gyalog = $("p")
        gyalog.on("click",function() {
            $(this).remove();
        })

        let kapcsolas = new CustomEvent("katt", {detail: this});
        window.dispatchEvent(kapcsolas);
    }
}
export default Cella;