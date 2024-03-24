import { Route, Routes } from "react-router-dom";
import Layout from "./components/shared/layout";
import CustomSnackkbar from "./components/snackbar";

const App = () => {
  return (
    <>
      <CustomSnackkbar />
      <Routes>
        <Route path="/*" element={<Layout />} />
      </Routes>
    </>
  );
};

export default App;
