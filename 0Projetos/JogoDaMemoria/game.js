let game = {

    lockMode : false,
    firstCard:null,
    secondCard:null,


    setCard: function (id){
        
    }
    
    ,

    techs : [
        "bootstrap",
        "css",
        "electron",
        "firebase",
        "html",
        "javascript",
        "jquery",
        "mongo",
        "node",
        "react",
    ],
    
    cards : null,
    
    createCardFromTechs: function(){
        this.cards = []
        this.techs.forEach((tech)=>{
            this.cards.push(this.createPairFromTech(tech))
        })
        this.cards =  this.cards.flatMap(cards=>cards)
        this.shuffleCards()
        return this.cards
        
    },
    createPairFromTech: function (tech){
        return [{
            id: this.createIdWidhTech(tech),
            icon : tech,
            flipped : false
        },{
            id: this.createIdWidhTech(tech),
            icon : tech,
            flipped : false
        }]
    },
    
     createIdWidhTech: function(tech){
        return tech + parseInt(Math.random() * 1000)
    
    },

    shuffleCards: function(cards){
        let currentIndex = this.cards.length
        let randomIndex = 0
    
    
    
        while(currentIndex != 0 ){
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--
            
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
    
        }
    
    }
    

}