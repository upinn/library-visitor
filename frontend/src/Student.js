import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Student() {
  // Deklarasi state
  const [student, setStudent] = useState([]);

  // Mengambil data dari server
  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Fungsi untuk menghapus data
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8080/student/" + id);
      setStudent(student.filter((data) => data.ID !== id)); // Update state tanpa reload halaman
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-75 bg-white rounded p-4 shadow">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="text-bold">Student List</h2>
          <Link to="/create" className="btn btn-success">
            Add +
          </Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>NPM</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {student.map((data, i) => (
              <tr key={i}>
                <td>{data.nama_lengkap}</td>
                <td>{data.npm}</td>
                <td>
                  <div className="d-flex">
                    <Link
                      to={`update/${data.ID}`}
                      className="btn text-dark"
                      style={{
                        backgroundColor: "#F9E79F", // Kuning pastel
                        marginRight: "8px",
                      }}
                    >
                      Update
                    </Link>
                    <button
                      className="btn text-white"
                      style={{
                        backgroundColor: "#8B4513", // Coklat
                      }}
                      onClick={() => handleDelete(data.ID)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Student;
