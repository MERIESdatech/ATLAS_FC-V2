export function setupModal(modal, closeForm) {
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeForm();
        }
    });
    document.addEventListener('keydown', function (event) {
        if (modal.classList.contains('hidden')) {
            return;
        }
        if (event.key === 'Escape') {
            closeForm();
        }
        if (event.key === 'Tab') {
            const fields = modal.querySelectorAll('button, input, select');
            const visibleFields = [];
            for (let index = 0; index < fields.length; index++) {
                if (!fields[index].disabled && fields[index].getClientRects().length > 0) {
                    visibleFields.push(fields[index]);
                }
            }
            const firstField = visibleFields[0];
            const lastField = visibleFields[visibleFields.length - 1];
            if (event.shiftKey && document.activeElement === firstField) {
                event.preventDefault();
                lastField.focus();
            } else if (!event.shiftKey && document.activeElement === lastField) {
                event.preventDefault();
                firstField.focus();
            }
        }
    });
}
