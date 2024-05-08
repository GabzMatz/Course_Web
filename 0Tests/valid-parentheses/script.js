var isValid = function(s) {


    var real = 0;
    for(let i = 0; i < s.length; i++){
        let valid = s[i] + s[i+1]
        console.log(valid)

        switch(valid){
            case "()":
                console.log("case 1",valid)
                i++;
                real++
                break
            case "{}":
                console.log("case 2", valid)
                i++;
                real++
                break 
            case "[]":
                console.log("case 3",valid)
                i++;
                real++
                break
            default:
                real = 0
         }
    }
    
    if(real == 0){
        return false
    }
    return true



};

//let s = "(){}}{"
let s = "{[]}"


console.log(isValid(s))
