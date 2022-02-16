import Toggle from "./component/Toggle";
import Openmodal from "./component/Openmodal";
import Tag from "./component/Tag";
import Tab from "./component/Tab";
import AutoComplete from "./component/AutoComplete";
import ClickToEdit from "./component/ClickToEdit";

function App() {
  return (
    <div className="App">
      <ClickToEdit />
      <AutoComplete />
      <Tab />
      <Tag />
      <Openmodal />
      <Toggle />
    </div>
  );
}

export default App;
