import GameOfLifeBoard from '@/components/game-of-life/GameOfLifeBoard';
import Head from 'next/head';

export default function GameOfLife() {
    return (
        <>
            <Head>
                <title>Game of Life</title>
            </Head>
            <GameOfLifeBoard />
        </>
    );
}