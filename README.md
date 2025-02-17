# Project Reflection
To see the theme switcher guide, please visit `/docs/theme-switcher-guide`.

## Learning Experience

I came into this project with varying levels of experience across the tech stack:
- I'm new to Tailwind CSS.
- I'm more experienced with React than Next.js, so there was a learning curve to understand some of the nuances.
- Despite working with Next.js occassionally in my current role, this was my first time building a Next.js application from scratch.
- I am rusty implementing mdx documentation without any pre-existing components or formatting, since I've been using Storybook with pre-existing layouts and components for the past five years. It was a fun challenge to implement the documentation from scratch under the time constraint of the project.

## Favorite Parts
- While I know it's an "unsafe" implementation, I enjoyed learning about the Clerk user object and how to store user settings in it. Using this, the user's preferred news category persists on reload and log out/in.
- I really enjoyed learning about and using Clerk's UI components. Being a design system nerd, it was cool to see how Clerk has essentially created a mini component library specializing in authentication and user management. I was especially impressed by the ease of updating themes across these components combining the use of Next.js and Clerk's theme management systems.


## Future Enhancements

With more time and resources, I would focus on:

### Overall Improvements
- Expand theme support beyond light/dark.
- Create a more thought-out design system including colors, graphics/images, typography, spacing, layout, and components.
- Implement deeper customization of Clerk's theme system and aligning styles more closely with the custom components
- Find a more reliable news API that handles image URLs more consistently and is capable to returning more than one category at a time.
- Create an API to store user preferences and have a separate news curation for a user's different organizations.

### Code Organization and Structure
- More specific directories organizing reusable components.
- Implementation of typography components for consistency.
- Creation of modular styles for easier maintenance and a more cohesive brand identity.

### Documentation Presentation
- Further customize visual presentation, especially for code blocks.
- Create consistent styling patterns.

## Notes on Clerk's Documentation

What Works Well:
- Clear organization by framework and feature
- "Learn the Concepts" section effectively caters to different knowledge levels
- Framework-specific guides provide focused information

Suggestion for Enhancement:
- Search functionality in the docs produces results from different SDKs without clear indication; would be great to have an icon to indicate which SDK each result refers to
- Visual documentation of UI components could be more comprehensive. The current docs only show a static image of certain components. I'd love to see embedded components and interactive playgrounds for each UI component to provide consistent visual examples.

### Project Instructions
- Instructions around making a sign up page were unclear on if the one that comes out of the box with the sign up/sign in buttons would suffice or if it needed to be a custom page