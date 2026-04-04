import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import post from './schemas/post'; // زدنا هاد السطر

export default defineConfig({
  name: 'default',
  title: 'Blog Orthophoniste',
  projectId: 'brkysa43', 
  dataset: 'production',
  basePath: '/studio',
  plugins: [deskTool()],
  schema: {
    types: [post], // زدنا post هنا
  },
});