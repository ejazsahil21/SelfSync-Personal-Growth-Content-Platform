export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        <input
          type="email"
          placeholder="Your email"
          className="w-full mb-4 px-4 py-2 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Your password"
          className="w-full mb-4 px-4 py-2 border rounded-lg"
        />

        <button className="w-full py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600">
          Sign In
        </button>
      </div>
    </div>
  );
}
