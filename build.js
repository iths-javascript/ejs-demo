const ejs = require('ejs')
const path = require('path')
const fs = require('fs')

const outputDir = 'dist'

const templatePath = path.join("views", "layout.ejs")

const pages = [
  {title: 'Home', filename: 'index.html', template: 'home.ejs'}, 
  {title: 'About', filename: 'about.html', template: 'about.ejs'}, 
  {title: 'Contact', filename: 'contact.html', template: 'contact.ejs'}
]


for(let page of pages){
  const data = {page: page.template, pages}
  ejs.renderFile(templatePath, data, function(err, str){
    if(err){
      console.log(err)
    }else{
      // console.log(str);
      const outputPath = path.join(outputDir, page.filename)
      fs.writeFileSync(outputPath, str)
      // console.log("Done with " + headline.title)
    }
  })
}