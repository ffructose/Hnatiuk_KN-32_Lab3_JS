
// 1 завдання --------------------------------------------

function highlightMaxCell() {
    // отримую таблицю по id
    var table = document.getElementById('myTable1');

    // змінні для зберігання максимального значення і комірки з ним
    var maxCellValue = -Infinity;
    var maxCell;

    //  перебираю всі комірки таблиці
    for (var i = 0, row; row = table.rows[i]; i++) {
        for (var j = 0, cell; cell = row.cells[j]; j++) {

            // отримую значення комірки і перевіряю чи воно є числом
            var cellValue = parseInt(cell.innerHTML);
            if (!isNaN(cellValue) && cellValue > maxCellValue) {

                maxCellValue = cellValue;
                if (maxCell) {
                    // якщо максимальна комірка вже виділена - знімаю виділення
                    maxCell.classList.remove('highlight');
                }

                // зберігаю посилання на нову максимальну комірку
                maxCell = cell;
            }
        }
    }

    // якщо максимальна комірка знайдена - виділяю її
    if (maxCell) {
        maxCell.classList.add('highlight');
    }
}


// 2 завдання --------------------------------------------

function displayNumbers() {

    // отримую таблицю по id
    var table = document.getElementById('myTable2');

    // масив для зберігання чисел
    var numbers = [];

    // по комірках
    for (var i = 0, row; row = table.rows[i]; i++) {
        for (var j = 0, cell; cell = row.cells[j]; j++) {

            // отримую значення комірки і перевіряю чи воно є числом
            var cellValue = parseInt(cell.innerHTML);
            if (!isNaN(cellValue)) {

                // якщо число - додаю його в масив
                numbers.push(cellValue);
            }
        }
    }

    // сортую масив чисел
    numbers.sort(function(a, b) {

        // якщо a < b - повертаю від'ємне число
        return a - b;
    });

    // виводжу вміст масиву в поле виводу
    var outputField = document.getElementById('outputField');

    // якщо масив порожній - виводжу повідомлення
    outputField.value = numbers.join(', ');
}


// 3 завдання --------------------------------------------

function calculateColumnSums() {

    // отримую таблицю по id
    var table = document.getElementById('myTable3');

    // рядок для виводу сум
    var sumRow = document.getElementById('sumRow');

    // по комірках
    for (var j = 0; j < table.rows[0].cells.length; j++) {

        // сума по стовпцю
        var sum = 0;
        for (var i = 0; i < table.rows.length - 1; i++) {

            // отримую значення комірки і перевіряю чи воно є числом
            var cellValue = parseInt(table.rows[i].cells[j].innerHTML);
            if (!isNaN(cellValue)) {

                // якщо число - додаю його до суми
                sum += cellValue;
            }
        }

        // виводжу суму в комірку рядка сум
        sumRow.cells[j].innerHTML = sum;
    }
}


// 4 завдання --------------------------------------------

function pick(cell) {

    // якщо комірка вже обрана - знімаю виділення
    cell.classList.toggle('active');
}

function calculateSum() {


    var table = document.getElementById('myTable4');

    // всі виділені комірки
    var cells = table.getElementsByClassName('active');
    var sum = 0; // сума обраних комірок

    // перебираю всі виділені комірки і додаю їх значення до суми
    for (var i = 0; i < cells.length; i++) {

        sum += parseInt(cells[i].innerHTML);
    }

    // виводжу суму
    document.getElementById('result4').innerHTML = 'Сума обраних комірок: ' + sum;
}

function resetCells() {

    var table = document.getElementById('myTable4');
    var cells = table.getElementsByClassName('active');

    // знімаю виділення з усіх комірок
    while (cells.length > 0) {
        cells[0].classList.remove('active');
    }

    document.getElementById('result4').innerHTML = '';
}



// 5 завдання --------------------------------------------

var editingCell; // комірка, яку редагую

function editCell(cell) {
    editingCell = cell; 

    var cellContent = cell.getElementsByClassName('cell-content')[0];
    cellContent.style.display = 'none'; // ховаю текст

    
    var inputField = cell.getElementsByTagName('input')[0];
    inputField.style.display = 'block'; // показую поле вводу

    inputField.value = cellContent.innerText; // копіюю текст з комірки в поле вводу

    inputField.focus(); 
}

function saveCell() {

    // отримую значення з поля вводу
    var inputField = editingCell.getElementsByTagName('input')[0];
    var newText = inputField.value; // новий текст

    // зберігаю новий текст в комірку
    var cellContent = editingCell.getElementsByClassName('cell-content')[0];
    cellContent.innerText = newText; // виводжу новий текст

    
    cellContent.style.display = 'inline'; // показую текст

    inputField.style.display = 'none'; // ховаю поле вводу
}