const express = require('express')
const router = express.Router()

router.post('/', (req, res)=>{
    const { n1, n2 } = req.body;
    if (!n1 || !n2) {
      return res.status(400).json({error:'Must be two numbers: n1 and n2'});
    }
    if (isNaN(n1) || isNaN(n2)) {
      return res.status(400).json({error:'Invalid numbers' });
    }      
    const media = Math.round(((n1 + n2) / 2) * 100) / 100;  
    return res.json({
      n1,
      n2,
      media    
    });  
});

module.exports = router