import "./globals.css";
import { Inter, Space_Grotesk } from 'next/font/google';
import { CustomCursor } from "@/components/ui/CustomCursor";

// Premium Tech Fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata = {
  title: "Karka AI & Tech Academy",
  description: "Pay After Placement Tech Launchpad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        suppressHydrationWarning 
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#05050A] text-white font-sans selection:bg-[#00F0FF] selection:text-black cursor-none md:cursor-auto`}
      >
        {/* Custom Neon Hacker Cursor */}
        <CustomCursor />
        
        {/* Main Website Content */}
        {children}
      </body>
    </html>
  );
}
