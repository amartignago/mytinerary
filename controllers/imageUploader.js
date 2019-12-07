const multer = require('multer');

//images storage + name configuration:
const storage = multer.diskStorage({ 
    destination: function(req, file, cb) {
      cb(null, './images/users');
    },
    filename: function(req, file, cb) {
     cb(null, file.originalname);
    }
  });

//images filter:
const fileFilter = (req, file, cb) => {
if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
    cb(null, true);
} else { // don't store the file
    cb(null, false);
}
};

const upload = multer({
    storage,
    limits: {
      fileSize: 1024 * 1024 * 15, // 15mb file size
    },
    fileFilter,
  });
  
  module.exports = upload;

