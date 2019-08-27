
const initState ={
    list:[]
}

const featureReducer = (state=initState,action)=>{
    switch (action.type){
         case 'ADD_LIST':
            let temp = [];
            for(let i in action.data){
              temp.push(action.data[i].name);
            }
            // temp.push.apply(temp,action.data.name);
            console.log(temp);
            let orgin = [...temp,...state.list];
            return Object.assign({},state,{list:orgin})
         default:
             return state
    }
}
export default featureReducer;