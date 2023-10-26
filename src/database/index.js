import mongoose from "mongoose";

const connectToBD = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://SofianeD:Mn56w7SqeprGVUMy@experimental.uuo8si1.mongodb.net/"
    );

    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default connectToBD;
