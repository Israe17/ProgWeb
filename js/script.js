if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        const serviceWorkerPath = './serviceworker.js?v=3'
        const serviceWorkerUrl = new URL(serviceWorkerPath, window.location.href)

        console.log('Intentando registrar SW desde:', serviceWorkerUrl.href)

        try {
            const reg = await navigator.serviceWorker.register(serviceWorkerPath)
            console.log('Service Worker registrado correctamente. Scope:', reg.scope)
        } catch (err) {
            console.error('Error al instalar el SW:', err)
        }
    })
} else {
    console.log('Este navegador no soporta Service Workers')
}
