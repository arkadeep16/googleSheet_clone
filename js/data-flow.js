const selectedCellElement = document.querySelector('.selected-cell');
const form = document.getElementById('form');

const state = {};

const defaultStyles = {
  fontFamily: 'monospace',
  fontSize: 16,
  bold: false,
  italic: false,
  underline: false,
  align: 'left',
  textColor: '#000000',
  bgColor: '#ffffff',
};

form.addEventListener('change', () => {
  let selectedValues = {
    fontFamily: form.fontFamily.value,
    fontSize: form.fontSize.value,
    bold: form.bold.checked,
    italic: form.italic.checked,
    underline: form.underline.checked,
    alignment: form.alignment.value,
    textColor: form.textColor.value,
    bgColor: form.bgColor.value,
  };
  console.log(selectedValues);

  //now apply the styles to the selected cell

  const selectedCellElement = document.getElementById(selectedCell);

  selectedCellElement.style.fontFamily = selectedValues.fontFamily;
  selectedCellElement.style.fontSize = `${selectedValues.fontSize}px`;
  selectedCellElement.style.textAlign = selectedValues.alignment;
  selectedCellElement.style.fontWeight = selectedValues.bold
    ? 'bold'
    : 'normal';
  selectedCellElement.style.fontStyle = selectedValues.italic
    ? 'italic'
    : 'normal';
  selectedCellElement.style.textDecoration = selectedValues.underline
    ? 'underline'
    : 'none';
  selectedCellElement.style.color = selectedValues.textColor;
  selectedCellElement.style.backgroundColor = selectedValues.bgColor;

  state[selectedCell] = selectedValues;
});

let selectedCell = null;

const onCellFocus = (event) => {
  console.log(selectedCell);

  const selectedCellId = event.target.id;
  selectedCellElement.innerText = selectedCellId;

  selectedCell = selectedCellId;
  if (!state[selectedCell]) {
    state[selectedCell] = defaultStyles; // Use spread operator to create a copy of defaultStyles
  }

  // console.log(state[selectedCell]);
  applyCurrentCellStylesToForm();
};

function applyCurrentCellStylesToForm() {
  // apply styles of the current selected cell to the form

  //   form.bold.checked = state[selectedCell].bold;
  //   form.italic.checked = state[selectedCell].italic;
  //   form.underline.checked = state[selectedCell].underline;
  //   form.align.value = state[selectedCell].align;
  //   form.fontSize.value = state[selectedCell].fontSize;
  //   form.fontFamily.value = state[selectedCell].fontFamily;
  //   form.textColor.value = state[selectedCell].textColor;
  //   form.bgColor.value = state[selectedCell].bgColor;

  const currentCellStyles = state[selectedCell];
  for (const key in currentCellStyles) {
    if (form[key]) {
      form[key].type === 'checkbox'
        ? (form[key].checked = currentCellStyles[key])
        : (form[key].value = currentCellStyles[key]);
    }
  }
}
