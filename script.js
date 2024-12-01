const menu = [  
    { id: 1, nome: "Café Preto", preco: 5.00 },  
    { id: 2, nome: "Cappuccino", preco: 7.00 },  
    { id: 3, nome: "Latte", preco: 6.50 },  
];  

let carrinho = [];  

function exibirMenu() {  
    const menuDiv = document.getElementById('menu');  
    menu.forEach(item => {  
        const div = document.createElement('div');  
        div.classList.add('menu-item');  
        div.innerHTML = `  
            <h3>${item.nome}</h3>  
            <p>Preço: R$ ${item.preco.toFixed(2)}</p>  
            <button class="botao" onclick="adicionarAoCarrinho(${item.id})">Adicionar ao Carrinho</button>  
        `;  
        menuDiv.appendChild(div);  
    });  
}  

function adicionarAoCarrinho(id) {  
    const item = menu.find(i => i.id === id);  
    carrinho.push(item);  
    exibirCarrinho();  
}  

function exibirCarrinho() {  
    const carrinhoDiv = document.getElementById('carrinho');  
    carrinhoDiv.innerHTML = '';  
    carrinho.forEach(item => {  
        const div = document.createElement('div');  
        div.innerText = `${item.nome} - R$ ${item.preco.toFixed(2)}`;  
        carrinhoDiv.appendChild(div);  
    });  
}  

document.getElementById("finalizar-pedido").addEventListener("click", function() {  
    alert("Pedido finalizado! Obrigado!");  
});  

exibirMenu();  
