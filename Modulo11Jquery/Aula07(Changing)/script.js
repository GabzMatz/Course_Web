let jq = $("#lista1").slideUp(1000).slideDown(2000).fadeOut(2000).fadeIn(2000)
console.log(jq)



let objeto = {
    print10 : function(){
        console.log(10)
        return this
    },
    print20 : function(){
        console.log(20)
        return this
    }

}

objeto.print10().print20().print10()