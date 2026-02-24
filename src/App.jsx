import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./routes/AppRouter";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
       <Navbar />
       <div className="pt-20">
         <AppRouter />
       </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;