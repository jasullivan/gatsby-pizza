import { MdLocalPizza as icon } from 'react-icons/md';
import PriceInput from '../components/PriceInput';

export default {
  // computer name of dataset
  name: 'pizza',
  // visible title
  title: 'Pizzas',
  type: 'document',
  // destructured as it's taking icon from the object with the same name
  icon,
  // input fields to fillout in the CMS
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
      inputComponent: PriceInput,
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      // type topping is the name in topping.js
      // this uses the array and the reference schema types
      of: [{ type: 'reference', to: [{ type: 'topping' }] }],
    },
  ],
  // this creates a custom preview of each pizza in the CMS admin
  preview: {
    select: {
      // title is just how it appears in your preview function. so it could be name, title, called anything
      title: 'name',
      media: 'image',
      // this is just the sanity syntax to get toppings based on index - gets the first 4 topping, from toppings
      // says get the toppings array, grab the item at index 0 and grab it's name
      // NB the toppings array is created from this schema not topping.js
      topping0: 'toppings.0.name',
      topping1: 'toppings.1.name',
      topping2: 'toppings.2.name',
      topping3: 'toppings.3.name',
    },
    // fields.name and fields.vegetarian has been destructured. ...toppings puts them in a new object called toppings
    prepare: ({ title, media, ...toppings }) => {
      // Object.values() turns toppings object into an array to allow join to work
      // filter undefined toppings out
      const tops = Object.values(toppings).filter(Boolean);
      // return preview object for the pizza
      return {
        title,
        media,
        subtitle: tops.join(', '),
      };
    },
  },
};
