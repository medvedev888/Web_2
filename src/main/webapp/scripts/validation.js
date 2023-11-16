
//main variables
let x = -999;
let y = -999;
let r = 1;

// check changing r-value for drawing graph
radioValuesR = document.getElementsByName("enter_R");
const textNotificationR = document.getElementById("text_notification_r");

window.addEventListener("load", () => {

    pastRValue = document.querySelector(`input[type="radio"][class="enter_R"][value="${JSON.parse(decodeURIComponent(urlParams.get('r')))}"]`);

    if(pastRValue !== null) {
        pastRValue.checked = true;
        r = pastRValue.value;
    }
    else {
        deleteFigures();
        document.querySelector(`input[type="radio"][class="enter_R"][value="1"]`).checked = true;
        drawingFigure(r);
        redrawingPoints(arrayPoints);
    }

    for (let radio of radioValuesR) {
        radio.addEventListener('change', () => {
            if (radio.checked) {
                deleteFigures();
                r = parseFloat(radio.value);
                drawingFigure(r);
                redrawingPoints(arrayPoints);
            }
        })
    }
})


submitButton = document.getElementById("submit_button");

submitButton.onclick = function () {
    let checkerY = false;
    let checkerR = false;

    //кол-во checker-true
    let v = 0;

    //validation X
    const textNotificationX = document.getElementById("text_notification_x");
    let valueX = document.getElementById("enter_X").value.trim();

    if (!isNaN(valueX) && valueX !== '' && valueX !== '-0' && valueX.length <= 10) {
        if (valueX >= -3 && valueX <= 3) {
            v++;
            x = parseFloat(valueX);
            textNotificationX.style.marginLeft = "50px";
            notificationX.style.display = "none";
            selection_X.style.marginBottom = "10px";
        } else {
            textNotificationX.textContent = "should be in range[-3, 3]";
            textNotificationX.style.marginLeft = "50px";
            notificationX.style.display = "block";
            notificationX.style.fontSize = "14px";
            selection_X.style.marginBottom = "0px";
        }
    } else {
        textNotificationX.textContent = "must be a number";
        textNotificationX.style.marginLeft = "70px";
        notificationX.style.display = "block";
        notificationX.style.fontSize = "14px";
        selection_X.style.marginBottom = "0px";
    }

    //validation Y
    radioValuesY = document.getElementsByName("enter_Y");
    const textNotificationY = document.getElementById("text_notification_y");

    for (let radio of radioValuesY) {
        if (radio.checked) {
            checkerY = true;
            v++;
            y = parseFloat(radio.value);
            break;
        }
    }

    if (!checkerY) {
        textNotificationY.style.marginLeft = "50px";
        notificationY.style.display = "block";
        notificationY.style.fontSize = "14px";
        selection_Y.style.marginBottom = "0px";
    } else {
        textNotificationY.style.marginLeft = "50px";
        notificationY.style.display = "none";
        selection_Y.style.marginBottom = "10px";
    }

    //validation r

    for (let radio of radioValuesR) {
        if (radio.checked) {
            checkerR = true;
            v++;
            r = parseFloat(radio.value);
            break;
        }
    }

    if (!checkerR) {
        textNotificationR.style.marginLeft = "50px";
        notificationR.style.display = "block";
        notificationR.style.fontSize = "14px";
        selection_R.style.marginBottom = "0px";
    } else {
        textNotificationR.style.marginLeft = "50px";
        notificationR.style.display = "none";
        selection_R.style.marginBottom = "10px";
    }

    settingParametersHeight(v);
};

function settingParametersHeight(value) {
    if (value === 3) {
        parameters.style.height = "250px";
        sendRequest(x, y, r, true);
    } else if (value === 2) {
        parameters.style.height = "276px";
    } else if (value === 1) {
        parameters.style.height = "302px";
    } else {
        parameters.style.height = "328px";
    }
}