// This is the main story file. You can edit everything here from your phone.
// Keep it simple. No em dashes. Just honest words.

export const storyData = {
  // Opening
  opening: {
    forLine: "For Meitcy",
    subtitle: "I made something for you.",
    button: "Open the letter",
    catHint: "psst, open it",
  },

  // Chapter 1: Senior High
  chapter1: {
    title: "Senior High School",
    date: "Before September 2024",
    lines: [
      "I think I already liked you before you even knew it.",
      "Back in senior high school, I already had a crush on you.",
      "I remember noticing your eyes. There was just something about them that made me look twice.",
      "It was not dramatic or anything. I just liked you.",
      "At that time, I did not know where it would go. I just knew I liked you.",
    ],
    catThought: "he had a crush already...",
    nicknameDrop: "Mademoiselle",
  },

  // Chapter 2: Graduation and College + Programming Question
  chapter2: {
    title: "Then we graduated",
    subtitle: "Freshmen in college",
    lines: [
      "After senior high, we both became freshmen in college.",
      "I still had a crush on you.",
      "I wanted to talk to you, but I had no idea what topic to start with.",
    ],
    gameDialogue: [
      { speaker: "Me", text: "I want to talk to her." },
      { speaker: "Me", text: "Okay, what do I even say?" },
      { speaker: "Me", text: "Think." },
      { speaker: "Me", text: "Think." },
      { speaker: "Me", text: "I got it." },
      { speaker: "Me", text: "unsay language inyo first gikuan?", isMessage: true },
    ],
    afterDialogue: [
      "Yeah. That was my opening.",
      "And somehow, it worked.",
      "That random question became the start of us talking then got to tiktok and doing streak together.",
    ],
    dateLabel: "September 23, 2024",
    catReaction: "confused cat noises",
  },

  // Chapter 3: Getting to know her
  chapter3: {
    title: "Getting to know you",
    lines: [
      "The problem was that talking to you did not make my crush go away.",
      "It made it worse.",
      "Because before, I only liked you from afar.",
      "But after we started talking, I started liking more than just your appearance.",
      "I started liking the conversations. The random things we talked about.",
      "Your personality. Your little habits. The things I learned about you.",
      "I started looking forward to talking to you.",
      "You became someone important to me.",
      "And I did not even notice when it happened. It just did.",
    ],
    easterEggs: [
      "Supreme Leader was busy today",
      "Snorlax mode activated",
      "President is online",
    ],
  },

  // Chapter 4: Timeline Two Years
  timeline: {
    title: "Two years",
    items: [
      {
        date: "Senior High School",
        label: "The crush",
        desc: "I already liked you. You probably had no idea.",
        icon: "eye",
      },
      {
        date: "Graduation",
        label: "We moved on",
        desc: "We both became freshmen. I still liked you.",
        icon: "cap",
      },
      {
        date: "September 23, 2024",
        label: "The programming question",
        desc: "unsay language inyo first gikuan? That was it. That was the start.",
        icon: "code",
        highlight: true,
      },
      {
        date: "After that",
        label: "One conversation became more",
        desc: "We kept talking. Tiktok. Streaks. Random chats.",
        icon: "chat",
      },
      {
        date: "Somewhere along the way",
        label: "I started getting to know you",
        desc: "And I realized I was not just crushing anymore.",
        icon: "heart",
      },
      {
        date: "Then I knew",
        label: "My feelings were not going away",
        desc: "The more I knew you, the more I fell for you.",
        icon: "star",
      },
      {
        date: "September 23, 2026",
        label: "Two years since we started talking",
        desc: "Today. Two years later. And I am finally telling you.",
        icon: "tulip",
        highlight: true,
      },
    ],
  },

  // Chapter 5: Realization
  realization: {
    title: "What happened",
    lines: [
      "I already liked you back in senior high school.",
      "Then I started talking to you.",
      "And somehow, getting to know you only made me like you more.",
      "It was not just about your eyes anymore.",
      "I started liking the person behind the crush.",
      "And somewhere along the way, I realized I had fallen for you.",
      "Not just a crush. Something deeper.",
    ],
  },

  // Final Letter
  letter: {
    greeting: "Meitcy,",
    paragraphs: [
      "I already liked you back in senior high school.",
      "I do not think you even knew.",
      "Then after graduation, we ended up becoming freshmen in college.",
      "I wanted to talk to you, but I had no idea what to say.",
      "So I asked you what programming language they use.",
      "Still one of the most random ways I could have started a conversation.",
      "But somehow, that became the start of us talking.",
      "And the more we talked, the more I got to know you.",
      "And honestly, that only made things worse for me.",
      "Because I was already crushing on you.",
      "Then I got to know you.",
      "And I fell for you even more.",
      "It is been two years since that first conversation.",
      "And I think I have kept this to myself long enough.",
    ],
    closing: "I really like you, Meitcy. I have for a long time.",
    question: "Meitcy, will you be my girlfriend?",
    signature: "From the guy who asked about programming languages",
    ps: "P.S. You are still my Supreme Leader, Mademoiselle. And my favorite Snorlax. Mon Coeur.",
  },

  // Responses
  responses: {
    yes: {
      title: "You just made September 23 my favorite day.",
      subtitle: "I love you, Meitcy.",
      message: "Thank you. Really. I have liked you since senior high and I finally said it. And you said yes.",
      cats: "celebration",
    },
    no: {
      title: "Okay.",
      subtitle: "Thank you for being honest with me, Meitcy.",
      message: "I understand. Thank you for reading this and for the last two years of talking. That still means a lot to me.",
      button: "Read the letter again",
    },
    noPlayful: [
      "Are you sure?",
      "Wait...",
      "Really?",
      "Meitcy...",
      "Think about it.",
      "One more chance?",
      "President, please reconsider?",
      "My Snorlax...",
      "Mademoiselle?",
      "Last chance, Love?",
    ],
  },

  // Nicknames (use sparingly as easter eggs)
  nicknames: {
    main: "Meitcy",
    others: ["Mademoiselle", "Supreme Leader", "Love", "Baby", "President", "Snorlax", "Mon Coeur"],
  },

  // Footer
  footer: {
    madeFor: "Made for Meitcy, with care.",
    date: "September 23, 2026",
    note: "Two years since we started talking.",
  },
};

export type StoryData = typeof storyData;
