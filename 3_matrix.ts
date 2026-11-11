

// [x] Transpose Matrix
// [x] Diagonal Sum
// [x] Search in a 2D Matrix
// [ ] Rotate Matrix
// [x] Spiral Matrix
// [x] Set Matrix Zeroes
// [ ] Flood Fill
// [ ] Number of Islands
// [ ] Word Search
// [ ] Maximum Sum Submatrix


function transpose(matrix:number[][]){
    const result : number[][] = []
    for (let i = 0; i < matrix[0].length ; i++){
        let row = []
        for(let j = 0; j< matrix.length; j++){
            row.push(matrix[j][i])
        }
        result.push(row)
    }
    return result
}




function diagonalSum(matrix: number[][]): number {
    const diagonal = []
    for(let i = 0; i < matrix[0].length; i++){
        for(let j = 0; j < matrix.length; j++){
            if(i===j){
                diagonal.push(matrix[j][i])
            }
        }
    }
    return diagonal.reduce((acc,curr) => acc + curr, 0)
}



function spiral(matrix:number[][]) : number[] {
    const set = new Set()
    //top
    for(let i = 0; i< matrix[0].length; i++){
        set.add(matrix[0][i])
    };
    // right
    for(let j = 0; j< matrix[0].length; j++){
            set.add(matrix[j][2])

    }; 
    //bottom
    for(let k = matrix[0].length - 1; k >= 0 ; k--){
            set.add(matrix[2][k])
    }; 
    // left
    for(let l = 0; l< matrix[0].length - 1; l++){
        set.add(matrix[1][l])
    }; 

    const result = Array.from(set) as number []

    return result
 
}

// console.log(spiral(matrix))



function findZero(matrix: number[][], target:number): boolean{
    for ( let i = 0; i < matrix[0].length; i++){
        for(let j = 0; j < matrix.length; j++){
            if (matrix[j][i] === target){
                return true
            }
        }
    }
    return false
}

// console.log(findZero(matrix, 11))

function setZero(matrix:number[][]):number[][]{
    let indexes = []
    for ( let i=0; i < matrix[0].length; i++){
        for(let j = 0; j < matrix.length; j++){
            if(matrix[j][i] === 0){ 
                indexes.push([i,j])
            }
        }
    }

    for(let [row, col] of indexes){
        for(let i = 0; i < matrix[0].length; i++){
            matrix[col][i] = 0
        }
        for(let j = 0; j < matrix.length; j++){
            matrix[j][row] = 0
        }
    }
    return matrix
}

const matrix = [
  [1, 2, 3],
  [4, 0, 6],
  [6, 7, 8]
]


console.log(setZero(matrix))