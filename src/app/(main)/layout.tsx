import Header1 from "@/components/Header/Header1";
import Footer1 from "@/components/Footer/Footer1";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="main-page-area">
      <Header1 />
      {children}
      <Footer1 />
    </div>
  );
}

