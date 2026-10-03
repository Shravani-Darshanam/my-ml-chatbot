async function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const message = input.value.trim();

    if (message === "") {
        return;
    }

    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = message;
    chatBox.appendChild(userMessage);

    input.value = "";

    try {
        const response = await fetch(
            "https://my-ml-chatbot.onrender.com/chat",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: message
                })
            }
        );

        if (!response.ok) {
            throw new Error("Server error");
        }

        const data = await response.json();

        const botMessage = document.createElement("div");
        botMessage.className = "bot-message";
        botMessage.textContent = data.response;

        chatBox.appendChild(botMessage);

    } catch (error) {
        console.error(error);

        const botMessage = document.createElement("div");
        botMessage.className = "bot-message";
        botMessage.textContent =
            "Sorry, I couldn't connect to the server.";

        chatBox.appendChild(botMessage);
    }

    chatBox.scrollTop = chatBox.scrollHeight;
}