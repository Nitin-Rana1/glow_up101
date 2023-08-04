type Categories =
  | "Fashion and Style"
  | "Fitness and Health"
  | "Skincare and Grooming"
  | "Self-Care and Confidence"
  | "Health and Nutrition";

type Frequency = "Daily" | "Weekly" | "Monthly";
// type Skill =
interface Tip {
  tip: string;
  category: Categories;
  description: string;
  frequency: Frequency;
  shownInTipOfDay: Boolean;
}
// skillsAssociated: Skill[];
