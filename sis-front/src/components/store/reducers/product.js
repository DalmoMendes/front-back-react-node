const productsList = [
    {
      id_product: 1, 
      name_product: "Pão Frances - Massa Grossa",
      price: 4.50,
      image: "./images/produtos/paes/paes-pao-frances.jpg",
      category: "Pães",
      fk_idcategorys: 1,
      id_categorys: 1,
      name_categorys: "Pães",
      selected: false
    },
    {
      id_product: 2, 
      name_product: "Pão Doce - Coco de Creme",
      price: 4.50,
      image: "./images/produtos/paes/paes-pao-doce-coco-creme.jpg",
      category: "Pães",
      fk_idcategorys: 1,
      id_categorys: 1,
      name_categorys: "Pães",
      selected: false
    },
    {
      id_product: 3, 
      name_product: "Pão de Queijo Mineiro",
      price: 4.50,
      image: "./images/produtos/paes/pao-de-queijo.jpg",
      category: "Pães",
      fk_idcategorys: 1,
      id_categorys: 1,
      name_categorys: "Pães",
      selected: false
    },
    {
      id_product: 4, 
      name_product: "Pão Massa Fina Brasileiro",
      price: 4.50,
      image: "./images/produtos/paes/pao-massa-fina.jpg",
      category: "Pães",
      fk_idcategorys: 1,
      id_categorys: 1,
      name_categorys: "Pães",
      selected: false
    },

    {
      id_product: 5, 
      name_product: "Água Mineral de 500l, sem gás",
      price: 4.50,
      image: "./images/produtos/bebidas/agua-minaral-500ml.jpg",
      category: "Água",
      fk_idcategorys: 4,
      id_categorys: 4,
      name_categorys: "Bebidas",
      selected: false
    },
          
      {
        id_product: 6, 
        name_product: "Refrigerantes de 2L geladinho",
        price: 9.50,
        image: "./images/produtos/bebidas/refri-2l.jpg",
        category: "Refrigerantes",
        fk_idcategorys: 4,
        id_categorys: 4,
        name_categorys: "Bebidas",
        selected: false
      },
    
      {
        id_product: 7, 
        name_product: "Suco de Caixa 1L, vários sabores",
        price: 6.50,
        image: "./images/produtos/bebidas/suco-caixa1L.jpg",
        category: "Sucos",
        fk_idcategorys: 4,
        id_categorys: 4,
        name_categorys: "Bebidas",
        selected: false
      },
      {
        id_product: 8, 
        name_product: "Suco de Laranja 100% natural 1,5",
        price: 10.60,
        image: "./images/produtos/bebidas/suco-laranja-1.5l.jpg",
        category: "Sucos",
        fk_idcategorys: 4,
        id_categorys: 4,
        name_categorys: "Bebidas",
        selected: false
      },

      {
        id_product: 9, 
        name_product: "Bolo de Chocolate Caseiro",
        price: 14.60,
        image: "./images/produtos/confeitaria/conf-bolo-cho.jpg",
        category: "Confeitaria",
        fk_idcategorys: 5,
        id_categorys: 5,
        name_categorys: "Confeitaria",
        selected: false
      },
      {
        id_product: 10, 
        name_product: "Fatia de Bolo de Trigo Caseiro",
        price: 2.90,
        image: "./images/produtos/confeitaria/conf-bolo-trigo.jpg",
        category: "Confeitaria",
        fk_idcategorys: 5,
        id_categorys: 5,
        name_categorys: "Confeitaria",
        selected: false
      },
      {
        id_product: 11, 
        name_product: "Brigadeiros para aniversários 50u",
        price: 50.60,
        image: "./images/produtos/confeitaria/conf-brigadeiro.jpg",
        category: "Confeitaria",
        fk_idcategorys: 5,
        id_categorys: 5,
        name_categorys: "Confeitaria",
        selected: false
      },
      {
        id_product: 12, 
        name_product: "Salgadinhos para Aniversários 100u",
        price: 50.60,
        image: "./images/produtos/confeitaria/conf-salgadinhos.jpg",
        category: "Confeitaria",
        fk_idcategorys: 5,
        id_categorys: 5,
        name_categorys: "Confeitaria",
        selected: false
      },
      {
        id_product: 13, 
        name_product: "Biscoitos Salgados Mini Cracker",
        price: 6.90,
        image: "./images/produtos/bolachas/bol-biscoitos-salgados-mini-cracker.jpg",
        category: "Salgadas",
        fk_idcategorys: 2,
        id_categorys: 2,
        name_categorys: "Bolachas",
        selected: false
      },
      {
        id_product: 14, 
        name_product: "Biscoito Salgado Água Piraquê",
        price: 6.00,
        image: "./images/produtos/bolachas/bol-biscoito-agua-piraque.jpg",
        category: "Salgadas",
        fk_idcategorys: 2,
        id_categorys: 2,
        name_categorys: "Bolachas",
        selected: false
      },
      {
        id_product: 15, 
        name_product: "Rosquinhas de Chocolate Belma",
        price: 6.90,
        image: "./images/produtos/bolachas/bol-biscoitos-belma-rosquinhas.jpg",
        category: "Doce",
        fk_idcategorys: 2,
        id_categorys: 2,
        name_categorys: "Bolachas",
        selected: false
      },
      {
        id_product: 16, 
        name_product: "Biscoitos de Kookies Doce",
        price: 6.90,
        image: "./images/produtos/bolachas/bol-biscoitos-kookies.jpg",
        category: "Doce",
        fk_idcategorys: 2,
        id_categorys: 2,
        name_categorys: "Bolachas",
        selected: false
      },
      {
        id_product: 17, 
        name_product: "Açúcar Refinado União",
        price: 5.30,
        image: "./images/produtos/cesta-basica/acucar-refinado-uniao.jpg",
        category: "Alimentos",
        fk_idcategorys: 3,
        id_categorys: 3,
        name_categorys: "Cesta básica",
        selected: false
      },
      {
        id_product: 18, 
        name_product: "Feijão Carioca kicaldo",
        price: 5.20,
        image: "./images/produtos/cesta-basica/feijao-carioca.jpg",
        category: "Alimentos",
        fk_idcategorys: 3,
        id_categorys: 3,
        name_categorys: "Cesta básica",
        selected: false
      },
      {
        id_product: 19, 
        name_product: "Café Espresso Forte do Brasil",
        price: 8.90,
        image: "./images/produtos/cesta-basica/cafe-pilao-espresso.jpg",
        category: "Alimentos",
        fk_idcategorys: 3,
        id_categorys: 3,
        name_categorys: "Cesta básica",
        selected: false
      },
      {
        id_product: 20, 
        name_product: "Arroz faccio Agulhinha",
        price: 5.90,
        image: "./images/produtos/cesta-basica/arroz-faccio.jpg",
        category: "Alimentos",
        fk_idcategorys: 3,
        id_categorys: 3,
        name_categorys: "Cesta básica",
        selected: false
      },

];

export default productsList;