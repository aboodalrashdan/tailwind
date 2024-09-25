import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const metadata = {
  title: "project shopping",
  description: "A Next.js project shopping",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex items-center flex-col gap-0 w-full">
          <Navbar />
          <main className="mt-20 w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
