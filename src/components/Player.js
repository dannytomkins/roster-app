
function Player(props) {
    const playerHobbies = props.hobbies.length
    ? props.hobbies.map(hobby => {
        return <li>{hobby}</li>
    })
    : <p>No Hobbies</p>


    return (
    <div>
        <h3>{props.firstName} {props.lastName}</h3>
        <p> jersey {props.jerseyNumber}</p>
        <p>{props.hobbies}</p>
        <ul>{playerHobbies}</ul>
        <button onClick={() => props.addFav(props.id)}>Add to Favorites</button>
    </div>
    )
}

export default Player
