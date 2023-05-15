const removeFromArray = function(array,...args) {
    return array.filter(val => !args.includes(val))

//     for (let i = 0; i < array.length; i++){
//     if (array[i] === ...args){
//         array.splice(i,1)
//     }
// }
// return array;
};

// Do not edit below this line
module.exports = removeFromArray;
