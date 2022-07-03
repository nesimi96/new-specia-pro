export const products = () => {

      const neckMassager = () => {

        // ELECTRIC NECK MASSAGER
        let productPrices = {regularPrice: 2500, discountPrice: 1990}
        let initialPrice = 1990;
        let specialDiscounts = [{quanity: 1, price: 1990, }, {quanity: 2, price: 1690, }]
        let productDescription = [
          'It is a <b>long established</b> fact that a reader will be distracted by the readable content of a page when looking at its layout',
          `If you are going to use a passage of <b>Lorem Ipsum</b>, you need to be sure there isn't anything embarrassing hidden in the middle of text.`,
          `The generated <b/>Lorem Ipsum</b> is therefore always free from repetition, injected humour, or non-characteristic words etc.`
        ]
        let productSpecifications = 
        {colors: [{color: ['black', 'white'], colorLabel: 'crna', img: ['electric-neck-massage-black-1', 'electric-neck-massage-black-2', 'electric-neck-massage-black-3'], pcs: 3},
        {color: ['red', 'white'], colorLabel: 'crvena', img: ['electric-neck-massage-red-1', 'electric-neck-massage-red-2'], pcs: 3}
                  ],
        size: null}
  
        let specifications = [
          {specName: 'Materijal:', spec: 'Composite materijal'}, {specName: 'Opis:', spec: 'Masažer za vrat'},
          {specName: 'Brine:', spec: '15 brzina'}, {specName: 'Rad:', spec: '2 AAA baterije'}
        ]
        let productfaq = [
          {q: 'How are you feeling today?', a: 'Im feel great, thank you for asking'},
           {q: 'Where can I get some?', a: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'},
           {q: 'Where it does come from?', a: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'},
        ]
        let productURL = '/proizvod/electric-neck-massager'

        let filter = ['Najpopularniji'];
        
        const obj = {
          productName: 'ELECTRIC NECK MASSAGER',
          productPrices: productPrices,
          initialPrice: initialPrice,
          specialDiscounts: specialDiscounts,
          productDescription: productDescription,
          productSpecifications: productSpecifications,
          specifications: specifications,
          productfaq: productfaq,
          productURL: productURL,
          recommend: 'massage',
          productID: 1,
          productImage: 'electric-neck-massage',
          filter: filter,
          
        }

        return obj
      }

      const tablet = () => {

        // TABLET
        let productPrices = {regularPrice: 2000, discountPrice: 1490}
        let initialPrice = 1490;
        let specialDiscounts = [{quanity: 1, price: 1490}, {quanity: 2, price: 1200,}]
        let productDescription = [
          'It is a <b>long established</b> fact that a reader will be distracted by the readable content of a page when looking at its layout',
          `If you are going to use a passage of <b>Lorem Ipsum</b>, you need to be sure there isn't anything embarrassing hidden in the middle of text.`,
          `The generated <b/>Lorem Ipsum</b> is therefore always free from repetition, injected humour, or non-characteristic words etc.`
        ]
        let productSpecifications = 
        {colors: [{color: ['black', 'white'], colorLabel: 'crna', img: ['tablet-za-crtanje-1'], pcs: 5},
                  ],
        size: ['8.5 inch']}
  
        let specifications = [
          {specName: 'Materijal:', spec: 'Composite materijal'}, {specName: 'Opis:', spec: 'Masažer za vrat'},
          {specName: 'Brine:', spec: '15 brzina'}, {specName: 'Rad:', spec: '2 AAA baterije'}
        ]
        let productfaq = [
          {q: 'How are you feeling today?', a: 'Im feel great, thank you for asking'},
           {q: 'Where can I get some?', a: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'},
           {q: 'Where it does come from?', a: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'},
        ]
         let productURL = '/proizvod/tablet-za-crtanje'
         let filter = ['Najpopularniji'];

        const obj = {
          productName: 'Tablet za crtanje',
          productPrices: productPrices,
          initialPrice: initialPrice,
          specialDiscounts: specialDiscounts,
          productDescription: productDescription,
          productSpecifications: productSpecifications,
          specifications: specifications,
          productfaq: productfaq,
          productURL: productURL,
          recommend: '',
          productID: 2,
          productImage: 'electric-neck-massage',
          filter: filter
        }

        return obj
      }


      const cetkaZaSudove = () => {

        // Cetka za sudove
        let productPrices = {regularPrice: 1500, discountPrice: 990}
        let initialPrice = 990;
        let specialDiscounts = [{quanity: 1, price: 990}, {quanity: 2, price: 800,}]
        let productDescription = [
          'It is a <b>long established</b> fact that a reader will be distracted by the readable content of a page when looking at its layout',
          `If you are going to use a passage of <b>Lorem Ipsum</b>, you need to be sure there isn't anything embarrassing hidden in the middle of text.`,
          `The generated <b/>Lorem Ipsum</b> is therefore always free from repetition, injected humour, or non-characteristic words etc.`
        ]
        let productSpecifications = 
        {colors: [{color: ['black', 'white'], colorLabel: 'crna', img: ['cetka-za-pranje-sudova'], pcs: 2},
                  ],
        size: null}
  
        let specifications = [
          {specName: 'Materijal:', spec: 'Composite materijal'}, {specName: 'Opis:', spec: 'Masažer za vrat'},
          {specName: 'Brine:', spec: '15 brzina'}, {specName: 'Rad:', spec: '2 AAA baterije'}
        ]
        let productfaq = [
          {q: 'How are you feeling today?', a: 'Im feel great, thank you for asking'},
           {q: 'Where can I get some?', a: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'},
           {q: 'Where it does come from?', a: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'},
        ]
        let productURL = '/proizvod/cetka-za-pranje-sudova'
        let filter = [''];
        
        const obj = {
          productName: 'Četka za pranje sudova',
          productPrices: productPrices,
          initialPrice: initialPrice,
          specialDiscounts: specialDiscounts,
          productDescription: productDescription,
          productSpecifications: productSpecifications,
          specifications: specifications,
          productfaq: productfaq,
          productURL: productURL,
          recommend: '',
          productID: 3,
          productImage: 'electric-neck-massage',
          filter: filter
        }

        return obj
      }


      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////// DRZAC ZA ODECU

      const drzacZaOdecu = () => {

        // Cetka za sudove
        let productPrices = {regularPrice: 1500, discountPrice: 990}
        let initialPrice = 990;
        let specialDiscounts = [{quanity: 1, price: 990}, {quanity: 2, price: 800,}]
        let productDescription = [
          'It is a <b>long established</b> fact that a reader will be distracted by the readable content of a page when looking at its layout',
          `If you are going to use a passage of <b>Lorem Ipsum</b>, you need to be sure there isn't anything embarrassing hidden in the middle of text.`,
          `The generated <b/>Lorem Ipsum</b> is therefore always free from repetition, injected humour, or non-characteristic words etc.`
        ]
        let productSpecifications = 
        {colors: [
          {color: ['black', 'black'], colorLabel: 'crna', img: ['drzac-za-odecu-black-1'], pcs: 2},
          {color: ['white', 'white'], colorLabel: 'crna', img: ['drzac-za-odecu-white-1'], pcs: 2},
                  ],
        size: null}
  
        let specifications = [
          {specName: 'Materijal:', spec: 'Composite materijal'}, {specName: 'Opis:', spec: 'Masažer za vrat'},
          {specName: 'Brine:', spec: '15 brzina'}, {specName: 'Rad:', spec: '2 AAA baterije'}
        ]
        let productfaq = [
          {q: 'How are you feeling today?', a: 'Im feel great, thank you for asking'},
           {q: 'Where can I get some?', a: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'},
           {q: 'Where it does come from?', a: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'},
        ]
        let productURL = '/proizvod/drzac-za-odecu';
        let filter = [''];
        
        const obj = {
          productName: 'Šipka za odeću',
          productPrices: productPrices,
          initialPrice: initialPrice,
          specialDiscounts: specialDiscounts,
          productDescription: productDescription,
          productSpecifications: productSpecifications,
          specifications: specifications,
          productfaq: productfaq,
          productURL: productURL,
          recommend: '',
          productID: 4,
          productImage: 'electric-neck-massage',
          filter: filter
        }

        return obj
      }


       ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////// carobna loptica

      const carobnaLoptica = () => {

        // Cetka za sudove
        let productPrices = {regularPrice: 1500, discountPrice: 990}
        let initialPrice = 990;
        let specialDiscounts = [{quanity: 1, price: 990}, {quanity: 2, price: 800,}]
        let productDescription = [
          'It is a <b>long established</b> fact that a reader will be distracted by the readable content of a page when looking at its layout',
          `If you are going to use a passage of <b>Lorem Ipsum</b>, you need to be sure there isn't anything embarrassing hidden in the middle of text.`,
          `The generated <b/>Lorem Ipsum</b> is therefore always free from repetition, injected humour, or non-characteristic words etc.`
        ]
        let productSpecifications = 
        {colors: [
          {color: ['red', 'white'], colorLabel: 'crna', img: ['carobna-lopta'], pcs: 2},
                  ],
        size: null}
  
        let specifications = [
          {specName: 'Materijal:', spec: 'Composite materijal'}, {specName: 'Opis:', spec: 'Masažer za vrat'},
          {specName: 'Brine:', spec: '15 brzina'}, {specName: 'Rad:', spec: '2 AAA baterije'}
        ]
        let productfaq = [
          {q: 'How are you feeling today?', a: 'Im feel great, thank you for asking'},
           {q: 'Where can I get some?', a: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'},
           {q: 'Where it does come from?', a: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'},
        ]
        let productURL = '/proizvod/carobna-lopta'
        let filter = ['']
        
        const obj = {
          productName: 'Leteća bumerang loptica ',
          productPrices: productPrices,
          initialPrice: initialPrice,
          specialDiscounts: specialDiscounts,
          productDescription: productDescription,
          productSpecifications: productSpecifications,
          specifications: specifications,
          productfaq: productfaq,
          productURL: productURL,
          recommend: '',
          productID: 5,
          productImage: 'electric-neck-massage',
          filter: filter
        }

        return obj
      }


      
       ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////// spiderman igracka

      const spidermanIgracka = () => {

        // Cetka za sudove
        let productPrices = {regularPrice: 1500, discountPrice: 990}
        let initialPrice = 990;
        let specialDiscounts = [{quanity: 1, price: 990}, {quanity: 2, price: 800,}]
        let productDescription = [
          'It is a <b>long established</b> fact that a reader will be distracted by the readable content of a page when looking at its layout',
          `If you are going to use a passage of <b>Lorem Ipsum</b>, you need to be sure there isn't anything embarrassing hidden in the middle of text.`,
          `The generated <b/>Lorem Ipsum</b> is therefore always free from repetition, injected humour, or non-characteristic words etc.`
        ]
        let productSpecifications = 
        {colors: [
          {color: ['red', 'blue'], colorLabel: 'crvena', img: ['spiderman-igracka'], pcs: 2},
                  ],
        size: null}
  
        let specifications = [
          {specName: 'Materijal:', spec: 'Composite materijal'}, {specName: 'Opis:', spec: 'Masažer za vrat'},
          {specName: 'Brine:', spec: '15 brzina'}, {specName: 'Rad:', spec: '2 AAA baterije'}
        ]
        let productfaq = [
          {q: 'How are you feeling today?', a: 'Im feel great, thank you for asking'},
           {q: 'Where can I get some?', a: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'},
           {q: 'Where it does come from?', a: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'},
        ]
        let productURL = '/proizvod/spiderman-igracka'
        let filter = [''];
        
        const obj = {
          productName: 'Marvel Spiderman rukavica sa lansirajućim projektilom',
          productPrices: productPrices,
          initialPrice: initialPrice,
          specialDiscounts: specialDiscounts,
          productDescription: productDescription,
          productSpecifications: productSpecifications,
          specifications: specifications,
          productfaq: productfaq,
          productURL: productURL,
          recommend: '',
          productID: 6,
          productImage: 'electric-neck-massage', 
          filter: filter
        }

        return obj
      }


    const productList = [
      tablet(), neckMassager(), cetkaZaSudove(), drzacZaOdecu(), carobnaLoptica(), spidermanIgracka()
    ]

    return productList
}