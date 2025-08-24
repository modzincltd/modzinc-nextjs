export default {
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Client Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'website',
      title: 'Website URL',
      type: 'url',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'featured',
      title: 'Featured Client',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'active',
      title: 'Active Client',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
      featured: 'featured',
      active: 'active',
    },
    prepare(selection: any) {
      const { title, media, featured, active } = selection
      let displayTitle = title
      if (!active) displayTitle = `[INACTIVE] ${title}`
      if (featured) displayTitle = `⭐ ${displayTitle}`
      return {
        title: displayTitle,
        media,
      }
    },
  },
}


