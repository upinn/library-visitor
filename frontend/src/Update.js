import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Update()  {
    const [nama_lengkap, setNama_lengkap] = useState('')
    const [npm, setNpm] = useState('')
    const navigate =useNavigate();
    const {id} = useParams();

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Submitting:", { nama_lengkap, npm });
        console.log("ID from params:", id);
        axios.put('http://localhost:8080/update/'+id, {nama_lengkap, npm })
        .then(res => {
            console.log("Response:", res.data);
            navigate("/");
        }).catch(err => console.log("Error:", err));
    }
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-black rounded p-4">
                <form onSubmit={handleSubmit}>
                    <h2>Update Student</h2>
                    <div className='mb-3'>
                        <label htmlFor="">NAMA</label>
                        <input type="text" placeholder="Masukkan Nama Lengkap" className="form-control" 
                        onChange={e => setNama_lengkap(e.target.value)}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">NPM</label>
                        <input type="text" placeholder="Masukan NPM" className="form-control"
                        onChange={e => setNpm(e.target.value)}></input>
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Update