import Footer from "./custome-ui/Footer";
import Header from "./custome-ui/Header";


export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#151515] text-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
