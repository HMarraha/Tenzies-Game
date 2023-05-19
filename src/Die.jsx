import {useState} from "react"

export default function Die({isHeld,value,holdDice}) {
    const styles = {
        backgroundColor: isHeld ? "#59E391" : "#FFFFFF"
    }
    return (
        <div style={styles} onClick={holdDice} className="die-face">
            <h2 className="die-num">{value}</h2>
        </div>
    )
}