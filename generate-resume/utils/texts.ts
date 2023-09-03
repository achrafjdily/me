import jsPDF from "jspdf";
import { cod500, greyLines } from "./colors";
import { margin, pageWidthWithMargins } from "./dimensions";

export const addTitle = (jspdf: jsPDF, title: string, y: number) => {
  jspdf.setFont('montserrat', 'extrabold')
  jspdf.setFontSize(18)
  jspdf.setTextColor(cod500);
  jspdf.text(title, margin, y, { align: "left", baseline: "middle" });


  jspdf.setFillColor(greyLines)
  jspdf.line(jspdf.getTextDimensions(title).w + margin + 4, y, pageWidthWithMargins, y, "F")

}


export type lang = 'ar' | 'en' | 'fr';
