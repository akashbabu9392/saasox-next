import Header3 from "@/components/Header/Header3";
import Footer3 from "@/components/Footer/Footer3";

const Layout3 = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="main-page-area2">
      <Header3></Header3>
      {children}
      <Footer3></Footer3>
    </div>
  );
};

export default Layout3;