const initialState = {
    cartItems: []
}




const Reducer = (state= initialState , action) => {

    switch (action.type) {
        case 'INCREMENT': 
        return {
            ...state  ,cartItems: [...state.cartItems , action.payload]
        }
        case 'DECREMENT': 
        state.cartItems.pop()
        return    {
            ...state
        }
       



        case 'ALL DELETE' : 
                    return {...state , cartItems : []}
                
    
case  'FETCH DATA' : 
console.log(action)
return  {...state ,cartItems : action.payload}

    default : {
        return state
    }

 }}
export default Reducer