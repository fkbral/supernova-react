import { Button } from "./components/Button";
import { UserProfile } from "./components/UserProfile";
import { BikeIcon, UserIcon } from "./utils/icons";

export function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <h2>{"Hello Supernova!".toUpperCase()}</h2>

      <UserProfile username="Renata" />

      <Button IconLeft={UserIcon}>entrar</Button>
      <Button>conheça nosso time</Button>
      <Button IconRight={BikeIcon}>alugue uma bike</Button>

      <Button type="submit">enviar</Button>

      {/* <button className="btn">qualquer coisa</button> */}
    </div>
  );
}

export default App;
