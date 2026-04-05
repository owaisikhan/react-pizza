import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="flex h-screen flex-col bg-stone-300">
      <Header />
      <div className="flex-auto overflow-y-auto">
        <main className="">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
