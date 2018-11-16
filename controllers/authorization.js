let redis  = require('redis');

  // redisClient    = redis.createClient({
  //   port      : process.env.REDIS_PORT,               
  //   host      : process.env.REDIS_HOST,       
  //   password  : process.env.REDIS_PASSWORD,  
    
  // });
  const redisClient = redis.createClient( process.env.REDIS_URI);

  const requireAuth = (req,res,next)=> {
    const {authorization} = req.headers;
    if(!authorization) {
        return res.status(401).json('No unauthrorized in headers')
    }
     return redisClient.get(authorization,(err,reply)=> {
         if(err || !reply) {
             return res.status(401).json('unauthrorized from redis')
         }
         console.log('you can pass my friend')
         return next();
     })
      

  }

  module.exports = {
requireAuth: requireAuth
  }