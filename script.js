const tHeadRow = document.getElementById('table-heading-row');
const tBody = document.getElementById('table-body');
const boldButton=document.getElementById('bold-btn');
const italicsButton = document.getElementById('italics-btn');
const underlineButton = document.getElementById('underline-btn');
const leftAlign = document.getElementById('left-align');
const centerAlign = document.getElementById('center-align');
const rightAlign = document.getElementById('right-align');
const fontSizeDropDown = document.getElementById('font-size');
const fontStyleDropDown = document.getElementById('font-style');
const bgColorInput = document.getElementById('bgColor');
const textColorInput = document.getElementById('textColor');
const cutButton = document.getElementById('cut-button');
const copyButton = document.getElementById('copy-button');
const pasteButton = document.getElementById('paste-button');

let cutCell = {};

let currentCell;
const columns = 26;
const rows = 100;

for (let col = 0; col < columns; col++) {
    let th = document.createElement('th');
    // col -> 0 
    th.innerText= String.fromCharCode(col+65);
    tHeadRow.append(th);
}

for (let row = 1; row <= rows; row++) { // Row -> 1-100
    // i create a tr
    let tr=document.createElement('tr');
    // number cell
    let th= document.createElement('th');
    // injecting number in th
    th.innerText=row;
    tr.append(th);
    for(let col=0;col<columns;col++){ //COL-> 0->26 // A->Z
        let td = document.createElement('td');
        td.setAttribute('contenteditable','true');
        // unique row and unique col
        // ColRow
        td.setAttribute('id',`${String.fromCharCode(col+65)}${row}`)
        td.addEventListener('focus',(event)=>onFocusFn(event));
        tr.append(td);
    }
    tBody.append(tr);
}

// forming of outer array
let matrix = new Array(rows);
// let matrix=[];
for(let row=0;row<rows;row++){
    matrix[row]= new Array(columns);
    for(col=0;col<columns;col++){
        matrix[row][col]={};
    }
}

function onFocusFn(event){
    currentCell=event.target;
    document.getElementById('current-cell').innerText=currentCell.id;
    if(currentCell.style.fontWeight==='bold'){
        boldButton.style.backgroundColor='yellow';
    }
    else boldButton.style.backgroundColor='transparent';
}

boldButton.addEventListener('click',()=>{
    if(currentCell.style.fontWeight==='bold'){
        currentCell.style.fontWeight='normal';
    }
    else {
        currentCell.style.fontWeight='bold';
        boldButton.style.backgroundColor='yellow';
    }

    // currentCell.style.fontWeight = currentCell.style.fontWeight==='bold'? 'normal':'bold';
})

italicsButton.addEventListener('click',()=>{
    if(currentCell.style.fontStyle==='italic'){
        currentCell.style.fontStyle='normal';
    }
    else currentCell.style.fontStyle='italic';
})

underlineButton.addEventListener('click',()=>{
    if(currentCell.style.textDecoration==='underline'){
        currentCell.style.textDecoration='none';
    }
    else currentCell.style.textDecoration='underline';
})

leftAlign.addEventListener('click',()=>{
    currentCell.style.textAlign = 'left';
})

rightAlign.addEventListener('click',()=>{
    currentCell.style.textAlign = 'right';
})

centerAlign.addEventListener('click',()=>{
    currentCell.style.textAlign = 'center';
})

fontSizeDropDown.addEventListener('change',()=>{
    // what ever option tag is chosen by the end user is
    // mapped with select tag with value attribute
    currentCell.style.fontSize = fontSizeDropDown.value;
})

fontStyleDropDown.addEventListener('change',()=>{
    // what ever option tag is chosen by the end user is
    // mapped with select tag with value attribute
    currentCell.style.fontFamily = fontStyleDropDown.value;
})

// see the diff between input and change

textColorInput.addEventListener('input',()=>{
    currentCell.style.color = textColorInput.value;
})


bgColorInput.addEventListener('change',()=>{
    currentCell.style.backgroundColor = bgColorInput.value;
})


cutButton.addEventListener('click',()=>{
    cutCell={
        style: currentCell.style.cssText,
        text: currentCell.innerText,
    }
    currentCell.innerText='';
    currentCell.style.cssText='';
})

copyButton.addEventListener('click',()=>{
    cutCell={
        style: currentCell.style.cssText,
        text: currentCell.innerText,
    }
    // I don't need to delete anything here
    // currentCell.innerText='';
    // currentCell.style.cssText='';
})

pasteButton.addEventListener('click',()=>{
    currentCell.innerText=cutCell.text;
    currentCell.style.cssText=cutCell.style;
})

// 14 -> 22 (you triggered a change event)

// [ 
//  [{},{}],
//  [{},{}],
//  [{},{}],
// ]

// A2

// 1st row, col -> 0th

// A2 -> 1,0
// let row=id.substring(1); // 2
// let col=id[0]; // 'A' -> 65
// twoDArray[1][0]


// user clicks on download button.
// row * col
// 1st -> you traverse over table -> copy evey cell
// and then give that 2d matrix to the download

// constant
// 2nd -> you give the matrix
// when user is editing 

// constant operation
// 2d matrix

