import FooterCompact from "@/components/Footer/FooterCompact";
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
      <FooterCompact />
    </div>
  );
}

