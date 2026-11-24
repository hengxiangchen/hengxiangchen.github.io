(() => {
    // Reveal the arrow near either viewport edge, without covering the sidebar.
    const body = document.body;
    document.addEventListener('pointermove', event => {
        if (event.pointerType === 'touch') return;
        body.classList.toggle('page-edge-active',
            event.clientX <= 88 || event.clientX >= window.innerWidth - 88);
    }, { passive: true });
    document.documentElement.addEventListener('pointerleave', () => {
        body.classList.remove('page-edge-active');
    });
})();
