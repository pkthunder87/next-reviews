import Link from 'next/link';
import './globals.css';
import NavBar from '../components/NavBar';
import { exo_2, orbitron } from './fonts';

export const metadata = {
  title: {
    default: 'Indie Gamer',
    template: '%s | Indie Gamer',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo_2.variable}`}>
      <body className="flex min-h-screen flex-col bg-orange-50 px-4 py-2">
        <header>
          <NavBar />
        </header>

        <main className="grow py-3">{children}</main>
        <footer className="border-t py-3 text-center text-xs text-slate-500">
          Game data and images courtesy of{' '}
          <a
            href="https://rawg.io"
            target="_blank"
            className="text-orange-800 hover:underline"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
