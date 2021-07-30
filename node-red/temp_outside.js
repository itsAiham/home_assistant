var temp = Math.round(msg.payload * 10) / 10;
flow.set("temp_outside", temp);



msg.headers = {}
msg.method = "POST"
msg.headers["content-type"] = "application/json"

if (temp > 25){
    msg.payload = {"content": "It is really worm day!!" + 
    " The temperature is " + temp.toFixed(1)};

}

return msg