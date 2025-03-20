import React from "react";

const HomeFeatures = () => {
  return (
    <div className="my-6">
      <h3 className="text-4xl text-left font-bold my-4">
        Some features of this website
      </h3>
      <div className="space-y-2">
        <p className="bg-black rounded-lg text-left p-4 text-xl font-semibold">
          This is a fully dynamic website. All data and activity is saved to
          database, so that no data get lost after reloading.
        </p>
        <p className="bg-black rounded-lg text-left p-4 text-xl font-semibold">
          All registered user is friend to each other in this website. Everyone
          can create new assignment in their own.
        </p>
        <p className="bg-black rounded-lg text-left p-4 text-xl font-semibold">
          All the sensitive data and routes are private. So any unregistered
          user can not able to see them.
        </p>
        <p className="bg-black rounded-lg text-left p-4 text-xl font-semibold">
          User can create assignment, give mark to others assignment, see owns
          activity here easily.
        </p>
        <p className="bg-black rounded-lg text-left p-4 text-xl font-semibold">
          No registered user will be able to see others information, because all
          get request is maintained by jst token.
        </p>
      </div>
    </div>
  );
};

export default HomeFeatures;
