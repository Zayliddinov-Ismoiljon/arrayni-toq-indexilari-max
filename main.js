//Arrayni filter methodi yordamida ishlash

// const  elArray=[1,2,3,4,5,6];

// let odds=elArray.filter(n=> n/2);
// let even=Math.max(...odds)
//  console.log(even);



//For loopi bilan ishlash
const  elArray=[23,17,3,9,5,21];

function massiv(arr) {
    var evenNumbers=[];
    for(let i=0; i<arr.length; i++){
        if(i%2 !==0){
            evenNumbers.push(arr[i]);
        }
    }

    return Math.max(...evenNumbers);
}

console.log(massiv(elArray));