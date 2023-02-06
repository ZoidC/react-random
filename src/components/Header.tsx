import Link from 'next/link';

function Header() {
    return <>
        <header>
            <Link href="/">Home</Link>
            <ul>
                <li><Link href="/game-of-life">Game of Life</Link></li>
            </ul>
        </header>
    </>;
}

export default Header;