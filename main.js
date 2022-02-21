step = [0, 10225, 26070, 74545, 160336];
percentage = [0, 11, 30, 41, 45]

function computeTax(wage, nb) {
    var realWage = wage / nb;

    var tax = 0;
    var idx = 1;
    while (realWage > 0) {
        if (realWage < step[idx]) {
            tax += (realWage - step[idx - 1]) * percentage[idx - 1] / 100;
            break;
        } else {
            tax += (step[idx] - step[idx - 1]) * percentage[idx - 1] / 100;
            idx++;
        }
    }

    return tax;
}

function compute() {
    // Get wages.
    var wage1 = parseInt(document.getElementById("wage1").value, 10);
    var wage2 = parseInt(document.getElementById("wage2").value, 10);
    if(Number.isNaN(wage2)) {
        wage2 = 0;
    }

    // Magic stuff made by law.
    wage1 = wage1 * 0.9;
    wage2 = wage2 * 0.9;

    // Compute tax.
    var together = computeTax(wage1 + wage2, 2);
    var separate1 = computeTax(wage1, 1);
    var separate2 = computeTax(wage2, 1);
    var separate = separate1 + separate2;

    document.getElementById("together").innerHTML = "Ensemble: " + together;
    document.getElementById("separate").innerHTML = "Séparement: " + separate + "(" + separate1 + ", " + separate2 + ")";
    return false;
}