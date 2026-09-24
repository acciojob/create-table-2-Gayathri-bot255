function createTable() {
    let rn = prompt("Input number of rows");
    let cn = prompt("Input number of columns");

    // Check for non-numeric or empty input
    if (rn === null || cn === null || rn.trim() === "" || cn.trim() === "") {
        return;
    }

    rn = Number(rn);
    cn = Number(cn);

    // Check for invalid or non-positive values
    if (isNaN(rn) || isNaN(cn)) {
        return;
    }

    if (rn <= 0 || cn <= 0) {
        alert("Rows and columns must be greater than 0");
        return;
    }

    let table = document.getElementById("myTable");

    // Clear existing table
    table.innerHTML = "";

    // Create rows and columns
    for (let i = 0; i < rn; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < cn; j++) {
            let cell = document.createElement("td");
            cell.innerText = "Row-" + i + " Column-" + j;

            row.appendChild(cell);
        }

        table.appendChild(row);
    }
}
