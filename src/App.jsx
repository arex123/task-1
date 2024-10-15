import DataList from "./component/data/DataList";
import Heading from "./component/heading/Heading";
import StudentProvider from "./store/StudentProvider";

function App() {
  return (
    <StudentProvider>
      <Heading />
      <DataList />
    </StudentProvider>
  );
}

export default App;
