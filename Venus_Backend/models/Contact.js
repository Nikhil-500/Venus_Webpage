// import mongoose from "mongoose";

// const ContactSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   message: { type: String, required: true },
// }, { timestamps: true });

// export default mongoose.model("Contact", ContactSchema);

import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  topic: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Contact", contactSchema);


