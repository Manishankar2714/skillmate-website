import { signOut } from "next-auth/react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r h-full p-6 flex flex-col justify-between shadow">
      <div>
        <h2 className="text-2xl font-bold text-green-600 mb-8">Skillmate</h2>
        <ul className="space-y-4 text-gray-800 font-medium">
          <li className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
            <span>🏠</span>
            <span>Home</span>
          </li>
          <li className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
            <span>📅</span>
            <span>Calendar</span>
          </li>
          <li className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
            <span>🧾</span>
            <span>Services</span>
          </li>
          <li className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
            <span>💰</span>
            <span>Payments</span>
          </li>
          <li className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
            <span>👤</span>
            <span>Profile</span>
          </li>
        </ul>
      </div>
      <button
        onClick={() => signOut()}
        className="mt-10 bg-red-100 text-red-700 font-semibold py-2 px-4 rounded hover:bg-red-200"
      >
        

        Logout
      </button>
    </div>
  );
}
