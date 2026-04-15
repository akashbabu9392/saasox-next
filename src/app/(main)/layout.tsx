import Footer1 from "@/components/Footer/Footer1";
import Header3 from "@/components/Header/Header3";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="main-page-area">
      <Header3 />
      {children}
      <Footer1 />
    </div>
  );
}

