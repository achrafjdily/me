import jsPDF from "jspdf";
import { pdfIntro } from "../../src/app/store/models/introduction.interface";
import { ExperienceStat } from "../../src/app/store/app.state";
import { cod500, green500, greyText } from "../utils/colors";
import ExperienceStatsData from "../../src/app/data/sections/experience_stats.json";
import { addTitle, lang } from "../utils/texts";
import { techsByCategories } from "../../src/app/store/models/tech-item.interface";
import { addTechs } from "../utils/images";
import { margin, pageWidthWithMargins } from "../utils/dimensions";
import langs from "../../data/en/langs.json";

export default class LangsGenerator {

  private jsPdf!: jsPDF;

  private y!: number;

  private lang!: lang;
  private langs!: any;

  constructor(jsPdf: jsPDF, lang: lang) {
    this.jsPdf = jsPdf
    this.lang = lang
  }

  async generateLangs() {
    this.y += 18;

    this.langs.data.forEach((lang: any) => {

      this.jsPdf.setFillColor(greyText)
      this.jsPdf.circle(margin + 10, this.y, 2, "F")

      this.jsPdf.setFont('montserrat', 'medium')
      this.jsPdf.setFontSize(14)
      this.jsPdf.setTextColor(greyText);
      this.jsPdf.text(`${lang.name} : ${lang.level}`, margin + 14, this.y, { align: "left", baseline: "middle" });

      this.y += 14;
    });
  }

  async generate(y: number) {
    this.y = y + 10;

    this.langs = await import(`../../data/${this.lang}/langs.json`)

    addTitle(this.jsPdf, this.langs.title, this.y)

    await this.generateLangs();

    return this.y
  }
}
