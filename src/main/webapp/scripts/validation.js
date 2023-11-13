
//main variables
let x = -999;
let y = -999;
let r = 1;

window.addEventListener("load", () => {
    settingsCheckbox();
})

//settings checkboxes, parsing r-value and drawing figures on graph
const checkboxes = document.getElementsByClassName("enter_R");
function settingsCheckbox() {
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener("change", function () {
            if (checkboxes[i].checked) {
                for (let j = 0; j < checkboxes.length; j++) {
                    if (i !== j) {
                        checkboxes[j].checked = false;
                    } else {
                        deleteFigures();
                        r = parseFloat(checkboxes[i].value);
                        drawingFigure(r);
                    }
                }
            }
        });
    }
}

submitButton = document.getElementById("submit_button");
submitButton.onclick = function () {
    checkerX = false;
    checkerR = false;

    //кол-во checker-true
    let v = 0;

    //validation X
    radioValues = document.getElementsByName("enter_X");
    const textNotificationX = document.getElementById("text_notification_x");

    for (let radio of radioValues) {
        if (radio.checked) {
            checkerX = true;
            v++;
            x = parseFloat(radio.value);
            break;
        }
    }

    if (!checkerX) {
        textNotificationX.style.marginLeft = "50px";
        notificationX.style.display = "block";
        notificationX.style.fontSize = "14px";
        selection_X.style.marginBottom = "0px";
    } else {
        settingParametersHeight(v);
        textNotificationX.style.marginLeft = "50px";
        notificationX.style.display = "none";
        selection_X.style.marginBottom = "10px";
    }

    //validation Y
    const textNotificationY = document.getElementById("text_notification_y");
    valueY = document.getElementById("enter_Y").value.trim();

    if (!isNaN(valueY) && valueY !== '' && !Object.is(valueY, -0) && valueY.length <= 10) {
        if (valueY >= -3 && valueY <= 3) {
            v++;
            y = parseFloat(valueY);
            settingParametersHeight(v);
            textNotificationY.style.marginLeft = "50px";
            notificationY.style.display = "none";
            selection_Y.style.marginBottom = "10px";
        } else {
            textNotificationY.textContent = "should be in range[-3, 3]";
            textNotificationY.style.marginLeft = "50px";
            notificationY.style.display = "block";
            notificationY.style.fontSize = "14px";
            selection_Y.style.marginBottom = "0px";
        }
    } else {
        textNotificationY.textContent = "must be a number";
        textNotificationY.style.marginLeft = "70px";
        notificationY.style.display = "block";
        notificationY.style.fontSize = "14px";
        selection_Y.style.marginBottom = "0px";
    }

    //validation r
    const textNotificationR = document.getElementById("text_notification_r");
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            deleteFigures();
            checkerR = true;
            v++;
            r = parseFloat(checkbox.value);
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
    if (value == 3) {
        parameters.style.height = "250px";
    } else if (value == 2) {
        parameters.style.height = "276px";
    } else if (value == 1) {
        parameters.style.height = "302px";
    } else {
        parameters.style.height = "328px";
    }
}