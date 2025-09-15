const Produtos = () => {

    //Objeto de produtos da lista
    const pizzas =[
        'Pizza de Mussarela',
        'Pizza de Calabresa',
        'Pizza de Baiana',
        'Pizza Portuguesa',
        'Pizza de Frango'
    ]
   //Interação da lista de pizzas
    const listaPizzas= pizzas.map(pizza => <li>{pizza}</li>)

    return(
        <div>
            <h3>Listagem de Produtos</h3>

            <ul>
               {listaPizzas} 
            </ul>
        </div>
    )
}
export default Produtos