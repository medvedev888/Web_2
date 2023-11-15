
// function for sending request to controller servlet
// variable "redirect" indicating whether redirection is needed or not
async function sendRequest(x, y, r, redirect) {

    const dataToSend = new FormData();
    dataToSend.append("x", x);
    dataToSend.append("y", y);
    dataToSend.append("r", r);

    const url = "controller?" + new URLSearchParams(dataToSend).toString();

    const response = await fetch(url, {
        method: "POST",
    });

    if(redirect === true) {
        window.location = ctx + "/result.jsp";
    }

}