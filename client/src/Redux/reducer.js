const initStore = {
    userdetail: [],
    userposts: [],
    allposts: [],
    seperatepost: [],
    pagevalue:false,
    singledata:[]
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
        case "HOMEPAGE" : return {
            ...store,
            pagevalue: payload
        }
        case "SINGLEPAGE" : return {
            ...store,
            singledata:[payload]
        }
        default :return store;
       }
}