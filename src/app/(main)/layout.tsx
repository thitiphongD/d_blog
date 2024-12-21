import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="px-4 md:px-10 flex-1">{children}</main>
      <Footer />
    </>
  );
}
