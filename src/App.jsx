import LineChart from "./Components/LineChart";
import NavBar from "./Components/NavBar/NavBar";
import Phones from "./Components/Phones";
import PriceOptions from "./Components/PriceOptions";

function App() {
  return (
    <>
 <NavBar></NavBar>
<PriceOptions></PriceOptions>
{/* <PriceOption></PriceOption> */}
<LineChart></LineChart>
<Phones></Phones>
    </>
  );
}

export default App;
