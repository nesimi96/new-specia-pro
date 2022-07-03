import * as actionTypes from './actionTypes';

// UTILITY FUNCTION FOR ONE PURPOSE
export const utility = (type, purpose) => {

    return {
        type: type,
        purpose: purpose
    }
}


// ADD ITEM TO LOCAL STORAGE 
export const itemToLocalStorage = (obj) => {
    
    const cartItem = {
        'productData': obj.productData,
        'productPrice': obj.productPrice,
        'productQuanity': obj.productQuanity,
        'productSize': obj.productSize,
        'activeImage': obj.activeImage
    }

    let oldData = null;
    if (JSON.parse(localStorage.getItem("cartItem"))) {
        oldData = JSON.parse(localStorage.getItem("cartItem"))
    } else {
        oldData = [];
    }

    let lsObj = null;
    lsObj = [...oldData, cartItem];

    localStorage.setItem('cartItem', JSON.stringify(lsObj))

    return {
        type: null
    }

}

// UPDATE STATE WITH LOCAL STORAGE
export const addToCart = () => {

    const updateLocalStorage = (items) => { 
        if(items) {

        let sameIDs = []
        ////////////////////////  FIND SAME IDS, and DELETE doubles
        items.map((cur, ind) => {
            let counter = 0
            items.map((cur2, ind2) => {
               // if(cur.productData.productID === cur2.productData.productID) { counter++}
              //  if(counter > 1) { 
                    sameIDs.push(cur.productData.productID)
             //   }
            })
        })
        sameIDs = [...new Set(sameIDs)]

        //// PUT IDS AND THEIR QUANITIES IN ONE OBJ
        let idsAndQuanities = []
        sameIDs.map((cur, ind) => {
            items.map((curItem, itemInd) => {
                if(cur === curItem.productData.productID){idsAndQuanities.push({id: cur, quanity: curItem.productQuanity})}
            })
        })
        

    let newArr = [];
    
    idsAndQuanities.map((cur, ind) => {

        function someFunction() {
            return idsAndQuanities.reduce(function(sum, record){
              if(record.id == cur.id) return sum + record.quanity;
              else return sum;
            }, 0);
          }
          newArr.push({id: cur.id, quanity: someFunction()})
    })

        let copiedItems = [...items]

        // FIND PRODUCT PRICE
        const findProductPrice = () => {

             newArr.forEach((cur, ind) => {
                copiedItems.forEach((item, itemInd) => {                    
                    let specialDiscounts = item.productData.specialDiscounts;
                    if(cur.id === item.productData.productID){
                        if(specialDiscounts){
                            specialDiscounts.forEach((elDisc, indDisc) => {
                                if(cur.quanity === elDisc.quanity){
                                    items[itemInd].productPrice = elDisc.price * item.productQuanity 
                                }
                                if(cur.quanity > elDisc.quanity){
                                    items[itemInd].productPrice = item.productQuanity * specialDiscounts[specialDiscounts.length - 1].price  
                                }
                                
                            })
                        }
                    }
                })
            })
        }

        findProductPrice()
        
          localStorage.setItem('cartItem', JSON.stringify(items))
         }  
    }

    
    const cartList = JSON.parse(localStorage.getItem("cartItem"));
    
    updateLocalStorage(cartList)

    localStorage.getItem('cartItem')
    return {
        type: actionTypes.ADD_TO_CART,
        cartList: cartList,
    }
}

export const updateCart = () => {

    return {
        type: actionTypes.CART_UPDATED,
        purpose: true,
    }
}
