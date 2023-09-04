import jsPDF, { GState } from "jspdf";
import { cod500, greyLines } from "./colors";
import { margin, pageWidthWithMargins } from "./dimensions";

export const addTitle = (jspdf: jsPDF, title: string, y: number) => {
  jspdf.setFont('montserrat', 'extrabold')
  jspdf.setFontSize(18)
  jspdf.setTextColor(cod500);
  jspdf.text(title.toUpperCase(), margin, y, { align: "left", baseline: "middle" });

  jspdf.setFillColor(greyLines)
  jspdf.line(jspdf.getTextDimensions(title.toUpperCase()).w + margin + 4, y, pageWidthWithMargins, y, "F")
}

export const highlighter = (jspdf: jsPDF, x: number, y: number, w: number, h: number) => {
  jspdf.saveGraphicsState();
  jspdf.setGState(new GState({ opacity: 0.5 }));
  jspdf.setFillColor('yellow')
  jspdf.rect(x, y, w, h, "F")
  jspdf.restoreGraphicsState();
}
export type lang = 'ar' | 'en' | 'fr';
