import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  NavLink,
} from "react-router-dom";
import EntryPage from "./pages/entryPage";
import HomePage from "./pages/homePage";
import AuthRoute from "./components/authRoute";
import PrivateRoute from "./components/privateRouth";
import NavBar from "./components/navBar";

function App() {
  return (
    <div className="App">
      {/* <EntryPage /> */}
      <NavBar/>
      <Routes>
        <Route
          exact
          path="/login"
          element={
            <AuthRoute>
              <EntryPage />
            </AuthRoute>
          }
        />
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
              <HomePage restricted={false}/>
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

// https://corona--tracker.herokuapp.com/newslist?_page=1&_limit=12  News
// https://disease.sh/v3/covid-19/countries countriesData
// https://disease.sh/v3/covid-19/all totalData
