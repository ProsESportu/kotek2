import { SerialPort, ReadlineParser } from "serialport";
import { exec } from "node:child_process";
import { Readline } from "readline/promises";

const serialport = new SerialPort({ path: "COM4", baudRate: 115200 })

const lineStream = serialport.pipe(new ReadlineParser({ delimiter: "\r\n" }))
lineStream.on("data", press)
// serialport.on("data", press)
function press(buf: string) {
  console.log(buf)
  const indx = buf.split(" ")
  console.log(indx[0])
  console.log(indx[1])
  if (indx[1] === "1") {
    exec(commandTable[parseInt(indx[0])])
  }
}


const commandTable = ["steam", "discord",/* put your shell commands here*/]