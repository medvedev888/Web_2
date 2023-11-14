
// function for sending request to controller servlet
// variable "redirect" indicating whether redirection is needed or not
async function sendRequest(x, y, r, redirect) {
    const dataToSend = new FormData();

    dataToSend.append("x", x);
    dataToSend.append("y", y);
    dataToSend.append("r", r);
    dataToSend.append("redirect", redirect);

    console.log("start sending");

    const response = await fetch("controller", {
        method: "post",
        body: dataToSend
    });
    console.log(response);
    console.log("end sending");

    window.location = ctx + "/controller";

}