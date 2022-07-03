export const cartTotal = (cartList) => {

    let originalCartList = cartList;

    let IDs = [3, 4];
    let doubleIDs = []
    let productPrices = []
    let IdsAndQuanities = []
    let sumQuanities = []
    let productsPrice = 0
    let shippingPrice = 350;
    let totalPrice = ''

    if(cartList){
        cartList.map((cur, ind) => {
            productPrices.push(parseInt(cur.productPrice))
            IDs.push(cur.productData.productID)

            IDs.map((cur,ind) => {
                let sum = 0;
                IDs.map((cur2, ind2) => {
                    if(cur === cur2) {
                        sum++
                        if(sum > 1) {doubleIDs.push(cur)}
                    }
                })
            })
        })


        
        //remove double IDs
        doubleIDs = [...new Set(doubleIDs)] 

        // Collect all ids and quanities
            if(doubleIDs.length > 0) {
                cartList.map((cur, ind) => {
                    doubleIDs.map((cur1, ind2) => {
                    if(cur1 === cur.productData.productID) {IdsAndQuanities.push({id: cur.productData.productID, quanity: cur.productQuanity})}
                    })
                })
            }

        // Summ and collect all product quanities
        IdsAndQuanities.map((cur, ind) => {
            IdsAndQuanities.map((cur1, ind1) => {
                 if(cur.id === cur1.id) {                 
                    sumQuanities.push({id: cur.id, quanity: IdsAndQuanities[ind].quanity})
                 }
            })
        })

        //DELETE DUPLICATES FROM SUMQUANITIES
           let quanities = sumQuanities.map(o => o.quanity)
           sumQuanities = sumQuanities.filter(({quanity}, index) => !quanities.includes(quanity, index + 1))

        if(cartList.length > 0) {
        cartList.map((cur, ind) => {
            let pricePerPcs = 0
            let lastPrice = cur.productData.specialDiscounts
            let pricesLength = lastPrice.length
            lastPrice = lastPrice[lastPrice.length - 1].price

            sumQuanities.map((cur1, ind1) => {
                let maped = sumQuanities.map((cur, ind) => cur.quanity)
                let productAllQuanity = maped.reduce((prev, next) => prev + next )
    
               if(cur.productData.productID === cur1.id) {
                if(productAllQuanity > pricesLength) {
                  pricePerPcs = lastPrice
                  cur.productPrice = pricePerPcs * cur.productQuanity
                }else{
                    pricePerPcs = cur.productData.specialDiscounts[1].price;
                    cur.productPrice = pricePerPcs * cur.productQuanity
                }
               }
            })
        })
        productsPrice = productPrices.reduce((acc,cur) => acc + cur)}
        totalPrice = productsPrice + shippingPrice
    }


    const data = {productsPrice: productsPrice, shippingPrice: shippingPrice, totalPrice: totalPrice}

    return data
}

