function Welcome() {
    const currentHour = new Date().getHours
    const message = currentHour < 5 ? "Why are you still up?" 
        : currentHour < 12 ? "Good morning."
        : currentHour < 18 ? "Good afternoon."
        : "Good evening."
    
    return (
        <div>
            <p>{message}</p>
            <h2>Welcome Astros Fans!</h2>
        </div>
    );
}

export default Welcome;