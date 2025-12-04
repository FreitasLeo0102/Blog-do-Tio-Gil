 const form = document.getElementById('chat-form');
        const input = document.getElementById('chat-input');
        const chatBox = document.getElementById('chat-box');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const messageText = input.value.trim();
            if (messageText === "") return;

            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', 'sent');
            messageDiv.innerHTML = `<span class="user">Você:</span> <span class="text">${messageText}</span>`;
            chatBox.appendChild(messageDiv);

            chatBox.scrollTop = chatBox.scrollHeight;
            input.value = '';
        });