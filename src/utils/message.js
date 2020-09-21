const genrateMessage = (text)=>{
    return{
        text,
        createdAt: new Date().getTime()
    }
}

module.export ={
    genrateMessage
}