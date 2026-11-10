// #	Problem	Platform
// 1	Find Largest Element	
// 2	Find Second Largest Element	
// 3	Reverse an Array	
// 4	Find Minimum and Maximum	
// 5	Remove Duplicates from Sorted Array	
// 6	Move Zeroes	
// 7	Contains Duplicate	
// 8	Missing Number	
// 9	Find the Single Number	
// 10	Rotate Array	


function largest(numbArray:number[]):number{
    let largest = -Infinity
    for(let numb of numbArray){
        if(largest < numb){
            largest = numb
        }
    }
    return largest
}


// console.log(largest([1,2,3,4,5,6,7,-8]))

function seclargest(numbArray:number[]):number{
    let largest = 0
    let secondLargest = 0

    for(let numb of numbArray){
        if(numb > largest){
            secondLargest = largest
            largest = numb
        }else if( secondLargest < numb && numb < largest){
                secondLargest   = numb
        }
    }
    return secondLargest
}

// console.log(seclargest([1,2,3,4,5,6,7]))

function reverseArray(numbArray: number[]):number[]{
    let reverseArray = []
    for(let i = numbArray.length - 1 ; i >= 0; i--){
        reverseArray.push(numbArray[i])
    }
    return reverseArray
}

// console.log(reverseArray([1,2,3,4,5,6,7]))


function minMax(numbArry: number[]):number[]{
    let max = -Infinity
    let min = Infinity

    for(let numb of numbArry){
        if(numb > max){
            max = numb
        } 
        if(numb < min){
            min = numb
        } 
    }
    return [max,min]
}

console.log(minMax([1,2,3,4,5,6,7]))