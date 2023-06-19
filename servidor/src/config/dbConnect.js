import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://control:jcalango@controlfamily.owmgaoo.mongodb.net/control-family");

let db = mongoose.connection;

export default db;