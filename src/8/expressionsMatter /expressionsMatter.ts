export function expressionsMatter(a: number, b: number, c: number): number {


    //console.log("============")
    //console.log(a+" ,"+b+" ,"+c);
    //max wynik obliczenia
    let maxValue:number=0;

    let  eq: number;
    eq= a*b*c;
    maxValue=compare(maxValue,eq)
    //console.log("maxValue: "+maxValue+" ,eq: "+eq);

    eq= a+b+c;
    maxValue=compare(maxValue,eq)
    //console.log("maxValue: "+maxValue+" ,eq: "+eq);

    eq= (a+b)*c;
    maxValue=compare(maxValue,eq)
    //console.log("maxValue: "+maxValue+" ,eq: "+eq);

    eq= (a*b)+c;
    maxValue=compare(maxValue,eq)
    //console.log("maxValue: "+maxValue+" ,eq: "+eq);

    eq= a+(b*c);
    maxValue=compare(maxValue,eq)
    //console.log("maxValue: "+maxValue+" ,eq: "+eq);

    eq= a*(b+c);
    maxValue=compare(maxValue,eq)
    //console.log("maxValue: "+maxValue+" ,eq: "+eq);

    return maxValue; // highest achievable result
}

function compare(maxValue:number, eq:number):number {
    if(eq>maxValue){
        maxValue=eq;
    }
    return maxValue;
}
