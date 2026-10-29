export function openModal(modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
    const firstField = modal.querySelector('input, button');
    if (firstField) {
        firstField.focus();
    }
}
