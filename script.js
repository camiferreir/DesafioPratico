document.getElementById('form-lista').addEventListener('submit', function (e) {
  e.preventDefault();

  const produto = document.getElementById('produto').value.trim();
  const quantidade = document.getElementById('quantidade').value.trim();
  const lista = document.getElementById('lista-itens');

  if (produto === '' || quantidade === '' || isNaN(quantidade) || quantidade <= 0) {
    alert('Preencha corretamente o nome e a quantidade!');
    return;
  }

  const item = document.createElement('li');
  item.textContent = `${produto} - ${quantidade}`;
  item.addEventListener('click', () => {
    item.classList.toggle('comprado');
  });

  lista.appendChild(item);

  document.getElementById('produto').value = '';
  document.getElementById('quantidade').value = '';
});

document.getElementById('limpar').addEventListener('click', function () {
  const lista = document.getElementById('lista-itens');
  lista.innerHTML = '';
});
