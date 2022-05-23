import { GridFSBucket } from "mongodb";
import mongoose from "mongoose";

mongoose.connection.on("connected", () => {
  console.log("creating bucket");
  bucket = new GridFSBucket(mongoose.connection.db, {
    bucketName: "media",
  });
});

export let bucket: GridFSBucket;
