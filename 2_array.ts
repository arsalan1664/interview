// 1. Easy — Array fundamentals

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

// 2. Easy — HashMap and Frequency

// 11	Two Sum	
// 12	Majority Element	
// 13	Intersection of Two Arrays	
// 14	Find All Duplicates in an Array	
// 15	Frequency Queries
// 16	Lonely Integer
// 17	Sparse Arrays

// 3. Medium — Two Pointers

// 18	Two Sum II	
// 19	3Sum	
// 20	Container With Most Water	
// 21	Sort Colors	// 22	Remove Duplicates II	
// 23	Squares of a Sorted Array	

// 4. Medium — Sliding Window

// 24	Maximum Average Subarray I	
// 25	Maximum Sum Subarray of Size K	Practice
// 26	Minimum Size Subarray Sum	
// 27	Best Time to Buy and Sell Stock	
// 28	Longest Subarray of 1s After Deleting One Element	3

// 5. Medium — Sorting and Searching

// 29	Merge Sorted Array	
// 30	Sort an Array	
// 31	Minimum Absolute Difference
// 32	Mark and Toys
// 33	Minimum Swaps 2
// 34	Binary Search	

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

// console.log(minMax([1,2,3,4,5,6,7]))



function removeDuplicates(numbArray:number[]):number[]{
    const set = new Set(numbArray)
    return Array.from(set)
}

// console.log(removeDuplicates([1,2,3,4,5,6,7,7,7,7,7,7]))


function moveZeroes(numbArray:number[]):number[]{
    let nonZero = []
    let zero = []

    for(let numb of numbArray){
        if(numb === 0){
            zero.push(numb)
        } else {
            nonZero.push(numb)
        }
    }

    return [...nonZero,...zero]
}

console.log(isDuplicates([0,1,0,3,0,6]))


function isDuplicates(numbArray:number[]):boolean{
    const set = new Set(numbArray)
    return set.size !== numbArray.length
}


function missingNumber(numbArray:number[]):number{}