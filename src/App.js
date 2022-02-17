import Toggle from "./component/Toggle";
import Openmodal from "./component/Openmodal";
import Tag from "./component/Tag";
import Tab from "./component/Tab";
import AutoComplete from "./component/AutoComplete";
import ClickToEdit from "./component/ClickToEdit";
import "./Style/first.css";

function App() {
  return (
    <div className="App">
      1.Click To Edit
      <ClickToEdit />
      2.Auto Complete
      <AutoComplete />
      3.Tab
      <Tab />
      4.Tag
      <Tag />
      5.Open Modal
      <Openmodal />
      6.Toggle
      <Toggle />
    </div>
  );
}

export default App;
