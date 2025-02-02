# Next.js Route Change Unexpected Behavior

This repository demonstrates a common issue in Next.js applications where route changes do not behave as expected.  Specifically, code that relies on the route change completing may execute before the navigation is finished, leading to unexpected results.

The `bug.js` file shows a basic example of this issue.  Clicking the button should navigate to '/another-page', but any code following `router.push` within `handleClick` will execute immediately, regardless of whether the navigation is complete. 

The solution, found in `bugSolution.js`, addresses this using `router.push`'s promise-like behavior and `then()` to ensure the navigation is finished before executing subsequent code.