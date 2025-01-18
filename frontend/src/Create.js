import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Create.css"; // Tambahkan file CSS eksternal

function Create() {
    const [nama_lengkap, setNama_lengkap] = useState('');
    const [npm, setNpm] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Submitting:", { nama_lengkap, npm });
        axios.post("http://localhost:8080/create", { nama_lengkap, npm })
            .then(res => {
                console.log("Response:", res.data);
                navigate('/');
            })
            .catch(err => console.log("Error:", err));
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-maroon rounded p-4">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-center">Add Student</h2>
                    <div className="mb-3">
                        <label htmlFor="nama">Nama</label>
                        <input
                            id="nama"
                            type="text"
                            placeholder="Masukkan Nama Lengkap"
                            className="form-control"
                            onChange={e => setNama_lengkap(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="npm">NPM</label>
                        <input
                            id="npm"
                            type="text"
                            placeholder="Masukkan NPM"
                            className="form-control"
                            onChange={e => setNpm(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-success w-100">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Create;
