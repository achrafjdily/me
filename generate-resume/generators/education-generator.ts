import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import jsPDF, { GState } from "jspdf";
import { pdfIntro } from "../../src/app/store/models/introduction.interface";
import { pdfLinks } from "../../src/app/store/models/social-link.interface";
import { ExperienceStat } from "../../src/app/store/app.state";
import { cod500, green500, greyLines, greyText, white } from "../utils/colors";
import { addImage, addSimpleIcon, addSvg, addTechs } from "../utils/images";
import ExperienceStatsData from "../../src/app/data/sections/experience_stats.json";
import moment, { Moment } from "moment";
import { TimeLineItem } from "../../src/app/store/models/timeline-item.interface";
import { ngrx } from "../../src/app/store/models/tech-item.interface";
import { margin, pageHeight, pageHeightWithMargins, pageWidth, pageWidthWithMargins } from "../utils/dimensions";
import { addTitle, lang } from "../utils/texts";

export default class EducationGenerator {

  private jsPdf!: jsPDF;

  private y!: number;

  private lang!: lang;

  private eduTimeLine!: { title: string, data: TimeLineItem[] };


  constructor(jsPdf: jsPDF, lang: lang) {
    this.jsPdf = jsPdf
    this.lang = lang
  }

  async generateExperiences() {

    this.y += 20

    for (let i = 0; i < this.eduTimeLine.data.length; i++) {
      if (pageHeightWithMargins <= this.y) {
        this.y = 20;
        this.jsPdf.addPage('a4')
      }

      this.y = await this.generateExperience(this.eduTimeLine.data[i], this.y)
    }

    return this.y

  }


  async generateExperience(eduItem: TimeLineItem, y: number) {

    this.jsPdf.setFont('montserrat', 'italic')
    this.jsPdf.setFontSize(10)
    this.jsPdf.setTextColor(greyText);
    this.jsPdf.text(this.getDateString(eduItem.start, eduItem.end), 150, y, { align: "right", baseline: "top" });
    const datesDims = this.jsPdf.getTextDimensions(this.getDateString(eduItem.start, eduItem.end))

    this.jsPdf.setDrawColor(green500)
    this.jsPdf.setLineWidth(2)
    this.jsPdf.circle(160, y + datesDims.h / 2, 4, "S")

    this.jsPdf.setFont('montserrat', 'bold')
    this.jsPdf.setFontSize(16)
    this.jsPdf.setTextColor(cod500);

    const title = this.jsPdf.splitTextToSize(eduItem.title, pageWidthWithMargins - 170).join('\n')

    this.jsPdf.text(title, 170, y + datesDims.h / 2, { align: "left", baseline: "middle" });

    const titleRows = ((title.match(/\n/g) || []).length);

    const titleDims = this.jsPdf.getTextDimensions(title)

    let startTasksY = y + (titleDims.h * titleRows) + 4

    this.jsPdf.setFont('montserrat', 'extrabold')
    this.jsPdf.setFontSize(14)
    this.jsPdf.setTextColor(green500);

    const institute = this.jsPdf.splitTextToSize(eduItem.institute.name, pageWidthWithMargins - 170).join('\n')

    this.jsPdf.text(institute, 170, startTasksY + 10, { align: "left", baseline: "top" });

    const instituteDims = this.jsPdf.getTextDimensions(eduItem.institute.name)

    const instituteRows = ((institute.match(/\n/g) || []).length) + 2;

    startTasksY = startTasksY + (instituteDims.h * instituteRows) + 4

    this.jsPdf.setFillColor(green500)
    this.jsPdf.rect(159, y + datesDims.h + 1, 2, startTasksY - (y + datesDims.h - 8))

    return startTasksY + 10
  }

  getDateString(start: Moment, end?: Moment | null | undefined) {
    let formatted = start.format('MMMM YYYY');
    formatted += end ? ` - ${end.format('MMMM YYYY')}` : ''
    return formatted
  }

  highlighter(x: number, y: number, w: number, h: number) {
    this.jsPdf.saveGraphicsState();
    this.jsPdf.setGState(new GState({ opacity: 0.5 }));
    this.jsPdf.setFillColor('yellow')
    this.jsPdf.rect(x, y, w, h, "F")
    this.jsPdf.restoreGraphicsState();
  }

  async generate(y: number) {

    this.y = y + 10;

    const data = (await import(`../../data/${this.lang}/sections/edu.json`))

    this.eduTimeLine = {
      title: data.title,
      data: data.data.map((item: any): TimeLineItem => {
        return {
          ...item,
          start: moment(item.start),
          end: moment(item.end),
        }
      })
    }

    if (pageHeightWithMargins - this.y < margin) {
      this.y = margin;
      this.jsPdf.addPage('a4')
    }

    addTitle(this.jsPdf, this.eduTimeLine.title, this.y)

    return await this.generateExperiences();
  }
}
