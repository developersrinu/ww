const tHeadRow = document.getElementById('table-heading-row');
const tBody = document.getElementById('table-body');

const columns = 26;
const rows = 100;

for (let col = 0; col < columns; col++) {
    let th = document.createElement('th');
    // col -> 0 
    th.innerText= String.fromCharCode(col+65);
    tHeadRow.append(th);
}

for (let row = 1; row <= rows; row++) {
    // i create a tr
    let tr=document.createElement('tr');
    // number cell
    let th= document.createElement('th');
    // injecting number in th
    th.innerText=row;
    tr.append(th);
    for(let col=0;col<columns;col++){
        let td = document.createElement('td');
        tr.append(td);
    }
    tBody.append(tr);
}
