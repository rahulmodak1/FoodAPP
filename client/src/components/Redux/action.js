const cartItemInc = (data) => {
return (
    {
        type : 'INCREMENT' ,
        payload : data
    }
)
}
export const cartItemDec = () => {
    return (
        {
            type : 'DECREMENT' ,
        }
    )
    } 

    export const cartItemAllDelete = () => {
        return (
            {
                type : 'ALL DELETE' ,
               
            }
        )
    }
export default cartItemInc ;

