// Set up an event listener to send a message when the 'Enter' key is pressed
document.getElementById("user-input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// Function to handle sending a message
function sendMessage() {
  // Get the user's input and remove any extra spaces
  const userInput = document.getElementById("user-input").value.trim();
  if (!userInput) return; // Do nothing if the input is empty

  // Show the user's message in the chat
  appendMessage(userInput, "user");

  // Define possible responses
  const responses = {
    "admission": "Apply for admission online through our website www.adypu.edu.in.",
    "contact": "Contact us at +91-8956487911. Visit our contact page for details.",
    "courses": "We offer courses in Engineering, Management, Design, and more.",
    "hostel": "Yes, we provide hostel facilities. Check our website for details.",
    "fees": "Fee structure details are on our website.",
    "hello": "Hello! How can I help you today?",
    "hi": "Hello! How can I help you today?",
    "hey": "Hello! How can I help you today?",
    "placements": "Our placement cell assists with job placements.",
    "thank you": "You're welcome! Have a great day!",
    "bye": "Goodbye and thank you for chatting with us!"
  };

  // Convert user input to lowercase
  const userInputLower = userInput.toLowerCase();

  // Find a matching response or use the default response
  let response = "Sorry, I don't have an answer for that. Contact us at adypu.edu.in or call 020-35037942.";
  for (const key in responses) {
    if (userInputLower.includes(key)) {
      response = responses[key];
      break;
    }
  }

  // Add the bot's response to the chat with a slight delay
  setTimeout(() => {
    appendMessage(response, "bot");
  }, 500); // 500 milliseconds delay

  // Clear the input field
  document.getElementById("user-input").value = "";
}

// Function to show a message in the chat
function appendMessage(message, sender) {
  // Get the chat box element
  const chatBox = document.getElementById("chat-box");

  // Create a new message element
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  messageElement.classList.add("message", sender);

  // Style the user's message
  if (sender === "user") messageElement.style.marginLeft = "auto";

  // Add the message to the chat box
  chatBox.appendChild(messageElement);
  
  // Scroll to the bottom of the chat box
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Show a welcome message when the page loads
window.onload = function () {
  setTimeout(() => {
    appendMessage("Welcome to our help desk. How can I assist you today?", "bot");
  }, 500);
};
