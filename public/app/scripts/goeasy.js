function resetUnits() {
    let unitsLeft = weeklyUnits;
    $("#unitsLeft").val(unitsLeft);
    document.cookie = "unitsLeft=" + unitsLeft;
}

function takeUnits(unitsTaken) {
    let unitsLeft = $("#unitsLeft").val();
    unitsLeft -= unitsTaken;
    $("#unitsLeft").val(unitsLeft);
    document.cookie = "unitsLeft=" + unitsLeft;
}

function restoreUnits() {
    let unitsleft = document.cookie.replace(
        /(?:(?:^|.*;\s*)unitsLeft\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
    );
    $("#unitsLeft").val(unitsLeft);
    return unitsLeft;
}
