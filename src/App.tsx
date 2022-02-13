import { Route, Routes } from "react-router-dom";
import Header from "components/Header";
import Trips from "pages/Trips";
import Expenses from "pages/Expenses";

const App = () => {
  return (
    <div className="app-root">
      <Header />
      <Routes>
        <Route path="trips/" element={<Trips />} />
        <Route path="trips/:id" element={<Expenses />} />
      </Routes>
    </div>
  );
};

export default App;
