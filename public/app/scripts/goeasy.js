function resetUnits() {
    unitsLeft = weeklyUnits;
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
    let unitsLeft = weeklyUnits;
    let restoredVal = document.cookie.replace(
        /(?:(?:^|.*;\s*)unitsLeft\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
    );
    //if (restoredVal >= 0 && restoredVal <= weeklyUnits) {
    unitsLeft = restoredVal;
    //}
    $("#unitsLeft").val(unitsLeft);
    return unitsLeft;
}
