import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  // computer name of dataset
  name: 'topping',
  // visible title
  title: 'Toppings',
  type: 'document',
  // destructured as it's taking icon from the object with the same name
  icon,
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'What is the name of the topping?',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      description: 'What is the name of the topping?',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    // fields.name and fields.vegetarian has been destructured
    prepare: ({ name, vegetarian }) => ({
      title: `${name} ${vegetarian ? '🌱' : ''}`,
    }),
  },
};
