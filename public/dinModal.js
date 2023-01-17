
function addPanel (top, title, subtitle, url){

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

    addModal(url)
}

function addModal (url){

    const divModal = document.createElement('div');
    const divModalContent = document.createElement('div');
    const span = document.createElement('span');
    const divImg = document.createElement('div');

    divModal.classList.add("modal");
    divModalContent.classList.add("modal-content");
    span.classList.add("close");
    span.innerHTML = "&times;";
    divImg.classList.add("zoomC");
    divImg.style.background = `url(${url})`;

    divModalContent.appendChild(span);
    divModalContent.appendChild(divImg);
    divModal.appendChild(divModalContent);

    document.getElementById("modals").appendChild(divModal);
}

addPanel(28,"Painel 1", "Lampião, uma viagem pelo cangaço",'./img/painel1.png');
addPanel(33,"Painel 2", "Virgolino Ferreira",'./img/painel2.png');
addPanel(38,"Painel 3", "De Virgolino a Lampião - 1920",'./img/painel3.png');
addPanel(42,"Painel 4", "Capitão Virgolino Lampião - 1926",'./img/painel4.png');
addPanel(47,"Painel 5", "Curiosidades",'./img/painel5.png');
// addPanel(105,"Painel 6", "As influências na arte",'./img/painel5.png');
addPanel(109,"Painel 7", "Atacando Mossoró-RN 1927",'./img/painel7.png');
addPanel(114,"Painel 8", "Os cabras de Lampião - 1922-1940",'./img/painel8.png');
addPanel(120,"Painel 9", "As faces de Lampião",'./img/painel9.png');
addPanel(125,"Painel 10", "De Virgolino a Lampião - 1920",'./img/painel10.png');
addPanel(129,"Painel 11", "Alguns fatos marcantes",'./img/painel11.png');
addPanel(301,"Painel 12", "Angico - O fim de Lampião - 1938",'./img/painel12.png');
addPanel(305,"Painel 13", "Mulheres no cangaço - 1930/1940",'./img/painel13.png');
addPanel(314,"Painel 14", "Os bandos de Lampião - 1922/1938",'./img/painel14.png');
addPanel(318,"Painel 15", "As volantes",'./img/painel15.png');
addPanel(322,"Painel 16", "Armaduras dos guerreiros",'./img/painel16.png');
addPanel(326,"Painel 17", "As armas do cangaço",'./img/painel17.png');
// addPanel(333,"Painel 18", "Marcas do cangaço",'./img/painel5.png');
addPanel(343,"Painel 19", "Armaduras das guerreiras",'./img/painel19.png');
addPanel(350,"Painel 20", "O primeiro ataque - 1922",'./img/painel20.png');
addPanel(355,"Painel 21", "As volantes",'./img/painel21.png');
addPanel(360,"Painel 22", "Maria Bonita - 1930",'./img/painel22.png');
addPanel(370,"Painel 23", "Os bandos de Lampião - 1922/1938",'./img/painel23.png');



