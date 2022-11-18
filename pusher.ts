import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: process.env.APP_ID as string,
  key: "fe2739378d58e5670926",
  secret: process.env.SECRET as string,
  cluster: "ap2",
  useTLS: true,
});

export const clientPusher = new ClientPusher( "fe2739378d58e5670926", {
  cluster: "ap2",
  forceTLS: true,
});
