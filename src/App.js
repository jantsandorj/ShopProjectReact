import Header from "./components/header"
import Category from "./components/category"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {
  let minorMenu = [
    "Home",
    "Catalog",
    "Blog",
    "Pages",
    "About Us",
  ]
  
  
  return (
    <div className="App containerX">
      <Header/>
      <Category minorMenu={minorMenu}/>
    </div>
  );
}

export default App;
