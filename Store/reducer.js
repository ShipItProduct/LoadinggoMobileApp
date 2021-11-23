const initialState = {
    role:'Shipper'
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
        default:
            return{
                ...state
            }
            break;
    }
}

export default user;