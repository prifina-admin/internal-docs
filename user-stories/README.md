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

## Figma Progress Indicator

We use the Progress Indicator component component on Figma for all screens to mark progress.

The symbols represent the following aspects respectively:
- UX & UI Layout Design
- Text Contents
- Data Model
- Visual Design
- Components

Available statuses:
- No status
- In-progress
- Done/Approved
- Skipped in this version

The User Story can be approved, when all needed details in the User Story exist. When designs are approved, the individual User Story status in the cover frame of the user journey is marked “Approved” with a milestone version number. When the entire user story including the text documentation is approved, a “locked version” is created and stored in the team projects and the “in-progress” design file version number is updated.

## Back-end

- Create a list of needed API/Lambda functions based on each of the user journeys steps, using the text-based specs as a guideline
- Add functions needed to be created into the User Story 
- Create each individual function and document these functions into their own Backend User Story Documents
- Once created add the function into “available functions” library (need to be created)

## Locking a User Story

### Why lock user stories
- A crucial part of software is to work with ‘versions’. Software is never really “done”, which means that any effort in the overall workflow related to software development can continue “forever”. 
- Since work has several dependencies, it is essential to be able to “cut a version” at a point in time and get that version all the way to the end into the “live software”. 
- Development in the next version can already start (or just continue) at the earlier parts of the overall workflow, while the later stages are still working on the previous version.
- There can even be more than two versions worked on in the same user stories, all in their different development phases in their overall workflow. Ie; one still being tested for public release, next version in UI design and latest version in scoping/planning what will go into version after that.

### What is connected to locking user stories

- User Story master document
- Production Version Software Development spreadsheet
- The following Figma files
- Application reference file
- Production Version Development file (where UI designs are refined)
- Locked User Stories file

### How we lock user stories

1. User stories are locked together. No single person has all the information or certainty to be able to lock the story by themselves.
2. There needs to be a clear decision made from the roadmap planning for what milestone version number each user story version is targeted for.
3. The user story version needs to be in Approved status, before it can be locked.
4. All 5 sections of the progress indicator in the user story ‘production version development’ Figma file need to be marked as “done” in line with the instructions and requirements.
5. The user story text document needs to be copied into a locked version with a version number and with a next version version number with the same content as a starting point. Changes into the new version need to be clearly marked.
6. The Production Version Software Development User Story master spreadsheet needs to be updated with necessary information.
7. A copy of the user story design files from the production version software development file, needs to be copied into locked user stories design file and related links needs to be updated between google doc user story titles and figma files.

### Using milestone version numbers: 
- For the first version number, use the same ‘milestone version number’ for which this release is built for. If this user story is updated or mobile versions are included in later product release versions, update this user story details as follows. 
- For mobile versions, simply add the milestone version number to the additional details section and provide any additional notes. 
- For updating the actual user story, copy the old user story task flow to the end of this document (below this section) with the milestone version number it was initially built. And then update the main user task flow to reflect the changes and update the version number to match the milestone version number where this new user story update is planned to be released.

### Locked or Not - checklist
- Does this user story use the latest User Story Template?
- Are all assets linked (Figma, Backend functions)?
- Are all data considerations documented? 
- Are all content texts checked and final? 
- Are all input field validations considered?
- Is the user story itself complete, i.e an external reader will interpret it the same as those working with the user story?
- When submitting to “Approved”, is the User Story’s Status changed to “Anyone With Link Can Comment”?

## Release Testing

- Based on the created API/Lambda functions and React components, a real working user journey can be created, tested and published.
- It should be tested also when interacting with Related User Stories (in the User Story Document)
- If it passes the Acceptance Criteria in the User Story Document, it is considered finished

**[Improve This Doc?](https://github.com/prifina-admin/internal-docs/edit/master/user-stories/) / [Guidelines](http://internal.prifina.com/contribute/)**


