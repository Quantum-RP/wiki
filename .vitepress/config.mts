import { defineConfig } from 'vitepress'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

// Function to read all markdown files from a directory
// function getMarkdownFiles(dir) {
//   return fs.readdirSync(dir, { withFileTypes: true })
//     .filter(file => file.isFile() && file.name.endsWith('.md'))
//     .map(file => file.name)
// }

// // Function to get the front matter title if available, otherwise use the filename
// function getFileTitle(filePath) {
//   const content = fs.readFileSync(filePath, 'utf-8')
//   const { data } = matter(content)
//   return data.title || path.basename(filePath, '.md').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
// }

// function getFileIndex(filePath) {
//   const content = fs.readFileSync(filePath, 'utf-8')
//   const { data } = matter(content)
//   return data.index ?? 1
// }

// // Function to generate navigation links
// function generateNavLinks(files, baseDir) {
//   return files.map(file => {
//     const filePath = path.join(baseDir, file)
//     return {
//       text: getFileTitle(filePath),
//       link: `/${baseDir}/${file.replace('.md', '')}`,
//       index: getFileIndex(filePath)
//     }
//   }).sort((a, b) => a.index - b.index)
// }

// const wikiFiles = getMarkdownFiles(path.join(__dirname, '../wiki'))
// const gesetzeFiles = getMarkdownFiles(path.join(__dirname, '../gesetze'))
// const bußgeld = getMarkdownFiles(path.join(__dirname, '../bußgeld'))
// const regeln = getMarkdownFiles(path.join(__dirname, '../regeln'))

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Quantum",
  description: "Quantum Regeln, Wiki und Gesetze",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { 
      //   text: 'Wiki', 
      //   link: wikiFiles.includes('index.md') ? '/wiki' : `/wiki/${wikiFiles[0].replace('.md', '')}`
      // },
      // {
      //   text: 'Gesetze', 
      //   link: gesetzeFiles.includes('index.md') ? '/gesetze' : `/gesetze/${gesetzeFiles[0].replace('.md', '')}`
      // },
      // {
      //   text: 'Bußgeld', 
      //   link: bußgeld.includes('index.md') ? '/bußgeld' : `/bußgeld/${bußgeld[0].replace('.md', '')}`
      // },
      // {
      //   text: 'Regeln', 
      //   link: regeln.includes('index.md') ? '/regeln' : `/regeln/${regeln[0].replace('.md', '')}`
      // }
    ],

    notFound: {
      code: 'Quantum',
      title: 'Hier gibts nichts mehr zu sehen',
      quote: `
Die Projektleitung von Quantum hat kürzlich einige ihrer Entwickler von ihrem Discord-Server gebannt. 
Dies geschah, nachdem wir uns Anerkennung für die von uns geleistete Arbeit und ein faires Miteinander gewünscht haben. Stattdessen wurde unsere Bitte um ein Gespräch diesbezüglich mit einem Ausschluss aus dem Team beantwortet.
Die gebannten Entwickler haben 85 der 110 aktuellen Coding-Features entwickelt, und ich persönlich habe an diesem Projekt bereits lange gearbeitet, bevor Quantum als Team überhaupt existierte. Als wir versucht haben zu Kommunizieren, dass wir nicht möchten, dass unsere Arbeit ohne unsere Zustimmung weiterverwendet wird, folgte daraufhin der Discord-Bann.
Bis eine zufriedenstellende Klärung erfolgt, behalten wir uns das Recht vor, unsere Urheberrechte geltend zu machen und die Nutzung unseres Codes durch Quantum zu verweigern. Bei Fragen könnt ihr euch gerne über Discord an mich wenden: can_not_read_properties_of
`,
    },

    search: {
      provider: 'local'
    },

    sidebar: [
      // {
      //   collapsed: true,
      //   text: 'Wiki',
      //   items: generateNavLinks(wikiFiles, 'wiki')
      // },
      // {
      //   collapsed: true,
      //   text: 'Gesetze',
      //   items: generateNavLinks(gesetzeFiles, 'gesetze')
      // },
      // {
      //   collapsed: true,
      //   text: 'Bußgeld',
      //   items: generateNavLinks(bußgeld, 'bußgeld')
      // },
      // {
      //   collapsed: true,
      //   text: 'Regeln',
      //   items: generateNavLinks(regeln, 'regeln')
      // }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
