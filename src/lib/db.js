import mongoose from 'mongoose'

const connection = {}

async function connect() {
  if (connection.isConnected) {
    console.log('already connected')
    return
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState
    if (connection.isConnected === 1) {
      console.log('use previous connection')
      return
    }
    await mongoose.disconnect()
  }

  try {
    const conn = mongoose.connect(process.env.MONGODB_URI)
    console.log('Database Connected Successfully')
  } catch (error) {
    console.log('DAtabase error')
  }
  const db = await mongoose
    .connect(
      process.env.MONGODB_URI
      // {
      // useNewUrlParser: true, // <-- no longer necessary
      // useUnifiedTopology: true,// <-- no longer necessary
      // useCreateIndex: true,// <-- no longer necessary
      //  }
    )
    .then(() => {
      console.log('MongoDB connection established.')
      connection.isConnected = true
    })
    .catch((error) =>
      console.error('MongoDB connection failed:', error.message)
    )
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect()
      connection.isConnected = false
    } else {
      console.log('not disconnected')
    }
  }
}

function convertDocToObj(doc) {
  doc._id = doc._id.toString()
  doc.createdAt = doc.createdAt.toString()
  doc.updatedAt = doc.updatedAt.toString()
  console.log('doc', doc)
  return doc
}

const db = { connect, disconnect, convertDocToObj }
export default db
