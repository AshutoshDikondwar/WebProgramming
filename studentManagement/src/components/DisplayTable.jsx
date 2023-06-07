import { useEffect, useState } from 'react'
import Card from './Card'
import './displayTable.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const DisplayTable = () => {
    const [studentData, setStudentData] = useState([{}])
    const navigate = useNavigate()


    // const sendinfo = (info) => {
    //     sendData(info)
    //     console.log(info);
    // }
    const deleteHandle = (empid) => {
        axios.delete(`http://localhost:5000/delete/${empid}`)
        navigate("/")
    }
    useEffect(() => {
        axios.get("/emp")
            .then((result) => {
                setStudentData(result)
            })
            .catch(() => { })
    }, [])

    const [istrue, setTrue] = useState(false)
    return (
        <div className={`whole__body ${istrue ? "hello" : ""}`}>
            {/* <button type="button" className="btn btn-primary" onClick={() => setTrue(!istrue)}>Primary button</button> */}

            <Link to="/edit">
                <button type="button" className="btn btn-primary" onClick={() => setTrue(!istrue)}>Add EMployee</button>
            </Link>
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
                            {studentData.map((e, i) => (
                                <tr key={i}>
                                    <td>{e.empid}</td>
                                    <td>{e.ename}</td>
                                    <td>{e.sal}</td>
                                    {/* <td><a href={`/edit/${e.empid}`}>edit</a> &nbsp;<a href={`/delete/${e.empid}`}>delete</a></td> */}
                                    <td>
                                        <Link to={`/edit/emp/:${e.empid}`}>
                                            <button type='button'>edit</button>
                                        </Link>
                                        <Link to={`/delete/:${e.empid}`}>
                                            <button type='button' onClick={() => deleteHandle(e.empid)}>delete</button>
                                        </Link>

                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>

                </div>
                {istrue ? <div className='card__show'>
                    <Card  />
                </div> : ""}

            </div>


        </div>
    )
}

export default DisplayTable