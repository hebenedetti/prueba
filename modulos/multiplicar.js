function multiplicar (numeroa, numerob){
    if(numeroa===0||numerob===0){
        return "No puede realizarse la operación";
    }
    return numeroa*numerob;
}
module.exports = multiplicar;
