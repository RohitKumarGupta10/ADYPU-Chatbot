// Base URL for the chatbot backend
const baseUrl = 'https://<your-railway-deployment-url>/webhooks/rest/webhook';

// Add event listener to the input field to send message on 'Enter' key press
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Function to send a message to the chatbot
async function sendMessage() {
    const userInput = document.getElementById('user-input').value; // Get the user's input
    if (!userInput) return; // If the input is empty, do nothing

    appendMessage(userInput, 'user'); // Add the user's message to the chat

    document.getElementById('user-input').value = ''; // Clear the input field

    // Send the user's message to the chatbot backend
    const response = await fetch(baseUrl, {
        method: 'POST', // Use POST method to send data
        headers: {
            'Content-Type': 'application/json' // Send data as JSON
        },
        body: JSON.stringify({ message: userInput }) // Convert message to JSON
    });

    // Get the response from the backend and add the bot's reply to the chat
    const data = await response.json();
    appendMessage(data[0].text, 'bot');
}

// Function to add a message to the chat
function appendMessage(message, sender) {
    const chatBox = document.getElementById('chat-box'); // Get the chat box
    const messageElement = document.createElement('div'); // Create a new message element
    messageElement.classList.add('message', sender); // Add appropriate classes
    messageElement.textContent = message; // Set the message text
    chatBox.appendChild(messageElement); // Add the message to the chat box
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom of the chat
}
