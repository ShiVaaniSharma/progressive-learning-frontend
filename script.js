document.addEventListener('DOMContentLoaded', () => {
    const contactNameInput = document.getElementById('contactName');
    const previewContactName = document.getElementById('previewContactName');
    const messageTextInput = document.getElementById('messageText');
    const messageTimeInput = document.getElementById('messageTime');
    const messageDateInput = document.getElementById('messageDate');
    const messageTypeSelect = document.getElementById('messageType');
    const readStatusSelect = document.getElementById('readStatus');
    const showDateSeparatorCheckbox = document.getElementById('showDateSeparator');

    const addMessageBtn = document.getElementById('addMessageBtn');
    const clearChatBtn = document.getElementById('clearChatBtn');
    const chatMessagesArea = document.getElementById('chatMessagesArea');

    // Update contact name in header
    contactNameInput.addEventListener('input', () => {
        previewContactName.textContent = contactNameInput.value || 'Contact';
    });
    // Initialize contact name
    previewContactName.textContent = contactNameInput.value || 'Contact';


    addMessageBtn.addEventListener('click', () => {
        const contactName = contactNameInput.value.trim();
        const text = messageTextInput.value.trim();
        const time = messageTimeInput.value.trim();
        let date = messageDateInput.value.trim();
        const type = messageTypeSelect.value; // 'sent' or 'received'
        const status = readStatusSelect.value; // 'none', 'sent', 'delivered', 'read'
        const showSeparator = showDateSeparatorCheckbox.checked;

        if (!text || !time) {
            alert('Please enter message text and time.');
            return;
        }
        
        if (showSeparator && date) {
            const separatorDiv = document.createElement('div');
            separatorDiv.classList.add('message-separator');
            separatorDiv.textContent = date.toUpperCase();
            chatMessagesArea.appendChild(separatorDiv);
        }

        const messageBubble = document.createElement('div');
        messageBubble.classList.add('message-bubble', type);

        const textP = document.createElement('p');
        textP.classList.add('text');
        textP.textContent = text;
        messageBubble.appendChild(textP);

        const metaDiv = document.createElement('div');
        metaDiv.classList.add('meta');

        const timeSpan = document.createElement('span');
        timeSpan.classList.add('time');
        timeSpan.textContent = time;
        metaDiv.appendChild(timeSpan);

        if (type === 'sent' && status !== 'none') {
            const ticksSpan = document.createElement('span');
            ticksSpan.classList.add('ticks');
            if (status === 'sent') {
                ticksSpan.innerHTML = '<i class="fas fa-check grey-tick"></i>';
            } else if (status === 'delivered') {
                ticksSpan.innerHTML = '<i class="fas fa-check grey-tick"></i><i class="fas fa-check grey-tick" style="margin-left:-7px;"></i>';
            } else if (status === 'read') {
                ticksSpan.innerHTML = '<i class="fas fa-check blue-tick"></i><i class="fas fa-check blue-tick" style="margin-left:-7px;"></i>';
            }
            metaDiv.appendChild(ticksSpan);
        }

        messageBubble.appendChild(metaDiv);
        chatMessagesArea.appendChild(messageBubble);

        // Scroll to bottom
        chatMessagesArea.scrollTop = chatMessagesArea.scrollHeight;

        // Optional: Clear message text for next entry
        // messageTextInput.value = '';
    });

    clearChatBtn.addEventListener('click', () => {
        chatMessagesArea.innerHTML = ''; // Clear all messages
        // Optionally, reset other fields like contact name etc.
        // contactNameInput.value = "Friend";
        // previewContactName.textContent = "Friend";
    });
});
//commit in emergency 
