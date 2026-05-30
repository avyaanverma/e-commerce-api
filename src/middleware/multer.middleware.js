import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req, file ,cb){
        cb(null, "./tmp/uploads");
    },

    filename: function(){
        const user = req.user || "generic-user";
        const productName = req.body.productName || "generic-product";
        cb(null, `${Date.now()}-${productName}-${user}`);
    }
})

export const upload = multer({
    storage: storage, 
    limits: { fileSize: 5000},
    fileFilter: (req, file, cb)=>{
        if(!file.mimetype.startsWith("image/")){
            return cb(new Error("Please upload an image"))
        }

        cb(null, true);
    }
});