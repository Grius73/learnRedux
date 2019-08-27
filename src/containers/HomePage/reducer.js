
const initState ={
    list:[]
}

const homeReducer = (state=initState,action)=>{
    switch (action.type){
         case 'SET_LIST':
             return Object.assign({},state,{list:action.data})
         default:
             return state
    }
}
export default homeReducer;