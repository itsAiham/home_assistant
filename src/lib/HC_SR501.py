from machine import Pin
import time
from machine import Timer


class HCSR501:

    def __init__(self, pin):
        self.motion_detected = 1
        self.no_motion_detected = 0
        self.hold_time_sec = 0.1

        self.pir = Pin(pin,mode=Pin.IN)

    def start(self):
        self.chrono = Timer.Chrono()
        self.chrono.start()

        print("Starting Detection")
        while True:
            if self.pir() == self.motion_detected:
                print(self.chrono.read(), "Motion Detected!")

            if self.pir() == self.no_motion_detected:
                print("Ops!!")

            time.sleep(self.hold_time_sec)
