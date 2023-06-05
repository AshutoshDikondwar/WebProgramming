import { useState } from 'react'
import Card from './Card'
import './displayTable.css'

const DisplayTable = (props) => {
    const { student, sendData } = props

    const sendinfo = (info) => {
        sendData(info)
        console.log(info);
    }

    const [istrue, setTrue] = useState(false)
    return (
        <div className={`whole__body ${istrue ? "hello" : ""}`}>
            <button type="button" className="btn btn-primary" onClick={() => setTrue(!istrue)}>Primary button</button>

            <div className='main__body'>
                <div className='table__body'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {student.map((e, i) => (
                                <tr key={i}>
                                    <td>{e.roll}</td>
                                    <td>{e.name}</td>
                                    <td>{e.age}</td>
                                    <td><a href={`/edit/${e.roll}`}>edit</a> &nbsp;<a href={`/delete/${e.roll}`}>delete</a></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>

                </div>
                {istrue ? <div className='card__show'>
                    <Card sendData={sendinfo} />
                </div> : ""}

            </div>


        </div>
    )
}

export default DisplayTable