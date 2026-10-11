// ═══════════════════════════════════════════════════════════
// module2.js — Module 2: Grammar Foundation
// Structure: Sentence, Clause, Tense
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
        {
          id: 'assertive',
          title: 'Assertive Sentence',
          icon: '📢',
          intro: 'Statement — साधारण वाक्य',
          definition: 'वह sentence जो किसी बात को बताता है या statement देता है। इसमें कोई सवाल नहीं, कोई आदेश नहीं — सिर्फ एक सीधी बात बताई जाती है। Assertive sentence सच (true) या झूठ (false) — दोनों हो सकता है। इसे Declarative Sentence भी कहते हैं।',
          usage: 'जब आप किसी को कोई जानकारी देना चाहते हो, किसी तथ्य (fact) को बताना चाहते हो, अपनी राय (opinion) देना चाहते हो, या किसी चीज़ का वर्णन (describe) करना चाहते हो — तब Assertive sentence use होता है।',
          rule: 'Subject + Verb + Object + Full Stop (.)',
          ruleExplain: 'Subject = जो काम करता है (जैसे: I, She, Ram) | Verb = क्रिया (जैसे: eat, go, is) | Object = जिस पर काम होता है (जैसे: rice, school) | अंत में Full Stop (.) लगाया जाता है।',
          structure: [
            { type: 'Simple (सामान्य)',        formula: 'Subject + Verb + Object + .',           example: 'I eat rice. (मैं चावल खाता हूँ।)', exampleExplain: 'I = Subject, eat = Verb, rice = Object' },
            { type: 'Negative (नकारात्मक)',    formula: 'Subject + Helping Verb + not + Verb + Object + .', example: 'I do not eat meat. (मैं मांस नहीं खाता।)', exampleExplain: 'do not = नकारात्मक शब्द' },
            { type: 'Interrogative (प्रश्न)',  formula: 'WH-word + Helping Verb + Subject + Verb + Object + ?', example: 'What do you eat? (तुम क्या खाते हो?)', exampleExplain: 'What = WH-word, do = Helping Verb' },
            { type: 'WH-Question (विस्तार)',   formula: 'WH + do/does/did + Subject + Verb + ?',  example: 'Where does she live? (वह कहाँ रहती है?)', exampleExplain: 'Where = WH-word, does = Helping Verb' }
          ],
          examples: {
            simple: [
              { en: 'I am a student.', hi: 'मैं एक छात्र हूँ।', note: 'I = Subject, am = Verb, a student = Object' },
              { en: 'She lives in Delhi.', hi: 'वह दिल्ली में रहती है।', note: 'She = Subject, lives = Verb, in Delhi = Object' },
              { en: 'The sun rises in the east.', hi: 'सूरज पूर्व में उगता है।', note: 'The sun = Subject, rises = Verb, in the east = Object' },
              { en: 'Ram eats an apple.', hi: 'राम सेब खाता है।', note: 'Ram = Subject, eats = Verb, an apple = Object' }
            ],
            negative: [
              { en: 'I am not a teacher.', hi: 'मैं शिक्षक नहीं हूँ।', note: 'am not = नकारात्मक रूप' },
              { en: 'She does not live in Mumbai.', hi: 'वह मुंबई में नहीं रहती।', note: 'does not = नकारात्मक रूप (she के लिए)' },
              { en: 'The sun does not rise in the west.', hi: 'सूरज पश्चिम में नहीं उगता।', note: 'does not = नकारात्मक रूप' },
              { en: 'Ram does not eat a banana.', hi: 'राम केला नहीं खाता।', note: 'does not = नकारात्मक रूप' }
            ],
            wh: [
              { en: 'What is your name?', hi: 'तुम्हारा नाम क्या है?', note: 'What = WH-word | is = Helping Verb' },
              { en: 'Where does she live?', hi: 'वह कहाँ रहती है?', note: 'Where = WH-word | does = Helping Verb' },
              { en: 'When does the sun rise?', hi: 'सूरज कब उगता है?', note: 'When = WH-word | does = Helping Verb' },
              { en: 'What does Ram eat?', hi: 'राम क्या खाता है?', note: 'What = WH-word | does = Helping Verb' }
            ]
          },
          practice: [
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
          ]
        },
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
            { type: 'Yes/No Question',         formula: 'Helping Verb + Subject + Main Verb + Object + ?', example: 'Are you happy? (क्या तुम खुश हो?)', exampleExplain: 'Are = Helping Verb, you = Subject' },
            { type: 'WH-Question',             formula: 'WH-word + Helping Verb + Subject + Main Verb + ?', example: 'Where do you live? (तुम कहाँ रहते हो?)', exampleExplain: 'Where = WH-word, do = Helping Verb' },
            { type: 'Negative Question',       formula: 'Helping Verb + not + Subject + Main Verb + ?',     example: 'Are you not happy? (क्या तुम खुश नहीं हो?)', exampleExplain: 'not = नकारात्मक' },
            { type: 'WH + Negative',           formula: 'WH-word + Helping Verb + not + Subject + ?',        example: 'Why are you not coming? (तुम क्यों नहीं आ रहे?)', exampleExplain: 'Why + are + not' }
          ],
          examples: {
            simple: [
              { en: 'What is your name?', hi: 'तुम्हारा नाम क्या है?', note: 'What = WH-word' },
              { en: 'Where do you live?', hi: 'तुम कहाँ रहते हो?', note: 'Where = WH-word, do = Helping' },
              { en: 'Are you happy?', hi: 'क्या तुम खुश हो?', note: 'Are = Helping, Yes/No question' },
              { en: 'Can you swim?', hi: 'क्या तुम तैर सकते हो?', note: 'Can = Helping' }
            ],
            negative: [
              { en: 'Are you not happy?', hi: 'क्या तुम खुश नहीं हो?', note: 'not के साथ नकारात्मक प्रश्न' },
              { en: 'Does she not sing?', hi: 'क्या वह नहीं गाती?', note: 'not के साथ नकारात्मक प्रश्न' },
              { en: 'Did you not go?', hi: 'क्या तुम नहीं गए?', note: 'not के साथ नकारात्मक प्रश्न' },
              { en: 'Will he not come?', hi: 'क्या वह नहीं आएगा?', note: 'not के साथ नकारात्मक प्रश्न' }
            ],
            wh: [
              { en: 'Why are you late?', hi: 'तुम देर से क्यों आए?', note: 'Why = WH-word (कारण)' },
              { en: 'How do you do this?', hi: 'तुम यह कैसे करते हो?', note: 'How = WH-word (तरीका)' },
              { en: 'When will you come?', hi: 'तुम कब आओगे?', note: 'When = WH-word (समय)' },
              { en: 'Who is your teacher?', hi: 'तुम्हारे शिक्षक कौन हैं?', note: 'Who = WH-word (व्यक्ति)' }
            ]
          },
          practice: [
            { type: 'mcq', q: 'Which is interrogative?', options: ['I am fine.', 'How are you?', 'Sit down.', 'Wow!'], answer: 'How are you?' },
            { type: 'mcq', q: 'Which is interrogative?', options: ['Where is my pen?', 'This is my pen.', 'Give me pen.', 'Nice pen!'], answer: 'Where is my pen?' },
            { type: 'mcq', q: 'Which is interrogative?', options: ['I love tea.', 'Do you love tea?', 'Love tea!', 'Tea is good.'], answer: 'Do you love tea?' },
            { type: 'mcq', q: 'Which is interrogative?', options: ['She sings well.', 'Does she sing well?', 'Sing well!', 'What a singer!'], answer: 'Does she sing well?' },
            { type: 'mcq', q: 'Which is interrogative?', options: ['Close the door.', 'Is the door closed?', 'The door is closed.', 'Door closed!'], answer: 'Is the door closed?' },
            { type: 'mcq', q: 'Interrogative sentence ends with?', options: ['.', '!', '?', ','], answer: '?' },
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
          ]
        },
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
            { type: 'Command (आदेश)',         formula: 'Verb + Object + .',                    example: 'Close the door. (दरवाज़ा बंद करो।)', exampleExplain: 'Close = Verb, the door = Object, (You) hidden' },
            { type: 'Request (निवेदन)',        formula: 'Please + Verb + Object + .',          example: 'Please help me. (कृपया मेरी मदद करो।)', exampleExplain: 'Please = विनम्रता, help = Verb' },
            { type: 'Advice (सलाह)',           formula: 'Always / Never + Verb + Object + .',  example: 'Always speak the truth. (हमेशा सच बोलो।)', exampleExplain: 'Always = हमेशा, speak = Verb' },
            { type: 'Prohibition (मना)',       formula: 'Do not + Verb + Object + .',          example: 'Do not smoke here. (यहाँ धूम्रपान न करें।)', exampleExplain: 'Do not = मना करना' }
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
          practice: [
            { type: 'mcq', q: 'Which is imperative?', options: ['I am here.', 'Come here.', 'Are you here?', 'Wow, here!'], answer: 'Come here.' },
            { type: 'mcq', q: 'Which is imperative?', options: ['She sings.', 'Please sing a song.', 'Does she sing?', 'What a song!'], answer: 'Please sing a song.' },
            { type: 'mcq', q: 'Which is imperative?', options: ['Sit down.', 'He sits.', 'Is he sitting?', 'How he sits!'], answer: 'Sit down.' },
            { type: 'mcq', q: 'Which is imperative?', options: ['I eat rice.', 'Eat your food.', 'Do you eat rice?', 'What a meal!'], answer: 'Eat your food.' },
            { type: 'mcq', q: 'Which is imperative?', options: ['Study hard.', 'He studies hard.', 'Does he study?', 'How hard!'], answer: 'Study hard.' },
            { type: 'mcq', q: 'Imperative sentence mein subject kya hota hai?', options: ['I', 'You (hidden)', 'He', 'No subject'], answer: 'You (hidden)' },
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
          ]
        },
        {
          id: 'exclamatory',
          title: 'Exclamatory Sentence',
          icon: '😲',
          intro: 'Strong Feeling — अचानक भावना',
          definition: 'वह sentence जो अचानक हुई तीव्र भावना (खुशी, दुख, आश्चर्य, क्रोध, विस्मय) को प्रकट करता है। इसमें भावना ज़्यादा होती है, सूचना कम। इसका अंत हमेशा Exclamation Mark (!) से होता है। इसमें What, How, Alas, Wow जैसे शब्द use होते हैं।',
          usage: 'जब आप अचानक खुश हों (Wow!), दुखी हों (Alas!), आश्चर्य में हों (What a surprise!), या गुस्से में हों — तब Exclamatory sentence use होता है। भावनाओं को तीव्रता से व्यक्त करने के लिए।',
          rule: 'What / How / Alas / Wow + ... + ! (Exclamation Mark)',
          ruleExplain: 'What = आश्चर्य या भावना जताने के लिए (What a beautiful day!) | How = गुण बताने के लिए (How nice!) | Alas = दुख जताने के लिए | अंत में ! लगाया जाता है।',
          structure: [
            { type: 'What + Noun Phrase',      formula: 'What + a/an + Adjective + Noun + !', example: 'What a beautiful day! (क्या सुंदर दिन है!)', exampleExplain: 'What + a + beautiful + day' },
            { type: 'How + Adjective',         formula: 'How + Adjective + Subject + Verb + !', example: 'How nice she is! (वह कितनी अच्छी है!)', exampleExplain: 'How + nice + she + is' },
            { type: 'Alas (दुख)',              formula: 'Alas! + Subject + Verb + ... + !',     example: 'Alas! I lost my wallet. (हाय! मेरा बटुआ खो गया।)', exampleExplain: 'Alas = दुख का भाव' },
            { type: 'Wow (खुशी)',              formula: 'Wow! + Subject + Verb + ... + !',     example: 'Wow! That is amazing! (वाह! यह अद्भुत है!)', exampleExplain: 'Wow = खुशी का भाव' }
          ],
          examples: {
            simple: [
              { en: 'What a beautiful day!', hi: 'क्या सुंदर दिन है!', note: 'What + a + beautiful + day' },
              { en: 'How nice she is!', hi: 'वह कितनी अच्छी है!', note: 'How + nice + she + is' },
              { en: 'Wow! That is amazing!', hi: 'वाह! यह अद्भुत है!', note: 'Wow = खुशी का भाव' },
              { en: 'Alas! I lost my wallet.', hi: 'हाय! मेरा बटुआ खो गया।', note: 'Alas = दुख का भाव' }
            ],
            negative: [
              { en: 'What a pity! He did not come.', hi: 'क्या अफसोस! वह नहीं आया।', note: 'What a pity = दुख' },
              { en: 'Alas! She cannot walk.', hi: 'हाय! वह चल नहीं सकती।', note: 'Alas = दुख' },
              { en: 'How sad! He is not happy.', hi: 'कितना दुखद! वह खुश नहीं है।', note: 'How sad = दुख' },
              { en: 'What a shame! They did not win.', hi: 'क्या शर्म की बात! वे नहीं जीते।', note: 'What a shame = लज्जा' }
            ],
            wh: [
              { en: 'How beautiful the sunset is!', hi: 'सूर्यास्त कितना सुंदर है!', note: 'How + beautiful' },
              { en: 'What a wonderful performance!', hi: 'क्या शानदार प्रदर्शन!', note: 'What + a + wonderful' },
              { en: 'How fast he runs!', hi: 'वह कितनी तेज़ दौड़ता है!', note: 'How + fast + he + runs' },
              { en: 'What a brilliant idea!', hi: 'क्या शानदार विचार!', note: 'What + a + brilliant + idea' }
            ]
          },
          practice: [
            { type: 'mcq', q: 'Which is exclamatory?', options: ['I am happy.', 'Am I happy?', 'Be happy.', 'What a happy day!'], answer: 'What a happy day!' },
            { type: 'mcq', q: 'Which is exclamatory?', options: ['How beautiful!', 'She is beautiful.', 'Is she beautiful?', 'Be beautiful.'], answer: 'How beautiful!' },
            { type: 'mcq', q: 'Which is exclamatory?', options: ['I am tired.', 'Alas! I am tired.', 'Am I tired?', 'Do not be tired.'], answer: 'Alas! I am tired.' },
            { type: 'mcq', q: 'Which is exclamatory?', options: ['Wow! Great job!', 'He did a great job.', 'Did he do it?', 'Do it.'], answer: 'Wow! Great job!' },
            { type: 'mcq', q: 'Which is exclamatory?', options: ['What a lovely song!', 'She sings well.', 'Does she sing?', 'Sing now.'], answer: 'What a lovely song!' },
            { type: 'mcq', q: 'Exclamatory sentence ends with?', options: ['.', '?', '!', ','], answer: '!' },
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
          ]
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
        {
          id: 'independent',
          title: 'Independent Clause',
          icon: '🟢',
          intro: 'वह clause जो अपने आप में पूरा sentence बन सके',
          definition: 'वह clause जो अपने आप में पूर्ण वाक्य बन सके — इसका अपना subject और verb हो, और अर्थ पूरा हो। जब आप इसे अकेले बोलो, तो सुनने वाले को पूरी बात समझ आ जाए। इसे Main Clause भी कहते हैं क्योंकि यह मुख्य विचार रखता है।',
          usage: 'Independent clause अकेले sentence बन सकता है — इसलिए इसे Simple Sentence भी कहा जाता है। Compound और Complex sentences में भी independent clause होता है। जब भी आप कोई पूरा वाक्य बोलते हो जिसमें subject + verb + पूरा अर्थ हो — वह independent clause है।',
          rule: 'Subject + Verb + Object — complete meaning के साथ',
          ruleExplain: 'Subject = कर्ता (I, She, Ram) | Verb = क्रिया (eat, go, is) | Object = कर्म (rice, school) — तीनों मिलकर पूरा अर्थ देते हैं। जैसे: "I love India" — इसमें subject (I), verb (love), object (India) — पूरा अर्थ।',
          structure: [
            { type: 'Simple Independent',      formula: 'Subject + Verb + Object',          example: 'I love India. (मुझे भारत से प्यार है।)', exampleExplain: 'I + love + India = पूरा वाक्य' },
            { type: 'With Adjective',          formula: 'Subject + Verb + Adjective',        example: 'She is beautiful. (वह सुंदर है।)', exampleExplain: 'She + is + beautiful' },
            { type: 'With Adverb',             formula: 'Subject + Verb + Adverb',           example: 'He runs fast. (वह तेज़ दौड़ता है।)', exampleExplain: 'He + runs + fast' },
            { type: 'Complete Complex',        formula: 'Independent + Conjunction + Dependent', example: 'I went home because I was tired. (मैं घर गया क्योंकि मैं थका था।)', exampleExplain: '"I went home" = Independent clause' }
          ],
          examples: {
            simple: [
              { en: 'I love India.', hi: 'मुझे भारत से प्यार है।', note: 'I + love + India' },
              { en: 'She sings well.', hi: 'वह अच्छा गाती है।', note: 'She + sings + well' },
              { en: 'The sun rises in the east.', hi: 'सूरज पूर्व में उगता है।', note: 'The sun + rises + in the east' },
              { en: 'Ram eats rice.', hi: 'राम चावल खाता है।', note: 'Ram + eats + rice' }
            ],
            negative: [
              { en: 'I do not love junk food.', hi: 'मुझे जंक फूड पसंद नहीं।', note: 'do not = नकारात्मक' },
              { en: 'She does not sing badly.', hi: 'वह बुरा नहीं गाती।', note: 'does not = नकारात्मक' },
              { en: 'The sun does not rise in the west.', hi: 'सूरज पश्चिम में नहीं उगता।', note: 'does not = नकारात्मक' },
              { en: 'Ram does not eat meat.', hi: 'राम मांस नहीं खाता।', note: 'does not = नकारात्मक' }
            ],
            wh: [
              { en: 'I know what you want.', hi: 'मैं जानता हूँ तुम क्या चाहते हो।', note: '"I know" = independent clause' },
              { en: 'Tell me where he lives.', hi: 'बताओ वह कहाँ रहता है।', note: '"Tell me" = independent clause' },
              { en: 'I know when she will come.', hi: 'मैं जानता हूँ वह कब आएगी।', note: '"I know" = independent' },
              { en: 'Ask him what he needs.', hi: 'उससे पूछो उसे क्या चाहिए।', note: '"Ask him" = independent' }
            ]
          },
          practice: [
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
          ]
        },
        {
          id: 'dependent',
          title: 'Dependent Clause',
          icon: '🔴',
          intro: 'वह clause जो अकेले पूरा sentence नहीं बन सकता',
          definition: 'वह clause जो अकेले पूरा अर्थ नहीं देता — इसके लिए एक independent clause की ज़रूरत होती है। इसमें subject और verb तो होते हैं, लेकिन अर्थ अधूरा रह जाता है। इसे Subordinate Clause भी कहते हैं। जब आप इसे अकेले बोलो, तो सुनने वाले को लगेगा कि बात अधूरी है।',
          usage: 'जब आप दो ideas को जोड़ना चाहते हो, किसी कारण (because), समय (when), शर्त (if), या विरोध (although) को व्यक्त करना चाहते हो — तब dependent clause use होता है। यह अकेले नहीं आता — हमेशा independent clause के साथ मिलकर complex sentence बनाता है।',
          rule: 'Subordinating Conjunction (because, if, when, although...) + Subject + Verb',
          ruleExplain: 'Subordinating Conjunction = जोड़ने वाला शब्द (because, if, when, although, since, until) | Subject = कर्ता | Verb = क्रिया | अकेले बोलने पर अधूरा लगता है, independent clause के साथ मिलकर पूरा होता है।',
          structure: [
            { type: 'Cause (कारण)',            formula: 'Because + Subject + Verb',              example: 'Because I was tired... (क्योंकि मैं थका था...)', exampleExplain: 'Because = कारण | अकेले अधूरा' },
            { type: 'Time (समय)',              formula: 'When + Subject + Verb',                example: 'When he came... (जब वह आया...)', exampleExplain: 'When = समय | अकेले अधूरा' },
            { type: 'Condition (शर्त)',        formula: 'If + Subject + Verb',                  example: 'If it rains... (अगर बारिश हो...)', exampleExplain: 'If = शर्त | अकेले अधूरा' },
            { type: 'Contrast (विरोध)',        formula: 'Although + Subject + Verb',            example: 'Although she tried... (हालांकि उसने कोशिश की...)', exampleExplain: 'Although = विरोध | अकेले अधूरा' }
          ],
          examples: {
            simple: [
              { en: 'Because I was tired...', hi: 'क्योंकि मैं थका था...', note: 'Because = कारण, अकेले अधूरा' },
              { en: 'When he came...', hi: 'जब वह आया...', note: 'When = समय, अकेले अधूरा' },
              { en: 'If it rains...', hi: 'अगर बारिश हो...', note: 'If = शर्त, अकेले अधूरा' },
              { en: 'Although she tried...', hi: 'हालांकि उसने कोशिश की...', note: 'Although = विरोध, अकेले अधूरा' }
            ],
            negative: [
              { en: 'Because I was not ready...', hi: 'क्योंकि मैं तैयार नहीं था...', note: 'not = नकारात्मक' },
              { en: 'If you do not study...', hi: 'अगर तुम पढ़ोगे नहीं...', note: 'do not = नकारात्मक' },
              { en: 'When she does not come...', hi: 'जब वह नहीं आएगी...', note: 'does not = नकारात्मक' },
              { en: 'Although he is not rich...', hi: 'हालांकि वह अमीर नहीं है...', note: 'is not = नकारात्मक' }
            ],
            wh: [
              { en: 'What I said was true.', hi: 'जो मैंने कहा सच था।', note: '"What I said" = dependent, "was true" = independent' },
              { en: 'Wherever you go, I will follow.', hi: 'जहाँ भी तुम जाओगे, मैं आऊँगा।', note: '"Wherever you go" = dependent' },
              { en: 'Whatever you do, do well.', hi: 'जो भी करो, अच्छा करो।', note: '"Whatever you do" = dependent' },
              { en: 'Whichever you choose, I agree.', hi: 'तुम जो चुनो, मैं मानता हूँ।', note: '"Whichever you choose" = dependent' }
            ]
          },
          practice: [
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
          ]
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
        // ─── PRESENT ───
        {
          id: 'present',
          title: 'Present Tense',
          icon: '🟢',
          intro: 'वर्तमान काल — अभी हो रहा है',
          subtopics: [
            {
              id: 'present-simple',
              title: 'Present Simple / Indefinite',
              icon: '1️⃣',
              intro: 'आदत, सच या नियमित काम',
              recognition: 'जब काम रोज़ होता है (daily routine), आदत है (habit), या universal truth हो (सच बात) — तब Present Simple use होता है। Time words: every day, always, usually, often, never, sometimes, generally.',
              definition: 'Present Simple Tense वह tense है जो बताता है कि कोई काम हमेशा होता है, रोज़ होता है, या एक सच्चाई है। यह अभी हो रहा हो ऐसा ज़रूरी नहीं — यह general बात है। जैसे: "I eat rice" — इसका मतलब है कि मैं चावल खाता हूँ (रोज़ या आमतौर पर), न कि अभी खा रहा हूँ।',
              usage: 'Daily routine बताने के लिए (I wake up at 6 am), habits बताने के लिए (She smokes), universal truths के लिए (Sun rises in east), fixed schedules के लिए (Train leaves at 5 pm), feelings/opinions के लिए (I like tea) — इन सब में Present Simple use होता है।',
              rule: 'Subject + V1 (या V5) + Object',
              ruleExplain: 'V1 = Verb का base form (eat, go, play) | V5 = Verb + s/es (He/She/It के साथ: eats, goes, plays) | I/We/You/They → V1 | He/She/It → V5',
              structure: [
                { type: 'Simple (सामान्य)',        formula: 'Subject + V1/V5 + Object',           example: 'I eat rice. (मैं चावल खाता हूँ।)', exampleExplain: 'I = Subject, eat = V1, rice = Object' },
                { type: 'Negative (नकारात्मक)',    formula: 'Subject + do/does + not + V1 + Object', example: 'I do not eat meat. (मैं मांस नहीं खाता।)', exampleExplain: 'do not = नकारात्मक' },
                { type: 'Interrogative (प्रश्न)',  formula: 'Do/Does + Subject + V1 + Object + ?', example: 'Do you eat rice? (क्या तुम चावल खाते हो?)', exampleExplain: 'Do = Helping Verb' },
                { type: 'WH-Question',             formula: 'WH + do/does + Subject + V1 + ?',    example: 'What do you eat? (तुम क्या खाते हो?)', exampleExplain: 'What = WH-word' }
              ],
              examples: {
                simple: [
                  { en: 'I eat rice every day.', hi: 'मैं रोज़ चावल खाता हूँ।', note: 'I + eat (V1) + rice' },
                  { en: 'She goes to school.', hi: 'वह स्कूल जाती है।', note: 'She + goes (V5) + to school' },
                  { en: 'The sun rises in the east.', hi: 'सूरज पूर्व में उगता है।', note: 'Universal truth' },
                  { en: 'We play cricket on Sundays.', hi: 'हम रविवार को क्रिकेट खेलते हैं।', note: 'We + play (V1) + cricket' }
                ],
                negative: [
                  { en: 'I do not eat meat.', hi: 'मैं मांस नहीं खाता।', note: 'do not + eat (V1)' },
                  { en: 'She does not go to office.', hi: 'वह ऑफिस नहीं जाती।', note: 'does not + go (V1)' },
                  { en: 'The sun does not rise in the west.', hi: 'सूरज पश्चिम में नहीं उगता।', note: 'does not + rise' },
                  { en: 'They do not play cricket.', hi: 'वे क्रिकेट नहीं खेलते।', note: 'do not + play' }
                ],
                wh: [
                  { en: 'What do you eat?', hi: 'तुम क्या खाते हो?', note: 'What + do + you + eat' },
                  { en: 'Where does she go?', hi: 'वह कहाँ जाती है?', note: 'Where + does + she + go' },
                  { en: 'When does the sun rise?', hi: 'सूरज कब उगता है?', note: 'When + does + the sun + rise' },
                  { en: 'Why do they play cricket?', hi: 'वे क्रिकेट क्यों खेलते हैं?', note: 'Why + do + they + play' }
                ]
              },
              practice: [
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
              ]
            },
            {
              id: 'present-continuous',
              title: 'Present Continuous',
              icon: '2️⃣',
              intro: 'अभी हो रहा है',
              recognition: 'जब काम अभी, बोलते समय, चल रहा है — तब Present Continuous use होता है। Time words: now, at this moment, currently, at present, look!, listen!.',
              definition: 'Present Continuous Tense वह tense है जो बताता है कि कोई काम अभी, इसी वक्त हो रहा है। जब आप बात कर रहे हो, उस समय काम चल रहा है। जैसे: "I am eating rice" — इसका मतलब है कि अभी, इस वक्त, मैं चावल खा रहा हूँ।',
              usage: 'जो काम अभी चल रहा है (I am reading), जो temporary है (She is staying with us), जो आने वाले future के लिए तय है (I am meeting him tomorrow), बदलती situation के लिए (The weather is getting cold) — इन सब में Present Continuous use होता है।',
              rule: 'Subject + is/am/are + V-ing (Verb + ing) + Object',
              ruleExplain: 'is/am/are = Helping Verb (I → am, He/She/It → is, We/You/They → are) | V-ing = Verb + ing (eat → eating, go → going, play → playing)',
              structure: [
                { type: 'Simple',                  formula: 'Subject + is/am/are + V-ing + Object',  example: 'I am eating rice. (मैं चावल खा रहा हूँ।)', exampleExplain: 'I + am + eating + rice' },
                { type: 'Negative',                formula: 'Subject + is/am/are + not + V-ing + Object', example: 'I am not eating rice. (मैं चावल नहीं खा रहा।)', exampleExplain: 'am not = नकारात्मक' },
                { type: 'Interrogative',           formula: 'Is/Am/Are + Subject + V-ing + Object + ?', example: 'Are you eating rice? (क्या तुम चावल खा रहे हो?)', exampleExplain: 'Are = Helping Verb' },
                { type: 'WH-Question',             formula: 'WH + is/am/are + Subject + V-ing + ?',   example: 'What are you eating? (तुम क्या खा रहे हो?)', exampleExplain: 'What + are + you + eating' }
              ],
              examples: {
                simple: [
                  { en: 'I am eating rice now.', hi: 'मैं अभी चावल खा रहा हूँ।', note: 'I + am + eating' },
                  { en: 'She is reading a book.', hi: 'वह किताब पढ़ रही है।', note: 'She + is + reading' },
                  { en: 'They are playing football.', hi: 'वे फुटबॉल खेल रहे हैं।', note: 'They + are + playing' },
                  { en: 'It is raining outside.', hi: 'बाहर बारिश हो रही है।', note: 'It + is + raining' }
                ],
                negative: [
                  { en: 'I am not eating rice.', hi: 'मैं चावल नहीं खा रहा।', note: 'am not = नकारात्मक' },
                  { en: 'She is not reading a book.', hi: 'वह किताब नहीं पढ़ रही।', note: 'is not = नकारात्मक' },
                  { en: 'They are not playing football.', hi: 'वे फुटबॉल नहीं खेल रहे।', note: 'are not = नकारात्मक' },
                  { en: 'It is not raining.', hi: 'बारिश नहीं हो रही।', note: 'is not = नकारात्मक' }
                ],
                wh: [
                  { en: 'What are you eating?', hi: 'तुम क्या खा रहे हो?', note: 'What + are + you + eating' },
                  { en: 'Where is she going?', hi: 'वह कहाँ जा रही है?', note: 'Where + is + she + going' },
                  { en: 'Why are they playing?', hi: 'वे क्यों खेल रहे हैं?', note: 'Why + are + they + playing' },
                  { en: 'When are you coming?', hi: 'तुम कब आ रहे हो?', note: 'When + are + you + coming' }
                ]
              },
              practice: [
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
              ]
            },
            {
              id: 'present-perfect',
              title: 'Present Perfect',
              icon: '3️⃣',
              intro: 'काम पूरा हो चुका है (अभी-अभी)',
              recognition: 'जब काम अभी-अभी पूरा हुआ या जिसका असर अभी भी है। Time words: just, already, yet, ever, never, since, for, recently.',
              definition: 'Present Perfect Tense वह tense है जो बताता है कि कोई काम अभी-अभी पूरा हुआ है, या उसका असर अभी भी मौजूद है। यह past और present के बीच का पुल है। जैसे: "I have eaten" — इसका मतलब है कि मैंने खाना खा लिया है, और अब मुझे भूख नहीं है (असर अभी है)।',
              usage: 'जो काम अभी-अभी पूरा हुआ (I have just finished), जीवन के अनुभव बताने के लिए (I have visited London), जो काम अभी तक नहीं हुआ (I have not seen him yet), जो काम past में शुरू होकर अभी तक चल रहा है (I have lived here for 5 years) — इन सब में Present Perfect use होता है।',
              rule: 'Subject + has/have + V3 (Past Participle) + Object',
              ruleExplain: 'has/have = Helping Verb (I/We/You/They → have, He/She/It → has) | V3 = Verb का third form (eat → eaten, go → gone, write → written)',
              structure: [
                { type: 'Simple',                  formula: 'Subject + has/have + V3 + Object',         example: 'I have eaten rice. (मैंने चावल खा लिया।)', exampleExplain: 'I + have + eaten (V3)' },
                { type: 'Negative',                formula: 'Subject + has/have + not + V3 + Object',   example: 'I have not eaten rice. (मैंने चावल नहीं खाया।)', exampleExplain: 'have not = नकारात्मक' },
                { type: 'Interrogative',           formula: 'Has/Have + Subject + V3 + Object + ?',     example: 'Have you eaten rice? (क्या तुमने चावल खाया?)', exampleExplain: 'Have + you + eaten' },
                { type: 'WH-Question',             formula: 'WH + has/have + Subject + V3 + ?',         example: 'What have you eaten? (तुमने क्या खाया?)', exampleExplain: 'What + have + you + eaten' }
              ],
              examples: {
                simple: [
                  { en: 'I have eaten my lunch.', hi: 'मैंने दोपहर का खाना खा लिया।', note: 'have + eaten (V3)' },
                  { en: 'She has finished her work.', hi: 'उसने अपना काम पूरा कर लिया।', note: 'has + finished' },
                  { en: 'They have gone to Delhi.', hi: 'वे दिल्ली गए हैं।', note: 'have + gone' },
                  { en: 'I have never seen a lion.', hi: 'मैंने कभी शेर नहीं देखा।', note: 'have + never + seen' }
                ],
                negative: [
                  { en: 'I have not eaten my lunch.', hi: 'मैंने खाना नहीं खाया।', note: 'have not + eaten' },
                  { en: 'She has not finished her work.', hi: 'उसने काम पूरा नहीं किया।', note: 'has not + finished' },
                  { en: 'They have not gone to Delhi.', hi: 'वे दिल्ली नहीं गए।', note: 'have not + gone' },
                  { en: 'I have not seen a lion.', hi: 'मैंने शेर नहीं देखा।', note: 'have not + seen' }
                ],
                wh: [
                  { en: 'What have you eaten?', hi: 'तुमने क्या खाया?', note: 'What + have + you + eaten' },
                  { en: 'Where has she gone?', hi: 'वह कहाँ गई है?', note: 'Where + has + she + gone' },
                  { en: 'Why have they left?', hi: 'वे क्यों गए हैं?', note: 'Why + have + they + left' },
                  { en: 'How long have you lived here?', hi: 'तुम यहाँ कब से रहते हो?', note: 'How long + have + you + lived' }
                ]
              },
              practice: [
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
              ]
            },
            {
              id: 'present-perfect-continuous',
              title: 'Present Perfect Continuous',
              icon: '4️⃣',
              intro: 'काम पहले से चल रहा है और अभी भी चल रहा है',
              recognition: 'जब काम past में शुरू हुआ और अभी भी जारी है। Time words: since (point of time), for (period of time), how long.',
              definition: 'Present Perfect Continuous Tense वह tense है जो बताता है कि कोई काम past में शुरू हुआ, और अभी भी चल रहा है। यह duration (अवधि) बताता है। जैसे: "I have been studying for 2 hours" — इसका मतलब है कि मैं 2 घंटे से पढ़ रहा हूँ, और अभी भी पढ़ रहा हूँ।',
              usage: 'जो काम past में शुरू होकर अभी भी जारी है (I have been waiting for you), जिसकी अवधि बतानी हो (She has been working since morning), जो काम बार-बार हो रहा है (He has been calling you) — इन सब में Present Perfect Continuous use होता है।',
              rule: 'Subject + has/have been + V-ing + since/for + time',
              ruleExplain: 'has/have been = Helping Verb | V-ing = Verb + ing | since = point of time (since morning, since 2020) | for = period of time (for 2 hours, for 5 years)',
              structure: [
                { type: 'Simple',                  formula: 'Subject + has/have been + V-ing + since/for', example: 'I have been eating for 2 hours. (मैं 2 घंटे से खा रहा हूँ।)', exampleExplain: 'have been + eating + for 2 hours' },
                { type: 'Negative',                formula: 'Subject + has/have not been + V-ing',        example: 'I have not been eating. (मैं नहीं खा रहा।)', exampleExplain: 'have not been + eating' },
                { type: 'Interrogative',           formula: 'Has/Have + Subject + been + V-ing + ?',      example: 'Have you been eating? (क्या तुम खा रहे हो?)', exampleExplain: 'Have + you + been + eating' },
                { type: 'WH-Question',             formula: 'WH + has/have + Subject + been + V-ing + ?', example: 'How long have you been eating? (तुम कब से खा रहे हो?)', exampleExplain: 'How long + have + you + been + eating' }
              ],
              examples: {
                simple: [
                  { en: 'I have been studying for 2 hours.', hi: 'मैं 2 घंटे से पढ़ रहा हूँ।', note: 'have been + studying + for 2 hours' },
                  { en: 'She has been working since morning.', hi: 'वह सुबह से काम कर रही है।', note: 'has been + working + since morning' },
                  { en: 'It has been raining since last night.', hi: 'कल रात से बारिश हो रही है।', note: 'has been + raining + since last night' },
                  { en: 'They have been playing since 4 pm.', hi: 'वे 4 बजे से खेल रहे हैं।', note: 'have been + playing + since 4 pm' }
                ],
                negative: [
                  { en: 'I have not been studying.', hi: 'मैं पढ़ नहीं रहा।', note: 'have not been + studying' },
                  { en: 'She has not been working.', hi: 'वह काम नहीं कर रही।', note: 'has not been + working' },
                  { en: 'It has not been raining.', hi: 'बारिश नहीं हो रही।', note: 'has not been + raining' },
                  { en: 'They have not been playing.', hi: 'वे नहीं खेल रहे।', note: 'have not been + playing' }
                ],
                wh: [
                  { en: 'How long have you been studying?', hi: 'तुम कब से पढ़ रहे हो?', note: 'How long + have + you + been + studying' },
                  { en: 'Why has she been crying?', hi: 'वह क्यों रो रही है?', note: 'Why + has + she + been + crying' },
                  { en: 'Since when have you been waiting?', hi: 'तुम कब से इंतज़ार कर रहे हो?', note: 'Since when + have + you + been + waiting' },
                  { en: 'What have you been doing?', hi: 'तुम क्या कर रहे हो?', note: 'What + have + you + been + doing' }
                ]
              },
              practice: [
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
              ]
            }
          ]
        },
        // ─── PAST ───
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
              recognition: 'जब काम past में एक खास समय पर पूरा हो गया। Time words: yesterday, last week, last night, in 2010, ago, then.',
              definition: 'Past Simple Tense वह tense है जो बताता है कि कोई काम past में किसी खास समय पर हुआ और पूरा हो गया। अब वह काम खत्म है। जैसे: "I ate rice yesterday" — इसका मतलब है कि कल मैंने चावल खाया (अब खत्म)।',
              usage: 'जो काम past में किसी खास समय पर हुआ और पूरा हो गया (I visited Delhi last year), past की आदत बताने के लिए (She always came late), past की series of events के लिए (He woke up, brushed, and went to school) — इन सब में Past Simple use होता है।',
              rule: 'Subject + V2 (Past form) + Object',
              ruleExplain: 'V2 = Verb का second form (eat → ate, go → went, play → played) | Regular verbs में -ed जोड़ते हैं (play → played) | Irregular verbs बदल जाते हैं (go → went, eat → ate)',
              structure: [
                { type: 'Simple',                  formula: 'Subject + V2 + Object',                   example: 'I ate rice. (मैंने चावल खाया।)', exampleExplain: 'I + ate (V2) + rice' },
                { type: 'Negative',                formula: 'Subject + did not + V1 + Object',         example: 'I did not eat rice. (मैंने चावल नहीं खाया।)', exampleExplain: 'did not + eat (V1)' },
                { type: 'Interrogative',           formula: 'Did + Subject + V1 + Object + ?',         example: 'Did you eat rice? (क्या तुमने चावल खाया?)', exampleExplain: 'Did + you + eat' },
                { type: 'WH-Question',             formula: 'WH + did + Subject + V1 + ?',             example: 'What did you eat? (तुमने क्या खाया?)', exampleExplain: 'What + did + you + eat' }
              ],
              examples: {
                simple: [
                  { en: 'I ate rice yesterday.', hi: 'मैंने कल चावल खाया।', note: 'I + ate (V2) + rice' },
                  { en: 'She went to school.', hi: 'वह स्कूल गई।', note: 'She + went (V2) + to school' },
                  { en: 'They played football.', hi: 'उन्होंने फुटबॉल खेला।', note: 'They + played (V2) + football' },
                  { en: 'It rained heavily last night.', hi: 'कल रात तेज़ बारिश हुई।', note: 'It + rained + heavily' }
                ],
                negative: [
                  { en: 'I did not eat rice.', hi: 'मैंने चावल नहीं खाया।', note: 'did not + eat (V1)' },
                  { en: 'She did not go to school.', hi: 'वह स्कूल नहीं गई।', note: 'did not + go (V1)' },
                  { en: 'They did not play football.', hi: 'उन्होंने फुटबॉल नहीं खेला।', note: 'did not + play (V1)' },
                  { en: 'It did not rain yesterday.', hi: 'कल बारिश नहीं हुई।', note: 'did not + rain (V1)' }
                ],
                wh: [
                  { en: 'What did you eat?', hi: 'तुमने क्या खाया?', note: 'What + did + you + eat' },
                  { en: 'Where did she go?', hi: 'वह कहाँ गई?', note: 'Where + did + she + go' },
                  { en: 'When did they play?', hi: 'वे कब खेले?', note: 'When + did + they + play' },
                  { en: 'Why did it rain?', hi: 'बारिश क्यों हुई?', note: 'Why + did + it + rain' }
                ]
              },
              practice: [
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
              ]
            },
            {
              id: 'past-continuous',
              title: 'Past Continuous',
              icon: '2️⃣',
              intro: 'पहले चल रहा था',
              recognition: 'जब काम past में किसी खास समय चल रहा था (जारी था)। Time words: at 5 pm yesterday, while, when, all day.',
              definition: 'Past Continuous Tense वह tense है जो बताता है कि कोई काम past में किसी खास समय पर चल रहा था (जारी था)। यह उस काम की अवधि बताता है। जैसे: "I was eating rice at 8 pm" — इसका मतलब है कि 8 बजे मैं चावल खा रहा था (उस वक्त काम जारी था)।',
              usage: 'जो काम past में किसी खास समय चल रहा था (I was reading at 9 pm), जब दो काम एक साथ past में चल रहे थे (I was cooking while she was reading), जब कोई काम past में चल रहा था और बीच में दूसरा काम हुआ (I was sleeping when he called) — इन सब में Past Continuous use होता है।',
              rule: 'Subject + was/were + V-ing + Object',
              ruleExplain: 'was/were = Helping Verb (I/He/She/It → was, We/You/They → were) | V-ing = Verb + ing (eat → eating)',
              structure: [
                { type: 'Simple',                  formula: 'Subject + was/were + V-ing + Object',     example: 'I was eating rice. (मैं चावल खा रहा था।)', exampleExplain: 'I + was + eating' },
                { type: 'Negative',                formula: 'Subject + was/were + not + V-ing',        example: 'I was not eating rice. (मैं चावल नहीं खा रहा था।)', exampleExplain: 'was not + eating' },
                { type: 'Interrogative',           formula: 'Was/Were + Subject + V-ing + ?',          example: 'Were you eating rice? (क्या तुम चावल खा रहे थे?)', exampleExplain: 'Were + you + eating' },
                { type: 'WH-Question',             formula: 'WH + was/were + Subject + V-ing + ?',     example: 'What were you eating? (तुम क्या खा रहे थे?)', exampleExplain: 'What + were + you + eating' }
              ],
              examples: {
                simple: [
                  { en: 'I was eating rice at 8 pm.', hi: 'मैं 8 बजे चावल खा रहा था।', note: 'I + was + eating' },
                  { en: 'She was reading a book.', hi: 'वह किताब पढ़ रही थी।', note: 'She + was + reading' },
                  { en: 'They were playing cricket.', hi: 'वे क्रिकेट खेल रहे थे।', note: 'They + were + playing' },
                  { en: 'It was raining all night.', hi: 'पूरी रात बारिश हो रही थी।', note: 'It + was + raining' }
                ],
                negative: [
                  { en: 'I was not eating rice.', hi: 'मैं चावल नहीं खा रहा था।', note: 'was not + eating' },
                  { en: 'She was not reading.', hi: 'वह नहीं पढ़ रही थी।', note: 'was not + reading' },
                  { en: 'They were not playing.', hi: 'वे नहीं खेल रहे थे।', note: 'were not + playing' },
                  { en: 'It was not raining.', hi: 'बारिश नहीं हो रही थी।', note: 'was not + raining' }
                ],
                wh: [
                  { en: 'What were you eating?', hi: 'तुम क्या खा रहे थे?', note: 'What + were + you + eating' },
                  { en: 'Where was she going?', hi: 'वह कहाँ जा रही थी?', note: 'Where + was + she + going' },
                  { en: 'Why were they playing?', hi: 'वे क्यों खेल रहे थे?', note: 'Why + were + they + playing' },
                  { en: 'When were you studying?', hi: 'तुम कब पढ़ रहे थे?', note: 'When + were + you + studying' }
                ]
              },
              practice: [
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
              ]
            },
            {
              id: 'past-perfect',
              title: 'Past Perfect',
              icon: '3️⃣',
              intro: 'पहले ही हो चुका था',
              recognition: 'जब past में काम किसी और past action से पहले पूरा हो चुका था। Time words: before, after, already, by the time.',
              definition: 'Past Perfect Tense वह tense है जो बताता है कि कोई काम past में किसी दूसरे काम से पहले पूरा हो चुका था। यह past के दो actions में से पहले वाले को बताता है। जैसे: "I had eaten before he came" — पहले खाना खाया, फिर वह आया।',
              usage: 'जब दो past actions में से पहले वाले को बताना हो (The train had left before I reached), past में किसी काम का पूरा होना बताने के लिए (She had already finished) — इनमें Past Perfect use होता है।',
              rule: 'Subject + had + V3 + Object',
              ruleExplain: 'had = Helping Verb (सभी subjects के साथ) | V3 = Verb का third form (eat → eaten, go → gone)',
              structure: [
                { type: 'Simple',                  formula: 'Subject + had + V3 + Object',             example: 'I had eaten rice. (मैं खा चुका था।)', exampleExplain: 'I + had + eaten' },
                { type: 'Negative',                formula: 'Subject + had not + V3 + Object',         example: 'I had not eaten rice. (मैंने नहीं खाया था।)', exampleExplain: 'had not + eaten' },
                { type: 'Interrogative',           formula: 'Had + Subject + V3 + Object + ?',         example: 'Had you eaten rice? (क्या तुम खा चुके थे?)', exampleExplain: 'Had + you + eaten' },
                { type: 'WH-Question',             formula: 'WH + had + Subject + V3 + ?',             example: 'What had you eaten? (तुमने क्या खाया था?)', exampleExplain: 'What + had + you + eaten' }
              ],
              examples: {
                simple: [
                  { en: 'I had eaten before he came.', hi: 'मैं खा चुका था उसके आने से पहले।', note: 'had + eaten' },
                  { en: 'She had finished her work.', hi: 'उसने अपना काम पूरा कर लिया था।', note: 'had + finished' },
                  { en: 'The train had left before we reached.', hi: 'हमारे पहुँचने से पहले ट्रेन चली गई थी।', note: 'had + left' },
                  { en: 'They had already gone.', hi: 'वे पहले ही जा चुके थे।', note: 'had + already + gone' }
                ],
                negative: [
                  { en: 'I had not eaten before he came.', hi: 'मैंने उसके आने से पहले नहीं खाया था।', note: 'had not + eaten' },
                  { en: 'She had not finished her work.', hi: 'उसने काम पूरा नहीं किया था।', note: 'had not + finished' },
                  { en: 'The train had not left.', hi: 'ट्रेन नहीं गई थी।', note: 'had not + left' },
                  { en: 'They had not gone.', hi: 'वे नहीं गए थे।', note: 'had not + gone' }
                ],
                wh: [
                  { en: 'What had you eaten?', hi: 'तुमने क्या खाया था?', note: 'What + had + you + eaten' },
                  { en: 'Where had she gone?', hi: 'वह कहाँ गई थी?', note: 'Where + had + she + gone' },
                  { en: 'Why had they left?', hi: 'वे क्यों गए थे?', note: 'Why + had + they + left' },
                  { en: 'When had you finished?', hi: 'तुमने कब खत्म किया था?', note: 'When + had + you + finished' }
                ]
              },
              practice: [
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
              ]
            },
            {
              id: 'past-perfect-continuous',
              title: 'Past Perfect Continuous',
              icon: '4️⃣',
              intro: 'पहले से चल रहा था (किसी समय तक)',
              recognition: 'जब काम past में किसी समय से चल रहा था और past में ही खत्म हुआ। Time words: since, for, how long.',
              definition: 'Past Perfect Continuous Tense वह tense है जो बताता है कि कोई काम past में किसी समय से चल रहा था, और किसी past point तक जारी रहा। यह past में duration बताता है। जैसे: "I had been studying for 2 hours" — मैं 2 घंटे से पढ़ रहा था (past में)।',
              usage: 'जब past में काम किसी समय से चल रहा था और किसी दूसरे past action से पहले तक जारी रहा (I had been waiting for 2 hours before he came) — इसमें Past Perfect Continuous use होता है।',
              rule: 'Subject + had been + V-ing + since/for + time',
              ruleExplain: 'had been = Helping Verb (सभी subjects के साथ) | V-ing = Verb + ing | since = point of time | for = period of time',
              structure: [
                { type: 'Simple',                  formula: 'Subject + had been + V-ing + since/for',   example: 'I had been eating for 2 hours. (मैं 2 घंटे से खा रहा था।)', exampleExplain: 'had been + eating + for 2 hours' },
                { type: 'Negative',                formula: 'Subject + had not been + V-ing',           example: 'I had not been eating. (मैं नहीं खा रहा था।)', exampleExplain: 'had not been + eating' },
                { type: 'Interrogative',           formula: 'Had + Subject + been + V-ing + ?',         example: 'Had you been eating? (क्या तुम खा रहे थे?)', exampleExplain: 'Had + you + been + eating' },
                { type: 'WH-Question',             formula: 'WH + had + Subject + been + V-ing + ?',    example: 'How long had you been eating? (तुम कब से खा रहे थे?)', exampleExplain: 'How long + had + you + been + eating' }
              ],
              examples: {
                simple: [
                  { en: 'I had been studying for 2 hours.', hi: 'मैं 2 घंटे से पढ़ रहा था।', note: 'had been + studying' },
                  { en: 'She had been working since morning.', hi: 'वह सुबह से काम कर रही थी।', note: 'had been + working' },
                  { en: 'It had been raining since last night.', hi: 'कल रात से बारिश हो रही थी।', note: 'had been + raining' },
                  { en: 'They had been playing since 4 pm.', hi: 'वे 4 बजे से खेल रहे थे।', note: 'had been + playing' }
                ],
                negative: [
                  { en: 'I had not been studying.', hi: 'मैं नहीं पढ़ रहा था।', note: 'had not been + studying' },
                  { en: 'She had not been working.', hi: 'वह काम नहीं कर रही थी।', note: 'had not been + working' },
                  { en: 'It had not been raining.', hi: 'बारिश नहीं हो रही थी।', note: 'had not been + raining' },
                  { en: 'They had not been playing.', hi: 'वे नहीं खेल रहे थे।', note: 'had not been + playing' }
                ],
                wh: [
                  { en: 'How long had you been studying?', hi: 'तुम कब से पढ़ रहे थे?', note: 'How long + had + you + been + studying' },
                  { en: 'Why had she been crying?', hi: 'वह क्यों रो रही थी?', note: 'Why + had + she + been + crying' },
                  { en: 'Since when had you been waiting?', hi: 'तुम कब से इंतज़ार कर रहे थे?', note: 'Since when + had + you + been + waiting' },
                  { en: 'What had you been doing?', hi: 'तुम क्या कर रहे थे?', note: 'What + had + you + been + doing' }
                ]
              },
              practice: [
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
              ]
            }
          ]
        },
        // ─── FUTURE ───
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
              definition: 'Future Simple Tense वह tense है जो बताता है कि कोई काम आगे (future में) होगा। यह prediction, plan, या promise बताता है। जैसे: "I will eat rice tomorrow" — कल मैं चावल खाऊँगा।',
              usage: 'जो काम future में होगा (I will go to Delhi tomorrow), prediction के लिए (It will rain), promise के लिए (I will help you), decision के लिए (I will buy this) — इनमें Future Simple use होता है।',
              rule: 'Subject + will + V1 + Object',
              ruleExplain: 'will = Helping Verb (सभी subjects के साथ) | V1 = Verb का base form (eat, go, play)',
              structure: [
                { type: 'Simple',                  formula: 'Subject + will + V1 + Object',             example: 'I will eat rice. (मैं चावल खाऊँगा।)', exampleExplain: 'I + will + eat' },
                { type: 'Negative',                formula: 'Subject + will not + V1 + Object',         example: 'I will not eat rice. (मैं चावल नहीं खाऊँगा।)', exampleExplain: 'will not + eat' },
                { type: 'Interrogative',           formula: 'Will + Subject + V1 + Object + ?',         example: 'Will you eat rice? (क्या तुम चावल खाओगे?)', exampleExplain: 'Will + you + eat' },
                { type: 'WH-Question',             formula: 'WH + will + Subject + V1 + ?',             example: 'What will you eat? (तुम क्या खाओगे?)', exampleExplain: 'What + will + you + eat' }
              ],
              examples: {
                simple: [
                  { en: 'I will eat rice tomorrow.', hi: 'मैं कल चावल खाऊँगा।', note: 'I + will + eat' },
                  { en: 'She will go to school.', hi: 'वह स्कूल जाएगी।', note: 'She + will + go' },
                  { en: 'They will play cricket.', hi: 'वे क्रिकेट खेलेंगे।', note: 'They + will + play' },
                  { en: 'It will rain tomorrow.', hi: 'कल बारिश होगी।', note: 'It + will + rain' }
                ],
                negative: [
                  { en: 'I will not eat rice.', hi: 'मैं चावल नहीं खाऊँगा।', note: 'will not + eat' },
                  { en: 'She will not go to school.', hi: 'वह स्कूल नहीं जाएगी।', note: 'will not + go' },
                  { en: 'They will not play cricket.', hi: 'वे क्रिकेट नहीं खेलेंगे।', note: 'will not + play' },
                  { en: 'It will not rain tomorrow.', hi: 'कल बारिश नहीं होगी।', note: 'will not + rain' }
                ],
                wh: [
                  { en: 'What will you eat?', hi: 'तुम क्या खाओगे?', note: 'What + will + you + eat' },
                  { en: 'Where will she go?', hi: 'वह कहाँ जाएगी?', note: 'Where + will + she + go' },
                  { en: 'When will they play?', hi: 'वे कब खेलेंगे?', note: 'When + will + they + play' },
                  { en: 'Why will it rain?', hi: 'बारिश क्यों होगी?', note: 'Why + will + it + rain' }
                ]
              },
              practice: [
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
              ]
            },
            {
              id: 'future-continuous',
              title: 'Future Continuous',
              icon: '2️⃣',
              intro: 'आगे चल रहा होगा',
              recognition: 'जब काम future में किसी खास समय चल रहा होगा। Time words: at 5 pm tomorrow, this time tomorrow.',
              definition: 'Future Continuous Tense वह tense है जो बताता है कि कोई काम future में किसी खास समय पर चल रहा होगा। जैसे: "I will be eating at 8 pm" — 8 बजे मैं खा रहा होऊँगा।',
              usage: 'जब future में किसी खास समय पर काम जारी होगा (At 5 pm, I will be working), future के plan बताने के लिए (I will be meeting him tomorrow) — इनमें Future Continuous use होता है।',
              rule: 'Subject + will be + V-ing + Object',
              ruleExplain: 'will be = Helping Verb | V-ing = Verb + ing',
              structure: [
                { type: 'Simple',                  formula: 'Subject + will be + V-ing + Object',       example: 'I will be eating rice. (मैं खा रहा होऊँगा।)', exampleExplain: 'I + will be + eating' },
                { type: 'Negative',                formula: 'Subject + will not be + V-ing',            example: 'I will not be eating. (मैं नहीं खा रहा होऊँगा।)', exampleExplain: 'will not be + eating' },
                { type: 'Interrogative',           formula: 'Will + Subject + be + V-ing + ?',          example: 'Will you be eating? (क्या तुम खा रहे होगे?)', exampleExplain: 'Will + you + be + eating' },
                { type: 'WH-Question',             formula: 'WH + will + Subject + be + V-ing + ?',     example: 'What will you be eating? (तुम क्या खा रहे होगे?)', exampleExplain: 'What + will + you + be + eating' }
              ],
              examples: {
                simple: [
                  { en: 'I will be eating at 8 pm.', hi: 'मैं 8 बजे खा रहा होऊँगा।', note: 'will be + eating' },
                  { en: 'She will be reading a book.', hi: 'वह किताब पढ़ रही होगी।', note: 'will be + reading' },
                  { en: 'They will be playing cricket.', hi: 'वे क्रिकेट खेल रहे होंगे।', note: 'will be + playing' },
                  { en: 'It will be raining tonight.', hi: 'आज रात बारिश हो रही होगी।', note: 'will be + raining' }
                ],
                negative: [
                  { en: 'I will not be eating.', hi: 'मैं नहीं खा रहा होऊँगा।', note: 'will not be + eating' },
                  { en: 'She will not be reading.', hi: 'वह नहीं पढ़ रही होगी।', note: 'will not be + reading' },
                  { en: 'They will not be playing.', hi: 'वे नहीं खेल रहे होंगे।', note: 'will not be + playing' },
                  { en: 'It will not be raining.', hi: 'बारिश नहीं हो रही होगी।', note: 'will not be + raining' }
                ],
                wh: [
                  { en: 'What will you be doing?', hi: 'तुम क्या कर रहे होगे?', note: 'What + will + you + be + doing' },
                  { en: 'Where will she be going?', hi: 'वह कहाँ जा रही होगी?', note: 'Where + will + she + be + going' },
                  { en: 'When will they be playing?', hi: 'वे कब खेल रहे होंगे?', note: 'When + will + they + be + playing' },
                  { en: 'Why will you be waiting?', hi: 'तुम क्यों इंतज़ार कर रहे होगे?', note: 'Why + will + you + be + waiting' }
                ]
              },
              practice: [
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
              ]
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
                { type: 'Simple',                  formula: 'Subject + will have + V3 + Object',         example: 'I will have eaten rice. (मैं खा चुका होऊँगा।)', exampleExplain: 'I + will have + eaten' },
                { type: 'Negative',                formula: 'Subject + will not have + V3',              example: 'I will not have eaten. (मैं नहीं खाया होऊँगा।)', exampleExplain: 'will not have + eaten' },
                { type: 'Interrogative',           formula: 'Will + Subject + have + V3 + ?',            example: 'Will you have eaten? (क्या तुम खा चुके होगे?)', exampleExplain: 'Will + you + have + eaten' },
                { type: 'WH-Question',             formula: 'WH + will + Subject + have + V3 + ?',       example: 'What will you have eaten? (तुम क्या खा चुके होगे?)', exampleExplain: 'What + will + you + have + eaten' }
              ],
              examples: {
                simple: [
                  { en: 'I will have eaten by 8 pm.', hi: 'मैं 8 बजे तक खा चुका होऊँगा।', note: 'will have + eaten' },
                  { en: 'She will have finished her work.', hi: 'वह अपना काम पूरा कर चुकी होगी।', note: 'will have + finished' },
                  { en: 'They will have left by then.', hi: 'वे तब तक जा चुके होंगे।', note: 'will have + left' },
                  { en: 'We will have reached Delhi.', hi: 'हम दिल्ली पहुँच चुके होंगे।', note: 'will have + reached' }
                ],
                negative: [
                  { en: 'I will not have eaten by 8 pm.', hi: 'मैं 8 बजे तक नहीं खाया होऊँगा।', note: 'will not have + eaten' },
                  { en: 'She will not have finished.', hi: 'वह खत्म नहीं कर चुकी होगी।', note: 'will not have + finished' },
                  { en: 'They will not have left.', hi: 'वे नहीं गए होंगे।', note: 'will not have + left' },
                  { en: 'We will not have reached.', hi: 'हम नहीं पहुँचे होंगे।', note: 'will not have + reached' }
                ],
                wh: [
                  { en: 'What will you have eaten?', hi: 'तुम क्या खा चुके होगे?', note: 'What + will + you + have + eaten' },
                  { en: 'Where will she have gone?', hi: 'वह कहाँ जा चुकी होगी?', note: 'Where + will + she + have + gone' },
                  { en: 'When will they have left?', hi: 'वे कब जा चुके होंगे?', note: 'When + will + they + have + left' },
                  { en: 'How will you have finished?', hi: 'तुम कैसे पूरा कर चुके होगे?', note: 'How + will + you + have + finished' }
                ]
              },
              practice: [
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
              ]
            },
            {
              id: 'future-perfect-continuous',
              title: 'Future Perfect Continuous',
              icon: '4️⃣',
              intro: 'आगे तक चलता रहेगा',
              recognition: 'जब काम future में किसी खास समय तक चलता रहेगा। Time words: by next year, for 2 hours, since morning.',
              definition: 'Future Perfect Continuous Tense वह tense है जो बताता है कि कोई काम future में किसी खास समय तक चलता रहेगा। यह future में duration बताता है। जैसे: "By next year, I will have been working here for 5 years" — अगले साल तक मैं यहाँ 5 साल से काम कर रहा होऊँगा।',
              usage: 'जब future में किसी समय तक काम चलता रहेगा और duration बतानी हो — इसमें Future Perfect Continuous use होता है।',
              rule: 'Subject + will have been + V-ing + since/for + time',
              ruleExplain: 'will have been = Helping Verb | V-ing = Verb + ing | since/for = time',
              structure: [
                { type: 'Simple',                  formula: 'Subject + will have been + V-ing + ...',    example: 'I will have been eating for 2 hours. (मैं 2 घंटे से खा रहा होऊँगा।)', exampleExplain: 'will have been + eating + for 2 hours' },
                { type: 'Negative',                formula: 'Subject + will not have been + V-ing',     example: 'I will not have been eating. (मैं नहीं खा रहा होऊँगा।)', exampleExplain: 'will not have been + eating' },
                { type: 'Interrogative',           formula: 'Will + Subject + have been + V-ing + ?',   example: 'Will you have been eating? (क्या तुम खा रहे होगे?)', exampleExplain: 'Will + you + have been + eating' },
                { type: 'WH-Question',             formula: 'WH + will + Subject + have been + V-ing?', example: 'How long will you have been eating?', exampleExplain: 'How long + will + you + have been + eating' }
              ],
              examples: {
                simple: [
                  { en: 'I will have been studying for 2 hours.', hi: 'मैं 2 घंटे से पढ़ रहा होऊँगा।', note: 'will have been + studying' },
                  { en: 'She will have been working since morning.', hi: 'वह सुबह से काम कर रही होगी।', note: 'will have been + working' },
                  { en: 'It will have been raining since last night.', hi: 'कल रात से बारिश हो रही होगी।', note: 'will have been + raining' },
                  { en: 'They will have been playing since 4 pm.', hi: 'वे 4 बजे से खेल रहे होंगे।', note: 'will have been + playing' }
                ],
                negative: [
                  { en: 'I will not have been studying.', hi: 'मैं नहीं पढ़ रहा होऊँगा।', note: 'will not have been + studying' },
                  { en: 'She will not have been working.', hi: 'वह काम नहीं कर रही होगी।', note: 'will not have been + working' },
                  { en: 'It will not have been raining.', hi: 'बारिश नहीं हो रही होगी।', note: 'will not have been + raining' },
                  { en: 'They will not have been playing.', hi: 'वे नहीं खेल रहे होंगे।', note: 'will not have been + playing' }
                ],
                wh: [
                  { en: 'How long will you have been studying?', hi: 'तुम कब से पढ़ रहे होगे?', note: 'How long + will + you + have been + studying' },
                  { en: 'Why will she have been crying?', hi: 'वह क्यों रो रही होगी?', note: 'Why + will + she + have been + crying' },
                  { en: 'Since when will you have been waiting?', hi: 'तुम कब से इंतज़ार कर रहे होगे?', note: 'Since when + will + you + have been + waiting' },
                  { en: 'What will you have been doing?', hi: 'तुम क्या कर रहे होगे?', note: 'What + will + you + have been + doing' }
                ]
              },
              practice: [
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
              ]
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
