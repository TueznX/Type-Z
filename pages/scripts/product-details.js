const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (produtos[id]) {
  const produto = produtos[id];

  document.getElementById('name').textContent = produto.nome;
  document.getElementById('desc').textContent = produto.descricao;
  document.getElementById('image').src = produto.imagem;
  document.getElementById('price').textContent = produto.preco;

} else {
  document.body.innerHTML = `
    <main id="product__not-found">
        <div class="product__not-found-container">
            <h1><i class="fa-solid fa-bug"></i><br>Produto não encontrado</h1>
            <p>O produto que você tentou acessar não existe ou foi removido.</p>
            <a href="javascript:history.back()">Voltar</a>
        </div>
    </main>
  `;
}



const shareBtn = document.getElementById('shareBtn');
const textSpan = shareBtn.querySelector('.text');

shareBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);

    const originalText = textSpan.textContent;

    shareBtn.classList.add('success');
    textSpan.textContent = 'Link copiado!';

    setTimeout(() => {
      shareBtn.classList.remove('success');
      textSpan.textContent = originalText;
    }, 2000);

  } catch (err) {
    console.error(err);
  }
});

document.querySelectorAll('.products1__card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.dataset.id;
    window.location.href = `product-details.html?id=${id}`;
  });
});