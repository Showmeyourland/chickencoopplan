// HowTo schema step data for guides with step-by-step instructions
export interface HowToData {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}

export const howToData: Record<string, HowToData> = {
  'how-to-build-chicken-coop': {
    name: 'How to Build a Chicken Coop: Complete 10-Day Guide',
    description: 'Step-by-step instructions to build your own chicken coop in 10 days with full materials list and tools.',
    steps: [
      { name: 'Planning Your Chicken Coop', text: 'Determine flock size, location, and design. Calculate space requirements at 4 sq ft per bird inside and 10 sq ft per bird in the run.' },
      { name: 'Gather Materials and Tools', text: 'Purchase lumber, hardware cloth, roofing, screws, and gather basic tools including circular saw, drill, measuring tape, and level.' },
      { name: 'Build the Foundation', text: 'Construct a level foundation using pressure-treated 4x4 skids or concrete blocks. Ensure proper drainage and predator protection.' },
      { name: 'Frame the Structure', text: 'Cut and assemble wall frames using 2x4 lumber. Build front and back walls with appropriate height for roof pitch.' },
      { name: 'Install Walls and Siding', text: 'Attach plywood or T1-11 siding to the framed walls. Cut openings for doors, windows, and ventilation.' },
      { name: 'Install Roofing and Weather Protection', text: 'Install rafters, add roof sheathing, and apply metal roofing or shingles with proper overhang for rain protection.' },
      { name: 'Build Interior Features', text: 'Install roosting bars at 8-10 inches per bird, build nesting boxes (one per 3-4 hens), and add a droppings board.' },
      { name: 'Install Ventilation System', text: 'Add soffit vents and ridge vents for passive airflow. Cover all openings with 1/2-inch hardware cloth.' },
      { name: 'Construct the Run', text: 'Build a predator-proof run with buried hardware cloth apron, secure door, and optional covered roof.' },
      { name: 'Final Inspection and Setup', text: 'Check all hardware cloth seams, test door latches, add bedding to nesting boxes, and fill waterers before introducing your flock.' },
    ],
  },
  'nesting-box-guide': {
    name: 'How to Build Chicken Coop Nesting Boxes',
    description: 'DIY nesting box build instructions with sizing by breed, placement tips, and materials list.',
    steps: [
      { name: 'Determine How Many Nesting Boxes You Need', text: 'Plan one nesting box for every 3-4 hens. For a flock of 6 hens, you need 2 boxes minimum.' },
      { name: 'Choose the Right Size for Your Breed', text: 'Standard breeds need 12x12x12 inch boxes, bantams need 10x10x10, and large breeds like Brahmas need 14x14x14 inches.' },
      { name: 'Cut the Lumber', text: 'Cut plywood panels for the bottom, sides, back, and dividers. Use 1/2-inch or 3/4-inch plywood.' },
      { name: 'Assemble the Box Frame', text: 'Screw side panels to the bottom, attach the back panel, and install dividers between boxes.' },
      { name: 'Add a Front Lip and Landing Bar', text: 'Attach a 4-inch front lip to keep bedding in and a landing bar or perch at the front of each box.' },
      { name: 'Mount the Nesting Boxes', text: 'Install boxes 18-24 inches off the floor, lower than roosting bars, in a dark, quiet corner of the coop.' },
      { name: 'Add Bedding and Train Hens', text: 'Fill boxes with pine shavings or straw. Place ceramic eggs to encourage hens to lay in the boxes.' },
    ],
  },
  'predator-proof-coop-guide': {
    name: 'How to Predator-Proof a Chicken Coop',
    description: 'Complete guide to protecting your flock from foxes, raccoons, coyotes, and hawks with hardware cloth, locks, and aprons.',
    steps: [
      { name: 'Assess Your Local Predator Threats', text: 'Identify which predators are common in your area: raccoons, foxes, coyotes, hawks, owls, rats, snakes, or weasels.' },
      { name: 'Replace Chicken Wire with Hardware Cloth', text: 'Use 1/2-inch welded hardware cloth on all openings. Chicken wire only keeps chickens in — it does not keep predators out.' },
      { name: 'Install a Buried Apron or Hardware Cloth Skirt', text: 'Bury 12-24 inches of hardware cloth outward from the coop base or lay it flat on the ground to prevent digging predators.' },
      { name: 'Secure All Doors with Two-Step Locks', text: 'Use carabiner clips or two-step latches on every door. Raccoons can open simple hook-and-eye latches.' },
      { name: 'Cover the Run with Welded Wire or Netting', text: 'Install a roof on the run using hardware cloth or heavy-duty bird netting to protect against aerial predators.' },
      { name: 'Install an Automatic Coop Door', text: 'Add a light-sensor or timer-based automatic door that closes at dusk and opens at dawn for consistent protection.' },
      { name: 'Inspect and Maintain Monthly', text: 'Check all hardware cloth for rust or gaps, test door mechanisms, and look for signs of digging around the perimeter.' },
    ],
  },
  'chicken-coop-insulation-guide': {
    name: 'How to Insulate a Chicken Coop',
    description: 'Step-by-step insulation guide covering materials, installation, and moisture control for cold climates.',
    steps: [
      { name: 'Decide If You Need Insulation', text: 'Insulate if winter temps regularly drop below 20°F. In mild climates, proper ventilation alone is usually sufficient.' },
      { name: 'Choose the Right Insulation Material', text: 'Use rigid foam board (R-5 to R-10) for walls and ceiling. Avoid exposed fiberglass — chickens will peck at it.' },
      { name: 'Seal Air Leaks First', text: 'Caulk gaps around windows, doors, and where walls meet the roof. Air sealing provides the biggest efficiency gain.' },
      { name: 'Install Wall Insulation', text: 'Cut rigid foam to fit between studs and secure with construction adhesive. Cover with plywood to prevent pecking.' },
      { name: 'Insulate the Ceiling', text: 'Add insulation between rafters or above the ceiling. This is the most critical area since heat rises.' },
      { name: 'Maintain Ventilation Openings', text: 'Never cover vents with insulation. Moisture buildup from blocked ventilation causes frostbite faster than cold air.' },
      { name: 'Add a Vapor Barrier If Needed', text: 'In very cold climates, add a vapor barrier on the warm side of insulation to prevent condensation inside walls.' },
    ],
  },
  'chicken-coop-cleaning-guide': {
    name: 'How to Clean a Chicken Coop',
    description: 'Complete cleaning schedule with daily, weekly, and monthly tasks plus a deep-clean checklist.',
    steps: [
      { name: 'Daily Tasks: Quick 5-Minute Check', text: 'Refresh waterers, top off feed, collect eggs, and do a quick visual check of the flock for signs of illness.' },
      { name: 'Weekly Tasks: Spot Clean', text: 'Scrape droppings boards, add fresh bedding to nesting boxes, and remove any wet or soiled bedding spots.' },
      { name: 'Monthly Tasks: Thorough Cleaning', text: 'Remove all bedding, sweep floors, scrub waterers and feeders with vinegar solution, and check for pest infestations.' },
      { name: 'Seasonal Deep Clean', text: 'Remove everything from the coop. Pressure wash or scrub all surfaces with a 1:10 bleach solution. Let dry completely.' },
      { name: 'Sanitize and Treat for Pests', text: 'Apply food-grade diatomaceous earth to cracks and nesting boxes. Spray roosts with poultry-safe mite treatment.' },
      { name: 'Replace Bedding and Reassemble', text: 'Add 4-6 inches of fresh pine shavings or chopped straw. Replace nesting box bedding. Refill feeders and waterers.' },
    ],
  },
  'coop-ventilation-guide': {
    name: 'How to Ventilate a Chicken Coop',
    description: 'Ventilation design guide with square footage rules, vent placement, and common mistakes to avoid.',
    steps: [
      { name: 'Calculate Required Ventilation Area', text: 'Provide at least 1 square foot of ventilation per 10 square feet of floor space. More is needed in hot or humid climates.' },
      { name: 'Plan Vent Placement for Cross-Ventilation', text: 'Place intake vents low on one wall and exhaust vents high on the opposite wall to create natural airflow.' },
      { name: 'Install Soffit Vents', text: 'Cut openings under the roof overhang and cover with hardware cloth. Soffit vents provide consistent passive airflow.' },
      { name: 'Add a Ridge Vent or Gable Vents', text: 'Install ridge vents along the roof peak or gable vents at each end. Hot air rises and exits through these upper vents.' },
      { name: 'Cover All Openings with Hardware Cloth', text: 'Use 1/2-inch hardware cloth over every vent opening to maintain predator protection while allowing airflow.' },
      { name: 'Add Adjustable Covers for Winter', text: 'Install hinged plywood covers or sliding panels on lower vents to reduce drafts in winter while keeping upper vents open.' },
    ],
  },
  'chicken-coop-roofing-guide': {
    name: 'How to Roof a Chicken Coop',
    description: 'Compare roofing materials, calculate pitch, and install a weatherproof chicken coop roof.',
    steps: [
      { name: 'Choose Your Roofing Material', text: 'Corrugated metal is the best value for chicken coops — it is lightweight, durable, and lasts 40+ years. Asphalt shingles work for matching your home.' },
      { name: 'Calculate the Correct Roof Pitch', text: 'Use a minimum 3:12 pitch for metal roofing and 4:12 for shingles. Steeper pitches shed rain and snow better.' },
      { name: 'Install Rafters and Roof Sheathing', text: 'Space rafters 24 inches on center. Attach 1/2-inch plywood sheathing for shingles, or install purlins for metal roofing.' },
      { name: 'Add Drip Edge and Underlayment', text: 'Install drip edge along all roof edges. Add roofing felt or synthetic underlayment for waterproofing.' },
      { name: 'Install Roofing Material', text: 'For metal: start at the bottom edge and overlap panels by one rib. For shingles: start at the bottom with a starter strip.' },
      { name: 'Seal Ridge and Edges', text: 'Install ridge cap along the peak. Seal all screw holes and edges with appropriate sealant to prevent leaks.' },
      { name: 'Add Overhang for Rain Protection', text: 'Extend the roof 6-12 inches beyond the walls on all sides to keep rain away from siding and ventilation openings.' },
    ],
  },
};
