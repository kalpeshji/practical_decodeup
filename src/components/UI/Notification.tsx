import React from "react";
import { Check } from "lucide-react";

interface NotificationProps {
  message?: string;
  type?: "success" | "error" | "info" | "";
}

const Notification: React.FC<NotificationProps> = ({ message, type = "info" }) => {
  if (!message) return null;

  return (
    <div
      className={`fixed top-6 right-6 px-6 py-4 rounded-xl shadow-2xl z-50 flex items-center gap-3 ${
        type === "success"
          ? "bg-gradient-to-r from-green-500 to-emerald-600"
          : type === "error"
          ? "bg-gradient-to-r from-red-500 to-rose-600"
          : "bg-gradient-to-r from-blue-500 to-indigo-600"
      } text-white animate-slide-in backdrop-blur-sm`}
    >
      {type === "success" && <Check className="w-5 h-5" />}
      <span className="font-medium">{message}</span>
    </div>
  );
};

export default Notification;
