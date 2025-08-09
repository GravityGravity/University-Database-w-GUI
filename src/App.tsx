import Navbar from "./components/Navbar";

import WelcomePage from "./components/WelcomePage";
import DataViewPage from "./components/DataViewPage"
import DataEditPage from "./components/DataEditPage";
import GpaCalc from "./components/GPACalcPage";
import LoginPage from "./components/Login";


function App() {
  let pageName;
  switch (window.location.pathname) {
    case "/":
      pageName = <WelcomePage></WelcomePage>;
      break;
    case "/home":
      pageName = <WelcomePage></WelcomePage>;
        break;
    case "/gpacalculator":
      pageName = <GpaCalc></GpaCalc>;
      break;
    case "/dataedit":
      pageName = <DataEditPage></DataEditPage>;
      break;
    case "/dataview":
      pageName = <DataViewPage></DataViewPage>;
      break;
      case "/login":
        pageName = <LoginPage></LoginPage>;
        break;
  }

  return (
     <>
       <Navbar></Navbar>
       {pageName}
     </>
  );
}

export default App;
