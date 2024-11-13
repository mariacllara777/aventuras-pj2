function choose(option) {
    const storyElement = document.getElementById('story');
    const choicesElement = document.getElementById('choices');

    if (option === 'explorar') {
        storyElement.innerText = 'Você decidiu explorar a floresta e encontrou um rio misterioso. Você pode:';
        choicesElement.innerHTML = `
            <button onclick="choose('nadar')">Nadar no rio</button>
            <button onclick="choose('seguir')">Seguir o rio</button>
        `;
    } else if (option === 'acampar') {
        storyElement.innerText = 'Você montou um acampamento e avistou uma tribo local. Você pode:';
        choicesElement.innerHTML = `
            <button onclick="choose('conversar')">Conversar com a tribo</button>
            <button onclick="choose('espiar')">Espiar a tribo</button>
        `;
    } else if (option === 'nadar') {
        storyElement.innerText = 'Você nadou no rio e encontrou uma bela cachoeira! Você se sente revigorado.';
        choicesElement.innerHTML = '<button onclick="reset()">Voltar ao início</button>';
    } else if (option === 'seguir') {
        storyElement.innerText = 'Você seguiu o rio e encontrou uma ponte antiga. Você decide atravessar.';
        choicesElement.innerHTML = '<button onclick="reset()">Voltar ao início</button>';
    } else if (option === 'conversar') {
        storyElement.innerText = 'Você teve uma conversa amigável com a tribo e aprendeu sobre suas tradições.';
        choicesElement.innerHTML = '<button onclick="reset()">Voltar ao início</button>';
    } else if (option === 'espiar') {
        storyElement.innerText = 'Você espiou a tribo e descobriu que eles estão realizando uma cerimônia.';
        choicesElement.innerHTML = '<button onclick="reset()">Voltar ao início</button>';
    }
}

function reset() {
    const storyElement = document.getElementById('story');
    const choicesElement = document.getElementById('choices');
    storyElement.innerText = 'Você está na floresta amazônica. O que você deseja fazer?';
    choicesElement.innerHTML = `
        <button onclick="choose('explorar')">Explorar a floresta</button>
        <button onclick="choose('acampar')">Montar um acampamento</button>
    `;
}
