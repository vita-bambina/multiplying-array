function grow (x){
    let result =1;
    for (let num of x ){
        result *= num;
    }
    return result;
}

console.log(grow([1,2,3]));
console.log(grow([4,5,6,7]));
console.log(grow([2,2,2,2,2]));