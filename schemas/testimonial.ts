export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'clientCompany',
      title: 'Client Company',
      type: 'string',
    },
    {
      name: 'clientImage',
      title: 'Client Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'content',
      title: 'Testimonial Content',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule: any) => Rule.min(1).max(5),
    },
    {
      name: 'project',
      title: 'Related Project',
      type: 'reference',
      to: [{ type: 'project' }],
    },
    {
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    },
  ],
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'clientCompany',
      media: 'clientImage',
      featured: 'featured',
    },
    prepare(selection: any) {
      const { title, subtitle, media, featured } = selection
      return {
        title: featured ? `⭐ ${title}` : title,
        subtitle,
        media,
      }
    },
  },
}


