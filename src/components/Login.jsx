export default function Login() {
    return (
        <div className="w-[22rem] bg-gray-600 rounded-2xl p-8 ">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-black mb-1">Email</label>
                    <input
                        type="email"
                        className="w-full border bg-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="you@example.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-black mb-1">Password</label>
                    <input
                        type="password"
                        className="w-full border bg-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="••••••••"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
}
