function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

window.addEventListener('DOMContentLoaded', () => {
    const exito = getQueryParam('exito');
    if (exito !== null) {
        const toast = document.getElementById('toast');
        if (exito === '1') {
            toast.style.backgroundColor = '#08D665'; // verde éxito
            toast.innerHTML = '✔  Envío del mensaje exitoso';
        } else {
            toast.style.backgroundColor = '#e74c3c'; // rojo error
            toast.innerHTML = '❌ Error al enviar el mensaje';
        }

        // Mostrar el toast con animación
        toast.classList.remove('hide');
        toast.classList.add('show');

        // Ocultar después de 3 segundos con animación
        setTimeout(() => {
            toast.classList.remove('show');
            toast.classList.add('hide');

            // Limpiar la URL sin recargar
            window.history.replaceState({}, document.title, "contact.html");
        }, 3000);
    }
});
