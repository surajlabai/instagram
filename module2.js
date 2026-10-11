// ═══════════════════════════════════════════════════════════
// module2.js — Module 2: Grammar Foundation
// Structure: Sentence, Clause, Tense (with 4 sub-types each)
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
    // TOPIC 1: SENTENCE
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
          intro: 'Statement — साधारण वाक्य (सच या झूठ बताने वाला)',
          structure: 'Subject + Verb + Object + .',
          usage: 'किसी बात को बताने या statement देने के लिए use होता है।',
          examples: [
            // 👇 AAP YAHAN APNE EXAMPLES ADD KARO
            { en: 'I am a student.', hi: 'मैं एक छात्र हूँ।' },
            { en: 'She lives in Delhi.', hi: 'वह दिल्ली में रहती है।' },
            { en: 'The sun rises in the east.', hi: 'सूरज पूर्व में उगता है।' },
            { en: 'Ram eats an apple.', hi: 'राम सेब खाता है।' }
          ],
          practice: [
            { type: 'mcq', q: 'Which is an assertive sentence?', options: ['What is your name?', 'I am a doctor.', 'Close the door.', 'What a beautiful day!'], answer: 'I am a doctor.' },
            { type: 'mcq', q: 'Which is an assertive sentence?', options: ['She is my sister.', 'Are you happy?', 'Please sit down.', 'How nice!'], answer: 'She is my sister.' },
            { type: 'mcq', q: 'Which is an assertive sentence?', options: ['Come here.', 'Where do you live?', 'He plays cricket.', 'Wow!'], answer: 'He plays cricket.' },
            { type: 'mcq', q: 'Which is an assertive sentence?', options: ['I love India.', 'Do you love India?', 'Love India!', 'Where is India?'], answer: 'I love India.' },
            { type: 'mcq', q: 'Which is an assertive sentence?', options: ['What a day!', 'Sit down.', 'The earth is round.', 'Is the earth round?'], answer: 'The earth is round.' }
          ]
        },
        {
          id: 'interrogative',
          title: 'Interrogative Sentence',
          icon: '❓',
          intro: 'Question — सवाल पूछने वाला वाक्य',
          structure: 'Helping Verb + Subject + Main Verb + ?',
          usage: 'कुछ पूछने या जानने के लिए use होता है।',
          examples: [
            { en: 'What is your name?', hi: 'तुम्हारा नाम क्या है?' },
            { en: 'Where do you live?', hi: 'तुम कहाँ रहते हो?' },
            { en: 'Are you happy?', hi: 'क्या तुम खुश हो?' },
            { en: 'Can you swim?', hi: 'क्या तुम तैर सकते हो?' }
          ],
          practice: [
            { type: 'mcq', q: 'Which is interrogative?', options: ['I am fine.', 'How are you?', 'Sit down.', 'Wow!'], answer: 'How are you?' },
            { type: 'mcq', q: 'Which is interrogative?', options: ['Where is my pen?', 'This is my pen.', 'Give me pen.', 'Nice pen!'], answer: 'Where is my pen?' },
            { type: 'mcq', q: 'Which is interrogative?', options: ['I love tea.', 'Do you love tea?', 'Love tea!', 'Tea is good.'], answer: 'Do you love tea?' },
            { type: 'mcq', q: 'Which is interrogative?', options: ['She sings well.', 'Does she sing well?', 'Sing well!', 'What a singer!'], answer: 'Does she sing well?' },
            { type: 'mcq', q: 'Which is interrogative?', options: ['Close the door.', 'Is the door closed?', 'The door is closed.', 'Door closed!'], answer: 'Is the door closed?' }
          ]
        },
        {
          id: 'imperative',
          title: 'Imperative Sentence',
          icon: '👉',
          intro: 'Command / Request / Advice — आदेश, निवेदन या सलाह',
          structure: 'Verb (base form) + Object + .',
          usage: 'किसी को कुछ करने का आदेश, request या advice देने के लिए।',
          examples: [
            { en: 'Close the door.', hi: 'दरवाज़ा बंद करो।' },
            { en: 'Please help me.', hi: 'कृपया मेरी मदद करो।' },
            { en: 'Do not smoke here.', hi: 'यहाँ धूम्रपान न करें।' },
            { en: 'Always speak the truth.', hi: 'हमेशा सच बोलो।' }
          ],
          practice: [
            { type: 'mcq', q: 'Which is imperative?', options: ['I am here.', 'Come here.', 'Are you here?', 'Wow, here!'], answer: 'Come here.' },
            { type: 'mcq', q: 'Which is imperative?', options: ['She sings.', 'Please sing a song.', 'Does she sing?', 'What a song!'], answer: 'Please sing a song.' },
            { type: 'mcq', q: 'Which is imperative?', options: ['Sit down.', 'He sits.', 'Is he sitting?', 'How he sits!'], answer: 'Sit down.' },
            { type: 'mcq', q: 'Which is imperative?', options: ['I eat rice.', 'Eat your food.', 'Do you eat rice?', 'What a meal!'], answer: 'Eat your food.' },
            { type: 'mcq', q: 'Which is imperative?', options: ['Study hard.', 'He studies hard.', 'Does he study?', 'How hard!'], answer: 'Study hard.' }
          ]
        },
        {
          id: 'exclamatory',
          title: 'Exclamatory Sentence',
          icon: '😲',
          intro: 'Strong Feeling — अचानक भावना या आश्चर्य',
          structure: 'What / How + ... + !',
          usage: 'खुशी, दुख, आश्चर्य, गुस्सा — strong feelings दिखाने के लिए।',
          examples: [
            { en: 'What a beautiful day!', hi: 'क्या सुंदर दिन है!' },
            { en: 'How nice she is!', hi: 'वह कितनी अच्छी है!' },
            { en: 'Wow! That is amazing!', hi: 'वाह! यह अद्भुत है!' },
            { en: 'Alas! I lost my wallet.', hi: 'हाय! मेरा बटुआ खो गया।' }
          ],
          practice: [
            { type: 'mcq', q: 'Which is exclamatory?', options: ['I am happy.', 'Am I happy?', 'Be happy.', 'What a happy day!'], answer: 'What a happy day!' },
            { type: 'mcq', q: 'Which is exclamatory?', options: ['How beautiful!', 'She is beautiful.', 'Is she beautiful?', 'Be beautiful.'], answer: 'How beautiful!' },
            { type: 'mcq', q: 'Which is exclamatory?', options: ['I am tired.', 'Alas! I am tired.', 'Am I tired?', 'Do not be tired.'], answer: 'Alas! I am tired.' },
            { type: 'mcq', q: 'Which is exclamatory?', options: ['Wow! Great job!', 'He did a great job.', 'Did he do it?', 'Do it.'], answer: 'Wow! Great job!' },
            { type: 'mcq', q: 'Which is exclamatory?', options: ['What a lovely song!', 'She sings well.', 'Does she sing?', 'Sing now.'], answer: 'What a lovely song!' }
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // TOPIC 2: CLAUSE
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
          structure: 'Subject + Verb + (Object) — complete sentence',
          usage: 'यह अपने आप में पूर्ण वाक्य होता है। इसका मतलब समझ आता है।',
          examples: [
            { en: 'I love India.', hi: 'मुझे भारत से प्यार है। (पूरा वाक्य)' },
            { en: 'She sings well.', hi: 'वह अच्छा गाती है। (पूरा वाक्य)' },
            { en: 'Ram eats rice.', hi: 'राम चावल खाता है। (पूरा वाक्य)' },
            { en: 'The sun rises in the east.', hi: 'सूरज पूर्व में उगता है।' }
          ],
          practice: [
            { type: 'mcq', q: 'Which is an independent clause?', options: ['Because I was tired', 'I went to bed', 'When he came', 'If it rains'], answer: 'I went to bed' },
            { type: 'mcq', q: 'Which is an independent clause?', options: ['Although she tried', 'She failed', 'Since morning', 'While walking'], answer: 'She failed' },
            { type: 'mcq', q: 'Which is an independent clause?', options: ['I love tea', 'Because I love tea', 'When I love tea', 'If I love tea'], answer: 'I love tea' },
            { type: 'mcq', q: 'Which is an independent clause?', options: ['He is smart', 'Though he is smart', 'If he is smart', 'As he is smart'], answer: 'He is smart' },
            { type: 'mcq', q: 'Which is an independent clause?', options: ['The dog barks', 'Because the dog barks', 'When the dog barks', 'Although the dog barks'], answer: 'The dog barks' }
          ]
        },
        {
          id: 'dependent',
          title: 'Dependent Clause',
          icon: '🔴',
          intro: 'वह clause जो अकेले पूरा sentence नहीं बन सकता',
          structure: 'Subordinating Conjunction (because, if, when...) + Subject + Verb',
          usage: 'यह अकेले पूरा अर्थ नहीं देता। इसके लिए independent clause चाहिए।',
          examples: [
            { en: 'Because I was tired...', hi: 'क्योंकि मैं थका था... (अधूरा)' },
            { en: 'When he came...', hi: 'जब वह आया... (अधूरा)' },
            { en: 'If it rains...', hi: 'अगर बारिश हो... (अधूरा)' },
            { en: 'Although she tried...', hi: 'हालांकि उसने कोशिश की... (अधूरा)' }
          ],
          practice: [
            { type: 'mcq', q: 'Which is a dependent clause?', options: ['I am fine', 'Because I am fine', 'She sings', 'He runs'], answer: 'Because I am fine' },
            { type: 'mcq', q: 'Which is a dependent clause?', options: ['When I was young', 'I was young', 'She was there', 'We played'], answer: 'When I was young' },
            { type: 'mcq', q: 'Which is a dependent clause?', options: ['If you study', 'You study', 'Study hard', 'I study'], answer: 'If you study' },
            { type: 'mcq', q: 'Which is a dependent clause?', options: ['Although he is rich', 'He is rich', 'He has money', 'Money is good'], answer: 'Although he is rich' },
            { type: 'mcq', q: 'Which is a dependent clause?', options: ['Since morning', 'The sun rises', 'I woke up', 'Birds sing'], answer: 'Since morning' }
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // TOPIC 3: TENSE
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
              title: 'Present Simple',
              icon: '1️⃣',
              intro: 'आदत, सच या नियमित काम',
              structure: 'S + V1/V5 + O',
              usage: 'Daily routine, habits, universal truths के लिए।',
              forms: [
                { type: 'Simple',      formula: 'S + V1/V5 + O',       example: 'I eat rice.' },
                { type: 'Negative',    formula: 'S + do/does + not + V1 + O', example: 'I do not eat rice.' },
                { type: 'Interrogative', formula: 'Do/Does + S + V1 + O?',     example: 'Do you eat rice?' },
                { type: 'WH Question', formula: 'WH + do/does + S + V1 + O?', example: 'What do you eat?' }
              ],
              examples: [
                { en: 'I eat rice every day.', hi: 'मैं रोज़ चावल खाता हूँ।' },
                { en: 'She goes to school.', hi: 'वह स्कूल जाती है।' },
                { en: 'The sun rises in the east.', hi: 'सूरज पूर्व में उगता है।' },
                { en: 'We play cricket on Sundays.', hi: 'हम रविवार को क्रिकेट खेलते हैं।' }
              ],
              practice: [
                { type: 'mcq', q: 'I ___ rice every day.', options: ['eat', 'eats', 'eating', 'ate'], answer: 'eat' },
                { type: 'mcq', q: 'She ___ to school.', options: ['go', 'goes', 'going', 'went'], answer: 'goes' },
                { type: 'mcq', q: 'He ___ not like tea.', options: ['do', 'does', 'is', 'are'], answer: 'does' },
                { type: 'mcq', q: '___ you play cricket?', options: ['Do', 'Does', 'Is', 'Are'], answer: 'Do' },
                { type: 'mcq', q: 'What ___ she eat?', options: ['do', 'does', 'is', 'are'], answer: 'does' }
              ]
            },
            {
              id: 'present-continuous',
              title: 'Present Continuous',
              icon: '2️⃣',
              intro: 'अभी हो रहा है',
              structure: 'S + is/am/are + V-ing + O',
              usage: 'जो काम अभी चल रहा है।',
              forms: [
                { type: 'Simple',      formula: 'S + is/am/are + V-ing + O', example: 'I am eating rice.' },
                { type: 'Negative',    formula: 'S + is/am/are + not + V-ing + O', example: 'I am not eating rice.' },
                { type: 'Interrogative', formula: 'Is/Am/Are + S + V-ing + O?', example: 'Are you eating rice?' },
                { type: 'WH Question', formula: 'WH + is/am/are + S + V-ing + O?', example: 'What are you eating?' }
              ],
              examples: [
                { en: 'I am eating rice now.', hi: 'मैं अभी चावल खा रहा हूँ।' },
                { en: 'She is reading a book.', hi: 'वह किताब पढ़ रही है।' },
                { en: 'They are playing football.', hi: 'वे फुटबॉल खेल रहे हैं।' },
                { en: 'It is raining outside.', hi: 'बाहर बारिश हो रही है।' }
              ],
              practice: [
                { type: 'mcq', q: 'I ___ eating rice now.', options: ['am', 'is', 'are', 'was'], answer: 'am' },
                { type: 'mcq', q: 'She ___ reading a book.', options: ['am', 'is', 'are', 'were'], answer: 'is' },
                { type: 'mcq', q: 'They ___ playing football.', options: ['am', 'is', 'are', 'was'], answer: 'are' },
                { type: 'mcq', q: 'It ___ raining outside.', options: ['am', 'is', 'are', 'were'], answer: 'is' },
                { type: 'mcq', q: 'What ___ you doing?', options: ['am', 'is', 'are', 'was'], answer: 'are' }
              ]
            },
            {
              id: 'present-perfect',
              title: 'Present Perfect',
              icon: '3️⃣',
              intro: 'काम पूरा हो चुका है (अभी-अभी)',
              structure: 'S + has/have + V3 + O',
              usage: 'जो काम अभी-अभी पूरा हुआ या जिसका असर अभी है।',
              forms: [
                { type: 'Simple',      formula: 'S + has/have + V3 + O', example: 'I have eaten rice.' },
                { type: 'Negative',    formula: 'S + has/have + not + V3 + O', example: 'I have not eaten rice.' },
                { type: 'Interrogative', formula: 'Has/Have + S + V3 + O?', example: 'Have you eaten rice?' },
                { type: 'WH Question', formula: 'WH + has/have + S + V3 + O?', example: 'What have you eaten?' }
              ],
              examples: [
                { en: 'I have eaten my lunch.', hi: 'मैंने दोपहर का खाना खा लिया।' },
                { en: 'She has finished her work.', hi: 'उसने अपना काम पूरा कर लिया।' },
                { en: 'They have gone to Delhi.', hi: 'वे दिल्ली गए हैं।' },
                { en: 'I have never seen a lion.', hi: 'मैंने कभी शेर नहीं देखा।' }
              ],
              practice: [
                { type: 'mcq', q: 'I ___ eaten my lunch.', options: ['has', 'have', 'had', 'having'], answer: 'have' },
                { type: 'mcq', q: 'She ___ finished her work.', options: ['has', 'have', 'had', 'having'], answer: 'has' },
                { type: 'mcq', q: 'They ___ gone to Delhi.', options: ['has', 'have', 'had', 'having'], answer: 'have' },
                { type: 'mcq', q: 'I have never ___ a lion.', options: ['see', 'saw', 'seen', 'seeing'], answer: 'seen' },
                { type: 'mcq', q: '___ you finished your work?', options: ['Has', 'Have', 'Had', 'Having'], answer: 'Have' }
              ]
            },
            {
              id: 'present-perfect-continuous',
              title: 'Present Perfect Continuous',
              icon: '4️⃣',
              intro: 'काम पहले से चल रहा है और अभी भी चल रहा है',
              structure: 'S + has/have been + V-ing + since/for + time',
              usage: 'जो काम past में शुरू हुआ और अभी भी जारी है।',
              forms: [
                { type: 'Simple',      formula: 'S + has/have been + V-ing + since/for + time', example: 'I have been eating for 2 hours.' },
                { type: 'Negative',    formula: 'S + has/have not been + V-ing + ...', example: 'I have not been eating.' },
                { type: 'Interrogative', formula: 'Has/Have + S + been + V-ing + ...?', example: 'Have you been eating?' },
                { type: 'WH Question', formula: 'WH + has/have + S + been + V-ing + ...?', example: 'How long have you been eating?' }
              ],
              examples: [
                { en: 'I have been studying for 2 hours.', hi: 'मैं 2 घंटे से पढ़ रहा हूँ।' },
                { en: 'She has been working since morning.', hi: 'वह सुबह से काम कर रही है।' },
                { en: 'It has been raining since last night.', hi: 'कल रात से बारिश हो रही है।' },
                { en: 'They have been playing since 4 pm.', hi: 'वे 4 बजे से खेल रहे हैं।' }
              ],
              practice: [
                { type: 'mcq', q: 'I ___ studying for 2 hours.', options: ['has been', 'have been', 'had been', 'am'], answer: 'have been' },
                { type: 'mcq', q: 'She ___ working since morning.', options: ['has been', 'have been', 'had been', 'is'], answer: 'has been' },
                { type: 'mcq', q: 'It ___ raining since last night.', options: ['has been', 'have been', 'had been', 'was'], answer: 'has been' },
                { type: 'mcq', q: 'They have been ___ since 4 pm.', options: ['play', 'plays', 'playing', 'played'], answer: 'playing' },
                { type: 'mcq', q: 'How long ___ you been studying?', options: ['has', 'have', 'had', 'having'], answer: 'have' }
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
              title: 'Past Simple',
              icon: '1️⃣',
              intro: 'पहले हो चुका काम',
              structure: 'S + V2 + O',
              usage: 'जो काम past में पूरा हो गया।',
              forms: [
                { type: 'Simple',      formula: 'S + V2 + O', example: 'I ate rice.' },
                { type: 'Negative',    formula: 'S + did not + V1 + O', example: 'I did not eat rice.' },
                { type: 'Interrogative', formula: 'Did + S + V1 + O?', example: 'Did you eat rice?' },
                { type: 'WH Question', formula: 'WH + did + S + V1 + O?', example: 'What did you eat?' }
              ],
              examples: [
                { en: 'I ate rice yesterday.', hi: 'मैंने कल चावल खाया।' },
                { en: 'She went to school.', hi: 'वह स्कूल गई।' },
                { en: 'They played football.', hi: 'उन्होंने फुटबॉल खेला।' },
                { en: 'It rained heavily last night.', hi: 'कल रात तेज़ बारिश हुई।' }
              ],
              practice: [
                { type: 'mcq', q: 'I ___ rice yesterday.', options: ['eat', 'eats', 'ate', 'eaten'], answer: 'ate' },
                { type: 'mcq', q: 'She ___ to school yesterday.', options: ['go', 'goes', 'went', 'gone'], answer: 'went' },
                { type: 'mcq', q: 'They ___ football last Sunday.', options: ['play', 'plays', 'played', 'playing'], answer: 'played' },
                { type: 'mcq', q: 'I did not ___ rice.', options: ['eat', 'ate', 'eaten', 'eating'], answer: 'eat' },
                { type: 'mcq', q: '___ you go to school?', options: ['Do', 'Does', 'Did', 'Are'], answer: 'Did' }
              ]
            },
            {
              id: 'past-continuous',
              title: 'Past Continuous',
              icon: '2️⃣',
              intro: 'पहले चल रहा था',
              structure: 'S + was/were + V-ing + O',
              usage: 'जो काम past में किसी समय चल रहा था।',
              forms: [
                { type: 'Simple',      formula: 'S + was/were + V-ing + O', example: 'I was eating rice.' },
                { type: 'Negative',    formula: 'S + was/were + not + V-ing + O', example: 'I was not eating rice.' },
                { type: 'Interrogative', formula: 'Was/Were + S + V-ing + O?', example: 'Were you eating rice?' },
                { type: 'WH Question', formula: 'WH + was/were + S + V-ing + O?', example: 'What were you eating?' }
              ],
              examples: [
                { en: 'I was eating rice at 8 pm.', hi: 'मैं 8 बजे चावल खा रहा था।' },
                { en: 'She was reading a book.', hi: 'वह किताब पढ़ रही थी।' },
                { en: 'They were playing cricket.', hi: 'वे क्रिकेट खेल रहे थे।' },
                { en: 'It was raining all night.', hi: 'पूरी रात बारिश हो रही थी।' }
              ],
              practice: [
                { type: 'mcq', q: 'I ___ eating rice at 8 pm.', options: ['am', 'is', 'was', 'were'], answer: 'was' },
                { type: 'mcq', q: 'She ___ reading a book.', options: ['am', 'is', 'was', 'were'], answer: 'was' },
                { type: 'mcq', q: 'They ___ playing cricket.', options: ['am', 'is', 'was', 'were'], answer: 'were' },
                { type: 'mcq', q: 'It was ___ all night.', options: ['rain', 'rains', 'raining', 'rained'], answer: 'raining' },
                { type: 'mcq', q: 'What ___ you doing?', options: ['was', 'were', 'are', 'is'], answer: 'were' }
              ]
            },
            {
              id: 'past-perfect',
              title: 'Past Perfect',
              icon: '3️⃣',
              intro: 'पहले ही हो चुका था',
              structure: 'S + had + V3 + O',
              usage: 'जो काम past में किसी और काम से पहले पूरा हो चुका था।',
              forms: [
                { type: 'Simple',      formula: 'S + had + V3 + O', example: 'I had eaten rice.' },
                { type: 'Negative',    formula: 'S + had not + V3 + O', example: 'I had not eaten rice.' },
                { type: 'Interrogative', formula: 'Had + S + V3 + O?', example: 'Had you eaten rice?' },
                { type: 'WH Question', formula: 'WH + had + S + V3 + O?', example: 'What had you eaten?' }
              ],
              examples: [
                { en: 'I had eaten before he came.', hi: 'मैं खा चुका था उसके आने से पहले।' },
                { en: 'She had finished her work.', hi: 'उसने अपना काम पूरा कर लिया था।' },
                { en: 'The train had left before we reached.', hi: 'हमारे पहुँचने से पहले ट्रेन चली गई थी।' },
                { en: 'They had already gone.', hi: 'वे पहले ही जा चुके थे।' }
              ],
              practice: [
                { type: 'mcq', q: 'I ___ eaten before he came.', options: ['has', 'have', 'had', 'having'], answer: 'had' },
                { type: 'mcq', q: 'She ___ finished her work.', options: ['has', 'have', 'had', 'having'], answer: 'had' },
                { type: 'mcq', q: 'The train had ___ before we reached.', options: ['leave', 'leaves', 'left', 'leaving'], answer: 'left' },
                { type: 'mcq', q: 'I had not ___ rice.', options: ['eat', 'ate', 'eaten', 'eating'], answer: 'eaten' },
                { type: 'mcq', q: '___ you eaten before coming?', options: ['Has', 'Have', 'Had', 'Having'], answer: 'Had' }
              ]
            },
            {
              id: 'past-perfect-continuous',
              title: 'Past Perfect Continuous',
              icon: '4️⃣',
              intro: 'पहले से चल रहा था (किसी समय तक)',
              structure: 'S + had been + V-ing + since/for + time',
              usage: 'जो काम past में किसी समय से चल रहा था।',
              forms: [
                { type: 'Simple',      formula: 'S + had been + V-ing + ...', example: 'I had been eating for 2 hours.' },
                { type: 'Negative',    formula: 'S + had not been + V-ing + ...', example: 'I had not been eating.' },
                { type: 'Interrogative', formula: 'Had + S + been + V-ing + ...?', example: 'Had you been eating?' },
                { type: 'WH Question', formula: 'WH + had + S + been + V-ing + ...?', example: 'How long had you been eating?' }
              ],
              examples: [
                { en: 'I had been studying for 2 hours.', hi: 'मैं 2 घंटे से पढ़ रहा था।' },
                { en: 'She had been working since morning.', hi: 'वह सुबह से काम कर रही थी।' },
                { en: 'It had been raining since last night.', hi: 'कल रात से बारिश हो रही थी।' },
                { en: 'They had been playing since 4 pm.', hi: 'वे 4 बजे से खेल रहे थे।' }
              ],
              practice: [
                { type: 'mcq', q: 'I ___ studying for 2 hours.', options: ['has been', 'have been', 'had been', 'am'], answer: 'had been' },
                { type: 'mcq', q: 'She ___ working since morning.', options: ['has been', 'have been', 'had been', 'is'], answer: 'had been' },
                { type: 'mcq', q: 'It had been ___ since last night.', options: ['rain', 'rains', 'raining', 'rained'], answer: 'raining' },
                { type: 'mcq', q: 'They had been ___ since 4 pm.', options: ['play', 'plays', 'playing', 'played'], answer: 'playing' },
                { type: 'mcq', q: 'How long ___ you been studying?', options: ['has', 'have', 'had', 'having'], answer: 'had' }
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
              title: 'Future Simple',
              icon: '1️⃣',
              intro: 'आगे होगा',
              structure: 'S + will + V1 + O',
              usage: 'जो काम future में होगा।',
              forms: [
                { type: 'Simple',      formula: 'S + will + V1 + O', example: 'I will eat rice.' },
                { type: 'Negative',    formula: 'S + will not + V1 + O', example: 'I will not eat rice.' },
                { type: 'Interrogative', formula: 'Will + S + V1 + O?', example: 'Will you eat rice?' },
                { type: 'WH Question', formula: 'WH + will + S + V1 + O?', example: 'What will you eat?' }
              ],
              examples: [
                { en: 'I will eat rice tomorrow.', hi: 'मैं कल चावल खाऊँगा।' },
                { en: 'She will go to school.', hi: 'वह स्कूल जाएगी।' },
                { en: 'They will play cricket.', hi: 'वे क्रिकेट खेलेंगे।' },
                { en: 'It will rain tomorrow.', hi: 'कल बारिश होगी।' }
              ],
              practice: [
                { type: 'mcq', q: 'I ___ eat rice tomorrow.', options: ['will', 'would', 'am', 'was'], answer: 'will' },
                { type: 'mcq', q: 'She ___ go to school.', options: ['will', 'would', 'is', 'was'], answer: 'will' },
                { type: 'mcq', q: 'They ___ play cricket.', options: ['will', 'would', 'are', 'were'], answer: 'will' },
                { type: 'mcq', q: 'I will not ___ rice.', options: ['eat', 'ate', 'eaten', 'eating'], answer: 'eat' },
                { type: 'mcq', q: '___ you come tomorrow?', options: ['Do', 'Does', 'Will', 'Did'], answer: 'Will' }
              ]
            },
            {
              id: 'future-continuous',
              title: 'Future Continuous',
              icon: '2️⃣',
              intro: 'आगे चल रहा होगा',
              structure: 'S + will be + V-ing + O',
              usage: 'जो काम future में किसी समय चल रहा होगा।',
              forms: [
                { type: 'Simple',      formula: 'S + will be + V-ing + O', example: 'I will be eating rice.' },
                { type: 'Negative',    formula: 'S + will not be + V-ing + O', example: 'I will not be eating rice.' },
                { type: 'Interrogative', formula: 'Will + S + be + V-ing + O?', example: 'Will you be eating rice?' },
                { type: 'WH Question', formula: 'WH + will + S + be + V-ing + O?', example: 'What will you be eating?' }
              ],
              examples: [
                { en: 'I will be eating at 8 pm.', hi: 'मैं 8 बजे खा रहा होऊँगा।' },
                { en: 'She will be reading a book.', hi: 'वह किताब पढ़ रही होगी।' },
                { en: 'They will be playing cricket.', hi: 'वे क्रिकेट खेल रहे होंगे।' },
                { en: 'It will be raining tonight.', hi: 'आज रात बारिश हो रही होगी।' }
              ],
              practice: [
                { type: 'mcq', q: 'I will ___ eating at 8 pm.', options: ['am', 'is', 'be', 'been'], answer: 'be' },
                { type: 'mcq', q: 'She will be ___ a book.', options: ['read', 'reads', 'reading', 'readed'], answer: 'reading' },
                { type: 'mcq', q: 'They will be ___ cricket.', options: ['play', 'plays', 'playing', 'played'], answer: 'playing' },
                { type: 'mcq', q: 'It will be ___ tonight.', options: ['rain', 'rains', 'raining', 'rained'], answer: 'raining' },
                { type: 'mcq', q: 'What ___ you be doing?', options: ['will', 'would', 'are', 'is'], answer: 'will' }
              ]
            },
            {
              id: 'future-perfect',
              title: 'Future Perfect',
              icon: '3️⃣',
              intro: 'आगे तक पूरा हो चुका होगा',
              structure: 'S + will have + V3 + O',
              usage: 'जो काम future में किसी समय तक पूरा हो चुका होगा।',
              forms: [
                { type: 'Simple',      formula: 'S + will have + V3 + O', example: 'I will have eaten rice.' },
                { type: 'Negative',    formula: 'S + will not have + V3 + O', example: 'I will not have eaten rice.' },
                { type: 'Interrogative', formula: 'Will + S + have + V3 + O?', example: 'Will you have eaten rice?' },
                { type: 'WH Question', formula: 'WH + will + S + have + V3 + O?', example: 'What will you have eaten?' }
              ],
              examples: [
                { en: 'I will have eaten by 8 pm.', hi: 'मैं 8 बजे तक खा चुका होऊँगा।' },
                { en: 'She will have finished her work.', hi: 'वह अपना काम पूरा कर चुकी होगी।' },
                { en: 'They will have left by then.', hi: 'वे तब तक जा चुके होंगे।' },
                { en: 'We will have reached Delhi.', hi: 'हम दिल्ली पहुँच चुके होंगे।' }
              ],
              practice: [
                { type: 'mcq', q: 'I will ___ eaten by 8 pm.', options: ['has', 'have', 'had', 'having'], answer: 'have' },
                { type: 'mcq', q: 'She will have ___ her work.', options: ['finish', 'finishes', 'finished', 'finishing'], answer: 'finished' },
                { type: 'mcq', q: 'They will have ___ by then.', options: ['leave', 'leaves', 'left', 'leaving'], answer: 'left' },
                { type: 'mcq', q: 'We will have ___ Delhi.', options: ['reach', 'reaches', 'reached', 'reaching'], answer: 'reached' },
                { type: 'mcq', q: '___ you have finished by then?', options: ['Do', 'Does', 'Will', 'Did'], answer: 'Will' }
              ]
            },
            {
              id: 'future-perfect-continuous',
              title: 'Future Perfect Continuous',
              icon: '4️⃣',
              intro: 'आगे तक चलता रहेगा',
              structure: 'S + will have been + V-ing + since/for + time',
              usage: 'जो काम future में किसी समय तक चलता रहेगा।',
              forms: [
                { type: 'Simple',      formula: 'S + will have been + V-ing + ...', example: 'I will have been eating for 2 hours.' },
                { type: 'Negative',    formula: 'S + will not have been + V-ing + ...', example: 'I will not have been eating.' },
                { type: 'Interrogative', formula: 'Will + S + have been + V-ing + ...?', example: 'Will you have been eating?' },
                { type: 'WH Question', formula: 'WH + will + S + have been + V-ing + ...?', example: 'How long will you have been eating?' }
              ],
              examples: [
                { en: 'I will have been studying for 2 hours.', hi: 'मैं 2 घंटे से पढ़ रहा होऊँगा।' },
                { en: 'She will have been working since morning.', hi: 'वह सुबह से काम कर रही होगी।' },
                { en: 'It will have been raining since last night.', hi: 'कल रात से बारिश हो रही होगी।' },
                { en: 'They will have been playing since 4 pm.', hi: 'वे 4 बजे से खेल रहे होंगे।' }
              ],
              practice: [
                { type: 'mcq', q: 'I will ___ been studying for 2 hours.', options: ['has', 'have', 'had', 'having'], answer: 'have' },
                { type: 'mcq', q: 'She will have been ___ since morning.', options: ['work', 'works', 'working', 'worked'], answer: 'working' },
                { type: 'mcq', q: 'It will have been ___ since last night.', options: ['rain', 'rains', 'raining', 'rained'], answer: 'raining' },
                { type: 'mcq', q: 'They will have been ___ since 4 pm.', options: ['play', 'plays', 'playing', 'played'], answer: 'playing' },
                { type: 'mcq', q: 'How long will you have been ___?', options: ['study', 'studies', 'studying', 'studied'], answer: 'studying' }
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
