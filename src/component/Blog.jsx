import React from "react";

const Blog = () => {
  return (
    <>
      <h1 className="text-5xl text-center font-bold mt-16">Blogs</h1>
      <p className="text-center text-lg mb-16 mt-5">
        Check out our blog for answers to the most commonly asked questions
        about React. Our concise and informative posts will help you gain a
        better understanding of this popular JavaScript library
      </p>
      <div className="p-5 rounded-md border bg-purple-100 my-2 mt-5">
        <h1 className="font-bold text-2xl mb-4">
          1. When should you use Context API?
        </h1>
        <p className="text-justify p-4">
          The Context API in React is used to pass data down the component tree
          without the need for explicit props, and can be useful in cases where
          we have data that needs to be accessed by multiple components at
          different levels of the component tree. It can also help avoid "prop
          drilling" and provide a global state or theme to our entire
          application. However, it is not always a replacement for prop
          drilling.
        </p>
      </div>
      <div className="p-5 rounded-md border bg-purple-100 my-2">
        <h1 className="font-bold text-2xl mb-4">2. What is Custome Hook?</h1>
        <p className="text-justify p-4">
          A custom hook in React is a JavaScript function that allows us to
          encapsulate reusable logic that can be shared across multiple
          components. Custom hooks follow a naming convention and use built-in
          React hooks to implement functionality. They make it easy to extract
          common code from components and reuse it across the application.
        </p>
      </div>
      <div className="p-5 rounded-md border bg-purple-100 my-2">
        <h1 className="font-bold text-2xl mb-4">
          3. What is useRef? Why we use this ?
        </h1>
        <p className="text-justify p-4">
          useRef is a React hook that returns a mutable ref object that can be
          used to hold a reference to a DOM element or a value that persists
          across re-renders of the component. It is mainly used for accessing
          DOM nodes or storing values that should persist across re-renders but
          should not trigger a re-render when they change. It can be a powerful
          tool for optimizing performance and improving the user experience of
          your React application.
        </p>
      </div>
      <div className="p-5 rounded-md border bg-purple-100 my-2 mb-10">
        <h1 className="font-bold text-2xl mb-4">
          4. What is useMemo? Why we use this ?
        </h1>
        <p className="text-justify p-4">
          useMemo is a React hook that allows us to memoize expensive
          computations and avoid unnecessary re-renders of components. It takes
          a function and an array of dependencies as arguments, and returns the
          previously computed value if the dependencies haven't changed. The
          main use case for useMemo is to improve the performance of our
          application by reducing the amount of work that needs to be done
          during rendering.
        </p>
      </div>
    </>
  );
};
export default Blog;
