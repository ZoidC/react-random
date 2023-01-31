import { CELL_ALIVE, CELL_DEAD } from "./constants";
import Position from "./interfaces/Position";

const isInsideBoard = (board: number[][], pos: Position): boolean => {
    return pos.x >= 0 && pos.x < board.length && pos.y >= 0 && pos.y < board[pos.x].length;
}

export const initBoard = (windowHeight: number, windowWidth: number, cellSize: number, ratioAlive: number): number[][] => {
    const initialBoard: number[][] = [];
    for (let x = 0; x < windowWidth/cellSize; x++) {
        initialBoard.push([]);
        for (let y = 0; y < windowHeight/cellSize; y++) {
            initialBoard[x].push(Math.random() > ratioAlive ? CELL_DEAD : CELL_ALIVE);
        }
    }
    return initialBoard;
}

export const updateBoard = (currentBoard: number[][], pos: Position): number[][] => {
    const newBoard = [...currentBoard];
    if (isInsideBoard(newBoard, pos)) {
        newBoard[pos.x][pos.y] = newBoard[pos.x][pos.y] ? CELL_DEAD : CELL_ALIVE;
    }
    return newBoard;
}

export const inverseBoard = (currentBoard: number[][]): number[][] => {
    const newBoard = [...currentBoard];
    for (let x = 0; x < currentBoard.length; x++) {
        for (let y = 0; y < currentBoard[x].length; y++) {
            newBoard[x][y] = currentBoard[x][y] ? CELL_DEAD : CELL_ALIVE;
        }
    }
    return newBoard;
}

export const gameOfLife = (currentBoard: number[][]): number[][] => {
    const newBoard = [...currentBoard];
    for (let x = 0; x < currentBoard.length; x++) {
        for (let y = 0; y < currentBoard[x].length; y++) {
            let sq8 = 0;
            for (let deltaX = -1; deltaX <= 1; deltaX++) {
                for (let deltaY = -1; deltaY <= 1; deltaY++) {
                    const check: Position = { x: x + deltaX, y: y + deltaY };
                    if (isInsideBoard(currentBoard, check) && !(deltaX === 0 && deltaY === 0)) {
                        // console.log(`Checking [${check.x},${check.y}] : ${currentBoard[check.x][check.y]}`);
                        sq8 = sq8 + currentBoard[check.x][check.y];
                    }
                }
            }
            // Game of Life rules
            if (currentBoard[x][y] === CELL_DEAD && sq8 === 3) {
                newBoard[x][y] = CELL_ALIVE;
            } else if (currentBoard[x][y] === CELL_ALIVE && (sq8 < 2 || sq8 > 3)) {
                newBoard[x][y] = CELL_DEAD;
            }
        }
    }
    return newBoard;
}