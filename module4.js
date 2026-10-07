// module4.js — Module 4: Advanced English (DEMO)

const MODULE4 = {
  id: 'm4',
  badge: 'Module 4',
  title: 'Advanced English',
  sub: 'Professional & Academic',
  icon: '🎓',
  desc: 'Communicate complex ideas professionally.',
  topics: [

    // ═══════════════════════════════════════════
    // TOPIC 1: Advanced Conditionals
    // ═══════════════════════════════════════════
    {
      id: 'advanced-conditionals',
      title: 'Advanced Conditionals',
      icon: '❓',
      intro: 'सीखो complex if clauses',
      lessons: [
        {
          title: 'Step 1: Second Conditional',
          type: 'info',
          content: `
            <p><b>Second Conditional:</b> If + Past, would + Verb</p>
            <p>Unreal present situations</p>
          `,
          examples: [
            { sentence: 'If I were rich, I would travel the world.', hi: 'अगर मैं अमीर होता, दुनिया घूमता' },
            { sentence: 'If she studied, she would pass.', hi: 'अगर वो पढ़ती, पास होती' },
            { sentence: 'If I had time, I would help you.', hi: 'अगर मेरे पास समय होता, मदद करता' },
            { sentence: 'If they knew, they would come.', hi: 'अगर उन्हें पता होता, आते' },
            { sentence: 'If it rained, we would stay home.', hi: 'अगर बारिश होती, घर रहते' }
          ]
        },
        {
          title: 'Step 2: Third Conditional',
          type: 'info',
          content: `
            <p><b>Third Conditional:</b> If + Had + V3, would have + V3</p>
            <p>Past unreal situations</p>
          `,
          examples: [
            { sentence: 'If I had studied, I would have passed.', hi: 'अगर मैंने पढ़ा होता, पास हो गया होता' },
            { sentence: 'If she had come, I would have met her.', hi: 'अगर वो आई होती, मिल लेता' },
            { sentence: 'If we had left early, we would have caught the train.', hi: 'अगर जल्दी निकले होते, ट्रेन पकड़ लेते' },
            { sentence: 'If he had tried, he would have won.', hi: 'अगर कोशिश की होती, जीत जाता' },
            { sentence: 'If they had called, I would have answered.', hi: 'अगर कॉल किया होता, जवाब देता' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: 'If I ___ rich, I would travel.', options: ['am', 'was', 'were', 'be'], answer: 'were' },
        { type: 'mcq', q: 'If I had studied, I ___ passed.', options: ['will have', 'would have', 'had', 'have'], answer: 'would have' },
        { type: 'mcq', q: 'If she ___, she would pass.', options: ['study', 'studies', 'studied', 'studying'], answer: 'studied' },
        { type: 'mcq', q: 'If he ___ tried, he would have won.', options: ['has', 'had', 'have', 'having'], answer: 'had' },
        { type: 'mcq', q: 'If they knew, they ___ come.', options: ['will', 'would', 'are', 'were'], answer: 'would' }
      ]
    },

    // ═══════════════════════════════════════════
    // TOPIC 2: Academic Vocabulary
    // ═══════════════════════════════════════════
    {
      id: 'academic-vocab',
      title: 'Academic Vocabulary',
      icon: '📚',
      intro: 'सीखो academic words',
      lessons: [
        {
          title: 'Step 1: Common Academic Words',
          type: 'info',
          content: '<p>Academic writing में use होने वाले words</p>',
          examples: [
            { word: 'Analyze', meaning: 'विश्लेषण करना' },
            { word: 'Evaluate', meaning: 'मूल्यांकन करना' },
            { word: 'Significant', meaning: 'महत्वपूर्ण' },
            { word: 'Hypothesis', meaning: 'परिकल्पना' },
            { word: 'Methodology', meaning: 'कार्यप्रणाली' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: '"Analyze" का मतलब?', options: ['विश्लेषण करना', 'लिखना', 'पढ़ना', 'सुनना'], answer: 'विश्लेषण करना' },
        { type: 'mcq', q: '"Evaluate" का मतलब?', options: ['मूल्यांकन करना', 'गाना', 'नाचना', 'खेलना'], answer: 'मूल्यांकन करना' },
        { type: 'mcq', q: '"Significant" का मतलब?', options: ['छोटा', 'महत्वपूर्ण', 'साधारण', 'बुरा'], answer: 'महत्वपूर्ण' },
        { type: 'mcq', q: '"Hypothesis" का मतलब?', options: ['परिकल्पना', 'तथ्य', 'उत्तर', 'प्रश्न'], answer: 'परिकल्पना' },
        { type: 'mcq', q: '"Methodology" का मतलब?', options: ['कार्यप्रणाली', 'विधि', 'तरीका', 'अंत'], answer: 'कार्यप्रणाली' }
      ]
    },

    // ═══════════════════════════════════════════
    // TOPIC 3: Persuasive Communication
    // ═══════════════════════════════════════════
    {
      id: 'persuasive',
      title: 'Persuasive Communication',
      icon: '💡',
      intro: 'सीखो दूसरों को मनाना',
      lessons: [
        {
          title: 'Step 1: Ethos, Pathos, Logos',
          type: 'info',
          content: `
            <p><b>Ethos</b> = Credibility (विश्वसनीयता)</p>
            <p><b>Pathos</b> = Emotion (भावना)</p>
            <p><b>Logos</b> = Logic (तर्क)</p>
          `,
          examples: [
            { type: 'Ethos', example: 'As a doctor, I recommend...' },
            { type: 'Pathos', example: 'Think about the children...' },
            { type: 'Logos', example: 'Statistics show that 80%...' },
            { type: 'Ethos', example: 'Experts agree that...' },
            { type: 'Logos', example: 'Studies prove that...' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: 'Ethos का मतलब?', options: ['भावना', 'विश्वसनीयता', 'तर्क', 'क्रोध'], answer: 'विश्वसनीयता' },
        { type: 'mcq', q: 'Pathos का मतलब?', options: ['भावना', 'विश्वसनीयता', 'तर्क', 'क्रोध'], answer: 'भावना' },
        { type: 'mcq', q: 'Logos का मतलब?', options: ['भावना', 'विश्वसनीयता', 'तर्क', 'क्रोध'], answer: 'तर्क' },
        { type: 'mcq', q: '"As a doctor..." कौन सा appeal है?', options: ['Ethos', 'Pathos', 'Logos', 'None'], answer: 'Ethos' },
        { type: 'mcq', q: '"Statistics show..." कौन सा appeal है?', options: ['Ethos', 'Pathos', 'Logos', 'None'], answer: 'Logos' }
      ]
    },

    // ═══════════════════════════════════════════
    // TOPIC 4: Critical Thinking
    // ═══════════════════════════════════════════
    {
      id: 'critical-thinking',
      title: 'Critical Thinking',
      icon: '🧠',
      intro: 'सीखो analytical सोचना',
      lessons: [
        {
          title: 'Step 1: Fact vs Opinion',
          type: 'info',
          content: `
            <p><b>Fact</b> = सच (जो verify हो सके)</p>
            <p><b>Opinion</b> = राय (व्यक्तिगत विचार)</p>
          `,
          examples: [
            { type: 'Fact', example: 'The sun rises in the east.' },
            { type: 'Opinion', example: 'Ice cream is the best dessert.' },
            { type: 'Fact', example: 'Water boils at 100°C.' },
            { type: 'Opinion', example: 'Maths is difficult.' },
            { type: 'Fact', example: 'India got independence in 1947.' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: '"The sun rises in the east" is?', options: ['Fact', 'Opinion', 'Both', 'None'], answer: 'Fact' },
        { type: 'mcq', q: '"Ice cream is the best" is?', options: ['Fact', 'Opinion', 'Both', 'None'], answer: 'Opinion' },
        { type: 'mcq', q: '"Water boils at 100°C" is?', options: ['Fact', 'Opinion', 'Both', 'None'], answer: 'Fact' },
        { type: 'mcq', q: '"Maths is difficult" is?', options: ['Fact', 'Opinion', 'Both', 'None'], answer: 'Opinion' },
        { type: 'mcq', q: '"India got independence in 1947" is?', options: ['Fact', 'Opinion', 'Both', 'None'], answer: 'Fact' }
      ]
    },

    // ═══════════════════════════════════════════
    // TOPIC 5: Advanced Writing
    // ═══════════════════════════════════════════
    {
      id: 'advanced-writing',
      title: 'Advanced Writing',
      icon: '✍️',
      intro: 'सीखो essays और reports',
      lessons: [
        {
          title: 'Step 1: Essay Structure',
          type: 'info',
          content: `
            <p><b>1. Introduction</b> - Hook + Thesis</p>
            <p><b>2. Body</b> - Arguments + Evidence</p>
            <p><b>3. Conclusion</b> - Summary + Final thought</p>
          `,
          examples: [
            { part: 'Introduction', example: 'Technology has transformed modern life...' },
            { part: 'Body 1', example: 'Firstly, technology improves communication...' },
            { part: 'Body 2', example: 'Secondly, it enhances productivity...' },
            { part: 'Conclusion', example: 'In conclusion, technology is a double-edged sword...' },
            { part: 'Thesis', example: 'This essay argues that technology has both benefits and drawbacks.' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: 'Essay का पहला part?', options: ['Introduction', 'Body', 'Conclusion', 'Title'], answer: 'Introduction' },
        { type: 'mcq', q: 'Essay का आखिरी part?', options: ['Introduction', 'Body', 'Conclusion', 'None'], answer: 'Conclusion' },
        { type: 'mcq', q: 'Thesis statement कहाँ?', options: ['Introduction', 'Body', 'Conclusion', 'Title'], answer: 'Introduction' },
        { type: 'mcq', q: 'Evidence कहाँ?', options: ['Introduction', 'Body', 'Conclusion', 'Title'], answer: 'Body' },
        { type: 'mcq', q: 'Summary कहाँ?', options: ['Introduction', 'Body', 'Conclusion', 'Title'], answer: 'Conclusion' }
      ]
    }
  ]
};
