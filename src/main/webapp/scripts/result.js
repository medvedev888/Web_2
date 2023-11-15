
const urlParams = new URLSearchParams(window.location.search);
const dataInResult = JSON.parse(decodeURIComponent(urlParams.get('arrayPoint')));

goToMainPageButton = document.getElementById("goToMainPage");

goToMainPageButton.onclick = function () {
    window.location = ctx + "/index.jsp?arrayPoint=" + encodeURIComponent(JSON.stringify(dataInResult)) + "&r=" + JSON.parse(decodeURIComponent(urlParams.get('r')));
}