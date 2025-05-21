export default function AddOrder() {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 max-w-xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4 text-biru">Add Order</h2>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Order Title"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-biru"
                />
                <input
                    type="number"
                    placeholder="Amount"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-biru"
                />
                <input
                    type="text"
                    placeholder="Customer ID"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-biru"
                />
                <button
                    type="submit"
                    className="bg-biru text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Save Order
                </button>
            </form>
        </div>
    );
}
