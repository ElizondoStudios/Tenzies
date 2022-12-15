import React from "react";

function Time(props){
    const [time, setTime]= React.useState(0)
    const timeId= React.useRef();
  
  
    React.useEffect(()=>{
      if(props.isRunning){
        setTime(0)
        timeId.current= setInterval(()=>{
        setTime(prevTime => prevTime+1)
      }, 1)
      }else{
        clearInterval(timeId.current)
        timeId.current= null

        if(!props.bestTime)
            localStorage.setItem("best", JSON.stringify(time))
        else if(props.bestTime>time)
            localStorage.setItem("best", JSON.stringify(time))
      }
      
      return ()=>{
          clearInterval(timeId.current)
      }
    }, [props.isRunning])

    function milToTime(mil){
        const miliseconds= mil%100
        const time= Math.trunc(mil/100)+":"+miliseconds
        return time
    }

    return(
        <p>{milToTime(time)}</p>
    )
}

export default Time