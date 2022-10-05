const express = require('express')
const PDFDocument = require('pdfkit');
const fs = require('fs');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const testImage = fs.readFileSync('./testing.jpeg');
  const doc = new PDFDocument({ margin: 50 });
  doc
  .image(testImage, 150, 50, {fit: [300, 300]})
  .image(testImage, 150, 50, {fit: [300, 300]})
  .image(testImage, 150, 150, {fit: [300, 300]})
  .image(testImage, 150, 250, {fit: [300, 300]})
  .image(testImage, 150, 50, {fit: [300, 300]})
  .image(testImage, 150, 150, {fit: [300, 300]})
  .image(testImage, 150, 250, {fit: [300, 300]})
  .image(testImage, 150, 50, {fit: [300, 300]})
  .image(testImage, 150, 150, {fit: [300, 300]})
  .image(testImage, 150, 250, {fit: [300, 300]})
      .fillColor("#444444")
      .fontSize(20)
      .text("test pdfkit 0.8.0", 50, 160);
  doc.pipe(res);
  doc.end();
  // res.send('test')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})