let messageTimer;
export function showMessage(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.remove('hidden');
    clearTimeout(messageTimer);
    messageTimer = setTimeout(function () {
        notification.classList.add('hidden');
    }, 3500);
}
