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
    // --- هادا هو الكود اللي غاتزيد دابا ---
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title', 
        maxLength: 96,
      },
    },
    // ------------------------------------
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