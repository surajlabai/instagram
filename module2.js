// module2.js — Module 2: Intermediate English (DEMO)

const MODULE2 = {
  id: 'm2',
  badge: 'Module 2',
  title: 'Intermediate English',
  sub: 'Sentence Building & Confidence',
  icon: '🔥',
  desc: 'Develop grammatical accuracy and confidence.',
  topics: [

    // ═══════════════════════════════════════════
    // TOPIC 1: Modals
    // ═══════════════════════════════════════════
    {
      id: 'modals',
      title: 'Modals (can, could, may...)',
      icon: '🎭',
      intro: 'सीखो modal verbs',
      lessons: [
        {
          title: 'Step 1: Can (Ability)',
          type: 'info',
          content: '<p><b>Can</b> = सकता है (ability)</p>',
          examples: [
            { sentence: 'I can swim.', hi: 'मैं तैर सकता हूँ' },
            { sentence: 'She can sing.', hi: 'वह गा सकती है' },
            { sentence: 'He can drive.', hi: 'वह गाड़ी चला सकता है' },
            { sentence: 'We can help you.', hi: 'हम तुम्हारी मदद कर सकते हैं' },
            { sentence: 'They can come.', hi: 'वे आ सकते हैं' }
          ]
        },
        {
          title: 'Step 2: May (Permission)',
          type: 'info',
          content: '<p><b>May</b> = सकता है (formal permission)</p>',
          examples: [
            { sentence: 'May I come in?', hi: 'क्या मैं अंदर आ सकता हूँ?' },
            { sentence: 'May I sit here?', hi: 'क्या मैं यहाँ बैठ सकता हूँ?' },
            { sentence: 'You may go now.', hi: 'तुम अब जा सकते हो' },
            { sentence: 'May I ask a question?', hi: 'क्या मैं सवाल पूछ सकता हूँ?' },
            { sentence: 'May I use your pen?', hi: 'क्या मैं तुम्हारा पेन use कर सकता हूँ?' }
          ]
        },
        {
          title: 'Step 3: Should (Advice)',
          type: 'info',
          content: '<p><b>Should</b> = चाहिए (advice)</p>',
          examples: [
            { sentence: 'You should study hard.', hi: 'तुम्हें मेहनत करनी चाहिए' },
            { sentence: 'You should see a doctor.', hi: 'तुम्हें डॉक्टर को दिखाना चाहिए' },
            { sentence: 'We should help others.', hi: 'हमें दूसरों की मदद करनी चाहिए' },
            { sentence: 'She should rest.', hi: 'उसे आराम करना चाहिए' },
            { sentence: 'They should come early.', hi: 'उन्हें जल्दी आना चाहिए' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: 'I ___ swim very well.', options: ['can', 'may', 'should', 'must'], answer: 'can' },
        { type: 'mcq', q: '___ I come in?', options: ['Can', 'May', 'Should', 'Must'], answer: 'May' },
        { type: 'mcq', q: 'You ___ see a doctor.', options: ['can', 'may', 'should', 'must'], answer: 'should' },
        { type: 'mcq', q: 'She ___ sing beautifully.', options: ['can', 'may', 'should', 'must'], answer: 'can' },
        { type: 'mcq', q: 'You ___ study hard.', options: ['can', 'may', 'should', 'must'], answer: 'should' }
      ]
    },

    // ═══════════════════════════════════════════
    // TOPIC 2: Synonyms
    // ═══════════════════════════════════════════
    {
      id: 'synonyms',
      title: 'Synonyms',
      icon: '📖',
      intro: 'सीखो same meaning words',
      lessons: [
        {
          title: 'Step 1: What are Synonyms?',
          type: 'info',
          content: '<p><b>Synonyms</b> = Same meaning वाले words</p>',
          examples: [
            { word1: 'Happy', word2: 'Joyful' },
            { word1: 'Big', word2: 'Large' },
            { word1: 'Fast', word2: 'Quick' },
            { word1: 'Smart', word2: 'Clever' },
            { word1: 'Beautiful', word2: 'Pretty' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: 'Synonym of "Happy"?', options: ['Sad', 'Joyful', 'Angry', 'Tired'], answer: 'Joyful' },
        { type: 'mcq', q: 'Synonym of "Big"?', options: ['Small', 'Large', 'Tiny', 'Short'], answer: 'Large' },
        { type: 'mcq', q: 'Synonym of "Fast"?', options: ['Slow', 'Quick', 'Late', 'Heavy'], answer: 'Quick' },
        { type: 'mcq', q: 'Synonym of "Smart"?', options: ['Dull', 'Clever', 'Lazy', 'Weak'], answer: 'Clever' },
        { type: 'mcq', q: 'Synonym of "Beautiful"?', options: ['Ugly', 'Pretty', 'Bad', 'Old'], answer: 'Pretty' }
      ]
    },

    // ═══════════════════════════════════════════
    // TOPIC 3: Antonyms
    // ═══════════════════════════════════════════
    {
      id: 'antonyms',
      title: 'Antonyms',
      icon: '🔄',
      intro: 'सीखो opposite words',
      lessons: [
        {
          title: 'Step 1: What are Antonyms?',
          type: 'info',
          content: '<p><b>Antonyms</b> = Opposite meaning वाले words</p>',
          examples: [
            { word1: 'Hot', word2: 'Cold' },
            { word1: 'Big', word2: 'Small' },
            { word1: 'Happy', word2: 'Sad' },
            { word1: 'Fast', word2: 'Slow' },
            { word1: 'Day', word2: 'Night' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: 'Antonym of "Hot"?', options: ['Warm', 'Cold', 'Boiling', 'Sunny'], answer: 'Cold' },
        { type: 'mcq', q: 'Antonym of "Big"?', options: ['Large', 'Small', 'Huge', 'Giant'], answer: 'Small' },
        { type: 'mcq', q: 'Antonym of "Happy"?', options: ['Joyful', 'Sad', 'Glad', 'Cheerful'], answer: 'Sad' },
        { type: 'mcq', q: 'Antonym of "Fast"?', options: ['Quick', 'Slow', 'Rapid', 'Swift'], answer: 'Slow' },
        { type: 'mcq', q: 'Antonym of "Day"?', options: ['Morning', 'Night', 'Noon', 'Evening'], answer: 'Night' }
      ]
    },

    // ═══════════════════════════════════════════
    // TOPIC 4: Active & Passive Voice
    // ═══════════════════════════════════════════
    {
      id: 'voice',
      title: 'Active & Passive Voice',
      icon: '🗣️',
      intro: 'सीखो active से passive बनाना',
      lessons: [
        {
          title: 'Step 1: Active vs Passive',
          type: 'info',
          content: `
            <p><b>Active:</b> Subject + Verb + Object (Ram eats apple)</p>
            <p><b>Passive:</b> Object + be + V3 + by Subject (Apple is eaten by Ram)</p>
          `,
          examples: [
            { active: 'Ram eats an apple.', passive: 'An apple is eaten by Ram.' },
            { active: 'She reads a book.', passive: 'A book is read by her.' },
            { active: 'They play cricket.', passive: 'Cricket is played by them.' },
            { active: 'He writes a letter.', passive: 'A letter is written by him.' },
            { active: 'I drink water.', passive: 'Water is drunk by me.' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: 'Passive of "Ram eats an apple"?', options: ['An apple is eaten by Ram', 'Apple eaten Ram', 'Ram is eaten by apple', 'An apple eats Ram'], answer: 'An apple is eaten by Ram' },
        { type: 'mcq', q: 'Passive of "She reads a book"?', options: ['A book is read by her', 'Book reads she', 'She is read by book', 'A book reads her'], answer: 'A book is read by her' },
        { type: 'mcq', q: 'Passive of "They play cricket"?', options: ['Cricket is played by them', 'Cricket plays them', 'They are played by cricket', 'Cricket play they'], answer: 'Cricket is played by them' },
        { type: 'mcq', q: 'Passive of "He writes a letter"?', options: ['A letter is written by him', 'Letter writes him', 'He is written by letter', 'A letter writes he'], answer: 'A letter is written by him' },
        { type: 'mcq', q: 'Passive of "I drink water"?', options: ['Water is drunk by me', 'Water drinks me', 'I am drunk by water', 'Water drink I'], answer: 'Water is drunk by me' }
      ]
    },

    // ═══════════════════════════════════════════
    // TOPIC 5: Conditionals
    // ═══════════════════════════════════════════
    {
      id: 'conditionals',
      title: 'Conditionals',
      icon: '❓',
      intro: 'सीखो if वाले sentences',
      lessons: [
        {
          title: 'Step 1: First Conditional',
          type: 'info',
          content: `
            <p><b>First Conditional:</b> If + Present, will + Verb</p>
            <p>Real possible situations के लिए</p>
          `,
          examples: [
            { sentence: 'If it rains, I will stay home.', hi: 'अगर बारिश होगी, मैं घर रहूँगा' },
            { sentence: 'If you study, you will pass.', hi: 'अगर तुम पढ़ोगे, पास होगे' },
            { sentence: 'If she comes, I will meet her.', hi: 'अगर वो आएगी, मैं मिलूँगा' },
            { sentence: 'If we hurry, we will catch the train.', hi: 'अगर हम जल्दी करेंगे, ट्रेन पकड़ेंगे' },
            { sentence: 'If they call, I will answer.', hi: 'अगर वे कॉल करेंगे, मैं जवाब दूँगा' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: 'If it ___, I will stay home.', options: ['rain', 'rains', 'rained', 'raining'], answer: 'rains' },
        { type: 'mcq', q: 'If you study, you ___ pass.', options: ['will', 'would', 'are', 'were'], answer: 'will' },
        { type: 'mcq', q: 'If she ___, I will meet her.', options: ['come', 'comes', 'came', 'coming'], answer: 'comes' },
        { type: 'mcq', q: 'If we hurry, we ___ catch the train.', options: ['will', 'would', 'were', 'are'], answer: 'will' },
        { type: 'mcq', q: 'If they ___, I will answer.', options: ['call', 'calls', 'called', 'calling'], answer: 'call' }
      ]
    }
  ]
};
