import { MdLocalPizza as icon } from 'react-icons/md';

export default {
  // computer name
  name: 'pizza',
  // visible title
  title: 'Pizzas',
  type: 'document',
  // destructured as it's taking icon from the object with the same name
  icon,
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'Name of the pizza',
    },
    // slug will create a field to generate a user friendly url version of the name entered
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        // user can create a focus point which is then carried over on whatever image size is viewed.
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of pizza in cents',
      validation: (Rule) => Rule.min(1000).max(50000),
      // TODO: Add custom input component
    },
  ],
};
