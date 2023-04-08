import { atom } from "recoil";

export default atom({
  key: "PostGuidances",
  default: [
    {
      title: "No friend code posts",
      enabled: true,
      phrases: ["friend code", "dodo code"],
      application: "both",
      message: "Friend codes should be posted to r/AnimalCrossingTogether.",
      action: "block",
      logic: "isIncluded",
    },
    {
      title: "Fan art only on sunday",
      enabled: true,
      phrases: ["artwork"],
      application: "title",
      message: "Please remember: Fan art is only allowed on Sunday.",
      action: "inform",
      logic: "isIncluded",
    },
    {
      title: 'Title has to include "Hello"',
      enabled: true,
      phrases: ["hello", "hi", "ahoy"],
      application: "title",
      message:
        "All titles must include a welcoming phrase (hello, hi, ahoy, etc.)",
      action: "block",
      logic: "isMissing",
    },
    {
      title: "No talkin' 'bout spoopy stuffs",
      enabled: true,
      phrases: ["bugs", "spiders", "snakes"],
      application: "both",
      message:
        "Pls don't talk about spoopy things like {caught_phrases}. This is a happy space 😊.",
      action: "block",
      logic: "isIncluded",
    },
    {
      title: "Flag posts that talk about Jacob",
      enabled: true,
      phrases: ["jacob"],
      application: "both",
      message:
        "Posts that discuss Jacob may take a bit longer for our mod team to review. Please give us a few hours. Thanks!",
      action: "flag",
      logic: "isIncluded",
    },
    {
      title: "Body text must include a reference to cheesecake",
      enabled: true,
      phrases: ["cheesecake"],
      application: "body",
      message: 'You must reference "cheesecake" in any body text.',
      action: "block",
      logic: "isMissing",
    },
  ],
});
