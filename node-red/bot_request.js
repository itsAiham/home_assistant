
var movement_sensor =  msg.payload  ;

msg.headers = {}
msg.method = "POST"
msg.headers["content-type"] = "application/json"
var msg_sent = true;


if (msg_sent){
    

    msg.payload = {"content": movement_sensor};
    msg_sent = false
    return msg;
    
}

return;