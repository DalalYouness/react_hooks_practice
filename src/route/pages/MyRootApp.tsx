import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComposantOne from "./ComposantOne";
import ComposantTwo from "./ComposantTwo";
import Layout from "./Layout";
import ErrorPage from "./ErrorPage";

const MyRootApp = () => {
  return (
    <div>
      <BrowserRouter>
        {/* Your routes and components go here */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="composant-1" element={<ComposantOne />} />
            <Route path="composant-2" element={<ComposantTwo />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MyRootApp;
