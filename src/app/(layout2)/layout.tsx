import Header2 from "@/components/Header/Header2";
import Footer2 from "@/components/Footer/Footer2";

export default function Layout2({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="main-page-area2">
      <Header2 />
      {children}
      <Footer2 />
    </div>
  );
}

