import Head from 'next/head';
import Link from 'next/link';

interface HeaderProps {
    title: string;
}

function Header({ title }: HeaderProps) {
    return <>
        <Head>
            <title>{title}</title>
            <meta name="description" content="NextJS Random" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <Link href="/">Home</Link>
            <ul>
                <li><Link href="/game-of-life">Game of Life</Link></li>
            </ul>
        </header>
    </>;
}

export default Header;