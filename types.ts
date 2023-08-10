type Categories =
  | "Fitness and Health"
  | "Fashion and Style"
  | "Skincare and Grooming"
  | "Self-Care and Confidence"
  | "Health and Nutrition"
  | "Artistic Expression";

type Stat =
  | "Agility" // 0: Represents physical agility and quickness.
  | "Stamina" // 1: Represents endurance and resistance to fatigue.
  | "Strength" // 2: Represents physical strength and power.
  | "Endurance" // 3: Represents overall physical endurance.
  | "Charisma" // 4: Represents social charm and persuasion.
  | "Sleep Quality" // 5: Represents the quality of sleep one gets.
  | "Mindfulness" // 6: Represents awareness and being present mentally.
  | "Nutrition" // 7: Represents the quality of consumed nutrients.
  | "Hydration" // 8: Represents the state of being hydrated.
  | "Confidence" // 9: Represents self-assuredness and belief.
  | "Creativity" // 10: Represents the ability to think and create uniquely.
  | "Social Connections"; // 11: Represents the extent of social relationships and connections.

type Frequency = "Daily" | "Weekly" | "Bi-Weekly" | "Monthly";
// type Skill =
interface Tip {
  id: number;
  tip: string;
  description: string;
  category: Categories;
  frequency: Frequency;
  skillIndexes: number[];
  statsIndexes: number[];
}

interface Skill {
  id: number;
  skillName: string;
  skillType: Categories;
}
interface Task {
  index: number;
  completed: boolean;
}
interface StatsAndLabel {
  labels: string[];
  values: number[];
}
// skillsAssociated: Skill[];
// const tipsList = [
//   {
//     tip: "Tank top button down combo",
//     description:
//       "Combine a tank top with a button-down shirt for a stylish and casual look.",
//     category: "Fashion and Style",
//     frequency: "Daily",
//     skillIndexes: [5, 9],
//   },
//   {
//     tip: "Expansive body language",
//     description:
//       "Practice open and confident body language to appear more approachable and confident in social settings.",
//     category: "Self-Care and Confidence",
//     frequency: "Daily",
//     skillIndexes: [15],
//   },
//   {
//     tip: "The '12-3-30' treadmill workout",
//     description:
//       "Try the popular '12-3-30' treadmill workout by walking at a 12% incline, 3 mph speed, for 30 minutes to boost cardiovascular health.",
//     category: "Fitness and Health",
//     frequency: "Daily",
//     skillIndexes: [0, 1],
//   },
//   {
//     tip: "Start lining up your beard",
//     description:
//       "Maintain a clean and sharp beard line to enhance your facial appearance.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [11],
//   },
//   {
//     tip: "Hang from a pull-up bar",
//     description:
//       "Perform hanging exercises to improve grip strength and build upper body muscles.",
//     category: "Fitness and Health",
//     frequency: "Daily",
//     skillIndexes: [1, 37],
//   },
//   {
//     tip: "Apply moisturizer daily with sunblock in it",
//     description:
//       "Protect your skin from harmful UV rays by using a daily moisturizer with built-in sunblock.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [10],
//   },
//   {
//     tip: "Scraping your tongue",
//     description:
//       "Use a tongue scraper to remove bacteria and keep your breath fresh.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [7],
//   },
//   {
//     tip: "Try doing stomach vacuum every day",
//     description:
//       "Practice stomach vacuum exercises to strengthen your core and improve posture.",
//     category: "Fitness and Health",
//     frequency: "Daily",
//     skillIndexes: [38],
//   },
//   {
//     tip: "Intermittent fasting",
//     description:
//       "Try intermittent fasting to promote weight loss and improve metabolic health.",
//     category: "Health and Nutrition",
//     frequency: "Daily",
//     skillIndexes: [39],
//   },
//   {
//     tip: "Chew some tough chewing gum",
//     description:
//       "Chew tough chewing gum to exercise your jaw muscles and improve jawline definition.",
//     category: "Fitness and Health",
//     frequency: "Daily",
//     skillIndexes: [2],
//   },
//   {
//     tip: "Start adding retinol in your skincare",
//     description:
//       "Incorporate retinol into your skincare routine to combat signs of aging and improve skin texture.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [10],
//   },
//   {
//     tip: "The Halo Effect",
//     description:
//       "Use the Halo Effect to your advantage by maintaining an overall positive and confident demeanor.",
//     category: "Self-Care and Confidence",
//     frequency: "Daily",
//     skillIndexes: [18],
//   },
//   {
//     tip: "Long coat",
//     description:
//       "Rock a long coat for a sophisticated and stylish outerwear option.",
//     category: "Fashion and Style",
//     frequency: "Daily",
//     skillIndexes: [6],
//   },
//   {
//     tip: "Try using gua sha",
//     description:
//       "Incorporate gua sha into your skincare routine to improve circulation and skin elasticity.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [10],
//   },
//   {
//     tip: "Always have a gum to share with people",
//     description:
//       "Carry gum with you to share with others, as a small gesture of friendliness and preparedness.",
//     category: "Interpersonal Skills",
//     frequency: "Daily",
//     skillIndexes: [20],
//   },
//   {
//     tip: "Bag balm moisturizer",
//     description:
//       "Use bag balm moisturizer to keep your skin hydrated and nourished.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [10],
//   },
//   {
//     tip: "Run one mile every single day",
//     description:
//       "Incorporate a daily one-mile run into your routine for improved cardiovascular fitness.",
//     category: "Fitness and Health",
//     frequency: "Daily",
//     skillIndexes: [0, 1],
//   },
//   {
//     tip: "Redness relieving eyedrops",
//     description:
//       "Keep redness relieving eyedrops on hand to reduce eye redness and look refreshed.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [10],
//   },
//   {
//     tip: "Don't waste your money buying expensive colognes (buy knockoffs off Amazon)",
//     description:
//       "Save money by purchasing affordable cologne alternatives online.",
//     category: "Fashion and Style",
//     frequency: "Daily",
//     skillIndexes: [5],
//   },
//   {
//     tip: "Eyebrow grooming routine",
//     description:
//       "Maintain a regular eyebrow grooming routine to keep your eyebrows neat and well-shaped.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [10],
//   },
//   {
//     tip: "Try a white linen button down",
//     description:
//       "Experiment with a white linen button-down shirt for a classic and breathable summer look.",
//     category: "Fashion and Style",
//     frequency: "Daily",
//     skillIndexes: [5],
//   },
//   {
//     tip: "Put Vaseline before using cologne",
//     description:
//       "Apply a small amount of Vaseline on pulse points before spraying cologne to make the fragrance last longer.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [10],
//   },
//   {
//     tip: "Start layering clothes",
//     description:
//       "Explore layering different clothing pieces for stylish and weather-appropriate outfits.",
//     category: "Fashion and Style",
//     frequency: "Daily",
//     skillIndexes: [6],
//   },
//   {
//     tip: "Start using minoxidil if you're losing hair or experiencing thinning hair",
//     description:
//       "Consider using minoxidil to promote hair growth and combat hair loss.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [12],
//   },
//   {
//     tip: "Use minoxidil for facial hair growth",
//     description:
//       "If you desire a fuller beard, apply minoxidil to stimulate facial hair growth.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [11],
//   },
//   {
//     tip: "Action dissolves anxiety",
//     description:
//       "Take action and face your fears to overcome anxiety and build self-confidence.",
//     category: "Self-Care and Confidence",
//     frequency: "Daily",
//     skillIndexes: [16],
//   },
//   {
//     tip: "Wear high socks (if you have bad calf genetics)",
//     description:
//       "Opt for high socks to conceal skinny calves and add visual bulk to your legs.",
//     category: "Fashion and Style",
//     frequency: "Daily",
//     skillIndexes: [5],
//   },
//   {
//     tip: "Egg mask for hair",
//     description:
//       "Treat your hair with an egg mask to nourish and strengthen it.",
//     category: "Skincare and Grooming",
//     frequency: "Weekly",
//     skillIndexes: [11],
//   },
//   {
//     tip: "Find your colors",
//     description:
//       "Discover which colors complement your skin tone and incorporate them into your wardrobe.",
//     category: "Fashion and Style",
//     frequency: "Daily",
//     skillIndexes: [5],
//   },
//   {
//     tip: "Consider rocking a buzz cut",
//     description:
//       "If you want a low-maintenance hairstyle, try a buzz cut for a clean and sharp look.",
//     category: "Skincare and Grooming",
//     frequency: "Monthly",
//     skillIndexes: [28],
//   },
//   {
//     tip: "Start taking an Ashwagandha supplement",
//     description:
//       "Consider adding Ashwagandha supplement to your daily routine for stress relief and overall well-being.",
//     category: "Health and Nutrition",
//     frequency: "Daily",
//     skillIndexes: [19],
//   },
//   {
//     tip: "Linen pants",
//     description:
//       "Opt for linen pants during hot weather for a comfortable and stylish outfit.",
//     category: "Fashion and Style",
//     frequency: "Daily",
//     skillIndexes: [5],
//   },
//   {
//     tip: "Lemon juice is a natural hair lightener",
//     description:
//       "Use lemon juice to naturally lighten your hair and add subtle highlights.",
//     category: "Skincare and Grooming",
//     frequency: "Weekly",
//     skillIndexes: [11],
//   },
//   {
//     tip: "Wall art",
//     description:
//       "Decorate your living space with art and photographs that reflect your personality and style.",
//     category: "Artistic Expression",
//     frequency: "Monthly",
//     skillIndexes: [25],
//   },
//   {
//     tip: "The Rule Of Thirds Fashion",
//     description:
//       "Follow the rule of thirds in fashion to create visually appealing and balanced outfits.",
//     category: "Fashion and Style",
//     frequency: "Daily",
//     skillIndexes: [5],
//   },
//   {
//     tip: "Report breaking tonality",
//     description:
//       "Work on your speaking tone and pitch to sound more confident and engaging in conversations.",
//     category: "Interpersonal Skills",
//     frequency: "Daily",
//     skillIndexes: [22],
//   },
//   {
//     tip: "Grow your arms",
//     description:
//       "Incorporate arm-strengthening exercises into your workout routine to build strong and toned arms.",
//     category: "Fitness and Health",
//     frequency: "Daily",
//     skillIndexes: [37],
//   },
//   {
//     tip: "Drink a gallon of water every day",
//     description:
//       "Stay hydrated and improve your overall health by drinking a gallon of water daily.",
//     category: "Health and Nutrition",
//     frequency: "Daily",
//     skillIndexes: [19],
//   },
//   {
//     tip: "Trim your arms",
//     description:
//       "Keep your arm hair neatly trimmed and groomed for a polished appearance.",
//     category: "Skincare and Grooming",
//     frequency: "Weekly",
//     skillIndexes: [11],
//   },
//   {
//     tip: "Cutting out sugar",
//     description:
//       "Reduce your sugar intake to improve your health and maintain stable energy levels.",
//     category: "Health and Nutrition",
//     frequency: "Daily",
//     skillIndexes: [19],
//   },
//   {
//     tip: "Find your style interest",
//     description:
//       "Explore different fashion styles to discover what resonates with your personality and preferences.",
//     category: "Fashion and Style",
//     frequency: "Daily",
//     skillIndexes: [5],
//   },
//   {
//     tip: "Try an eyebrow growth serum",
//     description:
//       "Consider using an eyebrow growth serum to promote thicker and fuller eyebrows.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [11],
//   },
//   {
//     tip: "Classic sunglasses",
//     description:
//       "Invest in a pair of classic sunglasses that suit your face shape and elevate your style.",
//     category: "Fashion and Style",
//     frequency: "Daily",
//     skillIndexes: [5],
//   },
//   {
//     tip: "Train your neck",
//     description:
//       "Incorporate neck exercises into your workout routine to strengthen and define your neck muscles.",
//     category: "Fitness and Health",
//     frequency: "Daily",
//     skillIndexes: [37],
//   },
//   {
//     tip: "Add hand movements while talking",
//     description:
//       "Use expressive hand gestures while speaking to enhance communication and convey your message effectively.",
//     category: "Interpersonal Skills",
//     frequency: "Daily",
//     skillIndexes: [22],
//   },
//   {
//     tip: "Straighten teeth",
//     description:
//       "Consider orthodontic options to straighten your teeth and achieve a confident smile.",
//     category: "Skincare and Grooming",
//     frequency: "Monthly",
//     skillIndexes: [11],
//   },
//   {
//     tip: "Posture correction using tape",
//     description:
//       "Use posture correction tapes to maintain proper alignment and improve your posture.",
//     category: "Fitness and Health",
//     frequency: "Daily",
//     skillIndexes: [37],
//   },
//   {
//     tip: "Classic side part hairstyle",
//     description:
//       "Try a classic side part hairstyle for a polished and timeless look.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [28],
//   },
//   {
//     tip: "Pumice stone to remove dead skin",
//     description:
//       "Use a pumice stone to exfoliate and remove dead skin from rough areas of your body.",
//     category: "Skincare and Grooming",
//     frequency: "Weekly",
//     skillIndexes: [10],
//   },
//   {
//     tip: "The String Theory",
//     description:
//       "Explore the concept of the String Theory and its implications in the universe.",
//     category: "Intellectual Growth",
//     frequency: "Monthly",
//     skillIndexes: [21],
//   },
//   {
//     tip: "Get a couple dope hobbies",
//     description:
//       "Find and pursue hobbies that ignite your passion and bring joy to your life.",
//     category: "Self-Care and Confidence",
//     frequency: "Weekly",
//     skillIndexes: [16],
//   },
//   {
//     tip: "Get hypochlorous acid",
//     description:
//       "Consider using hypochlorous acid for skin cleansing and disinfection.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [10],
//   },
//   {
//     tip: "Use volume powder for hair",
//     description: "Add volume and texture to your hair with volume powder.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [28],
//   },
//   {
//     tip: "Cold shower in the morning",
//     description:
//       "Take cold showers in the morning to boost energy, improve circulation, and invigorate your body.",
//     category: "Health and Nutrition",
//     frequency: "Daily",
//     skillIndexes: [19],
//   },
//   {
//     tip: "Get rid of eye bags using spoon in the freezer method",
//     description:
//       "Place chilled spoons on your under-eye area to reduce puffiness and alleviate eye bags.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [10],
//   },
//   {
//     tip: "Silk pillowcase",
//     description:
//       "Sleep on a silk pillowcase to reduce friction on your skin and hair while you sleep.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [10],
//   },
//   {
//     tip: "Eyelash serum",
//     description:
//       "Use an eyelash serum to promote the growth and length of your eyelashes.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [11],
//   },
//   {
//     tip: "Chin tucks for posture correction",
//     description:
//       "Perform chin tucks exercises to correct forward head posture and strengthen your neck muscles.",
//     category: "Fitness and Health",
//     frequency: "Daily",
//     skillIndexes: [37],
//   },
//   {
//     tip: "Dye your eyebrows",
//     description:
//       "Consider dyeing your eyebrows to enhance their color and define your eyes.",
//     category: "Skincare and Grooming",
//     frequency: "Monthly",
//     skillIndexes: [11],
//   },
//   {
//     tip: "Blow dryer trick for hair volume",
//     description: "Use a blow dryer to add volume and lift to your hair.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [28],
//   },
//   {
//     tip: "Daily collagen supplement",
//     description:
//       "Take a daily collagen supplement to support healthy skin, hair, and joints.",
//     category: "Health and Nutrition",
//     frequency: "Daily",
//     skillIndexes: [19],
//   },
//   {
//     tip: "Nuface device",
//     description: "Use the Nuface device for facial toning and contouring.",
//     category: "Skincare and Grooming",
//     frequency: "Weekly",
//     skillIndexes: [11],
//   },
//   {
//     tip: "Posing tips for photos",
//     description:
//       "Learn various posing techniques to look your best in photographs.",
//     category: "Artistic Expression",
//     frequency: "Daily",
//     skillIndexes: [25],
//   },
//   {
//     tip: "Baggy pants and bulky shoes combo",
//     description:
//       "Try combining baggy pants with bulky shoes for a stylish and edgy streetwear look.",
//     category: "Fashion and Style",
//     frequency: "Daily",
//     skillIndexes: [5],
//   },
//   {
//     tip: "All black outfit",
//     description:
//       "Experiment with an all-black outfit for a sleek and sophisticated look.",
//     category: "Fashion and Style",
//     frequency: "Daily",
//     skillIndexes: [5],
//   },
//   {
//     tip: "Slightly bite the inside of your mouth cheek",
//     description:
//       "Adopt the habit of gently biting the inside of your cheek for a more defined jawline.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [2],
//   },
//   {
//     tip: "Consume 1 gram of protein per pound of bodyweight",
//     description:
//       "Ensure you're consuming enough protein to support muscle growth and repair.",
//     category: "Health and Nutrition",
//     frequency: "Daily",
//     skillIndexes: [19],
//   },
//   {
//     tip: "Get some highlight for hair (blonde)",
//     description:
//       "Add highlights to your hair for dimension and a sun-kissed look.",
//     category: "Skincare and Grooming",
//     frequency: "Monthly",
//     skillIndexes: [28],
//   },
//   {
//     tip: "Deep voice trick",
//     description:
//       "Practice vocal exercises to achieve a deeper and more resonant voice.",
//     category: "Interpersonal Skills",
//     frequency: "Daily",
//     skillIndexes: [22],
//   },
//   {
//     tip: "Light grey sweatpants",
//     description:
//       "Rock a pair of light grey sweatpants for a comfortable and trendy athleisure outfit.",
//     category: "Fashion and Style",
//     frequency: "Daily",
//     skillIndexes: [5],
//   },
//   {
//     tip: "Wax your eyebrows",
//     description:
//       "Consider waxing your eyebrows for precise shaping and a clean appearance.",
//     category: "Skincare and Grooming",
//     frequency: "Monthly",
//     skillIndexes: [11],
//   },
//   {
//     tip: "Try using fake glasses",
//     description:
//       "Experiment with non-prescription glasses to add a stylish accessory to your outfit.",
//     category: "Fashion and Style",
//     frequency: "Daily",
//     skillIndexes: [5],
//   },
//   {
//     tip: "Debulk hair sides",
//     description:
//       "Opt for a haircut that de-bulks the sides of your hair for a modern and neat look.",
//     category: "Skincare and Grooming",
//     frequency: "Monthly",
//     skillIndexes: [28],
//   },
//   {
//     tip: "Daily biotin supplement",
//     description:
//       "Take a daily biotin supplement to support hair and nail health.",
//     category: "Health and Nutrition",
//     frequency: "Daily",
//     skillIndexes: [19],
//   },
//   {
//     tip: "Whitening strips",
//     description:
//       "Use teeth whitening strips to brighten your smile and remove stains.",
//     category: "Skincare and Grooming",
//     frequency: "Weekly",
//     skillIndexes: [11],
//   },
//   {
//     tip: "100 pushups daily",
//     description:
//       "Challenge yourself to do 100 pushups daily to build upper body strength.",
//     category: "Fitness and Health",
//     frequency: "Daily",
//     skillIndexes: [1],
//   },
//   {
//     tip: "Grip strengthening trainer",
//     description:
//       "Use a grip strengthening trainer to improve grip strength and forearm muscles.",
//     category: "Fitness and Health",
//     frequency: "Daily",
//     skillIndexes: [1],
//   },
//   {
//     tip: "Middle part hairstyle",
//     description: "Try a middle part hairstyle for a trendy and balanced look.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [28],
//   },
//   {
//     tip: "Slow down your movements",
//     description:
//       "Practice moving slowly and deliberately to appear more composed and confident.",
//     category: "Interpersonal Skills",
//     frequency: "Daily",
//     skillIndexes: [22],
//   },
//   {
//     tip: "Put Vaseline on your lips and gently brush your lips with a toothbrush",
//     description:
//       "Exfoliate your lips by applying Vaseline and gently brushing with a toothbrush.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [10],
//   },
//   {
//     tip: "Use an eyelash curler",
//     description:
//       "Use an eyelash curler to lift and curl your lashes for a wide-eyed look.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [11],
//   },
//   {
//     tip: "Try relaxing your eyebrows",
//     description:
//       "Train your eyebrows to have a relaxed, natural arch for a softer appearance.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [11],
//   },
//   {
//     tip: "Eat a carrot every day for a slight tan skin",
//     description:
//       "Incorporate carrots into your diet to enhance your skin's natural glow.",
//     category: "Health and Nutrition",
//     frequency: "Daily",
//     skillIndexes: [19],
//   },
//   {
//     tip: "Only abs exercise to do daily",
//     description:
//       "Perform daily abdominal exercises to strengthen and define your core muscles.",
//     category: "Fitness and Health",
//     frequency: "Daily",
//     skillIndexes: [1],
//   },
//   {
//     tip: "Common sense diet",
//     description:
//       "Adopt a balanced and common-sense approach to your diet for better overall health.",
//     category: "Health and Nutrition",
//     frequency: "Daily",
//     skillIndexes: [19],
//   },
//   {
//     tip: "Exfoliate your lips once a week",
//     description:
//       "Regularly exfoliate your lips to remove dead skin and keep them smooth.",
//     category: "Skincare and Grooming",
//     frequency: "Weekly",
//     skillIndexes: [10],
//   },
//   {
//     tip: "Mewing",
//     description:
//       "Practice the mewing technique to improve facial structure and posture.",
//     category: "Fitness and Health",
//     frequency: "Daily",
//     skillIndexes: [2],
//   },
//   {
//     tip: "Spread gum up against the roof of your mouth at all times",
//     description:
//       "Keep gum against the roof of your mouth to enhance facial aesthetics and oral posture.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [2],
//   },
//   {
//     tip: "Oil pulling (in mouth)",
//     description:
//       "Try oil pulling to improve oral hygiene and promote healthy gums.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [2],
//   },
//   {
//     tip: "Wear a hat",
//     description:
//       "Rock a stylish hat to add flair and character to your outfit.",
//     category: "Fashion and Style",
//     frequency: "Daily",
//     skillIndexes: [5],
//   },
//   {
//     tip: "Use concealer",
//     description:
//       "Use concealer to cover blemishes and dark circles for a flawless complexion.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [11],
//   },
//   {
//     tip: "Invest in a statement jacket",
//     description:
//       "Add a statement jacket to your wardrobe to make a bold fashion statement.",
//     category: "Fashion and Style",
//     frequency: "Monthly",
//     skillIndexes: [5],
//   },
//   {
//     tip: "Tennis sweater",
//     description: "Try a tennis sweater for a preppy and sophisticated look.",
//     category: "Fashion and Style",
//     frequency: "Daily",
//     skillIndexes: [5],
//   },
//   {
//     tip: "Eat sliced beets for vascularity",
//     description:
//       "Incorporate sliced beets into your diet to promote vascularity and a pump during workouts.",
//     category: "Health and Nutrition",
//     frequency: "Weekly",
//     skillIndexes: [19],
//   },
//   {
//     tip: "No Fap",
//     description:
//       "Explore the practice of abstaining from pornography and masturbation.",
//     category: "Self-Care and Confidence",
//     frequency: "Weekly",
//     skillIndexes: [16],
//   },
//   {
//     tip: "Sea salt spray",
//     description:
//       "Use sea salt spray to achieve beachy waves and texture in your hair.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [28],
//   },
//   {
//     tip: "Add tanning ointment to your daily moisturizer",
//     description:
//       "Mix tanning ointment with your daily moisturizer for a gradual and natural-looking tan.",
//     category: "Skincare and Grooming",
//     frequency: "Daily",
//     skillIndexes: [10],
//   },
//   {
//     tip: "Model walk",
//     description:
//       "Practice a confident and stylish model walk to elevate your presence and posture.",
//     category: "Interpersonal Skills",
//     frequency: "Daily",
//     skillIndexes: [22],
//   },
//   {
//     tip: "Jewellery",
//     description:
//       "Experiment with jewelry pieces to accessorize and elevate your outfits.",
//     category: "Fashion and Style",
//     frequency: "Daily",
//     skillIndexes: [5],
//   },
//   {
//     tip: "Love yourself",
//     description:
//       "Practice self-love and acceptance to boost your confidence and well-being.",
//     category: "Self-Care and Confidence",
//     frequency: "Daily",
//     skillIndexes: [15],
//   },
// ];
