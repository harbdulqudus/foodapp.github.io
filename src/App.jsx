import { Route, Routes } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Homepage from "./assets/pages/Homepage";
import Foods from "./assets/pages/Foods";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/foods" element={<Foods />} />
      </Routes>
    </div>
  );
}

export default App;
