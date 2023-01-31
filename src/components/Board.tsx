import { useBoard } from "../store/board-context";
import Cell from "./Cell";

function Board() {

    const board = useBoard();

    return <div className="board">
        { board.map((column, x) => {
            return (
                <div key={x} className={`column column--${x}`}>
                    { column.map((value, y) => <Cell key={`${x}_${y}`} value={value} />) }
                </div>
            )
        }) }
    </div>
}

export default Board;