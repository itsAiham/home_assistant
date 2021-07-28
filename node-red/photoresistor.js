
var light_sensor =  msg.payload  ;
var objDate = new Date();
var hours = objDate.getHours();
var min = objDate.getMinutes();

flow.set("light_sensor", msg.payload);

msg.headers = {}
msg.method = "POST"
msg.headers["content-type"] = "application/json"

if(hours == 7 && min == 0 && light_sensor < 300){
    msg.payload = {"content": "Good morning!! Sounds it's cloudy day."};
    return msg }
    
if(hours == 20 && min == 0){
    msg.payload = {"content": "Are you working tonight? Do not forget your food."};
    return msg }

if(hours < 17 && light_sensor > 4000){
    msg.payload = {"content": "It is nice summer time! Always lightieeee."};
    return msg }
    

