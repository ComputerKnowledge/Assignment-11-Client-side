import React from "react";

const FaqSection = () => {
  return (
    <div className="my-8">
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 mt-0">
        Frequently asked questions !!!
      </h3>
      <div className="text-left collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          How do I create an account?
        </div>
        <div className="collapse-content text-sm">
          Click the "Register" button in the top right corner and follow the
          registration process.
        </div>
      </div>
      <div className="text-left collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          I forgot my password. What should I do?
        </div>
        <div className="collapse-content text-sm">
          Click on "Forgot Password" on the login page and follow the
          instructions sent to your email.
        </div>
      </div>
      <div className="text-left collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How do I update my profile information?
        </div>
        <div className="collapse-content text-sm">
          Unfortunately, this feature is not available in this web-site. You
          have provide proper information in the registration page.
        </div>
      </div>
      <div className="text-left collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          How do I create a new assignment?
        </div>
        <div className="collapse-content text-sm">
          If you are a logged in user only then you can easily create a new
          assignment. Click on you profile picture, there will be a navigation
          link "create new assignment", Click on that, fill out all the field
          and click "add assignment".
        </div>
      </div>
      <div className="text-left collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How to take an assignment?
        </div>
        <div className="collapse-content text-sm">
          Go to assignment page. Click on "view", it will redirect you to the
          details page. All information about the assignment will be there.
          Click on "Take assignment" button, a modal with two input field will
          be displayed, fill out them and click "submit".
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300 text-left">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How can I know about my attempted assignment's number?
        </div>
        <div className="collapse-content text-sm">
          After taking an assignment, by default will be in the "Pending
          assignment" page. There someone else will evaluate you assignment. To
          get your attempted assignment's information, click on the profile
          picture then click on "Attempted assignment", it will redirect to a
          page where all you activity will be displayed. If you have got number
          then you will see that there.
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
