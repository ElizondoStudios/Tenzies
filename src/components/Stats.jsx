import React from "react";
import Time from "./Time";

function Stats(props){
    return(
        <div className="Stats">
            <h4>
                Rolls: <p>{props.rolls}</p>
            </h4>
            <h4>
                Time: <Time isRunning={props.isRunning}/>
            </h4>
            <h4>
                Best time: <p>00:00</p>
            </h4>
        </div>
    )
}

export default Stats