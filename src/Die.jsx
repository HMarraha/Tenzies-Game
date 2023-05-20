import {useState} from "react"

export default function Die({isHeld,img,holdDice}) {
    const styles = {
        backgroundColor: isHeld ? "#59E391" : "#FFFFFF"
    }
    return (
        <div style={styles} onClick={holdDice} className="die-face">
            <img className="die-num" src={img} ></img>
        </div>
    )
}