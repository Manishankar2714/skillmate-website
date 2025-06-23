import { useState, useEffect } from "react";
import { BellIcon } from "@heroicons/react/24/solid";

export default function NotificationBell({ userName }) {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  // Fetch notifications for current user
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch(`http://localhost:4000/api/notifications?user=${userName}`);
        const data = await res.json();
        setNotifications(data.notifications || []);
      } catch (err) {
        console.error("Failed to load notifications", err);
      }
    };

    fetchNotifications();
  }, [userName]);

  return (
    <div className="relative">
      {/* Bell button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 bg-white rounded-full shadow hover:bg-gray-100"
        title="Notifications"
      >
        <BellIcon className="h-6 w-6 text-gray-700" />
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs px-1.5 rounded-full">
            {notifications.length}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-72 bg-white border rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
          <div className="p-4 border-b font-semibold text-gray-800">
            Notifications
          </div>

          {notifications.length === 0 ? (
            <div className="p-4 text-gray-500 text-sm">No new notifications</div>
          ) : (
            <ul className="divide-y text-sm">
              {notifications.map((note, idx) => (
                <li key={idx} className="p-3 hover:bg-gray-50">
                  <p className="text-gray-800">{note.message}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(note.timestamp).toLocaleString()}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
