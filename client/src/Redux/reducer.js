
const initStore = {
    userdetail: [],
    userposts: [],
    allposts: [],
    seperatepost: []
}

export const reducer = (store= initStore,{type,payload})=>{
       switch (type){
        case "GETUSERDETAILS" : return {
              ...store,
              userdetail: [payload]
        }

        case "GETPOSTS" : return {
            ...store,
            userposts:[payload]
        }
        case "GETALLFEEDS" : return {
            ...store,
            allposts:[payload]
        }
        default :return store;
       }
}