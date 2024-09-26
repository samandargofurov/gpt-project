import { useState } from 'react';

function App() {
  const [result, setResult] = useState('');

  const startListening = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'uz-UZ';

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript.toLowerCase();
      setResult(command);
      executeCommand(command);
    };

    recognition.onerror = (event) => {
      console.error("Xato: " + event.error);
    };

    recognition.start();
  };

  const executeCommand = (command) => {
    if (command.includes("chiroqni yoq")) {
      alert("Chiroq yoqildi! (simulyatsiya)");
    } else if (command.includes("youtube'ni och")) {
      window.open("https://www.youtube.com", "_blank");
    } else {
      alert("Bu buyruqni bajarish imkoni yo'q: " + command);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>GPT Qurilma Boshqarish</h1>
      <button onClick={startListening}>Ovozli Buyruq Berish</button>
      <p>Buyruq: {result}</p>
    </div>
  );
}

export default App;
