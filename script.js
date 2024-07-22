// Event listener for the 'Enter' key press in the user input field
document.getElementById("user-input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage(); // Call sendMessage function when 'Enter' is pressed
  }
});

function sendMessage() {
  // Get user input and remove any extra spaces
  const userInput = document.getElementById("user-input").value.trim();
  if (!userInput) return; // If input is empty, do nothing

  // Display the user's message in the chat
  appendMessage(userInput, "user");
  document.getElementById("user-input").value = ""; // Clear the input field
  document.getElementById("typing-indicator").style.display = "flex"; // Show typing indicator

  // Simulate a delay before responding
  setTimeout(() => {
    document.getElementById("typing-indicator").style.display = "none"; // Hide typing indicator

    // Define responses to various keywords
    const responses = {
      "admission": "You can apply for admission online through our university website www.adypu.edu.in. Admission requirements and dates are available there.",
      "contact": "You can contact us at +91-8956487911. Our address is D Y Patil Knowledge City, Charholi Bk. Via Lohegaon, Pune - 412105 Maharashtra (India). Visit our contact page for more information.",
      "information": "You can contact us at +91-8956487911. Our address is D Y Patil Knowledge City, Charholi Bk. Via Lohegaon, Pune - 412105 Maharashtra (India). Visit our contact page for more information.",
      "courses": "We offer a variety of courses in: School of Engineering, School of Management, School of Design, School of Liberal Arts, School of Law, School of Hotel Management.",
      "hostel": "Yes, we provide hostel facilities for both boys and girls. For details on charges and availability, visit the hostel section on our website.",
      "facilities": "Our campus has state-of-the-art facilities including libraries, laboratories, sports complexes, and more. Visit our facilities page for more details.",
      "faculty": "Our faculty members are highly qualified with expertise in their respective fields. Visit our website for more details.",
      "professors": "Our faculty members are highly qualified with expertise in their respective fields. Visit our website for more details.",
      "fees": "Ajeenkya DY Patil University (ADYPU), Pune Fee Structure 2024 - B.Tech Rs 3,00,000, BBA Rs 2,30,000, B.Des Rs 3,50,000, BA Rs 2,30,000, BSc Rs 1,75,000 BCA Rs 2,00,000, M.Tech Rs 2,30,000, MBA Rs 3,50,000, MCA Rs 2,10,000.",
      "university scholarship": "Yes, we offer various scholarships based on merit and financial need. For more information on how to apply and the criteria, visit our scholarships page.",
      "hello": "Hello! How can I assist you today?",
      "hi": "Hello! How can I assist you today?",
      "hey": "Hello! How can I assist you today?",
      "placements": "Our university has a dedicated placement cell that assists students with job placements. Many reputed companies visit our campus for recruitment. Visit our placement page for more details.",
      "placement record": "At Ajeenkya DY Patil University, our placement records are impressive. The highest package was 21 lakhs per annum. The average package is 6 to 7 lakhs per annum. The lowest package was 4 lakhs per annum.",
      "average package": "At Ajeenkya DY Patil University, our placement records are impressive. The highest package was 21 lakhs per annum. The average package is 6 to 7 lakhs per annum. The lowest package was 4 lakhs per annum.",
      "it": "For IT support or Wi-Fi access, visit the IT department on campus or contact our helpdesk at +91-XXX-XXXXXXX.",
      "wifi": "For IT support or Wi-Fi access, visit the IT department on campus or contact our helpdesk at +91-XXX-XXXXXXX.",
      "health services": "Health services including counseling are available at our health center located on campus. Visit the health services page on our website for more information.",
      "counseling": "Health services including counseling are available at our health center located on campus. Visit the health services page on our website for more information.",
      "alumni": "Our alumni services offer career guidance and networking opportunities. Visit the alumni section on our website to explore services available post-graduation.",
      "pg": "We offer both on-campus and off-campus housing options. Explore the housing section on our website for details on dormitories and off-campus accommodations.",
      "research": "Research opportunities are available for undergraduate students, including involvement in faculty-led research projects. Explore the research section on our website for more details.",
      "placement preparation": "Career services provide support for job preparation, including resume writing workshops and mock interviews. Visit the career services section on our website for more information.",
      "job interviews": "Career services provide support for job preparation, including resume writing workshops and mock interviews. Visit the career services section on our website for more information.",
      "thank you": "You're welcome! Goodbye and thank you for chatting with us. Have a great day!",
      "bye": "Goodbye and thank you for chatting with us!"
    };

    // Convert user input to lowercase for case-insensitive matching
    const userInputLower = userInput.toLowerCase();
    // Find a response based on the user's input or use a default response if no match
    const matchedKey = Object.keys(responses).find(key => userInputLower.includes(key));
    const response = matchedKey ? responses[matchedKey] :
      "Unfortunately, I couldn’t find an answer to that. Please contact us at adypu.edu.in or call 020-35037942 for further assistance.";

    // Display the bot's response in the chat
    appendMessage(response, "bot");
  }, 1000); // Simulate a typing delay
}

function appendMessage(message, sender) {
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  messageElement.classList.add("message", sender);
  if (sender === "user") messageElement.style.marginLeft = "auto"; // Align user's messages to the right
  chatBox.appendChild(messageElement); // Add message to chat box
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom of the chat box
}

window.onload = function () {
  setTimeout(() => {
    appendMessage("Welcome to our help desk. How can I assist you today?", "bot");
  }, 500); // Show an initial welcome message
};
