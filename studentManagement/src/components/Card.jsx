import { useState } from "react"

const Card = ({ sendData }) => {
    const [cardinfo, setCardInfo] = useState({ roll: "", name: "", age: "" })
    const sendAllinfo = () => {
        sendData({ roll: cardinfo.roll, name: cardinfo.name, age: cardinfo.age })
        setCardInfo({ roll: "", name: "", age: "" })

    }
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <input type="text" onChange={(e) => setCardInfo({ ...cardinfo, roll: e.target.value })} placeholder="roll" />
                    <input type="text" onChange={(e) => setCardInfo({ ...cardinfo, name: e.target.value })} placeholder="name" />
                    <input type="text" onChange={(e) => setCardInfo({ ...cardinfo, age: e.target.value })} placeholder="age" />
                    <button type="button" className="btn btn-primary" onClick={sendAllinfo}>send</button>
                </div>
            </div>
        </div>
    )
}

export default Card