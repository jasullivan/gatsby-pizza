import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: `https://gatsby.pizza`,
    description: `The best pizza place in Hamilton`,
  },
  plugins: [
    // this plugin surfaces the css to gatsby and so gatsby can figure out what the critical css is and
    // do everything efficiently
    'gatsby-plugin-styled-components',
    {
      // thsi is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'drt4ms38',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
