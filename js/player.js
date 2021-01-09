class Player{
    constructor(){

    }

    getCount(){
        var playCountref=database.ref('playerCount')
        playCountref.on("value",function(data){
        playerCount=data.val()
        })
        }
        
        updateState(count){
        database.ref('/').update({
        playerCount:count
        
        })
    }
    updateName(name){
        var playerIndex="player"+playerCount
        database.ref(playerIndex).update({
        name:name
        
              })

}

}



















