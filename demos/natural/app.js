const products=[
 {id:1,name:"Vela Botânica",category:"Casa",desc:"Capim-limão • 180g",price:49.9,icon:"🕯️",color:"#d9dfc6",tag:"Mais vendido"},
 {id:2,name:"Sabonete Calêndula",category:"Banho",desc:"Artesanal • 100g",price:18.5,icon:"🧼",color:"#ead7b7",tag:"Natural"},
 {id:3,name:"Óleo Sereno",category:"Corpo",desc:"Lavanda • 120ml",price:42,icon:"🧴",color:"#cbd8cc",tag:"Novo"},
 {id:4,name:"Chá de Pausa",category:"Bem-estar",desc:"Blend autoral • 40g",price:27.9,icon:"🍵",color:"#e5d7c2",tag:"Favorito"},
 {id:5,name:"Difusor Floresta",category:"Casa",desc:"Cedro & folhas • 200ml",price:64.9,icon:"🌿",color:"#c5d4bd",tag:"Casa"},
 {id:6,name:"Escalda-pés",category:"Bem-estar",desc:"Ervas & sais • 250g",price:35,icon:"🫙",color:"#dfd4c8",tag:"Relaxar"},
 {id:7,name:"Creme de Mãos",category:"Corpo",desc:"Karité • 60g",price:29.9,icon:"🤲",color:"#e7d7c3",tag:"Cuidado"},
 {id:8,name:"Kit Presente",category:"Kits",desc:"4 itens • embalagem",price:119.9,icon:"🎁",color:"#c8d4c1",tag:"Presente"}
];
const BRL=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"});
const state={category:"Todos",search:"",cart:{}};
const $=s=>document.querySelector(s);
const categories=["Todos",...new Set(products.map(p=>p.category))];

function renderFilters(){ $("#filters").innerHTML=categories.map(c=>`<button class="filter ${c===state.category?"active":""}" data-category="${c}">${c}</button>`).join(""); }
function renderProducts(){
 const term=state.search.toLowerCase();
 const list=products.filter(p=>(state.category==="Todos"||p.category===state.category)&&(`${p.name} ${p.desc}`.toLowerCase().includes(term)));
 $("#productGrid").innerHTML=list.map(p=>`<article class="product-card"><div class="product-art" style="--card-bg:${p.color}"><span>${p.icon}</span><div class="tag">${p.tag}</div><button class="add" data-add="${p.id}" aria-label="Adicionar ${p.name}">+</button></div><div class="product-info"><div><b>${p.name}</b><small>${p.desc}</small></div><span class="price">${BRL.format(p.price)}</span></div></article>`).join("");
 $("#emptyState").hidden=list.length>0;
}
function add(id){state.cart[id]=(state.cart[id]||0)+1;renderCart();toast("Produto adicionado à sacola");}
function change(id,delta){state.cart[id]=(state.cart[id]||0)+delta;if(state.cart[id]<=0)delete state.cart[id];renderCart();}
function cartLines(){return products.filter(p=>state.cart[p.id]).map(p=>({...p,qty:state.cart[p.id]}));}
function renderCart(){
 const lines=cartLines(),count=lines.reduce((a,p)=>a+p.qty,0),total=lines.reduce((a,p)=>a+p.qty*p.price,0);
 $("#cartCount").textContent=count;
 $("#cartItems").innerHTML=lines.map(p=>`<div class="cart-row"><div class="cart-icon">${p.icon}</div><div><b>${p.name}</b><small>${BRL.format(p.price)}</small><div class="qty"><button data-change="${p.id}" data-delta="-1">−</button><span>${p.qty}</span><button data-change="${p.id}" data-delta="1">+</button></div></div><button class="remove" data-remove="${p.id}">remover</button></div>`).join("");
 $("#cartEmpty").hidden=lines.length>0;$("#cartFooter").hidden=!lines.length;$("#cartTotal").textContent=BRL.format(total);
}
function openCart(){ $("#cartDrawer").classList.add("open");$("#cartDrawer").setAttribute("aria-hidden","false");document.body.style.overflow="hidden"; }
function closeCart(){ $("#cartDrawer").classList.remove("open");$("#cartDrawer").setAttribute("aria-hidden","true");document.body.style.overflow=""; }
function whatsapp(){
 const lines=cartLines(); if(!lines.length)return;
 const total=lines.reduce((a,p)=>a+p.qty*p.price,0);
 const text=["Olá! Gostaria de fazer este pedido:","",...lines.map(p=>`• ${p.qty}x ${p.name} — ${BRL.format(p.qty*p.price)}`),"",`Total estimado: ${BRL.format(total)}`,"","Pode confirmar disponibilidade, frete e prazo?"];
 window.open(`https://wa.me/5511966189237?text=${encodeURIComponent(text.join("\n"))}`,"_blank");
}
function toast(text){const el=$("#toast");el.textContent=text;el.classList.add("show");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove("show"),1800);}
document.addEventListener("click",e=>{const addBtn=e.target.closest("[data-add]");if(addBtn)add(+addBtn.dataset.add);const f=e.target.closest("[data-category]");if(f){state.category=f.dataset.category;renderFilters();renderProducts()}const c=e.target.closest("[data-change]");if(c)change(+c.dataset.change,+c.dataset.delta);const r=e.target.closest("[data-remove]");if(r){delete state.cart[+r.dataset.remove];renderCart()}});
$("#search").addEventListener("input",e=>{state.search=e.target.value;renderProducts()});
$("#openCart").addEventListener("click",openCart);$("#closeCart").addEventListener("click",closeCart);$("#closeCartBackdrop").addEventListener("click",closeCart);
$("#whatsappCheckout").addEventListener("click",whatsapp);
$("#paymentCheckout").addEventListener("click",()=>toast("Pagamento será conectado ao provedor do cliente"));
renderFilters();renderProducts();renderCart();
