const HomeFeatures = () => {
  const features = [
    {
      title: "Fully Dynamic",
      description:
        "All data and activity is saved to database, so that no data gets lost after reloading.",
      icon: "🔄",
    },
    {
      title: "Social Learning",
      description:
        "All registered users are connected. Everyone can create new assignments on their own.",
      icon: "👥",
    },
    {
      title: "Secure Data",
      description:
        "All sensitive data and routes are protected. Unregistered users can't access them.",
      icon: "🔒",
    },
    {
      title: "Assignment Tools",
      description:
        "Create assignments, give marks to others' work, and track your activity easily.",
      icon: "📝",
    },
    {
      title: "Privacy Focused",
      description:
        "Users can't see others' information - all requests are authenticated with JWT tokens.",
      icon: "🛡️",
    },
    {
      title: "Fully Responsive",
      description:
        "This application is fully responsive for all screen size, like mobile, tablet, and regular desktop.",
      icon: "🧩",
    },
  ];

  return (
    <div className="my-16  mx-auto">
      <h3 className="text-3xl sm:text-4xl md:text-5xl  font-bold mb-10 ">
        Key Features of Our Platform
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-base-100 border border-base-200 rounded-xl pt-6 hover:shadow-lg"
          >
            <div className="text-6xl mb-4 ">{feature.icon}</div>
            <h4 className="text-xl sm:text-2xl font-bold mb-2">
              {feature.title}
            </h4>
            <p className="text-base opacity-80">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFeatures;
