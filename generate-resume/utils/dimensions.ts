import jsPDF from "jspdf";


const widthInPt = 595.28
const heightInPt = 841.89

const ptToPx = 72 / 96

export const margin = 20

export const pageWidth: number = widthInPt * ptToPx
export const pageWidthWithMargins: number = pageWidth - margin * 2

export const pageHeight: number = heightInPt * ptToPx
export const pageHeightWithMargins: number = pageHeight - margin * 2

// export const green: string = ""
