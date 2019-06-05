let weeklyUnits = 14;

function resetUnits() {
    let unitsLeft = weeklyUnits;
    $("#unitsLeft").val(unitsLeft);
    localStorage.setItem("unitsLeft", unitsLeft);
    return unitsLeft;
}

function takeUnits(unitsTaken) {
    let unitsLeft = $("#unitsLeft").val();
    unitsLeft -= unitsTaken;
    $("#unitsLeft").val(unitsLeft);
    localStorage.setItem("unitsLeft", unitsLeft);
    return unitsLeft;
}

function restoreUnits() {
    let unitsLeft = localStorage.getItem("unitsLeft");
    $("#unitsLeft").val(unitsLeft);
    return unitsLeft;
}
