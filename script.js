// When the user presses the 'Enter' key, send the message
document.getElementById("user-input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  // Get the user's input and remove any extra spaces
  const userInput = document.getElementById("user-input").value.trim();
  if (!userInput) return; // If there's no input, do nothing

  // Add the user's message to the chat
  appendMessage(userInput, "user");

  // Define responses to various keywords
  const responses = {
    "admission": "You can apply for admission online through our university website www.adypu.edu.in.",
    "contact": "You can contact us at +91-8956487911. Visit our contact page for more details.",
    "courses": "We offer courses in Engineering, Management, Design, and more.",
    "hostel": "Yes, we provide hostel facilities. Check our website for details.",
    "fees": "Fee structure details are available on our website.",
    "hello": "Hello! How can I assist you today?",
    "hi": "Hello! How can I assist you today?",
    "hey": "Hello! How can I assist you today?",
    "placements": "Our placement cell helps students with job placements.",
    "thank you": "You're welcome! Have a great day!",
    "bye": "Goodbye and thank you for chatting with us!"
  };

  // Find a response based on the user's input or default response if no match
  const response = Object.keys(responses).find(key => userInput.toLowerCase().includes(key)) || "Sorry, I don't understand that.";

  // Simulate a delay before showing the bot's response
  setTimeout(() => {
    appendMessage(responses[response], "bot");
  }, 500);

  // Clear the input field
  document.getElementById("user-input").value = "";
}

function appendMessage(message, sender) {
  // Get the chat box element
  const chatBox = document.getElementById("chat-box");

  // Create a new message element
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  messageElement.classList.add("message", sender);

  // Style the user's messages
  if (sender === "user") messageElement.style.marginLeft = "auto";

  // Add the new message to the chat box
  chatBox.appendChild(messageElement);
  
  // Scroll to the bottom of the chat box
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Show an initial welcome message when the page loads
window.onload = function () {
  setTimeout(() => {
    appendMessage("Welcome to our help desk. How can I assist you today?", "bot");
  }, 500);
};
