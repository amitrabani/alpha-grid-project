import { changeGrid } from './gridUtils';

describe("Grid Utils", () => {
    describe("applyRules", () => {
        it("returns new vaild grid based on game rules", () => {
            let inputGrid =   Array.from({length: 5}, 
                () => Array.from({length: 5},()=>0))
                inputGrid[2][2] = 1 
                inputGrid[3][2] = 1 
                inputGrid[4][2] = 1
                inputGrid[0][4] = 1
            
            let outputGrid = Array.from({length: 5}, 
                () => Array.from({length: 5},()=>0))
                outputGrid[3][1] = 1 
                outputGrid[3][2] = 1 
                outputGrid[3][3] = 1

            expect(changeGrid(inputGrid)).toEqual(outputGrid);
            });
        })
  });