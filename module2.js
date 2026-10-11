// ═══════════════════════════════════════════════════════════
// module2.js — Module 2: Intermediate English (UPGRADED)
// ═══════════════════════════════════════════════════════════
// Structure:
//   MODULE2 = {
//     id, badge, title, sub, icon, desc,
//     topics: [ { id, title, icon, intro, lessons, practice } ]
//   }
//
// Supported lesson example types (HTML auto-detect karega):
//   1. { sentence, hi }           → Modals/Conditionals
//   2. { word1, word2 }           → Synonyms/Antonyms
//   3. { active, passive }        → Voice
//   4. { before, after }          → Tenses
//   5. { rule, examples: [...] }  → Prepositions/Articles
//   6. { correct, wrong, why }    → Punctuation/Correction
// ═══════════════════════════════════════════════════════════

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
      intro: 'सीखो modal verbs — can, could, may, might, should, must',
      lessons: [
        {
          title: 'Step 1: Can (Ability)',
          type: 'info',
          content: '<p><b>Can</b> = सकता है (ability — वर्तमान में)</p><p>Structure: Subject + can + V1</p>',
          examples: [
            { sentence: 'I can swim.', hi: 'मैं तैर सकता हूँ' },
            { sentence: 'She can sing.', hi: 'वह गा सकती है' },
            { sentence: 'He can drive.', hi: 'वह गाड़ी चला सकता है' },
            { sentence: 'We can help you.', hi: 'हम तुम्हारी मदद कर सकते हैं' },
            { sentence: 'They can come.', hi: 'वे आ सकते हैं' },
            { sentence: 'Can you speak English?', hi: 'क्या तुम English बोल सकते हो?' },
            { sentence: 'I cannot (can\'t) swim.', hi: 'मैं तैर नहीं सकता' },
            { sentence: 'She can dance very well.', hi: 'वह बहुत अच्छा नाच सकती है' }
          ]
        },
        {
          title: 'Step 2: Could (Past Ability / Polite)',
          type: 'info',
          content: '<p><b>Could</b> = सकता था (past ability) / क्या मैं...? (polite request)</p>',
          examples: [
            { sentence: 'I could swim when I was young.', hi: 'मैं जवान था तब तैर सकता था' },
            { sentence: 'Could you help me, please?', hi: 'क्या आप मेरी मदद कर सकते हैं?' },
            { sentence: 'She could speak French.', hi: 'वह French बोल सकती थी' },
            { sentence: 'Could I use your phone?', hi: 'क्या मैं आपका फोन use कर सकता हूँ?' },
            { sentence: 'We could not come yesterday.', hi: 'हम कल नहीं आ सकते थे' }
          ]
        },
        {
          title: 'Step 3: May (Permission)',
          type: 'info',
          content: '<p><b>May</b> = सकता है (formal permission) / शायद (possibility)</p>',
          examples: [
            { sentence: 'May I come in?', hi: 'क्या मैं अंदर आ सकता हूँ?' },
            { sentence: 'May I sit here?', hi: 'क्या मैं यहाँ बैठ सकता हूँ?' },
            { sentence: 'You may go now.', hi: 'तुम अब जा सकते हो' },
            { sentence: 'May I ask a question?', hi: 'क्या मैं सवाल पूछ सकता हूँ?' },
            { sentence: 'May I use your pen?', hi: 'क्या मैं तुम्हारा पेन use कर सकता हूँ?' },
            { sentence: 'It may rain today.', hi: 'आज बारिश हो सकती है' }
          ]
        },
        {
          title: 'Step 4: Might (Possibility)',
          type: 'info',
          content: '<p><b>Might</b> = शायद (weak possibility — may se kam)</p>',
          examples: [
            { sentence: 'It might rain tomorrow.', hi: 'कल शायद बारिश हो' },
            { sentence: 'She might come to the party.', hi: 'वह शायद पार्टी में आए' },
            { sentence: 'He might be at home.', hi: 'वह शायद घर पर हो' },
            { sentence: 'They might not agree.', hi: 'वे शायद न मानें' },
            { sentence: 'I might go to Delhi next week.', hi: 'मैं अगले हफ्ते दिल्ली जा सकता हूँ' }
          ]
        },
        {
          title: 'Step 5: Should (Advice)',
          type: 'info',
          content: '<p><b>Should</b> = चाहिए (advice / suggestion)</p>',
          examples: [
            { sentence: 'You should study hard.', hi: 'तुम्हें मेहनत करनी चाहिए' },
            { sentence: 'You should see a doctor.', hi: 'तुम्हें डॉक्टर को दिखाना चाहिए' },
            { sentence: 'We should help others.', hi: 'हमें दूसरों की मदद करनी चाहिए' },
            { sentence: 'She should rest.', hi: 'उसे आराम करना चाहिए' },
            { sentence: 'They should come early.', hi: 'उन्हें जल्दी आना चाहिए' },
            { sentence: 'You should not smoke.', hi: 'तुम्हें धूम्रपान नहीं करना चाहिए' }
          ]
        },
        {
          title: 'Step 6: Must (Obligation)',
          type: 'info',
          content: '<p><b>Must</b> = ज़रूर / चाहिए (strong obligation / necessity)</p>',
          examples: [
            { sentence: 'You must wear a helmet.', hi: 'तुम्हें हेलमेट पहनना ज़रूरी है' },
            { sentence: 'I must finish this work today.', hi: 'मुझे आज यह काम खत्म करना है' },
            { sentence: 'You must not smoke here.', hi: 'यहाँ धूम्रपान निषेध है' },
            { sentence: 'She must be tired.', hi: 'वह ज़रूर थकी होगी' },
            { sentence: 'We must respect our parents.', hi: 'हमें अपने माता-पिता का सम्मान करना चाहिए' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: 'I ___ swim very well.', options: ['can', 'may', 'should', 'must'], answer: 'can' },
        { type: 'mcq', q: '___ I come in?', options: ['Can', 'May', 'Should', 'Must'], answer: 'May' },
        { type: 'mcq', q: 'You ___ see a doctor.', options: ['can', 'may', 'should', 'must'], answer: 'should' },
        { type: 'mcq', q: 'She ___ sing beautifully.', options: ['can', 'may', 'should', 'must'], answer: 'can' },
        { type: 'mcq', q: 'You ___ study hard.', options: ['can', 'may', 'should', 'must'], answer: 'should' },
        { type: 'mcq', q: 'It ___ rain tomorrow.', options: ['can', 'might', 'should', 'must'], answer: 'might' },
        { type: 'mcq', q: 'You ___ wear a helmet.', options: ['can', 'may', 'should', 'must'], answer: 'must' },
        { type: 'mcq', q: '___ you help me, please?', options: ['Could', 'May', 'Should', 'Must'], answer: 'Could' },
        { type: 'mcq', q: 'I ___ swim when I was young.', options: ['can', 'could', 'may', 'must'], answer: 'could' },
        { type: 'mcq', q: 'We ___ respect our parents.', options: ['can', 'may', 'must', 'might'], answer: 'must' }
      ]
    },

    // ═══════════════════════════════════════════
    // TOPIC 2: Synonyms
    // ═══════════════════════════════════════════
    {
      id: 'synonyms',
      title: 'Synonyms',
      icon: '📖',
      intro: 'सीखो same meaning वाले words',
      lessons: [
        {
          title: 'Step 1: Basic Synonyms',
          type: 'info',
          content: '<p><b>Synonyms</b> = Same meaning वाले words</p>',
          examples: [
            { word1: 'Happy', word2: 'Joyful' },
            { word1: 'Big', word2: 'Large' },
            { word1: 'Fast', word2: 'Quick' },
            { word1: 'Smart', word2: 'Clever' },
            { word1: 'Beautiful', word2: 'Pretty' },
            { word1: 'Small', word2: 'Tiny' },
            { word1: 'Begin', word2: 'Start' },
            { word1: 'End', word2: 'Finish' }
          ]
        },
        {
          title: 'Step 2: Advanced Synonyms',
          type: 'info',
          content: '<p>Advanced words के synonyms — writing को powerful बनाओ</p>',
          examples: [
            { word1: 'Important', word2: 'Crucial' },
            { word1: 'Difficult', word2: 'Challenging' },
            { word1: 'Interesting', word2: 'Fascinating' },
            { word1: 'Angry', word2: 'Furious' },
            { word1: 'Scared', word2: 'Terrified' },
            { word1: 'Tired', word2: 'Exhausted' },
            { word1: 'Rich', word2: 'Wealthy' },
            { word1: 'Brave', word2: 'Courageous' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: 'Synonym of "Happy"?', options: ['Sad', 'Joyful', 'Angry', 'Tired'], answer: 'Joyful' },
        { type: 'mcq', q: 'Synonym of "Big"?', options: ['Small', 'Large', 'Tiny', 'Short'], answer: 'Large' },
        { type: 'mcq', q: 'Synonym of "Fast"?', options: ['Slow', 'Quick', 'Late', 'Heavy'], answer: 'Quick' },
        { type: 'mcq', q: 'Synonym of "Smart"?', options: ['Dull', 'Clever', 'Lazy', 'Weak'], answer: 'Clever' },
        { type: 'mcq', q: 'Synonym of "Beautiful"?', options: ['Ugly', 'Pretty', 'Bad', 'Old'], answer: 'Pretty' },
        { type: 'mcq', q: 'Synonym of "Important"?', options: ['Useless', 'Crucial', 'Boring', 'Easy'], answer: 'Crucial' },
        { type: 'mcq', q: 'Synonym of "Angry"?', options: ['Calm', 'Furious', 'Happy', 'Sleepy'], answer: 'Furious' },
        { type: 'mcq', q: 'Synonym of "Tired"?', options: ['Fresh', 'Exhausted', 'Active', 'Energetic'], answer: 'Exhausted' },
        { type: 'mcq', q: 'Synonym of "Brave"?', options: ['Coward', 'Courageous', 'Weak', 'Scared'], answer: 'Courageous' },
        { type: 'mcq', q: 'Synonym of "Begin"?', options: ['End', 'Start', 'Stop', 'Close'], answer: 'Start' }
      ]
    },

    // ═══════════════════════════════════════════
    // TOPIC 3: Antonyms
    // ═══════════════════════════════════════════
    {
      id: 'antonyms',
      title: 'Antonyms',
      icon: '🔄',
      intro: 'सीखो opposite meaning वाले words',
      lessons: [
        {
          title: 'Step 1: Basic Antonyms',
          type: 'info',
          content: '<p><b>Antonyms</b> = Opposite meaning वाले words</p>',
          examples: [
            { word1: 'Hot', word2: 'Cold' },
            { word1: 'Big', word2: 'Small' },
            { word1: 'Happy', word2: 'Sad' },
            { word1: 'Fast', word2: 'Slow' },
            { word1: 'Day', word2: 'Night' },
            { word1: 'Up', word2: 'Down' },
            { word1: 'Open', word2: 'Close' },
            { word1: 'Rich', word2: 'Poor' }
          ]
        },
        {
          title: 'Step 2: Advanced Antonyms',
          type: 'info',
          content: '<p>Advanced opposite words</p>',
          examples: [
            { word1: 'Ancient', word2: 'Modern' },
            { word1: 'Victory', word2: 'Defeat' },
            { word1: 'Generous', word2: 'Miserly' },
            { word1: 'Brave', word2: 'Cowardly' },
            { word1: 'Increase', word2: 'Decrease' },
            { word1: 'Accept', word2: 'Reject' },
            { word1: 'Expand', word2: 'Contract' },
            { word1: 'Praise', word2: 'Criticize' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: 'Antonym of "Hot"?', options: ['Warm', 'Cold', 'Boiling', 'Sunny'], answer: 'Cold' },
        { type: 'mcq', q: 'Antonym of "Big"?', options: ['Large', 'Small', 'Huge', 'Giant'], answer: 'Small' },
        { type: 'mcq', q: 'Antonym of "Happy"?', options: ['Joyful', 'Sad', 'Glad', 'Cheerful'], answer: 'Sad' },
        { type: 'mcq', q: 'Antonym of "Fast"?', options: ['Quick', 'Slow', 'Rapid', 'Swift'], answer: 'Slow' },
        { type: 'mcq', q: 'Antonym of "Day"?', options: ['Morning', 'Night', 'Noon', 'Evening'], answer: 'Night' },
        { type: 'mcq', q: 'Antonym of "Ancient"?', options: ['Old', 'Modern', 'Past', 'Historic'], answer: 'Modern' },
        { type: 'mcq', q: 'Antonym of "Victory"?', options: ['Win', 'Defeat', 'Success', 'Triumph'], answer: 'Defeat' },
        { type: 'mcq', q: 'Antonym of "Accept"?', options: ['Take', 'Reject', 'Receive', 'Agree'], answer: 'Reject' },
        { type: 'mcq', q: 'Antonym of "Increase"?', options: ['Grow', 'Decrease', 'Rise', 'Expand'], answer: 'Decrease' },
        { type: 'mcq', q: 'Antonym of "Praise"?', options: ['Applaud', 'Criticize', 'Admire', 'Respect'], answer: 'Criticize' }
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
          title: 'Step 1: Active vs Passive — Present Simple',
          type: 'info',
          content: `
            <p><b>Active:</b> Subject + V1/V-s + Object (Ram eats an apple)</p>
            <p><b>Passive:</b> Object + is/am/are + V3 + by Subject (An apple is eaten by Ram)</p>
          `,
          examples: [
            { active: 'Ram eats an apple.', passive: 'An apple is eaten by Ram.' },
            { active: 'She reads a book.', passive: 'A book is read by her.' },
            { active: 'They play cricket.', passive: 'Cricket is played by them.' },
            { active: 'He writes a letter.', passive: 'A letter is written by him.' },
            { active: 'I drink water.', passive: 'Water is drunk by me.' }
          ]
        },
        {
          title: 'Step 2: Active vs Passive — Past Simple',
          type: 'info',
          content: `
            <p><b>Active:</b> Subject + V2 + Object</p>
            <p><b>Passive:</b> Object + was/were + V3 + by Subject</p>
          `,
          examples: [
            { active: 'Ram ate an apple.', passive: 'An apple was eaten by Ram.' },
            { active: 'She wrote a letter.', passive: 'A letter was written by her.' },
            { active: 'They played cricket.', passive: 'Cricket was played by them.' },
            { active: 'He broke the glass.', passive: 'The glass was broken by him.' },
            { active: 'I saw a bird.', passive: 'A bird was seen by me.' }
          ]
        },
        {
          title: 'Step 3: Active vs Passive — Future Simple',
          type: 'info',
          content: `
            <p><b>Active:</b> Subject + will + V1 + Object</p>
            <p><b>Passive:</b> Object + will be + V3 + by Subject</p>
          `,
          examples: [
            { active: 'Ram will eat an apple.', passive: 'An apple will be eaten by Ram.' },
            { active: 'She will write a letter.', passive: 'A letter will be written by her.' },
            { active: 'They will play cricket.', passive: 'Cricket will be played by them.' },
            { active: 'He will buy a car.', passive: 'A car will be bought by him.' },
            { active: 'I will finish the work.', passive: 'The work will be finished by me.' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: 'Passive of "Ram eats an apple"?', options: ['An apple is eaten by Ram', 'Apple eaten Ram', 'Ram is eaten by apple', 'An apple eats Ram'], answer: 'An apple is eaten by Ram' },
        { type: 'mcq', q: 'Passive of "She reads a book"?', options: ['A book is read by her', 'Book reads she', 'She is read by book', 'A book reads her'], answer: 'A book is read by her' },
        { type: 'mcq', q: 'Passive of "They play cricket"?', options: ['Cricket is played by them', 'Cricket plays them', 'They are played by cricket', 'Cricket play they'], answer: 'Cricket is played by them' },
        { type: 'mcq', q: 'Passive of "He writes a letter"?', options: ['A letter is written by him', 'Letter writes him', 'He is written by letter', 'A letter writes he'], answer: 'A letter is written by him' },
        { type: 'mcq', q: 'Passive of "I drink water"?', options: ['Water is drunk by me', 'Water drinks me', 'I am drunk by water', 'Water drink I'], answer: 'Water is drunk by me' },
        { type: 'mcq', q: 'Passive of "Ram ate an apple"?', options: ['An apple was eaten by Ram', 'An apple is eaten by Ram', 'An apple eaten Ram', 'Ram ate apple'], answer: 'An apple was eaten by Ram' },
        { type: 'mcq', q: 'Passive of "She wrote a letter"?', options: ['A letter was written by her', 'A letter is written by her', 'Letter wrote she', 'She written letter'], answer: 'A letter was written by her' },
        { type: 'mcq', q: 'Passive of "He broke the glass"?', options: ['The glass was broken by him', 'Glass breaks him', 'The glass is broken by him', 'He breaks glass'], answer: 'The glass was broken by him' },
        { type: 'mcq', q: 'Passive of "Ram will eat an apple"?', options: ['An apple will be eaten by Ram', 'An apple is eaten by Ram', 'An apple was eaten by Ram', 'Ram will eat apple'], answer: 'An apple will be eaten by Ram' },
        { type: 'mcq', q: 'Passive of "She will write a letter"?', options: ['A letter will be written by her', 'A letter is written by her', 'A letter was written by her', 'Letter write she'], answer: 'A letter will be written by her' }
      ]
    },

    // ═══════════════════════════════════════════
    // TOPIC 5: Conditionals
    // ═══════════════════════════════════════════
    {
      id: 'conditionals',
      title: 'Conditionals',
      icon: '❓',
      intro: 'सीखो if वाले sentences (3 types)',
      lessons: [
        {
          title: 'Step 1: First Conditional (Real / Possible)',
          type: 'info',
          content: `
            <p><b>Structure:</b> If + Present Simple, will + V1</p>
            <p>Real possible situations के लिए</p>
          `,
          examples: [
            { sentence: 'If it rains, I will stay home.', hi: 'अगर बारिश होगी, मैं घर रहूँगा' },
            { sentence: 'If you study, you will pass.', hi: 'अगर तुम पढ़ोगे, पास होगे' },
            { sentence: 'If she comes, I will meet her.', hi: 'अगर वो आएगी, मैं मिलूँगा' },
            { sentence: 'If we hurry, we will catch the train.', hi: 'अगर हम जल्दी करेंगे, ट्रेन पकड़ेंगे' },
            { sentence: 'If they call, I will answer.', hi: 'अगर वे कॉल करेंगे, मैं जवाब दूँगा' }
          ]
        },
        {
          title: 'Step 2: Second Conditional (Imaginary)',
          type: 'info',
          content: `
            <p><b>Structure:</b> If + Past Simple, would + V1</p>
            <p>Imaginary / unreal situations के लिए (जो हो नहीं सकती)</p>
          `,
          examples: [
            { sentence: 'If I were rich, I would buy a car.', hi: 'अगर मैं अमीर होता, कार खरीदता' },
            { sentence: 'If I had wings, I would fly.', hi: 'अगर मेरे पंख होते, मैं उड़ता' },
            { sentence: 'If she knew, she would tell us.', hi: 'अगर उसे पता होता, वह बताती' },
            { sentence: 'If I won the lottery, I would travel.', hi: 'अगर मैं लॉटरी जीतता, घूमने जाता' },
            { sentence: 'If he were here, he would help.', hi: 'अगर वह यहाँ होता, मदद करता' }
          ]
        },
        {
          title: 'Step 3: Third Conditional (Past Regret)',
          type: 'info',
          content: `
            <p><b>Structure:</b> If + had + V3, would have + V3</p>
            <p>Past में जो हो नहीं सका, उसके लिए (regret)</p>
          `,
          examples: [
            { sentence: 'If I had studied, I would have passed.', hi: 'अगर मैंने पढ़ाई की होती, पास हो जाता' },
            { sentence: 'If she had come, I would have met her.', hi: 'अगर वह आई होती, मैं मिल लेता' },
            { sentence: 'If we had left early, we would have caught the train.', hi: 'अगर हम जल्दी निकले होते, ट्रेन पकड़ लेते' },
            { sentence: 'If he had tried, he would have won.', hi: 'अगर उसने कोशिश की होती, जीत जाता' },
            { sentence: 'If they had told me, I would have helped.', hi: 'अगर उन्होंने बताया होता, मैं मदद करता' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: 'If it ___, I will stay home.', options: ['rain', 'rains', 'rained', 'raining'], answer: 'rains' },
        { type: 'mcq', q: 'If you study, you ___ pass.', options: ['will', 'would', 'are', 'were'], answer: 'will' },
        { type: 'mcq', q: 'If she ___, I will meet her.', options: ['come', 'comes', 'came', 'coming'], answer: 'comes' },
        { type: 'mcq', q: 'If we hurry, we ___ catch the train.', options: ['will', 'would', 'were', 'are'], answer: 'will' },
        { type: 'mcq', q: 'If they ___, I will answer.', options: ['call', 'calls', 'called', 'calling'], answer: 'call' },
        { type: 'mcq', q: 'If I ___ rich, I would buy a car.', options: ['am', 'was', 'were', 'be'], answer: 'were' },
        { type: 'mcq', q: 'If I had wings, I ___ fly.', options: ['will', 'would', 'am', 'was'], answer: 'would' },
        { type: 'mcq', q: 'If I had studied, I ___ passed.', options: ['will have', 'would have', 'had', 'have'], answer: 'would have' },
        { type: 'mcq', q: 'If she ___ come, I would have met her.', options: ['has', 'had', 'have', 'having'], answer: 'had' },
        { type: 'mcq', q: 'If he ___ tried, he would have won.', options: ['has', 'had', 'have', 'was'], answer: 'had' }
      ]
    },

    // ═══════════════════════════════════════════
    // TOPIC 6: Tenses (NEW!)
    // ═══════════════════════════════════════════
    {
      id: 'tenses',
      title: 'Tenses Overview',
      icon: '⏰',
      intro: 'सीखो 12 tenses — Present, Past, Future',
      lessons: [
        {
          title: 'Step 1: Present Simple',
          type: 'info',
          content: '<p><b>Present Simple:</b> Habitual actions, facts</p><p>Structure: Subject + V1/V-s + Object</p>',
          examples: [
            { sentence: 'I eat rice every day.', hi: 'मैं रोज़ चावल खाता हूँ' },
            { sentence: 'She goes to school.', hi: 'वह स्कूल जाती है' },
            { sentence: 'The sun rises in the east.', hi: 'सूरज पूर्व में उगता है' },
            { sentence: 'We play cricket on Sundays.', hi: 'हम रविवार को क्रिकेट खेलते हैं' }
          ]
        },
        {
          title: 'Step 2: Present Continuous',
          type: 'info',
          content: '<p><b>Present Continuous:</b> Action happening now</p><p>Structure: Subject + is/am/are + V-ing</p>',
          examples: [
            { sentence: 'I am eating rice now.', hi: 'मैं अभी चावल खा रहा हूँ' },
            { sentence: 'She is reading a book.', hi: 'वह किताब पढ़ रही है' },
            { sentence: 'They are playing football.', hi: 'वे फुटबॉल खेल रहे हैं' },
            { sentence: 'It is raining outside.', hi: 'बाहर बारिश हो रही है' }
          ]
        },
        {
          title: 'Step 3: Present Perfect',
          type: 'info',
          content: '<p><b>Present Perfect:</b> Just completed / experience</p><p>Structure: Subject + has/have + V3</p>',
          examples: [
            { sentence: 'I have eaten my lunch.', hi: 'मैंने दोपहर का खाना खा लिया' },
            { sentence: 'She has finished her work.', hi: 'उसने अपना काम पूरा कर लिया' },
            { sentence: 'They have gone to Delhi.', hi: 'वे दिल्ली गए हैं' },
            { sentence: 'I have never seen a lion.', hi: 'मैंने कभी शेर नहीं देखा' }
          ]
        },
        {
          title: 'Step 4: Past Simple',
          type: 'info',
          content: '<p><b>Past Simple:</b> Completed action in past</p><p>Structure: Subject + V2 + Object</p>',
          examples: [
            { sentence: 'I ate rice yesterday.', hi: 'मैंने कल चावल खाया' },
            { sentence: 'She went to school.', hi: 'वह स्कूल गई' },
            { sentence: 'They played football.', hi: 'उन्होंने फुटबॉल खेला' },
            { sentence: 'It rained heavily last night.', hi: 'कल रात तेज़ बारिश हुई' }
          ]
        },
        {
          title: 'Step 5: Past Continuous',
          type: 'info',
          content: '<p><b>Past Continuous:</b> Action was happening in past</p><p>Structure: Subject + was/were + V-ing</p>',
          examples: [
            { sentence: 'I was eating rice at 8 pm.', hi: 'मैं 8 बजे चावल खा रहा था' },
            { sentence: 'She was reading a book.', hi: 'वह किताब पढ़ रही थी' },
            { sentence: 'They were playing cricket.', hi: 'वे क्रिकेट खेल रहे थे' },
            { sentence: 'It was raining all night.', hi: 'पूरी रात बारिश हो रही थी' }
          ]
        },
        {
          title: 'Step 6: Past Perfect',
          type: 'info',
          content: '<p><b>Past Perfect:</b> Action completed before another past action</p><p>Structure: Subject + had + V3</p>',
          examples: [
            { sentence: 'I had eaten before he came.', hi: 'मैं खा चुका था उसके आने से पहले' },
            { sentence: 'She had finished her work.', hi: 'उसने अपना काम पूरा कर लिया था' },
            { sentence: 'The train had left before we reached.', hi: 'हमारे पहुँचने से पहले ट्रेन चली गई थी' },
            { sentence: 'They had already gone.', hi: 'वे पहले ही जा चुके थे' }
          ]
        },
        {
          title: 'Step 7: Future Simple',
          type: 'info',
          content: '<p><b>Future Simple:</b> Action will happen in future</p><p>Structure: Subject + will + V1</p>',
          examples: [
            { sentence: 'I will eat rice tomorrow.', hi: 'मैं कल चावल खाऊँगा' },
            { sentence: 'She will go to school.', hi: 'वह स्कूल जाएगी' },
            { sentence: 'They will play cricket.', hi: 'वे क्रिकेट खेलेंगे' },
            { sentence: 'It will rain tomorrow.', hi: 'कल बारिश होगी' }
          ]
        },
        {
          title: 'Step 8: Future Continuous',
          type: 'info',
          content: '<p><b>Future Continuous:</b> Action will be happening in future</p><p>Structure: Subject + will be + V-ing</p>',
          examples: [
            { sentence: 'I will be eating at 8 pm.', hi: 'मैं 8 बजे खा रहा होऊँगा' },
            { sentence: 'She will be reading a book.', hi: 'वह किताब पढ़ रही होगी' },
            { sentence: 'They will be playing cricket.', hi: 'वे क्रिकेट खेल रहे होंगे' }
          ]
        },
        {
          title: 'Step 9: Future Perfect',
          type: 'info',
          content: '<p><b>Future Perfect:</b> Action will be completed by a certain time</p><p>Structure: Subject + will have + V3</p>',
          examples: [
            { sentence: 'I will have eaten by 8 pm.', hi: 'मैं 8 बजे तक खा चुका होऊँगा' },
            { sentence: 'She will have finished her work.', hi: 'वह अपना काम पूरा कर चुकी होगी' },
            { sentence: 'They will have left by then.', hi: 'वे तब तक जा चुके होंगे' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: 'I ___ rice every day.', options: ['eat', 'eats', 'eating', 'ate'], answer: 'eat' },
        { type: 'mcq', q: 'She ___ to school.', options: ['go', 'goes', 'going', 'went'], answer: 'goes' },
        { type: 'mcq', q: 'I ___ eating rice now.', options: ['am', 'is', 'are', 'was'], answer: 'am' },
        { type: 'mcq', q: 'They ___ playing football.', options: ['am', 'is', 'are', 'was'], answer: 'are' },
        { type: 'mcq', q: 'I ___ eaten my lunch.', options: ['has', 'have', 'had', 'having'], answer: 'have' },
        { type: 'mcq', q: 'She ___ finished her work.', options: ['has', 'have', 'had', 'having'], answer: 'has' },
        { type: 'mcq', q: 'I ___ rice yesterday.', options: ['eat', 'eats', 'ate', 'eaten'], answer: 'ate' },
        { type: 'mcq', q: 'She ___ to school yesterday.', options: ['go', 'goes', 'went', 'gone'], answer: 'went' },
        { type: 'mcq', q: 'I ___ eating rice at 8 pm.', options: ['am', 'is', 'was', 'were'], answer: 'was' },
        { type: 'mcq', q: 'They ___ playing cricket.', options: ['am', 'is', 'was', 'were'], answer: 'were' },
        { type: 'mcq', q: 'I ___ eaten before he came.', options: ['has', 'have', 'had', 'having'], answer: 'had' },
        { type: 'mcq', q: 'I ___ eat rice tomorrow.', options: ['will', 'would', 'am', 'was'], answer: 'will' },
        { type: 'mcq', q: 'She ___ go to school tomorrow.', options: ['will', 'would', 'is', 'was'], answer: 'will' },
        { type: 'mcq', q: 'I will ___ eating at 8 pm.', options: ['am', 'is', 'be', 'been'], answer: 'be' },
        { type: 'mcq', q: 'I ___ have eaten by 8 pm.', options: ['will', 'would', 'am', 'was'], answer: 'will' }
      ]
    },

    // ═══════════════════════════════════════════
    // TOPIC 7: Prepositions (NEW!)
    // ═══════════════════════════════════════════
    {
      id: 'prepositions',
      title: 'Prepositions',
      icon: '📍',
      intro: 'सीखो in, on, at, by, with, for',
      lessons: [
        {
          title: 'Step 1: In / On / At (Place)',
          type: 'info',
          content: `
            <p><b>In</b> = अंदर (enclosed space)</p>
            <p><b>On</b> = ऊपर (surface)</p>
            <p><b>At</b> = विशेष स्थान (specific point)</p>
          `,
          examples: [
            { sentence: 'I live in Delhi.', hi: 'मैं दिल्ली में रहता हूँ' },
            { sentence: 'The book is on the table.', hi: 'किताब मेज पर है' },
            { sentence: 'She is at the door.', hi: 'वह दरवाज़े पर है' },
            { sentence: 'We are in the room.', hi: 'हम कमरे में हैं' },
            { sentence: 'He is at home.', hi: 'वह घर पर है' },
            { sentence: 'The cat is on the roof.', hi: 'बिल्ली छत पर है' }
          ]
        },
        {
          title: 'Step 2: In / On / At (Time)',
          type: 'info',
          content: `
            <p><b>In</b> = महीने, साल, सदी (in May, in 2024)</p>
            <p><b>On</b> = दिन, तारीख (on Monday, on 5th May)</p>
            <p><b>At</b> = समय, रात (at 5 pm, at night)</p>
          `,
          examples: [
            { sentence: 'I was born in 2000.', hi: 'मैं 2000 में पैदा हुआ' },
            { sentence: 'We will meet on Monday.', hi: 'हम सोमवार को मिलेंगे' },
            { sentence: 'The class starts at 9 am.', hi: 'क्लास 9 बजे शुरू होती है' },
            { sentence: 'It is cold in December.', hi: 'दिसंबर में ठंड होती है' },
            { sentence: 'I sleep at night.', hi: 'मैं रात में सोता हूँ' },
            { sentence: 'My birthday is on 5th May.', hi: 'मेरा जन्मदिन 5 मई को है' }
          ]
        },
        {
          title: 'Step 3: By / With / For',
          type: 'info',
          content: `
            <p><b>By</b> = के द्वारा (agent) / तक (deadline)</p>
            <p><b>With</b> = के साथ (instrument/company)</p>
            <p><b>For</b> = के लिए (purpose/duration)</p>
          `,
          examples: [
            { sentence: 'This book is written by Ram.', hi: 'यह किताब राम द्वारा लिखी गई है' },
            { sentence: 'I go to school with my friend.', hi: 'मैं अपने दोस्त के साथ स्कूल जाता हूँ' },
            { sentence: 'I bought a gift for my mother.', hi: 'मैंने अपनी माँ के लिए तोहफा खरीदा' },
            { sentence: 'Finish this work by 5 pm.', hi: 'यह काम 5 बजे तक खत्म करो' },
            { sentence: 'Cut it with a knife.', hi: 'इसे चाकू से काटो' },
            { sentence: 'I waited for two hours.', hi: 'मैंने दो घंटे इंतज़ार किया' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: 'I live ___ Delhi.', options: ['in', 'on', 'at', 'by'], answer: 'in' },
        { type: 'mcq', q: 'The book is ___ the table.', options: ['in', 'on', 'at', 'by'], answer: 'on' },
        { type: 'mcq', q: 'She is ___ the door.', options: ['in', 'on', 'at', 'with'], answer: 'at' },
        { type: 'mcq', q: 'I was born ___ 2000.', options: ['in', 'on', 'at', 'by'], answer: 'in' },
        { type: 'mcq', q: 'We will meet ___ Monday.', options: ['in', 'on', 'at', 'by'], answer: 'on' },
        { type: 'mcq', q: 'The class starts ___ 9 am.', options: ['in', 'on', 'at', 'by'], answer: 'at' },
        { type: 'mcq', q: 'This book is written ___ Ram.', options: ['in', 'on', 'by', 'at'], answer: 'by' },
        { type: 'mcq', q: 'I go to school ___ my friend.', options: ['in', 'with', 'at', 'on'], answer: 'with' },
        { type: 'mcq', q: 'I bought a gift ___ my mother.', options: ['for', 'in', 'on', 'at'], answer: 'for' },
        { type: 'mcq', q: 'Finish this work ___ 5 pm.', options: ['in', 'on', 'at', 'by'], answer: 'by' }
      ]
    },

    // ═══════════════════════════════════════════
    // TOPIC 8: Articles (NEW!)
    // ═══════════════════════════════════════════
    {
      id: 'articles',
      title: 'Articles (a, an, the)',
      icon: '📰',
      intro: 'सीखो a, an, the का सही use',
      lessons: [
        {
          title: 'Step 1: A vs An',
          type: 'info',
          content: `
            <p><b>A</b> = consonant sound से पहले (a book, a car)</p>
            <p><b>An</b> = vowel sound से पहले (an apple, an hour)</p>
          `,
          examples: [
            { sentence: 'I have a book.', hi: 'मेरे पास एक किताब है' },
            { sentence: 'She is an engineer.', hi: 'वह एक इंजीनियर है' },
            { sentence: 'He ate an orange.', hi: 'उसने एक संतरा खाया' },
            { sentence: 'I saw a tiger.', hi: 'मैंने एक बाघ देखा' },
            { sentence: 'Wait for an hour.', hi: 'एक घंटा रुको' }
          ]
        },
        {
          title: 'Step 2: The (Definite)',
          type: 'info',
          content: `
            <p><b>The</b> = specific/known चीज़ के लिए</p>
            <p>Unique cheezein: the sun, the moon, the earth</p>
          `,
          examples: [
            { sentence: 'The sun rises in the east.', hi: 'सूरज पूर्व में उगता है' },
            { sentence: 'I met the boy who won the prize.', hi: 'मैं उस लड़के से मिला जिसने इनाम जीता' },
            { sentence: 'The Ganga is a holy river.', hi: 'गंगा एक पवित्र नदी है' },
            { sentence: 'Please close the door.', hi: 'कृपया दरवाज़ा बंद करें' },
            { sentence: 'He is the best student.', hi: 'वह सबसे अच्छा छात्र है' }
          ]
        },
        {
          title: 'Step 3: Zero Article (No article)',
          type: 'info',
          content: `
            <p>Proper nouns, abstract nouns, meals, languages के साथ article नहीं आता</p>
          `,
          examples: [
            { sentence: 'I love India.', hi: 'मुझे भारत से प्यार है' },
            { sentence: 'She speaks English.', hi: 'वह English बोलती है' },
            { sentence: 'Honesty is the best policy.', hi: 'ईमानदारी सबसे अच्छी नीति है' },
            { sentence: 'I have breakfast at 8.', hi: 'मैं 8 बजे नाश्ता करता हूँ' },
            { sentence: 'He plays cricket.', hi: 'वह क्रिकेट खेलता है' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: 'I have ___ book.', options: ['a', 'an', 'the', 'no article'], answer: 'a' },
        { type: 'mcq', q: 'She is ___ engineer.', options: ['a', 'an', 'the', 'no article'], answer: 'an' },
        { type: 'mcq', q: 'He ate ___ orange.', options: ['a', 'an', 'the', 'no article'], answer: 'an' },
        { type: 'mcq', q: 'Wait for ___ hour.', options: ['a', 'an', 'the', 'no article'], answer: 'an' },
        { type: 'mcq', q: '___ sun rises in the east.', options: ['A', 'An', 'The', 'No article'], answer: 'The' },
        { type: 'mcq', q: '___ Ganga is a holy river.', options: ['A', 'An', 'The', 'No article'], answer: 'The' },
        { type: 'mcq', q: 'He is ___ best student.', options: ['a', 'an', 'the', 'no article'], answer: 'the' },
        { type: 'mcq', q: 'I love ___ India.', options: ['a', 'an', 'the', 'no article'], answer: 'no article' },
        { type: 'mcq', q: 'She speaks ___ English.', options: ['a', 'an', 'the', 'no article'], answer: 'no article' },
        { type: 'mcq', q: 'I have ___ breakfast at 8.', options: ['a', 'an', 'the', 'no article'], answer: 'no article' }
      ]
    },

    // ═══════════════════════════════════════════
    // TOPIC 9: Punctuation (NEW!)
    // ═══════════════════════════════════════════
    {
      id: 'punctuation',
      title: 'Punctuation',
      icon: '❕',
      intro: 'सीखो comma, full stop, question mark, exclamation',
      lessons: [
        {
          title: 'Step 1: Full Stop (.) / Question Mark (?) / Exclamation (!)',
          type: 'info',
          content: `
            <p><b>Full Stop (.)</b> = Statement के अंत में</p>
            <p><b>Question Mark (?)</b> = Question के अंत में</p>
            <p><b>Exclamation (!)</b> = Emotion / surprise के लिए</p>
          `,
          examples: [
            { sentence: 'I go to school. (statement)', hi: 'मैं स्कूल जाता हूँ' },
            { sentence: 'Do you go to school? (question)', hi: 'क्या तुम स्कूल जाते हो?' },
            { sentence: 'What a beautiful day! (exclamation)', hi: 'क्या सुंदर दिन है!' },
            { sentence: 'Where is my pen?', hi: 'मेरी कलम कहाँ है?' },
            { sentence: 'Wow! That is amazing!', hi: 'वाह! यह अद्भुत है!' }
          ]
        },
        {
          title: 'Step 2: Comma (,)',
          type: 'info',
          content: `
            <p><b>Comma (,)</b> = List, pause, or separating clauses</p>
          `,
          examples: [
            { sentence: 'I bought apples, oranges, and bananas.', hi: 'मैंने सेब, संतरे और केले खरीदे' },
            { sentence: 'Ram, come here.', hi: 'राम, यहाँ आओ' },
            { sentence: 'If it rains, I will stay home.', hi: 'अगर बारिश होगी, मैं घर रहूँगा' },
            { sentence: 'She is smart, kind, and beautiful.', hi: 'वह होशियार, दयालु और सुंदर है' }
          ]
        },
        {
          title: 'Step 3: Apostrophe (\')',
          type: 'info',
          content: `
            <p><b>Apostrophe (\')</b> = Possession या contraction</p>
          `,
          examples: [
            { sentence: 'Ram\'s book is on the table.', hi: 'राम की किताब मेज पर है' },
            { sentence: 'I can\'t swim.', hi: 'मैं तैर नहीं सकता' },
            { sentence: 'She\'s my sister.', hi: 'वह मेरी बहन है' },
            { sentence: 'The boys\' toys are new.', hi: 'लड़कों के खिलौने नए हैं' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: 'I go to school ___', options: ['.', '?', '!', ','], answer: '.' },
        { type: 'mcq', q: 'Do you go to school ___', options: ['.', '?', '!', ','], answer: '?' },
        { type: 'mcq', q: 'What a beautiful day ___', options: ['.', '?', '!', ','], answer: '!' },
        { type: 'mcq', q: 'Where is my pen ___', options: ['.', '?', '!', ','], answer: '?' },
        { type: 'mcq', q: 'I bought apples ___ oranges and bananas.', options: ['.', '?', '!', ','], answer: ',' },
        { type: 'mcq', q: 'Ram ___ come here.', options: ['.', '?', '!', ','], answer: ',' },
        { type: 'mcq', q: 'Ram___ book is on the table.', options: ["'s", 's', "'", 's\''], answer: "'s" },
        { type: 'mcq', q: 'I can___ swim.', options: ["'t", 't', "'", 'nt'], answer: "'t" },
        { type: 'mcq', q: 'She___ my sister.', options: ["'s", 's', "'", 's\''], answer: "'s" },
        { type: 'mcq', q: 'Wow___ That is amazing!', options: ['.', '?', '!', ','], answer: '!' }
      ]
    }

  ]
};

// Global expose karo taaki HTML access kar sake
if (typeof window !== 'undefined') {
  window.MODULE2 = MODULE2;
}
