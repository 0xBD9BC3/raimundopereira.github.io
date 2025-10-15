export function getHeader(){
    if(window.screen.width>900){
        fetch('../include/header.html')
        .then(header => header.text())
        .then(html => document.getElementById('empty-header').innerHTML = html);
    }else{
        fetch('../include/header-mobile.html')
        .then(header => header.text())
        .then(html => document.getElementById('empty-header').innerHTML = html);
    }

};
//exporta a função para o html e injeta a barra de menu adequada em uma div de menu vazia do html de cada página
//com o títudo de empty-header