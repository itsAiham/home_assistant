var newMsg = msg.payload;


const ok_list = ["Got yah!", "OK!", "done", "You got it", " "];
const hi_list = ["Hi, How are you today?", "Hope you are doing well!"];
const not_ok_list = ["Hi!, How can I help you", "Couldn't catch that, say again!",
                     "Invalid!", "Say again!"]


var larm_stat = flow.get("larm_status");

var movement_detect =  flow.get("movement_sensor")  ;
var temp_out =  flow.get("temp_outside")  ;
var temp_in =  flow.get("temp_inside")  ;
var hum_in =  flow.get("humidity");
var count =  flow.get("alarm_count")  ;


if (newMsg.startsWith("!")){
    newMsg = newMsg.substring(1)
    if (newMsg.includes("Hi")){
        msg.payload = random_item(not_ok_list);
        node.send(msg);
    }
    if (newMsg.includes("temp")){
        return_temp()
        node.send(msg);
    }
    if (newMsg.includes("move")){
        return_movement()
        node.send(msg);
    }
    if (newMsg.includes("status")){
        return_status()
        node.send(msg);
    }
    if (newMsg === "activate"){
        larm_stat = true;
        flow.set("larm_status", larm_stat);
        msg.payload = random_item(ok_list) + "The alarm has been activated.";
        node.send(msg);
    }
    else if (newMsg === "deactive"){
        larm_stat = false;
        flow.set("larm_status", larm_stat);
        msg.payload = random_item(ok_list) + ". The alarm is NOT active now!";
        node.send(msg);
    }
    else{
        msg.payload = random_item(not_ok_list);
        node.send(msg);
    }
}



function return_movement(){
    var larm_stat = flow.get("larm_status");
    var larm_status_string;
    if (larm_stat){
        larm_status_string = " active ";
    }
    else{
        larm_status_string = " unactive ";
    }
    msg.payload = 
            "```The larm is in" + larm_status_string + " mode.\n" + 
            "The larm went " + count + " time/s today" + "\n" + "```\n";
}

function return_temp(){
    msg.payload = 
           "```Temperature outside is " + temp_out  + " C \n" +
            "Temperature inside is "  + temp_in + " C \n" + "```\n";
}


function return_status(){
    msg.payload = 
            "```Temperature outside " + temp_out  + " C \n" +
            "Temperature inside "  + temp_in + " C \n" + 
            "Humidity inside "  + hum_in + "\n" + 
            "The larm in " + larm_stat + " status \n" + 
            "The larm went " + count + " time/s today" + "\n" +
            "```\n";
}


function random_item(items){
    return items[Math.floor(Math.random()* items.length)];
}
