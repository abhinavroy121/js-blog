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

export const handlehomepage = (payload)=> {
    return {
        type:"HOMEPAGE",
        payload
    }
}