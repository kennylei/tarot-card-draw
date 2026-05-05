const tarotCards = [
  {
    name: "The Fool",
    description: "A fresh start, new possibilities, and a leap of faith.",
    element: ["Spirit", "Freedom", "Beginnings"],
    good: {
      "Work & Career": "Embrace new opportunities and creative projects with confidence.",
      "Relationships": "Open your heart to new connections and spontaneous adventures.",
      "Family & Home": "Bring fresh energy and joy to your living space.",
      "Health & Vitality": "Trust your body's natural healing and renewal processes."
    },
    wrong: {
      "Work & Career": "Avoid reckless decisions that could jeopardize your professional stability.",
      "Relationships": "Don't ignore red flags or rush into commitments without thought.",
      "Family & Home": "Be mindful of safety and practical considerations in your environment.",
      "Health & Vitality": "Take calculated risks rather than ignoring your physical well-being."
    },
    imageUrl: "card_img/RWS_Tarot_00_Fool.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Fool"
  },
  {
    name: "The Magician",
    description: "Skill, resourcefulness, and manifesting your desires.",
    element: ["All Elements", "Will", "Manifestation"],
    good: {
      "Work & Career": "You have all the tools and skills needed to achieve your professional goals.",
      "Relationships": "Communicate your intentions clearly and use your charisma to connect.",
      "Family & Home": "Transform your living space with creative organization and energy.",
      "Health & Vitality": "Focus your mental energy on healing and maintaining balance."
    },
    wrong: {
      "Work & Career": "Don't manipulate situations or use your skills for unethical gain.",
      "Relationships": "Avoid using charm to deceive or control others.",
      "Family & Home": "Don't neglect practical responsibilities in favor of showy changes.",
      "Health & Vitality": "Be careful not to overwork your mind at the expense of rest."
    },
    imageUrl: "card_img/RWS_Tarot_01_Magician.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Magician"
  },
  {
    name: "The High Priestess",
    description: "Intuition, inner knowledge, and secrets.",
    element: ["Water", "Intuition", "Subconscious"],
    good: {
      "Work & Career": "Trust your instincts about professional opportunities and timing.",
      "Relationships": "Listen to your inner voice about relationship dynamics and trust.",
      "Family & Home": "Create sacred, peaceful spaces that honor your inner wisdom.",
      "Health & Vitality": "Pay attention to subtle body signals and emotional health cues."
    },
    wrong: {
      "Work & Career": "Don't dismiss your intuition in favor of purely logical decisions.",
      "Relationships": "Avoid ignoring red flags that your subconscious is signaling.",
      "Family & Home": "Don't let secrets or unspoken issues create tension in your space.",
      "Health & Vitality": "Listen to your body's wisdom rather than pushing through discomfort."
    },
    imageUrl: "card_img/RWS_Tarot_02_High_Priestess.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_High_Priestess"
  },
  {
    name: "The Empress",
    description: "Abundance, creativity, and nurturing energy.",
    element: ["Earth", "Nurturing", "Abundance"],
    good: {
      "Work & Career": "Nurture creative projects and find abundance in your professional endeavors.",
      "Relationships": "Foster deep emotional connections and mutual care in partnerships.",
      "Family & Home": "Create a nurturing environment filled with love and comfort.",
      "Health & Vitality": "Embrace self-care and listen to your body's nurturing needs."
    },
    wrong: {
      "Work & Career": "Avoid over-giving without boundaries in professional relationships.",
      "Relationships": "Don't neglect your own needs while caring for others.",
      "Family & Home": "Be mindful not to smother loved ones with excessive care.",
      "Health & Vitality": "Don't ignore signs of burnout from constant nurturing."
    },
    imageUrl: "card_img/RWS_Tarot_03_Empress.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Empress"
  },
  {
    name: "The Emperor",
    description: "Structure, authority, and leadership.",
    element: ["Fire", "Authority", "Structure"],
    good: {
      "Work & Career": "Establish strong leadership and create stable professional foundations.",
      "Relationships": "Provide security and structure in partnerships with clear boundaries.",
      "Family & Home": "Build a stable, protective environment for loved ones.",
      "Health & Vitality": "Develop disciplined routines that support long-term well-being."
    },
    wrong: {
      "Work & Career": "Avoid becoming overly rigid or authoritarian in professional settings.",
      "Relationships": "Don't dominate partnerships or ignore emotional needs for control.",
      "Family & Home": "Be careful not to create an environment that's too restrictive.",
      "Health & Vitality": "Don't push through physical limits with excessive discipline."
    },
    imageUrl: "card_img/RWS_Tarot_04_Emperor.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Emperor"
  },
  {
    name: "The Hierophant",
    description: "Tradition, guidance, and shared values.",
    element: ["Earth", "Tradition", "Spiritual Wisdom"],
    good: {
      "Work & Career": "Seek mentorship and follow established professional paths to success.",
      "Relationships": "Build connections based on shared values and spiritual growth.",
      "Family & Home": "Honor family traditions and create meaningful rituals together.",
      "Health & Vitality": "Follow time-tested wellness practices and seek expert guidance."
    },
    wrong: {
      "Work & Career": "Don't blindly follow outdated methods without questioning their relevance.",
      "Relationships": "Avoid forcing traditional expectations on modern relationships.",
      "Family & Home": "Be mindful not to cling to traditions that no longer serve the family.",
      "Health & Vitality": "Don't ignore innovative approaches in favor of only traditional methods."
    },
    imageUrl: "card_img/RWS_Tarot_05_Hierophant.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Hierophant"
  },
  {
    name: "The Lovers",
    description: "Choice, harmony, and meaningful partnerships.",
    element: ["Air", "Connection", "Choice"],
    good: {
      "Work & Career": "Find harmony in collaborative projects and meaningful professional partnerships.",
      "Relationships": "Experience deep connection and make choices that honor love.",
      "Family & Home": "Create loving bonds and harmonious family dynamics.",
      "Health & Vitality": "Balance giving and receiving in relationships that support your well-being."
    },
    wrong: {
      "Work & Career": "Avoid partnerships that compromise your values or create unhealthy dependencies.",
      "Relationships": "Don't make choices based solely on external expectations.",
      "Family & Home": "Be careful not to sacrifice personal boundaries for family harmony.",
      "Health & Vitality": "Don't neglect self-care while focusing on relationship harmony."
    },
    imageUrl: "card_img/RWS_Tarot_06_Lovers.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Lovers"
  },
  {
    name: "The Chariot",
    description: "Determination, movement, and willpower.",
    element: ["Water", "Control", "Victory"],
    good: {
      "Work & Career": "Channel focused determination to overcome professional obstacles.",
      "Relationships": "Navigate relationship challenges with balanced willpower and direction.",
      "Family & Home": "Move forward with family goals through coordinated effort.",
      "Health & Vitality": "Use willpower to establish healthy routines and overcome inertia."
    },
    wrong: {
      "Work & Career": "Avoid forcing progress without considering the bigger picture.",
      "Relationships": "Don't dominate situations or ignore others' needs in your drive.",
      "Family & Home": "Be mindful not to push family members too hard toward goals.",
      "Health & Vitality": "Don't overexert yourself physically or ignore rest needs."
    },
    imageUrl: "card_img/RWS_Tarot_07_Chariot.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Chariot"
  },
  {
    name: "Strength",
    description: "Courage, compassion, and inner power.",
    element: ["Fire", "Courage", "Inner Strength"],
    good: {
      "Work & Career": "Approach challenges with gentle strength and compassionate leadership.",
      "Relationships": "Show courage in vulnerability and strength in forgiveness.",
      "Family & Home": "Create a supportive environment with patient, loving strength.",
      "Health & Vitality": "Build inner resilience and approach healing with gentle power."
    },
    wrong: {
      "Work & Career": "Avoid using force when patience and understanding would serve better.",
      "Relationships": "Don't suppress emotions or avoid difficult conversations.",
      "Family & Home": "Be careful not to enable unhealthy patterns with excessive patience.",
      "Health & Vitality": "Don't push through pain without addressing underlying issues."
    },
    imageUrl: "card_img/RWS_Tarot_08_Strength.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Strength"
  },
  {
    name: "The Hermit",
    description: "Reflection, solitude, and inner guidance.",
    element: ["Earth", "Solitude", "Inner Guidance"],
    good: {
      "Work & Career": "Take time for focused reflection to gain professional clarity.",
      "Relationships": "Use solitude to understand your needs and deepen authentic connections.",
      "Family & Home": "Create peaceful spaces for personal reflection and family wisdom.",
      "Health & Vitality": "Listen to your inner guidance for restorative self-care practices."
    },
    wrong: {
      "Work & Career": "Avoid isolating yourself completely from professional support networks.",
      "Relationships": "Don't withdraw so deeply that you disconnect from loved ones.",
      "Family & Home": "Be mindful not to create emotional distance in your home environment.",
      "Health & Vitality": "Don't neglect social connection in favor of complete solitude."
    },
    imageUrl: "card_img/RWS_Tarot_09_Hermit.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Hermit"
  },
  {
    name: "Wheel of Fortune",
    description: "Cycles, change, and destiny.",
    element: ["Fire", "Cycles", "Destiny"],
    good: {
      "Work & Career": "Embrace career changes and trust in the natural flow of opportunity.",
      "Relationships": "Allow relationships to evolve naturally through life's cycles.",
      "Family & Home": "Welcome positive changes that bring growth to your living situation.",
      "Health & Vitality": "Trust your body's natural cycles and embrace healing changes."
    },
    wrong: {
      "Work & Career": "Don't force changes or resist the natural progression of events.",
      "Relationships": "Avoid clinging to relationships that have run their course.",
      "Family & Home": "Be careful not to disrupt stability unnecessarily during transitions.",
      "Health & Vitality": "Don't ignore warning signs while waiting for things to 'turn around'."
    },
    imageUrl: "card_img/RWS_Tarot_10_Wheel_of_Fortune.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Wheel_of_Fortune"
  },
  {
    name: "Justice",
    description: "Balance, fairness, and clarity.",
    element: ["Air", "Truth", "Balance"],
    good: {
      "Work & Career": "Seek fair outcomes and make decisions based on clear facts.",
      "Relationships": "Practice honesty and fairness in all interactions.",
      "Family & Home": "Create equitable arrangements and resolve conflicts justly.",
      "Health & Vitality": "Balance your lifestyle choices and honor your body's needs."
    },
    wrong: {
      "Work & Career": "Avoid unfair practices or decisions made without full information.",
      "Relationships": "Don't withhold truth or manipulate situations for personal gain.",
      "Family & Home": "Be careful not to impose unfair expectations on family members.",
      "Health & Vitality": "Don't neglect self-care or make imbalanced lifestyle choices."
    },
    imageUrl: "card_img/RWS_Tarot_11_Justice.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Justice"
  },
  {
    name: "The Hanged Man",
    description: "Pause, surrender, and new perspective.",
    element: ["Water", "Surrender", "Perspective"],
    good: {
      "Work & Career": "Take a pause to gain new insights about your professional path.",
      "Relationships": "Surrender control and see relationships from a fresh viewpoint.",
      "Family & Home": "Embrace necessary pauses that bring clarity to family matters.",
      "Health & Vitality": "Allow rest and surrender to your body's need for healing time."
    },
    wrong: {
      "Work & Career": "Don't let indecision or forced pauses stall your progress indefinitely.",
      "Relationships": "Avoid passive-aggressive behavior or emotional withdrawal.",
      "Family & Home": "Be mindful not to neglect responsibilities during periods of reflection.",
      "Health & Vitality": "Don't use 'waiting' as an excuse to avoid necessary action."
    },
    imageUrl: "card_img/RWS_Tarot_12_Hanged_Man.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Hanged_Man"
  },
  {
    name: "Death",
    description: "Transformation, endings, and new beginnings.",
    element: ["Water", "Transformation", "Endings"],
    good: {
      "Work & Career": "Embrace career transformations that lead to renewed purpose.",
      "Relationships": "Allow relationships to evolve or end naturally for growth.",
      "Family & Home": "Welcome changes that create space for new family dynamics.",
      "Health & Vitality": "Release old patterns and embrace transformative healing."
    },
    wrong: {
      "Work & Career": "Don't resist necessary endings that could lead to better opportunities.",
      "Relationships": "Avoid forcing change or clinging to relationships past their time.",
      "Family & Home": "Be careful not to disrupt stability without clear purpose.",
      "Health & Vitality": "Don't ignore serious health changes or delay necessary transformations."
    },
    imageUrl: "card_img/RWS_Tarot_13_Death.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Death"
  },
  {
    name: "Temperance",
    description: "Balance, moderation, and healing.",
    element: ["Fire", "Moderation", "Harmony"],
    good: {
      "Work & Career": "Find balance between effort and rest in your professional life.",
      "Relationships": "Practice moderation and patience in all interactions.",
      "Family & Home": "Create harmonious environments through balanced approaches.",
      "Health & Vitality": "Blend different healing modalities for comprehensive well-being."
    },
    wrong: {
      "Work & Career": "Avoid workaholism or complete disengagement from professional goals.",
      "Relationships": "Don't suppress your needs or over-accommodate others.",
      "Family & Home": "Be careful not to create imbalance by over-focusing on harmony.",
      "Health & Vitality": "Don't neglect serious issues while focusing only on moderation."
    },
    imageUrl: "card_img/RWS_Tarot_14_Temperance.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Temperance"
  },
  {
    name: "The Devil",
    description: "Temptation, attachments, and shadow work.",
    element: ["Earth", "Attachment", "Materialism"],
    good: {
      "Work & Career": "Examine unhealthy work patterns and reclaim your professional power.",
      "Relationships": "Face relationship attachments and break free from toxic dynamics.",
      "Family & Home": "Address shadow aspects that affect your home environment.",
      "Health & Vitality": "Confront self-sabotaging behaviors that impact your well-being."
    },
    wrong: {
      "Work & Career": "Don't ignore addictive work habits or exploitative professional situations.",
      "Relationships": "Avoid staying in abusive or codependent relationships.",
      "Family & Home": "Be careful not to enable destructive family patterns.",
      "Health & Vitality": "Don't continue harmful habits that damage your health."
    },
    imageUrl: "card_img/RWS_Tarot_15_Devil.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Devil"
  },
  {
    name: "The Tower",
    description: "Upheaval, revelation, and liberation.",
    element: ["Fire", "Upheaval", "Revelation"],
    good: {
      "Work & Career": "Sudden changes can clear the way for authentic professional growth.",
      "Relationships": "Revelations bring necessary clarity to relationship dynamics.",
      "Family & Home": "Liberating changes create space for healthier family structures.",
      "Health & Vitality": "Breakthroughs in health understanding lead to better care."
    },
    wrong: {
      "Work & Career": "Don't resist inevitable changes that could improve your situation.",
      "Relationships": "Avoid ignoring warning signs that require immediate action.",
      "Family & Home": "Be careful not to cause unnecessary disruption to family stability.",
      "Health & Vitality": "Don't delay emergency care or ignore critical health warnings."
    },
    imageUrl: "card_img/RWS_Tarot_16_Tower.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Tower"
  },
  {
    name: "The Star",
    description: "Hope, inspiration, and renewal.",
    element: ["Air", "Hope", "Renewal"],
    good: {
      "Work & Career": "Renewed inspiration brings clarity to your professional vision.",
      "Relationships": "Hope and faith strengthen connections and attract positive partnerships.",
      "Family & Home": "Create hopeful, inspiring spaces that nurture family spirit.",
      "Health & Vitality": "Optimism and faith support healing and renewed vitality."
    },
    wrong: {
      "Work & Career": "Don't lose hope during challenging professional periods.",
      "Relationships": "Avoid cynicism that blocks new connections and healing.",
      "Family & Home": "Be careful not to let despair affect your home environment.",
      "Health & Vitality": "Don't give up on healing or neglect positive lifestyle changes."
    },
    imageUrl: "card_img/RWS_Tarot_17_Star.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Star"
  },
  {
    name: "The Moon",
    description: "Intuition, dreams, and uncertainty.",
    element: ["Water", "Illusion", "Subconscious"],
    good: {
      "Work & Career": "Trust your intuition about professional opportunities and hidden factors.",
      "Relationships": "Explore emotional depths and honor intuitive relationship insights.",
      "Family & Home": "Create spaces that honor dreams and intuitive family connections.",
      "Health & Vitality": "Listen to your body's subtle messages and dream guidance."
    },
    wrong: {
      "Work & Career": "Don't ignore red flags or make decisions based on incomplete information.",
      "Relationships": "Avoid confusion or manipulation in relationships.",
      "Family & Home": "Be careful not to let fear or illusion affect family decisions.",
      "Health & Vitality": "Don't dismiss physical symptoms or delay professional medical advice."
    },
    imageUrl: "card_img/RWS_Tarot_18_Moon.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Moon"
  },
  {
    name: "The Sun",
    description: "Joy, clarity, and success.",
    element: ["Fire", "Joy", "Vitality"],
    good: {
      "Work & Career": "Success and recognition shine brightly in your professional endeavors.",
      "Relationships": "Joyful connections and clear communication enhance partnerships.",
      "Family & Home": "Create warm, joyful environments that celebrate family bonds.",
      "Health & Vitality": "Vitality and energy support your overall well-being and healing."
    },
    wrong: {
      "Work & Career": "Don't take success for granted or become complacent in achievements.",
      "Relationships": "Avoid superficial connections that lack depth and authenticity.",
      "Family & Home": "Be careful not to neglect responsibilities in moments of celebration.",
      "Health & Vitality": "Don't overexert yourself or ignore signs of fatigue."
    },
    imageUrl: "card_img/RWS_Tarot_19_Sun.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_Sun"
  },
  {
    name: "Judgement",
    description: "Awakening, calling, and renewal.",
    element: ["Fire", "Awakening", "Rebirth"],
    good: {
      "Work & Career": "A calling emerges that aligns with your true professional purpose.",
      "Relationships": "Renew relationships through honest self-reflection and forgiveness.",
      "Family & Home": "Family awakenings bring healing and renewed connections.",
      "Health & Vitality": "Listen to your body's call for renewal and lifestyle changes."
    },
    wrong: {
      "Work & Career": "Don't ignore your inner calling or stay in unfulfilling professional situations.",
      "Relationships": "Avoid harsh self-judgment or unrealistic expectations of others.",
      "Family & Home": "Be careful not to force change without considering family needs.",
      "Health & Vitality": "Don't delay necessary lifestyle changes or ignore health warnings."
    },
    imageUrl: "card_img/RWS_Tarot_20_Judgement.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Judgement"
  },
  {
    name: "The World",
    description: "Completion, achievement, and wholeness.",
    element: ["All Elements", "Completion", "Integration"],
    good: {
      "Work & Career": "Professional goals are achieved with a sense of completion and wholeness.",
      "Relationships": "Relationships reach fulfilling stages of mutual understanding.",
      "Family & Home": "Family life feels complete and harmonious in the present moment.",
      "Health & Vitality": "Body, mind, and spirit align for optimal well-being."
    },
    wrong: {
      "Work & Career": "Don't rest on laurels or neglect future planning in success.",
      "Relationships": "Avoid complacency that could lead to relationship stagnation.",
      "Family & Home": "Be careful not to take family harmony for granted.",
      "Health & Vitality": "Don't neglect maintenance or preventive care in good health."
    },
    imageUrl: "card_img/RWS_Tarot_21_World.jpg",
    imageLink: "https://en.wikipedia.org/wiki/The_World"
  },
  {
    name: "Ace of Cups",
    description: "A new emotional beginning, open heart, and overflowing intuition.",
    element: ["Water", "Cups", "New Emotion"],
    good: {
      "Work & Career": "New creative opportunities or emotional fulfillment in work.",
      "Relationships": "A new emotional connection or deepening of existing bonds.",
      "Family & Home": "Emotional healing and new beginnings in family relationships.",
      "Health & Vitality": "Emotional healing and improved heart health or energy."
    },
    wrong: {
      "Work & Career": "Don't let emotions cloud professional judgment or opportunities.",
      "Relationships": "Avoid rushing into emotional commitments without clarity.",
      "Family & Home": "Be mindful of emotional overwhelm in family situations.",
      "Health & Vitality": "Don't neglect physical health while focusing on emotional healing."
    },
    imageUrl: "card_img/Cups01.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Ace_of_Cups"
  },
  {
    name: "Two of Cups",
    description: "Partnership, mutual attraction, and heartfelt connection.",
    element: ["Water", "Cups", "Union"],
    good: {
      "Work & Career": "Harmonious collaboration and balanced professional partnerships.",
      "Relationships": "Mutual understanding and emotional balance in relationships.",
      "Family & Home": "Peaceful family dynamics and supportive home environment.",
      "Health & Vitality": "Emotional balance supports physical and mental well-being."
    },
    wrong: {
      "Work & Career": "Avoid unbalanced partnerships or codependent work relationships.",
      "Relationships": "Don't ignore imbalances or lack of reciprocity in connections.",
      "Family & Home": "Be careful of enabling unhealthy family dynamics.",
      "Health & Vitality": "Don't let emotional stress affect physical health."
    },
    imageUrl: "card_img/Cups02.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Two_of_Cups"
  },
  {
    name: "Three of Cups",
    description: "Friendship, celebration, and joyful emotional communion.",
    element: ["Water", "Cups", "Celebration"],
    good: {
      "Work & Career": "Celebrate team achievements and collaborative success.",
      "Relationships": "Joyful social connections and community celebrations.",
      "Family & Home": "Family gatherings and celebrations strengthen bonds.",
      "Health & Vitality": "Social support and celebration boost emotional health."
    },
    wrong: {
      "Work & Career": "Don't let celebrations distract from important work responsibilities.",
      "Relationships": "Avoid superficial socializing that lacks genuine connection.",
      "Family & Home": "Be careful not to overcommit to social obligations.",
      "Health & Vitality": "Don't use celebrations as an excuse to neglect health routines."
    },
    imageUrl: "card_img/Cups03.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Three_of_Cups"
  },
  {
    name: "Four of Cups",
    description: "Withdrawal, contemplation, and the need to notice emotional offers.",
    element: ["Water", "Cups", "Contemplation"],
    good: {
      "Work & Career": "Take time to appreciate current professional stability and blessings.",
      "Relationships": "Find contentment in existing relationships and emotional security.",
      "Family & Home": "Create stable, nurturing home environments.",
      "Health & Vitality": "Emotional stability supports consistent self-care practices."
    },
    wrong: {
      "Work & Career": "Don't become complacent or miss new opportunities in stability.",
      "Relationships": "Avoid emotional withdrawal or ungratefulness in relationships.",
      "Family & Home": "Be careful not to take family support for granted.",
      "Health & Vitality": "Don't neglect health maintenance during stable periods."
    },
    imageUrl: "card_img/Cups04.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Four_of_Cups"
  },
  {
    name: "Five of Cups",
    description: "Loss, regret, and healing through emotional acceptance.",
    element: ["Water", "Cups", "Loss"],
    good: {
      "Work & Career": "Learn from professional disappointments and focus on remaining opportunities.",
      "Relationships": "Process emotional losses and find strength in surviving connections.",
      "Family & Home": "Family challenges teach resilience and deeper bonds.",
      "Health & Vitality": "Emotional healing supports physical recovery and well-being."
    },
    wrong: {
      "Work & Career": "Don't dwell on failures or let disappointment block future success.",
      "Relationships": "Avoid wallowing in grief or neglecting supportive relationships.",
      "Family & Home": "Be careful not to let family conflicts create lasting division.",
      "Health & Vitality": "Don't let emotional pain manifest as physical illness."
    },
    imageUrl: "card_img/Cups05.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Five_of_Cups"
  },
  {
    name: "Six of Cups",
    description: "Nostalgia, healing memories, and sweetness from the past.",
    element: ["Water", "Cups", "Nostalgia"],
    good: {
      "Work & Career": "Nostalgic wisdom brings gentle progress in professional life.",
      "Relationships": "Innocent joy and healing memories strengthen connections.",
      "Family & Home": "Family history and traditions bring comfort and healing.",
      "Health & Vitality": "Gentle healing approaches restore emotional and physical balance."
    },
    wrong: {
      "Work & Career": "Don't let nostalgia prevent embracing current opportunities.",
      "Relationships": "Avoid idealizing the past or neglecting present relationships.",
      "Family & Home": "Be careful not to get stuck in outdated family patterns.",
      "Health & Vitality": "Don't avoid modern medical approaches for traditional methods."
    },
    imageUrl: "card_img/Cups06.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Six_of_Cups"
  },
  {
    name: "Seven of Cups",
    description: "Dreams, choices, and the need to see clearly through emotion.",
    element: ["Water", "Cups", "Illusion"],
    good: {
      "Work & Career": "Dream big but choose practical professional paths with care.",
      "Relationships": "Navigate relationship choices with clarity and emotional wisdom.",
      "Family & Home": "Balance family dreams with realistic home planning.",
      "Health & Vitality": "Choose healing approaches that align with your true needs."
    },
    wrong: {
      "Work & Career": "Don't get lost in fantasies or make impulsive professional choices.",
      "Relationships": "Avoid confusion from too many options or unrealistic expectations.",
      "Family & Home": "Be careful not to neglect practical family responsibilities for dreams.",
      "Health & Vitality": "Don't delay real help by chasing unproven healing methods."
    },
    imageUrl: "card_img/Cups07.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Seven_of_Cups"
  },
  {
    name: "Eight of Cups",
    description: "Leaving what no longer fulfills you to seek deeper emotional truth.",
    element: ["Water", "Cups", "Withdrawal"],
    good: {
      "Work & Career": "Walk away from unfulfilling work to pursue emotional satisfaction.",
      "Relationships": "Leave relationships that no longer serve your emotional growth.",
      "Family & Home": "Create emotional distance from toxic family dynamics.",
      "Health & Vitality": "Emotional healing requires leaving behind draining situations."
    },
    wrong: {
      "Work & Career": "Don't abandon stable work without a clear plan for emotional fulfillment.",
      "Relationships": "Avoid running from relationships without processing emotions.",
      "Family & Home": "Be careful not to abandon family responsibilities impulsively.",
      "Health & Vitality": "Don't neglect professional help while making emotional changes."
    },
    imageUrl: "card_img/Cups08.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Eight_of_Cups"
  },
  {
    name: "Nine of Cups",
    description: "Emotional fulfillment, wish-fulfillment, and inner contentment.",
    element: ["Water", "Cups", "Fulfillment"],
    good: {
      "Work & Career": "Professional wishes fulfilled bring emotional satisfaction.",
      "Relationships": "Deep emotional fulfillment and contentment in connections.",
      "Family & Home": "Family life brings joy and emotional abundance.",
      "Health & Vitality": "Emotional well-being supports physical health and happiness."
    },
    wrong: {
      "Work & Career": "Don't become complacent or let success breed arrogance.",
      "Relationships": "Avoid emotional greed or unrealistic expectations of perfection.",
      "Family & Home": "Be careful not to take emotional fulfillment for granted.",
      "Health & Vitality": "Don't neglect health maintenance in times of emotional plenty."
    },
    imageUrl: "card_img/Cups09.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Nine_of_Cups"
  },
  {
    name: "Ten of Cups",
    description: "Complete emotional harmony, family joy, and lasting peace.",
    element: ["Water", "Cups", "Harmony"],
    good: {
      "Work & Career": "Professional fulfillment brings emotional happiness and success.",
      "Relationships": "Perfect emotional harmony and lasting love in relationships.",
      "Family & Home": "Family bliss and emotional fulfillment in the home.",
      "Health & Vitality": "Emotional peace supports complete physical and mental well-being."
    },
    wrong: {
      "Work & Career": "Don't sacrifice emotional fulfillment for professional success.",
      "Relationships": "Avoid idealizing relationships or ignoring real issues.",
      "Family & Home": "Be careful not to put family on a pedestal that creates pressure.",
      "Health & Vitality": "Don't neglect health while pursuing emotional perfection."
    },
    imageUrl: "card_img/Cups10.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Ten_of_Cups"
  },
  {
    name: "Page of Cups",
    description: "A tender message, intuition, and new emotional creativity.",
    element: ["Water", "Cups", "Curiosity"],
    good: {
      "Work & Career": "Creative inspiration and intuitive professional opportunities.",
      "Relationships": "New emotional connections and heartfelt communications.",
      "Family & Home": "Fresh emotional energy and intuitive family insights.",
      "Health & Vitality": "Intuitive health insights and emotional healing messages."
    },
    wrong: {
      "Work & Career": "Don't let emotional sensitivity interfere with professional focus.",
      "Relationships": "Avoid being overly sensitive or misinterpreting emotional cues.",
      "Family & Home": "Be careful not to bring emotional drama into family life.",
      "Health & Vitality": "Don't self-diagnose based on intuition alone."
    },
    imageUrl: "card_img/Cups11.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Page_of_Cups"
  },
  {
    name: "Knight of Cups",
    description: "Romantic pursuit, heartfelt invitation, and inspired emotion.",
    element: ["Water", "Cups", "Romance"],
    good: {
      "Work & Career": "Passionate pursuit of creative or emotionally fulfilling work.",
      "Relationships": "Romantic pursuit and emotional commitment in love.",
      "Family & Home": "Emotional devotion and care in family relationships.",
      "Health & Vitality": "Emotional passion supports healing and vitality."
    },
    wrong: {
      "Work & Career": "Don't let emotional impulses override professional judgment.",
      "Relationships": "Avoid chasing unavailable people or unrealistic romantic ideals.",
      "Family & Home": "Be careful not to be emotionally overwhelming in family care.",
      "Health & Vitality": "Don't neglect practical health needs for emotional pursuits."
    },
    imageUrl: "card_img/Cups12.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Knight_of_Cups"
  },
  {
    name: "Queen of Cups",
    description: "Deep empathy, caring intuition, and emotional support.",
    element: ["Water", "Cups", "Compassion"],
    good: {
      "Work & Career": "Emotional intelligence and nurturing leadership in professional settings.",
      "Relationships": "Deep empathy and emotional wisdom in partnerships.",
      "Family & Home": "Nurturing care and emotional stability for family.",
      "Health & Vitality": "Emotional healing and intuitive health management."
    },
    wrong: {
      "Work & Career": "Don't let emotions cloud professional decisions or boundaries.",
      "Relationships": "Avoid emotional manipulation or neglecting your own needs.",
      "Family & Home": "Be careful not to enable emotional dependency in family.",
      "Health & Vitality": "Don't ignore medical advice in favor of emotional approaches."
    },
    imageUrl: "card_img/Cups13.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Queen_of_Cups"
  },
  {
    name: "King of Cups",
    description: "Calm emotional authority, compassionate clarity, and wise feeling.",
    element: ["Water", "Cups", "Emotional Mastery"],
    good: {
      "Work & Career": "Emotional mastery and balanced leadership in professional life.",
      "Relationships": "Mature emotional control and compassionate partnership.",
      "Family & Home": "Emotional stability and wise family guidance.",
      "Health & Vitality": "Balanced emotional health and stable well-being."
    },
    wrong: {
      "Work & Career": "Don't suppress emotions or use emotional control manipulatively.",
      "Relationships": "Avoid emotional detachment or controlling relationship dynamics.",
      "Family & Home": "Be careful not to be emotionally distant as family leader.",
      "Health & Vitality": "Don't ignore emotional needs while maintaining control."
    },
    imageUrl: "card_img/Cups14.jpg",
    imageLink: "https://en.wikipedia.org/wiki/King_of_Cups"
  },
  {
    name: "Ace of Pentacles",
    description: "A new material opportunity, grounded potential, and abundance in the making.",
    element: ["Earth", "Pentacles", "Opportunity"],
    good: {
      "Work & Career": "New financial or career opportunities bring material abundance.",
      "Relationships": "Stable foundations support healthy relationship growth.",
      "Family & Home": "Material security and comfortable home improvements.",
      "Health & Vitality": "Physical health improvements and material well-being."
    },
    wrong: {
      "Work & Career": "Don't focus only on money without considering fulfillment.",
      "Relationships": "Avoid letting material concerns dominate relationship decisions.",
      "Family & Home": "Be careful not to prioritize possessions over family connections.",
      "Health & Vitality": "Don't neglect emotional health while pursuing material goals."
    },
    imageUrl: "card_img/Pents01.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Ace_of_Pentacles"
  },
  {
    name: "Two of Pentacles",
    description: "Balance, adaptability, and pragmatic juggling of work, money, and priorities.",
    element: ["Earth", "Pentacles", "Balance"],
    good: {
      "Work & Career": "Balance multiple work responsibilities and financial priorities.",
      "Relationships": "Harmonious sharing of material responsibilities in partnerships.",
      "Family & Home": "Balanced management of household finances and chores.",
      "Health & Vitality": "Balanced approach to diet, exercise, and work-life harmony."
    },
    wrong: {
      "Work & Career": "Don't overcommit or let work imbalance affect other areas.",
      "Relationships": "Avoid financial disagreements or unequal contributions.",
      "Family & Home": "Be careful not to let material concerns create family stress.",
      "Health & Vitality": "Don't neglect rest and recovery in busy periods."
    },
    imageUrl: "card_img/Pents02.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Two_of_Pentacles"
  },
  {
    name: "Three of Pentacles",
    description: "Teamwork, skilled craftsmanship, and building something of lasting value.",
    element: ["Earth", "Pentacles", "Collaboration"],
    good: {
      "Work & Career": "Collaborative work projects lead to material success and recognition.",
      "Relationships": "Building shared material goals strengthens partnerships.",
      "Family & Home": "Family teamwork on home projects creates lasting value.",
      "Health & Vitality": "Collaborative health approaches (with professionals) bring results."
    },
    wrong: {
      "Work & Career": "Don't undervalue your contributions in group efforts.",
      "Relationships": "Avoid material competition or unequal investment in goals.",
      "Family & Home": "Be careful not to let work dominate family collaboration time.",
      "Health & Vitality": "Don't delay professional help while trying DIY approaches."
    },
    imageUrl: "card_img/Pents03.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Three_of_Pentacles"
  },
  {
    name: "Four of Pentacles",
    description: "Security, control, and holding tight to resources for stability.",
    element: ["Earth", "Pentacles", "Control"],
    good: {
      "Work & Career": "Financial security and stable work foundations provide peace.",
      "Relationships": "Material stability supports secure, committed relationships.",
      "Family & Home": "Strong financial foundations protect and comfort family.",
      "Health & Vitality": "Consistent healthy routines build lasting physical strength."
    },
    wrong: {
      "Work & Career": "Don't become possessive of resources or overly conservative.",
      "Relationships": "Avoid using material security as control in relationships.",
      "Family & Home": "Be careful not to prioritize saving over family experiences.",
      "Health & Vitality": "Don't let fear of change prevent necessary health updates."
    },
    imageUrl: "card_img/Pents04.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Four_of_Pentacles"
  },
  {
    name: "Five of Pentacles",
    description: "Hardship, scarcity, and the call to seek support during material struggle.",
    element: ["Earth", "Pentacles", "Hardship"],
    good: {
      "Work & Career": "Financial challenges teach resourcefulness and build resilience.",
      "Relationships": "Material hardship can strengthen true partnerships.",
      "Family & Home": "Family support during difficult times deepens bonds.",
      "Health & Vitality": "Health challenges motivate positive lifestyle changes."
    },
    wrong: {
      "Work & Career": "Don't let financial fear prevent seeking necessary help.",
      "Relationships": "Avoid letting material stress damage relationship foundations.",
      "Family & Home": "Be careful not to isolate during family financial difficulties.",
      "Health & Vitality": "Don't neglect professional medical care during crises."
    },
    imageUrl: "card_img/Pents05.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Five_of_Pentacles"
  },
  {
    name: "Six of Pentacles",
    description: "Generosity, sharing abundance, and a balanced flow of giving and receiving.",
    element: ["Earth", "Pentacles", "Generosity"],
    good: {
      "Work & Career": "Generous sharing of knowledge and resources benefits your career.",
      "Relationships": "Balanced giving and receiving creates healthy partnerships.",
      "Family & Home": "Family generosity and charitable acts strengthen community.",
      "Health & Vitality": "Proper nutrition and resource allocation support health."
    },
    wrong: {
      "Work & Career": "Don't give more than you can afford in professional generosity.",
      "Relationships": "Avoid unbalanced giving that creates dependency.",
      "Family & Home": "Be careful not to enable financial irresponsibility in family.",
      "Health & Vitality": "Don't neglect your own health while caring for others."
    },
    imageUrl: "card_img/Pents06.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Six_of_Pentacles"
  },
  {
    name: "Seven of Pentacles",
    description: "Patient investment, steady effort, and reassessing progress before the next step.",
    element: ["Earth", "Pentacles", "Patience"],
    good: {
      "Work & Career": "Patient investment in work brings long-term professional rewards.",
      "Relationships": "Nurturing relationships over time creates lasting bonds.",
      "Family & Home": "Consistent care of home and family yields stability.",
      "Health & Vitality": "Persistent healthy habits lead to lasting well-being."
    },
    wrong: {
      "Work & Career": "Don't work tirelessly without reassessing your goals.",
      "Relationships": "Avoid staying in relationships that don't grow with effort.",
      "Family & Home": "Be careful not to neglect family for work achievements.",
      "Health & Vitality": "Don't ignore signs that your approach needs adjustment."
    },
    imageUrl: "card_img/Pents07.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Seven_of_Pentacles"
  },
  {
    name: "Eight of Pentacles",
    description: "Diligence, mastery, and practical skill development through focused work.",
    element: ["Earth", "Pentacles", "Craftsmanship"],
    good: {
      "Work & Career": "Dedicated craftsmanship and skill development lead to mastery.",
      "Relationships": "Consistent effort in relationships builds trust and intimacy.",
      "Family & Home": "Diligent home maintenance creates lasting comfort.",
      "Health & Vitality": "Regular exercise and healthy routines build strength."
    },
    wrong: {
      "Work & Career": "Don't become so focused on work that you neglect other areas.",
      "Relationships": "Avoid treating relationships like work tasks.",
      "Family & Home": "Be careful not to let workaholic tendencies affect family.",
      "Health & Vitality": "Don't push physical limits without adequate rest."
    },
    imageUrl: "card_img/Pents08.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Eight_of_Pentacles"
  },
  {
    name: "Nine of Pentacles",
    description: "Independence, prosperity, and the enjoyment of earned comfort.",
    element: ["Earth", "Pentacles", "Independence"],
    good: {
      "Work & Career": "Financial independence and professional success through discipline.",
      "Relationships": "Self-sufficient relationships based on mutual respect.",
      "Family & Home": "Beautiful, well-maintained home reflects personal achievement.",
      "Health & Vitality": "Strong physical health and self-care independence."
    },
    wrong: {
      "Work & Career": "Don't let success isolate you from collaborative opportunities.",
      "Relationships": "Avoid emotional distance in the pursuit of independence.",
      "Family & Home": "Be careful not to prioritize possessions over family connections.",
      "Health & Vitality": "Don't neglect emotional health in physical achievement."
    },
    imageUrl: "card_img/Pents09.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Nine_of_Pentacles"
  },
  {
    name: "Ten of Pentacles",
    description: "Legacy, family security, and material fulfillment across generations.",
    element: ["Earth", "Pentacles", "Legacy"],
    good: {
      "Work & Career": "Legacy of professional success and family business stability.",
      "Relationships": "Long-term committed partnerships with shared prosperity.",
      "Family & Home": "Generational wealth and family home security.",
      "Health & Vitality": "Comprehensive health and vitality across all life areas."
    },
    wrong: {
      "Work & Career": "Don't let family expectations dictate professional choices.",
      "Relationships": "Avoid staying in relationships for financial security alone.",
      "Family & Home": "Be careful not to let material success overshadow family values.",
      "Health & Vitality": "Don't neglect health while building material legacy."
    },
    imageUrl: "card_img/Pents10.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Ten_of_Pentacles"
  },
  {
    name: "Page of Pentacles",
    description: "Practical curiosity, new learning, and the first step toward material growth.",
    element: ["Earth", "Pentacles", "Learning"],
    good: {
      "Work & Career": "New learning opportunities and practical skill development.",
      "Relationships": "Grounded new connections with shared practical interests.",
      "Family & Home": "Fresh approaches to home management and family learning.",
      "Health & Vitality": "New health information and practical wellness approaches."
    },
    wrong: {
      "Work & Career": "Don't let curiosity distract from focused career development.",
      "Relationships": "Avoid being too practical or missing emotional connections.",
      "Family & Home": "Be careful not to bring work stress into family learning time.",
      "Health & Vitality": "Don't self-diagnose without professional guidance."
    },
    imageUrl: "card_img/Pents11.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Page_of_Pentacles"
  },
  {
    name: "Knight of Pentacles",
    description: "Steady progress, reliable effort, and persistence toward practical goals.",
    element: ["Earth", "Pentacles", "Persistence"],
    good: {
      "Work & Career": "Steady, reliable work ethic leads to material success.",
      "Relationships": "Committed, dependable partnership with practical support.",
      "Family & Home": "Responsible family provider and home maintainer.",
      "Health & Vitality": "Consistent health routines and physical discipline."
    },
    wrong: {
      "Work & Career": "Don't become so focused on routine that you miss opportunities.",
      "Relationships": "Avoid being too rigid or missing romantic spontaneity.",
      "Family & Home": "Be careful not to let work responsibilities neglect family needs.",
      "Health & Vitality": "Don't push physical limits without listening to your body."
    },
    imageUrl: "card_img/Pents12.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Knight_of_Pentacles"
  },
  {
    name: "Queen of Pentacles",
    description: "Nurturing abundance, practical care, and grounded emotional support.",
    element: ["Earth", "Pentacles", "Nurturing"],
    good: {
      "Work & Career": "Nurturing leadership with practical wisdom and care.",
      "Relationships": "Emotionally supportive partnerships with material stability.",
      "Family & Home": "Caring home environment with abundance and comfort.",
      "Health & Vitality": "Holistic health approach balancing physical and emotional needs."
    },
    wrong: {
      "Work & Career": "Don't let nurturing nature lead to professional burnout.",
      "Relationships": "Avoid material focus overshadowing emotional connection.",
      "Family & Home": "Be careful not to enable dependency in family members.",
      "Health & Vitality": "Don't neglect your own health while caring for others."
    },
    imageUrl: "card_img/Pents13.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Queen_of_Pentacles"
  },
  {
    name: "King of Pentacles",
    description: "Financial mastery, wise stewardship, and dependable material leadership.",
    element: ["Earth", "Pentacles", "Mastery"],
    good: {
      "Work & Career": "Masterful business acumen and financial leadership.",
      "Relationships": "Stable, prosperous partnerships with mutual respect.",
      "Family & Home": "Financial security and wise family stewardship.",
      "Health & Vitality": "Strong physical health and disciplined wellness habits."
    },
    wrong: {
      "Work & Career": "Don't let material success become your only measure of worth.",
      "Relationships": "Avoid treating relationships as business transactions.",
      "Family & Home": "Be careful not to be emotionally distant in material provision.",
      "Health & Vitality": "Don't neglect emotional health in physical achievement."
    },
    imageUrl: "card_img/Pents14.jpg",
    imageLink: "https://en.wikipedia.org/wiki/King_of_Pentacles"
  },
  {
    name: "Ace of Swords",
    description: "Mental clarity, breakthrough ideas, and truth cutting through confusion.",
    element: ["Air", "Swords", "Clarity"],
    good: {
      "Work & Career": "Clear thinking and new ideas bring professional breakthroughs.",
      "Relationships": "Honest communication establishes strong relationship foundations.",
      "Family & Home": "Clear family discussions resolve conflicts and create understanding.",
      "Health & Vitality": "Mental clarity and new perspectives on health challenges."
    },
    wrong: {
      "Work & Career": "Don't let intellectual arrogance overshadow practical considerations.",
      "Relationships": "Avoid harsh truth-telling that hurts without helping.",
      "Family & Home": "Be careful not to use logic to avoid emotional family issues.",
      "Health & Vitality": "Don't ignore emotional aspects of health for intellectual analysis."
    },
    imageUrl: "card_img/Swords01.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Ace_of_Swords"
  },
  {
    name: "Two of Swords",
    description: "A stalemate, tough choice, and the need for inner balance.",
    element: ["Air", "Swords", "Indecision"],
    good: {
      "Work & Career": "Balanced decision-making and fair professional negotiations.",
      "Relationships": "Mutual understanding and compromise in partnerships.",
      "Family & Home": "Fair family discussions and balanced conflict resolution.",
      "Health & Vitality": "Mental balance and integrated approaches to wellness."
    },
    wrong: {
      "Work & Career": "Don't avoid difficult decisions or create false balance.",
      "Relationships": "Avoid denial of real issues in relationships.",
      "Family & Home": "Be careful not to suppress family conflicts for false peace.",
      "Health & Vitality": "Don't ignore mental health issues by avoiding decisions."
    },
    imageUrl: "card_img/Swords02.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Two_of_Swords"
  },
  {
    name: "Three of Swords",
    description: "Heartache, painful truth, and emotional release through clarity.",
    element: ["Air", "Swords", "Heartbreak"],
    good: {
      "Work & Career": "Necessary conflicts lead to professional growth and clarity.",
      "Relationships": "Heartbreak teaches valuable lessons about love and boundaries.",
      "Family & Home": "Family conflicts, when resolved, strengthen relationships.",
      "Health & Vitality": "Mental health challenges lead to greater self-understanding."
    },
    wrong: {
      "Work & Career": "Don't let conflicts destroy professional relationships unnecessarily.",
      "Relationships": "Avoid dwelling in pain or using hurt as manipulation.",
      "Family & Home": "Be careful not to let family arguments create lasting damage.",
      "Health & Vitality": "Don't let mental pain manifest as physical illness."
    },
    imageUrl: "card_img/Swords03.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Three_of_Swords"
  },
  {
    name: "Four of Swords",
    description: "Rest, recovery, and thoughtful retreat to restore the mind.",
    element: ["Air", "Swords", "Rest"],
    good: {
      "Work & Career": "Mental rest and reflection improve professional performance.",
      "Relationships": "Peaceful separation allows for relationship assessment.",
      "Family & Home": "Quiet home environment supports mental restoration.",
      "Health & Vitality": "Rest and mental recovery are essential for health."
    },
    wrong: {
      "Work & Career": "Don't use rest as an excuse to avoid professional responsibilities.",
      "Relationships": "Avoid emotional withdrawal that creates permanent distance.",
      "Family & Home": "Be careful not to isolate from family during rest periods.",
      "Health & Vitality": "Don't neglect physical health while focusing on mental rest."
    },
    imageUrl: "card_img/Swords04.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Four_of_Swords"
  },
  {
    name: "Five of Swords",
    description: "Conflict, pride, and the consequences of winning at the wrong cost.",
    element: ["Air", "Swords", "Conflict"],
    good: {
      "Work & Career": "Strategic thinking helps navigate professional conflicts.",
      "Relationships": "Learning conflict resolution skills improves relationships.",
      "Family & Home": "Family disagreements teach communication and boundaries.",
      "Health & Vitality": "Mental resilience develops through overcoming challenges."
    },
    wrong: {
      "Work & Career": "Don't win arguments at the cost of professional relationships.",
      "Relationships": "Avoid manipulative conflict tactics in relationships.",
      "Family & Home": "Be careful not to create family divisions through arguments.",
      "Health & Vitality": "Don't let chronic stress damage physical health."
    },
    imageUrl: "card_img/Swords05.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Five_of_Swords"
  },
  {
    name: "Six of Swords",
    description: "Transition, moving forward, and mental relief after struggle.",
    element: ["Air", "Swords", "Transition"],
    good: {
      "Work & Career": "Moving past professional difficulties brings mental peace.",
      "Relationships": "Transitioning from toxic relationships creates emotional freedom.",
      "Family & Home": "Relocating or changing family dynamics brings relief.",
      "Health & Vitality": "Mental health improves with distance from stressors."
    },
    wrong: {
      "Work & Career": "Don't run from professional problems without solutions.",
      "Relationships": "Avoid escaping relationship issues rather than resolving them.",
      "Family & Home": "Be careful not to abandon family responsibilities in transitions.",
      "Health & Vitality": "Don't avoid necessary medical care during transitions."
    },
    imageUrl: "card_img/Swords06.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Six_of_Swords"
  },
  {
    name: "Seven of Swords",
    description: "Strategy, secrecy, and the fine line between cleverness and deceit.",
    element: ["Air", "Swords", "Strategy"],
    good: {
      "Work & Career": "Strategic thinking and careful planning ensure success.",
      "Relationships": "Honest communication prevents misunderstandings.",
      "Family & Home": "Mental resilience helps navigate family challenges.",
      "Health & Vitality": "Mental discipline supports health goal achievement."
    },
    wrong: {
      "Work & Career": "Don't engage in dishonest or unethical professional tactics.",
      "Relationships": "Avoid deception or manipulation in relationships.",
      "Family & Home": "Be careful not to use mental games in family dynamics.",
      "Health & Vitality": "Don't let mental stress lead to self-sabotage."
    },
    imageUrl: "card_img/Swords07.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Seven_of_Swords"
  },
  {
    name: "Eight of Swords",
    description: "Restriction, self-doubt, and the mental barriers that hold you back.",
    element: ["Air", "Swords", "Restriction"],
    good: {
      "Work & Career": "Breaking free from mental limitations opens professional doors.",
      "Relationships": "Recognizing self-imposed restrictions improves relationships.",
      "Family & Home": "Mental freedom creates healthier family interactions.",
      "Health & Vitality": "Overcoming mental barriers leads to better health choices."
    },
    wrong: {
      "Work & Career": "Don't let self-doubt prevent necessary professional action.",
      "Relationships": "Avoid staying in restrictive relationship patterns.",
      "Family & Home": "Be careful not to let mental restrictions affect family life.",
      "Health & Vitality": "Don't ignore professional help for mental health issues."
    },
    imageUrl: "card_img/Swords08.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Eight_of_Swords"
  },
  {
    name: "Nine of Swords",
    description: "Anxiety, worry, and the need to face fear before it overwhelms you.",
    element: ["Air", "Swords", "Anxiety"],
    good: {
      "Work & Career": "Facing professional fears leads to mental relief and clarity.",
      "Relationships": "Processing relationship anxieties brings peace.",
      "Family & Home": "Resolving family worries creates mental calm.",
      "Health & Vitality": "Addressing mental health concerns prevents escalation."
    },
    wrong: {
      "Work & Career": "Don't let anxiety prevent professional progress or sleep.",
      "Relationships": "Avoid letting worries damage relationship trust.",
      "Family & Home": "Be careful not to burden family with your mental struggles.",
      "Health & Vitality": "Don't suffer in silence when professional help is needed."
    },
    imageUrl: "card_img/Swords09.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Nine_of_Swords"
  },
  {
    name: "Ten of Swords",
    description: "Rock bottom, painful endings, and the chance for a new mental beginning.",
    element: ["Air", "Swords", "Endings"],
    good: {
      "Work & Career": "End of difficult professional cycles brings mental liberation.",
      "Relationships": "Release from toxic relationships allows healing.",
      "Family & Home": "Mental burdens lift, creating family peace.",
      "Health & Vitality": "Mental health breakthroughs lead to comprehensive healing."
    },
    wrong: {
      "Work & Career": "Don't let mental exhaustion prevent career recovery.",
      "Relationships": "Avoid staying in abusive situations out of fear.",
      "Family & Home": "Be careful not to let mental pain affect family negatively.",
      "Health & Vitality": "Don't delay seeking help for severe mental health issues."
    },
    imageUrl: "card_img/Swords10.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Ten_of_Swords"
  },
  {
    name: "Page of Swords",
    description: "Curious mind, fresh ideas, and messages that sharpen understanding.",
    element: ["Air", "Swords", "Curiosity"],
    good: {
      "Work & Career": "New ideas and clear communication enhance professional skills.",
      "Relationships": "Honest conversations bring fresh perspectives to relationships.",
      "Family & Home": "Open family discussions resolve misunderstandings.",
      "Health & Vitality": "Mental clarity and new health information improve well-being."
    },
    wrong: {
      "Work & Career": "Don't let intellectual curiosity distract from practical work.",
      "Relationships": "Avoid blunt communication that hurts feelings unnecessarily.",
      "Family & Home": "Be careful not to bring work stress into family conversations.",
      "Health & Vitality": "Don't obsess over health information without professional guidance."
    },
    imageUrl: "card_img/Swords11.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Page_of_Swords"
  },
  {
    name: "Knight of Swords",
    description: "Fast action, direct communication, and bold pursuit of truth.",
    element: ["Air", "Swords", "Action"],
    good: {
      "Work & Career": "Bold ideas and quick thinking drive professional success.",
      "Relationships": "Direct communication and intellectual connection in partnerships.",
      "Family & Home": "Mental stimulation and clear family discussions.",
      "Health & Vitality": "Mental discipline and clear health goal pursuit."
    },
    wrong: {
      "Work & Career": "Don't let impulsiveness lead to professional mistakes.",
      "Relationships": "Avoid aggressive communication that creates conflict.",
      "Family & Home": "Be careful not to be mentally domineering in family.",
      "Health & Vitality": "Don't push mental limits at the expense of physical health."
    },
    imageUrl: "card_img/Swords12.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Knight_of_Swords"
  },
  {
    name: "Queen of Swords",
    description: "Clear thinking, independence, and wise, honest communication.",
    element: ["Air", "Swords", "Perception"],
    good: {
      "Work & Career": "Clear thinking and fair leadership in professional settings.",
      "Relationships": "Honest, mature communication in relationships.",
      "Family & Home": "Wise guidance and clear boundaries in family life.",
      "Health & Vitality": "Mental clarity and balanced approach to health decisions."
    },
    wrong: {
      "Work & Career": "Don't let emotional detachment create professional isolation.",
      "Relationships": "Avoid being too critical or emotionally unavailable.",
      "Family & Home": "Be careful not to be too harsh in family discipline.",
      "Health & Vitality": "Don't neglect emotional health in intellectual pursuits."
    },
    imageUrl: "card_img/Swords13.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Queen_of_Swords"
  },
  {
    name: "King of Swords",
    description: "Authority, integrity, and decisive leadership guided by reason.",
    element: ["Air", "Swords", "Authority"],
    good: {
      "Work & Career": "Strategic thinking and intellectual leadership bring success.",
      "Relationships": "Fair, honest partnerships based on mutual respect.",
      "Family & Home": "Wise family guidance and intellectual stimulation.",
      "Health & Vitality": "Mental discipline and clear health management."
    },
    wrong: {
      "Work & Career": "Don't let intellectual arrogance damage team relationships.",
      "Relationships": "Avoid emotional coldness or manipulative communication.",
      "Family & Home": "Be careful not to be emotionally distant as family leader.",
      "Health & Vitality": "Don't neglect emotional needs in mental achievement."
    },
    imageUrl: "card_img/Swords14.jpg",
    imageLink: "https://en.wikipedia.org/wiki/King_of_Swords"
  },
  {
    name: "Ace of Wands",
    description: "A fresh spark of creativity, passion, and energized new beginnings.",
    element: ["Fire", "Wands", "Inspiration"],
    good: {
      "Work & Career": "Creative inspiration and new professional opportunities ignite.",
      "Relationships": "Passionate new connections and romantic sparks.",
      "Family & Home": "Fresh energy and creative projects enliven the home.",
      "Health & Vitality": "Renewed vitality and motivation for health goals."
    },
    wrong: {
      "Work & Career": "Don't let enthusiasm lead to scattered or unfinished projects.",
      "Relationships": "Avoid rushing into relationships based on passion alone.",
      "Family & Home": "Be careful not to let creative energy disrupt family routine.",
      "Health & Vitality": "Don't overexert yourself in the excitement of new energy."
    },
    imageUrl: "card_img/Wands01.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Ace_of_Wands"
  },
  {
    name: "Two of Wands",
    description: "Planning, vision, and the courage to choose the path forward.",
    element: ["Fire", "Wands", "Planning"],
    good: {
      "Work & Career": "Bold planning and entrepreneurial vision for career growth.",
      "Relationships": "Shared adventures and mutual exploration in partnerships.",
      "Family & Home": "Family planning and exciting home developments.",
      "Health & Vitality": "Balanced energy management and fitness planning."
    },
    wrong: {
      "Work & Career": "Don't let ambition lead to reckless business decisions.",
      "Relationships": "Avoid controlling relationship direction out of fear.",
      "Family & Home": "Be careful not to let personal ambitions neglect family needs.",
      "Health & Vitality": "Don't push physical limits without proper preparation."
    },
    imageUrl: "card_img/Wands02.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Two_of_Wands"
  },
  {
    name: "Three of Wands",
    description: "Expansion, foresight, and the early rewards of visionary action.",
    element: ["Fire", "Wands", "Expansion"],
    good: {
      "Work & Career": "Successful ventures and expanding professional influence.",
      "Relationships": "Growing partnerships with shared achievements.",
      "Family & Home": "Family growth and home expansions bring joy.",
      "Health & Vitality": "Building strength and celebrating health progress."
    },
    wrong: {
      "Work & Career": "Don't become impatient waiting for professional results.",
      "Relationships": "Avoid focusing only on achievements in relationships.",
      "Family & Home": "Be careful not to let work success overshadow family time.",
      "Health & Vitality": "Don't neglect maintenance in pursuit of peak performance."
    },
    imageUrl: "card_img/Wands03.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Three_of_Wands"
  },
  {
    name: "Four of Wands",
    description: "Celebration, stability, and joyful success after hard work.",
    element: ["Fire", "Wands", "Stability"],
    good: {
      "Work & Career": "Stable work foundation allows creative freedom.",
      "Relationships": "Harmonious relationships with celebration and joy.",
      "Family & Home": "Joyful home environment and family celebrations.",
      "Health & Vitality": "Balanced energy and joyful approach to wellness."
    },
    wrong: {
      "Work & Career": "Don't let stability lead to creative stagnation.",
      "Relationships": "Avoid complacency in established relationships.",
      "Family & Home": "Be careful not to take family harmony for granted.",
      "Health & Vitality": "Don't let comfort lead to unhealthy habits."
    },
    imageUrl: "card_img/Wands04.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Four_of_Wands"
  },
  {
    name: "Five of Wands",
    description: "Energetic conflict, competition, and creative tension.",
    element: ["Fire", "Wands", "Competition"],
    good: {
      "Work & Career": "Healthy competition and creative conflict spark innovation.",
      "Relationships": "Passionate discussions strengthen relationship bonds.",
      "Family & Home": "Family debates and challenges build resilience.",
      "Health & Vitality": "Overcoming obstacles builds physical and mental strength."
    },
    wrong: {
      "Work & Career": "Don't let conflicts become destructive or personal.",
      "Relationships": "Avoid letting arguments damage relationship foundations.",
      "Family & Home": "Be careful not to let family conflicts escalate unnecessarily.",
      "Health & Vitality": "Don't let competitive drive lead to injury or burnout."
    },
    imageUrl: "card_img/Wands05.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Five_of_Wands"
  },
  {
    name: "Six of Wands",
    description: "Victory, recognition, and confidence from your achievements.",
    element: ["Fire", "Wands", "Victory"],
    good: {
      "Work & Career": "Public recognition and professional success bring confidence.",
      "Relationships": "Shared victories strengthen relationship bonds.",
      "Family & Home": "Family achievements and celebrations create joy.",
      "Health & Vitality": "Health improvements bring renewed energy and pride."
    },
    wrong: {
      "Work & Career": "Don't let success create arrogance or complacency.",
      "Relationships": "Avoid letting achievements overshadow relationship intimacy.",
      "Family & Home": "Be careful not to prioritize public image over family needs.",
      "Health & Vitality": "Don't neglect ongoing health maintenance in success."
    },
    imageUrl: "card_img/Wands06.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Six_of_Wands"
  },
  {
    name: "Seven of Wands",
    description: "Defending your position with courage and standing firm.",
    element: ["Fire", "Wands", "Defense"],
    good: {
      "Work & Career": "Defending your position with courage and determination.",
      "Relationships": "Standing firm in relationship values and boundaries.",
      "Family & Home": "Protecting family interests with strength and conviction.",
      "Health & Vitality": "Mental resilience supports physical health challenges."
    },
    wrong: {
      "Work & Career": "Don't become defensively aggressive in professional situations.",
      "Relationships": "Avoid constant conflict in defense of relationship positions.",
      "Family & Home": "Be careful not to let defensiveness damage family harmony.",
      "Health & Vitality": "Don't let stress from defending positions harm health."
    },
    imageUrl: "card_img/Wands07.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Seven_of_Wands"
  },
  {
    name: "Eight of Wands",
    description: "Rapid progress, momentum, and messages or action arriving fast.",
    element: ["Fire", "Wands", "Speed"],
    good: {
      "Work & Career": "Rapid progress and swift professional developments.",
      "Relationships": "Quickening relationship progress and exciting developments.",
      "Family & Home": "Fast-moving positive changes in home and family life.",
      "Health & Vitality": "Sudden improvements in energy and health progress."
    },
    wrong: {
      "Work & Career": "Don't let speed lead to mistakes or missed details.",
      "Relationships": "Avoid rushing relationship developments unnaturally.",
      "Family & Home": "Be careful not to let rapid changes disrupt family stability.",
      "Health & Vitality": "Don't push recovery faster than your body can handle."
    },
    imageUrl: "card_img/Wands08.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Eight_of_Wands"
  },
  {
    name: "Nine of Wands",
    description: "Perseverance, resilience, and protecting your hard-won position.",
    element: ["Fire", "Wands", "Resilience"],
    good: {
      "Work & Career": "Perseverance through challenges leads to professional victory.",
      "Relationships": "Enduring love and commitment through difficulties.",
      "Family & Home": "Family resilience and protection through hard times.",
      "Health & Vitality": "Persistent effort leads to health breakthroughs."
    },
    wrong: {
      "Work & Career": "Don't let battle fatigue prevent final professional success.",
      "Relationships": "Avoid becoming cynical from relationship struggles.",
      "Family & Home": "Be careful not to let exhaustion affect family interactions.",
      "Health & Vitality": "Don't push through pain without proper recovery time."
    },
    imageUrl: "card_img/Wands09.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Nine_of_Wands"
  },
  {
    name: "Ten of Wands",
    description: "Overload, responsibility, and the need to release what weighs you down.",
    element: ["Fire", "Wands", "Burden"],
    good: {
      "Work & Career": "Heavy responsibilities lead to accomplishment and release.",
      "Relationships": "Carrying relationship burdens with love brings fulfillment.",
      "Family & Home": "Family responsibilities, when shared, create strong bonds.",
      "Health & Vitality": "Pushing through physical limits builds endurance."
    },
    wrong: {
      "Work & Career": "Don't take on unsustainable professional burdens.",
      "Relationships": "Avoid carrying all relationship responsibilities alone.",
      "Family & Home": "Be careful not to let family duties lead to burnout.",
      "Health & Vitality": "Don't sacrifice health for achievement or responsibility."
    },
    imageUrl: "card_img/Wands10.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Ten_of_Wands"
  },
  {
    name: "Page of Wands",
    description: "Enthusiastic inspiration, new adventure, and bold creative messages.",
    element: ["Fire", "Wands", "Exploration"],
    good: {
      "Work & Career": "Creative inspiration and enthusiasm for new professional ventures.",
      "Relationships": "Playful energy and romantic excitement in connections.",
      "Family & Home": "Fresh creative energy and fun family activities.",
      "Health & Vitality": "Motivation for new fitness routines and healthy adventures."
    },
    wrong: {
      "Work & Career": "Don't let excitement lead to unfocused or impractical ideas.",
      "Relationships": "Avoid being too fickle or commitment-phobic in romance.",
      "Family & Home": "Be careful not to bring disruptive energy into family life.",
      "Health & Vitality": "Don't start intense regimens without building up gradually."
    },
    imageUrl: "card_img/Wands11.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Page_of_Wands"
  },
  {
    name: "Knight of Wands",
    description: "Impulsive action, daring ambition, and pursuing your passions quickly.",
    element: ["Fire", "Wands", "Impulse"],
    good: {
      "Work & Career": "Bold action and entrepreneurial spirit drive success.",
      "Relationships": "Passionate pursuit and romantic adventure in love.",
      "Family & Home": "Energetic family leadership and exciting home projects.",
      "Health & Vitality": "High energy and motivation for fitness and adventure."
    },
    wrong: {
      "Work & Career": "Don't let impulsiveness lead to professional mistakes.",
      "Relationships": "Avoid chasing unavailable people or being too aggressive.",
      "Family & Home": "Be careful not to be domineering or disruptive in family.",
      "Health & Vitality": "Don't push physical limits recklessly."
    },
    imageUrl: "card_img/Wands12.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Knight_of_Wands"
  },
  {
    name: "Queen of Wands",
    description: "Confident charisma, creative leadership, and warm determination.",
    element: ["Fire", "Wands", "Confidence"],
    good: {
      "Work & Career": "Confident leadership and creative professional influence.",
      "Relationships": "Warm, charismatic partnerships with mutual admiration.",
      "Family & Home": "Nurturing home environment with creative family activities.",
      "Health & Vitality": "Balanced vitality and graceful approach to health."
    },
    wrong: {
      "Work & Career": "Don't let confidence become arrogance in professional settings.",
      "Relationships": "Avoid being too controlling or demanding in relationships.",
      "Family & Home": "Be careful not to overshadow family members with strong personality.",
      "Health & Vitality": "Don't neglect rest in pursuit of an active lifestyle."
    },
    imageUrl: "card_img/Wands13.jpg",
    imageLink: "https://en.wikipedia.org/wiki/Queen_of_Wands"
  },
  {
    name: "King of Wands",
    description: "Visionary leadership, bold action, and pioneering energy.",
    element: ["Fire", "Wands", "Vision"],
    good: {
      "Work & Career": "Natural leadership and visionary business acumen.",
      "Relationships": "Charismatic partnerships based on mutual respect and passion.",
      "Family & Home": "Inspiring family leadership and creative home vision.",
      "Health & Vitality": "Masterful energy management and inspiring health leadership."
    },
    wrong: {
      "Work & Career": "Don't let charisma overshadow practical business decisions.",
      "Relationships": "Avoid being domineering or using charm manipulatively.",
      "Family & Home": "Be careful not to be emotionally distant despite strong presence.",
      "Health & Vitality": "Don't neglect health in pursuit of ambitious goals."
    },
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

const categoryLabels = [
  'Work & Career',
  'Relationships',
  'Family & Home',
  'Health & Vitality'
];

const elementDescriptions = {
  Air: '‑ ideas, communication, and mental clarity',
  Earth: '‑ grounding, stability, and practical resources',
  Fire: '‑ passion, courage, and forward momentum',
  Water: '‑ emotion, intuition, and healing flow',
  Cups: '‑ feelings, creativity, and inner life',
  Pentacles: '‑ material needs, comfort, and abundance',
  Swords: '‑ thoughts, conflict, and truth',
  Wands: '‑ energy, inspiration, and ambition',
  Ace: '‑ new beginnings and fresh opportunity',
  Two: '‑ balance and partnership',
  Three: '‑ growth and collaboration',
  Four: '‑ stability and rest',
  Five: '‑ challenge and change',
  Six: '‑ harmony and progress',
  Seven: '‑ resilience and strategy',
  Eight: '‑ movement and effort',
  Nine: '‑ completion and reflection',
  Ten: '‑ fulfillment and release',
  Page: '‑ curiosity and new messages',
  Knight: '‑ action and pursuit',
  Queen: '‑ nurturing mastery',
  King: '‑ leadership and authority'
};

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

  cardElement.innerHTML = '';
  card.element.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item}${elementDescriptions[item] ? ' ' + elementDescriptions[item] : ''}`;
    cardElement.appendChild(li);
  });

  renderSummaryList(cardGood, card, 'good');
  renderSummaryList(cardWrong, card, 'wrong');

  resultSection.classList.remove('hidden');
  singleCardContainer.classList.remove('hidden');
  threeCardsContainer.classList.add('hidden');
}

function getCategorySummary(card, type, category) {
  const value = card[type];
  if (!value) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'object') return value[category] || value.default || '';
  return '';
}

function renderSummaryList(listElement, card, type) {
  listElement.innerHTML = categoryLabels
    .map((category) => `<li><strong>${category}:</strong> ${getCategorySummary(card, type, category)}</li>`)
    .join('');
}

function showThreeCards(cards) {
  resultSection.classList.remove('hidden');
  const cardContainers = [card1, card2, card3];
  cards.forEach((card, index) => {
    const container = cardContainers[index];
    container.innerHTML = `
      <img src="${card.imageUrl}" alt="${card.name}">
      <h3>${card.name}</h3>
      <p>${card.description}${card.story ? `<br><em>${card.story}</em>` : ''}</p>
      <div class="three-card-summary">
        <button type="button" class="toggle-button good-toggle">What's for Good</button>
        <div class="toggle-panel good-panel">
          <ul class="summary-list">
            ${categoryLabels
              .map((category) => `<li><strong>${category}:</strong> ${getCategorySummary(card, 'good', category)}</li>`)
              .join('')}
          </ul>
        </div>
        <button type="button" class="toggle-button attention-toggle">What's for Attention</button>
        <div class="toggle-panel attention-panel hidden">
          <ul class="summary-list">
            ${categoryLabels
              .map((category) => `<li><strong>${category}:</strong> ${getCategorySummary(card, 'wrong', category)}</li>`)
              .join('')}
          </ul>
        </div>
      </div>
    `;

    const goodToggle = container.querySelector('.good-toggle');
    const attentionToggle = container.querySelector('.attention-toggle');
    const goodPanel = container.querySelector('.good-panel');
    const attentionPanel = container.querySelector('.attention-panel');

    goodToggle.addEventListener('click', () => {
      goodPanel.classList.toggle('hidden');
      attentionPanel.classList.add('hidden');
    });

    attentionToggle.addEventListener('click', () => {
      attentionPanel.classList.toggle('hidden');
      goodPanel.classList.add('hidden');
    });
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
