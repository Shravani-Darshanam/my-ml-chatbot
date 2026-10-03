async function sendMessage() {

    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const message = input.value.trim();

    if (message === "") {
        return;
    }

    // Show user's message
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = message;

    chatBox.appendChild(userMessage);

    // Clear input box
    input.value = "";

    try {

        // Send message to FastAPI
        const response = await fetch("http://127.0.0.1:8000/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: message
            })
        });

        const data = await response.json();

        // Show bot response
        const botMessage = document.createElement("div");
        botMessage.className = "bot-message";
        botMessage.textContent = data.response;

        chatBox.appendChild(botMessage);

    } catch (error) {

        const botMessage = document.createElement("div");
        botMessage.className = "bot-message";

        botMessage.textContent =
            "Sorry, I couldn't connect to the server.";

        chatBox.appendChild(botMessage);

        console.error(error);
    }

    // Scroll to latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}