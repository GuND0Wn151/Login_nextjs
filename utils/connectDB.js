
import mongoose from 'mongoose'





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

    cached.promise = mongoose.connect("mongodb+srv://gundown:gundown@credentials.5vlv3qq.mongodb.net/?retryWrites=true&w=majority", opts).then(mongoose => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}

export default connectDB
