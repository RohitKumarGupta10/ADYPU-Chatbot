const projectId = 'summer-project-mdnh'; // Your Dialogflow project ID
const apiKey = 'AIzaSyAo7rLet38fKMsOuDvlLwNRCRVQtpcTESA'; // Your new API key

document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

async function sendMessage() {
    const userInput = document.getElementById('user-input').value; // Get the user's input
    if (!userInput) return; // If the input is empty, do nothing

    appendMessage(userInput, 'user'); // Add the user's message to the chat

    document.getElementById('user-input').value = ''; // Clear the input field

    const sessionId = '123456'; // You can generate a unique session ID for each user

    try {
        console.log('Sending message to Dialogflow:', userInput); // Log the message being sent

        const response = await axios.post(`https://dialogflow.googleapis.com/v2/projects/${projectId}/agent/sessions/${sessionId}:detectIntent`, {
            queryInput: {
                text: {
                    text: userInput,
                    languageCode: 'en-US'
                }
            }
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('Response from Dialogflow:', response.data); // Log the response from Dialogflow

        if (response.data.queryResult && response.data.queryResult.fulfillmentText) {
            const botResponse = response.data.queryResult.fulfillmentText;
            appendMessage(botResponse, 'bot');
        } else {
            throw new Error('Invalid response from Dialogflow');
        }
    } catch (error) {
        console.error('Error connecting to Dialogflow API:', error); // Log any errors
        appendMessage('Sorry, there was an error processing your request. Please try again later.', 'bot');
    }
}

function appendMessage(message, sender) {
    const chatBox = document.getElementById('chat-box'); // Get the chat box
    const messageElement = document.createElement('div'); // Create a new message element
    messageElement.classList.add('message', sender); // Add appropriate classes
    messageElement.textContent = message; // Set the message text
    chatBox.appendChild(messageElement); // Add the message to the chat box
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom of the chat
}
