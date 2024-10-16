import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Toaster />
        <main className="pt-20 min-h-[calc(100vh)] p-2">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
