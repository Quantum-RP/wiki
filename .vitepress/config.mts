import { defineConfig } from 'vitepress'
import fs from 'fs'

const wikiFiles = fs.readdirSync(__dirname + '/../wiki', {recursive: true})
const lawFiles = fs.readdirSync(__dirname + '/../gesetze', {recursive: true})

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Quantum RP",
  description: "Quantum RP Wiki und Gesetze",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wiki', link: '/wiki' },
      { text: 'Gesetze', link: '/gesetze' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Wiki',
        items: [
          ...wikiFiles.map(file => {
            return {
              text: file.replace('.md', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
              link: `/wiki/${file.replace('.md', '')}`
            }
          })
        ]
      },
      {
        text: 'Gesetze',
        items: [
          ...lawFiles.map(file => {
            return {
              text: file.replace('.md', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
              link: `/gesetze/${file.replace('.md', '')}`
            }
          })
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
