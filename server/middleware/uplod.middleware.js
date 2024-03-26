import multer from 'multer';
import uuidv4 from 'uuid';
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, 'uploads');
    },

    filename: function (req, file, cb) {
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname))
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg','image/jpg','image/png'];
    if(allowedFileTypes.includes(file.mimetype))
    {
        cb(null, true);
    }
    else{
        cb(null, false);
    }
}
let upload = multer({storage, fileFilter})