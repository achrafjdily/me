import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import jsPDF, { GState } from "jspdf";
import { pdfIntro } from "../../src/app/store/models/introduction.interface";
import { pdfLinks } from "../../src/app/store/models/social-link.interface";
import { ExperienceStat } from "../../src/app/store/app.state";
import { cod500, green500, greyLines, greyText, white } from "../utils/colors";
import { addImage, addSimpleIcon, addSvg, addTechs } from "../utils/images";
import ExperienceStatsData from "../../src/app/data/sections/experience_stats.json";
import { Moment } from "moment";
import { expTimeLine, TimeLineItem } from "../../src/app/store/models/timeline-item.interface";
import { ngrx } from "../../src/app/store/models/tech-item.interface";
import { pageHeight, pageHeightWithMargins, pageWidth } from "../utils/dimensions";
import { addTitle } from "../utils/texts";

export default class ExperienceGenerator {

  private jsPdf!: jsPDF;

  constructor(jsPdf: jsPDF) {
    this.jsPdf = jsPdf
  }

  async generateExperiences() {

    let y = 210;

    for (let i = 0; i < expTimeLine.length; i++) {
      if (pageHeightWithMargins <= y) {
        y = 20;
        this.jsPdf.addPage('a4')
      }

      y = await this.generateExperience(expTimeLine[i], y)
    }

    return y

  }


  async generateExperience(expItem: TimeLineItem, y: number) {

    this.jsPdf.setFont('montserrat', 'italic')
    this.jsPdf.setFontSize(10)
    this.jsPdf.setTextColor(greyText);
    this.jsPdf.text(this.getDateString(expItem.start, expItem.end), 150, y, { align: "right", baseline: "top" });
    const datesDims = this.jsPdf.getTextDimensions(this.getDateString(expItem.start, expItem.end))

    this.jsPdf.setDrawColor(green500)
    this.jsPdf.setLineWidth(2)
    this.jsPdf.circle(160, y + datesDims.h / 2, 4, "S")


    this.jsPdf.setFont('montserrat', 'extrabold')
    this.jsPdf.setFontSize(14)
    this.jsPdf.setTextColor(green500);
    this.jsPdf.text(expItem.institute.name, 150, y + 10, { align: "right", baseline: "top" });
    const textDims = this.jsPdf.getTextDimensions(expItem.institute.name)
    this.jsPdf.link(150 - textDims.w, y + 10, textDims.w, textDims.h, { url: expItem.institute.link })
    this.jsPdf.setFillColor(green500)
    this.jsPdf.line(150 - textDims.w, y + 10 + textDims.h, 150, y + 10 + textDims.h, "F")

    this.jsPdf.setFont('montserrat', 'regular')
    this.jsPdf.setFontSize(12)
    this.jsPdf.setTextColor(greyText);
    this.jsPdf.text(`${expItem.job?.time} - ${expItem.job?.remote ? 'Remote' : 'Onsite'}`, 150, y + 30, { align: "right", baseline: "top" });

    this.jsPdf.setFont('montserrat', 'bold')
    this.jsPdf.setFontSize(16)
    this.jsPdf.setTextColor(cod500);
    this.jsPdf.text(expItem.title, 170, y + datesDims.h / 2, { align: "left", baseline: "middle" });
    const titleDims = this.jsPdf.getTextDimensions(expItem.title)

    this.jsPdf.setFont('montserrat', 'regular')
    this.jsPdf.setFontSize(10)
    this.jsPdf.setTextColor(greyText);
    this.jsPdf.text('Techs & Tools :', 170, y + titleDims.h + 4, { align: "left", baseline: "top" });
    const techsDims = this.jsPdf.getTextDimensions('Techs & Tools :')

    const techsEndY = await addTechs(this.jsPdf, expItem.techs, green500, 170 + techsDims.w + 4, y + titleDims.h + 4, 3, 426.46 - 170 - techsDims.w - 4)

    let startTasksY = techsEndY + 6

    expItem.tasks?.map(task => this.jsPdf.splitTextToSize(task, 426.46 - 198)).map(task => task.join('\n')).forEach(task => {
      this.jsPdf.setFillColor(greyText)
      this.jsPdf.circle(190, startTasksY + 4, 2, "F")

      this.jsPdf.setFont('montserrat', 'regular')
      this.jsPdf.setFontSize(10)
      this.jsPdf.setTextColor(greyText);
      this.jsPdf.text(task, 198, startTasksY, { align: "left", baseline: "top" });

      const taskDims = this.jsPdf.getTextDimensions(task)

      const count = ((task.match(/\n/g) || []).length) + 2;

      startTasksY += (2 + (taskDims.h * count))
    })

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

  async generate() {

    addTitle(this.jsPdf, 'EXPERIENCE', 190)

    return await this.generateExperiences();
  }
}
