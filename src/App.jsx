import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="font-saira flex h-dvh flex-col">
      <Header />
      <div className="bg-golden-sand-50 flex flex-1 overflow-x-hidden overflow-y-auto">
        <main className="w-full flex-1 items-center justify-center">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
export default App;
