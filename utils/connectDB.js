
import mongoose from 'mongoose'


const MONGO_URL = process.env.MONGO_URL


let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function connectDB () {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    }

    cached.promise = mongoose.connect(MONGO_URL, opts).then(mongoose => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}

export default connectDB