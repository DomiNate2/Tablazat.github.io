
    sor = prompt("K�rem adja meg a sorok sz�m�t:");
    oszlop = prompt("K�rem adja meg az oszlopok sz�m�t:");

    for (var i = 0; i < parseInt(sor); i++) {
        var elem = document.getElementById('tablazat').insertRow(i);
        for (var j = 0; j < parseInt(oszlop); j++) {
            var elem2 = elem.insertCell(j);
            elem2.innerHTML = i + 1 + "-" + (j+1);
        }
    }
