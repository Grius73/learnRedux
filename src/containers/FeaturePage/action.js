import axios from 'axios'

export const addListAction = (list) => ({
    type:'ADD_LIST',
    data:list           
})

export const getFromGit = (content)=>{
    return (dispatch)=>{
         axios.get(`https://api.github.com/users/${content}/repos?type=all&sort=updated`).then(  
         res=>{
              console.log(res.data),
              dispatch(addListAction(res.data))
            }
            )      
    }
}