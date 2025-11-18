/**
 * Rubén Bernal Ramos, CSI1
 */

let saldo = 100;

const select = document.getElementById('libroSelect');
const cantidadInput = document.getElementById('cantidadInput');
const lista = document.getElementById('listaCompras');
const saldoEl = document.getElementById('saldo');
const terminos = document.getElementById('terminos');
const btn = document.getElementById('agregarBtn');

btn.addEventListener('click', () => {
  const cantidad = parseInt(cantidadInput.value);
  if (!terminos.checked) {
    alert('Debes aceptar los términos antes de comprar.');
    return;
  }
  if (isNaN(cantidad) || cantidad <= 0) {
    alert('La cantidad debe ser un número positivo.');
    return;
  }

  const precio = parseInt(select.options[select.selectedIndex].dataset.precio);
  const nombre = select.options[select.selectedIndex].textContent;
  const total = precio * cantidad;

  if (total > saldo) {
    alert('No tienes suficiente saldo para esta compra.');
    return;
  }

  saldo -= total;
  saldoEl.textContent = `Saldo disponible: ${saldo}€`;

  const li = document.createElement('li');
  li.textContent = `${nombre} — Cantidad: ${cantidad}`;
  lista.appendChild(li);

  cantidadInput.value = '';
});
