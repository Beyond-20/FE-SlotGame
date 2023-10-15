var paytable = document.getElementById("paytable");
var numberOfRows = 3;
var numberOfColumns = 5;
var numberOfPaylines = 50;

var linePayArr = [];

function loadJSON() {
    return (fetch("gameassets/1.04/panel/paylines.json")
        .then((data) => data.json())
        .then(async (res) => {
            const jsonData = await res;
            linePayArr = jsonData;

            for (let i = 1; i <= numberOfPaylines; i++) {
                let lineNumber = i;
                let linesArr = linePayArr[`line${i}`];
                let paylineView = `<div class="payline" id="payline-${i}">`
                paylineView += `<div>${i}</div><div class="payline-container">`;

                for (let j = 0; j < numberOfRows; j++) {
                    paylineView += `<div class="payline-row" id="payline-row-${j}">`;

                    for (let k = 0; k < numberOfColumns; k++) {
                        if(j == linesArr[k][0] && k == linesArr[k][1])
                            paylineView += `<div class="payline-col hightlight-square" id="row-${j}-col-${k}"></div>`
                        else
                            paylineView += `<div class="payline-col" id="row-${j}-col-${k}"></div>`;
                    }
                    paylineView += `</div>`;
                }
                paylineView += `</div></div>`;
                paytable.innerHTML += paylineView;
            }
        }))
}
loadJSON();



