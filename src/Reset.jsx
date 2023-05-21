

export default function Reset({resetScore,restartGame}){
    return (
        <section className="flex">
            <button onClick={resetScore} className="reset-btn" type="button">Reset Lowscore</button>
            <button onClick ={restartGame} style={{backgroundColor: "#5035FF"}} className="reset-btn">Restart Game</button>
        </section>
    )
}