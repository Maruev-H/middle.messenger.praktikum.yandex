import template from './chat-card.hbs';

window.addEventListener('load', () => {
    const rootNode = document.getElementById('root');
    rootNode.innerHTML = template();
})

