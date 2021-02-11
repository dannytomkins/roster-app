import Player from './Player'

function PlayerList(props){
    console.log('props', props)

    //create a list of Player components
    const allPlayers = props.players.map(player => {
        return <Player
            id={player.id}
            key={player.id}
            firstName={player.firstName}
            lastName={player.lastName}
            jerseyNumber={player.jerseyNumber}
            hobbies={player.hobbies}
            addFav={props.addFavorite}
        />
    })

    return (
        <div>{allPlayers}</div>
    )
}
export default PlayerList