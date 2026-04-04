export default {
  name: 'post',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre de l\'article',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Image principale',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'body',
      title: 'Contenu',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}