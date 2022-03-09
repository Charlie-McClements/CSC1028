
function getRndInteger(max){
    return Math.floor(Math.random() * max);
}

function minimise(parameters){
    var original = parameters;
    var newparams = parameters;
    var newError;
    var error = optimise(original);
    //for(let i =0; i<parameters.length; i++){
        newparams[8] = parameters[8] += getRndInteger(10) * 10;
        newError = optimise(newparams);
        if(newError>error){
            newparams[8]=parameters[8] -= getRndInteger(10) * 10;
        }
        newError = optimise(newparams);
        if(newError>=error){
            newparams[8] = original[8];
        } 
    //}
    return newparams;
}