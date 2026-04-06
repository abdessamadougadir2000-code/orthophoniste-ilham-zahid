import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
// كنقولو ليه يقلب على ملف post وسط مجلد schemas
import post from './schemas/post'; 

export default defineConfig({
  name: 'default',
  title: 'Orthophoniste Zahid Ilham',

  projectId: '77k3g7b4', 
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    // هنا كنحطو الملف اللي صيفطتي ليا دابا
    types: [post], 
  },
});