import '../App.css';
import Welcome from './Welcome'
import {playerData} from '../data/playerData'
import Player from './Player'


function App() {
  return (
    <div className="container">
      <Welcome />
      <Player />
      <Player />
    </div>
  );
}

export default App;
