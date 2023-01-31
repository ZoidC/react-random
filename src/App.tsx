import './css/App.css';
import { useState } from 'react';
import { BoardContext } from './store/board-context';
import { gameOfLife, initBoard, inverseBoard, updateBoard } from './js/board-actions';
import Board from './components/Board';
import DraggableWindow from './components/DraggableWindow';

const cellSize = 20;
const ratioAlive = 0.06;
const firstBoard = initBoard(window.innerHeight, window.innerWidth, cellSize, ratioAlive);
let id: NodeJS.Timer;

function App() {
    const [board, setBoard] = useState(firstBoard);

    return (
        <BoardContext.Provider value={board}>
            <DraggableWindow actions={[
                { title: "Inverse [0,0]", clickAction: () => setBoard(updateBoard(board, { x: 0, y: 0 })) },
                { title: "Inverse All", clickAction: () => setBoard(inverseBoard(board)) },
                { title: "Game of Life (loop)", clickAction: () => {
                    clearInterval(id);
                    id = setInterval(() => setBoard(gameOfLife(board)), 100);
                }},
                { title: "Game of Life (stop)", clickAction: () => clearInterval(id) },
                { title: "Game of Life (step)", clickAction: () => setBoard(gameOfLife(board)) },
                { title: "Reset", clickAction: () => {
                    clearInterval(id);
                    setBoard(initBoard(window.innerHeight, window.innerWidth, cellSize, ratioAlive)); 
                }},
            ]}/>
            <Board />   
        </BoardContext.Provider>
    );
}

export default App;
