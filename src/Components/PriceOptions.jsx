import PriceOption from "./PriceOption";

const PriceOptions = () => {
  const PriceOptions = [
    {
      id: 1,
      name: "Basic",
      price: 30,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "1 group class per month",
        "24/7 gym access",
        "Free Wi-Fi",
        "Access to water and towel service",
        "Access to cardio machines",
        "Weekly fitness tips via email",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: 50,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited group classes",
        "Personal training consultation (1 session/month)",
        "Access to sauna and steam room",
        "24/7 gym access",
        "Free Wi-Fi",
        "Access to advanced weight training equipment",
        "Nutritional guide",
        "Access to massage chairs",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 80,
      features: [
        "All Standard features",
        "Weekly personal training sessions",
        "Nutritional guidance",
        "Access to VIP lounge",
        "Priority booking for classes",
        "Free guest passes (2 per month)",
        "Monthly body composition analysis",
        "Complimentary massage therapy session",
        "Access to yoga and meditation classes",
        "Complimentary meal plan",
      ],
    },
    {
      id: 4,
      name: "VIP",
      price: 120,
      features: [
        "All Premium features",
        "Dedicated personal trainer",
        "Customized workout plans",
        "Monthly health and fitness assessments",
        "Free access to fitness workshops",
        "Exclusive VIP lounge access",
        "Unlimited guest passes",
        "Private locker with personal laundry service",
        "Access to exclusive swimming pool",
        "Personalized supplement consultations",
        "Invitation to VIP events and seminars",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl">Best price in the Town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {PriceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
