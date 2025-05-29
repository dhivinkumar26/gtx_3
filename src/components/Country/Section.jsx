import { motion } from 'framer-motion';

const sections = [
  {
    title: '1. Quality of Life Ranking',
    items: [
      {
        icon: '🛡️',
        title: 'Safety',
        description:
          "Singapore ranks as one of the safest cities globally, frequently taking the top spot in Asia for low crime rates and overall public safety. It's a very secure city with minimal street crime.",
        rank: 'Rank: 1st in Asia, Top 10 globally (source: Global Peace Index, Safe Cities Index).'
      },
      {
        icon: '🏥',
        title: 'Healthcare',
        description:
          "Singapore’s healthcare system is renowned worldwide for its efficiency, affordability, and innovation. It consistently ranks high in global healthcare surveys due to its high standards and excellent medical facilities.",
        rank: 'Rank: Top 6 globally (source: World Health Organization, Healthcare Access and Quality Index).'
      },
      {
        icon: '🎓',
        title: 'Education',
        description:
          "Singapore’s education system is among the best globally, often ranked first in international assessments like PISA. The system emphasizes meritocracy and high academic standards.",
        rank: 'Rank: 1st in the world for education (source: PISA rankings, Education Index).'
      },
      {
        icon: '🌿',
        title: 'Environment',
        description:
          "Known as the ‘Garden City,’ Singapore has won accolades for its urban planning and commitment to sustainability. Green spaces, clean air, and water are key features of Singapore’s environment.",
        rank: 'Rank: Top 10 globally for environmental sustainability (source: Global Green Economy Index).'
      }
    ]
  },
  {
    title: '2. Cost of Living',
    list1: 'SGD 55,000 per year before taxes.',
    list2: 'There is no mandatory minimum wage, but average wages range around SGD 1,500 to SGD 2,500 per month in various sectors.',
    list3: 'Average monthly expenses for a single person are around SGD 2,000 - SGD 2,500.'
  },
  {
    title: '3. Work Culture',
    list1: 'Singapore has a highly efficient, fast-paced work culture.',
    list2: 'Employees typically work around 44 to 48 hours per week.',
    list3: 'Work-life balance is emphasized, but hours can be demanding depending on the industry.'
  },
  {
    title: '4. Visa & Immigration',
    list1: 'For employment, you’ll need an Employment Pass (EP) or S Pass, based on your qualifications.',
    list2: 'Permanent Residency is possible after living and working in Singapore for a few years.'
  },
  {
    title: '5. Taxes',
    list1: 'Income tax in Singapore is progressive, ranging from 0% to 22% depending on your income.',
    list2: 'Corporate tax rate is a flat 17%.',
    list3: 'Goods and Services Tax (GST): 8%.'
  }
];

export default function SingaporeLiving() {
  return (
    <div className="max-w-8xl mx-auto bg-gray-100 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl text-[#474D6A] font-semibold text-center mb-6">Living and Working Experience in Singapore</h1>
      
      <motion.div 
        className="max-w-8xl mx-9 bg-white rounded-2xl shadow-lg p-5"
        whileHover={{ scale: 1.02 }}
      >
        <h2 className="text-2xl text-[#474D6A] font-semibold mb-4">{sections[0].title}</h2>
        {sections[0].items.map((item, index) => (
          <div key={index} className="mb-6">
            <h3 className="flex items-center text-lg font-semibold text-[#212121]">{item.icon} {item.title}</h3>
            <p className="text-gray-600 mt-2 text-base">{item.description}</p>
            <p className="text-sm font-medium text-[#474D6A] mt-2">{item.rank}</p>
            {index !== sections[0].items.length - 1 && <hr className="my-4" />}
          </div>
        ))}
      </motion.div>
      
      <div className="max-w-8xl mx-9 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {sections.slice(1).map((section, index) => (
          <motion.div 
            key={index} 
            className="p-6 bg-white rounded-xl shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-xl text-[#474D6A] font-semibold">{section.title}</h2>
            <p className="text-gray-600 mt-3 text-base">{section.list1}</p>
            <p className="text-gray-600 mt-2 text-base">{section.list2}</p>
            <p className="text-gray-600 mt-2 text-base">{section.list3}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
