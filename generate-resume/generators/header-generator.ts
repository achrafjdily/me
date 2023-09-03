import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import jsPDF from "jspdf";
import { pdfLinks } from "../../src/app/store/models/social-link.interface";
import { cod500, green500, greyLines, greyText } from "../utils/colors";
import { addFaIcon, addImage, addSvg } from "../utils/images";

export default class HeaderGenerator {

  private jsPdf!: jsPDF;

  constructor(jsPdf: jsPDF) {
    this.jsPdf = jsPdf
  }


  generateProfile() {
    addImage(this.jsPdf, './generate-resume/assets/me.jpg', 'JPEG', 20, 20, (100 * 0.8), 100)
    this.jsPdf.setFont('montserrat', 'regular')
    this.jsPdf.setFontSize(32)
    this.jsPdf.setTextColor(cod500)
    this.jsPdf.text('ACHRAF', 120, 20, { align: "left", baseline: "top" })
    this.jsPdf.setFont('montserrat', 'extrabold')
    this.jsPdf.setTextColor(green500)
    this.jsPdf.text('JDILY', 228, 20, { align: "left", baseline: "top" })

    this.jsPdf.setFont('montserrat', 'medium')
    this.jsPdf.setFontSize(14)
    this.jsPdf.setTextColor(cod500)
    this.jsPdf.text('Full-Stack web & hybrid mobile apps developer', 120, 45, { align: "left", baseline: "top" })
  }

  async generateLinks() {
    this.jsPdf.setFillColor(greyLines)
    this.jsPdf.line(120, 60, 426.46, 60, "F")

    await this.generateLocation()

    let y = 62;
    const gap = 155.23;

    for (let i = 0; i < pdfLinks.length; i++) {

      const socialLink = pdfLinks[i];

      const x = 120 + ((i + 1) % 2) * gap

      await addFaIcon(this.jsPdf, socialLink.icon, greyText, x + 2, y + 2, 10, 10)
      this.jsPdf.setTextColor(greyText)
      this.jsPdf.setFont('montserrat', 'regular')
      this.jsPdf.setFontSize(10)

      this.jsPdf.text(socialLink.pdfUsername ?? socialLink.username, x + 14, (y + 7), { align: "left", baseline: 'middle' })

      this.jsPdf.link(x, y + 1, 147, 12, { url: socialLink.link });


      y += ((i + 1) % 2) == 1 ? 16 : 0

      if (((i + 1) % 2) == 1) {
        this.jsPdf.setFillColor(greyLines)
        this.jsPdf.line(125, y - 1, 421.46, y - 1, "F")
      }
    }
  }

  async generateLocation() {

    this.jsPdf.setFillColor(greyLines)
    this.jsPdf.line(273.23, 67, 273.23, 119, "F")

    await addFaIcon(this.jsPdf, faLocationDot, greyText, 122, 64, 10, 10)
    this.jsPdf.setTextColor(greyText)
    this.jsPdf.setFont('helvetica', 'normal')
    this.jsPdf.setFontSize(12)

    this.jsPdf.text('Casablanca, Morocco', 134, 69, { align: "left", baseline: 'middle' })
  }

  async generate() {
    this.generateProfile();
    await this.generateLinks();
  }
}
