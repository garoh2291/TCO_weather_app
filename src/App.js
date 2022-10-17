import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, useNavigate } from "react-router-dom";
import "./App.css";
import { Header } from "./Layout/Header";
import { SetDefaultCityThunk } from "./redux/cityReducer/city-reducer";
import { RoutesComponents } from "./Routes";

function App() {
  const { cities } = useSelector((state) => state.cities);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SetDefaultCityThunk());
  }, [dispatch]);

  if (!cities) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <RoutesComponents />
      </BrowserRouter>
    </div>
  );
}

export default App;
