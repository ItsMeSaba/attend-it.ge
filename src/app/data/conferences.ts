import { ConferenceCategory } from "@/types/global";

const Conferences = [
  {
    id: "1",
    name: "Tbilisi Tech Summit",
    category: ConferenceCategory.TechDevelopment,
    location: {
      city: "Tbilisi",
      coordinates: [44.793, 41.709],
    },
    dates: {
      start: "2024-09-15",
      end: "2024-09-17",
    },
    topics: ["AI", "Cloud", "Startups"],
    website: "https://tbilisitech.ge",
    description:
      "A leading technology summit bringing together innovators from the Caucasus region and beyond.",
    price: [350],
  },
  {
    id: "2",
    name: "Black Sea Blockchain Conference",
    category: ConferenceCategory.FinanceEconomics,
    location: {
      city: "Batumi",
      coordinates: [41.638, 41.65],
    },
    dates: {
      start: "2024-10-03",
      end: "2024-10-04",
    },
    topics: ["Blockchain", "Cryptocurrency", "Security"],
    website: "https://blackseablockchain.org",
    description:
      "Connecting blockchain professionals and enthusiasts along the Black Sea coast.",
    price: [120],
  },
  {
    id: "3",
    name: "Caucasus Developer Days",
    category: ConferenceCategory.TechDevelopment,
    location: {
      city: "Kutaisi",
      coordinates: [42.707, 42.248],
    },
    dates: {
      start: "2024-11-10",
      end: "2024-11-12",
    },
    topics: ["Web Development", "Mobile", "DevOps"],
    website: "https://caucasusdevdays.ge",
    description:
      "A gathering for developers and engineers across the Caucasus focusing on hands-on workshops and networking.",
    price: [250],
  },
  {
    id: "4",
    name: "Georgia Data Science Forum",
    category: ConferenceCategory.ScienceEducation,
    location: {
      city: "Tbilisi",
      coordinates: [44.801, 41.702],
    },
    dates: {
      start: "2024-08-20",
      end: "2024-08-22",
    },
    topics: ["Data Science", "Analytics", "Machine Learning"],
    website: "https://geodsforum.ge",
    description:
      "Bridging industry and academia in the field of data science in Georgia.",
    price: [180],
  },
  {
    id: "5",
    name: "Caucasus Cybersecurity Expo",
    category: ConferenceCategory.TechDevelopment,
    location: {
      city: "Rustavi",
      coordinates: [45.017, 41.541],
    },
    dates: {
      start: "2024-12-05",
      end: "2024-12-06",
    },
    topics: ["Cybersecurity", "Network Security", "Forensics"],
    website: "https://cyberexpo.ge",
    description:
      "A cybersecurity exhibition and conference for the greater Caucasus region.",
    price: [90],
  },
  {
    id: "6",
    name: "Women in Tech Georgia",
    category: ConferenceCategory.CultureMedia,
    location: {
      city: "Tbilisi",
      coordinates: [44.811, 41.715],
    },
    dates: {
      start: "2024-09-30",
      end: "2024-10-01",
    },
    topics: ["Diversity", "Leadership", "Startups"],
    website: "https://womenintechgeorgia.ge",
    description:
      "Celebrating diversity and empowering women in the Georgian technology sector.",
    price: [100],
  },
  {
    id: "7",
    name: "Sakartvelo AI Conference",
    category: ConferenceCategory.TechDevelopment,
    location: {
      city: "Telavi",
      coordinates: [45.47, 41.921],
    },
    dates: {
      start: "2024-10-18",
      end: "2024-10-19",
    },
    topics: ["Artificial Intelligence", "Robotics", "Ethics"],
    website: "https://sakartveloai.ge",
    description: "Exploring the future of AI and robotics in the region.",
    price: [220],
  },
  {
    id: "8",
    name: "Transcaucasia Mobile Dev Fest",
    category: ConferenceCategory.TechDevelopment,
    location: {
      city: "Zugdidi",
      coordinates: [41.87, 42.509],
    },
    dates: {
      start: "2024-11-23",
      end: "2024-11-24",
    },
    topics: ["Mobile Development", "Cross-platform", "UI/UX"],
    website: "https://mobilefest.ge",
    description:
      "Annual festival focusing on mobile technologies and design trends in Transcaucasia.",
    price: [80],
  },
  {
    id: "9",
    name: "NextGen IT Leaders Caucasus",
    category: ConferenceCategory.BusinessEntrepreneurship,
    location: {
      city: "Gori",
      coordinates: [44.112, 41.986],
    },
    dates: {
      start: "2024-12-12",
      end: "2024-12-13",
    },
    topics: ["Leadership", "IT Management", "Digital Transformation"],
    website: "https://nextgenitleaders.ge",
    description:
      "A networking event for the next generation of IT leaders in the Caucasus.",
    price: [150],
  },
  {
    id: "10",
    name: "Batumi UX/UI Meetup",
    category: ConferenceCategory.DesignCreative,
    location: {
      city: "Batumi",
      coordinates: [41.637, 41.641],
    },
    dates: {
      start: "2024-10-20",
      end: "2024-10-20",
    },
    topics: ["UX", "UI", "Product Design"],
    website: "https://batumiuxui.ge",
    description:
      "One-day intensive meetup for designers and product developers on the Black Sea coast.",
    price: [40],
  },
];

export default Conferences;
