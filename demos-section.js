document.addEventListener('DOMContentLoaded',()=>{
  const links=document.querySelector('.links');
  const processLink=links?.querySelector('a[href="#processo"]');
  if(links&&!links.querySelector('a[href="#demonstracoes"]')){
    const nav=document.createElement('a');nav.href='#demonstracoes';nav.textContent='Demonstrações';links.insertBefore(nav,processLink||null);
  }
  const offer=document.querySelector('.offer');
  if(!offer||document.getElementById('demonstracoes'))return;
  const section=document.createElement('section');section.className='demos-section';section.id='demonstracoes';
  section.innerHTML=`<div class="wrap">
    <div class="demos-head"><div><div class="kicker">Catálogos digitais</div><h2 class="title">Veja como seu negócio pode vender.</h2></div><p class="intro">Modelos demonstrativos com produtos, busca, carrinho e pedido pronto pelo WhatsApp.</p></div>
    <div class="demo-grid">
      <article class="demo-card"><a class="demo-preview" href="demos/natural/index.html" target="_blank"><img src="demos/natural/products-real.webp" alt="Prévia do catálogo Casa Verde"></a><div class="demo-body"><span class="demo-type">ARTESANAL E BEM-ESTAR</span><h3>Casa Verde</h3><p>Visual acolhedor para cosméticos, presentes, artesanato e produtos naturais.</p><div class="demo-actions"><a class="btn primary" href="demos/natural/index.html" target="_blank">Abrir demonstração →</a></div></div></article>
      <article class="demo-card"><a class="demo-preview" href="demos/moda/index.html" target="_blank"><img src="demos/moda/products-real.webp" alt="Prévia do catálogo de moda Noir"></a><div class="demo-body"><span class="demo-type">MODA E ACESSÓRIOS</span><h3>Noir</h3><p>Estilo marcante para roupas, calçados, acessórios e coleções sazonais.</p><div class="demo-actions"><a class="btn primary" href="demos/moda/index.html" target="_blank">Abrir demonstração →</a></div></div></article>
      <article class="demo-card"><a class="demo-preview" href="demos/farmacia/index.html" target="_blank"><img src="demos/farmacia/products-real.webp" alt="Prévia do catálogo de farmácia VivaBem"></a><div class="demo-body"><span class="demo-type">FARMÁCIA E CUIDADOS</span><h3>VivaBem</h3><p>Apresentação confiável para farmácias, perfumarias e lojas de cuidados.</p><div class="demo-actions"><a class="btn primary" href="demos/farmacia/index.html" target="_blank">Abrir demonstração →</a></div></div></article>
    </div>
    <div class="catalog-heading"><small>PLANOS DE CATÁLOGO DIGITAL</small><h3>Produtos ilimitados nos dois planos</h3><p>Escolha a opção ideal para começar a vender. Cancele quando quiser.</p></div>
    <div class="catalog-plans">
      <article class="catalog-plan"><span class="plan-name">BÁSICO</span><div class="plan-price"><strong>R$ 39,90</strong><span>/mês</span></div><ul><li>Produtos ilimitados</li><li>1 catálogo digital</li><li>Até 2 vendedores</li><li>Pedidos pelo WhatsApp</li></ul><a class="btn" href="https://wa.me/5511966189237?text=Ol%C3%A1%21%20Quero%20contratar%20o%20plano%20B%C3%A1sico%20do%20Cat%C3%A1logo%20Digital%20por%20R%24%2039%2C90%20por%20m%C3%AAs." target="_blank" rel="noopener">Escolher Básico →</a></article>
      <article class="catalog-plan featured-plan"><span class="recommended">RECOMENDADO</span><span class="plan-name">PREMIUM</span><div class="plan-price"><strong>R$ 59,90</strong><span>/mês</span></div><ul><li>Produtos ilimitados</li><li>Até 3 catálogos</li><li>Até 10 vendedores</li><li>Pagamento online</li><li>Pedidos pelo WhatsApp</li></ul><a class="btn" href="https://wa.me/5511966189237?text=Ol%C3%A1%21%20Quero%20contratar%20o%20plano%20Premium%20do%20Cat%C3%A1logo%20Digital%20por%20R%24%2059%2C90%20por%20m%C3%AAs." target="_blank" rel="noopener">Escolher Premium →</a></article>
    </div>
    <p class="demo-note">Produtos ilimitados e sem fidelidade nos dois planos. O pagamento online está disponível no plano Premium.</p>
  </div>`;
  offer.before(section);
});
