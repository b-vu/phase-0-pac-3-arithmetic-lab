function add(a,b){
    return a + b;
};

function subtract(a,b){
    return a - b;
};

function multiply(a,b){
    return a * b;
};

function divide(a,b){
    return a / b;
};

function increment(a){
    return a + 1;
};

function decrement(a){
    return a - 1;
};

function makeInt(a){
    if(parseInt(a)){
        return parseInt(a, 10);
    }
    else{
        return NaN;
    }
};

function preserveDecimal(a){
    if(parseFloat(a)){
        return parseFloat(a);
    }
    else{
        return NaN;
    }
};