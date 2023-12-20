const asyncHanddler = (reqHandler) => {
  res, req, next;
  {
    Promise.resolve(reqHandler).catch((err) => next(err));
  }
};

// const asyncHanddler (fn)=>async (req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(500 || 500).json({
//             success:false,
//             message:error.message
//         })
//     }
// }
