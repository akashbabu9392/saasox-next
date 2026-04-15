import Header3 from "@/components/Header/Header3";
import Footer2 from "@/components/Footer/Footer2";

const Layout3 = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="main-page-area2">
      <Header3></Header3>
      {children}
      <Footer2></Footer2>
    </div>
  );
};

export default Layout3;