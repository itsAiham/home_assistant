

from machine import ADC
from machine import Pin

class Photoresistor:
    """Light reader"""
    adc = ADC(bits=10)   # create an ADC object bits=10 means range 0-1024 the lower value the less light detected
    
    def __init__(self, pin):
        self.light_pin = Pin(pin, mode=Pin.IN)  # set up pin mode to input
        self.apin = self.adc.channel(attn=ADC.ATTN_11DB, pin=pin)   # create an analog pin on P16;  attn=ADC.ATTN_11DB measures voltage from 0.1 to 3.3v

    def get_value(self):
        return self.apin() 