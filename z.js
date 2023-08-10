const tipsList: Tip[] = [
  {
    id: 0,
    tip: "Tank top button down combo",
    description:
      "Enhance your fashion game by trying a trendy and effortlessly stylish look through a 'Tank Top Button Down Combo.' This tip suggests combining a comfortable tank top with a stylish button-down shirt. The fusion of these two wardrobe staples adds a touch of casual elegance to your outfit, making it suitable for various occasions. Whether you're heading out for a weekend brunch, a casual hangout, or even a semi-casual work environment, this fashion combination strikes the perfect balance between relaxed and polished look. Experiment with different colors, patterns, and textures to create a personalized style that suits your taste. The tank top provides a comfortable and breathable base, while the button-down shirt adds a layer of sophistication. You can leave the button-down shirt unbuttoned for a laid-back vibe or button it up for a more polished appearance. By trying out the Tank Top Button Down Combo, you'll showcase your fashion-forward thinking and the ability to blend different elements to curate a versatile and chic ensemble. Make it a part of your monthly style rotation to keep your fashion choices exciting and up-to-date.",
    category: "Fashion and Style",
    frequency: "Monthly",
    skillIndexes: [6], // Fashion Trendsetter, Fashion Fusionist
    statsIndexes: [4, 9],
  },
  {
    id: 1,
    tip: "Expansive body language",
    description:
      "Embrace open body language to exude confidence in social settings. By occupying more space, you convey a sense of ease and relaxation, while adopting closed or narrow body language can indicate tension and unease.",
    category: "Self-Care and Confidence",
    frequency: "Weekly",
    skillIndexes: [11], // Mental Clarity Master
    statsIndexes: [9],
  },
  {
    id: 2,
    tip: "Incorporate Stretching",
    description:
      "Improve your flexibility and overall well-being by incorporating stretching into your daily routine. Take a few moments to stretch your body, perform kicks, and engage in dynamic stretches. Stretching helps to enhance your range of motion, prevent injury, and keep your muscles and joints supple. Whether you're starting your day, taking a break, or winding down, dedicating time to stretching can have a positive impact on your fitness journey. Make it a daily practice and experience the benefits of a more flexible and resilient body.",
    category: "Fitness and Health",
    frequency: "Weekly",
    skillIndexes: [2],
    statsIndexes: [5, 0],
  },
  {
    id: 3,
    tip: "Start Lining Up Your Beard",
    description:
      "Maintain a clean and sharp beard line to enhance your facial appearance. Regular grooming of your beard's edges can create a polished and well-defined look that complements your features.",
    category: "Skincare and Grooming",
    frequency: "Weekly",
    skillIndexes: [10, 19], // Beard pro
    statsIndexes: [4, 9],
  },
  {
    id: 4,
    tip: "Hang from a Pull-Up Bar",
    description:
      "Perform hanging exercises to improve grip strength and build upper body muscles. Hanging engages your core, enhances shoulder stability, and contributes to a well-rounded upper body workout.",
    category: "Fitness and Health",
    frequency: "Daily",
    skillIndexes: [0, 4],
    statsIndexes: [2, 1],
  },
  {
    id: 5,
    tip: "Apply Moisturizer with Sunblock Daily",
    description:
      "Protect your skin from harmful UV rays by using a daily moisturizer with built-in sunblock. This essential skincare step helps maintain skin health, prevent sun damage, and promote a youthful complexion.",
    category: "Skincare and Grooming",
    frequency: "Weekly",
    skillIndexes: [9, 19], // Skin Care Expert
    statsIndexes: [4],
  },
  {
    id: 6,
    tip: "Scrape Your Tongue for Fresh Breath",
    description:
      "Use a tongue scraper to remove bacteria and keep your breath fresh. Tongue scraping can help improve oral hygiene by reducing plaque buildup and maintaining better overall mouth health.",
    category: "Skincare and Grooming",
    frequency: "Daily",
    skillIndexes: [19],
    statsIndexes: [4, 9],
  },
  {
    id: 7,
    tip: "Incorporate Stomach Vacuum Exercises",
    description:
      "Practice stomach vacuum exercises to strengthen your core muscles and improve posture. This simple yet effective exercise can help you achieve a more toned midsection and enhanced abdominal control.",
    category: "Fitness and Health",
    frequency: "Weekly",
    skillIndexes: [4], // aes build
    statsIndexes: [9],
  },
  {
    id: 8,
    tip: "Try Intermittent Fasting",
    description:
      "Explore intermittent fasting as a strategy to promote weight loss and improve metabolic health. This eating pattern involves alternating periods of eating and fasting, potentially offering various health benefits.",
    category: "Health and Nutrition",
    frequency: "Weekly",
    skillIndexes: [14, 15], //
    statsIndexes: [0, 6],
  },
  {
    id: 9,
    tip: "Chew Tough Chewing Gum",
    description:
      "Chew tough chewing gum to exercise your jaw muscles and improve jawline definition. This simple habit can contribute to better jaw health and enhance the appearance of your jawline.",
    category: "Fitness and Health",
    frequency: "Weekly",
    skillIndexes: [3], // Perfect Jawline
    statsIndexes: [4, 3],
  },
  {
    id: 10,
    tip: "Incorporate Retinol into Your Skincare",
    description:
      "Add retinol to your skincare routine to combat signs of aging and improve skin texture. Retinol, a derivative of vitamin A, is known for its ability to promote skin cell turnover and reduce the appearance of wrinkles.",
    category: "Skincare and Grooming",
    frequency: "Monthly",
    skillIndexes: [9, 19], // Skin Care Expert
    statsIndexes: [4],
  },
  {
    id: 11,
    tip: "Embrace the Halo Effect",
    description:
      "Use the Halo Effect to your advantage by maintaining an overall positive and confident demeanor. Projecting self-assuredness can influence how others perceive you, leading to more positive interactions.",
    category: "Self-Care and Confidence",
    frequency: "Weekly",
    skillIndexes: [11], //
    statsIndexes: [9],
  },
  {
    id: 12,
    tip: "Rock a Long Coat",
    description:
      "Sport a long coat for a sophisticated and stylish outerwear option. Long coats can add an elegant touch to your outfit while providing warmth and versatility.",
    category: "Fashion and Style",
    frequency: "Monthly",
    skillIndexes: [6], // Impeccable Dresser
    statsIndexes: [4],
  },
  {
    id: 13,
    tip: "Body Detox: Revitalize with Yoga",
    description:
      "Indulge in a weekly body detox through the power of yoga. Unwind, stretch, and rejuvenate your body and mind, promoting healthy skin and a radiant glow. Embrace this soothing practice to enhance your overall well-being and embrace your inner beauty.",
    category: "Skincare and Grooming",
    frequency: "Weekly",
    skillIndexes: [2, 5, 12, 13, 19], // Skin Care Expert
    statsIndexes: [0, 1, 2, 3, 4, 5, 6, 9, 10, 11],
  },
  {
    id: 14,
    tip: "Fresh Breath Boost",
    description:
      "Boost your confidence by carrying gum with you to ensure your breath stays fresh and pleasant throughout the day, enhancing your interactions with others.",
    category: "Self-Care and Confidence",
    frequency: "Monthly",
    skillIndexes: [19], //
    statsIndexes: [9, 11],
  },
  {
    id: 15,
    tip: "Hydrate Your Skin with Bag Balm Moisturizer",
    description:
      "Keep your skin hydrated and nourished by using bag balm moisturizer. This versatile product can soothe dry skin and provide lasting hydration, making it a valuable addition to your skincare routine.",
    category: "Skincare and Grooming",
    frequency: "Weekly",
    skillIndexes: [9], // Skin Care Expert
    statsIndexes: [8],
  },
  {
    id: 16,
    tip: "Incorporate a Daily One-Mile Run",
    description:
      "Boost your cardiovascular fitness by incorporating a daily one-mile run into your routine. Running can improve your heart health, endurance, and overall physical fitness.",
    category: "Fitness and Health",
    frequency: "Daily",
    skillIndexes: [0, 4, 1, 2], // Chiseled Abs, Iron Legs
    statsIndexes: [0, 3, 5, 11],
  },
  {
    id: 17,
    tip: "Reduce Eye Redness with Redness Relieving Eyedrops",
    description:
      "Keep redness relieving eyedrops at home to reduce eye redness and appear refreshed. These eyedrops can provide quick relief from eye irritation and help you maintain bright and clear eyes. Note:- Use only for special occasions",
    category: "Skincare and Grooming",
    frequency: "Weekly",
    skillIndexes: [19], // Skin Care Expert
    statsIndexes: [4],
  },
  {
    //xx
    id: 18,
    tip: "Opt for Affordable Cologne Alternatives",
    description:
      "Save money by purchasing affordable cologne alternatives online. You can find high-quality fragrances that resemble popular colognes, allowing you to enjoy a pleasant scent without breaking the bank.",
    category: "Fashion and Style",
    frequency: "Monthly",
    skillIndexes: [7], //
    statsIndexes: [6],
  },
  {
    id: 19,
    tip: "Maintain an Eyebrow Grooming Routine",
    description:
      "Keep your eyebrows neat and well-shaped by maintaining a regular grooming routine. Well-groomed eyebrows can enhance your facial appearance and contribute to a polished look.",
    category: "Skincare and Grooming",
    frequency: "Weekly",
    skillIndexes: [10, 19], // Skin Care Expert
    statsIndexes: [9],
  },
  {
    id: 20,
    tip: "Experiment with a White Linen Button-Down Shirt",
    description:
      "Explore a classic and breathable summer look by trying a white linen button-down shirt. Linen fabric offers comfort and style, making it an excellent choice for warmer weather.",
    category: "Fashion and Style",
    frequency: "Monthly",
    skillIndexes: [6], // Fashion Trendsetter
    statsIndexes: [4],
  },
  {
    //xx
    id: 21,
    tip: "Enhance Cologne Longevity with Vaseline",
    description:
      "Apply a small amount of Vaseline on pulse points before spraying cologne to make the fragrance last longer. The occlusive properties of Vaseline can help slow down the evaporation of the cologne's scent.",
    category: "Skincare and Grooming",
    frequency: "Weekly",
    skillIndexes: [7], // Skin Care Expert
    statsIndexes: [6],
  },
  {
    id: 22,
    tip: "Experiment with Layered Outfits",
    description:
      "Create stylish and weather-appropriate outfits by experimenting with layering different clothing pieces. Layering adds depth and dimension to your look, allowing you to showcase your fashion sense.",
    category: "Fashion and Style",
    frequency: "Weekly",
    skillIndexes: [6], // Impeccable Dresser
    statsIndexes: [4, 10, 11],
  },
  {
    id: 23,
    tip: "Consider Minoxidil for Hair Growth",
    description:
      "If you're experiencing hair thinning or loss, consider using minoxidil to promote hair growth. Minoxidil is a topical treatment that can potentially help stimulate hair follicles and encourage regrowth.",
    category: "Skincare and Grooming",
    frequency: "Monthly",
    skillIndexes: [8], // Glowing Complexion
    statsIndexes: [4],
  },
  {
    id: 24,
    tip: "Stimulate Facial Hair Growth with Minoxidil",
    description:
      "Desire a fuller beard? Apply minoxidil to stimulate facial hair growth. Minoxidil may help you achieve a thicker and more robust beard over time.",
    category: "Skincare and Grooming",
    frequency: "Monthly",
    skillIndexes: [10], // Beard Sculptor
    statsIndexes: [4],
  },
  {
    id: 25,
    tip: "Overcome Anxiety Through Action",
    description:
      "Face your fears and take proactive steps to overcome anxiety and build self-confidence. Action-oriented strategies can empower you to navigate challenging situations and enhance your emotional resilience.",
    category: "Self-Care and Confidence",
    frequency: "Weekly",
    skillIndexes: [12], // Emotional Resilience
    statsIndexes: [5, 1],
  },
  {
    id: 26,
    tip: "Enhance Leg Appearance with High Socks",
    description:
      "Opt for high socks to conceal skinny calves and add visual bulk to your legs. High socks can create the illusion of fuller and more muscular calves, enhancing your overall leg aesthetics.",
    category: "Fashion and Style",
    frequency: "Weekly",
    skillIndexes: [6], // Fashion Trendsetter
    statsIndexes: [2],
  },
  {
    id: 27,
    tip: "Nourish Hair with an Egg Mask",
    description:
      "Treat your hair to an egg mask to nourish and strengthen it. Eggs are rich in protein and nutrients that can promote healthy hair growth and improve hair texture.",
    category: "Skincare and Grooming",
    frequency: "Weekly",
    skillIndexes: [8], // Beard Sculptor
    statsIndexes: [4],
  },
  {
    id: 28,
    tip: "Find Your Colors",
    description:
      "Discover which colors complement your skin tone and incorporate them into your wardrobe. Wearing the right colors can enhance your overall appearance and help you create stylish and coordinated outfits.",
    category: "Fashion and Style",
    frequency: "Weekly",
    skillIndexes: [6], // Fashion Trendsetter
    statsIndexes: [10],
  },
  {
    id: 29,
    tip: "Consider Rocking a Buzz Cut",
    description:
      "If you want a low-maintenance hairstyle, try a buzz cut for a clean and sharp look. A buzz cut can provide a bold and confident appearance with minimal grooming requirements.Also man with thick eyebrows can pull this hairstyle easily.",
    category: "Skincare and Grooming",
    frequency: "Monthly",
    skillIndexes: [8, 19], // Defaulted to Chiseled Abs (index 28 not found in skillsList)
    statsIndexes: [4],
  },
  {
    id: 30,
    tip: "Start Taking an Ashwagandha Supplement",
    description:
      "Consider adding Ashwagandha supplement to your daily routine for stress relief and overall well-being. Ashwagandha is an adaptogenic herb that may help manage stress and promote a sense of calm.",
    category: "Self-Care and Confidence",
    frequency: "Monthly",
    skillIndexes: [13], //
    statsIndexes: [7],
  },
  {
    id: 31,
    tip: "Linen Pants",
    description:
      "Opt for linen pants during hot weather for a comfortable and stylish outfit. Linen is a breathable fabric that can keep you cool while maintaining a polished appearance.",
    category: "Fashion and Style",
    frequency: "Monthly",
    skillIndexes: [6], // Fashion Trendsetter
    statsIndexes: [4],
  },
  {
    id: 32,
    tip: "Use Lemon Juice as a Natural Hair Lightener",
    description:
      "Use lemon juice to naturally lighten your hair and add subtle highlights. Lemon juice is a gentle and natural way to brighten your hair without using harsh chemicals.",
    category: "Skincare and Grooming",
    frequency: "Weekly",
    skillIndexes: [8], //
    statsIndexes: [4],
  },
  {
    id: 33,
    tip: "Decorate Your Living Space with Wall Art",
    description:
      "Decorate your living space with art and photographs that reflect your personality and style. A well-decorated space can create a positive and inspiring environment.",
    category: "Artistic Expression",
    frequency: "Monthly",
    skillIndexes: [18], // Artistic Expression (Corrected)
    statsIndexes: [11, 10],
  },
  {
    id: 34,
    tip: "Monochrome Magic for Height",
    description:
      "Unlock the power of monochrome outfits or similar tones to add inches to your height visually. By sticking to a consistent color palette from head to toe, you create an uninterrupted line that elongates your silhouette, making you appear taller and more confident. Embrace shades like black, navy, or others to work this fashion magic in your favor.",
    category: "Fashion and Style",
    frequency: "Weekly",
    skillIndexes: [6], // Fashion Trendsetter
    statsIndexes: [6],
  },
  {
    id: 35,
    tip: "Boost Confidence Through Your Voice",
    description:
      "Enhance your self-confidence by refining your speaking tone and pitch. Engage in conversations more often, especially if you're an introvert, to further develop your communication skills and leave a lasting positive impression on others.",
    category: "Self-Care and Confidence",
    frequency: "Daily",
    skillIndexes: [11], // Calorie Counting Whiz (Defaulted to a valid skill)
    statsIndexes: [9],
  },
  {
    id: 36,
    tip: "Incorporate Arm-Strengthening Exercises",
    description:
      "Incorporate arm-strengthening exercises into your workout routine to build strong and toned arms. Well-defined arms can enhance your physical appearance and boost your overall strength.",
    category: "Fitness and Health",
    frequency: "Daily",
    skillIndexes: [4], // Iron Legs (Defaulted to a valid skill)
    statsIndexes: [2, 1],
  },
  {
    id: 37,
    tip: "Stay Hydrated",
    description:
      "Stay hydrated and improve your overall health by drinking a glass of water every morining. Proper hydration is essential for optimal bodily functions and maintaining clear skin.",
    category: "Health and Nutrition",
    frequency: "Daily",
    skillIndexes: [16], // Meditation Prodigy
    statsIndexes: [8],
  },
  {
    id: 38,
    tip: "Keep Your Arm Hair Neatly Trimmed and Groomed",
    description:
      "Keep your arm hair neatly trimmed and groomed for a polished appearance. Regular grooming can enhance your overall look and create a sense of cleanliness. Note: Do it if you are into bodybuilding and want more focus on muscle appearance.",
    category: "Skincare and Grooming",
    frequency: "Monthly",
    skillIndexes: [19], // Beard Sculptor
    statsIndexes: [4],
  },
  {
    id: 39,
    tip: "Reduce Sugar Intake for Improved Health",
    description:
      "Reduce your sugar intake or better altogether remove it to improve your health and maintain excellent energy levels. Minimizing sugar consumption can lead to better overall well-being. Use healthy alternatives like honey, jaggery, etc for your cravings.",
    category: "Health and Nutrition",
    frequency: "Daily",
    skillIndexes: [14, 9, 19], // Meditation Prodigy
    statsIndexes: [6, 7],
  },
  {
    id: 40,
    tip: "Explore Different Fashion Styles",
    description:
      "Explore different fashion styles to discover what resonates with your personality and preferences. Experimenting with diverse styles can help you find your unique fashion identity.",
    category: "Fashion and Style",
    frequency: "Monthly",
    skillIndexes: [6], // Fashion Trendsetter
    statsIndexes: [10],
  },
  {
    id: 41,
    tip: "Promote Thicker and Fuller Eyebrows with Eyebrow Growth Serum",
    description:
      "Consider using an eyebrow growth serum to promote thicker and fuller eyebrows. Fuller eyebrows can enhance your facial features and create a more defined look.",
    category: "Skincare and Grooming",
    frequency: "Monthly",
    skillIndexes: [19], // Beard Sculptor
    statsIndexes: [4],
  },
  {
    id: 42,
    tip: "Invest in Classic Sunglasses",
    description:
      "Invest in a pair of classic sunglasses that suit your face shape and elevate your style. Sunglasses can add a touch of sophistication to your look while protecting your eyes from the sun.",
    category: "Fashion and Style",
    frequency: "Monthly",
    skillIndexes: [6], // Fashion Trendsetter
    statsIndexes: [4],
  },
  {
    id: 43,
    tip: "Strengthen and Define Your Neck Muscles with Neck Exercises",
    description:
      "Incorporate neck exercises into your workout routine to strengthen and define your neck muscles. A strong neck can contribute to better posture and a balanced physique.",
    category: "Fitness and Health",
    frequency: "Daily",
    skillIndexes: [4], //
    statsIndexes: [2],
  },
  {
    id: 44,
    tip: "Enhance Communication with Expressive Hand Gestures",
    description:
      "Use expressive hand gestures while speaking to enhance communication and convey your message effectively. Well-executed gestures can add emphasis and clarity to your conversations.",
    category: "Self-Care and Confidence",
    frequency: "Weekly",
    skillIndexes: [11], // Calorie Counting Whiz (Defaulted to a valid skill)
    statsIndexes: [4, 9, 11],
  },
  {
    id: 45,
    tip: "Consider Orthodontic Options to Straighten Your Teeth",
    description:
      "Consider orthodontic options to straighten your teeth and achieve a confident smile. Straight teeth can enhance your facial appearance and boost your self-confidence.",
    category: "Skincare and Grooming",
    frequency: "Monthly",
    skillIndexes: [11], // Beard Sculptor
    statsIndexes: [4],
  },
  {
    id: 46,
    tip: "Maintain Proper Posture with Posture Correction Tapes",
    description:
      "Use posture correction tapes to maintain proper alignment and improve your posture. Good posture contributes to a strong and confident presence.",
    category: "Fitness and Health",
    frequency: "Weekly",
    skillIndexes: [11], // Vitamin Prodigy (Defaulted to a valid skill)
    statsIndexes: [4],
  },
  {
    id: 47,
    tip: "Try a Classic Side Part Hairstyle",
    description:
      "Try a classic side part hairstyle for a polished and timeless look. The side part is a versatile hairstyle that can suit various occasions and enhance your appearance.",
    category: "Skincare and Grooming",
    frequency: "Monthly",
    skillIndexes: [8], // Calorie Counting Whiz (Defaulted to a valid skill)
    statsIndexes: [4],
  },
  {
    id: 48,
    tip: "Exfoliate Rough Areas of Your Body with a Pumice Stone",
    description:
      "Use a pumice stone to exfoliate and remove dead skin from rough areas of your body. Regular exfoliation can leave your skin feeling smooth and refreshed.",
    category: "Skincare and Grooming",
    frequency: "Weekly",
    skillIndexes: [9], // Skin Care Expert
    statsIndexes: [9, 6],
  },
  {
    id: 49,
    tip: "Maintain Good Posture with the String Theory",
    description:
      "Imagine there is a string pulling your head upward to help maintain a straight posture. Practicing this visualization technique can promote proper alignment and reduce slouching.",
    category: "Self-Care and Confidence",
    frequency: "Monthly",
    skillIndexes: [11], // Calorie Counting Whiz (Defaulted to a valid skill)
    statsIndexes: [4, 6],
  },
  {
    id: 50,
    tip: "Discover and Pursue Passionate Hobbies",
    description:
      "Find and pursue hobbies that ignite your passion and bring joy to your life. Engaging in hobbies can boost your mood, creativity, and overall sense of well-being.",
    category: "Self-Care and Confidence",
    frequency: "Weekly",
    skillIndexes: [13], // Emotional Resilience
    statsIndexes: [10, 11],
  },
  {
    id: 51,
    tip: "Consider Using Hypochlorous Acid for Skin Cleansing",
    description:
      "Consider using hypochlorous acid for skin cleansing and disinfection. Hypochlorous acid is known for its antimicrobial properties and can be used as a gentle and effective skin cleanser.",
    category: "Skincare and Grooming",
    frequency: "Monthly",
    skillIndexes: [9], // Skin Care Expert
    statsIndexes: [4],
  },
  {
    id: 52,
    tip: "Add Volume and Texture to Your Hair with Volume Powder",
    description:
      "Add volume and texture to your hair with volume powder. This styling product can help create a fuller and more voluminous hairstyle.",
    category: "Skincare and Grooming",
    frequency: "Monthly",
    skillIndexes: [8], // Calorie Counting Whiz (Defaulted to a valid skill)
    statsIndexes: [4],
  },
  {
    id: 53,
    tip: "Boost Energy and Circulation with Cold Showers",
    description:
      "Take cold showers in the morning to boost energy, improve circulation, and invigorate your body. Cold showers can provide a refreshing start to your day.",
    category: "Self-Care and Confidence",
    frequency: "Daily",
    skillIndexes: [13], // Meditation Prodigy
    statsIndexes: [6, 3],
  },
  {
    id: 54,
    tip: "Reduce Under-Eye Puffiness with Chilled Spoons",
    description:
      "Place chilled spoons on your under-eye area to reduce puffiness and alleviate eye bags. Cold spoons can help constrict blood vessels and minimize swelling.",
    category: "Skincare and Grooming",
    frequency: "Weekly",
    skillIndexes: [19], // Skin Care Expert
    statsIndexes: [4],
  },
  {
    id: 55,
    tip: "Sleep on a Silk Pillowcase",
    description:
      "Sleep on a silk pillowcase to reduce friction on your skin and hair while you sleep. Silk pillowcases can help prevent hair breakage, reduce wrinkles, and maintain skin and hair health.",
    category: "Skincare and Grooming",
    frequency: "Monthly",
    skillIndexes: [8, 9], // Skin Care Expert
    statsIndexes: [5],
  },
  {
    id: 56,
    tip: "Promote Eyelash Growth with an Eyelash Serum",
    description:
      "Use an eyelash serum to promote the growth and length of your eyelashes. Longer eyelashes can enhance your eye appearance and add a touch of allure to your look.",
    category: "Skincare and Grooming",
    frequency: "Monthly",
    skillIndexes: [8], // Beard Sculptor
    statsIndexes: [4],
  },
  {
    id: 57,
    tip: "Strengthen Neck Muscles with Chin Tucks",
    description:
      "Perform chin tucks exercises to correct forward head posture and strengthen your neck muscles. Strong neck muscles contribute to improved posture and neck stability.",
    category: "Fitness and Health",
    frequency: "Weekly",
    skillIndexes: [4], // Vitamin Prodigy (Defaulted to a valid skill)
    statsIndexes: [4, 2],
  },
  {
    id: 58,
    tip: "Dye your eyebrows",
    description:
      "Consider dyeing your eyebrows to enhance their color and define your eyes. This simple step can add a touch of sophistication to your overall appearance.",
    category: "Skincare and Grooming",
    frequency: "Monthly",
    skillIndexes: [8], // Beard Sculptor
    statsIndexes: [4],
  },
  {
    id: 59,
    tip: "Blow dryer trick for hair volume",
    description:
      "Use a blow dryer to add volume and lift to your hair. This quick and easy technique can help you achieve hair that exudes confidence and vitality.Note:- Avoid if your hair are dry and use minimum heat possible.",
    category: "Skincare and Grooming",
    frequency: "Weekly",
    skillIndexes: [8], // Calorie Counting Whiz (Defaulted to a valid skill)
    statsIndexes: [4],
  },
  {
    id: 60,
    tip: "Daily collagen supplement",
    description:
      "Take a daily collagen supplement to support healthy skin, hair, and joints. Collagen plays a vital role in enhancing elasticity and overall well-being.",
    category: "Health and Nutrition",
    frequency: "Monthly",
    skillIndexes: [9], // Meditation Prodigy
    statsIndexes: [7],
  },
  {
    id: 61,
    tip: "Nuface device",
    description:
      "Use the Nuface device for facial toning and contouring. This innovative tool can help you achieve a more sculpted and youthful appearance.",
    category: "Skincare and Grooming",
    frequency: "Monthly",
    skillIndexesbi: [9], // Beard Sculptor
    statsIndexes: [4],
  },
  {
    id: 62,
    tip: "Posing tips for photos",
    description:
      "Learn various posing techniques to look your best in photographs. Mastering the art of posing can greatly enhance your presence in pictures and boost your self-confidence.",
    category: "Self-Care and Confidence",
    frequency: "Daily",
    skillIndexes: [4, 11], // Artistic Expression
    statsIndexes: [4],
  },
  {
    id: 63,
    tip: "Baggy pants and bulky shoes combo",
    description:
      "Try combining baggy pants with bulky shoes for a stylish and edgy streetwear look. This fashion-forward combination can help you stand out and make a statement. Avoid if you are short.",
    category: "Fashion and Style",
    frequency: "Monthly",
    skillIndexes: [6], // Fashion Trendsetter
    statsIndexes: [4],
  },
  {
    id: 64,
    tip: "All black outfit",
    description:
      "Experiment with an all-black outfit for a sleek and sophisticated look. Wearing all black exudes confidence and timeless style.",
    category: "Fashion and Style",
    frequency: "Weekly",
    skillIndexes: [5], // Fashion Trendsetter
    statsIndexes: [9],
  },
  {
    id: 65,
    tip: "Slightly bite the inside of your mouth cheek",
    description:
      "Adopt the habit of gently biting the inside of your cheek for a more defined jawline. This simple technique can help accentuate your facial features.",
    category: "Skincare and Grooming",
    frequency: "Monthly",
    skillIndexes: [3], // Perfect Jawline
    statsIndexes: [4],
  },
  {
    id: 66,
    tip: "Consume 1 gram of protein per pound of bodyweight",
    description:
      "Ensure you're consuming enough protein to support muscle growth and repair. Adequate protein intake is essential for maintaining a strong and healthy physique.",
    category: "Health and Nutrition",
    frequency: "Daily",
    skillIndexes: [14, 15], // Meditation Prodigy
    statsIndexes: [7],
  },
  {
    id: 67,
    tip: "Get some highlight for hair (blonde)",
    description:
      "Add highlights to your hair for dimension and a sun-kissed look. Highlights can add depth and vibrancy to your hair color.",
    category: "Skincare and Grooming",
    frequency: "Monthly",
    skillIndexes: [8], // Calorie Counting Whiz (Defaulted to a valid skill)
    statsIndexes: [4],
  },
  {
    id: 68,
    tip: "Deep voice trick",
    description:
      "Practice vocal exercises to achieve a deeper and more resonant voice. A deeper voice can convey authority and confidence in various situations.",
    category: "Self-Care and Confidence",
    frequency: "Weekly",
    skillIndexes: [11], // Calorie Counting Whiz (Defaulted to a valid skill)
    statsIndexes: [9, 11],
  },
  {
    id: 69,
    tip: "Light grey sweatpants",
    description:
      "Rock a pair of light grey sweatpants for a comfortable and trendy athleisure outfit. Athleisure wear combines style and comfort effortlessly.",
    category: "Fashion and Style",
    frequency: "Daily",
    skillIndexes: [6], // Fashion Trendsetter
    statsIndexes: [4],
  },
  {
    id: 70,
    tip: "Wax your eyebrows",
    description:
      "Consider waxing your eyebrows for precise shaping and a clean appearance. Well-shaped eyebrows frame your face beautifully.",
    category: "Skincare and Grooming",
    frequency: "Monthly",
    skillIndexes: [8], // Beard Sculptor
    statsIndexes: [4],
  },
  {
    id: 71,
    tip: "Try using fake glasses",
    description:
      "Experiment with non-prescription glasses to add a stylish accessory to your outfit. Glasses can complement your look and showcase your personal style.",
    category: "Fashion and Style",
    frequency: "Monthly",
    skillIndexes: [7], // Fashion Trendsetter
    statsIndexes: [10],
  },
  {
    id: 72,
    tip: "Debulk hair sides",
    description:
      "Opt for a haircut that debulks the sides of your hair for a modern and neat look. This haircut can enhance your facial features and overall appearance.",
    category: "Skincare and Grooming",
    frequency: "Monthly",
    skillIndexes: [8], // Calorie Counting Whiz (Defaulted to a valid skill)
    statsIndexes: [4],
  },
  {
    id: 73,
    tip: "Daily biotin supplement",
    description:
      "Take a daily biotin supplement to support hair and nail health. Biotin is known to promote strong and healthy hair and nails.",
    category: "Health and Nutrition",
    frequency: "Daily",
    skillIndexes: [17], // Meditation Prodigy
    statsIndexes: [7],
  },
  {
    id: 74,
    tip: "Whitening strips",
    description:
      "Use teeth whitening strips to brighten your smile and remove stains. A bright smile can boost your confidence and leave a lasting impression.",
    category: "Skincare and Grooming",
    frequency: "Weekly",
    skillIndexes: [11], // Beard Sculptor
    statsIndexes: [4],
  },
  {
    id: 75,
    tip: "100 pushups daily",
    description:
      "Challenge yourself to do 100 pushups daily to build upper body strength. Pushups are a classic and effective exercise for a strong physique.",
    category: "Fitness and Health",
    frequency: "Daily",
    skillIndexes: [4, 20], // Fitness Guru
    statsIndexes: [1, 2],
  },
  {
    id: 76,
    tip: "Grip strengthening trainer",
    description:
      "Use a grip strengthening trainer to improve grip strength and forearm muscles. A strong grip is beneficial for various physical activities and tasks.",
    category: "Fitness and Health",
    frequency: "Daily",
    skillIndexes: [20], // Fitness Guru
    statsIndexes: [2, 3],
  },
  {
    id: 77,
    tip: "Middle part hairstyle",
    description:
      "Try a middle part hairstyle for a trendy and balanced look. The middle part can complement various face shapes and enhance your overall appearance.",
    category: "Skincare and Grooming",
    frequency: "Monthly",
    skillIndexes: [8], // Calorie Counting Whiz
    statsIndexes: [4],
  },
  {
    id: 78,
    tip: "Slow down your movements",
    description:
      "Practice moving slowly and deliberately to appear more composed and confident. Slowing down your movements can convey a sense of control and poise.",
    category: "Self-Care and Confidence",
    frequency: "Weekly",
    skillIndexes: [11], // Calorie Counting Whiz
    statsIndexes: [9, 11],
  },
  {
    id: 79,
    tip: "Put Vaseline on your lips and gently brush your lips with a toothbrush",
    description:
      "Exfoliate your lips by applying Vaseline and gently brushing with a toothbrush. This simple routine can keep your lips soft, smooth, and well-maintained.",
    category: "Skincare and Grooming",
    frequency: "Daily",
    skillIndexes: [9], // Skin Care Expert
    statsIndexes: [8],
  },
  {
    //xx
    id: 80,
    tip: "Use an eyelash curler",
    description:
      "Use an eyelash curler to lift and curl your lashes for a wide-eyed look. Curled lashes can make your eyes appear more open and captivating.",
    category: "Skincare and Grooming",
    frequency: "Monthly",
    skillIndexes: [8], // Beard Sculptor
    statsIndexes: [4],
  },
  {
    id: 81,
    tip: "Try relaxing your eyebrows",
    description:
      "Train your eyebrows to have a relaxed, natural arch for a softer appearance. Natural-looking eyebrows can enhance your facial expressions and convey approachability.",
    category: "Skincare and Grooming",
    frequency: "Daily",
    skillIndexes: [11], // Beard Sculptor
    statsIndexes: [4],
  },
  {
    //xx
    id: 82,
    tip: "Eat a carrot every day for a slight tan skin",
    description:
      "Incorporate carrots into your diet to enhance your skin's natural glow. Carrots contain nutrients that contribute to a healthy complexion with a subtle tan undertone.",
    category: "Health and Nutrition",
    frequency: "Daily",
    skillIndexes: [9], // Meditation Prodigy
    statsIndexes: [4],
  },

  {
    id: 83,
    tip: "Core Crusher Challenge",
    description:
      "Embark on the Core Crusher Challenge! Perform daily abdominal exercises to strengthen and sculpt your core muscles. A strong core enhances stability and empowers your fitness journey.",
    category: "Fitness and Health",
    frequency: "Daily",
    skillIndexes: [0, 4], // Fitness Guru
    statsIndexes: [0, 1, 2, 3, 5],
  },
  {
    id: 84,
    tip: "Common sense diet",
    description:
      "Adopt a balanced and common-sense approach to your diet for better overall health. A diet focused on whole foods and moderation can lead to sustainable well-being.",
    category: "Health and Nutrition",
    frequency: "Daily",
    skillIndexes: [15], // Master of Balanced Diet
    statsIndexes: [7],
  },
  {
    id: 85,
    tip: "Exfoliate your lips once a week",
    description:
      "Regularly exfoliate your lips to remove dead skin and keep them smooth. Exfoliated lips are more receptive to moisturization and can enhance your smile.",
    category: "Skincare and Grooming",
    frequency: "Weekly",
    skillIndexes: [9], // Skin Care Expert
    statsIndexes: [4],
  },
  {
    id: 86,
    tip: "Mewing",
    description:
      "Practice the mewing technique to improve facial structure and posture. Mewing involves proper tongue posture against the roof of your mouth to help align your jaw and enhance your overall appearance.",
    category: "Fitness and Health",
    frequency: "Daily",
    skillIndexes: [3, 4], // Perfect Jawline
    statsIndexes: [4],
  },
  {
    id: 87,
    tip: "Spread gum up against the roof of your mouth at all times",
    description:
      "Keep gum against the roof of your mouth to enhance facial aesthetics and oral posture. This practice, often associated with mewing, can contribute to a well-defined jawline and improved oral health.",
    category: "Skincare and Grooming",
    frequency: "Daily",
    skillIndexes: [3], // Perfect Jawline
    statsIndexes: [4],
  },
  {
    id: 88,
    tip: "Oil pulling (in the mouth)",
    description:
      "Try oil pulling to improve oral hygiene and promote healthy gums. Oil pulling involves swishing oil (natural oils like coconut oil or sesame oil) in your mouth and then spitting it out to remove toxins and bacteria, leading to fresher breath and better oral care.",
    category: "Skincare and Grooming",
    frequency: "Weekly",
    skillIndexes: [19], // Perfect Jawline
    statsIndexes: [4, 7],
  },
  {
    id: 89,
    tip: "Wear a hat",
    description:
      "Rock a stylish hat to add flair and character to your outfit. A well-chosen hat can instantly elevate your look, making you stand out with confidence and style.",
    category: "Fashion and Style",
    frequency: "Daily",
    skillIndexes: [7], // Fashion Trendsetter
    statsIndexes: [10],
  },
  {
    id: 90,
    tip: "Use concealer",
    description:
      "Use concealer to cover blemishes and dark circles for a flawless complexion. Concealer is a versatile tool that can help you achieve a smooth and even skin tone.",
    category: "Skincare and Grooming",
    frequency: "Weekly",
    skillIndexes: [9, 7], // Grooming Aficionado
    statsIndexes: [9],
  },
  {
    id: 91,
    tip: "Invest in a statement jacket",
    description:
      "Add a statement jacket to your wardrobe to make a bold fashion statement. A unique and eye-catching jacket can transform your outfit and showcase your personal style.",
    category: "Fashion and Style",
    frequency: "Monthly",
    skillIndexes: [6], // Fashion Trendsetter
    statsIndexes: [4],
  },
  {
    id: 92,
    tip: "Tennis sweater",
    description:
      "Try a tennis sweater for a preppy and sophisticated look. A tennis sweater exudes timeless elegance and can be a versatile addition to your wardrobe.",
    category: "Fashion and Style",
    frequency: "Monthly",
    skillIndexes: [6], // Fashion Trendsetter
    statsIndexes: [4],
  },
  {
    id: 93,
    tip: "Eat sliced beets for vascularity",
    description:
      "Incorporate sliced beets into your diet to promote vascularity and a pump during workouts. Beets contain nitrates that can enhance blood flow, contributing to a more vascular and pumped appearance during exercise.",
    category: "Health and Nutrition",
    frequency: "Weekly",
    skillIndexes: [4], // Superfood Connoisseur
    statsIndexes: [4],
  },
  {
    id: 94,
    tip: "No Fap",
    description:
      "Explore the practice of abstaining from pornography and masturbation. Some individuals believe that practicing 'No Fap' can lead to increased energy, focus, and self-confidence.",
    category: "Self-Care and Confidence",
    frequency: "Weekly",
    skillIndexes: [5, 9, 11, 12, 17, 19], // Emotional Resilience
    statsIndexes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  },
  {
    id: 95,
    tip: "Sea salt spray",
    description:
      "Use sea salt spray to achieve beachy waves and texture in your hair. Sea salt spray can give your hair a relaxed and effortlessly stylish look, reminiscent of a day at the beach.",
    category: "Skincare and Grooming",
    frequency: "Monthly",
    skillIndexes: [8], // Skin Care Expert
    statsIndexes: [4],
  },
  {
    id: 96,
    tip: "Add tanning ointment to your moisturizer",
    description:
      "Mix tanning ointment with your daily moisturizer for a gradual and natural-looking tan. This gradual approach to tanning can help you achieve a sun-kissed glow without the risks of excessive sun exposure.",
    category: "Skincare and Grooming",
    frequency: "Weekly",
    skillIndexes: [9], // Skin Care Expert
    statsIndexes: [4],
  },
  {
    id: 97,
    tip: "Model walk",
    description:
      "Practice a confident and stylish model walk to elevate your presence and posture. A well-executed model walk can exude confidence and enhance your overall body language.",
    category: "Self-Care and Confidence",
    frequency: "Weekly",
    skillIndexes: [11], // Calorie Counting Whiz
    statsIndexes: [9, 11],
  },
  {
    id: 98,
    tip: "Jewelry",
    description:
      "Experiment with jewelry pieces to accessorize and elevate your outfits. Thoughtfully chosen jewelry can add personality and charm to your look, making a lasting impression.",
    category: "Fashion and Style",
    frequency: "Monthly",
    skillIndexes: [7], // Accessories Guru
    statsIndexes: [4],
  },

  {
    id: 99,
    tip: "Digital Detox: Unplug from Social Media",
    description:
      "Give yourself a break today by avoiding social media. Disconnecting from the digital world can help clear your mind, reduce stress, and enhance your mental clarity. Use this time to engage in offline activities and connect with the present moment.",
    category: "Self-Care and Confidence",
    frequency: "Monthly",
    skillIndexes: [12], // Mental Clarity Master
    statsIndexes: [5, 6, 9, 11],
  },
  {
    id: 100,
    tip: "Love yourself",
    description:
      "Practice self-love and acceptance to boost your confidence and well-being. Loving yourself is the foundation of a positive self-image and a fulfilling life.",
    category: "Self-Care and Confidence",
    frequency: "Monthly",
    skillIndexes: [11, 12, 13], // Mental Clarity Master
    statsIndexes: [5, 6, 9, 10, 11],
  },
];
