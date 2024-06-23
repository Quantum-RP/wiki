import { defineConfig } from 'vitepress'
import fs from 'fs'

const wikiFiles = fs.readdirSync(__dirname + '/../wiki')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wiki', link: '/wiki' }
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
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
