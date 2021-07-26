const time = new Date();
var hours = time.getHours();

flow.set("movement_sensor", msg.payload);
var movement_value =  flow.get("movement_sensor")  ;

var count = flow.get("alarm_count")||0;
 
var larm_stat = flow.get("larm_status")||true;

msg.headers = {}
msg.method = "POST"
msg.headers["content-type"] = "application/json"


if (hours === 0 ){
    count = 0;
    flow.set('alarm_count', count);

}
if (movement_value != 0 && flow.get("larm_status")){
    msg.payload = {"content": "Move detected!! You need to come right away!"};
    
    count += 1;
    flow.set('alarm_count', count);
}

return msg