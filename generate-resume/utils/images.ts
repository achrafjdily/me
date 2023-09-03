import fs from "fs";
import jsPDF from "jspdf";
import fsp from "fs/promises";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { TechItem } from "../../src/app/store/models/tech-item.interface";
import { green500Hex } from "./colors";

const { convertFile } = require('convert-svg-to-png');

export const addImage = (jsPdf: jsPDF, src: string, type: string, x: number, y: number, w: number, h: number) => {
  const img = fs.readFileSync(src).toString('base64');
  jsPdf.addImage(img, type, x, y, w, h);
}

export const addSvg = async (jsPdf: jsPDF, svg: string, name: string, x: number, y: number, w: number, h: number) => {
  await fsp.writeFile(`./generate-resume/assets/generated/${name}.svg`, svg, { flag: 'w+' })
  await convertFile(`./generate-resume/assets/generated/${name}.svg`);
  addImage(jsPdf, `./generate-resume/assets/generated/${name}.png`, 'PNG', x, y, w, h)

}

export const convertPathToSvg = (icon: IconDefinition, color?: string): string => {
  return `<svg width="200" height="200" viewBox="0 0 ${icon.icon[0]} ${icon.icon[1]}" fill="${color ?? 'currentColor'}"><path d="${icon.icon[4]}"/></svg>`
}

export const addFaIcon = async (jsPdf: jsPDF, icon: IconDefinition, color: string, x: number, y: number, w: number, h: number) => {
  const svg = convertPathToSvg(icon, color)
  await addSvg(jsPdf, svg, icon.iconName, x, y, w, h)
}

export const addSimpleIcon = async (jsPdf: jsPDF, iconUrl: string, name: string, x: number, y: number, w: number, h: number) => {

  const svg = iconUrl.substring(0, 8) == '/assets/' ? fs.readFileSync(`./src${iconUrl}`).toString() : (fs.existsSync(`./generate-resume/assets/generated/${name}.svg`) ? fs.readFileSync(`./generate-resume/assets/generated/${name}.svg`).toString() : (await axios.get(iconUrl.replace('22c55e', green500Hex.substring(1)))).data);

  await addSvg(jsPdf, svg.replace('<svg', '<svg width="200" height="200" '), name, x, y, w, h)
}

export const addTechs = async (jsPdf: jsPDF, techs: TechItem[] | undefined, color: string, x: number, y: number, cols: number, w: number) => {
  if (techs) {
    const colWidth = w / cols;

    for (let i = 0; i < techs.length; i++) {
      const tech = techs[i];
      // console.log(tech.name)
      const tx = x + (i % cols) * colWidth

      tech.isSimpleIcon ? await addSimpleIcon(jsPdf, <string>tech.icon, tech.name, tx, y, 10, 10) : await addFaIcon(jsPdf, <IconDefinition>tech.icon, color, tx, y, 10, 10)

      jsPdf.setFont('montserrat', 'regular')
      jsPdf.setFontSize(10)
      jsPdf.setTextColor(color);
      jsPdf.text(`- ${tech.name.toUpperCase()}`, tx + 14, y + 5, { align: "left", baseline: "middle" })

      y += i != 0 && ((i + 1) % (cols)) == 0 ? 14 : 0
    }
  }

  return y + 14;
}


