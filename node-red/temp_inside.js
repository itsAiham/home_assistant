
flow.set("temp_inside", msg.payload);
var temp =  flow.get("temp_inside")  ;

msg.headers = {}
msg.method = "POST"
msg.headers["content-type"] = "application/json"

if (temp > 24){
    msg.payload = {"content": "It's even hot inside home! " + 
    temp + " C"};
    

}
else if (23 >= temp > 19){
    msg.payload = {"content": "The temp inside in pretty normal" + 
    temp + " C"};
}
return msg