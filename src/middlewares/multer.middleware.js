import multer from "multer"

//  All file store to our diskstorage

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./pulic/temp");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

export const upload = multer({
    storage,
})