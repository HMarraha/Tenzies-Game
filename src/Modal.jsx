import {MdClose} from "react-icons/md"

export default function Modal({easy,normal,hard,style,showModal}){
    return (
        <>
        <div style={style} className="modal">
        <i onClick={showModal} className="close"><MdClose size="40px"/></i>
        <p className="note"><span className="inline" style={{color: "red"}}>Note</span>: if you change the difficulty your lowest score will reset!</p>
            <button onClick={() => {
                easy()
                showModal()
            }}>Easy<span>(5)</span></button>
            <button onClick={()=> {
                normal()
                showModal()
            }}>Normal<span>(10)</span></button>
            <button onClick={()=> {
                hard()
                showModal()
            }}>Hard<span>(20)</span></button>
        </div>
        </>
    )
}