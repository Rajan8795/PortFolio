import type {Metadata} from 'next';
import './globals.css';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Rajan Prajapati | Software Development Engineer',
  description: 'Portfolio of Rajan Prajapati, a Software Engineer, Full Stack Developer, and Problem Solver.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} font-sans bg-[#050816] text-white antialiased selection:bg-[#00E5FF]/30 overflow-x-hidden`} suppressHydrationWarning>
        {/* Animated Mesh Background Overlay */}
        <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#00E5FF] rounded-full blur-[150px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#7C3AED] rounded-full blur-[120px]"></div>
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
