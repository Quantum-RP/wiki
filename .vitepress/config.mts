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

const wikiDir = path.join(__dirname, '../wiki')
const gesetzeDir = path.join(__dirname, '../gesetze')

const wikiFiles = getMarkdownFiles(wikiDir)
const lawFiles = getMarkdownFiles(gesetzeDir)

console.log({wikiFiles, lawFiles})

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
        link: lawFiles.includes('index.md') ? '/gesetze' : `/gesetze/${lawFiles[0].replace('.md', '')}`
      }
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Wiki',
        items: generateNavLinks(wikiFiles, 'wiki')
      },
      {
        text: 'Gesetze',
        items: generateNavLinks(lawFiles, 'gesetze')
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
