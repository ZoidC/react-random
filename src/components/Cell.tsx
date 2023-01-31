interface CellProps {
    value: number
}

function Cell({ value }: CellProps) {
    return <div className={`cell cell--${value ? "alive" : "dead"}`}></div>
}

export default Cell;