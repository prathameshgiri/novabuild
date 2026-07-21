export interface Project {
  id: string;
  category: string;
  title: string;
  location: string;
  image: string;
  large: boolean;
  client?: string;
  timeline?: string;
  services?: string[];
  challenge?: string;
  approach?: string;
  result?: string;
}

export const ALL_PROJECTS: Project[] = [
  { 
    id: "atrium-business-park", 
    category: "Commercial", 
    title: "Atrium Business Park", 
    location: "Austin, TX", 
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85", 
    large: true,
    client: "Texas Commercial Group",
    timeline: "14 Months",
    services: ["Civil Engineering", "Site Surveying", "BIM & CAD Modeling", "Project Management"],
    challenge: "Integrating modern engineering practices while maintaining strict compliance with local zoning laws and tight timelines. The site presented unforeseen spatial constraints that required innovative CAD modeling.",
    approach: "We began with a comprehensive site survey, utilizing 3D laser scanning to map the existing topography. This data was directly fed into our BIM workflows, allowing us to identify structural clashes virtually.",
    result: "Delivered 3 weeks ahead of schedule and precisely on budget. The park now stands as a testament to what is possible when rigorous engineering meets clear communication."
  },
  { 
    id: "harbor-link", 
    category: "Infrastructure", 
    title: "Harbor Link", 
    location: "Melbourne, AU", 
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85", 
    large: false,
    client: "Victoria State Infrastructure",
    timeline: "22 Months",
    services: ["Civil Engineering", "Bridge Design", "Environmental Surveying"],
    challenge: "Developing a robust coastal link road in a high-wind, salt-heavy environment while minimizing disruption to local marine life.",
    approach: "Implemented advanced marine-grade structural modeling and conducted detailed environmental surveys over a 3-month period to ensure zero impact on local habitats.",
    result: "A resilient, award-winning infrastructure project that improved traffic flow by 40% and won the National Engineering Excellence Award."
  },
  { 
    id: "cedar-residence", 
    category: "Residential", 
    title: "Cedar Residence", 
    location: "Vancouver, CA", 
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85", 
    large: false,
    client: "Private Client",
    timeline: "9 Months",
    services: ["Residential Design", "Structural Engineering", "Interior Architecture"],
    challenge: "Maximizing natural light and views on a steeply sloped, heavily wooded lot without compromising the root systems of ancient cedar trees.",
    approach: "Used highly precise laser topographic surveys to map every tree root, allowing us to design a floating foundation system that preserved the natural environment.",
    result: "A stunning, sustainable luxury residence that perfectly blends into its natural surroundings with minimal ecological footprint."
  },
  { 
    id: "eastland-grid", 
    category: "Survey", 
    title: "Eastland Grid", 
    location: "Phoenix, AZ", 
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85", 
    large: false,
    client: "Arizona Energy Co.",
    timeline: "6 Months",
    services: ["Land Surveying", "Drone Mapping", "Utility Routing"],
    challenge: "Surveying 50 miles of harsh desert terrain for a new solar grid connection, dealing with extreme heat and remote access.",
    approach: "Deployed autonomous drone fleets equipped with LIDAR to rapidly map the terrain safely, processing terrabytes of spatial data back at our Austin HQ.",
    result: "Completed the survey phase 2 months faster than traditional methods, saving the client over $150,000 in early-phase costs."
  },
  { 
    id: "horizon-towers", 
    category: "Commercial", 
    title: "Horizon Towers", 
    location: "Singapore", 
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=900&q=85", 
    large: false,
    client: "SG Real Estate Trust",
    timeline: "36 Months",
    services: ["High-Rise Engineering", "BIM Management", "Wind Tunnel Analysis"],
    challenge: "Designing a twin-tower commercial complex in a dense urban environment with strict height and shadow regulations.",
    approach: "Utilized cutting-edge wind and shadow simulation software integrated with our BIM models to optimize the tower shapes dynamically.",
    result: "Achieved Platinum Green Mark certification and 100% occupancy within the first year of opening."
  },
  { 
    id: "lakeside-manor", 
    category: "Residential", 
    title: "Lakeside Manor", 
    location: "Seattle, WA", 
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=85", 
    large: false,
    client: "Pacific Builders",
    timeline: "12 Months",
    services: ["Structural Drafting", "Civil Engineering"],
    challenge: "Building on a soft-soil lakeside plot that required deep pile driving and complex drainage solutions.",
    approach: "Developed a comprehensive geotechnical CAD model to simulate water flow and soil settlement over a 50-year period.",
    result: "A perfectly stable foundation system that allowed for an expansive, open-plan architectural design."
  }
];
