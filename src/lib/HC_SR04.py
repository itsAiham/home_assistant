# https://core-electronics.com.au/tutorials/hc-sr04-ultrasonic-sensor-with-pycom-tutorial.html

import utime
import pycom
import machine
from machine import Pin
from time import sleep


class HCSR04:
    """HC-SR04 - Ultrasonic Sensor"""
    def __init__(self, echo_pin, trigger_pin):
        self.echo = Pin(echo_pin, mode=Pin.IN)
        self.trigger = Pin(trigger_pin, mode=Pin.OUT)
        self.trigger(0)

    def get_distance_measure(self):
        # trigger pulse LOW for 2us (just in case)
        self.trigger(0)
        utime.sleep_us(2)
        # trigger HIGH for a 10us pulse
        self.trigger(1)
        utime.sleep_us(10)
        self.trigger(0)

        # wait for the rising edge of the echo then start timer
        while self.echo() == 0:
            pass
        start = utime.ticks_us()

        # wait for end of echo pulse then stop timer
        while self.echo() == 1:
            pass
        finish = utime.ticks_us()

        # pause for 20ms to prevent overlapping echos
        utime.sleep_ms(20)

        # calculate distance by using time difference between start and stop
        # speed of sound 340m/s or .034cm/us. Time * .034cm/us = Distance sound travelled there and back
        # divide by two for distance to object detected.
        distance = ((utime.ticks_diff(start, finish)) * .034)/2

        return distance * -1