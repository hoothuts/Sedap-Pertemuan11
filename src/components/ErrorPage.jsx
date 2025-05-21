export default function ErrorPage({ code = "404", description = "Halaman tidak ditemukan.", image }) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gray-50 text-center">
        {image && (
          <img
            src={image}
            alt={`Ilustrasi error ${code}`}
            className="max-w-xs md:max-w-md mb-8"
          />
        )}
        <h1 className="text-6xl font-bold text-gray-800 mb-4">{code}</h1>
        <p className="text-lg text-gray-600 mb-6">{description}</p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-hijau text-white rounded-md hover:bg-green-600 transition"
        >
          Kembali ke Beranda
        </a>
      </div>
    );
  }