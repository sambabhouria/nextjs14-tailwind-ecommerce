import mongoose from 'mongoose'
// import { connect } from 'mongoose'

async function dbConnect() {
  console.log('MONGODB_URI', process.env.MONGODB_URI!)
  try {
    mongoose.connect(process.env.MONGODB_URI!)
    console.log('connected successfully')
  } catch (error) {
    throw new Error('Connection failed!')
  }
}

export default dbConnect

// async function dbConnect() {
//   try {
//     await connect(
//       'mongodb+srv://userauthentication:bhouriamongodbatlas123@shoeshop.0ybin.mongodb.net/nextjs14database?retryWrites=true&w=majority'
//     )
//     console.log('🚀🚀connected successfully🚀🚀')
//   } catch (error) {
//     throw new Error('Connection failed!')
//   }
// }

// export default dbConnect
