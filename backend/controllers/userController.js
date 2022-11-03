// import asyncHandler from 'express-async-handler'
// import generateToken from '../utils/generateToken.js'
// import jwt  from 'jsonwebtoken'
// import dotenv from 'dotenv'
// import User from '../models/userModel.js'
// import  {sendEmail} from '../utils/mail.js'

// dotenv.config()
// // @desc    Auth user & get token
// // @route   POST /api/users/login
// // @access  Public
// const authUser = asyncHandler(async (req, res) => {
//   const { email, password } = req.body

//   const user = await User.findOne({ email })
         
//   if (user && (await user.matchPassword(password))) {           
//     if(user.isVerified){
//       res.json({ 
//         isVerified: user.isVerified,
//       _id: user._id,       
//       name: user.name,
//       email: user.email,   
//       isAdmin: user.isAdmin,
//       token: generateToken(user._id),
//     })}
//     else {
//       res.json({ 
//         isVerified: user.isVerified,
//         _id: user._id, 

//       })
    
//   }
    
//   } else {
//     res.status(401)
//     throw new Error('Invalid email or password')
//   }
// })


// const verifyUser = async (req, res) => {
//  const {token} = req.params;
 
  
//   const decoded = jwt.verify(token, process.env.JWT_SECRET)
  
 
//   const user = await User.findById(decoded.id)
//  if(user){  
//   await User.updateOne({ _id:decoded.id },{$set:{isVerified: true} })
//   res.send(`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Activate Account - Cushy-mart</title>
//     <!-- <link rel="stylesheet" href="css/main.css"> -->
//     <style>
//      body {
         
//   background: #F2F2F2;
//   margin: 0;
//   font-family: 'Poppins';
// }

// .navbar {
//   background: #343A40;
//   padding: 1em;
// }

// .logo {
//   text-decoration: none;
//   font-weight: bold;
//   color: white;
//   font-size: 1.2em;
// }

// .sec-cta {
//   background-color:#0A66C2;
//   border-radius:34px;
//   padding: 12px 24px;
// }
// .sec-cta a{
//  color: white
// }

// a {
//   text-decoration: none;
// }


// .hero {

//   text-align: center;
// }

// .left-col .subhead {
//   text-transform: uppercase;
//   font-weight: bold;
//   color: gray;
//   letter-spacing: .3em;
// }

// .left-col h1 {
//   font-size: 2.5em;
//   line-height: 1.3em;
//   margin-top: .2em;
// }

// @media only screen and (min-width: 1080px) {
//   .container {
//     width: 1080px;
//     margin: 0 auto;
//   }
//   section {
//     padding: 10em 4em;
//   }
//   .hero .container {
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: flex;
//     -webkit-box-pack: justify;
//         -ms-flex-pack: justify;
//             justify-content: space-between;
//     text-align: left;
//   }
  
//   .hero .container .left-col h1 {
//     font-size: 3em;
//     width: 90%;
//   }

 
// }

//     </style>
// </head>
// <body>
//     <div class="navbar">
//         <div class="container">
//             <a class="logo" href="#">Cushy-mart</a>
//         </div>
//     </div>

//     <section class="hero">
//         <div class="container">
//             <div class="left-col">
//                 <p class="subhead">It's Nitty &amp; Gritty</p>
//                 <h1>Account Activated</h1>

//                 <div class="hero-cta">
//                     <div class="">Your account is now activated <button class='sec-cta'><a href="${process.env.FRONTEND_URL}/login" target="_self">Login here</a></button></div>
//                 </div>
         
      
//     </section>

//   </body>
//   </html>`)  
//  }else {
//    return res.json({
//      status: "failed",

//    })
//  }
   
         
// }


// // @desc    Register a new user
// // @route   POST /api/users
// // @access  Public
// const registerUser = asyncHandler(async (req, res) => {
//   const { name, email, password } = req.body

//   const userExists = await User.findOne({ email })

//   if (userExists) {
//     res.status(400)
//     throw new Error('User already exists')
//   }

//   const user = await User.create({
//     name,
//     email,
//     password,
//   })
 
//   if (user) {
//     const token = generateToken(user._id)
//     const link =`https://cushy-mart.herokuapp.com/api/users/verify/${token}`
//     res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email, 
//       isAdmin: user.isAdmin,
//       token: token,
//       isVerified: user.isVerified
//     })
    
//     await sendEmail({
//       // //the client email 
//       // to: user.email,
//       // //sendGrid sender id 
//       // from: "kirengamartial@gmail.com",
//       // subject: 'Verify your account',
//       // text: 'Glad you are here .. yes you!',
//       // html:'<button><a href="https://cushy-mart.herokuapp.com/">cushy-mart</a></button>'

//       from: `${process.env.EMAIL_SENDER}`,
//       to: `<${user.email}>`,
//       subject: "Verify your account",
//       text: "Glad you are here .. yes you!",
//       html: `<!DOCTYPE html>
//       <html lang="en">
//       <head>
//           <meta charset="UTF-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>Activate Account - Cushy-mart</title>
//           <!-- <link rel="stylesheet" href="css/main.css"> -->
//           <style>
//            body {
               
//         background: #F2F2F2;
//         margin: 0;
//         font-family: 'Poppins';
//       }
      
//       .navbar {
//         background: #343A40;
//         padding: 1em;
//       }
      
//       .logo {
//         text-decoration: none;
//         font-weight: bold;
//         color: #fff;
//         font-size: 1.2em;
//       }
      
//       .sec-cta {
//         background-color:#0A66C2;
//         border-radius:34px;
//         padding: 12px 24px;
//       }
//       .sec-cta a{
//        color: white
//       }
      
//       a {
//         text-decoration: none;
//       }
      
      
//       .hero {
      
//         text-align: center;
//       }
      
//       .left-col .subhead {
//         text-transform: uppercase;
//         font-weight: bold;
//         color: gray;
        
//       }
      
//       .left-col h1 {
//         font-size: 2.5em;
//         line-height: 1.3em;
//         margin-top: .2em;
//       }
      
//       @media only screen and (min-width: 1080px) {
//         .container {
//           width: 1080px;
//           margin: 0 auto;
//         }
//         section {
//           padding: 10em 4em;
//         }
//         .hero .container {
//           display: -webkit-box;
//           display: -ms-flexbox;
//           display: flex;
//           -webkit-box-pack: justify;
//               -ms-flex-pack: justify;
//                   justify-content: space-between;
//           text-align: left;
//         }
        
//         .hero .container .left-col h1 {
//           font-size: 3em;
//           width: 90%;
//         }
      
       
//       }
      
//           </style>
//       </head>
//       <body>
//           <div class="navbar">
//               <div class="container">
//                   <a class="logo" href="#">Cushy-mart</a>
//               </div>
//           </div>
      
//           <section class="hero">
//               <div class="container">
//                   <div class="left-col">
//                       <p class="subhead">Dear ${user.email}</p>
//                       <h1>Activate your account</h1>
      
//                       <div class="hero-cta">
//                       <div><a href="${link}">Verify your account <a/></div>
//                       </div>
               
            
//           </section>
      
//         </body>
//         </html>`,
//   })
//   } else {
//     res.status(400)
//     throw new Error('Invalid user data')
//   }
// })

// // @desc    Get user profile
// // @route   GET /api/users/profile
// // @access  Private
// const getUserProfile = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.user._id)

//   if (user) { 
//     res.json({
//       _id: user._id,
//       name: user.name,  
//       email: user.email,
//       isAdmin: user.isAdmin,
//     })
//   } else {
//     res.status(404)
//     throw new Error('User not found')
//   }
// })

// // @desc    Update user profile
// // @route   PUT /api/users/profile
// // @access  Private
// const updateUserProfile = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.user._id)

//   if (user) {
//     user.name = req.body.name || user.name
//     user.email = req.body.email || user.email
//     if (req.body.password) {
//       user.password = req.body.password
//     }

//     const updatedUser = await user.save()

//     res.json({
//       _id: updatedUser._id,
//       name: updatedUser.name,
//       email: updatedUser.email,
//       isAdmin: updatedUser.isAdmin,
//       token: generateToken(updatedUser._id),
//     })
//   } else {
//     res.status(404)
//     throw new Error('User not found')
//   }
// })

// // @desc    Get all users
// // @route   GET /api/users
// // @access  Private/Admin
// const getUsers = asyncHandler(async (req, res) => {
//   const users = await User.find({})
//   res.json(users)
// })

// // @desc    Delete user
// // @route   DELETE /api/users/:id
// // @access  Private/Admin
// const deleteUser = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.params.id)

//   if (user) {
//     await user.remove()
//     res.json({ message: 'User removed' })
//   } else {
//     res.status(404)
//     throw new Error('User not found')
//   }
// })

// // @desc    Get user by ID
// // @route   GET /api/users/:id
// // @access  Private/Admin
// const getUserById = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.params.id).select('-password')

//   if (user) {
//     res.json(user)
//   } else {
//     res.status(404)
//     throw new Error('User not found')
//   }
// })

// // @desc    Update user
// // @route   PUT /api/users/:id
// // @access  Private/Admin
// const updateUser = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.params.id)

//   if (user) {
//     user.name = req.body.name || user.name
//     user.email = req.body.email || user.email
//     user.isAdmin = req.body.isAdmin

//     const updatedUser = await user.save()

//     res.json({
//       _id: updatedUser._id,
//       name: updatedUser.name,
//       email: updatedUser.email,  
//       isAdmin: updatedUser.isAdmin,
//     })
//   } else {
//     res.status(404)
//     throw new Error('User not found')
//   }
// })

// export {
//   authUser,
//   registerUser,
//   getUserProfile,
//   updateUserProfile,
//   getUsers,
//   deleteUser,
//   getUserById,
//   updateUser,
// }




import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await user.remove()
    res.json({ message: 'User removed' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')

  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.isAdmin = req.body.isAdmin

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
}