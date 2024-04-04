import mongoose from 'mongoose'

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
