import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import EmotionProvider from './emotion-provider';
import MuiThemeProvider from './mui-theme-provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <EmotionProvider>
          <MuiThemeProvider>{children}</MuiThemeProvider>
        </EmotionProvider>
      </body>
    </html>
  );
}