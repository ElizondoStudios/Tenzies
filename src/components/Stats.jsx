import React from "react";
import Time from "./Time";

function Stats(props){
    const [bestTime, setBestTime]= React.useState();

    React.useEffect(()=>{
        setBestTime(parseInt(localStorage.getItem("best")))
    },[props.isRunning])

    function milToTime(mil){
        const miliseconds= mil%100
        const time= Math.trunc(mil/100)+":"+miliseconds
        return time
    }

    return(
        <div className="Stats">
            <h4>
                Rolls: <p>{props.rolls}</p>
            </h4>
            <h4>
                Time: <Time isRunning={props.isRunning} bestTime={bestTime}/>
            </h4>
            <h4>
                Best time: <p>{bestTime? milToTime(bestTime): ""}</p>
            </h4>
        </div>
    )
}

export default Stats