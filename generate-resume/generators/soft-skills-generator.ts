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

export default class SoftSkillsGenerator {

  private jsPdf!: jsPDF;

  private y!: number;

  private lang!: lang;

  private softSkills!: { title: string, data: string[] };

  constructor(jsPdf: jsPDF, lang: lang) {
    this.jsPdf = jsPdf
    this.lang = lang
  }

  async generateSoftSkills() {
    this.y += 18;

    this.softSkills.data.forEach((skill: string) => {

      this.jsPdf.setFillColor(greyText)
      this.jsPdf.circle(margin + 10, this.y, 2, "F")

      this.jsPdf.setFont('montserrat', 'medium')
      this.jsPdf.setFontSize(14)
      this.jsPdf.setTextColor(greyText);
      this.jsPdf.text(`${skill}`, margin + 14, this.y, { align: "left", baseline: "middle" });

      this.y += 14;
    });
  }

  async generate(y: number) {
    this.y = y + 10;

    this.softSkills = await import(`../../data/${this.lang}/soft-skills.json`)

    addTitle(this.jsPdf, this.softSkills.title, this.y)

    await this.generateSoftSkills();

    return this.y
  }
}
