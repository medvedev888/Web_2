const canvasGraphGrid = document.getElementById("canvas_graph_grid");
const canvasGraphFigures = document.getElementById("canvas_graph_figures");
const gridCtx = canvasGraphGrid.getContext("2d");
const figuresCtx = canvasGraphFigures.getContext("2d");

//size of graph
const canvasGraphGridWidth = canvasGraphGrid.clientWidth;
const canvasGraphGridHeight = canvasGraphGrid.clientHeight;

// Main axes
const xAxis = canvasGraphGridWidth / 2;
const yAxis = canvasGraphGridHeight / 2;

// size of grid
const scaleX = 50;
const scaleY = 50;

//grid rendering

function gridRendering() {
    let k = 1;

    gridCtx.beginPath();
    gridCtx.strokeStyle = "#000000";
    gridCtx.lineWidth = 0.25;

    for (let i = xAxis; i < canvasGraphGridWidth; i += scaleX) {
        gridCtx.moveTo(i, 0);
        gridCtx.lineTo(i, canvasGraphGridWidth);

        gridCtx.moveTo(i - scaleX * k, 0);
        gridCtx.lineTo(i - scaleX * k, canvasGraphGridWidth);

        gridCtx.moveTo(0, i);
        gridCtx.lineTo(canvasGraphGridHeight, i);

        gridCtx.moveTo(0, i - scaleY * k);
        gridCtx.lineTo(canvasGraphGridHeight, i - scaleY * k);
        k += 2;
    }

    gridCtx.stroke();
    gridCtx.closePath();
}


//drawing main axes

function drawingMainAxes() {
    gridCtx.beginPath();
    gridCtx.strokeStyle = "#000000";
    gridCtx.lineWidth = 1;

    gridCtx.moveTo(xAxis, 0);
    gridCtx.lineTo(xAxis, canvasGraphGridHeight);

    gridCtx.moveTo(0, yAxis);
    gridCtx.lineTo(canvasGraphGridWidth, yAxis);

    gridCtx.stroke();
    gridCtx.closePath();

    let m = -4;

    gridCtx.beginPath();

    gridCtx.font = "16px Arial";
    gridCtx.globalAlpha = 0.4;

    for (let i = 25; i < canvasGraphGridWidth; i += scaleX) {
        gridCtx.fillText(m, i, yAxis);
        gridCtx.fillText(-1 * m, xAxis, i);
        m++;
    }

    gridCtx.closePath();
}

//drawing point
function drawPoint(xCoord, yCoord) {
    xCoord = xCoord * scaleX + xAxis + scaleX;
    yCoord = yCoord * -1 * scaleY + yAxis;
    figuresCtx.beginPath();
    figuresCtx.fillStyle = "#01ff7f";
    figuresCtx.globalAlpha = 1;
    figuresCtx.arc(xCoord, yCoord, 3, 0, 2 * Math.PI);
    figuresCtx.fill();
    figuresCtx.globalAlpha = 0.5;
    figuresCtx.fillStyle = "black";
    figuresCtx.closePath();
}

function drawingFigure(r_value) {
    r = r_value;
    //drawing square
    figuresCtx.beginPath();
    figuresCtx.strokeStyle = "#000000";
    figuresCtx.globalAlpha = 0.5;
    figuresCtx.fillRect(xAxis + scaleX, yAxis, r * scaleX, r * scaleY);
    figuresCtx.closePath();

    //drawing triangle

    figuresCtx.beginPath();
    figuresCtx.moveTo(xAxis + scaleX, yAxis);
    figuresCtx.lineTo(xAxis + scaleX, yAxis + r * scaleY);
    figuresCtx.lineTo(xAxis + scaleX - (r / 2) * scaleY, yAxis);
    figuresCtx.strokeStyle = "#002636";
    figuresCtx.globalAlpha = 0.5;
    figuresCtx.fill();
    figuresCtx.closePath();

    //drawing quadrant of a circle

    figuresCtx.beginPath();
    figuresCtx.strokeStyle = "#002636";
    figuresCtx.globalAlpha = 0.5;
    figuresCtx.moveTo(xAxis + scaleX, yAxis);
    figuresCtx.arc(xAxis + scaleX, yAxis, r * scaleX, 0, (3 * Math.PI) / 2, true);
    figuresCtx.fill();
    figuresCtx.closePath();
}

function deleteFigures() {
    //deleting figures
    figuresCtx.beginPath();
    figuresCtx.clearRect(0, 0, 450, 450);
    figuresCtx.closePath();
}

// run может потом придется убрать
window.addEventListener("load", () => {
    gridRendering();
    drawingMainAxes();
})
