import { LegacyRef, useEffect, useRef, useState } from 'react';
import { BoardContext } from '@/js/store/board-context';
import { gameOfLife, initBoard, inverseBoard, updateBoard } from '@/js/board-actions';
import Board from '@/components/game-of-life/Board';
import DraggableWindow from '@/components/DraggableWindow';

let id: NodeJS.Timer;

function GameOfLifeBoard() {
    const cellSize = 20;
    // const ratioAlive = 0.06;
    const ratioAlive = 0.08;

    const boardRef = useRef<HTMLDivElement>(null);
    const [board, setBoard] = useState(initBoard(0, 0, cellSize, ratioAlive));

    useEffect(() => {
        if (boardRef.current) {
            setBoard(initBoard(boardRef.current.offsetWidth, boardRef.current.offsetHeight, cellSize, ratioAlive));
        }
    }, []);


    return (
        <BoardContext.Provider value={board}>
            <DraggableWindow actions={[
                { title: "Inverse [0,0]", clickAction: () => setBoard(updateBoard(board, { x: 0, y: 0 })) },
                { title: "Inverse All", clickAction: () => setBoard(inverseBoard(board)) },
                {
                    title: "Game of Life (loop)", clickAction: () => {
                        clearInterval(id);
                        id = setInterval(() => setBoard(gameOfLife(board)), 100);
                    }
                },
                { title: "Game of Life (stop)", clickAction: () => clearInterval(id) },
                { title: "Game of Life (step)", clickAction: () => setBoard(gameOfLife(board)) },
                {
                    title: "Reset", clickAction: () => {
                        clearInterval(id);
                        setBoard(initBoard(boardRef?.current?.offsetWidth as number, boardRef?.current?.offsetHeight as number, cellSize, ratioAlive));
                    }
                },
            ]} />
            <Board ref={boardRef} />
        </BoardContext.Provider>
    );
}

export default GameOfLifeBoard;

