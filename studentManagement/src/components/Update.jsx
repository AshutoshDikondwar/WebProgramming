import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Update = () => {
    const [cardinfo, setCardInfo] = useState({ empid: "", ename: "", sal: "" })

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        // const result=info.find((a)=>a.empid===req.params.id)
        // setCardInfo(result)

        axios.get(`http://localhost:5000/edit/${params.id}`)
            .then((data) => {
                setCardInfo({ ...data.data })
            })
            .catch((e) => { })

    }, [])
    const sendAllinfo = () => {
        axios.put(`http://localhost:5000/updateEmployee/${cardinfo.empid}`,cardinfo)
            .then((data) => {
                navigate("/")
            })
            .catch((e) => {
                console.log("error occured", e);
            })
    }
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <input type="text" ename='empid' id='empid' value={cardinfo.empid} onChange={(e) => setCardInfo({ ...cardinfo, empid: e.target.value })} placeholder="empid" readOnly />
                    <input type="text" ename='ename' id='ename' onChange={(e) => setCardInfo({ ...cardinfo, ename: e.target.value })} placeholder="ename" />
                    <input type="text" ename='sal' id='sal' onChange={(e) => setCardInfo({ ...cardinfo, sal: e.target.value })} placeholder="sal" />
                    <button type="button" className="btn btn-primary" onClick={sendAllinfo}>send</button>
                </div>
            </div>
        </div>
    )
}

export default Update