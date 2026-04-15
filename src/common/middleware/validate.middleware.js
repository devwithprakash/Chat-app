const validate=(Dtoclass)=>{
    return (req,resp,next)=>{
        const {errors,value}=Dtoclass.validate(req.body)
        if(errors){
            throw Error
        }
        req.body=value
        next()
    }
}

export default validate