const User=require('../../models/userModel');
const jwt=require('jsonwebtoken');
exports.signup=(req,res)=>{
    User.findOne({email:req.body.email})
.exec((err,user)=>{
    if(user) return res.status(400).json({
        message:"Admin already registered!"
    });
    const {
        firstname,
        lastname,
        email,
        password
    }=req.body;
    const _user=new User({
       firstname,
        lastname,
        email,
        password,
        username:Math.random().toString(),
        role:"admin"
    });
    _user.save((error,data)=>{
           if(error){
               return res.status(400).json({
                   message:"Something went wrong!"
               });
           }
           if(data){
               return res.status(201).json({
                   message:"Admin created successfully..!"
               });
           }
    })
})
}

exports.signin=(req,res)=>{
    User.findOne({email:req.body.email})
.exec((err,user)=>{
    if(err) return res.status(400).json({error});
    if(user){
        if(user.authenticate(req.body.password) && user.role==="admin"){
            const token=jwt.sign({_id:user._id,role:user.role},process.env.JWT_SECRET,
                {expiresIn:'1h'}
            );
            const {_id,firstname,lastname,role,fullname,email}=user;
            res.status(200).json({
                token,
                user:{_id,firstname,lastname,role,fullname,email}
            })
        }else{
            res.status(200).json({
                message:"invalid password!"
            })
        }
    }
    const {
        firstname,
        lastname,
        email,
        password
    }=req.body;
    const _user=new User({
       firstname,
        lastname,
        email,
        password,
        username:Math.random().toString()
    });
    _user.save((error,data)=>{
           if(data){
               return res.status(201).json({
                   message:"Admin created successfully..!"
               });
           }
    })
})
}



