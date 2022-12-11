
function addPanel (top, title, subtitle){

    const section = document.createElement('section');
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    section.classList.add("video-section-container");
    
    section.style.top = top * 300 + "px"
    
    section.style.height = "600px"
    div.classList.add("video-section-content");
    div.classList.add("panel");
    h1.textContent = title;
    p.textContent = subtitle;

    h1.appendChild(p);
    div.appendChild(h1);
    section.appendChild(div);

    document.getElementById("video-sections").appendChild(section);
}

function addModal (url){

    const divModal = document.createElement('div');
    const divModalContent = document.createElement('div');
    const span = document.createElement('span');
    const divImg = document.createElement('div');

    divModal.classList.add("modal");
    divModalContent.classList.add("modal-content");
    span.classList.add("close");
    span.textContent = "x";
    divImg.classList.add("zoomC");
    divImg.style.background = `url(${url})`;

    divModalContent.appendChild(span);
    divModalContent.appendChild(divImg);
    divModal.appendChild(divModalContent);

    document.getElementById("modals").appendChild(divModal);
}

addPanel(28,"Painel 1", "Lampião, uma viagem pelo cangaço");
addPanel(33,"Painel 2", "Virgolino Ferreira");
addPanel(38,"Painel 3", "De Virgolino a Lampião - 1920");
addPanel(42,"Painel 4", "Capitão Virgolino Lampião");
addPanel(47,"Painel 5", "Curiosidades");

addModal('./img/painel1.png')
addModal('./img/painel2.png')
addModal('./img/painel3.png')
addModal('./img/painel4.png')
addModal('./img/painel5.png')


