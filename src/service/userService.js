
exports.createUsers = ((req, res) =>{
    console.log(req.body);
    res.send({
        name:'ram',
        last:'Meena'
    })
})
