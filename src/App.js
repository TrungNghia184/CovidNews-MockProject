import logo from './logo.svg';
import './App.css';
import { TestPage } from './components/testPage';
import LoginPage from './pages/signinPage';

function App() {
  return (
    <div className="App">
      <TestPage/>
      <LoginPage/>
    </div>
  );
}

export default App;

// https://corona--tracker.herokuapp.com/newslist?_page=1&_limit=12  News
// https://disease.sh/v3/covid-19/countries countriesData 
// https://disease.sh/v3/covid-19/all totalData
