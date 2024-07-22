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

  // Convert user input to lowercase for case-insensitive matching
  const userInputLower = userInput.toLowerCase();

  // Find a response based on the user's input or use the default response if no match
  const response = Object.keys(responses).find(key => userInputLower.includes(key)) || 
    "Sorry, I don't understand that. Please contact us at acet@adypu.edu.in or call 020-35037942.";

  // Simulate a delay before showing the bot's response
  setTimeout(() => {
    appendMessage(response, "bot");
  }, 500);

  // Clear the input field
  document.getElementById("user-input").value = "";
}
