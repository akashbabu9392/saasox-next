import Header3 from "@/components/Header/Header3";
import Footer2 from "@/components/Footer/Footer2";

export default function Layout3({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="main-page-area3">
      <Header3 />
      {children}
      <Footer2 />
    </div>
  );
}

