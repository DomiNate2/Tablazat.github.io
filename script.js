
    sor = prompt("Kérem adja meg a sorok számát:");
    oszlop = prompt("Kérem adja meg az oszlopok számát:");

    for (var i = 0; i < parseInt(sor); i++) {
        var elem = document.getElementById('tablazat').insertRow(i);
        for (var j = 0; j < parseInt(oszlop); j++) {
            var elem2 = elem.insertCell(j);
            elem2.innerHTML = i + 1 + "-" + (j+1);
        }
    }
