import fs from "fs"
import { Document,Packer,Paragraph,HeadingLevel } from "docx"
import PptxGenJS from "pptxgenjs"

async function generateWord(){

const doc=new Document({

sections:[{

children:[

new Paragraph({
text:"ContentCre Project",
heading:HeadingLevel.HEADING_1
}),

new Paragraph("Developer: Raj Kashyap"),

new Paragraph({
text:"Features",
heading:HeadingLevel.HEADING_2
}),

new Paragraph("Authentication"),
new Paragraph("CRUD Posts"),
new Paragraph("Admin Panel"),
new Paragraph("Role Based Access"),

]

}]

})

const buffer=await Packer.toBuffer(doc)

fs.writeFileSync("Project_Documentation.docx",buffer)

}

async function generatePPT(){

const ppt=new PptxGenJS()

let slide=ppt.addSlide()

slide.addText("ContentCre Project",{x:1,y:1,fontSize:28})

slide.addText("Full Stack SaaS Platform",{x:1,y:2})

await ppt.writeFile("Project_Presentation.pptx")

}

generateWord()
generatePPT()