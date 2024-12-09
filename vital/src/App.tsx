// import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  // let items = [ 'localmax', 'Dasanii', 'Daniel', 'theHunter'];
    

  // const handleSelectItem = (item: string) => {
    // console.log(item);

    const [alertVisible, setAlertVisibility] = useState(false);
  
     return (
      <div>
        { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
        
        <Button color="success" onClick={() => setAlertVisibility(true)}>My button</Button>
      </div>
     );
  // return <div><ListGroup items={items} heading="Users" onSelectItem={handleSelectItem}/></div>;
}

export default App;