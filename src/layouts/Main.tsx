import Header1 from "@/components/Header/Header1";
import Footer1 from "@/components/Footer/Footer1";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="main-page-area">
      <Header1></Header1>
      {children}
      <Footer1></Footer1>
    </div>
  );
};

export default Main;