
function changeTheme_dark() {
    const theme = document.getElementById('currentTheme');
    theme.href = ('../../css/dark.css');
}
function changeTheme_light() {
    const theme = document.getElementById('currentTheme');
    theme.href = ('../../css/light.css');
}

function changeTheme_dark_mobile() {
    const theme = document.getElementById('currentTheme');
    theme.href = ('../../css/mobile-dark.css');
}
function changeTheme_light_mobile() {
    const theme = document.getElementById('currentTheme');
    theme.href = ('../../css/mobile-light.css');
}
//muda o tema substituindo a fonte dos arquivos de estilo
function checkTheme() {
    const defaultTheme = localStorage.getItem('storedTheme');
    if(window.screen.width>900){
        if (defaultTheme === ('dark') ) {
            changeTheme_dark();
        }else{
            localStorage.setItem('storedTheme', 'light');
            changeTheme_light();
        }
    }else{
        if (defaultTheme === ('dark-mobile') ) {
            changeTheme_dark_mobile();
        }else{
            localStorage.setItem('storedTheme', 'light-mobile');
            changeTheme_light_mobile();
        }
    }
}
//define se o menu mobile será carregado dependendo da quantidade de pixels
function clickChangetheme(){
    const defaultTheme = localStorage.getItem('storedTheme');
    if (defaultTheme === ('dark')) localStorage.setItem('storedTheme', 'light');
    if (defaultTheme === ('light')) localStorage.setItem('storedTheme', 'dark');
    if (defaultTheme === ('dark-mobile')) localStorage.setItem('storedTheme', 'light-mobile');
    if (defaultTheme === ('light-mobile')) localStorage.setItem('storedTheme', 'dark-mobile');
    checkTheme();
}//altera a variável storedTheme depois que o botão de mudança de tema é clicado  
function changeTheme() {
    const button = document.getElementById("themeButton");
    button.addEventListener("click", clickChangetheme());
}

setTimeout(() => {
    checkTheme();
}, 40)
//após 40ms verifica o tema do site após o carregamento