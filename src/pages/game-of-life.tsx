import Header from '@/components/Header';
import GameOfLifeBoard from '@/components/game-of-life/GameOfLifeBoard';

export default function GameOfLife() {
    return (
        <>
            <Header title="Game of Life"></Header>
            <GameOfLifeBoard />
        </>
    );
}