# Working Through a User Story

### Steps involved

User Story Draft -> UX/UI -> Lo-Fi Wireframes -> Hi-Fi Clickable Prototype -> React Component Development -> Text Content Creation -> Pull Requests to GitHub for both i) React Components and ii) The text needed -> Setup Microfunctions -> Release Testing

## UX/UI

### Before Starting

Familiarize yourself with relevant UX research if applicable

Using the [User Story Template](https://docs.google.com/document/d/1EmWknSdwgKHQ_60-pFW-6fyjhiAqM3m1-w0WqjnSlhI/edit#heading=h.ep2rboz1tlj7), 
create a text-based User Story and task flow for User Journey that you are working with. The User Story Template has information how to use it. Please be as tangible, specific and detailed as possible. 

### Lo-Fi wireframe (approval required before moving forward)

Create UI mockups in Figma for each Task Flow step (documented in the User Story Template) of the User Journey, 
taking into account UX Research considerations and general design principles. 

### Clickable Hi-Fi prototype

Leveraging the User Story document, create an interactive user prototype for the User Journey using Figma or another program of your choice. 
This will allow anyone to step into the user experience and see the flow we are creating. 

## Front-end

- Based on Figma screens, create a list of needed ReactJS components needed in your User Story Document
- Create each individual component needed and document these components into the [Blend Component Library Spreadsheet](https://docs.google.com/spreadsheets/d/1Lctqh0s-J_w2uLxH6xyQnza9--PVXv35zuwcL-hkHzU/edit#gid=0)
- Once created, submit the component to the [Prifina GitHub](https://github.com/prifina/blend-ui), from there it ultimately goes to [Storybook](http://alpha.app-storybook.prifina.com/?path=/story/landing--landing).

## Back-end

- Create a list of needed API/Lambda functions based on each of the user journeys steps, using the text-based specs as a guideline
- Add functions needed to be created into the User Story 
- Create each individual function and document these functions into their own Backend User Story Documents
- Once created add the function into “available functions” library (need to be created)

## Release Testing

- Based on the created API/Lambda functions and React components, a real working user journey can be created, tested and published.
- It should be tested also when interacting with Related User Stories (in the User Story Document)
- If it passes the Acceptance Criteria in the User Story Document, it is considered finished



