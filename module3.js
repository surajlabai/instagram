// module3.js — Module 3: Functional English (DEMO)

const MODULE3 = {
  id: 'm3',
  badge: 'Module 3',
  title: 'Functional English',
  sub: 'Real-Life & Professional',
  icon: '💼',
  desc: 'Use English in real-life situations.',
  topics: [

    // ═══════════════════════════════════════════
    // TOPIC 1: Everyday Communication
    // ═══════════════════════════════════════════
    {
      id: 'everyday',
      title: 'Everyday Communication',
      icon: '💬',
      intro: 'सीखो daily conversations',
      lessons: [
        {
          title: 'Step 1: Greetings',
          type: 'info',
          content: '<p>रोज़ काम आने वाले greetings</p>',
          examples: [
            { en: 'Good morning!', hi: 'सुप्रभात!' },
            { en: 'How are you?', hi: 'कैसे हो?' },
            { en: 'Nice to meet you.', hi: 'आपसे मिलकर अच्छा लगा' },
            { en: 'Have a nice day!', hi: 'आपका दिन शुभ हो!' },
            { en: 'See you later!', hi: 'फिर मिलते हैं!' }
          ]
        },
        {
          title: 'Step 2: Introducing Yourself',
          type: 'info',
          content: '<p>अपना परिचय कैसे दें</p>',
          examples: [
            { en: 'My name is Rahul.', hi: 'मेरा नाम राहुल है' },
            { en: 'I am from Delhi.', hi: 'मैं दिल्ली से हूँ' },
            { en: 'I am a student.', hi: 'मैं छात्र हूँ' },
            { en: 'I like reading books.', hi: 'मुझे किताबें पढ़ना पसंद है' },
            { en: 'Nice to meet you all.', hi: 'आप सबसे मिलकर अच्छा लगा' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: 'सुबह क्या बोलते हैं?', options: ['Good night', 'Good morning', 'Good evening', 'Bye'], answer: 'Good morning' },
        { type: 'mcq', q: '"How are you?" का reply?', options: ['I am fine', 'Good night', 'Bye', 'Sorry'], answer: 'I am fine' },
        { type: 'mcq', q: 'परिचय देने के लिए?', options: ['My name is...', 'Good night', 'Sorry', 'Excuse me'], answer: 'My name is...' },
        { type: 'mcq', q: 'किसी से मिलकर?', options: ['Nice to meet you', 'Go away', 'Stop', 'Wait'], answer: 'Nice to meet you' },
        { type: 'mcq', q: 'जाते समय?', options: ['Hello', 'Good morning', 'See you later', 'Come here'], answer: 'See you later' }
      ]
    },

    // ═══════════════════════════════════════════
    // TOPIC 2: Situational English
    // ═══════════════════════════════════════════
    {
      id: 'situational',
      title: 'Situational English',
      icon: '🚉',
      intro: 'सीखो different situations में English',
      lessons: [
        {
          title: 'Step 1: At Restaurant',
          type: 'info',
          content: '<p>Restaurant में कैसे बात करें</p>',
          examples: [
            { en: 'A table for two, please.', hi: 'दो लोगों के लिए टेबल, please' },
            { en: 'Can I see the menu?', hi: 'क्या मैं मेन्यू देख सकता हूँ?' },
            { en: 'I would like to order.', hi: 'मैं order करना चाहूँगा' },
            { en: 'The bill, please.', hi: 'बिल दीजिए' },
            { en: 'Thank you, it was delicious.', hi: 'धन्यवाद, स्वादिष्ट था' }
          ]
        },
        {
          title: 'Step 2: At Railway Station',
          type: 'info',
          content: '<p>Railway station पर useful sentences</p>',
          examples: [
            { en: 'Where is platform 5?', hi: 'प्लेटफ़ॉर्म 5 कहाँ है?' },
            { en: 'When does the train arrive?', hi: 'ट्रेन कब आएगी?' },
            { en: 'One ticket to Mumbai, please.', hi: 'मुंबई का एक टिकट, please' },
            { en: 'Is this seat taken?', hi: 'क्या यह सीट भरी है?' },
            { en: 'What time is the next train?', hi: 'अगली ट्रेन कितने बजे है?' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: 'Restaurant में बिल माँगने के लिए?', options: ['The bill, please', 'Hello', 'Good night', 'Sorry'], answer: 'The bill, please' },
        { type: 'mcq', q: 'Platform कहाँ है पूछने के लिए?', options: ['Where is platform?', 'What is platform?', 'Who is platform?', 'Why platform?'], answer: 'Where is platform?' },
        { type: 'mcq', q: 'Menu देखने के लिए?', options: ['Can I see the menu?', 'Give food', 'I am hungry', 'Where food?'], answer: 'Can I see the menu?' },
        { type: 'mcq', q: 'Ticket माँगने के लिए?', options: ['One ticket, please', 'Give ticket', 'I want go', 'Where train'], answer: 'One ticket, please' },
        { type: 'mcq', q: 'ट्रेन कब आएगी?', options: ['When does the train arrive?', 'Where train?', 'What train?', 'Who train?'], answer: 'When does the train arrive?' }
      ]
    },

    // ═══════════════════════════════════════════
    // TOPIC 3: Telephone Skills
    // ═══════════════════════════════════════════
    {
      id: 'telephone',
      title: 'Telephone Skills',
      icon: '📞',
      intro: 'सीखो phone पर बात करना',
      lessons: [
        {
          title: 'Step 1: Making a Call',
          type: 'info',
          content: '<p>Phone पर कैसे बात करें</p>',
          examples: [
            { en: 'Hello, may I speak to Mr. Sharma?', hi: 'हैलो, क्या मैं Mr. Sharma से बात कर सकता हूँ?' },
            { en: 'This is Rahul speaking.', hi: 'मैं Rahul बोल रहा हूँ' },
            { en: 'Could you hold on a moment?', hi: 'क्या आप एक पल रुक सकते हैं?' },
            { en: 'I will call you back.', hi: 'मैं आपको वापस कॉल करूँगा' },
            { en: 'Sorry, wrong number.', hi: 'क्षमा करें, गलत नंबर' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: 'Phone उठाते ही?', options: ['Hello', 'Bye', 'Sorry', 'Wait'], answer: 'Hello' },
        { type: 'mcq', q: 'किसी से बात करने के लिए?', options: ['May I speak to...', 'Give phone', 'I want talk', 'Who are you'], answer: 'May I speak to...' },
        { type: 'mcq', q: 'अपना परिचय देने के लिए?', options: ['This is Rahul speaking', 'I am phone', 'Hello hello', 'Who'], answer: 'This is Rahul speaking' },
        { type: 'mcq', q: 'रुकने के लिए कहना?', options: ['Hold on a moment', 'Go away', 'Come back', 'Stop'], answer: 'Hold on a moment' },
        { type: 'mcq', q: 'गलत नंबर पर?', options: ['Sorry, wrong number', 'Thank you', 'Good morning', 'Hello hello'], answer: 'Sorry, wrong number' }
      ]
    },

    // ═══════════════════════════════════════════
    // TOPIC 4: Interview Skills
    // ═══════════════════════════════════════════
    {
      id: 'interview',
      title: 'Interview Skills',
      icon: '🎤',
      intro: 'सीखो interview में क्या बोलें',
      lessons: [
        {
          title: 'Step 1: Common Questions',
          type: 'info',
          content: '<p>Interview में पूछे जाने वाले questions</p>',
          examples: [
            { en: 'Tell me about yourself.', hi: 'अपने बारे में बताइए' },
            { en: 'What are your strengths?', hi: 'आपकी ताकत क्या है?' },
            { en: 'What are your weaknesses?', hi: 'आपकी कमज़ोरी क्या है?' },
            { en: 'Why should we hire you?', hi: 'हम आपको क्यों रखें?' },
            { en: 'Where do you see yourself in 5 years?', hi: '5 साल में खुद को कहाँ देखते हैं?' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: 'Interview में पहला सवाल?', options: ['Tell me about yourself', 'What is your name?', 'Where do you live?', 'What is your age?'], answer: 'Tell me about yourself' },
        { type: 'mcq', q: '"Why should we hire you?" का मतलब?', options: ['हम आपको क्यों रखें?', 'आप कहाँ रहते हैं?', 'आपकी उम्र क्या है?', 'आपका नाम क्या है?'], answer: 'हम आपको क्यों रखें?' },
        { type: 'mcq', q: 'Strengths का मतलब?', options: ['ताकत', 'कमज़ोरी', 'नाम', 'उम्र'], answer: 'ताकत' },
        { type: 'mcq', q: 'Weaknesses का मतलब?', options: ['ताकत', 'कमज़ोरी', 'नाम', 'उम्र'], answer: 'कमज़ोरी' },
        { type: 'mcq', q: 'Interview में सबसे ज़रूरी?', options: ['Confidence', 'Fear', 'Anger', 'Silence'], answer: 'Confidence' }
      ]
    },

    // ═══════════════════════════════════════════
    // TOPIC 5: Email Writing
    // ═══════════════════════════════════════════
    {
      id: 'email',
      title: 'Email Writing',
      icon: '📧',
      intro: 'सीखो professional emails लिखना',
      lessons: [
        {
          title: 'Step 1: Email Format',
          type: 'info',
          content: '<p>Professional email का format</p>',
          examples: [
            { en: 'Subject: Application for Leave', hi: 'विषय: छुट्टी के लिए आवेदन' },
            { en: 'Dear Sir/Madam,', hi: 'प्रिय महोदय/महोदया,' },
            { en: 'I am writing to request...', hi: 'मैं अनुरोध करने के लिए लिख रहा हूँ...' },
            { en: 'Thank you for your time.', hi: 'आपके समय के लिए धन्यवाद' },
            { en: 'Yours sincerely,', hi: 'भवदीय,' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: 'Email की शुरुआत?', options: ['Dear Sir/Madam', 'Bye', 'Hello hi', 'Good night'], answer: 'Dear Sir/Madam' },
        { type: 'mcq', q: 'Email का अंत?', options: ['Yours sincerely', 'Hello', 'Hi', 'Bye bye'], answer: 'Yours sincerely' },
        { type: 'mcq', q: 'Subject line में क्या लिखें?', options: ['Purpose of email', 'Your name', 'Your age', 'Random words'], answer: 'Purpose of email' },
        { type: 'mcq', q: 'Formal email में?', options: ['Respected Sir', 'Hey buddy', 'Yo', 'What up'], answer: 'Respected Sir' },
        { type: 'mcq', q: 'Email में signature?', options: ['Your name', 'Random words', 'Nothing', 'Bye'], answer: 'Your name' }
      ]
    }
  ]
};
