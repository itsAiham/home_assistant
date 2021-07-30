# boot.py -- run on boot-up
from network import WLAN
import machine
from keys import Keys
wlan = WLAN(mode=WLAN.STA)

nets = wlan.scan()
for net in nets:
    if net.ssid == Keys.WIFI_SSID:
        print('Network found!')
        wlan.connect(net.ssid, auth=(
            net.sec, Keys.WIFI_PASSOWRD), timeout=5000)
        while not wlan.isconnected():
            machine.idle()  # save power while waiting
        print('WLAN connection succeeded!')
        print(wlan.ifconfig())
        break