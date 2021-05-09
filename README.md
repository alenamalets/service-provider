# Service provider
Front-end contains pages available for the user. 
**Profile page**
The profile page consists of an image a user can upload (click in the middle), first name, second name, email (with a validity check) and a date picker for the date of birth. Only first name and email fields are required. If required fields are left blank and user tries to proceed he will be notified with a red error label next to the required text field.
After filling in required fields, the submit button becomes active.
The image is not stored in this case (should be stored in the database, which is not implemented for the sake of this assignment). The user data is stored in the vuex.store.

**Skill selection page**
There are 10 skills a user can select on this page. At least 3 skills need to be selected to be able to proceed (submit button becomes active). Once a skill is selected the proficiency slider appears next to it with a label saying a user needs to indicate proficiency level. User can deselect any skill if he wants to.
Once the user taps Submit his skills are stored in the vuex.store and he is redirected to the requests page.

**Requests page**
Once requests page loads the call is made to back-end to provide job requests according to the skills. Five reqests are displayed on this page. User can browse requests, that contain name, skills required, start-date - end-date and accept button. User can accept requests. In the real world I would implement a function that doesn't allow users to accept different requests with overlapping time-scopes. For the sake of this assignment User can not accept requests with same starting date (error popup is shown).
Once user has accepted the request it is highlighted with the green color and the button changes text from Submit to Decline (and color). The user can decline any accepted request by tapping Decline. 

### Install dependencies
```
yarn
```

### Run locally

```
yarn serve
```

# Libraries

- ### Vee-validate
  Used to validate input fields

- ### Moment
  Used to format and compare dates 
  
- ### Element-ui
  Used Slider from element-ui library for indicating experience
  
- ### Vuejs-datepicker
  Used datepicker for choosing date of birth
