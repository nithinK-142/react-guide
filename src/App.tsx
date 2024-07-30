import BackgroundHeading from "@/components/BackgroundHeading";
import TodoList from "@/components/TodoList";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

function App() {
  return (
    <div className="bg-[#f1d4b3] min-h-screen flex justify-center items-center flex-col">
      <BackgroundHeading />

      <main className="relative w-[972px] shadow-[0_4px_4px_rgb(0,0,0,0.08)] h-[636px] bg-[#fff] rounded-[8px] overflow-hidden grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr]">
        <Header />
        <TodoList />
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}
export default App;
