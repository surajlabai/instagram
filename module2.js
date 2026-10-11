// ═══════════════════════════════════════════════════════════
// module2.js — Module 2: Grammar Foundation
// Structure: Sentence, Clause, Tense
// Practice: 3 levels — Basic (MCQ), Hard (Hin→Eng), Advance (Eng→Hin)
// ═══════════════════════════════════════════════════════════

var MODULE2 = {
  id: 'm2',
  badge: 'Module 2',
  title: 'Grammar Foundation',
  sub: 'Sentence · Clause · Tense',
  icon: '🔥',
  desc: 'Master the building blocks of English grammar',
  topics: [

    // ═══════════════════════════════════════════════════════
    // CARD 1: SENTENCE
    // ═══════════════════════════════════════════════════════
    {
      id: 'sentence',
      title: 'Sentence',
      icon: '📝',
      color: 'blue',
      intro: 'Sentence ke 4 types — Assertive, Interrogative, Imperative, Exclamatory',
      subtopics: [
        // ─────────────────────────────────────────
        // ASSERTIVE
        // ─────────────────────────────────────────
        {
          id: 'assertive',
          title: 'Assertive Sentence',
          icon: '📢',
          intro: 'Statement — साधारण वाक्य',
          definition: 'वह sentence जो किसी बात को बताता है या statement देता है। इसमें कोई सवाल नहीं, कोई आदेश नहीं — सिर्फ एक सीधी बात बताई जाती है। Assertive sentence सच (true) या झूठ (false) — दोनों हो सकता है। इसे Declarative Sentence भी कहते हैं।',
          usage: 'जब आप किसी को कोई जानकारी देना चाहते हो, किसी तथ्य (fact) को बताना चाहते हो, अपनी राय (opinion) देना चाहते हो, या किसी चीज़ का वर्णन (describe) करना चाहते हो — तब Assertive sentence use होता है।',
          rule: 'Subject + Verb + Object + Full Stop (.)',
          ruleExplain: 'Subject = जो काम करता है (I, She, Ram) | Verb = क्रिया (eat, go, is) | Object = जिस पर काम होता है (rice, school) | अंत में Full Stop (.) लगाया जाता है।',
          structure: [
            { type: 'Simple (सामान्य)',       formula: 'Subject + Verb + Object + .',                    example: 'I eat rice.', exampleExplain: 'I = Subject, eat = Verb, rice = Object' },
            { type: 'Negative (नकारात्मक)',   formula: 'Subject + do/does + not + V1 + Object + .',       example: 'I do not eat meat.', exampleExplain: 'do not = नकारात्मक शब्द' },
            { type: 'Interrogative (प्रश्न)', formula: 'WH + Helping Verb + Subject + V1 + ?',            example: 'What do you eat?', exampleExplain: 'What = WH-word, do = Helping Verb' },
            { type: 'WH-Question',            formula: 'WH + do/does/did + Subject + V1 + ?',             example: 'Where does she live?', exampleExplain: 'Where = WH-word, does = Helping Verb' }
          ],
          examples: {
            simple: [
              { en: 'I am a student.', hi: 'मैं एक छात्र हूँ।', note: 'I = Subject, am = Verb, a student = Object' },
              { en: 'She lives in Delhi.', hi: 'वह दिल्ली में रहती है।', note: 'She + lives + in Delhi' },
              { en: 'The sun rises in the east.', hi: 'सूरज पूर्व में उगता है।', note: 'Universal truth' },
              { en: 'Ram eats an apple.', hi: 'राम सेब खाता है।', note: 'Ram + eats + an apple' }
            ],
            negative: [
              { en: 'I am not a teacher.', hi: 'मैं शिक्षक नहीं हूँ।', note: 'am not = नकारात्मक रूप' },
              { en: 'She does not live in Mumbai.', hi: 'वह मुंबई में नहीं रहती।', note: 'does not = नकारात्मक' },
              { en: 'The sun does not rise in the west.', hi: 'सूरज पश्चिम में नहीं उगता।', note: 'does not = नकारात्मक' },
              { en: 'Ram does not eat a banana.', hi: 'राम केला नहीं खाता।', note: 'does not = नकारात्मक' }
            ],
            wh: [
              { en: 'What is your name?', hi: 'तुम्हारा नाम क्या है?', note: 'What = WH-word' },
              { en: 'Where does she live?', hi: 'वह कहाँ रहती है?', note: 'Where = WH-word' },
              { en: 'When does the sun rise?', hi: 'सूरज कब उगता है?', note: 'When = WH-word' },
              { en: 'What does Ram eat?', hi: 'राम क्या खाता है?', note: 'What = WH-word' }
            ]
          },
          practice: {
            basic: [
              { type: 'mcq', q: 'Which is an assertive sentence?', options: ['What is your name?', 'I am a doctor.', 'Close the door.', 'What a beautiful day!'], answer: 'I am a doctor.' },
              { type: 'mcq', q: 'Which is an assertive sentence?', options: ['She is my sister.', 'Are you happy?', 'Please sit down.', 'How nice!'], answer: 'She is my sister.' },
              { type: 'mcq', q: 'Which is an assertive sentence?', options: ['Come here.', 'Where do you live?', 'He plays cricket.', 'Wow!'], answer: 'He plays cricket.' },
              { type: 'mcq', q: 'Which is an assertive sentence?', options: ['I love India.', 'Do you love India?', 'Love India!', 'Where is India?'], answer: 'I love India.' },
              { type: 'mcq', q: 'Which is an assertive sentence?', options: ['What a day!', 'Sit down.', 'The earth is round.', 'Is the earth round?'], answer: 'The earth is round.' },
              { type: 'mcq', q: 'Assertive sentence ends with?', options: ['?', '!', '.', ','], answer: '.' },
              { type: 'mcq', q: 'Which is assertive?', options: ['Do not go.', 'He is a teacher.', 'Are you a teacher?', 'What a teacher!'], answer: 'He is a teacher.' },
              { type: 'mcq', q: 'Which is assertive?', options: ['Run fast!', 'How fast he runs!', 'He runs fast.', 'Does he run fast?'], answer: 'He runs fast.' },
              { type: 'mcq', q: 'Structure of assertive?', options: ['S+V+O+?', 'S+V+O+!', 'S+V+O+.', 'V+S+O+?'], answer: 'S+V+O+.' },
              { type: 'mcq', q: 'Which is assertive?', options: ['Water is cold.', 'Is water cold?', 'How cold water is!', 'Drink water!'], answer: 'Water is cold.' },
              { type: 'mcq', q: 'Which is assertive?', options: ['Please help me.', 'Can you help me?', 'What a help!', 'I need your help.'], answer: 'I need your help.' },
              { type: 'mcq', q: 'Which is assertive?', options: ['Wow! It is amazing.', 'Is it amazing?', 'It is amazing.', 'How amazing!'], answer: 'It is amazing.' },
              { type: 'mcq', q: 'Which is assertive?', options: ['Close the window.', 'Is the window closed?', 'The window is closed.', 'What a window!'], answer: 'The window is closed.' },
              { type: 'mcq', q: 'Which is assertive?', options: ['She sings well.', 'Does she sing well?', 'How well she sings!', 'Sing a song!'], answer: 'She sings well.' },
              { type: 'mcq', q: 'Which is assertive?', options: ['Where are you?', 'I am here.', 'Come here!', 'Are you here?'], answer: 'I am here.' },
              { type: 'mcq', q: 'Which is assertive?', options: ['Fire burns.', 'Does fire burn?', 'How fire burns!', 'Burn it!'], answer: 'Fire burns.' },
              { type: 'mcq', q: 'Which is assertive?', options: ['Sit quietly.', 'Are you quiet?', 'You are quiet.', 'How quiet!'], answer: 'You are quiet.' },
              { type: 'mcq', q: 'Which is assertive?', options: ['The boy is tall.', 'Is the boy tall?', 'What a tall boy!', 'Stand tall!'], answer: 'The boy is tall.' },
              { type: 'mcq', q: 'Which is assertive?', options: ['Birds fly.', 'Do birds fly?', 'How birds fly!', 'Fly away!'], answer: 'Birds fly.' },
              { type: 'mcq', q: 'Which is assertive?', options: ['Give me water.', 'Can I have water?', 'I need water.', 'What water!'], answer: 'I need water.' }
            ],
            hard: [
              { hindi: 'मैं एक छात्र हूँ।', english: 'I am a student.', words: ['am', 'I', 'student', 'a', 'is', 'are', 'we', 'he'] },
              { hindi: 'वह दिल्ली में रहती है।', english: 'She lives in Delhi.', words: ['lives', 'She', 'Delhi', 'in', 'live', 'living', 'they', 'at'] },
              { hindi: 'सूरज पूर्व में उगता है।', english: 'The sun rises in the east.', words: ['rises', 'The', 'sun', 'east', 'in', 'the', 'rise', 'west'] },
              { hindi: 'राम सेब खाता है।', english: 'Ram eats an apple.', words: ['eats', 'Ram', 'apple', 'an', 'eat', 'a', 'she', 'banana'] },
              { hindi: 'मैं शिक्षक नहीं हूँ।', english: 'I am not a teacher.', words: ['am', 'I', 'not', 'teacher', 'a', 'is', 'are', 'doctor'] },
              { hindi: 'वह मुंबई में नहीं रहती।', english: 'She does not live in Mumbai.', words: ['does', 'She', 'not', 'live', 'Mumbai', 'in', 'do', 'Delhi'] },
              { hindi: 'यह एक किताब है।', english: 'This is a book.', words: ['is', 'This', 'book', 'a', 'are', 'that', 'pen', 'an'] },
              { hindi: 'वे क्रिकेट खेलते हैं।', english: 'They play cricket.', words: ['play', 'They', 'cricket', 'plays', 'We', 'football', 'He', 'is'] }
            ],
            advance: [
              { english: 'I am a student.', hindi: 'मैं एक छात्र हूँ।', words: ['मैं', 'एक', 'छात्र', 'हूँ', 'वह', 'है', 'हम', 'लड़का'] },
              { english: 'She lives in Delhi.', hindi: 'वह दिल्ली में रहती है।', words: ['वह', 'दिल्ली', 'में', 'रहती', 'है', 'रहता', 'मैं', 'को'] },
              { english: 'The sun rises in the east.', hindi: 'सूरज पूर्व में उगता है।', words: ['सूरज', 'पूर्व', 'में', 'उगता', 'है', 'पश्चिम', 'चाँद', 'और'] },
              { english: 'Ram eats an apple.', hindi: 'राम सेब खाता है।', words: ['राम', 'सेब', 'खाता', 'है', 'केला', 'खाती', 'वह', 'और'] },
              { english: 'I am not a teacher.', hindi: 'मैं शिक्षक नहीं हूँ।', words: ['मैं', 'शिक्षक', 'नहीं', 'हूँ', 'है', 'वह', 'छात्र', 'अच्छा'] },
              { english: 'This is a book.', hindi: 'यह एक किताब है।', words: ['यह', 'एक', 'किताब', 'है', 'वह', 'कलम', 'हम', 'और'] },
              { english: 'They play cricket.', hindi: 'वे क्रिकेट खेलते हैं।', words: ['वे', 'क्रिकेट', 'खेलते', 'हैं', 'हम', 'फुटबॉल', 'खेलता', 'और'] },
              { english: 'Water is cold.', hindi: 'पानी ठंडा है।', words: ['पानी', 'ठंडा', 'है', 'गर्म', 'वह', 'और', 'चाय', 'भी'] }
            ]
          }
        },

        // ─────────────────────────────────────────
        // INTERROGATIVE
        // ─────────────────────────────────────────
        {
          id: 'interrogative',
          title: 'Interrogative Sentence',
          icon: '❓',
          intro: 'Question — सवाल पूछने वाला वाक्य',
          definition: 'वह sentence जो कुछ पूछता है या जानकारी माँगता है। इसमें speaker कुछ जानना चाहता है — यह एक question है। इसका अंत हमेशा प्रश्नवाचक चिह्न (?) से होता है। Interrogative sentence 2 तरीके के होते हैं: Yes/No questions और WH-questions।',
          usage: 'जब आप किसी से कुछ पूछना चाहते हो, जानकारी चाहते हो, confirm करना चाहते हो, या किसी की राय जानना चाहते हो — तब Interrogative sentence use होता है।',
          rule: 'Helping Verb + Subject + Main Verb + Object + ? (Question Mark)',
          ruleExplain: 'Helping Verb = is/am/are/do/does/did/will/can आदि | Subject = कर्ता (I, She, Ram) | Main Verb = मुख्य क्रिया | अंत में ? लगाया जाता है।',
          structure: [
            { type: 'Yes/No Question',   formula: 'Helping Verb + Subject + Main Verb + Object + ?', example: 'Are you happy?', exampleExplain: 'Are = Helping Verb, you = Subject' },
            { type: 'WH-Question',       formula: 'WH + Helping Verb + Subject + Main Verb + ?',     example: 'Where do you live?', exampleExplain: 'Where = WH-word, do = Helping' },
            { type: 'Negative Question', formula: 'Helping Verb + not + Subject + Main Verb + ?',    example: 'Are you not happy?', exampleExplain: 'not = नकारात्मक' },
            { type: 'WH + Negative',     formula: 'WH + Helping Verb + not + Subject + ?',           example: 'Why are you not coming?', exampleExplain: 'Why + are + not' }
          ],
          examples: {
            simple: [
              { en: 'What is your name?', hi: 'तुम्हारा नाम क्या है?', note: 'What = WH-word' },
              { en: 'Where do you live?', hi: 'तुम कहाँ रहते हो?', note: 'Where = WH-word' },
              { en: 'Are you happy?', hi: 'क्या तुम खुश हो?', note: 'Yes/No question' },
              { en: 'Can you swim?', hi: 'क्या तुम तैर सकते हो?', note: 'Can = Helping Verb' }
            ],
            negative: [
              { en: 'Are you not happy?', hi: 'क्या तुम खुश नहीं हो?', note: 'not के साथ' },
              { en: 'Does she not sing?', hi: 'क्या वह नहीं गाती?', note: 'does not' },
              { en: 'Did you not go?', hi: 'क्या तुम नहीं गए?', note: 'did not' },
              { en: 'Will he not come?', hi: 'क्या वह नहीं आएगा?', note: 'will not' }
            ],
            wh: [
              { en: 'Why are you late?', hi: 'तुम देर से क्यों आए?', note: 'Why = कारण' },
              { en: 'How do you do this?', hi: 'तुम यह कैसे करते हो?', note: 'How = तरीका' },
              { en: 'When will you come?', hi: 'तुम कब आओगे?', note: 'When = समय' },
              { en: 'Who is your teacher?', hi: 'तुम्हारे शिक्षक कौन हैं?', note: 'Who = व्यक्ति' }
            ]
          },
          practice: {
            basic: [
              { type: 'mcq', q: 'Which is interrogative?', options: ['I am fine.', 'How are you?', 'Sit down.', 'Wow!'], answer: 'How are you?' },
              { type: 'mcq', q: 'Which is interrogative?', options: ['Where is my pen?', 'This is my pen.', 'Give me pen.', 'Nice pen!'], answer: 'Where is my pen?' },
              { type: 'mcq', q: 'Which is interrogative?', options: ['I love tea.', 'Do you love tea?', 'Love tea!', 'Tea is good.'], answer: 'Do you love tea?' },
              { type: 'mcq', q: 'Which is interrogative?', options: ['She sings well.', 'Does she sing well?', 'Sing well!', 'What a singer!'], answer: 'Does she sing well?' },
              { type: 'mcq', q: 'Which is interrogative?', options: ['Close the door.', 'Is the door closed?', 'The door is closed.', 'Door closed!'], answer: 'Is the door closed?' },
              { type: 'mcq', q: 'Interrogative ends with?', options: ['.', '!', '?', ','], answer: '?' },
              { type: 'mcq', q: 'Which is interrogative?', options: ['Do not go.', 'Where are you going?', 'I am going.', 'Go now!'], answer: 'Where are you going?' },
              { type: 'mcq', q: 'Which is interrogative?', options: ['What a day!', 'The day is good.', 'Is the day good?', 'Enjoy the day!'], answer: 'Is the day good?' },
              { type: 'mcq', q: 'Which is interrogative?', options: ['Can you help me?', 'I need help.', 'Help me!', 'What help!'], answer: 'Can you help me?' },
              { type: 'mcq', q: 'Structure of interrogative?', options: ['S+V+O.', 'HV+S+MV+?', 'V+S+O.', 'S+HV+V?'], answer: 'HV+S+MV+?' },
              { type: 'mcq', q: 'Which is interrogative?', options: ['Water is cold.', 'Is water cold?', 'Drink water!', 'How cold!'], answer: 'Is water cold?' },
              { type: 'mcq', q: 'Which is interrogative?', options: ['I am happy.', 'Am I happy?', 'Be happy.', 'How happy!'], answer: 'Am I happy?' },
              { type: 'mcq', q: 'Which is interrogative?', options: ['What time is it?', 'It is 5 pm.', 'Check the time!', 'Time flies!'], answer: 'What time is it?' },
              { type: 'mcq', q: 'Which is interrogative?', options: ['Read the book.', 'Have you read the book?', 'The book is good.', 'What a book!'], answer: 'Have you read the book?' },
              { type: 'mcq', q: 'Which is interrogative?', options: ['She is tall.', 'Is she tall?', 'Stand tall!', 'How tall!'], answer: 'Is she tall?' },
              { type: 'mcq', q: 'Which is interrogative?', options: ['Where is the bank?', 'The bank is near.', 'Go to the bank.', 'What a bank!'], answer: 'Where is the bank?' },
              { type: 'mcq', q: 'Which is interrogative?', options: ['Will you come?', 'I will come.', 'Come here!', 'How nice!'], answer: 'Will you come?' },
              { type: 'mcq', q: 'Which is interrogative?', options: ['Who called you?', 'Someone called.', 'Answer the phone!', 'The call was for you.'], answer: 'Who called you?' },
              { type: 'mcq', q: 'Which is interrogative?', options: ['Are you alright?', 'I am alright.', 'Stay alright!', 'What a fright!'], answer: 'Are you alright?' },
              { type: 'mcq', q: 'Which is interrogative?', options: ['Do you like pizza?', 'I like pizza.', 'Eat pizza!', 'Pizza is tasty!'], answer: 'Do you like pizza?' }
            ],
            hard: [
              { hindi: 'तुम्हारा नाम क्या है?', english: 'What is your name?', words: ['is', 'What', 'name', 'your', 'are', 'who', 'my', 'how'] },
              { hindi: 'तुम कहाँ रहते हो?', english: 'Where do you live?', words: ['do', 'Where', 'you', 'live', 'does', 'are', 'I', 'when'] },
              { hindi: 'क्या तुम खुश हो?', english: 'Are you happy?', words: ['Are', 'you', 'happy', 'Is', 'am', 'sad', 'we', 'I'] },
              { hindi: 'क्या तुम तैर सकते हो?', english: 'Can you swim?', words: ['Can', 'you', 'swim', 'Could', 'I', 'run', 'we', 'are'] },
              { hindi: 'वह कहाँ रहती है?', english: 'Where does she live?', words: ['does', 'Where', 'she', 'live', 'do', 'he', 'lives', 'when'] },
              { hindi: 'तुम्हारे शिक्षक कौन हैं?', english: 'Who is your teacher?', words: ['is', 'Who', 'your', 'teacher', 'are', 'what', 'my', 'who'] },
              { hindi: 'तुम कब आओगे?', english: 'When will you come?', words: ['will', 'When', 'you', 'come', 'shall', 'go', 'I', 'where'] },
              { hindi: 'यह क्या है?', english: 'What is this?', words: ['is', 'What', 'this', 'are', 'that', 'who', 'it', 'when'] }
            ],
            advance: [
              { english: 'What is your name?', hindi: 'तुम्हारा नाम क्या है?', words: ['तुम्हारा', 'नाम', 'क्या', 'है', 'कौन', 'मेरा', 'और', 'वह'] },
              { english: 'Where do you live?', hindi: 'तुम कहाँ रहते हो?', words: ['तुम', 'कहाँ', 'रहते', 'हो', 'मैं', 'कब', 'और', 'वह'] },
              { english: 'Are you happy?', hindi: 'क्या तुम खुश हो?', words: ['क्या', 'तुम', 'खुश', 'हो', 'वह', 'उदास', 'हम', 'और'] },
              { english: 'Can you swim?', hindi: 'क्या तुम तैर सकते हो?', words: ['क्या', 'तुम', 'तैर', 'सकते', 'हो', 'मैं', 'दौड़', 'और'] },
              { english: 'Where does she live?', hindi: 'वह कहाँ रहती है?', words: ['वह', 'कहाँ', 'रहती', 'है', 'रहता', 'मैं', 'और', 'को'] },
              { english: 'Who is your teacher?', hindi: 'तुम्हारे शिक्षक कौन हैं?', words: ['तुम्हारे', 'शिक्षक', 'कौन', 'हैं', 'है', 'मेरे', 'और', 'वह'] },
              { english: 'When will you come?', hindi: 'तुम कब आओगे?', words: ['तुम', 'कब', 'आओगे', 'जाओगे', 'मैं', 'और', 'वह', 'होगे'] },
              { english: 'What is this?', hindi: 'यह क्या है?', words: ['यह', 'क्या', 'है', 'वह', 'और', 'कौन', 'हम', 'था'] }
            ]
          }
        },

        // ─────────────────────────────────────────
        // IMPERATIVE
        // ─────────────────────────────────────────
        {
          id: 'imperative',
          title: 'Imperative Sentence',
          icon: '👉',
          intro: 'Command / Request / Advice',
          definition: 'वह sentence जो आदेश (command), निवेदन (request), सलाह (advice), या मना (prohibition) करता है। इसमें subject (You) छिपा होता है — लिखा नहीं जाता, लेकिन समझा जाता है। Imperative sentence का subject हमेशा "You" होता है, भले ही दिखे नहीं।',
          usage: 'जब आप किसी को कुछ करने का आदेश देना चाहते हो (Close the door), किसी से कुछ माँगना चाहते हो (Please help me), किसी को सलाह देना चाहते हो (Always speak truth), या किसी को कुछ करने से मना करना चाहते हो (Do not smoke) — तब Imperative use होता है।',
          rule: 'Verb (base form) + Object + . — Subject (You) hidden रहता है',
          ruleExplain: 'Sentence की शुरुआत सीधे Verb (क्रिया) से होती है। Subject (You) लिखा नहीं जाता। जैसे: "Close the door" = (You) close the door. अंत में . या ! लगा सकते हैं।',
          structure: [
            { type: 'Command (आदेश)',   formula: 'Verb + Object + .',                   example: 'Close the door.', exampleExplain: 'Close = Verb, (You) hidden' },
            { type: 'Request (निवेदन)',  formula: 'Please + Verb + Object + .',         example: 'Please help me.', exampleExplain: 'Please = विनम्रता' },
            { type: 'Advice (सलाह)',     formula: 'Always / Never + Verb + Object + .', example: 'Always speak the truth.', exampleExplain: 'Always = हमेशा' },
            { type: 'Prohibition (मना)', formula: 'Do not + Verb + Object + .',         example: 'Do not smoke here.', exampleExplain: 'Do not = मना करना' }
          ],
          examples: {
            simple: [
              { en: 'Close the door.', hi: 'दरवाज़ा बंद करो।', note: 'Close = Verb, (You) hidden' },
              { en: 'Please help me.', hi: 'कृपया मेरी मदद करो।', note: 'Please = विनम्रता' },
              { en: 'Always speak the truth.', hi: 'हमेशा सच बोलो।', note: 'Always = हमेशा' },
              { en: 'Bring me a glass of water.', hi: 'मुझे एक गिलास पानी लाओ।', note: 'Bring = Verb' }
            ],
            negative: [
              { en: 'Do not close the door.', hi: 'दरवाज़ा बंद मत करो।', note: 'Do not = मना' },
              { en: 'Do not smoke here.', hi: 'यहाँ धूम्रपान न करें।', note: 'Do not = मना' },
              { en: 'Never tell a lie.', hi: 'कभी झूठ मत बोलो।', note: 'Never = कभी नहीं' },
              { en: 'Do not touch the wire.', hi: 'तार को मत छुओ।', note: 'Do not = मना' }
            ],
            wh: [
              { en: 'Please tell me what to do.', hi: 'कृपया बताओ क्या करना है।', note: 'Please + tell + what' },
              { en: 'Tell me where to go.', hi: 'बताओ कहाँ जाना है।', note: 'Tell + where' },
              { en: 'Show me how to do it.', hi: 'दिखाओ यह कैसे करना है।', note: 'Show + how' },
              { en: 'Let me know when to come.', hi: 'मुझे बताओ कब आना है।', note: 'Let + when' }
            ]
          },
          practice: {
            basic: [
              { type: 'mcq', q: 'Which is imperative?', options: ['I am here.', 'Come here.', 'Are you here?', 'Wow, here!'], answer: 'Come here.' },
              { type: 'mcq', q: 'Which is imperative?', options: ['She sings.', 'Please sing a song.', 'Does she sing?', 'What a song!'], answer: 'Please sing a song.' },
              { type: 'mcq', q: 'Which is imperative?', options: ['Sit down.', 'He sits.', 'Is he sitting?', 'How he sits!'], answer: 'Sit down.' },
              { type: 'mcq', q: 'Which is imperative?', options: ['I eat rice.', 'Eat your food.', 'Do you eat rice?', 'What a meal!'], answer: 'Eat your food.' },
              { type: 'mcq', q: 'Which is imperative?', options: ['Study hard.', 'He studies hard.', 'Does he study?', 'How hard!'], answer: 'Study hard.' },
              { type: 'mcq', q: 'Imperative ka subject?', options: ['I', 'You (hidden)', 'He', 'No subject'], answer: 'You (hidden)' },
              { type: 'mcq', q: 'Which is imperative?', options: ['Do not go.', 'I do not go.', 'Did you go?', 'How nice!'], answer: 'Do not go.' },
              { type: 'mcq', q: 'Which is imperative?', options: ['Open the window.', 'The window is open.', 'Is the window open?', 'What a window!'], answer: 'Open the window.' },
              { type: 'mcq', q: 'Which is imperative?', options: ['He runs fast.', 'Run fast.', 'Does he run?', 'How fast!'], answer: 'Run fast.' },
              { type: 'mcq', q: 'Structure of imperative?', options: ['S+V+O.', 'V+O+.', 'HV+S+V?', 'S+HV+V!'], answer: 'V+O+.' },
              { type: 'mcq', q: 'Which is imperative?', options: ['Please come in.', 'I come in.', 'Are you in?', 'How in!'], answer: 'Please come in.' },
              { type: 'mcq', q: 'Which is imperative?', options: ['Never give up.', 'He gives up.', 'Does he give up?', 'What a try!'], answer: 'Never give up.' },
              { type: 'mcq', q: 'Which is imperative?', options: ['Listen carefully.', 'She listens.', 'Does she listen?', 'How attentive!'], answer: 'Listen carefully.' },
              { type: 'mcq', q: 'Which is imperative?', options: ['Wash your hands.', 'I wash hands.', 'Did you wash?', 'Clean hands!'], answer: 'Wash your hands.' },
              { type: 'mcq', q: 'Which is imperative?', options: ['Do not be late.', 'He is late.', 'Is he late?', 'How late!'], answer: 'Do not be late.' },
              { type: 'mcq', q: 'Which is imperative?', options: ['Please sit down.', 'I sit down.', 'Do you sit?', 'Sitting down!'], answer: 'Please sit down.' },
              { type: 'mcq', q: 'Which is imperative?', options: ['Help the poor.', 'He helps poor.', 'Does he help?', 'What help!'], answer: 'Help the poor.' },
              { type: 'mcq', q: 'Which is imperative?', options: ['Turn off the light.', 'Light is off.', 'Is light off?', 'Bright light!'], answer: 'Turn off the light.' },
              { type: 'mcq', q: 'Which is imperative?', options: ['Always be kind.', 'She is kind.', 'Is she kind?', 'Kindness!'], answer: 'Always be kind.' },
              { type: 'mcq', q: 'Which is imperative?', options: ['Take care of yourself.', 'He takes care.', 'Does he care?', 'What care!'], answer: 'Take care of yourself.' }
            ],
            hard: [
              { hindi: 'दरवाज़ा बंद करो।', english: 'Close the door.', words: ['Close', 'the', 'door', 'open', 'a', 'window', 'shut', 'this'] },
              { hindi: 'कृपया मेरी मदद करो।', english: 'Please help me.', words: ['Please', 'help', 'me', 'him', 'you', 'us', 'kindly', 'want'] },
              { hindi: 'हमेशा सच बोलो।', english: 'Always speak the truth.', words: ['Always', 'speak', 'the', 'truth', 'never', 'lie', 'tell', 'a'] },
              { hindi: 'यहाँ धूम्रपान न करें।', english: 'Do not smoke here.', words: ['Do', 'not', 'smoke', 'here', 'there', 'does', 'smoking', 'please'] },
              { hindi: 'सीधे बैठो।', english: 'Sit straight.', words: ['Sit', 'straight', 'down', 'stand', 'up', 'you', 'is'] },
              { hindi: 'मेहनत करो।', english: 'Work hard.', words: ['Work', 'hard', 'study', 'smart', 'you', 'do', 'is'] },
              { hindi: 'यह काम करो।', english: 'Do this work.', words: ['Do', 'this', 'work', 'that', 'does', 'you', 'is'] },
              { hindi: 'मुझे पानी दो।', english: 'Give me water.', words: ['Give', 'me', 'water', 'bring', 'tea', 'you', 'is'] }
            ],
            advance: [
              { english: 'Close the door.', hindi: 'दरवाज़ा बंद करो।', words: ['दरवाज़ा', 'बंद', 'करो', 'खोलो', 'और', 'वह', 'इसे', 'था'] },
              { english: 'Please help me.', hindi: 'कृपया मेरी मदद करो।', words: ['कृपया', 'मेरी', 'मदद', 'करो', 'उसकी', 'और', 'वह', 'था'] },
              { english: 'Always speak the truth.', hindi: 'हमेशा सच बोलो।', words: ['हमेशा', 'सच', 'बोलो', 'कभी', 'झूठ', 'और', 'वह', 'था'] },
              { english: 'Do not smoke here.', hindi: 'यहाँ धूम्रपान न करें।', words: ['यहाँ', 'धूम्रपान', 'न', 'करें', 'वहाँ', 'और', 'था', 'इसे'] },
              { english: 'Sit down.', hindi: 'बैठ जाओ।', words: ['बैठ', 'जाओ', 'खड़े', 'हो', 'वह', 'और', 'था', 'इसे'] },
              { english: 'Work hard.', hindi: 'मेहनत करो।', words: ['मेहनत', 'करो', 'आलस', 'और', 'वह', 'था', 'इसे', 'ना'] },
              { english: 'Give me water.', hindi: 'मुझे पानी दो।', words: ['मुझे', 'पानी', 'दो', 'चाय', 'और', 'वह', 'था', 'इसे'] },
              { english: 'Listen carefully.', hindi: 'ध्यान से सुनो।', words: ['ध्यान', 'से', 'सुनो', 'बोलो', 'और', 'वह', 'था', 'इसे'] }
            ]
          }
        },

        // ─────────────────────────────────────────
        // EXCLAMATORY
        // ─────────────────────────────────────────
        {
          id: 'exclamatory',
          title: 'Exclamatory Sentence',
          icon: '😲',
          intro: 'Strong Feeling — अचानक भावना',
          definition: 'वह sentence जो अचानक हुई तीव्र भावना (खुशी, दुख, आश्चर्य, क्रोध, विस्मय) को प्रकट करता है। इसमें भावना ज़्यादा होती है, सूचना कम। इसका अंत हमेशा Exclamation Mark (!) से होता है। इसमें What, How, Alas, Wow जैसे शब्द use होते हैं।',
          usage: 'जब आप अचानक खुश हों (Wow!), दुखी हों (Alas!), आश्चर्य में हों (What a surprise!), या गुस्से में हों — तब Exclamatory sentence use होता है। भावनाओं को तीव्रता से व्यक्त करने के लिए।',
          rule: 'What / How / Alas / Wow + ... + ! (Exclamation Mark)',
          ruleExplain: 'What = आश्चर्य या भावना जताने के लिए | How = गुण बताने के लिए | Alas = दुख जताने के लिए | अंत में ! लगाया जाता है।',
          structure: [
            { type: 'What + Noun Phrase', formula: 'What + a/an + Adjective + Noun + !',       example: 'What a beautiful day!', exampleExplain: 'What + a + beautiful + day' },
            { type: 'How + Adjective',    formula: 'How + Adjective + Subject + Verb + !',      example: 'How nice she is!', exampleExplain: 'How + nice + she + is' },
            { type: 'Alas (दुख)',          formula: 'Alas! + Subject + Verb + ... + !',          example: 'Alas! I lost my wallet.', exampleExplain: 'Alas = दुख का भाव' },
            { type: 'Wow (खुशी)',          formula: 'Wow! + Subject + Verb + ... + !',           example: 'Wow! That is amazing!', exampleExplain: 'Wow = खुशी का भाव' }
          ],
          examples: {
            simple: [
              { en: 'What a beautiful day!', hi: 'क्या सुंदर दिन है!', note: 'What + a + beautiful + day' },
              { en: 'How nice she is!', hi: 'वह कितनी अच्छी है!', note: 'How + nice + she + is' },
              { en: 'Wow! That is amazing!', hi: 'वाह! यह अद्भुत है!', note: 'Wow = खुशी' },
              { en: 'Alas! I lost my wallet.', hi: 'हाय! मेरा बटुआ खो गया।', note: 'Alas = दुख' }
            ],
            negative: [
              { en: 'What a pity! He did not come.', hi: 'क्या अफसोस! वह नहीं आया।', note: 'What a pity = दुख' },
              { en: 'Alas! She cannot walk.', hi: 'हाय! वह चल नहीं सकती।', note: 'Alas = दुख' },
              { en: 'How sad! He is not happy.', hi: 'कितना दुखद! वह खुश नहीं है।', note: 'How sad = दुख' },
              { en: 'What a shame! They did not win.', hi: 'क्या शर्म की बात! वे नहीं जीते।', note: 'What a shame' }
            ],
            wh: [
              { en: 'How beautiful the sunset is!', hi: 'सूर्यास्त कितना सुंदर है!', note: 'How + beautiful' },
              { en: 'What a wonderful performance!', hi: 'क्या शानदार प्रदर्शन!', note: 'What + a + wonderful' },
              { en: 'How fast he runs!', hi: 'वह कितनी तेज़ दौड़ता है!', note: 'How + fast' },
              { en: 'What a brilliant idea!', hi: 'क्या शानदार विचार!', note: 'What + a + brilliant' }
            ]
          },
          practice: {
            basic: [
              { type: 'mcq', q: 'Which is exclamatory?', options: ['I am happy.', 'Am I happy?', 'Be happy.', 'What a happy day!'], answer: 'What a happy day!' },
              { type: 'mcq', q: 'Which is exclamatory?', options: ['How beautiful!', 'She is beautiful.', 'Is she beautiful?', 'Be beautiful.'], answer: 'How beautiful!' },
              { type: 'mcq', q: 'Which is exclamatory?', options: ['I am tired.', 'Alas! I am tired.', 'Am I tired?', 'Do not be tired.'], answer: 'Alas! I am tired.' },
              { type: 'mcq', q: 'Which is exclamatory?', options: ['Wow! Great job!', 'He did a great job.', 'Did he do it?', 'Do it.'], answer: 'Wow! Great job!' },
              { type: 'mcq', q: 'Which is exclamatory?', options: ['What a lovely song!', 'She sings well.', 'Does she sing?', 'Sing now.'], answer: 'What a lovely song!' },
              { type: 'mcq', q: 'Exclamatory ends with?', options: ['.', '?', '!', ','], answer: '!' },
              { type: 'mcq', q: 'Which is exclamatory?', options: ['He runs fast.', 'How fast he runs!', 'Does he run?', 'Run fast.'], answer: 'How fast he runs!' },
              { type: 'mcq', q: 'Which is exclamatory?', options: ['What a view!', 'The view is good.', 'Is view good?', 'See the view.'], answer: 'What a view!' },
              { type: 'mcq', q: 'Which is exclamatory?', options: ['How sweet!', 'It is sweet.', 'Is it sweet?', 'Taste it.'], answer: 'How sweet!' },
              { type: 'mcq', q: 'Structure of exclamatory?', options: ['S+V+O.', 'S+V+O?', 'What/How + ...!', 'V+O.'], answer: 'What/How + ...!' },
              { type: 'mcq', q: 'Which is exclamatory?', options: ['What a surprise!', 'I am surprised.', 'Are you surprised?', 'Surprise me.'], answer: 'What a surprise!' },
              { type: 'mcq', q: 'Which is exclamatory?', options: ['Alas! He failed.', 'He failed.', 'Did he fail?', 'Do not fail.'], answer: 'Alas! He failed.' },
              { type: 'mcq', q: 'Which is exclamatory?', options: ['What a goal!', 'He scored a goal.', 'Did he score?', 'Score a goal.'], answer: 'What a goal!' },
              { type: 'mcq', q: 'Which is exclamatory?', options: ['How wonderful!', 'It is wonderful.', 'Is it wonderful?', 'Make it wonderful.'], answer: 'How wonderful!' },
              { type: 'mcq', q: 'Which is exclamatory?', options: ['What a mess!', 'This is a mess.', 'Is this a mess?', 'Clean the mess.'], answer: 'What a mess!' },
              { type: 'mcq', q: 'Which is exclamatory?', options: ['How interesting!', 'It is interesting.', 'Is it interesting?', 'Read it.'], answer: 'How interesting!' },
              { type: 'mcq', q: 'Which is exclamatory?', options: ['What a hit!', 'He hit the ball.', 'Did he hit?', 'Hit the ball.'], answer: 'What a hit!' },
              { type: 'mcq', q: 'Which is exclamatory?', options: ['How cute!', 'The baby is cute.', 'Is the baby cute?', 'Look at the baby.'], answer: 'How cute!' },
              { type: 'mcq', q: 'Which is exclamatory?', options: ['What a tragedy!', 'It was a tragedy.', 'Was it a tragedy?', 'Avoid tragedy.'], answer: 'What a tragedy!' },
              { type: 'mcq', q: 'Which is exclamatory?', options: ['How lucky!', 'You are lucky.', 'Are you lucky?', 'Try your luck.'], answer: 'How lucky!' }
            ],
            hard: [
              { hindi: 'क्या सुंदर दिन है!', english: 'What a beautiful day!', words: ['What', 'a', 'beautiful', 'day', 'How', 'nice', 'is', 'the'] },
              { hindi: 'वह कितनी अच्छी है!', english: 'How nice she is!', words: ['How', 'nice', 'she', 'is', 'What', 'a', 'girl', 'good'] },
              { hindi: 'वाह! यह अद्भुत है!', english: 'Wow! That is amazing!', words: ['Wow', 'That', 'is', 'amazing', 'Alas', 'It', 'was', 'good'] },
              { hindi: 'हाय! मेरा बटुआ खो गया।', english: 'Alas! I lost my wallet.', words: ['Alas', 'I', 'lost', 'my', 'wallet', 'Wow', 'found', 'money'] },
              { hindi: 'क्या शानदार विचार!', english: 'What a brilliant idea!', words: ['What', 'a', 'brilliant', 'idea', 'How', 'good', 'is', 'this'] },
              { hindi: 'वह कितनी तेज़ दौड़ता है!', english: 'How fast he runs!', words: ['How', 'fast', 'he', 'runs', 'What', 'slow', 'she', 'walks'] },
              { hindi: 'क्या अफसोस!', english: 'What a pity!', words: ['What', 'a', 'pity', 'How', 'sad', 'is', 'this'] },
              { hindi: 'क्या सुंदर फूल है!', english: 'What a beautiful flower!', words: ['What', 'a', 'beautiful', 'flower', 'How', 'nice', 'is', 'the'] }
            ],
            advance: [
              { english: 'What a beautiful day!', hindi: 'क्या सुंदर दिन है!', words: ['क्या', 'सुंदर', 'दिन', 'है', 'रात', 'और', 'वह', 'था'] },
              { english: 'How nice she is!', hindi: 'वह कितनी अच्छी है!', words: ['वह', 'कितनी', 'अच्छी', 'है', 'बुरी', 'और', 'था', 'यह'] },
              { english: 'Wow! That is amazing!', hindi: 'वाह! यह अद्भुत है!', words: ['वाह', 'यह', 'अद्भुत', 'है', 'हाय', 'और', 'था', 'वह'] },
              { english: 'Alas! I lost my wallet.', hindi: 'हाय! मेरा बटुआ खो गया।', words: ['हाय', 'मेरा', 'बटुआ', 'खो', 'गया', 'वाह', 'और', 'था'] },
              { english: 'What a brilliant idea!', hindi: 'क्या शानदार विचार!', words: ['क्या', 'शानदार', 'विचार', 'है', 'बुरा', 'और', 'था', 'यह'] },
              { english: 'How fast he runs!', hindi: 'वह कितनी तेज़ दौड़ता है!', words: ['वह', 'कितनी', 'तेज़', 'दौड़ता', 'है', 'धीमा', 'और', 'था'] },
              { english: 'What a pity!', hindi: 'क्या अफसोस!', words: ['क्या', 'अफसोस', 'है', 'खुशी', 'और', 'था', 'यह'] },
              { english: 'What a beautiful flower!', hindi: 'क्या सुंदर फूल है!', words: ['क्या', 'सुंदर', 'फूल', 'है', 'पत्ता', 'और', 'था', 'यह'] }
            ]
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CARD 2: CLAUSE
    // ═══════════════════════════════════════════════════════
    {
      id: 'clause',
      title: 'Clause',
      icon: '🔗',
      color: 'green',
      intro: 'Clause ke 2 types — Independent aur Dependent clause',
      subtopics: [
        // ─────────────────────────────────────────
        // INDEPENDENT CLAUSE
        // ─────────────────────────────────────────
        {
          id: 'independent',
          title: 'Independent Clause',
          icon: '🟢',
          intro: 'वह clause जो अपने आप में पूरा sentence बन सके',
          definition: 'वह clause जो अपने आप में पूर्ण वाक्य बन सके — इसका अपना subject और verb हो, और अर्थ पूरा हो। जब आप इसे अकेले बोलो, तो सुनने वाले को पूरी बात समझ आ जाए। इसे Main Clause भी कहते हैं क्योंकि यह मुख्य विचार रखता है।',
          usage: 'Independent clause अकेले sentence बन सकता है — इसलिए इसे Simple Sentence भी कहा जाता है। Compound और Complex sentences में भी independent clause होता है।',
          rule: 'Subject + Verb + Object — complete meaning के साथ',
          ruleExplain: 'Subject = कर्ता (I, She, Ram) | Verb = क्रिया (eat, go, is) | Object = कर्म (rice, school) — तीनों मिलकर पूरा अर्थ देते हैं।',
          structure: [
            { type: 'Simple',                formula: 'Subject + Verb + Object',                   example: 'I love India.', exampleExplain: 'I + love + India' },
            { type: 'With Adjective',        formula: 'Subject + Verb + Adjective',                example: 'She is beautiful.', exampleExplain: 'She + is + beautiful' },
            { type: 'With Adverb',           formula: 'Subject + Verb + Adverb',                   example: 'He runs fast.', exampleExplain: 'He + runs + fast' },
            { type: 'Complete Complex',      formula: 'Independent + Conjunction + Dependent',     example: 'I went home because I was tired.', exampleExplain: '"I went home" = independent' }
          ],
          examples: {
            simple: [
              { en: 'I love India.', hi: 'मुझे भारत से प्यार है।', note: 'I + love + India' },
              { en: 'She sings well.', hi: 'वह अच्छा गाती है।', note: 'She + sings + well' },
              { en: 'The sun rises in the east.', hi: 'सूरज पूर्व में उगता है।', note: 'The sun + rises' },
              { en: 'Ram eats rice.', hi: 'राम चावल खाता है।', note: 'Ram + eats + rice' }
            ],
            negative: [
              { en: 'I do not love junk food.', hi: 'मुझे जंक फूड पसंद नहीं।', note: 'do not = नकारात्मक' },
              { en: 'She does not sing badly.', hi: 'वह बुरा नहीं गाती।', note: 'does not = नकारात्मक' },
              { en: 'The sun does not rise in the west.', hi: 'सूरज पश्चिम में नहीं उगता।', note: 'does not' },
              { en: 'Ram does not eat meat.', hi: 'राम मांस नहीं खाता।', note: 'does not' }
            ],
            wh: [
              { en: 'I know what you want.', hi: 'मैं जानता हूँ तुम क्या चाहते हो।', note: '"I know" = independent' },
              { en: 'Tell me where he lives.', hi: 'बताओ वह कहाँ रहता है।', note: '"Tell me" = independent' },
              { en: 'I know when she will come.', hi: 'मैं जानता हूँ वह कब आएगी।', note: '"I know" = independent' },
              { en: 'Ask him what he needs.', hi: 'उससे पूछो उसे क्या चाहिए।', note: '"Ask him" = independent' }
            ]
          },
          practice: {
            basic: [
              { type: 'mcq', q: 'Which is an independent clause?', options: ['Because I was tired', 'I went to bed', 'When he came', 'If it rains'], answer: 'I went to bed' },
              { type: 'mcq', q: 'Which is an independent clause?', options: ['Although she tried', 'She failed', 'Since morning', 'While walking'], answer: 'She failed' },
              { type: 'mcq', q: 'Which is an independent clause?', options: ['I love tea', 'Because I love tea', 'When I love tea', 'If I love tea'], answer: 'I love tea' },
              { type: 'mcq', q: 'Which is an independent clause?', options: ['He is smart', 'Though he is smart', 'If he is smart', 'As he is smart'], answer: 'He is smart' },
              { type: 'mcq', q: 'Which is an independent clause?', options: ['The dog barks', 'Because the dog barks', 'When the dog barks', 'Although the dog barks'], answer: 'The dog barks' },
              { type: 'mcq', q: 'Independent clause ka doosra naam?', options: ['Sub clause', 'Main clause', 'Dependent clause', 'Phrase'], answer: 'Main clause' },
              { type: 'mcq', q: 'Which is independent?', options: ['When I was young', 'I was young', 'Since morning', 'If I try'], answer: 'I was young' },
              { type: 'mcq', q: 'Which is independent?', options: ['Because she is kind', 'She is kind', 'Although she is kind', 'When she is kind'], answer: 'She is kind' },
              { type: 'mcq', q: 'Which is independent?', options: ['I went home', 'After I went home', 'Before I went home', 'Because I went home'], answer: 'I went home' },
              { type: 'mcq', q: 'Which is independent?', options: ['If you study', 'You will pass', 'When you study', 'Because you study'], answer: 'You will pass' },
              { type: 'mcq', q: 'Which is independent?', options: ['He came late', 'Though he came late', 'If he came late', 'When he came late'], answer: 'He came late' },
              { type: 'mcq', q: 'Which is independent?', options: ['I am happy', 'Because I am happy', 'When I am happy', 'If I am happy'], answer: 'I am happy' },
              { type: 'mcq', q: 'Which is independent?', options: ['She dances', 'While she dances', 'When she dances', 'Because she dances'], answer: 'She dances' },
              { type: 'mcq', q: 'Which is independent?', options: ['We played cricket', 'After we played cricket', 'When we played cricket', 'Because we played'], answer: 'We played cricket' },
              { type: 'mcq', q: 'Which is independent?', options: ['It is raining', 'If it is raining', 'When it is raining', 'Because it is raining'], answer: 'It is raining' },
              { type: 'mcq', q: 'Which is independent?', options: ['He is my friend', 'Because he is my friend', 'Since he is my friend', 'If he is my friend'], answer: 'He is my friend' },
              { type: 'mcq', q: 'Which is independent?', options: ['They are playing', 'While they are playing', 'When they are playing', 'Because they are playing'], answer: 'They are playing' },
              { type: 'mcq', q: 'Which is independent?', options: ['I know him', 'Because I know him', 'If I know him', 'Since I know him'], answer: 'I know him' },
              { type: 'mcq', q: 'Which is independent?', options: ['Books are useful', 'Because books are useful', 'If books are useful', 'When books are useful'], answer: 'Books are useful' },
              { type: 'mcq', q: 'Which is independent?', options: ['The train arrived', 'Before the train arrived', 'After the train arrived', 'When the train arrived'], answer: 'The train arrived' }
            ],
            hard: [
              { hindi: 'मुझे भारत से प्यार है।', english: 'I love India.', words: ['love', 'I', 'India', 'hate', 'like', 'we', 'you', 'and'] },
              { hindi: 'वह अच्छा गाती है।', english: 'She sings well.', words: ['sings', 'She', 'well', 'sing', 'He', 'is', 'and', 'badly'] },
              { hindi: 'सूरज पूर्व में उगता है।', english: 'The sun rises in the east.', words: ['rises', 'The', 'sun', 'east', 'in', 'the', 'set', 'west'] },
              { hindi: 'राम चावल खाता है।', english: 'Ram eats rice.', words: ['eats', 'Ram', 'rice', 'eat', 'She', 'roti', 'is', 'and'] },
              { hindi: 'मैं घर गया।', english: 'I went home.', words: ['went', 'I', 'home', 'go', 'she', 'school', 'is', 'and'] },
              { hindi: 'वह सुंदर है।', english: 'She is beautiful.', words: ['is', 'She', 'beautiful', 'are', 'He', 'ugly', 'and', 'was'] },
              { hindi: 'वह तेज़ दौड़ता है।', english: 'He runs fast.', words: ['runs', 'He', 'fast', 'run', 'She', 'slow', 'is', 'and'] },
              { hindi: 'मैं खुश हूँ।', english: 'I am happy.', words: ['am', 'I', 'happy', 'is', 'She', 'sad', 'and', 'are'] }
            ],
            advance: [
              { english: 'I love India.', hindi: 'मुझे भारत से प्यार है।', words: ['मुझे', 'भारत', 'से', 'प्यार', 'है', 'नफरत', 'और', 'था'] },
              { english: 'She sings well.', hindi: 'वह अच्छा गाती है।', words: ['वह', 'अच्छा', 'गाती', 'है', 'बुरा', 'और', 'था', 'यह'] },
              { english: 'The sun rises in the east.', hindi: 'सूरज पूर्व में उगता है।', words: ['सूरज', 'पूर्व', 'में', 'उगता', 'है', 'पश्चिम', 'और', 'था'] },
              { english: 'Ram eats rice.', hindi: 'राम चावल खाता है।', words: ['राम', 'चावल', 'खाता', 'है', 'रोटी', 'और', 'था', 'यह'] },
              { english: 'I went home.', hindi: 'मैं घर गया।', words: ['मैं', 'घर', 'गया', 'स्कूल', 'और', 'था', 'यह', 'वह'] },
              { english: 'She is beautiful.', hindi: 'वह सुंदर है।', words: ['वह', 'सुंदर', 'है', 'बदसूरत', 'और', 'था', 'यह', 'मैं'] },
              { english: 'He runs fast.', hindi: 'वह तेज़ दौड़ता है।', words: ['वह', 'तेज़', 'दौड़ता', 'है', 'धीमा', 'और', 'था', 'यह'] },
              { english: 'I am happy.', hindi: 'मैं खुश हूँ।', words: ['मैं', 'खुश', 'हूँ', 'उदास', 'और', 'था', 'यह', 'वह'] }
            ]
          }
        },

        // ─────────────────────────────────────────
        // DEPENDENT CLAUSE
        // ─────────────────────────────────────────
        {
          id: 'dependent',
          title: 'Dependent Clause',
          icon: '🔴',
          intro: 'वह clause जो अकेले पूरा sentence नहीं बन सकता',
          definition: 'वह clause जो अकेले पूरा अर्थ नहीं देता — इसके लिए एक independent clause की ज़रूरत होती है। इसमें subject और verb तो होते हैं, लेकिन अर्थ अधूरा रह जाता है। इसे Subordinate Clause भी कहते हैं। जब आप इसे अकेले बोलो, तो सुनने वाले को लगेगा कि बात अधूरी है।',
          usage: 'जब आप दो ideas को जोड़ना चाहते हो, किसी कारण (because), समय (when), शर्त (if), या विरोध (although) को व्यक्त करना चाहते हो — तब dependent clause use होता है। यह अकेले नहीं आता — हमेशा independent clause के साथ मिलकर complex sentence बनाता है।',
          rule: 'Subordinating Conjunction (because, if, when, although...) + Subject + Verb',
          ruleExplain: 'Subordinating Conjunction = जोड़ने वाला शब्द (because, if, when, although, since, until) | Subject = कर्ता | Verb = क्रिया | अकेले बोलने पर अधूरा लगता है।',
          structure: [
            { type: 'Cause (कारण)',     formula: 'Because + Subject + Verb',      example: 'Because I was tired...', exampleExplain: 'Because = कारण' },
            { type: 'Time (समय)',        formula: 'When + Subject + Verb',         example: 'When he came...', exampleExplain: 'When = समय' },
            { type: 'Condition (शर्त)', formula: 'If + Subject + Verb',            example: 'If it rains...', exampleExplain: 'If = शर्त' },
            { type: 'Contrast (विरोध)', formula: 'Although + Subject + Verb',      example: 'Although she tried...', exampleExplain: 'Although = विरोध' }
          ],
          examples: {
            simple: [
              { en: 'Because I was tired...', hi: 'क्योंकि मैं थका था...', note: 'Because = कारण' },
              { en: 'When he came...', hi: 'जब वह आया...', note: 'When = समय' },
              { en: 'If it rains...', hi: 'अगर बारिश हो...', note: 'If = शर्त' },
              { en: 'Although she tried...', hi: 'हालांकि उसने कोशिश की...', note: 'Although = विरोध' }
            ],
            negative: [
              { en: 'Because I was not ready...', hi: 'क्योंकि मैं तैयार नहीं था...', note: 'not = नकारात्मक' },
              { en: 'If you do not study...', hi: 'अगर तुम पढ़ोगे नहीं...', note: 'do not = नकारात्मक' },
              { en: 'When she does not come...', hi: 'जब वह नहीं आएगी...', note: 'does not' },
              { en: 'Although he is not rich...', hi: 'हालांकि वह अमीर नहीं है...', note: 'is not' }
            ],
            wh: [
              { en: 'What I said was true.', hi: 'जो मैंने कहा सच था।', note: '"What I said" = dependent' },
              { en: 'Wherever you go, I will follow.', hi: 'जहाँ भी तुम जाओगे, मैं आऊँगा।', note: 'Wherever' },
              { en: 'Whatever you do, do well.', hi: 'जो भी करो, अच्छा करो।', note: 'Whatever' },
              { en: 'Whichever you choose, I agree.', hi: 'तुम जो चुनो, मैं मानता हूँ।', note: 'Whichever' }
            ]
          },
          practice: {
            basic: [
              { type: 'mcq', q: 'Which is a dependent clause?', options: ['I am fine', 'Because I am fine', 'She sings', 'He runs'], answer: 'Because I am fine' },
              { type: 'mcq', q: 'Which is a dependent clause?', options: ['When I was young', 'I was young', 'She was there', 'We played'], answer: 'When I was young' },
              { type: 'mcq', q: 'Which is a dependent clause?', options: ['If you study', 'You study', 'Study hard', 'I study'], answer: 'If you study' },
              { type: 'mcq', q: 'Which is a dependent clause?', options: ['Although he is rich', 'He is rich', 'He has money', 'Money is good'], answer: 'Although he is rich' },
              { type: 'mcq', q: 'Which is a dependent clause?', options: ['Since morning', 'The sun rises', 'I woke up', 'Birds sing'], answer: 'Since morning' },
              { type: 'mcq', q: 'Dependent clause ka doosra naam?', options: ['Main clause', 'Subordinate clause', 'Phrase', 'Sentence'], answer: 'Subordinate clause' },
              { type: 'mcq', q: 'Which is dependent?', options: ['I love you', 'Because I love you', 'You love me', 'We love'], answer: 'Because I love you' },
              { type: 'mcq', q: 'Which is dependent?', options: ['When the bell rings', 'The bell rings', 'Ring the bell', 'Bell is ringing'], answer: 'When the bell rings' },
              { type: 'mcq', q: 'Which is dependent?', options: ['After the movie ended', 'The movie ended', 'We watched movie', 'Movie was good'], answer: 'After the movie ended' },
              { type: 'mcq', q: 'Which is dependent?', options: ['If I had money', 'I have money', 'Money is useful', 'Give me money'], answer: 'If I had money' },
              { type: 'mcq', q: 'Which is dependent?', options: ['Though she was tired', 'She was tired', 'She went to bed', 'Tiredness is bad'], answer: 'Though she was tired' },
              { type: 'mcq', q: 'Which is dependent?', options: ['Since you asked', 'You asked me', 'I told you', 'Ask me anything'], answer: 'Since you asked' },
              { type: 'mcq', q: 'Which is dependent?', options: ['Because it was late', 'It was late', 'We went home', 'Late night is dark'], answer: 'Because it was late' },
              { type: 'mcq', q: 'Which is dependent?', options: ['Until you come', 'You come here', 'Come here', 'Welcome here'], answer: 'Until you come' },
              { type: 'mcq', q: 'Which is dependent?', options: ['Wherever you go', 'You go there', 'Go away', 'Going is fun'], answer: 'Wherever you go' },
              { type: 'mcq', q: 'Which is dependent?', options: ['As soon as he arrived', 'He arrived', 'Arrive early', 'He is here'], answer: 'As soon as he arrived' },
              { type: 'mcq', q: 'Which is dependent?', options: ['Before you leave', 'You leave now', 'Leave me', 'Leaving is hard'], answer: 'Before you leave' },
              { type: 'mcq', q: 'Which is dependent?', options: ['Whenever it rains', 'It rains', 'Rain is good', 'Take umbrella'], answer: 'Whenever it rains' },
              { type: 'mcq', q: 'Which is dependent?', options: ['Unless you try', 'You try hard', 'Try again', 'Trying helps'], answer: 'Unless you try' },
              { type: 'mcq', q: 'Which is dependent?', options: ['While I was sleeping', 'I was sleeping', 'Sleep well', 'Good sleep'], answer: 'While I was sleeping' }
            ],
            hard: [
              { hindi: 'क्योंकि मैं थका था...', english: 'Because I was tired...', words: ['Because', 'I', 'was', 'tired', 'When', 'am', 'happy', 'and'] },
              { hindi: 'जब वह आया...', english: 'When he came...', words: ['When', 'he', 'came', 'Because', 'she', 'goes', 'and', 'was'] },
              { hindi: 'अगर बारिश हो...', english: 'If it rains...', words: ['If', 'it', 'rains', 'When', 'she', 'comes', 'and', 'was'] },
              { hindi: 'हालांकि उसने कोशिश की...', english: 'Although she tried...', words: ['Although', 'she', 'tried', 'Because', 'he', 'went', 'and', 'was'] },
              { hindi: 'क्योंकि मैं तैयार नहीं था...', english: 'Because I was not ready...', words: ['Because', 'I', 'was', 'not', 'ready', 'When', 'am', 'happy'] },
              { hindi: 'जब वह नहीं आएगी...', english: 'When she does not come...', words: ['When', 'she', 'does', 'not', 'come', 'Because', 'he', 'goes'] },
              { hindi: 'अगर तुम पढ़ोगे नहीं...', english: 'If you do not study...', words: ['If', 'you', 'do', 'not', 'study', 'When', 'she', 'goes'] },
              { hindi: 'हालांकि वह अमीर नहीं है...', english: 'Although he is not rich...', words: ['Although', 'he', 'is', 'not', 'rich', 'Because', 'she', 'was'] }
            ],
            advance: [
              { english: 'Because I was tired...', hindi: 'क्योंकि मैं थका था...', words: ['क्योंकि', 'मैं', 'थका', 'था', 'जब', 'वह', 'और', 'है'] },
              { english: 'When he came...', hindi: 'जब वह आया...', words: ['जब', 'वह', 'आया', 'क्योंकि', 'मैं', 'और', 'था', 'यह'] },
              { english: 'If it rains...', hindi: 'अगर बारिश हो...', words: ['अगर', 'बारिश', 'हो', 'जब', 'वह', 'और', 'था', 'यह'] },
              { english: 'Although she tried...', hindi: 'हालांकि उसने कोशिश की...', words: ['हालांकि', 'उसने', 'कोशिश', 'की', 'क्योंकि', 'और', 'था', 'यह'] },
              { english: 'Because I was not ready...', hindi: 'क्योंकि मैं तैयार नहीं था...', words: ['क्योंकि', 'मैं', 'तैयार', 'नहीं', 'था', 'जब', 'और', 'है'] },
              { english: 'When she does not come...', hindi: 'जब वह नहीं आएगी...', words: ['जब', 'वह', 'नहीं', 'आएगी', 'क्योंकि', 'और', 'था', 'यह'] },
              { english: 'If you do not study...', hindi: 'अगर तुम पढ़ोगे नहीं...', words: ['अगर', 'तुम', 'पढ़ोगे', 'नहीं', 'जब', 'और', 'था', 'यह'] },
              { english: 'Although he is not rich...', hindi: 'हालांकि वह अमीर नहीं है...', words: ['हालांकि', 'वह', 'अमीर', 'नहीं', 'है', 'क्योंकि', 'और', 'था'] }
            ]
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CARD 3: TENSE
    // ═══════════════════════════════════════════════════════
    {
      id: 'tense',
      title: 'Tense',
      icon: '⏰',
      color: 'purple',
      intro: 'Tense ke 3 main types — Present, Past, Future',
      subtopics: [
        // ═══ PRESENT ═══
        {
          id: 'present',
          title: 'Present Tense',
          icon: '🟢',
          intro: 'वर्तमान काल — अभी हो रहा है',
          subtopics: [

            // ───── PRESENT SIMPLE ─────
            {
              id: 'present-simple',
              title: 'Present Simple / Indefinite',
              icon: '1️⃣',
              intro: 'आदत, सच या नियमित काम',
              recognition: 'जब काम रोज़ होता है, आदत है, या universal truth हो। Time words: every day, always, usually, often, never, sometimes.',
              definition: 'Present Simple Tense वह tense है जो बताता है कि कोई काम हमेशा होता है, रोज़ होता है, या एक सच्चाई है। यह अभी हो रहा हो ऐसा ज़रूरी नहीं — यह general बात है। जैसे: "I eat rice" — मैं चावल खाता हूँ (रोज़ या आमतौर पर)।',
              usage: 'Daily routine (I wake up at 6 am), habits (She smokes), universal truths (Sun rises in east), fixed schedules (Train leaves at 5 pm), feelings (I like tea) — इन सब में Present Simple use होता है।',
              rule: 'Subject + V1 (या V5) + Object',
              ruleExplain: 'V1 = Verb base form (eat, go, play) | V5 = Verb + s/es (He/She/It के साथ: eats, goes, plays) | I/We/You/They → V1 | He/She/It → V5',
              structure: [
                { type: 'Simple',        formula: 'Subject + V1/V5 + Object',              example: 'I eat rice.', exampleExplain: 'I + eat (V1) + rice' },
                { type: 'Negative',      formula: 'Subject + do/does + not + V1 + Object', example: 'I do not eat meat.', exampleExplain: 'do not + eat (V1)' },
                { type: 'Interrogative', formula: 'Do/Does + Subject + V1 + Object?',       example: 'Do you eat rice?', exampleExplain: 'Do + you + eat' },
                { type: 'WH-Question',   formula: 'WH + do/does + Subject + V1 + ?',        example: 'What do you eat?', exampleExplain: 'What + do + you + eat' }
              ],
              examples: {
                simple: [
                  { en: 'I eat rice every day.', hi: 'मैं रोज़ चावल खाता हूँ।', note: 'I + eat (V1)' },
                  { en: 'She goes to school.', hi: 'वह स्कूल जाती है।', note: 'She + goes (V5)' },
                  { en: 'The sun rises in the east.', hi: 'सूरज पूर्व में उगता है।', note: 'Universal truth' },
                  { en: 'We play cricket on Sundays.', hi: 'हम रविवार को क्रिकेट खेलते हैं।', note: 'We + play (V1)' }
                ],
                negative: [
                  { en: 'I do not eat meat.', hi: 'मैं मांस नहीं खाता।', note: 'do not + eat' },
                  { en: 'She does not go to office.', hi: 'वह ऑफिस नहीं जाती।', note: 'does not + go' },
                  { en: 'The sun does not rise in the west.', hi: 'सूरज पश्चिम में नहीं उगता।', note: 'does not + rise' },
                  { en: 'They do not play cricket.', hi: 'वे क्रिकेट नहीं खेलते।', note: 'do not + play' }
                ],
                wh: [
                  { en: 'What do you eat?', hi: 'तुम क्या खाते हो?', note: 'What + do + you + eat' },
                  { en: 'Where does she go?', hi: 'वह कहाँ जाती है?', note: 'Where + does + she + go' },
                  { en: 'When does the sun rise?', hi: 'सूरज कब उगता है?', note: 'When + does + sun + rise' },
                  { en: 'Why do they play cricket?', hi: 'वे क्रिकेट क्यों खेलते हैं?', note: 'Why + do + they + play' }
                ]
              },
              practice: {
                basic: [
                  { type: 'mcq', q: 'I ___ rice every day.', options: ['eat', 'eats', 'eating', 'ate'], answer: 'eat' },
                  { type: 'mcq', q: 'She ___ to school.', options: ['go', 'goes', 'going', 'went'], answer: 'goes' },
                  { type: 'mcq', q: 'He ___ not like tea.', options: ['do', 'does', 'is', 'are'], answer: 'does' },
                  { type: 'mcq', q: '___ you play cricket?', options: ['Do', 'Does', 'Is', 'Are'], answer: 'Do' },
                  { type: 'mcq', q: 'What ___ she eat?', options: ['do', 'does', 'is', 'are'], answer: 'does' },
                  { type: 'mcq', q: 'The sun ___ in the east.', options: ['rise', 'rises', 'rising', 'rose'], answer: 'rises' },
                  { type: 'mcq', q: 'They ___ cricket on Sundays.', options: ['play', 'plays', 'playing', 'played'], answer: 'play' },
                  { type: 'mcq', q: 'She does not ___ to office.', options: ['go', 'goes', 'going', 'went'], answer: 'go' },
                  { type: 'mcq', q: '___ she go to school?', options: ['Do', 'Does', 'Is', 'Are'], answer: 'Does' },
                  { type: 'mcq', q: 'Where ___ you live?', options: ['do', 'does', 'is', 'are'], answer: 'do' },
                  { type: 'mcq', q: 'He ___ every morning.', options: ['walk', 'walks', 'walking', 'walked'], answer: 'walks' },
                  { type: 'mcq', q: 'I ___ not like coffee.', options: ['do', 'does', 'is', 'am'], answer: 'do' },
                  { type: 'mcq', q: 'The birds ___ in the morning.', options: ['sing', 'sings', 'singing', 'sang'], answer: 'sing' },
                  { type: 'mcq', q: 'My father ___ in a bank.', options: ['work', 'works', 'working', 'worked'], answer: 'works' },
                  { type: 'mcq', q: '___ they play football?', options: ['Do', 'Does', 'Is', 'Are'], answer: 'Do' },
                  { type: 'mcq', q: 'Water ___ at 100°C.', options: ['boil', 'boils', 'boiling', 'boiled'], answer: 'boils' },
                  { type: 'mcq', q: 'She ___ English very well.', options: ['speak', 'speaks', 'speaking', 'spoke'], answer: 'speaks' },
                  { type: 'mcq', q: 'We ___ to temple on Monday.', options: ['go', 'goes', 'going', 'went'], answer: 'go' },
                  { type: 'mcq', q: 'When ___ the train leave?', options: ['do', 'does', 'is', 'are'], answer: 'does' },
                  { type: 'mcq', q: 'He never ___ a lie.', options: ['tell', 'tells', 'telling', 'told'], answer: 'tells' }
                ],
                hard: [
                  { hindi: 'मैं रोज़ चावल खाता हूँ।', english: 'I eat rice every day.', words: ['eat', 'I', 'rice', 'every', 'day', 'eats', 'we', 'and'] },
                  { hindi: 'वह स्कूल जाती है।', english: 'She goes to school.', words: ['goes', 'She', 'to', 'school', 'go', 'He', 'and', 'is'] },
                  { hindi: 'सूरज पूर्व में उगता है।', english: 'The sun rises in the east.', words: ['rises', 'The', 'sun', 'east', 'in', 'the', 'rise', 'and'] },
                  { hindi: 'हम रविवार को क्रिकेट खेलते हैं।', english: 'We play cricket on Sundays.', words: ['play', 'We', 'cricket', 'on', 'Sundays', 'plays', 'and', 'is'] },
                  { hindi: 'मैं मांस नहीं खाता।', english: 'I do not eat meat.', words: ['do', 'I', 'not', 'eat', 'meat', 'does', 'and', 'is'] },
                  { hindi: 'वह ऑफिस नहीं जाती।', english: 'She does not go to office.', words: ['does', 'She', 'not', 'go', 'office', 'to', 'do', 'and'] },
                  { hindi: 'तुम क्या खाते हो?', english: 'What do you eat?', words: ['What', 'do', 'you', 'eat', 'does', 'I', 'and', 'is'] },
                  { hindi: 'वह कहाँ जाती है?', english: 'Where does she go?', words: ['Where', 'does', 'she', 'go', 'do', 'I', 'and', 'is'] }
                ],
                advance: [
                  { english: 'I eat rice every day.', hindi: 'मैं रोज़ चावल खाता हूँ।', words: ['मैं', 'रोज़', 'चावल', 'खाता', 'हूँ', 'खाती', 'और', 'था'] },
                  { english: 'She goes to school.', hindi: 'वह स्कूल जाती है।', words: ['वह', 'स्कूल', 'जाती', 'है', 'जाता', 'और', 'था', 'यह'] },
                  { english: 'The sun rises in the east.', hindi: 'सूरज पूर्व में उगता है।', words: ['सूरज', 'पूर्व', 'में', 'उगता', 'है', 'पश्चिम', 'और', 'था'] },
                  { english: 'We play cricket on Sundays.', hindi: 'हम रविवार को क्रिकेट खेलते हैं।', words: ['हम', 'रविवार', 'को', 'क्रिकेट', 'खेलते', 'हैं', 'और', 'था'] },
                  { english: 'I do not eat meat.', hindi: 'मैं मांस नहीं खाता।', words: ['मैं', 'मांस', 'नहीं', 'खाता', 'हूँ', 'और', 'था', 'यह'] },
                  { english: 'She does not go to office.', hindi: 'वह ऑफिस नहीं जाती।', words: ['वह', 'ऑफिस', 'नहीं', 'जाती', 'है', 'और', 'था', 'यह'] },
                  { english: 'What do you eat?', hindi: 'तुम क्या खाते हो?', words: ['तुम', 'क्या', 'खाते', 'हो', 'मैं', 'और', 'था', 'यह'] },
                  { english: 'Where does she go?', hindi: 'वह कहाँ जाती है?', words: ['वह', 'कहाँ', 'जाती', 'है', 'मैं', 'और', 'था', 'यह'] }
                ]
              }
            },

            // ───── PRESENT CONTINUOUS ─────
            {
              id: 'present-continuous',
              title: 'Present Continuous',
              icon: '2️⃣',
              intro: 'अभी हो रहा है',
              recognition: 'जब काम अभी, बोलते समय, चल रहा है। Time words: now, at this moment, currently, look!, listen!.',
              definition: 'Present Continuous Tense वह tense है जो बताता है कि कोई काम अभी, इसी वक्त हो रहा है। जब आप बात कर रहे हो, उस समय काम चल रहा है। जैसे: "I am eating rice" — अभी, इस वक्त, मैं चावल खा रहा हूँ।',
              usage: 'जो काम अभी चल रहा है (I am reading), जो temporary है (She is staying with us), जो future के लिए तय है (I am meeting him tomorrow), बदलती situation के लिए (The weather is getting cold) — इनमें Present Continuous use होता है।',
              rule: 'Subject + is/am/are + V-ing (Verb + ing) + Object',
              ruleExplain: 'is/am/are = Helping Verb (I → am, He/She/It → is, We/You/They → are) | V-ing = Verb + ing (eat → eating, go → going)',
              structure: [
                { type: 'Simple',        formula: 'Subject + is/am/are + V-ing + Object',           example: 'I am eating rice.', exampleExplain: 'I + am + eating' },
                { type: 'Negative',      formula: 'Subject + is/am/are + not + V-ing + Object',     example: 'I am not eating rice.', exampleExplain: 'am not + eating' },
                { type: 'Interrogative', formula: 'Is/Am/Are + Subject + V-ing + Object?',           example: 'Are you eating rice?', exampleExplain: 'Are + you + eating' },
                { type: 'WH-Question',   formula: 'WH + is/am/are + Subject + V-ing + ?',            example: 'What are you eating?', exampleExplain: 'What + are + you + eating' }
              ],
              examples: {
                simple: [
                  { en: 'I am eating rice now.', hi: 'मैं अभी चावल खा रहा हूँ।', note: 'I + am + eating' },
                  { en: 'She is reading a book.', hi: 'वह किताब पढ़ रही है।', note: 'She + is + reading' },
                  { en: 'They are playing football.', hi: 'वे फुटबॉल खेल रहे हैं।', note: 'They + are + playing' },
                  { en: 'It is raining outside.', hi: 'बाहर बारिश हो रही है।', note: 'It + is + raining' }
                ],
                negative: [
                  { en: 'I am not eating rice.', hi: 'मैं चावल नहीं खा रहा।', note: 'am not' },
                  { en: 'She is not reading a book.', hi: 'वह किताब नहीं पढ़ रही।', note: 'is not' },
                  { en: 'They are not playing football.', hi: 'वे फुटबॉल नहीं खेल रहे।', note: 'are not' },
                  { en: 'It is not raining.', hi: 'बारिश नहीं हो रही।', note: 'is not' }
                ],
                wh: [
                  { en: 'What are you eating?', hi: 'तुम क्या खा रहे हो?', note: 'What + are + you' },
                  { en: 'Where is she going?', hi: 'वह कहाँ जा रही है?', note: 'Where + is + she' },
                  { en: 'Why are they playing?', hi: 'वे क्यों खेल रहे हैं?', note: 'Why + are + they' },
                  { en: 'When are you coming?', hi: 'तुम कब आ रहे हो?', note: 'When + are + you' }
                ]
              },
              practice: {
                basic: [
                  { type: 'mcq', q: 'I ___ eating rice now.', options: ['am', 'is', 'are', 'was'], answer: 'am' },
                  { type: 'mcq', q: 'She ___ reading a book.', options: ['am', 'is', 'are', 'were'], answer: 'is' },
                  { type: 'mcq', q: 'They ___ playing football.', options: ['am', 'is', 'are', 'was'], answer: 'are' },
                  { type: 'mcq', q: 'It ___ raining outside.', options: ['am', 'is', 'are', 'were'], answer: 'is' },
                  { type: 'mcq', q: 'What ___ you doing?', options: ['am', 'is', 'are', 'was'], answer: 'are' },
                  { type: 'mcq', q: 'Look! The baby ___ crying.', options: ['am', 'is', 'are', 'was'], answer: 'is' },
                  { type: 'mcq', q: 'We ___ going to market.', options: ['am', 'is', 'are', 'was'], answer: 'are' },
                  { type: 'mcq', q: 'She is not ___ a book.', options: ['read', 'reads', 'reading', 'readed'], answer: 'reading' },
                  { type: 'mcq', q: '___ you watching TV?', options: ['Am', 'Is', 'Are', 'Was'], answer: 'Are' },
                  { type: 'mcq', q: 'Where ___ she going?', options: ['am', 'is', 'are', 'was'], answer: 'is' },
                  { type: 'mcq', q: 'They are ___ cricket.', options: ['play', 'plays', 'playing', 'played'], answer: 'playing' },
                  { type: 'mcq', q: 'I am not ___ tea.', options: ['drink', 'drinks', 'drinking', 'drank'], answer: 'drinking' },
                  { type: 'mcq', q: 'The children ___ playing.', options: ['am', 'is', 'are', 'was'], answer: 'are' },
                  { type: 'mcq', q: 'Why ___ you crying?', options: ['am', 'is', 'are', 'was'], answer: 'are' },
                  { type: 'mcq', q: 'He ___ writing a letter.', options: ['am', 'is', 'are', 'were'], answer: 'is' },
                  { type: 'mcq', q: 'Listen! Someone ___ singing.', options: ['am', 'is', 'are', 'was'], answer: 'is' },
                  { type: 'mcq', q: 'It is ___ heavily.', options: ['rain', 'rains', 'raining', 'rained'], answer: 'raining' },
                  { type: 'mcq', q: 'We are not ___ TV.', options: ['watch', 'watches', 'watching', 'watched'], answer: 'watching' },
                  { type: 'mcq', q: 'What ___ she cooking?', options: ['am', 'is', 'are', 'was'], answer: 'is' },
                  { type: 'mcq', q: 'The dog ___ barking.', options: ['am', 'is', 'are', 'were'], answer: 'is' }
                ],
                hard: [
                  { hindi: 'मैं अभी चावल खा रहा हूँ।', english: 'I am eating rice now.', words: ['am', 'I', 'eating', 'rice', 'now', 'is', 'eat', 'and'] },
                  { hindi: 'वह किताब पढ़ रही है।', english: 'She is reading a book.', words: ['is', 'She', 'reading', 'book', 'a', 'am', 'read', 'and'] },
                  { hindi: 'वे फुटबॉल खेल रहे हैं।', english: 'They are playing football.', words: ['are', 'They', 'playing', 'football', 'is', 'play', 'and', 'am'] },
                  { hindi: 'बाहर बारिश हो रही है।', english: 'It is raining outside.', words: ['is', 'It', 'raining', 'outside', 'am', 'rain', 'and', 'are'] },
                  { hindi: 'मैं चावल नहीं खा रहा।', english: 'I am not eating rice.', words: ['am', 'I', 'not', 'eating', 'rice', 'is', 'are', 'and'] },
                  { hindi: 'वह किताब नहीं पढ़ रही।', english: 'She is not reading a book.', words: ['is', 'She', 'not', 'reading', 'book', 'a', 'am', 'and'] },
                  { hindi: 'वे फुटबॉल नहीं खेल रहे।', english: 'They are not playing football.', words: ['are', 'They', 'not', 'playing', 'football', 'is', 'am', 'and'] },
                  { hindi: 'तुम क्या खा रहे हो?', english: 'What are you eating?', words: ['What', 'are', 'you', 'eating', 'is', 'am', 'and', 'I'] }
                ],
                advance: [
                  { english: 'I am eating rice now.', hindi: 'मैं अभी चावल खा रहा हूँ।', words: ['मैं', 'अभी', 'चावल', 'खा', 'रहा', 'हूँ', 'और', 'था'] },
                  { english: 'She is reading a book.', hindi: 'वह किताब पढ़ रही है।', words: ['वह', 'किताब', 'पढ़', 'रही', 'है', 'और', 'था', 'यह'] },
                  { english: 'They are playing football.', hindi: 'वे फुटबॉल खेल रहे हैं।', words: ['वे', 'फुटबॉल', 'खेल', 'रहे', 'हैं', 'और', 'था', 'यह'] },
                  { english: 'It is raining outside.', hindi: 'बाहर बारिश हो रही है।', words: ['बाहर', 'बारिश', 'हो', 'रही', 'है', 'और', 'था', 'यह'] },
                  { english: 'I am not eating rice.', hindi: 'मैं चावल नहीं खा रहा।', words: ['मैं', 'चावल', 'नहीं', 'खा', 'रहा', 'हूँ', 'और', 'था'] },
                  { english: 'She is not reading a book.', hindi: 'वह किताब नहीं पढ़ रही।', words: ['वह', 'किताब', 'नहीं', 'पढ़', 'रही', 'है', 'और', 'था'] },
                  { english: 'They are not playing football.', hindi: 'वे फुटबॉल नहीं खेल रहे।', words: ['वे', 'फुटबॉल', 'नहीं', 'खेल', 'रहे', 'हैं', 'और', 'था'] },
                  { english: 'What are you eating?', hindi: 'तुम क्या खा रहे हो?', words: ['तुम', 'क्या', 'खा', 'रहे', 'हो', 'और', 'था', 'यह'] }
                ]
              }
            },

            // ───── PRESENT PERFECT ─────
            {
              id: 'present-perfect',
              title: 'Present Perfect',
              icon: '3️⃣',
              intro: 'काम पूरा हो चुका है (अभी-अभी)',
              recognition: 'जब काम अभी-अभी पूरा हुआ या जिसका असर अभी भी है। Time words: just, already, yet, ever, never, since, for, recently.',
              definition: 'Present Perfect Tense वह tense है जो बताता है कि कोई काम अभी-अभी पूरा हुआ है, या उसका असर अभी भी मौजूद है। जैसे: "I have eaten" — मैंने खाना खा लिया है, और अब मुझे भूख नहीं है।',
              usage: 'जो काम अभी-अभी पूरा हुआ (I have just finished), जीवन के अनुभव (I have visited London), जो काम अभी तक नहीं हुआ (I have not seen him yet), जो past में शुरू होकर अभी तक चल रहा है (I have lived here for 5 years) — इनमें Present Perfect use होता है।',
              rule: 'Subject + has/have + V3 (Past Participle) + Object',
              ruleExplain: 'has/have = Helping Verb (I/We/You/They → have, He/She/It → has) | V3 = Verb का third form (eat → eaten, go → gone)',
              structure: [
                { type: 'Simple',        formula: 'Subject + has/have + V3 + Object',         example: 'I have eaten rice.', exampleExplain: 'I + have + eaten (V3)' },
                { type: 'Negative',      formula: 'Subject + has/have + not + V3 + Object',   example: 'I have not eaten rice.', exampleExplain: 'have not + eaten' },
                { type: 'Interrogative', formula: 'Has/Have + Subject + V3 + Object?',         example: 'Have you eaten rice?', exampleExplain: 'Have + you + eaten' },
                { type: 'WH-Question',   formula: 'WH + has/have + Subject + V3 + ?',          example: 'What have you eaten?', exampleExplain: 'What + have + you + eaten' }
              ],
              examples: {
                simple: [
                  { en: 'I have eaten my lunch.', hi: 'मैंने दोपहर का खाना खा लिया।', note: 'have + eaten' },
                  { en: 'She has finished her work.', hi: 'उसने अपना काम पूरा कर लिया।', note: 'has + finished' },
                  { en: 'They have gone to Delhi.', hi: 'वे दिल्ली गए हैं।', note: 'have + gone' },
                  { en: 'I have never seen a lion.', hi: 'मैंने कभी शेर नहीं देखा।', note: 'have + never + seen' }
                ],
                negative: [
                  { en: 'I have not eaten my lunch.', hi: 'मैंने खाना नहीं खाया।', note: 'have not' },
                  { en: 'She has not finished her work.', hi: 'उसने काम पूरा नहीं किया।', note: 'has not' },
                  { en: 'They have not gone to Delhi.', hi: 'वे दिल्ली नहीं गए।', note: 'have not' },
                  { en: 'I have not seen a lion.', hi: 'मैंने शेर नहीं देखा।', note: 'have not' }
                ],
                wh: [
                  { en: 'What have you eaten?', hi: 'तुमने क्या खाया?', note: 'What + have + you' },
                  { en: 'Where has she gone?', hi: 'वह कहाँ गई है?', note: 'Where + has + she' },
                  { en: 'Why have they left?', hi: 'वे क्यों गए हैं?', note: 'Why + have + they' },
                  { en: 'How long have you lived here?', hi: 'तुम यहाँ कब से रहते हो?', note: 'How long + have + you' }
                ]
              },
              practice: {
                basic: [
                  { type: 'mcq', q: 'I ___ eaten my lunch.', options: ['has', 'have', 'had', 'having'], answer: 'have' },
                  { type: 'mcq', q: 'She ___ finished her work.', options: ['has', 'have', 'had', 'having'], answer: 'has' },
                  { type: 'mcq', q: 'They ___ gone to Delhi.', options: ['has', 'have', 'had', 'having'], answer: 'have' },
                  { type: 'mcq', q: 'I have never ___ a lion.', options: ['see', 'saw', 'seen', 'seeing'], answer: 'seen' },
                  { type: 'mcq', q: '___ you finished your work?', options: ['Has', 'Have', 'Had', 'Having'], answer: 'Have' },
                  { type: 'mcq', q: 'He ___ just arrived.', options: ['has', 'have', 'had', 'having'], answer: 'has' },
                  { type: 'mcq', q: 'I have not ___ him yet.', options: ['meet', 'met', 'meets', 'meeting'], answer: 'met' },
                  { type: 'mcq', q: 'She has ___ here since 2020.', options: ['live', 'lives', 'lived', 'living'], answer: 'lived' },
                  { type: 'mcq', q: 'We have ___ this movie before.', options: ['see', 'saw', 'seen', 'seeing'], answer: 'seen' },
                  { type: 'mcq', q: 'Where ___ you been?', options: ['has', 'have', 'had', 'having'], answer: 'have' },
                  { type: 'mcq', q: 'They have not ___ yet.', options: ['come', 'came', 'coming', 'comes'], answer: 'come' },
                  { type: 'mcq', q: 'I have ___ my homework.', options: ['do', 'did', 'done', 'doing'], answer: 'done' },
                  { type: 'mcq', q: 'She has ___ a new car.', options: ['buy', 'bought', 'buying', 'buys'], answer: 'bought' },
                  { type: 'mcq', q: 'Have you ever ___ to London?', options: ['be', 'been', 'was', 'were'], answer: 'been' },
                  { type: 'mcq', q: 'He has ___ his keys.', options: ['lose', 'lost', 'losing', 'loses'], answer: 'lost' },
                  { type: 'mcq', q: 'I have ___ in Delhi for 5 years.', options: ['live', 'lives', 'lived', 'living'], answer: 'lived' },
                  { type: 'mcq', q: 'What ___ you done?', options: ['has', 'have', 'had', 'having'], answer: 'have' },
                  { type: 'mcq', q: 'She has ___ her promise.', options: ['break', 'broke', 'broken', 'breaking'], answer: 'broken' },
                  { type: 'mcq', q: 'We have ___ each other for years.', options: ['know', 'knew', 'known', 'knowing'], answer: 'known' },
                  { type: 'mcq', q: 'How long ___ she been here?', options: ['has', 'have', 'had', 'having'], answer: 'has' }
                ],
                hard: [
                  { hindi: 'मैंने दोपहर का खाना खा लिया।', english: 'I have eaten my lunch.', words: ['have', 'I', 'eaten', 'my', 'lunch', 'has', 'eat', 'and'] },
                  { hindi: 'उसने अपना काम पूरा कर लिया।', english: 'She has finished her work.', words: ['has', 'She', 'finished', 'her', 'work', 'have', 'finish', 'and'] },
                  { hindi: 'वे दिल्ली गए हैं।', english: 'They have gone to Delhi.', words: ['have', 'They', 'gone', 'to', 'Delhi', 'has', 'go', 'and'] },
                  { hindi: 'मैंने कभी शेर नहीं देखा।', english: 'I have never seen a lion.', words: ['have', 'I', 'never', 'seen', 'lion', 'a', 'has', 'and'] },
                  { hindi: 'मैंने खाना नहीं खाया।', english: 'I have not eaten my lunch.', words: ['have', 'I', 'not', 'eaten', 'my', 'lunch', 'has', 'and'] },
                  { hindi: 'उसने काम पूरा नहीं किया।', english: 'She has not finished her work.', words: ['has', 'She', 'not', 'finished', 'her', 'work', 'have', 'and'] },
                  { hindi: 'तुमने क्या खाया?', english: 'What have you eaten?', words: ['What', 'have', 'you', 'eaten', 'has', 'and', 'I', 'is'] },
                  { hindi: 'वह कहाँ गई है?', english: 'Where has she gone?', words: ['Where', 'has', 'she', 'gone', 'have', 'and', 'I', 'is'] }
                ],
                advance: [
                  { english: 'I have eaten my lunch.', hindi: 'मैंने दोपहर का खाना खा लिया।', words: ['मैंने', 'दोपहर', 'का', 'खाना', 'खा', 'लिया', 'और', 'था'] },
                  { english: 'She has finished her work.', hindi: 'उसने अपना काम पूरा कर लिया।', words: ['उसने', 'अपना', 'काम', 'पूरा', 'कर', 'लिया', 'और', 'था'] },
                  { english: 'They have gone to Delhi.', hindi: 'वे दिल्ली गए हैं।', words: ['वे', 'दिल्ली', 'गए', 'हैं', 'और', 'था', 'यह', 'मैं'] },
                  { english: 'I have never seen a lion.', hindi: 'मैंने कभी शेर नहीं देखा।', words: ['मैंने', 'कभी', 'शेर', 'नहीं', 'देखा', 'और', 'था', 'यह'] },
                  { english: 'I have not eaten my lunch.', hindi: 'मैंने खाना नहीं खाया।', words: ['मैंने', 'खाना', 'नहीं', 'खाया', 'और', 'था', 'यह', 'वह'] },
                  { english: 'She has not finished her work.', hindi: 'उसने काम पूरा नहीं किया।', words: ['उसने', 'काम', 'पूरा', 'नहीं', 'किया', 'और', 'था', 'यह'] },
                  { english: 'What have you eaten?', hindi: 'तुमने क्या खाया?', words: ['तुमने', 'क्या', 'खाया', 'और', 'था', 'यह', 'वह', 'मैं'] },
                  { english: 'Where has she gone?', hindi: 'वह कहाँ गई है?', words: ['वह', 'कहाँ', 'गई', 'है', 'और', 'था', 'यह', 'मैं'] }
                ]
              }
            },

            // ───── PRESENT PERFECT CONTINUOUS ─────
            {
              id: 'present-perfect-continuous',
              title: 'Present Perfect Continuous',
              icon: '4️⃣',
              intro: 'काम पहले से चल रहा है और अभी भी चल रहा है',
              recognition: 'जब काम past में शुरू हुआ और अभी भी जारी है। Time words: since (point of time), for (period of time), how long.',
              definition: 'Present Perfect Continuous Tense वह tense है जो बताता है कि कोई काम past में शुरू हुआ, और अभी भी चल रहा है। जैसे: "I have been studying for 2 hours" — मैं 2 घंटे से पढ़ रहा हूँ, और अभी भी पढ़ रहा हूँ।',
              usage: 'जो काम past में शुरू होकर अभी भी जारी है (I have been waiting for you), जिसकी अवधि बतानी हो (She has been working since morning) — इनमें Present Perfect Continuous use होता है।',
              rule: 'Subject + has/have been + V-ing + since/for + time',
              ruleExplain: 'has/have been = Helping Verb | V-ing = Verb + ing | since = point of time (since morning, since 2020) | for = period of time (for 2 hours)',
              structure: [
                { type: 'Simple',        formula: 'Subject + has/have been + V-ing + since/for', example: 'I have been eating for 2 hours.', exampleExplain: 'have been + eating + for 2 hours' },
                { type: 'Negative',      formula: 'Subject + has/have not been + V-ing',         example: 'I have not been eating.', exampleExplain: 'have not been + eating' },
                { type: 'Interrogative', formula: 'Has/Have + Subject + been + V-ing?',           example: 'Have you been eating?', exampleExplain: 'Have + you + been + eating' },
                { type: 'WH-Question',   formula: 'WH + has/have + Subject + been + V-ing?',      example: 'How long have you been eating?', exampleExplain: 'How long + have + you + been + eating' }
              ],
              examples: {
                simple: [
                  { en: 'I have been studying for 2 hours.', hi: 'मैं 2 घंटे से पढ़ रहा हूँ।', note: 'have been + studying' },
                  { en: 'She has been working since morning.', hi: 'वह सुबह से काम कर रही है।', note: 'has been + working' },
                  { en: 'It has been raining since last night.', hi: 'कल रात से बारिश हो रही है।', note: 'has been + raining' },
                  { en: 'They have been playing since 4 pm.', hi: 'वे 4 बजे से खेल रहे हैं।', note: 'have been + playing' }
                ],
                negative: [
                  { en: 'I have not been studying.', hi: 'मैं पढ़ नहीं रहा।', note: 'have not been' },
                  { en: 'She has not been working.', hi: 'वह काम नहीं कर रही।', note: 'has not been' },
                  { en: 'It has not been raining.', hi: 'बारिश नहीं हो रही।', note: 'has not been' },
                  { en: 'They have not been playing.', hi: 'वे नहीं खेल रहे।', note: 'have not been' }
                ],
                wh: [
                  { en: 'How long have you been studying?', hi: 'तुम कब से पढ़ रहे हो?', note: 'How long + have' },
                  { en: 'Why has she been crying?', hi: 'वह क्यों रो रही है?', note: 'Why + has' },
                  { en: 'Since when have you been waiting?', hi: 'तुम कब से इंतज़ार कर रहे हो?', note: 'Since when + have' },
                  { en: 'What have you been doing?', hi: 'तुम क्या कर रहे हो?', note: 'What + have' }
                ]
              },
              practice: {
                basic: [
                  { type: 'mcq', q: 'I ___ studying for 2 hours.', options: ['has been', 'have been', 'had been', 'am'], answer: 'have been' },
                  { type: 'mcq', q: 'She ___ working since morning.', options: ['has been', 'have been', 'had been', 'is'], answer: 'has been' },
                  { type: 'mcq', q: 'It ___ raining since last night.', options: ['has been', 'have been', 'had been', 'was'], answer: 'has been' },
                  { type: 'mcq', q: 'They have been ___ since 4 pm.', options: ['play', 'plays', 'playing', 'played'], answer: 'playing' },
                  { type: 'mcq', q: 'How long ___ you been studying?', options: ['has', 'have', 'had', 'having'], answer: 'have' },
                  { type: 'mcq', q: 'She has been ___ for 3 hours.', options: ['work', 'works', 'working', 'worked'], answer: 'working' },
                  { type: 'mcq', q: 'I have not been ___ well.', options: ['feel', 'feels', 'feeling', 'felt'], answer: 'feeling' },
                  { type: 'mcq', q: 'Since when ___ he been waiting?', options: ['has', 'have', 'had', 'having'], answer: 'has' },
                  { type: 'mcq', q: 'They have been ___ cricket.', options: ['play', 'plays', 'playing', 'played'], answer: 'playing' },
                  { type: 'mcq', q: 'We have been ___ here since 2018.', options: ['live', 'lives', 'living', 'lived'], answer: 'living' },
                  { type: 'mcq', q: 'Why ___ she been crying?', options: ['has', 'have', 'had', 'having'], answer: 'has' },
                  { type: 'mcq', q: 'It has been ___ all day.', options: ['rain', 'rains', 'raining', 'rained'], answer: 'raining' },
                  { type: 'mcq', q: 'How long have you been ___ English?', options: ['learn', 'learns', 'learning', 'learned'], answer: 'learning' },
                  { type: 'mcq', q: 'He has not been ___ anything.', options: ['do', 'does', 'doing', 'did'], answer: 'doing' },
                  { type: 'mcq', q: 'She ___ been teaching since 2010.', options: ['has', 'have', 'had', 'having'], answer: 'has' },
                  { type: 'mcq', q: 'The children have been ___ for hours.', options: ['play', 'plays', 'playing', 'played'], answer: 'playing' },
                  { type: 'mcq', q: 'I have been ___ for you.', options: ['wait', 'waits', 'waiting', 'waited'], answer: 'waiting' },
                  { type: 'mcq', q: 'What ___ you been doing?', options: ['has', 'have', 'had', 'having'], answer: 'have' },
                  { type: 'mcq', q: 'She has been ___ since morning.', options: ['cook', 'cooks', 'cooking', 'cooked'], answer: 'cooking' },
                  { type: 'mcq', q: 'They have been ___ since 5 pm.', options: ['study', 'studies', 'studying', 'studied'], answer: 'studying' }
                ],
                hard: [
                  { hindi: 'मैं 2 घंटे से पढ़ रहा हूँ।', english: 'I have been studying for 2 hours.', words: ['have', 'I', 'been', 'studying', 'for', '2', 'hours', 'has'] },
                  { hindi: 'वह सुबह से काम कर रही है।', english: 'She has been working since morning.', words: ['has', 'She', 'been', 'working', 'since', 'morning', 'have', 'and'] },
                  { hindi: 'कल रात से बारिश हो रही है।', english: 'It has been raining since last night.', words: ['has', 'It', 'been', 'raining', 'since', 'last', 'night', 'have'] },
                  { hindi: 'वे 4 बजे से खेल रहे हैं।', english: 'They have been playing since 4 pm.', words: ['have', 'They', 'been', 'playing', 'since', '4', 'pm', 'has'] },
                  { hindi: 'मैं पढ़ नहीं रहा।', english: 'I have not been studying.', words: ['have', 'I', 'not', 'been', 'studying', 'has', 'and', 'is'] },
                  { hindi: 'वह काम नहीं कर रही।', english: 'She has not been working.', words: ['has', 'She', 'not', 'been', 'working', 'have', 'and', 'is'] },
                  { hindi: 'तुम कब से पढ़ रहे हो?', english: 'How long have you been studying?', words: ['How', 'long', 'have', 'you', 'been', 'studying', 'has', 'and'] },
                  { hindi: 'तुम क्या कर रहे हो?', english: 'What have you been doing?', words: ['What', 'have', 'you', 'been', 'doing', 'has', 'and', 'is'] }
                ],
                advance: [
                  { english: 'I have been studying for 2 hours.', hindi: 'मैं 2 घंटे से पढ़ रहा हूँ।', words: ['मैं', '2', 'घंटे', 'से', 'पढ़', 'रहा', 'हूँ', 'और'] },
                  { english: 'She has been working since morning.', hindi: 'वह सुबह से काम कर रही है।', words: ['वह', 'सुबह', 'से', 'काम', 'कर', 'रही', 'है', 'और'] },
                  { english: 'It has been raining since last night.', hindi: 'कल रात से बारिश हो रही है।', words: ['कल', 'रात', 'से', 'बारिश', 'हो', 'रही', 'है', 'और'] },
                  { english: 'They have been playing since 4 pm.', hindi: 'वे 4 बजे से खेल रहे हैं।', words: ['वे', '4', 'बजे', 'से', 'खेल', 'रहे', 'हैं', 'और'] },
                  { english: 'I have not been studying.', hindi: 'मैं पढ़ नहीं रहा।', words: ['मैं', 'पढ़', 'नहीं', 'रहा', 'हूँ', 'और', 'था', 'यह'] },
                  { english: 'She has not been working.', hindi: 'वह काम नहीं कर रही।', words: ['वह', 'काम', 'नहीं', 'कर', 'रही', 'है', 'और', 'था'] },
                  { english: 'How long have you been studying?', hindi: 'तुम कब से पढ़ रहे हो?', words: ['तुम', 'कब', 'से', 'पढ़', 'रहे', 'हो', 'और', 'था'] },
                  { english: 'What have you been doing?', hindi: 'तुम क्या कर रहे हो?', words: ['तुम', 'क्या', 'कर', 'रहे', 'हो', 'और', 'था', 'यह'] }
                ]
              }
            }
          ]
        },

        // ═══ PAST ═══
        {
          id: 'past',
          title: 'Past Tense',
          icon: '🔵',
          intro: 'भूतकाल — पहले हो चुका है',
          subtopics: [
            {
              id: 'past-simple',
              title: 'Past Simple / Indefinite',
              icon: '1️⃣',
              intro: 'पहले हो चुका काम',
              recognition: 'जब काम past में एक खास समय पर पूरा हो गया। Time words: yesterday, last week, last night, in 2010, ago.',
              definition: 'Past Simple Tense वह tense है जो बताता है कि कोई काम past में किसी खास समय पर हुआ और पूरा हो गया। जैसे: "I ate rice yesterday" — कल मैंने चावल खाया (अब खत्म)।',
              usage: 'जो काम past में किसी खास समय पर हुआ और पूरा हो गया (I visited Delhi last year), past की आदत (She always came late) — इनमें Past Simple use होता है।',
              rule: 'Subject + V2 (Past form) + Object',
              ruleExplain: 'V2 = Verb का second form (eat → ate, go → went, play → played) | Regular verbs में -ed (play → played) | Irregular बदल जाते हैं',
              structure: [
                { type: 'Simple',        formula: 'Subject + V2 + Object',               example: 'I ate rice.', exampleExplain: 'I + ate (V2)' },
                { type: 'Negative',      formula: 'Subject + did not + V1 + Object',      example: 'I did not eat rice.', exampleExplain: 'did not + eat (V1)' },
                { type: 'Interrogative', formula: 'Did + Subject + V1 + Object?',          example: 'Did you eat rice?', exampleExplain: 'Did + you + eat' },
                { type: 'WH-Question',   formula: 'WH + did + Subject + V1 + ?',           example: 'What did you eat?', exampleExplain: 'What + did + you + eat' }
              ],
              examples: {
                simple: [
                  { en: 'I ate rice yesterday.', hi: 'मैंने कल चावल खाया।', note: 'I + ate (V2)' },
                  { en: 'She went to school.', hi: 'वह स्कूल गई।', note: 'She + went (V2)' },
                  { en: 'They played football.', hi: 'उन्होंने फुटबॉल खेला।', note: 'They + played' },
                  { en: 'It rained heavily last night.', hi: 'कल रात तेज़ बारिश हुई।', note: 'It + rained' }
                ],
                negative: [
                  { en: 'I did not eat rice.', hi: 'मैंने चावल नहीं खाया।', note: 'did not + eat' },
                  { en: 'She did not go to school.', hi: 'वह स्कूल नहीं गई।', note: 'did not + go' },
                  { en: 'They did not play football.', hi: 'उन्होंने फुटबॉल नहीं खेला।', note: 'did not + play' },
                  { en: 'It did not rain yesterday.', hi: 'कल बारिश नहीं हुई।', note: 'did not + rain' }
                ],
                wh: [
                  { en: 'What did you eat?', hi: 'तुमने क्या खाया?', note: 'What + did + you' },
                  { en: 'Where did she go?', hi: 'वह कहाँ गई?', note: 'Where + did + she' },
                  { en: 'When did they play?', hi: 'वे कब खेले?', note: 'When + did + they' },
                  { en: 'Why did it rain?', hi: 'बारिश क्यों हुई?', note: 'Why + did + it' }
                ]
              },
              practice: {
                basic: [
                  { type: 'mcq', q: 'I ___ rice yesterday.', options: ['eat', 'eats', 'ate', 'eaten'], answer: 'ate' },
                  { type: 'mcq', q: 'She ___ to school yesterday.', options: ['go', 'goes', 'went', 'gone'], answer: 'went' },
                  { type: 'mcq', q: 'They ___ football last Sunday.', options: ['play', 'plays', 'played', 'playing'], answer: 'played' },
                  { type: 'mcq', q: 'I did not ___ rice.', options: ['eat', 'ate', 'eaten', 'eating'], answer: 'eat' },
                  { type: 'mcq', q: '___ you go to school?', options: ['Do', 'Does', 'Did', 'Are'], answer: 'Did' },
                  { type: 'mcq', q: 'She ___ a letter yesterday.', options: ['write', 'writes', 'wrote', 'written'], answer: 'wrote' },
                  { type: 'mcq', q: 'We ___ a movie last night.', options: ['watch', 'watches', 'watched', 'watching'], answer: 'watched' },
                  { type: 'mcq', q: 'He did not ___ the truth.', options: ['tell', 'told', 'tells', 'telling'], answer: 'tell' },
                  { type: 'mcq', q: 'They ___ to Delhi last week.', options: ['go', 'goes', 'went', 'gone'], answer: 'went' },
                  { type: 'mcq', q: 'Where ___ you go?', options: ['do', 'does', 'did', 'are'], answer: 'did' },
                  { type: 'mcq', q: 'I ___ him yesterday.', options: ['meet', 'meets', 'met', 'meeting'], answer: 'met' },
                  { type: 'mcq', q: 'She ___ a beautiful song.', options: ['sing', 'sings', 'sang', 'sung'], answer: 'sang' },
                  { type: 'mcq', q: 'We ___ dinner at 8 pm.', options: ['have', 'has', 'had', 'having'], answer: 'had' },
                  { type: 'mcq', q: 'He ___ his keys yesterday.', options: ['lose', 'loses', 'lost', 'losing'], answer: 'lost' },
                  { type: 'mcq', q: 'What ___ she cook?', options: ['do', 'does', 'did', 'are'], answer: 'did' },
                  { type: 'mcq', q: 'They ___ a new car last month.', options: ['buy', 'buys', 'bought', 'buying'], answer: 'bought' },
                  { type: 'mcq', q: 'It ___ raining last night.', options: ['stop', 'stops', 'stopped', 'stopping'], answer: 'stopped' },
                  { type: 'mcq', q: 'I ___ my homework.', options: ['do', 'does', 'did', 'done'], answer: 'did' },
                  { type: 'mcq', q: 'She ___ me a gift.', options: ['give', 'gives', 'gave', 'given'], answer: 'gave' },
                  { type: 'mcq', q: 'We ___ to the beach last summer.', options: ['go', 'goes', 'went', 'gone'], answer: 'went' }
                ],
                hard: [
                  { hindi: 'मैंने कल चावल खाया।', english: 'I ate rice yesterday.', words: ['ate', 'I', 'rice', 'yesterday', 'eat', 'today', 'and', 'is'] },
                  { hindi: 'वह स्कूल गई।', english: 'She went to school.', words: ['went', 'She', 'to', 'school', 'go', 'He', 'and', 'is'] },
                  { hindi: 'उन्होंने फुटबॉल खेला।', english: 'They played football.', words: ['played', 'They', 'football', 'play', 'We', 'and', 'is', 'cricket'] },
                  { hindi: 'मैंने चावल नहीं खाया।', english: 'I did not eat rice.', words: ['did', 'I', 'not', 'eat', 'rice', 'do', 'and', 'is'] },
                  { hindi: 'वह स्कूल नहीं गई।', english: 'She did not go to school.', words: ['did', 'She', 'not', 'go', 'school', 'to', 'do', 'and'] },
                  { hindi: 'तुमने क्या खाया?', english: 'What did you eat?', words: ['What', 'did', 'you', 'eat', 'do', 'does', 'and', 'is'] },
                  { hindi: 'वह कहाँ गई?', english: 'Where did she go?', words: ['Where', 'did', 'she', 'go', 'do', 'does', 'and', 'is'] },
                  { hindi: 'मैंने उसे कल देखा।', english: 'I saw him yesterday.', words: ['saw', 'I', 'him', 'yesterday', 'see', 'her', 'and', 'is'] }
                ],
                advance: [
                  { english: 'I ate rice yesterday.', hindi: 'मैंने कल चावल खाया।', words: ['मैंने', 'कल', 'चावल', 'खाया', 'और', 'था', 'यह', 'वह'] },
                  { english: 'She went to school.', hindi: 'वह स्कूल गई।', words: ['वह', 'स्कूल', 'गई', 'और', 'था', 'यह', 'मैं', 'है'] },
                  { english: 'They played football.', hindi: 'उन्होंने फुटबॉल खेला।', words: ['उन्होंने', 'फुटबॉल', 'खेला', 'और', 'था', 'यह', 'वह', 'मैं'] },
                  { english: 'I did not eat rice.', hindi: 'मैंने चावल नहीं खाया।', words: ['मैंने', 'चावल', 'नहीं', 'खाया', 'और', 'था', 'यह', 'वह'] },
                  { english: 'She did not go to school.', hindi: 'वह स्कूल नहीं गई।', words: ['वह', 'स्कूल', 'नहीं', 'गई', 'और', 'था', 'यह', 'मैं'] },
                  { english: 'What did you eat?', hindi: 'तुमने क्या खाया?', words: ['तुमने', 'क्या', 'खाया', 'और', 'था', 'यह', 'वह', 'मैं'] },
                  { english: 'Where did she go?', hindi: 'वह कहाँ गई?', words: ['वह', 'कहाँ', 'गई', 'और', 'था', 'यह', 'मैं', 'है'] },
                  { english: 'I saw him yesterday.', hindi: 'मैंने उसे कल देखा।', words: ['मैंने', 'उसे', 'कल', 'देखा', 'और', 'था', 'यह', 'वह'] }
                ]
              }
            },
            {
              id: 'past-continuous',
              title: 'Past Continuous',
              icon: '2️⃣',
              intro: 'पहले चल रहा था',
              recognition: 'जब काम past में किसी खास समय चल रहा था। Time words: at 5 pm yesterday, while, when, all day.',
              definition: 'Past Continuous Tense वह tense है जो बताता है कि कोई काम past में किसी खास समय पर चल रहा था (जारी था)। जैसे: "I was eating rice at 8 pm" — 8 बजे मैं चावल खा रहा था।',
              usage: 'जो काम past में किसी खास समय चल रहा था (I was reading at 9 pm), जब दो काम एक साथ past में चल रहे थे (I was cooking while she was reading) — इनमें Past Continuous use होता है।',
              rule: 'Subject + was/were + V-ing + Object',
              ruleExplain: 'was/were = Helping Verb (I/He/She/It → was, We/You/They → were) | V-ing = Verb + ing',
              structure: [
                { type: 'Simple',        formula: 'Subject + was/were + V-ing + Object',         example: 'I was eating rice.', exampleExplain: 'I + was + eating' },
                { type: 'Negative',      formula: 'Subject + was/were + not + V-ing',             example: 'I was not eating rice.', exampleExplain: 'was not + eating' },
                { type: 'Interrogative', formula: 'Was/Were + Subject + V-ing?',                   example: 'Were you eating rice?', exampleExplain: 'Were + you + eating' },
                { type: 'WH-Question',   formula: 'WH + was/were + Subject + V-ing?',              example: 'What were you eating?', exampleExplain: 'What + were + you + eating' }
              ],
              examples: {
                simple: [
                  { en: 'I was eating rice at 8 pm.', hi: 'मैं 8 बजे चावल खा रहा था।', note: 'was + eating' },
                  { en: 'She was reading a book.', hi: 'वह किताब पढ़ रही थी।', note: 'was + reading' },
                  { en: 'They were playing cricket.', hi: 'वे क्रिकेट खेल रहे थे।', note: 'were + playing' },
                  { en: 'It was raining all night.', hi: 'पूरी रात बारिश हो रही थी।', note: 'was + raining' }
                ],
                negative: [
                  { en: 'I was not eating rice.', hi: 'मैं चावल नहीं खा रहा था।', note: 'was not' },
                  { en: 'She was not reading.', hi: 'वह नहीं पढ़ रही थी।', note: 'was not' },
                  { en: 'They were not playing.', hi: 'वे नहीं खेल रहे थे।', note: 'were not' },
                  { en: 'It was not raining.', hi: 'बारिश नहीं हो रही थी।', note: 'was not' }
                ],
                wh: [
                  { en: 'What were you eating?', hi: 'तुम क्या खा रहे थे?', note: 'What + were + you' },
                  { en: 'Where was she going?', hi: 'वह कहाँ जा रही थी?', note: 'Where + was + she' },
                  { en: 'Why were they playing?', hi: 'वे क्यों खेल रहे थे?', note: 'Why + were + they' },
                  { en: 'When were you studying?', hi: 'तुम कब पढ़ रहे थे?', note: 'When + were + you' }
                ]
              },
              practice: {
                basic: [
                  { type: 'mcq', q: 'I ___ eating rice at 8 pm.', options: ['am', 'is', 'was', 'were'], answer: 'was' },
                  { type: 'mcq', q: 'She ___ reading a book.', options: ['am', 'is', 'was', 'were'], answer: 'was' },
                  { type: 'mcq', q: 'They ___ playing cricket.', options: ['am', 'is', 'was', 'were'], answer: 'were' },
                  { type: 'mcq', q: 'It was ___ all night.', options: ['rain', 'rains', 'raining', 'rained'], answer: 'raining' },
                  { type: 'mcq', q: 'What ___ you doing?', options: ['was', 'were', 'are', 'is'], answer: 'were' },
                  { type: 'mcq', q: 'We ___ watching TV at 9 pm.', options: ['am', 'is', 'was', 'were'], answer: 'were' },
                  { type: 'mcq', q: 'He was ___ a letter.', options: ['write', 'writes', 'writing', 'wrote'], answer: 'writing' },
                  { type: 'mcq', q: 'I was not ___ to music.', options: ['listen', 'listens', 'listening', 'listened'], answer: 'listening' },
                  { type: 'mcq', q: '___ she singing when you came?', options: ['Was', 'Were', 'Is', 'Are'], answer: 'Was' },
                  { type: 'mcq', q: 'Where ___ they going?', options: ['was', 'were', 'are', 'is'], answer: 'were' },
                  { type: 'mcq', q: 'The children were ___ in the park.', options: ['play', 'plays', 'playing', 'played'], answer: 'playing' },
                  { type: 'mcq', q: 'It ___ raining when I left.', options: ['am', 'is', 'was', 'were'], answer: 'was' },
                  { type: 'mcq', q: 'Why ___ you crying?', options: ['was', 'were', 'are', 'is'], answer: 'were' },
                  { type: 'mcq', q: 'She was ___ dinner.', options: ['cook', 'cooks', 'cooking', 'cooked'], answer: 'cooking' },
                  { type: 'mcq', q: 'They were not ___ attention.', options: ['pay', 'pays', 'paying', 'paid'], answer: 'paying' },
                  { type: 'mcq', q: 'What ___ she reading?', options: ['was', 'were', 'are', 'is'], answer: 'was' },
                  { type: 'mcq', q: 'We were ___ for the bus.', options: ['wait', 'waits', 'waiting', 'waited'], answer: 'waiting' },
                  { type: 'mcq', q: 'He ___ sleeping at 10 pm.', options: ['am', 'is', 'was', 'were'], answer: 'was' },
                  { type: 'mcq', q: 'They were ___ when I called.', options: ['study', 'studies', 'studying', 'studied'], answer: 'studying' },
                  { type: 'mcq', q: '___ you working yesterday?', options: ['Was', 'Were', 'Is', 'Are'], answer: 'Were' }
                ],
                hard: [
                  { hindi: 'मैं 8 बजे चावल खा रहा था।', english: 'I was eating rice at 8 pm.', words: ['was', 'I', 'eating', 'rice', 'at', '8', 'pm', 'were'] },
                  { hindi: 'वह किताब पढ़ रही थी।', english: 'She was reading a book.', words: ['was', 'She', 'reading', 'book', 'a', 'were', 'and', 'is'] },
                  { hindi: 'वे क्रिकेट खेल रहे थे।', english: 'They were playing cricket.', words: ['were', 'They', 'playing', 'cricket', 'was', 'and', 'is', 'play'] },
                  { hindi: 'पूरी रात बारिश हो रही थी।', english: 'It was raining all night.', words: ['was', 'It', 'raining', 'all', 'night', 'were', 'and', 'is'] },
                  { hindi: 'मैं चावल नहीं खा रहा था।', english: 'I was not eating rice.', words: ['was', 'I', 'not', 'eating', 'rice', 'were', 'and', 'is'] },
                  { hindi: 'वह नहीं पढ़ रही थी।', english: 'She was not reading.', words: ['was', 'She', 'not', 'reading', 'were', 'and', 'is', 'a'] },
                  { hindi: 'तुम क्या खा रहे थे?', english: 'What were you eating?', words: ['What', 'were', 'you', 'eating', 'was', 'and', 'is', 'I'] },
                  { hindi: 'वह कहाँ जा रही थी?', english: 'Where was she going?', words: ['Where', 'was', 'she', 'going', 'were', 'and', 'is', 'I'] }
                ],
                advance: [
                  { english: 'I was eating rice at 8 pm.', hindi: 'मैं 8 बजे चावल खा रहा था।', words: ['मैं', '8', 'बजे', 'चावल', 'खा', 'रहा', 'था', 'और'] },
                  { english: 'She was reading a book.', hindi: 'वह किताब पढ़ रही थी।', words: ['वह', 'किताब', 'पढ़', 'रही', 'थी', 'और', 'था', 'यह'] },
                  { english: 'They were playing cricket.', hindi: 'वे क्रिकेट खेल रहे थे।', words: ['वे', 'क्रिकेट', 'खेल', 'रहे', 'थे', 'और', 'था', 'यह'] },
                  { english: 'It was raining all night.', hindi: 'पूरी रात बारिश हो रही थी।', words: ['पूरी', 'रात', 'बारिश', 'हो', 'रही', 'थी', 'और', 'था'] },
                  { english: 'I was not eating rice.', hindi: 'मैं चावल नहीं खा रहा था।', words: ['मैं', 'चावल', 'नहीं', 'खा', 'रहा', 'था', 'और', 'यह'] },
                  { english: 'She was not reading.', hindi: 'वह नहीं पढ़ रही थी।', words: ['वह', 'नहीं', 'पढ़', 'रही', 'थी', 'और', 'था', 'यह'] },
                  { english: 'What were you eating?', hindi: 'तुम क्या खा रहे थे?', words: ['तुम', 'क्या', 'खा', 'रहे', 'थे', 'और', 'था', 'यह'] },
                  { english: 'Where was she going?', hindi: 'वह कहाँ जा रही थी?', words: ['वह', 'कहाँ', 'जा', 'रही', 'थी', 'और', 'था', 'यह'] }
                ]
              }
            },
            {
              id: 'past-perfect',
              title: 'Past Perfect',
              icon: '3️⃣',
              intro: 'पहले ही हो चुका था',
              recognition: 'जब past में काम किसी और past action से पहले पूरा हो चुका था। Time words: before, after, already, by the time.',
              definition: 'Past Perfect Tense वह tense है जो बताता है कि कोई काम past में किसी दूसरे काम से पहले पूरा हो चुका था। जैसे: "I had eaten before he came" — पहले खाना खाया, फिर वह आया।',
              usage: 'जब दो past actions में से पहले वाले को बताना हो (The train had left before I reached) — इसमें Past Perfect use होता है।',
              rule: 'Subject + had + V3 + Object',
              ruleExplain: 'had = Helping Verb (सभी subjects के साथ) | V3 = Verb का third form',
              structure: [
                { type: 'Simple',        formula: 'Subject + had + V3 + Object',              example: 'I had eaten rice.', exampleExplain: 'I + had + eaten' },
                { type: 'Negative',      formula: 'Subject + had not + V3 + Object',           example: 'I had not eaten rice.', exampleExplain: 'had not + eaten' },
                { type: 'Interrogative', formula: 'Had + Subject + V3 + Object?',               example: 'Had you eaten rice?', exampleExplain: 'Had + you + eaten' },
                { type: 'WH-Question',   formula: 'WH + had + Subject + V3?',                   example: 'What had you eaten?', exampleExplain: 'What + had + you + eaten' }
              ],
              examples: {
                simple: [
                  { en: 'I had eaten before he came.', hi: 'मैं खा चुका था उसके आने से पहले।', note: 'had + eaten' },
                  { en: 'She had finished her work.', hi: 'उसने अपना काम पूरा कर लिया था।', note: 'had + finished' },
                  { en: 'The train had left before we reached.', hi: 'हमारे पहुँचने से पहले ट्रेन चली गई थी।', note: 'had + left' },
                  { en: 'They had already gone.', hi: 'वे पहले ही जा चुके थे।', note: 'had + already + gone' }
                ],
                negative: [
                  { en: 'I had not eaten before he came.', hi: 'मैंने उसके आने से पहले नहीं खाया था।', note: 'had not' },
                  { en: 'She had not finished her work.', hi: 'उसने काम पूरा नहीं किया था।', note: 'had not' },
                  { en: 'The train had not left.', hi: 'ट्रेन नहीं गई थी।', note: 'had not' },
                  { en: 'They had not gone.', hi: 'वे नहीं गए थे।', note: 'had not' }
                ],
                wh: [
                  { en: 'What had you eaten?', hi: 'तुमने क्या खाया था?', note: 'What + had + you' },
                  { en: 'Where had she gone?', hi: 'वह कहाँ गई थी?', note: 'Where + had + she' },
                  { en: 'Why had they left?', hi: 'वे क्यों गए थे?', note: 'Why + had + they' },
                  { en: 'When had you finished?', hi: 'तुमने कब खत्म किया था?', note: 'When + had + you' }
                ]
              },
              practice: {
                basic: [
                  { type: 'mcq', q: 'I ___ eaten before he came.', options: ['has', 'have', 'had', 'having'], answer: 'had' },
                  { type: 'mcq', q: 'She ___ finished her work.', options: ['has', 'have', 'had', 'having'], answer: 'had' },
                  { type: 'mcq', q: 'The train had ___ before we reached.', options: ['leave', 'leaves', 'left', 'leaving'], answer: 'left' },
                  { type: 'mcq', q: 'I had not ___ rice.', options: ['eat', 'ate', 'eaten', 'eating'], answer: 'eaten' },
                  { type: 'mcq', q: '___ you eaten before coming?', options: ['Has', 'Have', 'Had', 'Having'], answer: 'Had' },
                  { type: 'mcq', q: 'He had ___ his homework.', options: ['do', 'did', 'done', 'doing'], answer: 'done' },
                  { type: 'mcq', q: 'They had ___ to Delhi.', options: ['go', 'goes', 'went', 'gone'], answer: 'gone' },
                  { type: 'mcq', q: 'She had not ___ me.', options: ['see', 'saw', 'seen', 'seeing'], answer: 'seen' },
                  { type: 'mcq', q: 'We had ___ dinner before 8 pm.', options: ['have', 'has', 'had', 'having'], answer: 'had' },
                  { type: 'mcq', q: 'Why ___ she left?', options: ['has', 'have', 'had', 'having'], answer: 'had' },
                  { type: 'mcq', q: 'I had ___ my keys.', options: ['lose', 'loses', 'lost', 'losing'], answer: 'lost' },
                  { type: 'mcq', q: 'She had ___ the truth.', options: ['tell', 'told', 'tells', 'telling'], answer: 'told' },
                  { type: 'mcq', q: 'They had ___ the match.', options: ['win', 'wins', 'won', 'winning'], answer: 'won' },
                  { type: 'mcq', q: 'What ___ you done?', options: ['has', 'have', 'had', 'having'], answer: 'had' },
                  { type: 'mcq', q: 'It had ___ before we arrived.', options: ['stop', 'stops', 'stopped', 'stopping'], answer: 'stopped' },
                  { type: 'mcq', q: 'I had not ___ him before.', options: ['meet', 'meets', 'met', 'meeting'], answer: 'met' },
                  { type: 'mcq', q: 'Where ___ they gone?', options: ['has', 'have', 'had', 'having'], answer: 'had' },
                  { type: 'mcq', q: 'She had ___ a new dress.', options: ['buy', 'buys', 'bought', 'buying'], answer: 'bought' },
                  { type: 'mcq', q: 'The bus had ___ before I reached.', options: ['leave', 'leaves', 'left', 'leaving'], answer: 'left' },
                  { type: 'mcq', q: 'They had ___ in Delhi for 5 years.', options: ['live', 'lives', 'lived', 'living'], answer: 'lived' }
                ],
                hard: [
                  { hindi: 'मैं खा चुका था उसके आने से पहले।', english: 'I had eaten before he came.', words: ['had', 'I', 'eaten', 'before', 'he', 'came', 'has', 'and'] },
                  { hindi: 'उसने अपना काम पूरा कर लिया था।', english: 'She had finished her work.', words: ['had', 'She', 'finished', 'her', 'work', 'has', 'and', 'is'] },
                  { hindi: 'हमारे पहुँचने से पहले ट्रेन चली गई थी।', english: 'The train had left before we reached.', words: ['had', 'The', 'train', 'left', 'before', 'we', 'reached', 'has'] },
                  { hindi: 'वे पहले ही जा चुके थे।', english: 'They had already gone.', words: ['had', 'They', 'already', 'gone', 'has', 'and', 'is', 'go'] },
                  { hindi: 'मैंने उसके आने से पहले नहीं खाया था।', english: 'I had not eaten before he came.', words: ['had', 'I', 'not', 'eaten', 'before', 'he', 'came', 'has'] },
                  { hindi: 'उसने काम पूरा नहीं किया था।', english: 'She had not finished her work.', words: ['had', 'She', 'not', 'finished', 'her', 'work', 'has', 'and'] },
                  { hindi: 'तुमने क्या खाया था?', english: 'What had you eaten?', words: ['What', 'had', 'you', 'eaten', 'has', 'have', 'and', 'is'] },
                  { hindi: 'वह कहाँ गई थी?', english: 'Where had she gone?', words: ['Where', 'had', 'she', 'gone', 'has', 'have', 'and', 'is'] }
                ],
                advance: [
                  { english: 'I had eaten before he came.', hindi: 'मैं खा चुका था उसके आने से पहले।', words: ['मैं', 'खा', 'चुका', 'था', 'उसके', 'आने', 'से', 'पहले'] },
                  { english: 'She had finished her work.', hindi: 'उसने अपना काम पूरा कर लिया था।', words: ['उसने', 'अपना', 'काम', 'पूरा', 'कर', 'लिया', 'था', 'और'] },
                  { english: 'The train had left before we reached.', hindi: 'हमारे पहुँचने से पहले ट्रेन चली गई थी।', words: ['हमारे', 'पहुँचने', 'से', 'पहले', 'ट्रेन', 'चली', 'गई', 'थी'] },
                  { english: 'They had already gone.', hindi: 'वे पहले ही जा चुके थे।', words: ['वे', 'पहले', 'ही', 'जा', 'चुके', 'थे', 'और', 'था'] },
                  { english: 'I had not eaten before he came.', hindi: 'मैंने उसके आने से पहले नहीं खाया था।', words: ['मैंने', 'उसके', 'आने', 'से', 'पहले', 'नहीं', 'खाया', 'था'] },
                  { english: 'She had not finished her work.', hindi: 'उसने काम पूरा नहीं किया था।', words: ['उसने', 'काम', 'पूरा', 'नहीं', 'किया', 'था', 'और', 'यह'] },
                  { english: 'What had you eaten?', hindi: 'तुमने क्या खाया था?', words: ['तुमने', 'क्या', 'खाया', 'था', 'और', 'यह', 'वह', 'मैं'] },
                  { english: 'Where had she gone?', hindi: 'वह कहाँ गई थी?', words: ['वह', 'कहाँ', 'गई', 'थी', 'और', 'था', 'यह', 'मैं'] }
                ]
              }
            },
            {
              id: 'past-perfect-continuous',
              title: 'Past Perfect Continuous',
              icon: '4️⃣',
              intro: 'पहले से चल रहा था (किसी समय तक)',
              recognition: 'जब काम past में किसी समय से चल रहा था और past में ही खत्म हुआ। Time words: since, for, how long.',
              definition: 'Past Perfect Continuous Tense वह tense है जो बताता है कि कोई काम past में किसी समय से चल रहा था, और किसी past point तक जारी रहा। जैसे: "I had been studying for 2 hours" — मैं 2 घंटे से पढ़ रहा था।',
              usage: 'जब past में काम किसी समय से चल रहा था और किसी दूसरे past action से पहले तक जारी रहा — इसमें Past Perfect Continuous use होता है।',
              rule: 'Subject + had been + V-ing + since/for + time',
              ruleExplain: 'had been = Helping Verb | V-ing = Verb + ing | since/for = time',
              structure: [
                { type: 'Simple',        formula: 'Subject + had been + V-ing + since/for',  example: 'I had been eating for 2 hours.', exampleExplain: 'had been + eating' },
                { type: 'Negative',      formula: 'Subject + had not been + V-ing',           example: 'I had not been eating.', exampleExplain: 'had not been + eating' },
                { type: 'Interrogative', formula: 'Had + Subject + been + V-ing?',             example: 'Had you been eating?', exampleExplain: 'Had + you + been + eating' },
                { type: 'WH-Question',   formula: 'WH + had + Subject + been + V-ing?',        example: 'How long had you been eating?', exampleExplain: 'How long + had + you + been + eating' }
              ],
              examples: {
                simple: [
                  { en: 'I had been studying for 2 hours.', hi: 'मैं 2 घंटे से पढ़ रहा था।', note: 'had been + studying' },
                  { en: 'She had been working since morning.', hi: 'वह सुबह से काम कर रही थी।', note: 'had been + working' },
                  { en: 'It had been raining since last night.', hi: 'कल रात से बारिश हो रही थी।', note: 'had been + raining' },
                  { en: 'They had been playing since 4 pm.', hi: 'वे 4 बजे से खेल रहे थे।', note: 'had been + playing' }
                ],
                negative: [
                  { en: 'I had not been studying.', hi: 'मैं नहीं पढ़ रहा था।', note: 'had not been' },
                  { en: 'She had not been working.', hi: 'वह काम नहीं कर रही थी।', note: 'had not been' },
                  { en: 'It had not been raining.', hi: 'बारिश नहीं हो रही थी।', note: 'had not been' },
                  { en: 'They had not been playing.', hi: 'वे नहीं खेल रहे थे।', note: 'had not been' }
                ],
                wh: [
                  { en: 'How long had you been studying?', hi: 'तुम कब से पढ़ रहे थे?', note: 'How long + had' },
                  { en: 'Why had she been crying?', hi: 'वह क्यों रो रही थी?', note: 'Why + had' },
                  { en: 'Since when had you been waiting?', hi: 'तुम कब से इंतज़ार कर रहे थे?', note: 'Since when + had' },
                  { en: 'What had you been doing?', hi: 'तुम क्या कर रहे थे?', note: 'What + had' }
                ]
              },
              practice: {
                basic: [
                  { type: 'mcq', q: 'I ___ studying for 2 hours.', options: ['has been', 'have been', 'had been', 'am'], answer: 'had been' },
                  { type: 'mcq', q: 'She ___ working since morning.', options: ['has been', 'have been', 'had been', 'is'], answer: 'had been' },
                  { type: 'mcq', q: 'It had been ___ since last night.', options: ['rain', 'rains', 'raining', 'rained'], answer: 'raining' },
                  { type: 'mcq', q: 'They had been ___ since 4 pm.', options: ['play', 'plays', 'playing', 'played'], answer: 'playing' },
                  { type: 'mcq', q: 'How long ___ you been studying?', options: ['has', 'have', 'had', 'having'], answer: 'had' },
                  { type: 'mcq', q: 'He had been ___ for 3 hours.', options: ['work', 'works', 'working', 'worked'], answer: 'working' },
                  { type: 'mcq', q: 'I had not been ___ well.', options: ['feel', 'feels', 'feeling', 'felt'], answer: 'feeling' },
                  { type: 'mcq', q: 'Since when ___ she been waiting?', options: ['has', 'have', 'had', 'having'], answer: 'had' },
                  { type: 'mcq', q: 'They had been ___ cricket.', options: ['play', 'plays', 'playing', 'played'], answer: 'playing' },
                  { type: 'mcq', q: 'We had been ___ there since 2018.', options: ['live', 'lives', 'living', 'lived'], answer: 'living' },
                  { type: 'mcq', q: 'Why ___ she been crying?', options: ['has', 'have', 'had', 'having'], answer: 'had' },
                  { type: 'mcq', q: 'It had been ___ all day.', options: ['rain', 'rains', 'raining', 'rained'], answer: 'raining' },
                  { type: 'mcq', q: 'How long had you been ___ English?', options: ['learn', 'learns', 'learning', 'learned'], answer: 'learning' },
                  { type: 'mcq', q: 'He had not been ___ anything.', options: ['do', 'does', 'doing', 'did'], answer: 'doing' },
                  { type: 'mcq', q: 'She ___ been teaching since 2010.', options: ['has', 'have', 'had', 'having'], answer: 'had' },
                  { type: 'mcq', q: 'The children had been ___ for hours.', options: ['play', 'plays', 'playing', 'played'], answer: 'playing' },
                  { type: 'mcq', q: 'I had been ___ for you.', options: ['wait', 'waits', 'waiting', 'waited'], answer: 'waiting' },
                  { type: 'mcq', q: 'What ___ you been doing?', options: ['has', 'have', 'had', 'having'], answer: 'had' },
                  { type: 'mcq', q: 'She had been ___ since morning.', options: ['cook', 'cooks', 'cooking', 'cooked'], answer: 'cooking' },
                  { type: 'mcq', q: 'They had been ___ since 5 pm.', options: ['study', 'studies', 'studying', 'studied'], answer: 'studying' }
                ],
                hard: [
                  { hindi: 'मैं 2 घंटे से पढ़ रहा था।', english: 'I had been studying for 2 hours.', words: ['had', 'I', 'been', 'studying', 'for', '2', 'hours', 'have'] },
                  { hindi: 'वह सुबह से काम कर रही थी।', english: 'She had been working since morning.', words: ['had', 'She', 'been', 'working', 'since', 'morning', 'have', 'and'] },
                  { hindi: 'कल रात से बारिश हो रही थी।', english: 'It had been raining since last night.', words: ['had', 'It', 'been', 'raining', 'since', 'last', 'night', 'have'] },
                  { hindi: 'वे 4 बजे से खेल रहे थे।', english: 'They had been playing since 4 pm.', words: ['had', 'They', 'been', 'playing', 'since', '4', 'pm', 'have'] },
                  { hindi: 'मैं नहीं पढ़ रहा था।', english: 'I had not been studying.', words: ['had', 'I', 'not', 'been', 'studying', 'have', 'and', 'is'] },
                  { hindi: 'वह काम नहीं कर रही थी।', english: 'She had not been working.', words: ['had', 'She', 'not', 'been', 'working', 'have', 'and', 'is'] },
                  { hindi: 'तुम कब से पढ़ रहे थे?', english: 'How long had you been studying?', words: ['How', 'long', 'had', 'you', 'been', 'studying', 'have', 'and'] },
                  { hindi: 'तुम क्या कर रहे थे?', english: 'What had you been doing?', words: ['What', 'had', 'you', 'been', 'doing', 'have', 'and', 'is'] }
                ],
                advance: [
                  { english: 'I had been studying for 2 hours.', hindi: 'मैं 2 घंटे से पढ़ रहा था।', words: ['मैं', '2', 'घंटे', 'से', 'पढ़', 'रहा', 'था', 'और'] },
                  { english: 'She had been working since morning.', hindi: 'वह सुबह से काम कर रही थी।', words: ['वह', 'सुबह', 'से', 'काम', 'कर', 'रही', 'थी', 'और'] },
                  { english: 'It had been raining since last night.', hindi: 'कल रात से बारिश हो रही थी।', words: ['कल', 'रात', 'से', 'बारिश', 'हो', 'रही', 'थी', 'और'] },
                  { english: 'They had been playing since 4 pm.', hindi: 'वे 4 बजे से खेल रहे थे।', words: ['वे', '4', 'बजे', 'से', 'खेल', 'रहे', 'थे', 'और'] },
                  { english: 'I had not been studying.', hindi: 'मैं नहीं पढ़ रहा था।', words: ['मैं', 'नहीं', 'पढ़', 'रहा', 'था', 'और', 'यह', 'वह'] },
                  { english: 'She had not been working.', hindi: 'वह काम नहीं कर रही थी।', words: ['वह', 'काम', 'नहीं', 'कर', 'रही', 'थी', 'और', 'यह'] },
                  { english: 'How long had you been studying?', hindi: 'तुम कब से पढ़ रहे थे?', words: ['तुम', 'कब', 'से', 'पढ़', 'रहे', 'थे', 'और', 'यह'] },
                  { english: 'What had you been doing?', hindi: 'तुम क्या कर रहे थे?', words: ['तुम', 'क्या', 'कर', 'रहे', 'थे', 'और', 'था', 'यह'] }
                ]
              }
            }
          ]
        },

        // ═══ FUTURE ═══
        {
          id: 'future',
          title: 'Future Tense',
          icon: '🟣',
          intro: 'भविष्य काल — आगे होगा',
          subtopics: [
            {
              id: 'future-simple',
              title: 'Future Simple / Indefinite',
              icon: '1️⃣',
              intro: 'आगे होगा',
              recognition: 'जब काम future में होगा। Time words: tomorrow, next week, next month, soon, in 2030.',
              definition: 'Future Simple Tense वह tense है जो बताता है कि कोई काम आगे (future में) होगा। जैसे: "I will eat rice tomorrow" — कल मैं चावल खाऊँगा।',
              usage: 'जो काम future में होगा (I will go to Delhi tomorrow), prediction (It will rain), promise (I will help you) — इनमें Future Simple use होता है।',
              rule: 'Subject + will + V1 + Object',
              ruleExplain: 'will = Helping Verb (सभी subjects के साथ) | V1 = Verb का base form',
              structure: [
                { type: 'Simple',        formula: 'Subject + will + V1 + Object',            example: 'I will eat rice.', exampleExplain: 'I + will + eat' },
                { type: 'Negative',      formula: 'Subject + will not + V1 + Object',         example: 'I will not eat rice.', exampleExplain: 'will not + eat' },
                { type: 'Interrogative', formula: 'Will + Subject + V1 + Object?',             example: 'Will you eat rice?', exampleExplain: 'Will + you + eat' },
                { type: 'WH-Question',   formula: 'WH + will + Subject + V1?',                 example: 'What will you eat?', exampleExplain: 'What + will + you + eat' }
              ],
              examples: {
                simple: [
                  { en: 'I will eat rice tomorrow.', hi: 'मैं कल चावल खाऊँगा।', note: 'will + eat' },
                  { en: 'She will go to school.', hi: 'वह स्कूल जाएगी।', note: 'will + go' },
                  { en: 'They will play cricket.', hi: 'वे क्रिकेट खेलेंगे।', note: 'will + play' },
                  { en: 'It will rain tomorrow.', hi: 'कल बारिश होगी।', note: 'will + rain' }
                ],
                negative: [
                  { en: 'I will not eat rice.', hi: 'मैं चावल नहीं खाऊँगा।', note: 'will not' },
                  { en: 'She will not go to school.', hi: 'वह स्कूल नहीं जाएगी।', note: 'will not' },
                  { en: 'They will not play cricket.', hi: 'वे क्रिकेट नहीं खेलेंगे।', note: 'will not' },
                  { en: 'It will not rain tomorrow.', hi: 'कल बारिश नहीं होगी।', note: 'will not' }
                ],
                wh: [
                  { en: 'What will you eat?', hi: 'तुम क्या खाओगे?', note: 'What + will + you' },
                  { en: 'Where will she go?', hi: 'वह कहाँ जाएगी?', note: 'Where + will + she' },
                  { en: 'When will they play?', hi: 'वे कब खेलेंगे?', note: 'When + will + they' },
                  { en: 'Why will it rain?', hi: 'बारिश क्यों होगी?', note: 'Why + will + it' }
                ]
              },
              practice: {
                basic: [
                  { type: 'mcq', q: 'I ___ eat rice tomorrow.', options: ['will', 'would', 'am', 'was'], answer: 'will' },
                  { type: 'mcq', q: 'She ___ go to school.', options: ['will', 'would', 'is', 'was'], answer: 'will' },
                  { type: 'mcq', q: 'They ___ play cricket.', options: ['will', 'would', 'are', 'were'], answer: 'will' },
                  { type: 'mcq', q: 'I will not ___ rice.', options: ['eat', 'ate', 'eaten', 'eating'], answer: 'eat' },
                  { type: 'mcq', q: '___ you come tomorrow?', options: ['Do', 'Does', 'Will', 'Did'], answer: 'Will' },
                  { type: 'mcq', q: 'We ___ visit Delhi next week.', options: ['will', 'would', 'are', 'were'], answer: 'will' },
                  { type: 'mcq', q: 'He will ___ his homework.', options: ['do', 'does', 'did', 'done'], answer: 'do' },
                  { type: 'mcq', q: 'It will ___ tomorrow.', options: ['rain', 'rains', 'raining', 'rained'], answer: 'rain' },
                  { type: 'mcq', q: '___ she come to the party?', options: ['Will', 'Would', 'Is', 'Was'], answer: 'Will' },
                  { type: 'mcq', q: 'What ___ you do tomorrow?', options: ['will', 'would', 'are', 'were'], answer: 'will' },
                  { type: 'mcq', q: 'They will ___ a new house.', options: ['buy', 'buys', 'bought', 'buying'], answer: 'buy' },
                  { type: 'mcq', q: 'I will ___ you tomorrow.', options: ['call', 'calls', 'called', 'calling'], answer: 'call' },
                  { type: 'mcq', q: 'She will ___ a doctor.', options: ['become', 'becomes', 'became', 'becoming'], answer: 'become' },
                  { type: 'mcq', q: 'Where ___ they go?', options: ['will', 'would', 'are', 'were'], answer: 'will' },
                  { type: 'mcq', q: 'We will ___ the match.', options: ['win', 'wins', 'won', 'winning'], answer: 'win' },
                  { type: 'mcq', q: 'He will not ___ the truth.', options: ['tell', 'told', 'tells', 'telling'], answer: 'tell' },
                  { type: 'mcq', q: 'I will ___ a letter.', options: ['write', 'writes', 'wrote', 'written'], answer: 'write' },
                  { type: 'mcq', q: 'They will ___ to London.', options: ['go', 'goes', 'went', 'gone'], answer: 'go' },
                  { type: 'mcq', q: 'When ___ you come back?', options: ['will', 'would', 'are', 'were'], answer: 'will' },
                  { type: 'mcq', q: 'She will ___ me.', options: ['help', 'helps', 'helped', 'helping'], answer: 'help' }
                ],
                hard: [
                  { hindi: 'मैं कल चावल खाऊँगा।', english: 'I will eat rice tomorrow.', words: ['will', 'I', 'eat', 'rice', 'tomorrow', 'would', 'and', 'is'] },
                  { hindi: 'वह स्कूल जाएगी।', english: 'She will go to school.', words: ['will', 'She', 'go', 'to', 'school', 'would', 'and', 'is'] },
                  { hindi: 'वे क्रिकेट खेलेंगे।', english: 'They will play cricket.', words: ['will', 'They', 'play', 'cricket', 'would', 'and', 'is', 'are'] },
                  { hindi: 'कल बारिश होगी।', english: 'It will rain tomorrow.', words: ['will', 'It', 'rain', 'tomorrow', 'would', 'and', 'is', 'are'] },
                  { hindi: 'मैं चावल नहीं खाऊँगा।', english: 'I will not eat rice.', words: ['will', 'I', 'not', 'eat', 'rice', 'would', 'and', 'is'] },
                  { hindi: 'वह स्कूल नहीं जाएगी।', english: 'She will not go to school.', words: ['will', 'She', 'not', 'go', 'school', 'to', 'would', 'and'] },
                  { hindi: 'तुम क्या खाओगे?', english: 'What will you eat?', words: ['What', 'will', 'you', 'eat', 'would', 'and', 'is', 'I'] },
                  { hindi: 'वह कहाँ जाएगी?', english: 'Where will she go?', words: ['Where', 'will', 'she', 'go', 'would', 'and', 'is', 'I'] }
                ],
                advance: [
                  { english: 'I will eat rice tomorrow.', hindi: 'मैं कल चावल खाऊँगा।', words: ['मैं', 'कल', 'चावल', 'खाऊँगा', 'और', 'था', 'यह', 'वह'] },
                  { english: 'She will go to school.', hindi: 'वह स्कूल जाएगी।', words: ['वह', 'स्कूल', 'जाएगी', 'और', 'था', 'यह', 'मैं', 'है'] },
                  { english: 'They will play cricket.', hindi: 'वे क्रिकेट खेलेंगे।', words: ['वे', 'क्रिकेट', 'खेलेंगे', 'और', 'था', 'यह', 'वह', 'मैं'] },
                  { english: 'It will rain tomorrow.', hindi: 'कल बारिश होगी।', words: ['कल', 'बारिश', 'होगी', 'और', 'था', 'यह', 'वह', 'मैं'] },
                  { english: 'I will not eat rice.', hindi: 'मैं चावल नहीं खाऊँगा।', words: ['मैं', 'चावल', 'नहीं', 'खाऊँगा', 'और', 'था', 'यह', 'वह'] },
                  { english: 'She will not go to school.', hindi: 'वह स्कूल नहीं जाएगी।', words: ['वह', 'स्कूल', 'नहीं', 'जाएगी', 'और', 'था', 'यह', 'मैं'] },
                  { english: 'What will you eat?', hindi: 'तुम क्या खाओगे?', words: ['तुम', 'क्या', 'खाओगे', 'और', 'था', 'यह', 'वह', 'मैं'] },
                  { english: 'Where will she go?', hindi: 'वह कहाँ जाएगी?', words: ['वह', 'कहाँ', 'जाएगी', 'और', 'था', 'यह', 'मैं', 'है'] }
                ]
              }
            },
            {
              id: 'future-continuous',
              title: 'Future Continuous',
              icon: '2️⃣',
              intro: 'आगे चल रहा होगा',
              recognition: 'जब काम future में किसी खास समय चल रहा होगा। Time words: at 5 pm tomorrow, this time tomorrow.',
              definition: 'Future Continuous Tense वह tense है जो बताता है कि कोई काम future में किसी खास समय पर चल रहा होगा। जैसे: "I will be eating at 8 pm" — 8 बजे मैं खा रहा होऊँगा।',
              usage: 'जब future में किसी खास समय पर काम जारी होगा (At 5 pm, I will be working) — इसमें Future Continuous use होता है।',
              rule: 'Subject + will be + V-ing + Object',
              ruleExplain: 'will be = Helping Verb | V-ing = Verb + ing',
              structure: [
                { type: 'Simple',        formula: 'Subject + will be + V-ing + Object',       example: 'I will be eating rice.', exampleExplain: 'I + will be + eating' },
                { type: 'Negative',      formula: 'Subject + will not be + V-ing',             example: 'I will not be eating.', exampleExplain: 'will not be + eating' },
                { type: 'Interrogative', formula: 'Will + Subject + be + V-ing?',               example: 'Will you be eating?', exampleExplain: 'Will + you + be + eating' },
                { type: 'WH-Question',   formula: 'WH + will + Subject + be + V-ing?',          example: 'What will you be eating?', exampleExplain: 'What + will + you + be + eating' }
              ],
              examples: {
                simple: [
                  { en: 'I will be eating at 8 pm.', hi: 'मैं 8 बजे खा रहा होऊँगा।', note: 'will be + eating' },
                  { en: 'She will be reading a book.', hi: 'वह किताब पढ़ रही होगी।', note: 'will be + reading' },
                  { en: 'They will be playing cricket.', hi: 'वे क्रिकेट खेल रहे होंगे।', note: 'will be + playing' },
                  { en: 'It will be raining tonight.', hi: 'आज रात बारिश हो रही होगी।', note: 'will be + raining' }
                ],
                negative: [
                  { en: 'I will not be eating.', hi: 'मैं नहीं खा रहा होऊँगा।', note: 'will not be' },
                  { en: 'She will not be reading.', hi: 'वह नहीं पढ़ रही होगी।', note: 'will not be' },
                  { en: 'They will not be playing.', hi: 'वे नहीं खेल रहे होंगे।', note: 'will not be' },
                  { en: 'It will not be raining.', hi: 'बारिश नहीं हो रही होगी।', note: 'will not be' }
                ],
                wh: [
                  { en: 'What will you be doing?', hi: 'तुम क्या कर रहे होगे?', note: 'What + will + you + be' },
                  { en: 'Where will she be going?', hi: 'वह कहाँ जा रही होगी?', note: 'Where + will + she + be' },
                  { en: 'When will they be playing?', hi: 'वे कब खेल रहे होंगे?', note: 'When + will + they + be' },
                  { en: 'Why will you be waiting?', hi: 'तुम क्यों इंतज़ार कर रहे होगे?', note: 'Why + will + you + be' }
                ]
              },
              practice: {
                basic: [
                  { type: 'mcq', q: 'I will ___ eating at 8 pm.', options: ['am', 'is', 'be', 'been'], answer: 'be' },
                  { type: 'mcq', q: 'She will be ___ a book.', options: ['read', 'reads', 'reading', 'readed'], answer: 'reading' },
                  { type: 'mcq', q: 'They will be ___ cricket.', options: ['play', 'plays', 'playing', 'played'], answer: 'playing' },
                  { type: 'mcq', q: 'It will be ___ tonight.', options: ['rain', 'rains', 'raining', 'rained'], answer: 'raining' },
                  { type: 'mcq', q: 'What ___ you be doing?', options: ['will', 'would', 'are', 'is'], answer: 'will' },
                  { type: 'mcq', q: 'We will be ___ TV at 9 pm.', options: ['watch', 'watches', 'watching', 'watched'], answer: 'watching' },
                  { type: 'mcq', q: 'He will be ___ a letter.', options: ['write', 'writes', 'writing', 'wrote'], answer: 'writing' },
                  { type: 'mcq', q: 'I will not be ___ to music.', options: ['listen', 'listens', 'listening', 'listened'], answer: 'listening' },
                  { type: 'mcq', q: '___ she be singing?', options: ['Will', 'Would', 'Is', 'Was'], answer: 'Will' },
                  { type: 'mcq', q: 'Where ___ they be going?', options: ['will', 'would', 'are', 'is'], answer: 'will' },
                  { type: 'mcq', q: 'The children will be ___ in the park.', options: ['play', 'plays', 'playing', 'played'], answer: 'playing' },
                  { type: 'mcq', q: 'It will be ___ tomorrow.', options: ['rain', 'rains', 'raining', 'rained'], answer: 'raining' },
                  { type: 'mcq', q: 'Why ___ you be crying?', options: ['will', 'would', 'are', 'is'], answer: 'will' },
                  { type: 'mcq', q: 'She will be ___ dinner.', options: ['cook', 'cooks', 'cooking', 'cooked'], answer: 'cooking' },
                  { type: 'mcq', q: 'They will not be ___ attention.', options: ['pay', 'pays', 'paying', 'paid'], answer: 'paying' },
                  { type: 'mcq', q: 'What ___ she be reading?', options: ['will', 'would', 'are', 'is'], answer: 'will' },
                  { type: 'mcq', q: 'We will be ___ for the bus.', options: ['wait', 'waits', 'waiting', 'waited'], answer: 'waiting' },
                  { type: 'mcq', q: 'He ___ be sleeping at 10 pm.', options: ['will', 'would', 'is', 'was'], answer: 'will' },
                  { type: 'mcq', q: 'They will be ___ when I call.', options: ['study', 'studies', 'studying', 'studied'], answer: 'studying' },
                  { type: 'mcq', q: '___ you be working tomorrow?', options: ['Will', 'Would', 'Is', 'Are'], answer: 'Will' }
                ],
                hard: [
                  { hindi: 'मैं 8 बजे खा रहा होऊँगा।', english: 'I will be eating at 8 pm.', words: ['will', 'I', 'be', 'eating', 'at', '8', 'pm', 'would'] },
                  { hindi: 'वह किताब पढ़ रही होगी।', english: 'She will be reading a book.', words: ['will', 'She', 'be', 'reading', 'book', 'a', 'would', 'and'] },
                  { hindi: 'वे क्रिकेट खेल रहे होंगे।', english: 'They will be playing cricket.', words: ['will', 'They', 'be', 'playing', 'cricket', 'would', 'and', 'is'] },
                  { hindi: 'आज रात बारिश हो रही होगी।', english: 'It will be raining tonight.', words: ['will', 'It', 'be', 'raining', 'tonight', 'would', 'and', 'is'] },
                  { hindi: 'मैं नहीं खा रहा होऊँगा।', english: 'I will not be eating.', words: ['will', 'I', 'not', 'be', 'eating', 'would', 'and', 'is'] },
                  { hindi: 'वह नहीं पढ़ रही होगी।', english: 'She will not be reading.', words: ['will', 'She', 'not', 'be', 'reading', 'would', 'and', 'is'] },
                  { hindi: 'तुम क्या कर रहे होगे?', english: 'What will you be doing?', words: ['What', 'will', 'you', 'be', 'doing', 'would', 'and', 'is'] },
                  { hindi: 'वह कहाँ जा रही होगी?', english: 'Where will she be going?', words: ['Where', 'will', 'she', 'be', 'going', 'would', 'and', 'is'] }
                ],
                advance: [
                  { english: 'I will be eating at 8 pm.', hindi: 'मैं 8 बजे खा रहा होऊँगा।', words: ['मैं', '8', 'बजे', 'खा', 'रहा', 'होऊँगा', 'और', 'था'] },
                  { english: 'She will be reading a book.', hindi: 'वह किताब पढ़ रही होगी।', words: ['वह', 'किताब', 'पढ़', 'रही', 'होगी', 'और', 'था', 'यह'] },
                  { english: 'They will be playing cricket.', hindi: 'वे क्रिकेट खेल रहे होंगे।', words: ['वे', 'क्रिकेट', 'खेल', 'रहे', 'होंगे', 'और', 'था', 'यह'] },
                  { english: 'It will be raining tonight.', hindi: 'आज रात बारिश हो रही होगी।', words: ['आज', 'रात', 'बारिश', 'हो', 'रही', 'होगी', 'और', 'था'] },
                  { english: 'I will not be eating.', hindi: 'मैं नहीं खा रहा होऊँगा।', words: ['मैं', 'नहीं', 'खा', 'रहा', 'होऊँगा', 'और', 'था', 'यह'] },
                  { english: 'She will not be reading.', hindi: 'वह नहीं पढ़ रही होगी।', words: ['वह', 'नहीं', 'पढ़', 'रही', 'होगी', 'और', 'था', 'यह'] },
                  { english: 'What will you be doing?', hindi: 'तुम क्या कर रहे होगे?', words: ['तुम', 'क्या', 'कर', 'रहे', 'होगे', 'और', 'था', 'यह'] },
                  { english: 'Where will she be going?', hindi: 'वह कहाँ जा रही होगी?', words: ['वह', 'कहाँ', 'जा', 'रही', 'होगी', 'और', 'था', 'यह'] }
                ]
              }
            },
            {
              id: 'future-perfect',
              title: 'Future Perfect',
              icon: '3️⃣',
              intro: 'आगे तक पूरा हो चुका होगा',
              recognition: 'जब काम future में किसी खास समय तक पूरा हो चुका होगा। Time words: by tomorrow, by 5 pm, by then, by next year.',
              definition: 'Future Perfect Tense वह tense है जो बताता है कि कोई काम future में किसी खास समय तक पूरा हो चुका होगा। जैसे: "I will have eaten by 8 pm" — 8 बजे तक मैं खा चुका होऊँगा।',
              usage: 'जब future में किसी खास समय तक काम पूरा हो जाएगा (By 2030, I will have completed my studies) — इसमें Future Perfect use होता है।',
              rule: 'Subject + will have + V3 + Object',
              ruleExplain: 'will have = Helping Verb | V3 = Verb का third form',
              structure: [
                { type: 'Simple',        formula: 'Subject + will have + V3 + Object',         example: 'I will have eaten rice.', exampleExplain: 'I + will have + eaten' },
                { type: 'Negative',      formula: 'Subject + will not have + V3',               example: 'I will not have eaten.', exampleExplain: 'will not have + eaten' },
                { type: 'Interrogative', formula: 'Will + Subject + have + V3?',                 example: 'Will you have eaten?', exampleExplain: 'Will + you + have + eaten' },
                { type: 'WH-Question',   formula: 'WH + will + Subject + have + V3?',            example: 'What will you have eaten?', exampleExplain: 'What + will + you + have + eaten' }
              ],
              examples: {
                simple: [
                  { en: 'I will have eaten by 8 pm.', hi: 'मैं 8 बजे तक खा चुका होऊँगा।', note: 'will have + eaten' },
                  { en: 'She will have finished her work.', hi: 'वह अपना काम पूरा कर चुकी होगी।', note: 'will have + finished' },
                  { en: 'They will have left by then.', hi: 'वे तब तक जा चुके होंगे।', note: 'will have + left' },
                  { en: 'We will have reached Delhi.', hi: 'हम दिल्ली पहुँच चुके होंगे।', note: 'will have + reached' }
                ],
                negative: [
                  { en: 'I will not have eaten by 8 pm.', hi: 'मैं 8 बजे तक नहीं खाया होऊँगा।', note: 'will not have' },
                  { en: 'She will not have finished.', hi: 'वह खत्म नहीं कर चुकी होगी।', note: 'will not have' },
                  { en: 'They will not have left.', hi: 'वे नहीं गए होंगे।', note: 'will not have' },
                  { en: 'We will not have reached.', hi: 'हम नहीं पहुँचे होंगे।', note: 'will not have' }
                ],
                wh: [
                  { en: 'What will you have eaten?', hi: 'तुम क्या खा चुके होगे?', note: 'What + will + you + have' },
                  { en: 'Where will she have gone?', hi: 'वह कहाँ जा चुकी होगी?', note: 'Where + will + she + have' },
                  { en: 'When will they have left?', hi: 'वे कब जा चुके होंगे?', note: 'When + will + they + have' },
                  { en: 'How will you have finished?', hi: 'तुम कैसे पूरा कर चुके होगे?', note: 'How + will + you + have' }
                ]
              },
              practice: {
                basic: [
                  { type: 'mcq', q: 'I will ___ eaten by 8 pm.', options: ['has', 'have', 'had', 'having'], answer: 'have' },
                  { type: 'mcq', q: 'She will have ___ her work.', options: ['finish', 'finishes', 'finished', 'finishing'], answer: 'finished' },
                  { type: 'mcq', q: 'They will have ___ by then.', options: ['leave', 'leaves', 'left', 'leaving'], answer: 'left' },
                  { type: 'mcq', q: 'We will have ___ Delhi.', options: ['reach', 'reaches', 'reached', 'reaching'], answer: 'reached' },
                  { type: 'mcq', q: '___ you have finished by then?', options: ['Do', 'Does', 'Will', 'Did'], answer: 'Will' },
                  { type: 'mcq', q: 'He will have ___ his homework.', options: ['do', 'did', 'done', 'doing'], answer: 'done' },
                  { type: 'mcq', q: 'By 2030, she will have ___ a doctor.', options: ['become', 'becomes', 'became', 'becoming'], answer: 'become' },
                  { type: 'mcq', q: 'I will have ___ my keys by then.', options: ['find', 'finds', 'found', 'finding'], answer: 'found' },
                  { type: 'mcq', q: 'They will have ___ the match.', options: ['win', 'wins', 'won', 'winning'], answer: 'won' },
                  { type: 'mcq', q: 'What will you have ___?', options: ['do', 'does', 'did', 'done'], answer: 'done' },
                  { type: 'mcq', q: 'We will have ___ dinner by 9 pm.', options: ['have', 'has', 'had', 'having'], answer: 'had' },
                  { type: 'mcq', q: 'She will have ___ me by then.', options: ['call', 'calls', 'called', 'calling'], answer: 'called' },
                  { type: 'mcq', q: 'They will have ___ to London.', options: ['go', 'goes', 'went', 'gone'], answer: 'gone' },
                  { type: 'mcq', q: 'Where ___ she have gone?', options: ['will', 'would', 'has', 'have'], answer: 'will' },
                  { type: 'mcq', q: 'I will have ___ the book.', options: ['read', 'reads', 'reading', 'readed'], answer: 'read' },
                  { type: 'mcq', q: 'He will have ___ a new car.', options: ['buy', 'buys', 'bought', 'buying'], answer: 'bought' },
                  { type: 'mcq', q: 'She will have ___ the truth.', options: ['tell', 'tells', 'told', 'telling'], answer: 'told' },
                  { type: 'mcq', q: 'By next year, they will have ___.', options: ['marry', 'marries', 'married', 'marrying'], answer: 'married' },
                  { type: 'mcq', q: 'I will have ___ my work.', options: ['finish', 'finishes', 'finished', 'finishing'], answer: 'finished' },
                  { type: 'mcq', q: 'What will you have ___?', options: ['do', 'does', 'did', 'done'], answer: 'done' }
                ],
                hard: [
                  { hindi: 'मैं 8 बजे तक खा चुका होऊँगा।', english: 'I will have eaten by 8 pm.', words: ['will', 'I', 'have', 'eaten', 'by', '8', 'pm', 'would'] },
                  { hindi: 'वह अपना काम पूरा कर चुकी होगी।', english: 'She will have finished her work.', words: ['will', 'She', 'have', 'finished', 'her', 'work', 'would', 'and'] },
                  { hindi: 'वे तब तक जा चुके होंगे।', english: 'They will have left by then.', words: ['will', 'They', 'have', 'left', 'by', 'then', 'would', 'and'] },
                  { hindi: 'हम दिल्ली पहुँच चुके होंगे।', english: 'We will have reached Delhi.', words: ['will', 'We', 'have', 'reached', 'Delhi', 'would', 'and', 'is'] },
                  { hindi: 'मैं 8 बजे तक नहीं खाया होऊँगा।', english: 'I will not have eaten by 8 pm.', words: ['will', 'I', 'not', 'have', 'eaten', 'by', '8', 'pm'] },
                  { hindi: 'वह खत्म नहीं कर चुकी होगी।', english: 'She will not have finished.', words: ['will', 'She', 'not', 'have', 'finished', 'would', 'and', 'is'] },
                  { hindi: 'तुम क्या खा चुके होगे?', english: 'What will you have eaten?', words: ['What', 'will', 'you', 'have', 'eaten', 'would', 'and', 'is'] },
                  { hindi: 'वह कहाँ जा चुकी होगी?', english: 'Where will she have gone?', words: ['Where', 'will', 'she', 'have', 'gone', 'would', 'and', 'is'] }
                ],
                advance: [
                  { english: 'I will have eaten by 8 pm.', hindi: 'मैं 8 बजे तक खा चुका होऊँगा।', words: ['मैं', '8', 'बजे', 'तक', 'खा', 'चुका', 'होऊँगा', 'और'] },
                  { english: 'She will have finished her work.', hindi: 'वह अपना काम पूरा कर चुकी होगी।', words: ['वह', 'अपना', 'काम', 'पूरा', 'कर', 'चुकी', 'होगी', 'और'] },
                  { english: 'They will have left by then.', hindi: 'वे तब तक जा चुके होंगे।', words: ['वे', 'तब', 'तक', 'जा', 'चुके', 'होंगे', 'और', 'था'] },
                  { english: 'We will have reached Delhi.', hindi: 'हम दिल्ली पहुँच चुके होंगे।', words: ['हम', 'दिल्ली', 'पहुँच', 'चुके', 'होंगे', 'और', 'था', 'यह'] },
                  { english: 'I will not have eaten by 8 pm.', hindi: 'मैं 8 बजे तक नहीं खाया होऊँगा।', words: ['मैं', '8', 'बजे', 'तक', 'नहीं', 'खाया', 'होऊँगा', 'और'] },
                  { english: 'She will not have finished.', hindi: 'वह खत्म नहीं कर चुकी होगी।', words: ['वह', 'खत्म', 'नहीं', 'कर', 'चुकी', 'होगी', 'और', 'था'] },
                  { english: 'What will you have eaten?', hindi: 'तुम क्या खा चुके होगे?', words: ['तुम', 'क्या', 'खा', 'चुके', 'होगे', 'और', 'था', 'यह'] },
                  { english: 'Where will she have gone?', hindi: 'वह कहाँ जा चुकी होगी?', words: ['वह', 'कहाँ', 'जा', 'चुकी', 'होगी', 'और', 'था', 'यह'] }
                ]
              }
            },
            {
              id: 'future-perfect-continuous',
              title: 'Future Perfect Continuous',
              icon: '4️⃣',
              intro: 'आगे तक चलता रहेगा',
              recognition: 'जब काम future में किसी खास समय तक चलता रहेगा। Time words: by next year, for 2 hours, since morning.',
              definition: 'Future Perfect Continuous Tense वह tense है जो बताता है कि कोई काम future में किसी खास समय तक चलता रहेगा। जैसे: "By next year, I will have been working here for 5 years" — अगले साल तक मैं यहाँ 5 साल से काम कर रहा होऊँगा।',
              usage: 'जब future में किसी समय तक काम चलता रहेगा और duration बतानी हो — इसमें Future Perfect Continuous use होता है।',
              rule: 'Subject + will have been + V-ing + since/for + time',
              ruleExplain: 'will have been = Helping Verb | V-ing = Verb + ing | since/for = time',
              structure: [
                { type: 'Simple',        formula: 'Subject + will have been + V-ing',     example: 'I will have been eating for 2 hours.', exampleExplain: 'will have been + eating' },
                { type: 'Negative',      formula: 'Subject + will not have been + V-ing',  example: 'I will not have been eating.', exampleExplain: 'will not have been + eating' },
                { type: 'Interrogative', formula: 'Will + Subject + have been + V-ing?',    example: 'Will you have been eating?', exampleExplain: 'Will + you + have been + eating' },
                { type: 'WH-Question',   formula: 'WH + will + Subject + have been + V-ing?', example: 'How long will you have been eating?', exampleExplain: 'How long + will + you + have been + eating' }
              ],
              examples: {
                simple: [
                  { en: 'I will have been studying for 2 hours.', hi: 'मैं 2 घंटे से पढ़ रहा होऊँगा।', note: 'will have been + studying' },
                  { en: 'She will have been working since morning.', hi: 'वह सुबह से काम कर रही होगी।', note: 'will have been + working' },
                  { en: 'It will have been raining since last night.', hi: 'कल रात से बारिश हो रही होगी।', note: 'will have been + raining' },
                  { en: 'They will have been playing since 4 pm.', hi: 'वे 4 बजे से खेल रहे होंगे।', note: 'will have been + playing' }
                ],
                negative: [
                  { en: 'I will not have been studying.', hi: 'मैं नहीं पढ़ रहा होऊँगा।', note: 'will not have been' },
                  { en: 'She will not have been working.', hi: 'वह काम नहीं कर रही होगी।', note: 'will not have been' },
                  { en: 'It will not have been raining.', hi: 'बारिश नहीं हो रही होगी।', note: 'will not have been' },
                  { en: 'They will not have been playing.', hi: 'वे नहीं खेल रहे होंगे।', note: 'will not have been' }
                ],
                wh: [
                  { en: 'How long will you have been studying?', hi: 'तुम कब से पढ़ रहे होगे?', note: 'How long + will' },
                  { en: 'Why will she have been crying?', hi: 'वह क्यों रो रही होगी?', note: 'Why + will' },
                  { en: 'Since when will you have been waiting?', hi: 'तुम कब से इंतज़ार कर रहे होगे?', note: 'Since when + will' },
                  { en: 'What will you have been doing?', hi: 'तुम क्या कर रहे होगे?', note: 'What + will' }
                ]
              },
              practice: {
                basic: [
                  { type: 'mcq', q: 'I will ___ been studying for 2 hours.', options: ['has', 'have', 'had', 'having'], answer: 'have' },
                  { type: 'mcq', q: 'She will have been ___ since morning.', options: ['work', 'works', 'working', 'worked'], answer: 'working' },
                  { type: 'mcq', q: 'It will have been ___ since last night.', options: ['rain', 'rains', 'raining', 'rained'], answer: 'raining' },
                  { type: 'mcq', q: 'They will have been ___ since 4 pm.', options: ['play', 'plays', 'playing', 'played'], answer: 'playing' },
                  { type: 'mcq', q: 'How long will you have been ___?', options: ['study', 'studies', 'studying', 'studied'], answer: 'studying' },
                  { type: 'mcq', q: 'He will have been ___ for 3 hours.', options: ['work', 'works', 'working', 'worked'], answer: 'working' },
                  { type: 'mcq', q: 'I will not have been ___ well.', options: ['feel', 'feels', 'feeling', 'felt'], answer: 'feeling' },
                  { type: 'mcq', q: 'Since when ___ she have been waiting?', options: ['will', 'would', 'has', 'have'], answer: 'will' },
                  { type: 'mcq', q: 'They will have been ___ cricket.', options: ['play', 'plays', 'playing', 'played'], answer: 'playing' },
                  { type: 'mcq', q: 'We will have been ___ there for 5 years.', options: ['live', 'lives', 'living', 'lived'], answer: 'living' },
                  { type: 'mcq', q: 'Why ___ she have been crying?', options: ['will', 'would', 'has', 'have'], answer: 'will' },
                  { type: 'mcq', q: 'It will have been ___ all day.', options: ['rain', 'rains', 'raining', 'rained'], answer: 'raining' },
                  { type: 'mcq', q: 'How long will you have been ___ English?', options: ['learn', 'learns', 'learning', 'learned'], answer: 'learning' },
                  { type: 'mcq', q: 'He will not have been ___ anything.', options: ['do', 'does', 'doing', 'did'], answer: 'doing' },
                  { type: 'mcq', q: 'She ___ have been teaching for 10 years.', options: ['will', 'would', 'has', 'have'], answer: 'will' },
                  { type: 'mcq', q: 'The children will have been ___ for hours.', options: ['play', 'plays', 'playing', 'played'], answer: 'playing' },
                  { type: 'mcq', q: 'I will have been ___ for you.', options: ['wait', 'waits', 'waiting', 'waited'], answer: 'waiting' },
                  { type: 'mcq', q: 'What ___ you have been doing?', options: ['will', 'would', 'has', 'have'], answer: 'will' },
                  { type: 'mcq', q: 'She will have been ___ since morning.', options: ['cook', 'cooks', 'cooking', 'cooked'], answer: 'cooking' },
                  { type: 'mcq', q: 'They will have been ___ since 5 pm.', options: ['study', 'studies', 'studying', 'studied'], answer: 'studying' }
                ],
                hard: [
                  { hindi: 'मैं 2 घंटे से पढ़ रहा होऊँगा।', english: 'I will have been studying for 2 hours.', words: ['will', 'I', 'have', 'been', 'studying', 'for', '2', 'hours'] },
                  { hindi: 'वह सुबह से काम कर रही होगी।', english: 'She will have been working since morning.', words: ['will', 'She', 'have', 'been', 'working', 'since', 'morning', 'and'] },
                  { hindi: 'कल रात से बारिश हो रही होगी।', english: 'It will have been raining since last night.', words: ['will', 'It', 'have', 'been', 'raining', 'since', 'last', 'night'] },
                  { hindi: 'वे 4 बजे से खेल रहे होंगे।', english: 'They will have been playing since 4 pm.', words: ['will', 'They', 'have', 'been', 'playing', 'since', '4', 'pm'] },
                  { hindi: 'मैं नहीं पढ़ रहा होऊँगा।', english: 'I will not have been studying.', words: ['will', 'I', 'not', 'have', 'been', 'studying', 'and', 'is'] },
                  { hindi: 'वह काम नहीं कर रही होगी।', english: 'She will not have been working.', words: ['will', 'She', 'not', 'have', 'been', 'working', 'and', 'is'] },
                  { hindi: 'तुम कब से पढ़ रहे होगे?', english: 'How long will you have been studying?', words: ['How', 'long', 'will', 'you', 'have', 'been', 'studying', 'and'] },
                  { hindi: 'तुम क्या कर रहे होगे?', english: 'What will you have been doing?', words: ['What', 'will', 'you', 'have', 'been', 'doing', 'and', 'is'] }
                ],
                advance: [
                  { english: 'I will have been studying for 2 hours.', hindi: 'मैं 2 घंटे से पढ़ रहा होऊँगा।', words: ['मैं', '2', 'घंटे', 'से', 'पढ़', 'रहा', 'होऊँगा', 'और'] },
                  { english: 'She will have been working since morning.', hindi: 'वह सुबह से काम कर रही होगी।', words: ['वह', 'सुबह', 'से', 'काम', 'कर', 'रही', 'होगी', 'और'] },
                  { english: 'It will have been raining since last night.', hindi: 'कल रात से बारिश हो रही होगी।', words: ['कल', 'रात', 'से', 'बारिश', 'हो', 'रही', 'होगी', 'और'] },
                  { english: 'They will have been playing since 4 pm.', hindi: 'वे 4 बजे से खेल रहे होंगे।', words: ['वे', '4', 'बजे', 'से', 'खेल', 'रहे', 'होंगे', 'और'] },
                  { english: 'I will not have been studying.', hindi: 'मैं नहीं पढ़ रहा होऊँगा।', words: ['मैं', 'नहीं', 'पढ़', 'रहा', 'होऊँगा', 'और', 'था', 'यह'] },
                  { english: 'She will not have been working.', hindi: 'वह काम नहीं कर रही होगी।', words: ['वह', 'काम', 'नहीं', 'कर', 'रही', 'होगी', 'और', 'था'] },
                  { english: 'How long will you have been studying?', hindi: 'तुम कब से पढ़ रहे होगे?', words: ['तुम', 'कब', 'से', 'पढ़', 'रहे', 'होगे', 'और', 'था'] },
                  { english: 'What will you have been doing?', hindi: 'तुम क्या कर रहे होगे?', words: ['तुम', 'क्या', 'कर', 'रहे', 'होगे', 'और', 'था', 'यह'] }
                ]
              }
            }
          ]
        }
      ]
    }
  ]
};

// ═══════════════════════════════════════════════════════════
// Global exposure
// ═══════════════════════════════════════════════════════════
if (typeof window !== 'undefined') {
  window.MODULE2 = MODULE2;
}
