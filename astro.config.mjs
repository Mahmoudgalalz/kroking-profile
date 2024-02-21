import { defineConfig } from 'astro/config';
import node from '@astrojs/node'
import tailwind from "@astrojs/tailwind";
// import NudgeerSafe from '@onboardbase/nudgeer-safe'

// const headers =  new NudgeerSafe({includeConfig:true}).astro()

export default defineConfig({
  output:'server',
  // server:{
  //   headers: headers
  // },
  adapter:node({
    mode: 'standalone',
  }),
  integrations: [tailwind()]
});