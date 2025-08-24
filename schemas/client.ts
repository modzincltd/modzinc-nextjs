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
      name: 'company',
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'logoWhite',
      title: 'Company Logo (White Version)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'industry',
      title: 'Industry',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'website',
      title: 'Website URL',
      type: 'url',
    },
    {
      name: 'description',
      title: 'Client Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'services',
      title: 'Services Provided',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'Web Development',
          'E-commerce',
          'UI/UX Design',
          'Digital Marketing',
          'Custom Applications',
          'Consulting',
        ],
      },
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
      name: 'testimonials',
      title: 'Client Testimonials',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
    },
    {
      name: 'projects',
      title: 'Client Projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'company',
      media: 'logo',
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


