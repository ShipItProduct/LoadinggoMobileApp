const initialState = {
    role:'Shipper',
    user:{}
}



 const user = (state=initialState,action)=>{
    switch (action.type) {
        case 'Shipper':
            return{
            ...state,
            role:'Shipper'
        };
        break;
        case 'Carrier':
            return{
                ...state,
                role:'Carrier'
            };
            break;
        case 'setUser':
            return{
                ...state,
                user:action.val
            }    
        default:
            return{
                ...state
            }
            break;
    }
}

export default user;