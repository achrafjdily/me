import jsPDF from "jspdf";
import { pdfIntro } from "../../src/app/store/models/introduction.interface";
import { ExperienceStat } from "../../src/app/store/app.state";
import { greyText } from "../utils/colors";
import ExperienceStatsData from "../../src/app/data/sections/experience_stats.json";
import { addTitle, lang } from "../utils/texts";

export default class IntroductionGenerator {

  private jsPdf!: jsPDF;
  private lang!: lang;

  private data!: { title: string, data: string };

  constructor(jsPdf: jsPDF, lang: lang) {
    this.jsPdf = jsPdf
    this.lang = lang
  }

  generateIntro() {

    let intro = this.data.data;

    (<ExperienceStat[]>ExperienceStatsData).forEach((experienceStat) => {
      intro = intro.replace(experienceStat.replaceableSlug, experienceStat.value)
    })

    this.jsPdf.setFont('montserrat', 'regular')
    this.jsPdf.setFontSize(10)
    this.jsPdf.setTextColor(greyText);
    this.jsPdf.text(intro, 20, 162, { align: "left", baseline: "top", lineHeightFactor: 1.35 });

  }

  async generate() {

    this.data = await import(`../../data/${this.lang}/sections/intro.json`)

    addTitle(this.jsPdf, 'INTRODUCTION', 150)
    this.generateIntro();
  }
}
