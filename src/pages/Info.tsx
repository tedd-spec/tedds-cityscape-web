
import HoursAndLocation from "../components/HoursAndLocation";

const Info = () => {
  const services = [
    {
      title: "Gift Cards",
      description: "Available at the Customer Service desk in denominations from $25 to $500."
    },
    {
      title: "Lost & Found",
      description: "Located at the Security Office on Level 1 near the east entrance."
    },
    {
      title: "Wi-Fi",
      description: "Free Wi-Fi is available throughout the mall. Connect to 'TCM-Guest'."
    },
    {
      title: "Wheelchair Service",
      description: "Complimentary wheelchairs are available at all mall entrances and the information desk."
    },
    {
      title: "Stroller Rental",
      description: "Available at the Customer Service desk for a small fee."
    },
    {
      title: "Package Check",
      description: "Store your shopping bags at Customer Service while you continue shopping."
    }
  ];

  const faqs = [
    {
      question: "Are pets allowed in the mall?",
      answer: "Service animals are welcome. Other pets are not permitted except during specific pet-friendly events."
    },
    {
      question: "Where can I find the nearest ATM?",
      answer: "ATMs are located in the food court, near the main entrance, and in the central area of Level 2."
    },
    {
      question: "Is there a play area for children?",
      answer: "Yes, we have a supervised children's play area on Level 2 near the food court."
    },
    {
      question: "Do you have family restrooms?",
      answer: "Family restrooms are available on both levels near the food court and main entrances."
    },
    {
      question: "What are the food court hours?",
      answer: "The food court is open from 10:00 AM to 9:30 PM Monday through Saturday, and 11:00 AM to 7:30 PM on Sunday."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Hours & Information</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Everything you need to know to plan your visit to Tedd's City Mall.
        </p>
        
        <HoursAndLocation />
        
        {/* Mall Services */}
        <section className="py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Mall <span className="text-mall-gold">Services</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* FAQs */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              Frequently Asked <span className="text-mall-gold">Questions</span>
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                >
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Info;
