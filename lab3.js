function highlightMaxCell() {
    var table = document.getElementById('myTable1');
    var maxCellValue = -Infinity;
    var maxCell;

    for (var i = 0, row; row = table.rows[i]; i++) {
        for (var j = 0, cell; cell = row.cells[j]; j++) {
            var cellValue = parseInt(cell.innerHTML);
            if (!isNaN(cellValue) && cellValue > maxCellValue) {
                maxCellValue = cellValue;
                if (maxCell) {
                    maxCell.classList.remove('highlight');
                }
                maxCell = cell;
            }
        }
    }

    if (maxCell) {
        maxCell.classList.add('highlight');
    }
}

function displayNumbers() {
    var table = document.getElementById('myTable2');
    var numbers = [];

    for (var i = 0, row; row = table.rows[i]; i++) {
        for (var j = 0, cell; cell = row.cells[j]; j++) {
            var cellValue = parseInt(cell.innerHTML);
            if (!isNaN(cellValue)) {
                numbers.push(cellValue);
            }
        }
    }

    numbers.sort(function(a, b) {
        return a - b;
    });

    var outputField = document.getElementById('outputField');
    outputField.value = numbers.join(', ');
}

function calculateColumnSums() {
    var table = document.getElementById('myTable3');
    var sumRow = document.getElementById('sumRow');

    for (var j = 0; j < table.rows[0].cells.length; j++) {
        var sum = 0;
        for (var i = 0; i < table.rows.length - 1; i++) {
            var cellValue = parseInt(table.rows[i].cells[j].innerHTML);
            if (!isNaN(cellValue)) {
                sum += cellValue;
            }
        }
        sumRow.cells[j].innerHTML = sum;
    }
}

function pick(cell) {
    cell.classList.toggle('active');
}

function calculateSum() {
    var table = document.getElementById('myTable4');
    var cells = table.getElementsByClassName('active');
    var sum = 0;

    for (var i = 0; i < cells.length; i++) {
        sum += parseInt(cells[i].innerHTML);
    }

    document.getElementById('result4').innerHTML = 'Сума обраних комірок: ' + sum;
}

function resetCells() {
    var table = document.getElementById('myTable4');
    var cells = table.getElementsByClassName('active');

    while (cells.length > 0) {
        cells[0].classList.remove('active');
    }

    document.getElementById('result4').innerHTML = '';
}





var editingCell;

function editCell(cell) {
    editingCell = cell;

    var cellContent = cell.getElementsByClassName('cell-content')[0];
    cellContent.style.display = 'none';

    var inputField = cell.getElementsByTagName('input')[0];
    inputField.style.display = 'block';
    inputField.value = cellContent.innerText;

    inputField.focus();
}

function saveCell() {
    var inputField = editingCell.getElementsByTagName('input')[0];
    var newText = inputField.value;

    var cellContent = editingCell.getElementsByClassName('cell-content')[0];
    cellContent.innerText = newText;

    cellContent.style.display = 'inline';

    inputField.style.display = 'none';
}