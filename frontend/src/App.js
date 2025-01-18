import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./Student";
import Create from "./Create";
import Update from "./Update";

function App() {
  return (
    <div className="App">
      {/* Tambahkan container khusus untuk judul */}
      <header className="bg-warning py-3 shadow-sm mb-4">
        <h3
          className="text-center text-dark fw-bold"
          style={{
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Pengunjung Perpustakaan Kampus H
        </h3>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
