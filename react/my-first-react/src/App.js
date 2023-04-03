import nameFormatter, {
  firstName,
  lastName as aliasExample,
} from "./util/strUtils";

function App() {
  console.log(firstName("james"));
  console.log(aliasExample("hales"));
  console.log(nameFormatter("another name here"));
} // this is talked about around 4:25pm for the lecture on 04/03/23

export default App;
