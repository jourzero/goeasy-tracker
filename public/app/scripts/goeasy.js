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
    saveCustoms();
    return unitsLeft;
}

function restoreUnits() {
    let unitsLeft = localStorage.getItem("unitsLeft");
    $("#unitsLeft").val(unitsLeft);
    return unitsLeft;
}

function saveCustoms() {
    localStorage.setItem("inVolume", $("#inVolume").val());
    localStorage.setItem("inStrength", $("#inStrength").val());
}

function restoreCustoms() {
    $("#inVolume").val(localStorage.getItem("inVolume"));
    $("#inStrength").val(localStorage.getItem("inStrength"));
    $("#customUnits").val(getCustomUnits());
}

function getCustomUnits() {
    let inStrength = $("#inStrength").val();
    let inVolume = $("#inVolume").val();
    let customUnits = Number((inStrength * inVolume) / 1000).toPrecision(2);
    $("#customUnits").val(customUnits);
    return customUnits;
}
