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

        // Apply the same styling to the new message box
        messageBox.style.width = "80%";
        messageBox.style.margin = "20px auto";
        messageBox.style.position = "relative";
        messageBox.style.overflow = "hidden";
        messageBox.style.backgroundColor = "#FFFFFF";
        messageBox.style.border = "1px solid #075685";
        messageBox.style.textAlign = "left";

        // Insert the new message at the top
        messagesContainer.insertBefore(messageBox, messagesContainer.firstChild);

        // Clear the input
        messageInput.value = "";
    }
}

function deleteMessage(iconElement) {
            // Get the parent container of the message (c_section)
            const messageContainer = iconElement.parentElement;
            
            // Remove the message container
            messageContainer.remove();
        }