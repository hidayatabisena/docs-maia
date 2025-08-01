import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s - MAIA.ID'
    }
  },
  logo: <span>MAIA Docs</span>,
  head: ( 
    <> 
      <meta property="og:title" content="MAIA Documentation" />
      <meta property="og:description" content="Mamperkenalkan MAIA, sebuah AI Platform yang memungkinkan tim atau perusahaan untuk membuat ChatGPT versi mereka sendiri." />
      <meta property="og:image" content="https://res.cloudinary.com/moyadev/image/upload/v1732762168/maia/FEED_C_wrg3kn.jpg" />
    </> 
  ), 
  project: {
    link: 'https://github.com/MAIA-ID',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/MAIA-ID',
  footer: {
    text: 'MAIA Documentations © 2024',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1, // Menambahkan konfigurasi ini untuk membuat sidebar collapse secara default
  }
}

export default config
