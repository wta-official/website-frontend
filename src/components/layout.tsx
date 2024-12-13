import Footer from "./custome-ui/Footer";
import Header from "./custome-ui/Header";


export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
