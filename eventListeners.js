// import { UserEvents } from "./UserEvents";
import { UserEvents } from "./UserEvents.js";
const userEvent = new UserEvents();

function saveToDatabase() {
  console.log("saving post to database");
}
function sendNotification() {
  console.log("send notifications");
}
function updateTimeline() {
  console.log("updating timeline");
}
userEvent.addListener("postCreated", saveToDatabase);
userEvent.addListener("postCreated", sendNotification);
userEvent.addListener("postCreated", updateTimeline);

userEvent.createPost("this is my first post");
