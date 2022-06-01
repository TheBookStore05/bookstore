const router = require('express').Router();

router.get('/',(req,res) => {
    console.log("hello");
    res.render('homepage');
});
module.exports = router;