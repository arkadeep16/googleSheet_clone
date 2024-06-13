// ========================================///////////////////////////////////
const header = document.querySelector('.header');
const snoContainer = document.querySelector('.sno-container');
let rowContainer = document.querySelector('.row-container');
let columns = 27,
  rows = 50;
for (let i = 0; i < columns; i++) {
  // i = 1 => A => 65
  // i = 2 => b => 66
  // i = 3 => c => 67
  // i = 4 => z
  let cell = document.createElement('div');
  i != 0 && (cell.innerText = String.fromCharCode(64 + i));
  cell.className = 'cell';

  header.appendChild(cell);
  /*
  if (i != 0) {
    cell.innerText = String.fromCharCode(64 + i);
    header.appendChild(cell);
  }  // the condensed version of writing is above
*/
}

function createRow(rowNumber) {
  const row = document.createElement('div');
  row.className = 'row';

  for (let i = 1; i < columns; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.contentEditable = true;
    cell.id = `${String.fromCharCode(64 + i)}${rowNumber}`;
    cell.addEventListener('focus', onCellFocus);
    row.append(cell);
  }

  return row;
}

for (let i = 1; i <= rows; i++) {
  let sno = document.createElement('div');
  sno.innerText = i;
  sno.className = 'sno';
  snoContainer.appendChild(sno);

  let rowElement = createRow(i);
  rowContainer.append(rowElement);
}

// //////////////////////////////////////////////////////
