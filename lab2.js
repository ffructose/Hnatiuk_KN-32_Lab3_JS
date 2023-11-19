var City = [];

City[0] = { Name: "Біла Церква", Code: "04563" }
City[1] = { Name: "Вінниця", Code: "043" }
City[2] = { Name: "Дніпро", Code: "056" }
City[3] = { Name: "Донецьк", Code: "062" }
City[4] = { Name: "Житомир", Code: "041" }
City[5] = { Name: "Запоріжжя", Code: "061" }
City[6] = { Name: "Івано-Франківськ", Code: "034" }
City[7] = { Name: "Київ", Code: "044" }
City[8] = { Name: "Кропивницький", Code: "052" }
City[9] = { Name: "Кременчук", Code: "05366" }
City[10] = { Name: "Кривий Ріг", Code: "0564" }
City[11] = { Name: "Луганськ", Code: "064" }
City[12] = { Name: "Луцьк", Code: "033" }
City[13] = { Name: "Львів", Code: "032" }
City[14] = { Name: "Маріуполь", Code: "0629" }
City[15] = { Name: "Миколаїв", Code: "051" }
City[16] = { Name: "Одеса", Code: "048" }
City[17] = { Name: "Полтава", Code: "053" }
City[18] = { Name: "Рівне", Code: "036" }
City[19] = { Name: "Суми", Code: "054" }
City[20] = { Name: "Тернопіль", Code: "035" }
City[21] = { Name: "Ужгород", Code: "031" }
City[22] = { Name: "Харків", Code: "057" }
City[23] = { Name: "Херсон", Code: "055" }
City[24] = { Name: "Хмельницький", Code: "" }
City[25] = { Name: "Черкаси", Code: "038" }
City[26] = { Name: "Чернігів", Code: "046" }
City[27] = { Name: "Чернівці", Code: "037" }
City[28] = { Name: "Севастополь", Code: "069" }
City[29] = { Name: "Сімферополь", Code: "065" }
City[30] = { Name: "Ялта", Code: "0654" }

function getCityCode(cityName) {
    
    for (var i = 0; i < City.length; i++) {
        if (City[i].Name.toLowerCase() === cityName.toLowerCase()) {
            return City[i].Code;
        }
    }
    return null; 
}

    function confirmAction() {
        // Отримати значення полів
        var telValue = document.getElementById("telInput").value;
        var cityValue = document.getElementById("cityInput").value;

        // Перевірка на заповненість обох полів
        if (telValue.trim() === "" || cityValue.trim() === "") {
            alert("Будь ласка, введіть номер телефону та місто.");
            return;
        }

        // Перевірка, чи введене місто є в масиві
        var cityCode = getCityCode(cityValue);

        if (cityCode) {
            // Вивід повідомлення з введеними даними
            var message = "+38" + cityCode + telValue ;

            // Виведення результатів під кнопками
            document.getElementById("resultContainer").innerText = message;
        } else {
            alert("Введене місто не знайдено в списку.");
        }
    }
