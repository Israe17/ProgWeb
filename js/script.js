if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        const appBaseUrl = new URL('./', window.location.href)
        const serviceWorkerUrl = new URL('serviceworker.js', appBaseUrl)

        try {
            const reg = await navigator.serviceWorker.register(serviceWorkerUrl, {
                scope: appBaseUrl.pathname
            })
            console.log('Service Worker se ha instalado correctamente. Scope:', reg.scope)
        } catch (err) {
            console.log('Error al instalar el SW: ', err)
        }
    })
} else {
    console.log('Este navegador no soporta Service Workers')
}
