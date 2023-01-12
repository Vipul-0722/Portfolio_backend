export default {
  name: 'testimonial',
  type: 'document',
  title: 'Testimonial',
  fields: [
    {
      name: 'name', // name of person leaving the testimonial
      title: 'Name',
      type: 'string',
    },
    {
      name: 'company', // name of person leaving the testimonial
      title: 'Company',
      type: 'string',
    },
    {
      name: 'imageurl', // name of person leaving the testimonial
      title: 'ImgURL',
      type: 'image',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'feedback', // name of person leaving the testimonial
      title: 'Feedback',
      type: 'string',
    },
  ],
}
