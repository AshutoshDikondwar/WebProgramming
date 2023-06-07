import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'


const Card = () => {
    const [cardinfo, setCardInfo] = useState({ empid: "", ename: "", sal: "" })
    const navigate = useNavigate()
    const sendAllinfo = () => {
        // sendData({ empid: cardinfo.empid, ename: cardinfo.ename, sal: cardinfo.sal })
        // setCardInfo({ empid: "", ename: "", sal: "" })

        axios.post("http://localhost:5000/add", cardinfo)
            .then((result) => {
                setCardInfo({ empid: "", ename: "", sal: "" })
                navigate("/")

            })
            .catch(() => { })
    }
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <input type="text" onChange={(e) => setCardInfo({ ...cardinfo, empid: e.target.value })} placeholder="empid" />
                    <input type="text" onChange={(e) => setCardInfo({ ...cardinfo, ename: e.target.value })} placeholder="ename" />
                    <input type="text" onChange={(e) => setCardInfo({ ...cardinfo, sal: e.target.value })} placeholder="sal" />
                    <button type="button" className="btn btn-primary" onClick={sendAllinfo}>send</button>
                </div>
            </div>
        </div>
    )
}

export default Card