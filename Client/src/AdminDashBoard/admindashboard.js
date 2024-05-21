import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

export function Admindashboard() {
    const [fetchdetail, setFetchdetail] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9597/getdata')
            .then(res => res.json())
            .then(data => setFetchdetail(data));
    }, []);

    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const delt = (sno) => {
        var key = { sno: sno };
        axios.post('http://localhost:9597/delete', key)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("Data not deleted");
                } else if (res.data.status === "success") {
                    alert("Data deleted");
                    window.location.reload();
                }
            });
    };

    return (
        <>
            <div className='p-5' style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <button className="btn bg-success">
                    <Link to='/addstudent' className="navbar-brand text text-white">
                        <span className="d-none d-sm-inline">Add Student</span>
                        <span className="d-inline d-sm-none">Add</span>
                    </Link>
                </button>
            </div>
            <div className="bg-dark p-5">
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th className="d-none d-md-table-cell">Phone Number</th>
                                <th className="d-none d-md-table-cell">Enroll Number</th>
                                <th className="d-none d-md-table-cell">Date of Admission</th>
                                <th>Actions</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fetchdetail.map((value, index) => (
                                <tr key={index}>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td className="d-none d-md-table-cell">{value.phone}</td>
                                    <td className="d-none d-md-table-cell">{value.enrollnumber}</td>
                                    <td className="d-none d-md-table-cell">{formatDate(value.dateofadmission)}</td>
                                    <td>
                                        <Link to={`/edit/${value.sno}`}>
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => { delt(value.sno) }}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
