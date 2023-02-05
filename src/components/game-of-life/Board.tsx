import { useBoard } from "@/js/store/board-context";
import { forwardRef, LegacyRef } from "react";
import Cell from "./Cell";

const Board = forwardRef((props, ref: LegacyRef<HTMLDivElement>) => {

    const board = useBoard();

    return <div ref={ref} className="board">
        {board.map((column, x) => {
            return (
                <div key={x} className={`column column--${x}`}>
                    {column.map((value, y) => <Cell key={`${x}_${y}`} value={value} />)}
                </div>
            );
        })}
    </div>;
});

export default Board;