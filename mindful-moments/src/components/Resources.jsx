const RESOURCES = [
  {
    name: "National Suicide Prevention Lifeline",
    phone: "988",
    description: "24/7 support for people in emotional distress"
  },
  {
    name: "Crisis Text Line",
    phone: "Text HOME to 741741",
    description: "Free crisis counseling via text message"
  },
  {
    name: "SAMHSA Treatment Referral Helpline",
    phone: "1-800-662-HELP (4357)",
    description: "Substance abuse and mental health services referral"
  }
];

function Resources() {
  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Mental Health Resources</h2>
      <div className="space-y-4">
        {RESOURCES.map((resource, index) => (
          <div 
            key={index} 
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-blue-600">{resource.name}</h3>
            <p className="text-gray-700">Phone: {resource.phone}</p>
            <p className="text-gray-500">{resource.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center text-gray-600">
        Remember, you are not alone. Reach out for help when you need it.
      </div>
    </div>
  );
}

export default Resources;