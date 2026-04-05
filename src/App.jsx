import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="flex h-dvh flex-col">
      <Header />
      <div className="flex flex-1 overflow-scroll bg-stone-100">
        <main className="w-full flex-1 items-center justify-center">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
