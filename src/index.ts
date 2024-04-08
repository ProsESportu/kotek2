import { SerialPort } from "serialport";
import { exec } from "node:child_process";

const serialport = new SerialPort({ path: "COM4", baudRate: 115200 })

serialport.on("data", press)
function press(buf: Buffer) {
  const str = buf.toString()
  console.log(str)
  const indx = str.split("\n").map(e => e.split(" "))
  console.log(indx)
  for (const idx of indx) {
    console.log(idx)
    console.log(idx[0])
    console.log(idx[1])
    if (idx[1] === "1") {
      exec(commandTable[parseInt(idx[0])])
    }
  }
}

const commandTable = ["steam", "discord",/* put your shell commands here*/]