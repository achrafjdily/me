import jsPDF from "jspdf";
import { pdfIntro } from "../../src/app/store/models/introduction.interface";
import { ExperienceStat } from "../../src/app/store/app.state";
import { cod500, green500, greyText } from "../utils/colors";
import ExperienceStatsData from "../../src/app/data/sections/experience_stats.json";
import { addTitle } from "../utils/texts";
import { techsByCategories } from "../../src/app/store/models/tech-item.interface";
import { addTechs } from "../utils/images";
import { margin, pageWidthWithMargins } from "../utils/dimensions";

export default class TechsGenerator {

  private jsPdf!: jsPDF;

  private y!: number;

  constructor(jsPdf: jsPDF) {
    this.jsPdf = jsPdf
  }

  async generateTechs() {
    this.y += 18;

    for (let i = 0; i < techsByCategories.length; i++) {


      const techsCat = techsByCategories[i];

      this.jsPdf.setFont('montserrat', 'bold')
      this.jsPdf.setFontSize(12)
      this.jsPdf.setTextColor(cod500);
      this.jsPdf.text(techsCat.category + " : ", margin + 50, this.y, { align: "right", baseline: "top" });

      this.y = await addTechs(this.jsPdf, techsCat.techs, green500, margin + 50 + 4, this.y, 5, pageWidthWithMargins - (margin + 50 - 4))
      this.y += 10

    }

  }

  async generate(y: number) {
    this.y = y + 10;

    addTitle(this.jsPdf, 'Tech stack', this.y)

    await this.generateTechs();

    return this.y
  }
}
