import jsPDF from "jspdf";
import { pdfIntro } from "../../src/app/store/models/introduction.interface";
import { ExperienceStat } from "../../src/app/store/app.state";
import { greyText } from "../utils/colors";
import ExperienceStatsData from "../../src/app/data/sections/experience_stats.json";
import { addTitle } from "../utils/texts";

export default class IntroductionGenerator {

  private jsPdf!: jsPDF;

  constructor(jsPdf: jsPDF) {
    this.jsPdf = jsPdf
  }

  generateIntro() {

    let intro = pdfIntro;

    (<ExperienceStat[]>ExperienceStatsData).forEach((experienceStat) => {
      intro = intro.replace(experienceStat.replaceableSlug, experienceStat.value)
    })

    this.jsPdf.setFont('montserrat', 'regular')
    this.jsPdf.setFontSize(10)
    this.jsPdf.setTextColor(greyText);
    this.jsPdf.text(intro, 20, 152, { align: "left", baseline: "top", lineHeightFactor: 1.35 });

  }

  async generate() {

    addTitle(this.jsPdf, 'INTRODUCTION', 140)
    this.generateIntro();
  }
}
