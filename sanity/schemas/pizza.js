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
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      // type topping is the name in topping.js
      of: [{ type: 'reference', to: [{ type: 'topping' }] }],
    },
  ],
  preview: {
    select: {
      // this is diff from the toppings version name or title it can be anything
      title: 'name',
      media: 'image',
      // gets the first 4 toppings
      topping0: 'toppings.0.name',
      topping1: 'toppings.1.name',
      topping2: 'toppings.2.name',
      topping3: 'toppings.3.name',
    },
    // fields.name and fields.vegetarian has been destructured
    prepare: ({ title, media, ...toppings }) => {
      // filter undefined toppings out
      const tops = Object.values(toppings).filter(Boolean);
      // return preview object for the pizza
      return {
        title,
        media,
        // Object.values() turns toppings object into an array to allow join to work
        subtitle: tops.join(', '),
      };
    },
  },
};
