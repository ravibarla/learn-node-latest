// const EventEmitter = require("events");
// import { EventEmitter } from "nodemailer/lib/xoauth2";
import * as Events from "events";
export class UserEvents extends Events.EventEmitter {
  //events

  createPost(content) {
    console.log("post is created");
    this.emit("postCreated");
  }
}
