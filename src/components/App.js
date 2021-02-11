import '../App.css';
import Welcome from './Welcome'
import {playerData} from '../data/playerData'
import PlayerList from './PlayerList'
import Favorite from './Favorite'
import React, { useState } from 'react'

function App() {
  const [favorites, setFavorites] = useState([])
  const addFavorite = (id) => {
    console.log('hi mom', id)
    //using the id find the player object
    //take the found player and move it to favorites array
    const foundPlayer = playerData.find(player => player.id === id)
    console.log('found player', foundPlayer)
    const updatedFavorites = favorites.slice()
    updatedFavorites.push(foundPlayer)
    setFavorites(updatedFavorites)
  }
  return (
    <div className="container">
      <Welcome />
      <PlayerList 
      players={playerData}
      addFavorite={addFavorite}
      />
      <Favorite />
    </div>
  );
}

export default App;
