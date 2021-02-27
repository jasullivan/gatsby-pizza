import { MdPerson as icon } from 'react-icons/md';

export default {
  // computer name of dataset
  name: 'person',
  // visible title
  title: 'Slicemasters',
  type: 'document',
  // destructured as it's taking icon from the object with the same name
  icon,
  // input fields to fillout in the CMS
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
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
      name: 'description',
      title: 'Description',
      type: 'text',
      options: 'Tell us a bit about this person',
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
  ],
};
