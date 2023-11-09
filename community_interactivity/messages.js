function postMessage() {
    const messageInput = document.getElementById("message-input");
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        const messagesContainer = document.querySelector(".messages-container");
        const messageBox = document.createElement("div");
        messageBox.className = "c_section c_message1";
        /*moves text in new messages added*/
        messageBox.innerHTML = `
            <img src="icons/profile_pic.png" height="60px" width="60px" style="margin: 0; border: 0;">
            <p style="margin-left: 15px;">${messageText}</p>
            <i class="fas fa-trash trash-icon" onclick="deleteMessage(this)"></i>

        `;

        messageBox.style.width = "80%";
        messageBox.style.margin = "20px auto";
        messageBox.style.position = "relative";
        messageBox.style.overflow = "hidden";
        messageBox.style.backgroundColor = "#FFFFFF";
        messageBox.style.border = "1px solid #075685";
        messageBox.style.textAlign = "left";

        messagesContainer.insertBefore(messageBox, messagesContainer.firstChild);
        messageInput.value = "";
    }
}

// delte a post
function deleteMessage(iconElement) {
            const messageContainer = iconElement.parentElement;
            messageContainer.remove();
        }