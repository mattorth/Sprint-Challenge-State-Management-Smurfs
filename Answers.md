1. What problem does the context API help solve?

Context API helps eliminate the need for prop drilling. Data can be stored on the context object and accessed without the need to pass the data between intermediate components.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is known as the single source because any data that needs to be used across components is stored there. In Redux, an action describing the event is dispatched to the reducer and the reducer handles the action, replacing the state in a predictable manner.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state holds global data that can be pulled into any component in the app. Component state holds data that only that component and its children can access. Application state is useful when you have to access the same data in multiple parts of your application, such as UI themes. Component state is useful when the data is only important to that component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Reducers in Redux are synchronous by default. Redux-thunk is a middleware that intercepts actions before they get to reducers and allows asynchronous operations to occur. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Although Redux was hard for me to grasp at first, now that I understand it, it seems very straightforward and easy to use, especially in combination with thunk.

