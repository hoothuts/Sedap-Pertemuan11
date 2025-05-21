export default function AddCustomer() {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 max-w-xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4 text-hijau">Add Customer</h2>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hijau"
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hijau"
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hijau"
                />
                <button
                    type="submit"
                    className="bg-hijau text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
                >
                    Save Customer
                </button>
            </form>
        </div>
    );
}
