import React, { useState } from 'react';

function App() {
  const [command, setCommand] = useState('');
  const [status, setStatus] = useState('Kutib turibdi...');

  // Ovozli buyruqlarni olish funksiyasi
  const startListening = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'uz-UZ';

    recognition.onresult = (event) => {
      const spokenCommand = event.results[0][0].transcript.toLowerCase();
      setCommand(spokenCommand);
      executeCommand(spokenCommand);
    };

    recognition.onerror = (event) => {
      setStatus("Xato yuz berdi: " + event.error);
    };

    recognition.start();
  };

  // Ovozli buyruqlarni bajarish
  const executeCommand = (spokenCommand) => {
    if (spokenCommand.includes("chiroqni yoq")) {
      setStatus("Chiroq yoqildi!");
      // Chiroqni yoqish simulyatsiyasi
    } else if (spokenCommand.includes("youtubeni och")) {
      setStatus("YouTube ochildi!");
      window.open("https://www.youtube.com", "_blank");
    } else {
      setStatus("Bunday buyruq mavjud emas!");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-5">GPT Qurilma Boshqarish</h1>
        <button 
          onClick={startListening} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Ovozli Buyruqni Boshlash
        </button>
        <p className="mt-5 text-gray-700">Sizning buyruqingiz: <span className="font-bold">{command}</span></p>
        <p className="mt-2 text-green-600">{status}</p>
      </div>
    </div>
  );
}

export default App;
