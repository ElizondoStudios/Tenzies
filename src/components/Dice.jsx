
function Dice (props){
    return(
        <div 
            className="Dice"
            style={{backgroundColor: props.isHeld? "#59E391": "white"}}
            onClick={props.toggleDice}
        >
            {props.value}
        </div>
    )
}

export default Dice