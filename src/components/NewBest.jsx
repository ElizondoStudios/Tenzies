function NewBest(props){
    function milToTime(mil){
        const miliseconds= mil%100
        const time= Math.trunc(mil/100)+":"+miliseconds
        return time
    }

    return(
        <div className="New-best">
            <h2>New best time! 🥳</h2>
            <h3>{milToTime(parseInt(localStorage.getItem("best")))}</h3>
            <button
             className="App--UI-button"
             onClick={props.toggleNewBest}
            >Close</button>
        </div>
    )
}

export default NewBest