import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { H2 } from "./components/H2";
import { Image } from "./components/Image";

function App() {
  

  return (
    <>
      <H2 label="P2 INDIVIDUAL ACTIVITY" />
      <hr />
      <div className="container">
        <div className="grid">
          <Image src="/cite.png" width={100} height={100} variant="circular" />
          <Image src="/cite.png" width={100} height={100} variant="circular" />
          <Image src="/picss.jpg" width={200} height={200} variant="rounded" />
          <Image src="/pics.jpg" width={200} height={200} variant="rounded" />
        </div>
      </div>
      <div className="container">
        <div className="grid input">
          <Input variant="input1" placeholder="Textfield 1"/>
          <Input variant="input1" placeholder="Textfield 2"/>
          <Input variant="input2" placeholder="Textfield 3" />
          <Input variant="input2" placeholder="Textfield 4"/>
        </div>
      </div>
      <Button label="Cancel" variant="button1"/>
      <Button label="Submit" variant="button2"/>
      
    </>
  );
}

export default App;


