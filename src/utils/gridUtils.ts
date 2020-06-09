import cloneDeep from 'lodash/cloneDeep'

const applyRules = (sum: number, currentCellValue: number) =>{
    if (sum < 2) return 0;
    if (sum > 3) return 0;
    if (sum === 3 && currentCellValue === 0) return 1;
    if ((sum === 2 || sum === 3) && currentCellValue === 1) return 1; 
    return 0
  }

  const getSurroundingCells = (i: string | number, j: string | number) => {
    i = typeof(i) === "string" ? i = parseInt(i) : i
    j = typeof(j) === "string" ? i = parseInt(j) : j
    return {
      top: [i-1, j],
      bottom: [i+1, j],
      left: [i, j-1],
      right: [i, j+1],
      topLeft: [i-1, j-1],
      topRight: [i-1, j+1],
      bottomLeft: [i+1, j-1],
      bottomRight: [i+1, j+1]
    }
  }

  export const changeGrid = (grid: number[][])=>{
    let newGrid = cloneDeep(grid)
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        const surroundingCells = getSurroundingCells(i, j)
        let sum = 0
        Object.values(surroundingCells).forEach(([surroundingCellX, surroundingCellY]) => {
        sum += grid[surroundingCellX] !== undefined &&
         grid[surroundingCellX][surroundingCellY] !== undefined ?
         grid[surroundingCellX][surroundingCellY]: 0;
        })   
        newGrid[i][j] = applyRules(sum, grid[i][j])     
      }
    }
    return newGrid
    }