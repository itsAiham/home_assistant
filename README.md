# Interactive Home Assistant based on a discord-bot and LoPy4

\
&nbsp;

## Hardware you need:

<br>

|                                                                                        IoT Thing                                                                                        | Price (approximately) |                            Description                            |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------: | :---------------------------------------------------------------: |
|                                                              [LoPy4 Multipack](https://pycom.io/product/lopy4-multipack/)                                                               |        €62.04         |       1x LoPy4, 1x Expansion Board, 1x LoRa/Sigfox Antenna        |
|                                             [PIR motion sensor HC-SR501](https://www.electrokit.com/produkt/pir-rorelsedetektor-hc-sr501/)                                              |          €5           |            To detect the heat from humans and animals             |
| [Photoresistor](https://www.m.nu/sensorer-matinstrument/photo-cell-cds-photoresistor?gclid=CjwKCAjwuvmHBhAxEiwAWAYj-EwZZJBLXmTLrn8YjVEzYRRmUgefOMfwIDSC0TDIUQpdVgOqqnVABxoC9fMQAvD_BwE) |          €2           |                  To detect the lightness outside                  |
|                                                     [MCP9700](https://www.electrokit.com/produkt/mcp9700a-to-92-temperaturgivare/)                                                      |         €1.61         |                 To detect the temperature outside                 |
|                                         [10m Wiring](https://www.biltema.se/bil---mc/elsystem/kontakter-och-uttag/kopplingsledning-2000018077)                                          |         €3.5          | The amount of wiring is dependent on the distance between sensors |
|                              [(Optional) Battery holder 3xAAA](https://www.electrokit.com/en/product/battery-holder-3xaaa-with-switch-and-jst-connector/)                               |         €2.5          | To allow pycom working without having it connected to a computer  |
|                          [(Optional) Multimeter](https://www.hornbach.se/shop/Multimeter-MALMBERGS-digital-Compact-Cat-III-600V/6153937/artikel-detaljer.html)                          |          €11          |            To measure voltage, current and resistance.            |

\
&nbsp;

---

\
&nbsp;

## Software you need:

|                                 Software                                 |                     Type                     |                                                        Description                                                        |
| :----------------------------------------------------------------------: | :------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: |
|           [Visual Studio Code](https://code.visualstudio.com/)           |               Open source app                |                    Code editor made by Microsoft. We use it to write our code and upload it to device.                    |
|                    [Node.js](https://nodejs.org/en/)                     |          Open source cross-platform          |            Runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.             |
| [Updating Device Firmware](https://docs.pycom.io/updatefirmware/device/) |               Open source tool               |                 After upgrading, we can use the Pymakr Plugins to upload and run programs in our devices.                 |
|                     [Node-red](https://nodered.org/)                     |         Open source development tool         |                                  Programming tool for wiring hardware devices together.                                   |
|                   [Pybytes](https://pybytes.pycom.io/)                   |             Free cloud platform              | a device management platform that empowers you by giving you full control over your Pycom devices. **(Account required)** |
|                   [Datacake](https://app.datacake.de/)                   | Limited platform for non-commercial purposes |            where the data is saved and resend it to node-red to be handled by the bot. **(Account required)**             |

\
&nbsp;

---

\
&nbsp;

## Connecting

<img  src="https://i.ibb.co/wCp2rgC/project.png"  width="700px" alt="Connection between sensord/LoPy4" border="0" style="display: block; margin: 0 auto">

\
&nbsp;

---

\
&nbsp;

## Pushing code to LoPy4

You need to push your code **UPDATE** only src/ folder

## Node-Red

You need to create the diagram within Node-Red Space as it shown in [HERE](https://github.com/itsAiham/home_assistant/tree/main/node-red)
