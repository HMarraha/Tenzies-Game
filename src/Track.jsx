

export default function Track({lowestScore,rolls}){
    return (
        <div className="track-container">
            <div>
            <h1>Lowest rolls:</h1>
            <p className="score">{lowestScore}</p>
            </div>
            <div>
            <h1>Rolls</h1>
            <p className="score">{rolls}</p>
            </div>
        </div>
    )
}