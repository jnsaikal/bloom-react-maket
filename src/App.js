import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";

const App = () => {
  function getInfo(data) {
    console.log(data);
  }
  return (
    <div>
      <Navbar />{" "}
      <Header/> {" "}
      <Footer/> {" "}

    </div>
  );
};

export default App;
