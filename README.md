# Week 5 - Interactive To-Do List

## Live Demo
https://rmogeni80-hue.github.io/iyf-s12-week-05-rmogeni80-hue/

## Lessons Learned
- I learned that using event delegation on the parent list means I don't have to attach new listeners every time a user adds a task. It just works automatically.
- I figured out that using `textContent` instead of `innerHTML` is important so that if a user types HTML tags like `<b>hi</b>`, it shows up as normal text and doesn't break the page.
- Keeping my tasks in an array of objects and re-rendering the list from that array made it way easier to manage the different filters (All, Active, Completed).