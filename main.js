// Homework 9

let usserNumber=prompt("Enter your number: ")
let usserNumber2=prompt("Enter your number: ")
let usserNumber3=prompt("Enter your number: ")
let usserNumber4=prompt("Enter your number: ")
let usserNumber5=prompt("Enter your number: ")



function pos(arr){
    return arr.reduce((ret_arr, number, index) => {
        if (number >= 0) ret_arr.push(index)
        return ret_arr
    }, [])

}

console.log(pos([usserNumber,usserNumber2,usserNumber3,usserNumber4,usserNumber5]))