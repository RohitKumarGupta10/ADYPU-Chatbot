// Event listener for sending messages on 'Enter' key press
document
  .getElementById("user-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

// Function to send user message and get bot response
function sendMessage() {
  const userInput = document
    .getElementById("user-input")
    .value.trim()
    .toLowerCase(); // Get user input and trim whitespace

  if (!userInput) return; // If input is empty, do nothing

  appendMessage(userInput, "user"); // Display user message in chat

  // Bot responses based on keywords in user input
  let botResponse;

  // Match keywords for different intents with predefined responses
  if (userInput.includes("admission")) {
    botResponse =
      "You can apply for admission online through our university website that is www.adypu.edu.in. The admission requirements and dates are also available there.";
  } else if (
    userInput.includes("contact") ||
    userInput.includes("information")
  ) {
    botResponse =
      "You can contact us at +91-8956487911. Our address is D Y Patil Knowledge City, Charholi Bk. Via Lohegaon, Pune - 412105 Maharashtra (India). Visit our contact page for more information.";
  } else if (userInput.includes("courses")) {
    botResponse =
      "We offer a variety of courses in: School of Engineering, School of Management, School of Design, School of Liberal Arts, School of Law, School of Hotel Management.";
  } else if (userInput.includes("hostel") || userInput.includes("facilities")) {
    botResponse =
      "Yes, we provide hostel facilities for both boys and girls. For details on charges and availability, please visit the hostel section on our website.";
  } else if (userInput.includes("events")) {
    botResponse =
      "We have various events happening throughout the year, including #Tech Event, Impetus, Ablaze, and many more. Check out our events calendar on the university website for the latest updates.";
  } else if (userInput.includes("facilities")) {
    botResponse =
      "Our campus has state-of-the-art facilities including libraries, laboratories, sports complexes, and more. Visit our facilities page for more details.";
  } else if (
    userInput.includes("faculty") ||
    userInput.includes("professors")
  ) {
    botResponse =
      "Our faculty members are highly qualified with expertise in their respective fields. We have experienced professors and industry experts. Visit our website for more details.";
  } else if (userInput.includes("fees")) {
    botResponse =
      "Ajeenkya DY Patil University (ADYPU), Pune Fee Structure 2024 - B.Tech	Rs 3,00,000, BBA	Rs 2,30,000, B.Des	Rs 3,50,000, BA	Rs 2,30,000, BSc	Rs 1,75,000	 BCA	Rs 2,00,000 , M.Tech	Rs 2,30,000 ,MBA	Rs 3,50,000	, MCA	Rs 2,10,000.";
  } else if (
    userInput.includes("hello") ||
    userInput.includes("hi") ||
    userInput.includes("hey")
  ) {
    botResponse =
      "Welcome to Ajeenkya DY Patil University Chatbot. How can I assist you today?";
  } else if (userInput.includes("placements") || userInput.includes("jobs")) {
    botResponse =
      "Our university has a dedicated placement cell that assists students with job placements. Many reputed companies visit our campus for recruitment like TCS, Wipro, Tech Mahindra, Infosys, Microsoft and many more. Visit our placement page for more details.";
  } else if (
    userInput.includes("university scholarship")
  ) {
    botResponse =
      "Yes, we offer various scholarships based on merit and financial need. For more information on how to apply and the criteria, visit our scholarships page.";
  } else if (userInput.includes("academic calendar")) {
    botResponse =
      "The academic calendar includes important dates such as semester start/end, holidays, and exam periods. You can find the detailed calendar on our university's official website.";
  } else if (userInput.includes("it") || userInput.includes("wifi")) {
    botResponse =
      "For IT support or Wi-Fi access, please visit the IT department on campus or contact our helpdesk at +91-XXX-XXXXXXX.";
  } else if (
    userInput.includes("health services") ||
    userInput.includes("counseling")
  ) {
    botResponse =
      "Health services including counseling are available at our health center located on campus. Visit the health services page on our website for more information.";
  } else if (userInput.includes("alumni")) {
    botResponse =
      "Our alumni services offer career guidance and networking opportunities. Visit the alumni section on our website to explore services available post-graduation.";
  } else if (userInput.includes("hostel") || userInput.includes("pg")) {
    botResponse =
      "We offer both on-campus and off-campus housing options. Explore the housing section on our website for details on dormitories and off-campus accommodations.";
  } else if (
    userInput.includes("research")
  ) {
    botResponse =
      "Research opportunities are available for undergraduate students, including involvement in faculty-led research projects. Explore the research section on our website for more details.";
  } else if (
    userInput.includes("placement preparation") ||
    userInput.includes("job interviews")
  ) {
    botResponse =
      "Career services provide support for job preparation, including resume writing workshops and mock interviews. Visit the career services section on our website for more information.";
  } else {
    botResponse =
      "Unfortunately, we couldn't find the information you're looking for. Please contact us via email at acet@adypu.edu.in or call 020-35037942, +91-9881199224 for further assistance or request a callback.";
  }

  setTimeout(() => {
    appendMessage(botResponse, "bot"); // Display bot response in chat after a short delay
  }, 500);

  document.getElementById("user-input").value = ""; // Clear input field
}

// Function to append messages to chat
function appendMessage(message, sender) {
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("div");
  messageElement.textContent = message;

  if (sender === "user") {
    messageElement.classList.add("message", "user");
    messageElement.style.marginLeft = "auto"; // Align user messages to the right by pushing them to the right edge
  } else if (sender === "bot") {
    messageElement.classList.add("message", "bot");
  }

  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom of chat
}

// Initial welcome message from the bot when the page loads
window.onload = function () {
  const initialBotResponse =
    "Welcome to Ajeenkya DY Patil University help desk.\n\nAjeenkya DY Patil University, India's hub for innovation, offers an ideal environment for entrepreneurs and students with entrepreneurial spirits to enhance their ideas, pioneer groundbreaking technologies, and foster the growth of their startups.";
  setTimeout(() => {
    appendMessage(initialBotResponse, "bot"); // Display initial welcome message
  }, 500);
};
