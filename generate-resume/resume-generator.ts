import jsPDF, { GState } from "jspdf";
import MontserratMedium from "./assets/fonts/montserrat-medium";
import MontserratRegular from "./assets/fonts/montserrat-regular";
import MontserratExtrabold from "./assets/fonts/montserrat-extrabold";
import MontserratItalic from "./assets/fonts/montserrat-italic";
import MontserratBold from "./assets/fonts/montserrat-bold";

import HeaderGenerator from "./generators/header-generator";
import IntroductionGenerator from "./generators/introduction-generator";
import ExperienceGenerator from "./generators/experience-generator";
import EducationGenerator from "./generators/education-generator";
import TechsGenerator from "./generators/techs-generator";
import LangsGenerator from "./generators/langs-generator";

const { convert, convertFile } = require('convert-svg-to-png');

export class ResumeGenerator {
  private jsPdf!: jsPDF;
  private headerGenerator!: HeaderGenerator;
  private introductionGenerator!: IntroductionGenerator;
  private experienceGenerator!: ExperienceGenerator;
  private educationGenerator!: EducationGenerator;
  private techsGenerator!: TechsGenerator;
  private langsGenerator!: LangsGenerator;

  constructor() {
    this.jsPdf = new jsPDF({
      unit: 'px',
      format: 'a4',
      compress: true,
      precision: 1,
    })

    this.initFonts();

    this.headerGenerator = new HeaderGenerator(this.jsPdf)
    this.introductionGenerator = new IntroductionGenerator(this.jsPdf)
    this.experienceGenerator = new ExperienceGenerator(this.jsPdf)
    this.educationGenerator = new EducationGenerator(this.jsPdf)
    this.techsGenerator = new TechsGenerator(this.jsPdf)
    this.langsGenerator = new LangsGenerator(this.jsPdf,'fr')

  }

  async generateResume() {

    await this.headerGenerator.generate()
    await this.introductionGenerator.generate()
    let y = await this.experienceGenerator.generate()

    y = await this.educationGenerator.generate(y + 10)

    y = await this.techsGenerator.generate(y + 10)

    y = await this.langsGenerator.generate(y + 10)

    this.jsPdf.save('./src/assets/resume.pdf')
  }

  initFonts() {
    this.jsPdf.addFileToVFS("montserrat-medium.ttf", MontserratMedium);
    this.jsPdf.addFileToVFS("montserrat-regular.ttf", MontserratRegular);
    this.jsPdf.addFileToVFS("montserrat-extrabold.ttf", MontserratExtrabold);
    this.jsPdf.addFileToVFS("montserrat-italic.ttf", MontserratItalic);
    this.jsPdf.addFileToVFS("montserrat-bold.ttf", MontserratBold);

    this.jsPdf.addFont("montserrat-medium.ttf", "montserrat", "medium");
    this.jsPdf.addFont("montserrat-regular.ttf", "montserrat", "regular");
    this.jsPdf.addFont("montserrat-extrabold.ttf", "montserrat", "extrabold");
    this.jsPdf.addFont("montserrat-italic.ttf", "montserrat", "italic");
    this.jsPdf.addFont("montserrat-bold.ttf", "montserrat", "bold");
  }

  highlighter(x: number, y: number, w: number, h: number) {
    this.jsPdf.saveGraphicsState();
    this.jsPdf.setGState(new GState({ opacity: 0.5 }));
    this.jsPdf.setFillColor('yellow')
    this.jsPdf.rect(x, y, w, h, "F")
    this.jsPdf.restoreGraphicsState();
  }

}


// {
//   helvetica: [ 'normal', 'bold', 'italic', 'bolditalic' ],
//   Helvetica: [ '', 'Bold', 'Oblique', 'BoldOblique' ],
//   courier: [ 'normal', 'bold', 'italic', 'bolditalic' ],
//   Courier: [ '', 'Bold', 'Oblique', 'BoldOblique' ],
//   times: [ 'normal', 'bold', 'italic', 'bolditalic' ],
//   Times: [ 'Roman', 'Bold', 'Italic', 'BoldItalic' ],
//   zapfdingbats: [ 'normal' ],
//   ZapfDingbats: [ '' ],
//   symbol: [ 'normal' ],
//   Symbol: [ '' ],
//   montserrat: [ 'medium', 'regular', 'extrabold', 'italic' ]
// }
