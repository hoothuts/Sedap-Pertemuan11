import { useState, useEffect } from "react";
import { notesAPI } from "../services/notesAPI";
import AlertBox from "../components/AlertBox";
import GenericTable from "../components/GenericTable";
import { AiFillDelete } from "react-icons/ai";

export default function Notes() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [notes, setNotes] = useState([]);

  const [dataForm, setDataForm] = useState({
    title: "",
    content: "",
    status: "",
  });

  const isFormValid = dataForm.title && dataForm.content;

  useEffect(() => {
    loadNotes();
  }, []);

  useEffect(() => {
    let timeout;
    if (success) {
      timeout = setTimeout(() => setSuccess(""), 3000);
    }
    return () => clearTimeout(timeout);
  }, [success]);

  const loadNotes = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await notesAPI.fetchNotes();
      setNotes(data);
    } catch (err) {
      setError("Gagal memuat catatan");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await notesAPI.createNote(dataForm);
      setSuccess("Catatan berhasil ditambahkan!");
      setDataForm({ title: "", content: "", status: "" });

      await loadNotes();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err?.message || "Tidak diketahui"}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Yakin ingin menghapus catatan ini?");
    if (!confirmDelete) return;

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await notesAPI.deleteNote(id);
      await loadNotes();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Notes App</h2>

      {/* Alert Messages */}
      {error && <AlertBox type="error">{error}</AlertBox>}
      {success && <AlertBox type="success">{success}</AlertBox>}

      {/* Note Form */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Tambah Catatan Baru</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={dataForm.title}
            placeholder="Judul catatan"
            onChange={handleChange}
            disabled={loading}
            required
            className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <textarea
            name="content"
            value={dataForm.content}
            placeholder="Isi catatan"
            onChange={handleChange}
            disabled={loading}
            required
            rows="3"
            className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
          />

          <button
            type="submit"
            disabled={!isFormValid || loading}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed shadow"
          >
            {loading ? "Mohon Tunggu..." : "Tambah Data"}
          </button>
        </form>
      </div>

      {/* Notes Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold">Daftar Catatan ({notes.length})</h3>
        </div>

        <GenericTable
          columns={["#", "Judul", "Isi Catatan", "Aksi"]}
          data={notes}
          renderRow={(note, index) => (
            <tr key={note.id || index} className="border-t">
              <td className="px-6 py-4 font-medium text-gray-700 text-center w-10">{index + 1}.</td>
              <td className="px-6 py-4 w-48 text-emerald-600 font-semibold">{note.title}</td>
              <td className="px-6 py-4 w-full text-gray-600">{note.content}</td>
              <td className="px-6 py-4 w-16 text-center">
                <button onClick={() => handleDelete(note.id)} disabled={loading}>
                  <AiFillDelete className="text-red-400 text-2xl hover:text-red-600 transition-colors" />
                </button>
              </td>
            </tr>
          )}
        />
      </div>
    </div>
  );
}
    