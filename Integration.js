async function sendMessage() {
  const message = userInput.value.trim();
  if (message) {
    addMessage('user', message);
    userInput.value = '';

    const response = await fetch('http://localhost:5000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });

    const data = await response.json();
    addMessage('ai', data.reply);
  }
}
