from machine import ADC
from machine import Pin
import pycom
import machine
import _thread  # To run mulitaple loops parallel
import utime

from src.lib.HC_SR04 import HCSR04
from src.lib.photoresistor import Photoresistor
from src.lib.dht import DHT
from HC_SR501 import HCSR501 


MIN = 60
HOURE = 60 * MIN


def long_sleep():
    # inside sensor
    th = DHT(Pin('P22', mode=Pin.OPEN_DRAIN), 0)    

    # outside sensors
    adc = machine.ADC()
    apin = adc.channel(pin='P15')

    light_sensor = Photoresistor('P16')

    while True:
        result = th.read()
        print('Temperature Inside:', result.temperature)
        print('Humidity Inside:', result.humidity)

        millivolts = apin.voltage()
        celsius = (millivolts - 500.0) / 10.0

        print("Temp outside", celsius)
        print("Light Value", light_sensor.get_value())
        print("_____________")
  
        pybytes.send_signal(1, result.temperature)
        pybytes.send_signal(2, result.humidity)
        pybytes.send_signal(3, light_sensor.get_value())
        pybytes.send_signal(5, celsius)

        utime.sleep(HOURE * 3)
        if not stop_threads:
            break
    

def short_sleep():
    movment_sensor = HCSR501('P13')

    while True:
        movment_sensor.start()

        if movment_sensor.get_status(): 
            print("Motion Detected")
            pybytes.send_signal(4, 1)
            utime.sleep(5)
            pybytes.send_signal(4, 0)

        utime.sleep(1)


def run_threads():
  _thread.start_new_thread(long_sleep, ())
  _thread.start_new_thread(short_sleep, ())


def main():
    run_threads()
    # short_sleep()
    # long_sleep()

stop_threads = True


if __name__ == "__main__":
    main()
