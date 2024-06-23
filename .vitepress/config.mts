import { defineConfig } from 'vitepress'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

// Function to read all markdown files from a directory
function getMarkdownFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter(file => file.isFile() && file.name.endsWith('.md'))
    .map(file => file.name)
}

// Function to get the front matter title if available, otherwise use the filename
function getFileTitle(filePath) {
  console.log({filePath})
  const content = fs.readFileSync(filePath, 'utf-8')
  const { data } = matter(content)
  return data.title || path.basename(filePath, '.md').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}

// Function to generate navigation links
function generateNavLinks(files, baseDir) {
  return files.map(file => {
    const filePath = path.join(baseDir, file)
    return {
      text: getFileTitle(filePath),
      link: `/${baseDir}/${file.replace('.md', '')}`
    }
  })
}

const wikiFiles = getMarkdownFiles(path.join(__dirname, '../wiki'))
const gesetzeFiles = getMarkdownFiles(path.join(__dirname, '../gesetze'))
const bußgeld = getMarkdownFiles(path.join(__dirname, '../bußgeld'))
const regeln = getMarkdownFiles(path.join(__dirname, '../regeln'))

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Quantum RP",
  description: "Quantum RP Wiki und Gesetze",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'Wiki', 
        link: wikiFiles.includes('index.md') ? '/wiki' : `/wiki/${wikiFiles[0].replace('.md', '')}`
      },
      {
        text: 'Gesetze', 
        link: gesetzeFiles.includes('index.md') ? '/gesetze' : `/gesetze/${gesetzeFiles[0].replace('.md', '')}`
      },
      {
        text: 'Bußgeld', 
        link: bußgeld.includes('index.md') ? '/bußgeld' : `/bußgeld/${bußgeld[0].replace('.md', '')}`
      },
      {
        text: 'Regeln', 
        link: regeln.includes('index.md') ? '/regeln' : `/regeln/${regeln[0].replace('.md', '')}`
      }
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        collapsed: true,
        text: 'Wiki',
        items: generateNavLinks(getMarkdownFiles(path.join(__dirname, '../wiki')), 'wiki')
      },
      {
        collapsed: true,
        text: 'Gesetze',
        items: generateNavLinks(getMarkdownFiles(path.join(__dirname, '../gesetze')), 'gesetze')
      },
      {
        collapsed: true,
        text: 'Bußgeld',
        items: generateNavLinks(getMarkdownFiles(path.join(__dirname, '../bußgeld')), 'bußgeld')
      },
      {
        collapsed: true,
        text: 'Regeln',
        items: generateNavLinks(getMarkdownFiles(path.join(__dirname, '../regeln')), 'regeln')
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
