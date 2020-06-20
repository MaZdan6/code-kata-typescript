export function comp(a1: number[] | null, a2: number[] | null): boolean {
    // your code
    let isElementInArray: boolean = false;
    let sameArrays: boolean = false;

    //pierwiastkuj tablicę
    let element;
    let a2sqrt: number[] = [];
    if (a2 !== null && a1 !== null) {
        for (var i = 0; i < a2.length; i++) {
            element = Math.sqrt(a2[i]);
            a2sqrt.push(element)

        }
        //porównaj każdy element

        console.log("a1: " + a1.sort())
        console.log("a2sqrt: " + a2sqrt.sort())
        console.log("a2: " + a2.sort())

        for (var j in a2sqrt) {
            isElementInArray = false;
            for (var h in a2sqrt) {
                if (a2sqrt[j] == a1[h]) {
                    //console.log(a2sqrt[j]+" is in a1")
                    isElementInArray = true;
                    break;
                }
            }
            if(!isElementInArray){
                console.log(a2sqrt[j]+" is not in a1")
                sameArrays=false;
                break;
            }
        }
        sameArrays = isElementInArray;

     /*   if(a1.length==a2.length && a1.length==0){
            sameArrays=true;
        }*/
    }

    return sameArrays;
}
