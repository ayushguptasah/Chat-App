const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.57yfi.mongodb.net/voicechatroom?retryWrites=true&w=majority`,()=>{
    console.log('connected to mongodb');
  }
);