flow.set("humidity", msg.payload);
var hum_inside =  flow.get("humidit")  ;

msg.headers = {}
msg.method = "POST"
msg.headers["content-type"] = "application/json"

if (65 > hum_inside > 30){
    msg.payload = {"content": "The appartment has high humidity!!" + 
    hum_inside + " % Call property manager."};
    return msg

}
