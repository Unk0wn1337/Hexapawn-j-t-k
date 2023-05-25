import Cella from "./Cella.js";
class JatekTer{
    
    #allapotLista = [];
    #elemLista = [];
    #lepes;
    constructor(){
        console.log("valami")
        this.#allapotLista = ["♟","♟","♟","u","u","u","♙","♙","♙"];
        this.#elemLista = ["","","","","","","","",""];
        this.#lepes = 0;
        this.#jatekter();
        
    }
        #jatekter(){
           const szuloELEM  = $("article");
           
            for (let index = 0; index < this.#allapotLista.length; index++) {
                console.log("valami")
                const Celi = new Cella(index,this.#allapotLista[index], szuloELEM);
                
            }
        }
        #lepessekeresesse(){

        }
        #init(){

        }
        #ellenorzes(){

        }
}
export default JatekTer;