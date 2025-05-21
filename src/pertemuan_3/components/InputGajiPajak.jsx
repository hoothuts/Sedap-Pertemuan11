export default function InputGajiPajak( {label, type, placehoder} ) {
    return (
        <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1"></label>
            <input 
            type={type}
            placeholder={placehoder}
            className="w-full p-2 border border-gray-300 rounded"
            />
        </div>
    )
}