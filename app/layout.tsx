import "../styles/globals.css";
import Heder from "./Heder";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Heder />
        {children}
      </body>
    </html>
  );
}
