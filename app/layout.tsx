import Link from "next/link";
import AuthContext from "../context/AuthContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <h1>Root Layout</h1>
        <Link href="/todo">Todo</Link>
        <Link href="/about">About</Link>
        <AuthContext>{children}</AuthContext>
        {/* {children} */}
      </body>
    </html>
  );
}
