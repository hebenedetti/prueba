function dividir (numeroa, numerob){
    if(numerob===0){
        return "No puede realizarse la operación";
    }
    return numeroa/numerob;
}
module.exports = dividir;