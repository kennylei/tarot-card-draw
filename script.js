const tarotCards = [
  {
    name: "The Fool",
    description: "A fresh start, new possibilities, and a leap of faith.",
    element: ["Air", "Inspiration", "Beginnings"],
    good: "Opportunities for fresh starts and creative risk-taking are strong.",
    wrong: "Carelessness or naivety may lead to poor choices if you avoid planning.",
    imageUrl: "card_img/RWS_Tarot_00_Fool.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Fool"
  },
  {
    name: "The Magician",
    description: "Skill, resourcefulness, and manifesting your desires.",
    element: ["Air", "Will", "Manifestation"],
    good: "You have the energy and tools to make things happen.",
    wrong: "Confusion or misuse of power can block your goals.",
    imageUrl: "card_img/RWS_Tarot_01_Magician.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Magician"
  },
  {
    name: "The High Priestess",
    description: "Intuition, inner knowledge, and secrets.",
    element: ["Water", "Intuition", "Mystery"],
    good: "Trust your intuition and slow down to listen inward.",
    wrong: "Ignoring your inner voice may keep answers out of reach.",
    imageUrl: "card_img/RWS_Tarot_02_High_Priestess.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_High_Priestess"
  },
  {
    name: "The Empress",
    description: "Abundance, creativity, and nurturing energy.",
    element: ["Earth", "Growth", "Fertility"],
    good: "A fertile period for growth, comfort, and creativity is available.",
    wrong: "Overindulgence or dependency may drain your resources.",
    imageUrl: "card_img/RWS_Tarot_03_Empress.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Empress"
  },
  {
    name: "The Emperor",
    description: "Structure, authority, and leadership.",
    element: ["Fire", "Authority", "Order"],
    good: "Strong direction and stable foundations are available.",
    wrong: "Rigid control or inflexibility can create tension.",
    imageUrl: "card_img/RWS_Tarot_04_Emperor.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Emperor"
  },
  {
    name: "The Hierophant",
    description: "Tradition, guidance, and shared values.",
    element: ["Earth", "Tradition", "Wisdom"],
    good: "Support comes from trusted systems and communities.",
    wrong: "Blindly following rules may limit your personal growth.",
    imageUrl: "card_img/RWS_Tarot_05_Hierophant.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Hierophant"
  },
  {
    name: "The Lovers",
    description: "Choice, harmony, and meaningful partnerships.",
    element: ["Air", "Connection", "Decision"],
    good: "Strong harmony and meaningful choices are possible now.",
    wrong: "A poor choice or lack of honesty can create tension.",
    imageUrl: "card_img/RWS_Tarot_06_Lovers.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Lovers"
  },
  {
    name: "The Chariot",
    description: "Determination, movement, and willpower.",
    element: ["Water", "Drive", "Victory"],
    good: "Progress is possible with focus and discipline.",
    wrong: "Losing control or scattered energy can stall momentum.",
    imageUrl: "card_img/RWS_Tarot_07_Chariot.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Chariot"
  },
  {
    name: "Strength",
    description: "Courage, compassion, and inner power.",
    element: ["Fire", "Courage", "Fortitude"],
    good: "Confidence and gentle strength help you overcome obstacles.",
    wrong: "Self-doubt or impatience may undermine your resolve.",
    imageUrl: "card_img/RWS_Tarot_08_Strength.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Strength"
  },
  {
    name: "The Hermit",
    description: "Reflection, solitude, and inner guidance.",
    element: ["Earth", "Solitude", "Insight"],
    good: "A good time for quiet learning and self-discovery.",
    wrong: "Withdrawing too much may isolate you from support.",
    imageUrl: "card_img/RWS_Tarot_09_Hermit.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Hermit"
  },
  {
    name: "Wheel of Fortune",
    description: "Cycles, change, and destiny.",
    element: ["Fire", "Change", "Luck"],
    good: "A shift of fortune is coming \u2014 embrace the flow.",
    wrong: "Resisting change can keep you stuck in a repeat pattern.",
    imageUrl: "card_img/RWS_Tarot_10_Wheel_of_Fortune.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Wheel_of_Fortune"
  },
  {
    name: "Justice",
    description: "Balance, fairness, and clarity.",
    element: ["Air", "Truth", "Justice"],
    good: "Truth and fair outcomes are likely to emerge.",
    wrong: "Avoiding accountability can lead to unfair results.",
    imageUrl: "card_img/RWS_Tarot_11_Justice.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Justice"
  },
  {
    name: "The Hanged Man",
    description: "Pause, surrender, and new perspective.",
    element: ["Water", "Surrender", "Perspective"],
    good: "A fresh view brings insight and acceptance.",
    wrong: "Refusing to let go can keep you trapped in old habits.",
    imageUrl: "card_img/RWS_Tarot_12_Hanged_Man.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Hanged_Man"
  },
  {
    name: "Death",
    description: "Transformation, endings, and new beginnings.",
    element: ["Water", "Transformation", "Release"],
    good: "A necessary ending clears way for powerful renewal.",
    wrong: "Clinging to the past may delay the next chapter.",
    imageUrl: "card_img/RWS_Tarot_13_Death.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Death"
  },
  {
    name: "Temperance",
    description: "Balance, moderation, and healing.",
    element: ["Fire", "Balance", "Healing"],
    good: "Harmony is restored through patience and blending.",
    wrong: "Extreme behavior or imbalance can create stress.",
    imageUrl: "card_img/RWS_Tarot_14_Temperance.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Temperance"
  },
  {
    name: "The Devil",
    description: "Temptation, attachments, and shadow work.",
    element: ["Earth", "Attachment", "Shadow"],
    good: "A chance to face what holds you back and reclaim control.",
    wrong: "Giving in to fear or addiction can keep you chained.",
    imageUrl: "card_img/RWS_Tarot_15_Devil.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Devil"
  },
  {
    name: "The Tower",
    description: "Upheaval, revelation, and liberation.",
    element: ["Fire", "Change", "Breakthrough"],
    good: "A sudden break can clear the way for honest growth.",
    wrong: "Resisting change may make the disruption harsher.",
    imageUrl: "card_img/RWS_Tarot_16_Tower.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Tower"
  },
  {
    name: "The Star",
    description: "Hope, inspiration, and renewal.",
    element: ["Air", "Hope", "Guidance"],
    good: "Healing energy and optimism are flowing in.",
    wrong: "Pessimism or lack of faith may dim your vision.",
    imageUrl: "card_img/RWS_Tarot_17_Star.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Star"
  },
  {
    name: "The Moon",
    description: "Intuition, dreams, and uncertainty.",
    element: ["Water", "Intuition", "Mystery"],
    good: "Trust your instincts and explore hidden emotions.",
    wrong: "Confusion or fear of the unknown may lead to doubt.",
    imageUrl: "card_img/RWS_Tarot_18_Moon.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Moon"
  },
  {
    name: "The Sun",
    description: "Joy, clarity, and success.",
    element: ["Fire", "Joy", "Vitality"],
    good: "Good fortune, confidence, and vitality shine bright.",
    wrong: "Taking success for granted may cost you future momentum.",
    imageUrl: "card_img/RWS_Tarot_19_Sun.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Sun"
  },
  {
    name: "Judgement",
    description: "Awakening, calling, and renewal.",
    element: ["Fire", "Judgement", "Renewal"],
    good: "A new phase arrives through honest self-reflection.",
    wrong: "Ignoring your inner calling may delay transformation.",
    imageUrl: "card_img/RWS_Tarot_20_Judgement.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Judgement"
  },
  {
    name: "The World",
    description: "Completion, achievement, and wholeness.",
    element: ["Earth", "Completion", "Success"],
    good: "A rewarding cycle closes with accomplishment.",
    wrong: "Refusing to celebrate your progress can blunt your joy.",
    imageUrl: "card_img/RWS_Tarot_21_World.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_World"
  },
  {
    name: "Ace of Cups",
    description: "A new beginning full of emotional opportunity. in the suit of Cups.",
    element: ["Water", "Cups", "Ace"],
    good: "A strong beginning that invites new feelings and ideas.",
    wrong: "Fear of the unknown may keep you from trying.",
    imageUrl: "card_img/Cups01.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Ace_of_Cups"
  },
  {
    name: "Two of Cups",
    description: "Balance, partnership, and mutual choices. in the suit of Cups.",
    element: ["Water", "Cups", "Two"],
    good: "Supportive connections and meaningful cooperation are possible.",
    wrong: "Avoidance or imbalance can disrupt partnership.",
    imageUrl: "card_img/Cups02.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Two_of_Cups"
  },
  {
    name: "Three of Cups",
    description: "Growth through collaboration and celebration. in the suit of Cups.",
    element: ["Water", "Cups", "Three"],
    good: "Progress grows from teamwork and shared vision.",
    wrong: "Lack of follow-through may stall the best plans.",
    imageUrl: "card_img/Cups03.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Three_of_Cups"
  },
  {
    name: "Four of Cups",
    description: "Stability, rest, and a strong foundation. in the suit of Cups.",
    element: ["Water", "Cups", "Four"],
    good: "A solid pause strengthens your resilience and readiness.",
    wrong: "Stubbornness or routine may block new opportunity.",
    imageUrl: "card_img/Cups04.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Four_of_Cups"
  },
  {
    name: "Five of Cups",
    description: "Challenge, change, and adaptation. in the suit of Cups.",
    element: ["Water", "Cups", "Five"],
    good: "Challenges teach important lessons and resilience.",
    wrong: "Resistance to change can deepen discomfort.",
    imageUrl: "card_img/Cups05.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Five_of_Cups"
  },
  {
    name: "Six of Cups",
    description: "Harmony, healing, and gentle progress. in the suit of Cups.",
    element: ["Water", "Cups", "Six"],
    good: "Healing energy brings comfort and renewed strength.",
    wrong: "Holding on too tightly can delay recovery.",
    imageUrl: "card_img/Cups06.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Six_of_Cups"
  },
  {
    name: "Seven of Cups",
    description: "Resilience, faith, and careful strategy. in the suit of Cups.",
    element: ["Water", "Cups", "Seven"],
    good: "Trust your instincts and remain patient for reward.",
    wrong: "Doubt or distraction may cloud your progress.",
    imageUrl: "card_img/Cups07.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Seven_of_Cups"
  },
  {
    name: "Eight of Cups",
    description: "Movement, action, and steady energy. in the suit of Cups.",
    element: ["Water", "Cups", "Eight"],
    good: "Focused effort moves you steadily toward your goal.",
    wrong: "Rushing without a plan can lead to mistakes.",
    imageUrl: "card_img/Cups08.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Eight_of_Cups"
  },
  {
    name: "Nine of Cups",
    description: "Completion, reflection, and final effort. in the suit of Cups.",
    element: ["Water", "Cups", "Nine"],
    good: "Completion is near if you keep your commitment.",
    wrong: "Fear of completion can prevent success.",
    imageUrl: "card_img/Cups09.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Nine_of_Cups"
  },
  {
    name: "Ten of Cups",
    description: "Fulfillment, transformation, and release. in the suit of Cups.",
    element: ["Water", "Cups", "Ten"],
    good: "A chapter closes with abundant reward and release.",
    wrong: "Refusal to let go may make release harder.",
    imageUrl: "card_img/Cups10.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Ten_of_Cups"
  },
  {
    name: "Page of Cups",
    description: "Curiosity, messages, and fresh starts. in the suit of Cups.",
    element: ["Water", "Cups", "Page"],
    good: "Open yourself to new ideas and learning.",
    wrong: "Immaturity or distraction can steal momentum.",
    imageUrl: "card_img/Cups11.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Page_of_Cups"
  },
  {
    name: "Knight of Cups",
    description: "Drive, pursuit, and bold commitment. in the suit of Cups.",
    element: ["Water", "Cups", "Knight"],
    good: "Take bold action with confidence and clarity.",
    wrong: "Impulsiveness may create unnecessary conflict.",
    imageUrl: "card_img/Cups12.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Knight_of_Cups"
  },
  {
    name: "Queen of Cups",
    description: "Nurturing authority and emotional maturity. in the suit of Cups.",
    element: ["Water", "Cups", "Queen"],
    good: "Lead with compassion, wisdom, and emotional intelligence.",
    wrong: "Overprotectiveness can keep you from growing.",
    imageUrl: "card_img/Cups13.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Queen_of_Cups"
  },
  {
    name: "King of Cups",
    description: "Mastery, stability, and command. in the suit of Cups.",
    element: ["Water", "Cups", "King"],
    good: "Use your power responsibly and with purpose.",
    wrong: "Arrogance or control may alienate others.",
    imageUrl: "card_img/Cups14.jpg",
    imageLink: "https://en.wikipedia.org/wiki/King_of_Cups"
  },
  {
    name: "Ace of Pentacles",
    description: "A new beginning full of emotional opportunity. in the suit of Pentacles.",
    element: ["Earth", "Pentacles", "Ace"],
    good: "A strong beginning that invites new feelings and ideas.",
    wrong: "Fear of the unknown may keep you from trying.",
    imageUrl: "card_img/Pents01.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Ace_of_Pentacles"
  },
  {
    name: "Two of Pentacles",
    description: "Balance, partnership, and mutual choices. in the suit of Pentacles.",
    element: ["Earth", "Pentacles", "Two"],
    good: "Supportive connections and meaningful cooperation are possible.",
    wrong: "Avoidance or imbalance can disrupt partnership.",
    imageUrl: "card_img/Pents02.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Two_of_Pentacles"
  },
  {
    name: "Three of Pentacles",
    description: "Growth through collaboration and celebration. in the suit of Pentacles.",
    element: ["Earth", "Pentacles", "Three"],
    good: "Progress grows from teamwork and shared vision.",
    wrong: "Lack of follow-through may stall the best plans.",
    imageUrl: "card_img/Pents03.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Three_of_Pentacles"
  },
  {
    name: "Four of Pentacles",
    description: "Stability, rest, and a strong foundation. in the suit of Pentacles.",
    element: ["Earth", "Pentacles", "Four"],
    good: "A solid pause strengthens your resilience and readiness.",
    wrong: "Stubbornness or routine may block new opportunity.",
    imageUrl: "card_img/Pents04.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Four_of_Pentacles"
  },
  {
    name: "Five of Pentacles",
    description: "Challenge, change, and adaptation. in the suit of Pentacles.",
    element: ["Earth", "Pentacles", "Five"],
    good: "Challenges teach important lessons and resilience.",
    wrong: "Resistance to change can deepen discomfort.",
    imageUrl: "card_img/Pents05.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Five_of_Pentacles"
  },
  {
    name: "Six of Pentacles",
    description: "Harmony, healing, and gentle progress. in the suit of Pentacles.",
    element: ["Earth", "Pentacles", "Six"],
    good: "Healing energy brings comfort and renewed strength.",
    wrong: "Holding on too tightly can delay recovery.",
    imageUrl: "card_img/Pents06.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Six_of_Pentacles"
  },
  {
    name: "Seven of Pentacles",
    description: "Resilience, faith, and careful strategy. in the suit of Pentacles.",
    element: ["Earth", "Pentacles", "Seven"],
    good: "Trust your instincts and remain patient for reward.",
    wrong: "Doubt or distraction may cloud your progress.",
    imageUrl: "card_img/Pents07.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Seven_of_Pentacles"
  },
  {
    name: "Eight of Pentacles",
    description: "Movement, action, and steady energy. in the suit of Pentacles.",
    element: ["Earth", "Pentacles", "Eight"],
    good: "Focused effort moves you steadily toward your goal.",
    wrong: "Rushing without a plan can lead to mistakes.",
    imageUrl: "card_img/Pents08.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Eight_of_Pentacles"
  },
  {
    name: "Nine of Pentacles",
    description: "Completion, reflection, and final effort. in the suit of Pentacles.",
    element: ["Earth", "Pentacles", "Nine"],
    good: "Completion is near if you keep your commitment.",
    wrong: "Fear of completion can prevent success.",
    imageUrl: "card_img/Pents09.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Nine_of_Pentacles"
  },
  {
    name: "Ten of Pentacles",
    description: "Fulfillment, transformation, and release. in the suit of Pentacles.",
    element: ["Earth", "Pentacles", "Ten"],
    good: "A chapter closes with abundant reward and release.",
    wrong: "Refusal to let go may make release harder.",
    imageUrl: "card_img/Pents10.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Ten_of_Pentacles"
  },
  {
    name: "Page of Pentacles",
    description: "Curiosity, messages, and fresh starts. in the suit of Pentacles.",
    element: ["Earth", "Pentacles", "Page"],
    good: "Open yourself to new ideas and learning.",
    wrong: "Immaturity or distraction can steal momentum.",
    imageUrl: "card_img/Pents11.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Page_of_Pentacles"
  },
  {
    name: "Knight of Pentacles",
    description: "Drive, pursuit, and bold commitment. in the suit of Pentacles.",
    element: ["Earth", "Pentacles", "Knight"],
    good: "Take bold action with confidence and clarity.",
    wrong: "Impulsiveness may create unnecessary conflict.",
    imageUrl: "card_img/Pents12.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Knight_of_Pentacles"
  },
  {
    name: "Queen of Pentacles",
    description: "Nurturing authority and emotional maturity. in the suit of Pentacles.",
    element: ["Earth", "Pentacles", "Queen"],
    good: "Lead with compassion, wisdom, and emotional intelligence.",
    wrong: "Overprotectiveness can keep you from growing.",
    imageUrl: "card_img/Pents13.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Queen_of_Pentacles"
  },
  {
    name: "King of Pentacles",
    description: "Mastery, stability, and command. in the suit of Pentacles.",
    element: ["Earth", "Pentacles", "King"],
    good: "Use your power responsibly and with purpose.",
    wrong: "Arrogance or control may alienate others.",
    imageUrl: "card_img/Pents14.jpg",
    imageLink: "https://en.wikipedia.org/wiki/King_of_Pentacles"
  },
  {
    name: "Ace of Swords",
    description: "A new beginning full of emotional opportunity. in the suit of Swords.",
    element: ["Air", "Swords", "Ace"],
    good: "A strong beginning that invites new feelings and ideas.",
    wrong: "Fear of the unknown may keep you from trying.",
    imageUrl: "card_img/Swords01.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Ace_of_Swords"
  },
  {
    name: "Two of Swords",
    description: "Balance, partnership, and mutual choices. in the suit of Swords.",
    element: ["Air", "Swords", "Two"],
    good: "Supportive connections and meaningful cooperation are possible.",
    wrong: "Avoidance or imbalance can disrupt partnership.",
    imageUrl: "card_img/Swords02.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Two_of_Swords"
  },
  {
    name: "Three of Swords",
    description: "Growth through collaboration and celebration. in the suit of Swords.",
    element: ["Air", "Swords", "Three"],
    good: "Progress grows from teamwork and shared vision.",
    wrong: "Lack of follow-through may stall the best plans.",
    imageUrl: "card_img/Swords03.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Three_of_Swords"
  },
  {
    name: "Four of Swords",
    description: "Stability, rest, and a strong foundation. in the suit of Swords.",
    element: ["Air", "Swords", "Four"],
    good: "A solid pause strengthens your resilience and readiness.",
    wrong: "Stubbornness or routine may block new opportunity.",
    imageUrl: "card_img/Swords04.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Four_of_Swords"
  },
  {
    name: "Five of Swords",
    description: "Challenge, change, and adaptation. in the suit of Swords.",
    element: ["Air", "Swords", "Five"],
    good: "Challenges teach important lessons and resilience.",
    wrong: "Resistance to change can deepen discomfort.",
    imageUrl: "card_img/Swords05.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Five_of_Swords"
  },
  {
    name: "Six of Swords",
    description: "Harmony, healing, and gentle progress. in the suit of Swords.",
    element: ["Air", "Swords", "Six"],
    good: "Healing energy brings comfort and renewed strength.",
    wrong: "Holding on too tightly can delay recovery.",
    imageUrl: "card_img/Swords06.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Six_of_Swords"
  },
  {
    name: "Seven of Swords",
    description: "Resilience, faith, and careful strategy. in the suit of Swords.",
    element: ["Air", "Swords", "Seven"],
    good: "Trust your instincts and remain patient for reward.",
    wrong: "Doubt or distraction may cloud your progress.",
    imageUrl: "card_img/Swords07.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Seven_of_Swords"
  },
  {
    name: "Eight of Swords",
    description: "Movement, action, and steady energy. in the suit of Swords.",
    element: ["Air", "Swords", "Eight"],
    good: "Focused effort moves you steadily toward your goal.",
    wrong: "Rushing without a plan can lead to mistakes.",
    imageUrl: "card_img/Swords08.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Eight_of_Swords"
  },
  {
    name: "Nine of Swords",
    description: "Completion, reflection, and final effort. in the suit of Swords.",
    element: ["Air", "Swords", "Nine"],
    good: "Completion is near if you keep your commitment.",
    wrong: "Fear of completion can prevent success.",
    imageUrl: "card_img/Swords09.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Nine_of_Swords"
  },
  {
    name: "Ten of Swords",
    description: "Fulfillment, transformation, and release. in the suit of Swords.",
    element: ["Air", "Swords", "Ten"],
    good: "A chapter closes with abundant reward and release.",
    wrong: "Refusal to let go may make release harder.",
    imageUrl: "card_img/Swords10.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Ten_of_Swords"
  },
  {
    name: "Page of Swords",
    description: "Curiosity, messages, and fresh starts. in the suit of Swords.",
    element: ["Air", "Swords", "Page"],
    good: "Open yourself to new ideas and learning.",
    wrong: "Immaturity or distraction can steal momentum.",
    imageUrl: "card_img/Swords11.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Page_of_Swords"
  },
  {
    name: "Knight of Swords",
    description: "Drive, pursuit, and bold commitment. in the suit of Swords.",
    element: ["Air", "Swords", "Knight"],
    good: "Take bold action with confidence and clarity.",
    wrong: "Impulsiveness may create unnecessary conflict.",
    imageUrl: "card_img/Swords12.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Knight_of_Swords"
  },
  {
    name: "Queen of Swords",
    description: "Nurturing authority and emotional maturity. in the suit of Swords.",
    element: ["Air", "Swords", "Queen"],
    good: "Lead with compassion, wisdom, and emotional intelligence.",
    wrong: "Overprotectiveness can keep you from growing.",
    imageUrl: "card_img/Swords13.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Queen_of_Swords"
  },
  {
    name: "King of Swords",
    description: "Mastery, stability, and command. in the suit of Swords.",
    element: ["Air", "Swords", "King"],
    good: "Use your power responsibly and with purpose.",
    wrong: "Arrogance or control may alienate others.",
    imageUrl: "card_img/Swords14.jpg",
    imageLink: "https://en.wikipedia.org/wiki/King_of_Swords"
  },
  {
    name: "Ace of Wands",
    description: "A new beginning full of emotional opportunity. in the suit of Wands.",
    element: ["Fire", "Wands", "Ace"],
    good: "A strong beginning that invites new feelings and ideas.",
    wrong: "Fear of the unknown may keep you from trying.",
    imageUrl: "card_img/Wands01.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Ace_of_Wands"
  },
  {
    name: "Two of Wands",
    description: "Balance, partnership, and mutual choices. in the suit of Wands.",
    element: ["Fire", "Wands", "Two"],
    good: "Supportive connections and meaningful cooperation are possible.",
    wrong: "Avoidance or imbalance can disrupt partnership.",
    imageUrl: "card_img/Wands02.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Two_of_Wands"
  },
  {
    name: "Three of Wands",
    description: "Growth through collaboration and celebration. in the suit of Wands.",
    element: ["Fire", "Wands", "Three"],
    good: "Progress grows from teamwork and shared vision.",
    wrong: "Lack of follow-through may stall the best plans.",
    imageUrl: "card_img/Wands03.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Three_of_Wands"
  },
  {
    name: "Four of Wands",
    description: "Stability, rest, and a strong foundation. in the suit of Wands.",
    element: ["Fire", "Wands", "Four"],
    good: "A solid pause strengthens your resilience and readiness.",
    wrong: "Stubbornness or routine may block new opportunity.",
    imageUrl: "card_img/Wands04.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Four_of_Wands"
  },
  {
    name: "Five of Wands",
    description: "Challenge, change, and adaptation. in the suit of Wands.",
    element: ["Fire", "Wands", "Five"],
    good: "Challenges teach important lessons and resilience.",
    wrong: "Resistance to change can deepen discomfort.",
    imageUrl: "card_img/Wands05.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Five_of_Wands"
  },
  {
    name: "Six of Wands",
    description: "Harmony, healing, and gentle progress. in the suit of Wands.",
    element: ["Fire", "Wands", "Six"],
    good: "Healing energy brings comfort and renewed strength.",
    wrong: "Holding on too tightly can delay recovery.",
    imageUrl: "card_img/Wands06.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Six_of_Wands"
  },
  {
    name: "Seven of Wands",
    description: "Resilience, faith, and careful strategy. in the suit of Wands.",
    element: ["Fire", "Wands", "Seven"],
    good: "Trust your instincts and remain patient for reward.",
    wrong: "Doubt or distraction may cloud your progress.",
    imageUrl: "card_img/Wands07.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Seven_of_Wands"
  },
  {
    name: "Eight of Wands",
    description: "Movement, action, and steady energy. in the suit of Wands.",
    element: ["Fire", "Wands", "Eight"],
    good: "Focused effort moves you steadily toward your goal.",
    wrong: "Rushing without a plan can lead to mistakes.",
    imageUrl: "card_img/Wands08.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Eight_of_Wands"
  },
  {
    name: "Nine of Wands",
    description: "Completion, reflection, and final effort. in the suit of Wands.",
    element: ["Fire", "Wands", "Nine"],
    good: "Completion is near if you keep your commitment.",
    wrong: "Fear of completion can prevent success.",
    imageUrl: "card_img/Wands09.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Nine_of_Wands"
  },
  {
    name: "Ten of Wands",
    description: "Fulfillment, transformation, and release. in the suit of Wands.",
    element: ["Fire", "Wands", "Ten"],
    good: "A chapter closes with abundant reward and release.",
    wrong: "Refusal to let go may make release harder.",
    imageUrl: "card_img/Wands10.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Ten_of_Wands"
  },
  {
    name: "Page of Wands",
    description: "Curiosity, messages, and fresh starts. in the suit of Wands.",
    element: ["Fire", "Wands", "Page"],
    good: "Open yourself to new ideas and learning.",
    wrong: "Immaturity or distraction can steal momentum.",
    imageUrl: "card_img/Wands11.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Page_of_Wands"
  },
  {
    name: "Knight of Wands",
    description: "Drive, pursuit, and bold commitment. in the suit of Wands.",
    element: ["Fire", "Wands", "Knight"],
    good: "Take bold action with confidence and clarity.",
    wrong: "Impulsiveness may create unnecessary conflict.",
    imageUrl: "card_img/Wands12.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Knight_of_Wands"
  },
  {
    name: "Queen of Wands",
    description: "Nurturing authority and emotional maturity. in the suit of Wands.",
    element: ["Fire", "Wands", "Queen"],
    good: "Lead with compassion, wisdom, and emotional intelligence.",
    wrong: "Overprotectiveness can keep you from growing.",
    imageUrl: "card_img/Wands13.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Queen_of_Wands"
  },
  {
    name: "King of Wands",
    description: "Mastery, stability, and command. in the suit of Wands.",
    element: ["Fire", "Wands", "King"],
    good: "Use your power responsibly and with purpose.",
    wrong: "Arrogance or control may alienate others.",
    imageUrl: "card_img/Wands14.jpg",
    imageLink: "https://en.wikipedia.org/wiki/King_of_Wands"
  },
];

const drawButton = document.getElementById('drawButton');
const drawThreeButton = document.getElementById('drawThreeButton');
const viewGalleryButton = document.getElementById('viewGalleryButton');
const backFromCardButton = document.getElementById('backFromCardButton');
const backFromThreeButton = document.getElementById('backFromThreeButton');
const gallerySection = document.getElementById('gallery');
const cardGallery = document.getElementById('cardGallery');
const resultSection = document.getElementById('result');
const singleCardContainer = document.getElementById('singleCardContainer');
const threeCardsContainer = document.getElementById('threeCardsContainer');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const cardImage = document.getElementById('cardImage');
const cardLink = document.getElementById('cardLink');
const cardName = document.getElementById('cardName');
const cardDescription = document.getElementById('cardDescription');
const cardElement = document.getElementById('cardElement');
const cardGood = document.getElementById('cardGood');
const cardWrong = document.getElementById('cardWrong');

function getRandomCard() {
  const index = Math.floor(Math.random() * tarotCards.length);
  return tarotCards[index];
}

function showGallery() {
  gallerySection.classList.remove('hidden');
  resultSection.classList.add('hidden');
}

function showDrawMode() {
  gallerySection.classList.add('hidden');
  resultSection.classList.add('hidden');
}

function createGallery() {
  cardGallery.innerHTML = '';

  tarotCards.forEach((card) => {
    const cardButton = document.createElement('button');
    cardButton.type = 'button';
    cardButton.className = 'gallery-card';
    cardButton.addEventListener('click', () => {
      showCard(card);
      gallerySection.classList.remove('hidden');
      resultSection.classList.remove('hidden');
      window.scrollTo({ top: resultSection.offsetTop - 20, behavior: 'smooth' });
    });

    cardButton.innerHTML = `
      <img src="${card.imageUrl}" alt="${card.name}">
      <p>${card.name}</p>
    `;

    cardGallery.appendChild(cardButton);
  });
}

function showCard(card) {
  cardImage.src = card.imageUrl;
  cardImage.alt = `Tarot card image for ${card.name}`;
  cardLink.href = card.imageLink;
  cardName.textContent = card.name;
  cardDescription.textContent = card.description;
  cardGood.textContent = card.good;
  cardWrong.textContent = card.wrong;

  cardElement.innerHTML = '';
  card.element.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    cardElement.appendChild(li);
  });

  resultSection.classList.remove('hidden');
  singleCardContainer.classList.remove('hidden');
  threeCardsContainer.classList.add('hidden');
}

function showThreeCards(cards) {
  resultSection.classList.remove('hidden');
  const cardContainers = [card1, card2, card3];
  cards.forEach((card, index) => {
    const container = cardContainers[index];
    container.innerHTML = `
      <img src="${card.imageUrl}" alt="${card.name}">
      <h3>${card.name}</h3>
      <p>${card.description}</p>
    `;
  });

  singleCardContainer.classList.add('hidden');
  threeCardsContainer.classList.remove('hidden');
}

function drawCard() {
  const card = getRandomCard();
  showDrawMode();
  showCard(card);
}

function drawThreeCards() {
  const cards = [];
  for (let i = 0; i < 3; i++) {
    cards.push(getRandomCard());
  }
  showDrawMode();
  showThreeCards(cards);
}

drawButton.addEventListener('click', drawCard);
drawThreeButton.addEventListener('click', drawThreeCards);
viewGalleryButton.addEventListener('click', showGallery);
backFromCardButton.addEventListener('click', showDrawMode);
backFromThreeButton.addEventListener('click', showDrawMode);

createGallery();
