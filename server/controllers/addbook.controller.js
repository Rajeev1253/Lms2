import {addbookService} from '../services/addbook.services.js'
import {errorHandler} from '../lib/utils.js'

const addbook = async (req,res) => {
    try{
        const response = await addbookService.addbook(req);
        console.log("response",response)
        return res.status(201).send({
            success:true,
            message: 'Book added succefully',
            book: response
        })
    }
    catch(error)
    {
        errorHandler(res,error);
    }
}

const addbookController = {
    addbook
}

export default addbookController;
