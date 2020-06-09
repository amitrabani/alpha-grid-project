import React, {useState, useEffect} from 'react';
import './App.css';
import Cell from './components/Cell';
import {ROWS_NUMBER, COLOUMS_NUMBER, TICKING_INTERVAL} from './constants'
import { useWorker } from './hooks/useAppWorkerHook';

const generateGrid = () =>  Array.from(
  {length: ROWS_NUMBER}, 
  () => Array.from({length: COLOUMS_NUMBER},
  () => Math.floor(Math.random() > 0.8 ? 1 : 0)))

const App: React.FC = () =>{
  const [grid, setGrid] = useState<number[][]>(generateGrid)
  const { workerApi } = useWorker(); 

  useEffect(()=>{
    setTimeout(()=>{
      workerApi
      .changeGrid(grid)
      .then((newGrid: number[][]) => setGrid(newGrid));         
    },TICKING_INTERVAL)
  }, [grid, workerApi])
    
  return (
    <div id="container">
      {grid.map((rows, i)=>
        rows.map((cols, j)=>(
          <Cell key = {i - j} status={grid[i][j]}/>
        ))
      )} 
    </div>
  );
}
export default App;





  