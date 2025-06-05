const quill = new Quill('#editor', {
  theme: 'snow',
  modules: {
    toolbar: '#toolbar',
    history: {
      delay: 10,
      maxStack: 50,
      userOnly: true
    }
  }
});

document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
});

document.getElementById('show-output').addEventListener('click', () => {
  const OutputBlock = document.querySelector(".right-block");
  OutputBlock.classList.toggle("hide");
  updateHTML();
});
quill.on('text-change', () => {
updateHTML();
});

function updateHTML() {
  let html = quill.root.innerHTML;

  html = html.replace(/<p><br><\/p>/g, '<br>');
  html = html.replace(/(<\/p>)/g, '$1\n')
    .replace(/<br>/g, '<br>\n');
  html = html.trim();

  const codeBlock = document.getElementById('output-html');
  codeBlock.textContent = html;

  const lines = html.split('\n');
  const numberBlock = document.getElementById('line-numbers');
  numberBlock.innerHTML = '';
  for (let i = 1; i <= lines.length; i++) {
    numberBlock.innerHTML += i + '<br>';
  }
}

function clearEditor() {
  quill.setText('');
  document.getElementById('output-html').textContent = '';
  document.getElementById('line-numbers').innerHTML = '';
}

document.getElementById('undo-button').addEventListener('click', () => quill.history.undo());
document.getElementById('redo-button').addEventListener('click', () => quill.history.redo());
document.getElementById('print-button').addEventListener('click', () => {
  const content = document.querySelector('#editor .ql-editor').innerHTML;
  const printWindow = window.open('', '', 'height=600,width=800');
  printWindow.document.write('<html><head><title>Print</title>');
  printWindow.document.write('<style>body{font-family:sans-serif;padding:20px;}</style>');
  printWindow.document.write('</head><body>');
  printWindow.document.write(content);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
  printWindow.close();
});
