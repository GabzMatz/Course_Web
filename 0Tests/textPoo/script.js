class Movies{
    constructor(movie, nota, ano){
        this.movie = movie
        this.nota = nota
        this.ano = ano
    }


}

class BadMovies{
    constructor(){
        this.movie = ""
        this._nota = 0
        this.ano = ""
   }
    get nota(){
        return this._nota
    }
    set nota(value){
        this._nota = value
    }
}


let lordRings = new Movies("lordRings",9,2003)

let wow = new BadMovies()
let tombRaider = new BadMovies()


tombRaider.movie = "Tomb Raider"
tombRaider.ano = 2003
console.log(tombRaider)

wow.movie = "World of Warcraft"
wow.ano = 2010
wow.nota = 1

tombRaider.nota = -1

console.log(wow)
console.log(tombRaider)
console.log(lordRings)
