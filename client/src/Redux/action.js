export const getuser =(payload)=> {
    return {
        type: "GETUSERDETAILS",
        payload
    }
}

export const getposts = (payload)=> {
    return {
        type: "GETPOSTS",
        payload
    }
}

export const allfeeds = (payload)=> {
    return {
        type:"GETALLFEEDS",
        payload
    }
}