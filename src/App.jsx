import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CountriesPage from "./pages/CountriesPage";
import CountryDetailPage from "./pages/CountryDetailPage";
import BucketListPage from "./pages/BucketListPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries">
          <Route index element={<CountriesPage />} />
          <Route path=":countryCode" element={<CountryDetailPage />} />
        </Route>
        <Route path="/bucket-list" element={<BucketListPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
