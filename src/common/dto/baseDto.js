import Joi from "joi";

class BaseClass{
    static schema=Joi.object({});

    static validate(data){
        const {error,value}=this.schema.validate(data,{
             abortEarly: false,
             stripUnknown:true
        })

        if(error){
            const errorMessage=error.details.map(d=>d.message);
            return {error:errorMessage,value:null}
        }
        return {error:null,value}
    }
}
export default BaseClass