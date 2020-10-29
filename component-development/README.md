# React Component Development 

Our ReactJS components are developed using a styled-components approach (preferably React functions based components). In line with documentation driven development  and quality code principles, deliverables must also include related documentation, built with the following workflow described here.

## General Workflow

### 1. Identify Needed ReactJS Components

Identify ReactJS components that need to be created from Figma UI design files and list each identified component as a ‘GitHub Issue’ in the GitHub [prifina/app-desktop](https://github.com/prifina/app-desktop/issues) or [prifina/app-mobile](https://github.com/prifina/app-mobile/issues).

     this ensures all component(s) from the designs are correctly identified for development

### 2. Document Components 

Document the identified components to be developed into the [Storybook Drafts -Google doc](https://docs.google.com/document/d/1LYFpVsRkH5VCHaCqYnYTzr0swspxngJaQov4qQTbYOg/).

**Helpful resources:**

a: [identifying all subcomponents](https://docs.google.com/document/d/1tOnoPfJnDeApFf7o3Ft9JqnkJ5XQoZX_pREF4tDKHZ0) within structured ‘element components’,     
b: [documenting details](https://docs.google.com/document/d/1uzejSPLOeernm37qCjD2fZCVfdZhwb41g0dLuj4H7Pc/edit#heading=h.a1io7k8my0x) of new sub components. 
  
     to make sure all needed details needed to develop the component exist and are confirmed before developmnet

As part documenting and *before any component development*, check what existing reusable components are available to use as 
your ‘building blocks’ components: [Blend GitHub](https://github.com/prifina/blend-ui) - Prifina [Desktop App GitHub](https://github.com/prifina/app-desktop) 
(NOTE: Always use the latest alpha-package version, and not the normal 'latest' version labeled by GitHub) and Storybook.

In your [Storybook drafts documentation](https://docs.google.com/document/d/1LYFpVsRkH5VCHaCqYnYTzr0swspxngJaQov4qQTbYOg/edit), mark 
those “building block” -components already available with a link to the available resources and identify those that need to be 
developed as part of your bigger component. Those that need to be developed, should be also listed as GitHub Issue cards and 
documented in more detail ([see examples here](https://docs.google.com/document/d/1uzejSPLOeernm37qCjD2fZCVfdZhwb41g0dLuj4H7Pc/edit#heading=h.a1io7k8my0x)). 
  
     to make sure existing components are used and new components are only built with those existing components when available, and completely new components are only created where they don't  exist.

### 3. Update ‘GitHub Issue cards’ 

Update GitHub issues from each component using this [template format](https://github.com/prifina/app-desktop/issues/4) and linking 
with component related documentation details in your Storybook Draft / Figma / User Story doc / etc. 
(see also list of [all existing user stories](https://docs.google.com/spreadsheets/d/1E8XyNz5RXIZL3xlbmVwIy8VpQuJbd1tWXlLxQbFom2s/edit#gid=822828220)). 
  
     to make sure that all needed details will be easily available at the time when components are reviewed for approval by those who approve the work from different aspects; UX logic, code quality, measures, etc.

### 4. Plan your work before you code. 

In the issue cards, describe your plan, how the ReactJS component, using styled-components approach, will be developed (function based ReactJS components are preferable). 

Use existing [Blend components](https://github.com/prifina/blend-ui) as your ‘building blocks’ components when available (NOTE: Always use the latest alpha-package version, and not the normal 'latest' version labeled by GitHub).
  
     to get your plan checked and validated, before potentially wasting time on creating anything, that could become redundant work. 
     this is important particularly on your first component developed with us, on following components this mainly follows the same approach as the first.

### 5. Develop Based on Approved Plan 

Develop each component one by one, based on your own documentation and plan/approach that has been approved. Our normal development workflow requires forking and then creating a ‘pull request’ against the alpha branch. 
  
     ask for feedback for your code using GitHub comments feature in the Issue card.

### 6. Test and Verify Components 

Test components by creating a [Jest test script](https://jestjs.io/) for each component and testing your component using [Storybook](https://storybook.js.org/) (v.6.x)

### 7. Delivering Final Component

Deliver the final component (using GitHub pull request) and any related supporting documentation in Storybook format (v.6.x), to make it available for others in our [storybook components library](http://alpha.app-storybook.prifina.com/) in this project.

## Additional Guidelines

1. Comments are exchange with our UI Designer (directly in relevant Figma files and Slack) and with our Senior 
Developer (in GitHub issues cards and Slack) as needed
2. If a component requires api and/or AWS access then it also requires AWS Amplify module use.
3. When naming components, try to avoid too short and general logic like; **Email.js**, but use longer names, **like ResetUsingEmail.js**
4. The components we are developing are part of a larger app, so each should fit with the overall structure and use only existing node modules. 
4. In case for a good reason, adding new modules is possible, but as a general rule package.json changes are not allowed.
5. Make sure to have a look at the Alpha branch to see how those components, that are marked existing, look.
6. There is a [Storybook setup ready](http://alpha.app-storybook.prifina.com/), so it is the best way to see those.
7. We are using our own design system (blend-ui), which is heavily styled-components focused. If you are familiar with Material-ui, it has some 
similarities as they have started to use the same.
8. Our normal development workflow requires forking and then creating a ‘pull request’ against the alpha branch. 
9. We also require a working Storybook story for separate visual checking (not required to integrate with App routing) and a Jest testing script for automated testing. 
10. Currently there are no existing Jest tests, but the basic rendering test using "react-test-renderer" is very simple.
11. If development has any new reusable functions (not components), then it is necessary to include ‘Jest test’ for testing.

### Related key Figma files
[Production Version Development](https://www.figma.com/file/fS9gcgUb0KShgtZ3XIYQqY/Production-Version-Software-Development?node-id=869%3A0)<br>
[Prifina Design System](https://www.figma.com/file/5cw0xlj4KOFFanIn564pds/Prifina-Design-System?node-id=45%3A0)

## Other Useful Libraries and Resources:

### AWS Amplify
AWS Amplify consists of a development framework and a web hosting service that provides a convenient way to build mobile and web applications on AWS. 
The Amplify Framework utilizes AWS Cloud Services to offer capabilities including offline data, authentication, analytics, push notifications and bots at high scale.

Helpful Links:<br>
[Official Tutorial about how to deploy a React app with AWS Amplify.](https://aws.amazon.com/cn/getting-started/hands-on/build-react-app-amplify-graphql/)<br>
[An Amplify Example](https://amplify-workshop.go-aws.com/)<br>
[Serverless React Example (Relevant up to “deployment” part only.)](https://serverless-stack.com/#table-of-contents)<br>
[External Documentation 1 about Amplify.](https://docs.amplify.aws/lib/auth/getting-started/q/platform/js#option-1-use-pre-built-ui-components)<br>
[External Documentation 2 about Amplify.](https://docs.amplify.aws/lib/graphqlapi/getting-started/q/platform/js)

### State
One of the more important learnings from the project are the differences between stateless and stateful components, how 
to use them and what files should have state and what files should not. Another thing that ties into this is the use of 
React hooks, which is the way that we dealt with the state in this project.

Helpful Links:<br>
[State vs Stateless](https://programmingwithmosh.com/javascript/stateful-stateless-components-react/)<br>
[General reference on React Hooks](https://reactjs.org/docs/hooks-reference.html)<br>
[More about the useState React Hook](https://reactjs.org/docs/hooks-state.html)

### ESLint
This one isn’t too impactful in terms of the actual thought being put into how the code works, but none of us have used this when we 
started the project, and it turned out to be a wonderful tool to help make things more readable and uniform so that the code is a bit easier to access.<br>

Helpful Links:<br>
[Getting Started Guide](https://eslint.org/docs/user-guide/getting-started)
