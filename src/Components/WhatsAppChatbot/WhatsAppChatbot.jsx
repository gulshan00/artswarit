import { useState } from "react";

export default function WhatsAppButton() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      window.open(
        "https://wa.me/7903074152?text=Hi%2C%20I%20would%20like%20to%20chat%20with%20support.",
        "_blank"
      );
    }, 2000);
  };

  return (
    <div className="fixed bottom-20 right-4 flex flex-col items-end space-y-2 z-50 md:bottom-20 md:right-4">
      {showMessage && (
        <div className="bg-white text-black px-4 py-2 rounded-lg shadow-md text-sm max-w-[200px]">
          <p>Hi 👋</p>
          <p>Thank you for reaching out!</p>
        </div>
      )}
      <button
        onClick={handleClick}
        className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.52 3.48A11.72 11.72 0 0012.1 0a11.94 11.94 0 00-10.1 18L0 24l6.36-1.95A11.88 11.88 0 0012 24c6.63 0 12-5.37 12-12a11.89 11.89 0 00-3.48-8.52zM12 22a9.93 9.93 0 01-5.06-1.39l-.36-.21-3.77 1.16 1.17-3.66-.23-.37A9.95 9.95 0 1112 22zm5.25-7.32c-.29-.14-1.72-.85-1.98-.94s-.46-.14-.65.14-.75.93-.92 1.12-.34.21-.63.07a8.3 8.3 0 01-2.44-1.5 9.21 9.21 0 01-1.7-2.1c-.17-.29 0-.45.13-.59.14-.15.3-.35.45-.52s.2-.29.3-.48a.57.57 0 000-.54c-.15-.14-.66-1.6-.91-2.2s-.48-.5-.65-.51-.36 0-.56 0a1.08 1.08 0 00-.79.36 3.29 3.29 0 00-1 2.44 5.71 5.71 0 001.2 2.94 13.09 13.09 0 004.74 4.69 10.5 10.5 0 002.46.91c1 .31 1.9.27 2.61.16.8-.12 2.43-.99 2.77-1.95a2.22 2.22 0 00.16-1.95c-.06-.11-.26-.17-.54-.31z" />
        </svg>
        <span className="text-sm md:text-base">Chat on WhatsApp</span>
      </button>
    </div>
  );
}
