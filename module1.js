// module1.js — Module 1: Foundational English (DEMO)
// Ye sirf demo data hai. Real mein har topic ke 100+ questions honge.

const MODULE1 = {
  id: 'm1',
  badge: 'Module 1',
  title: 'Foundational English',
  sub: 'Beginner Level',
  icon: '🌱',
  desc: 'Build a strong foundation in basic English.',
  topics: [

    // ═══════════════════════════════════════════
    // TOPIC 1: Alphabet & Sounds
    // ═══════════════════════════════════════════
    {
      id: 'alphabet',
      title: 'Alphabet & Sounds',
      icon: '🔤',
      intro: 'सीखो A-Z letters और unke sounds',
      lessons: [
        {
          title: 'Step 1: Capital Letters (A-Z)',
          type: 'info',
          content: `
            <p>English में 26 letters होते हैं। हर letter का एक sound होता है।</p>
            <p><b>Capital Letters:</b> A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z</p>
          `,
          examples: [
            { letter: 'A', sound: 'ए', word: 'Apple' },
            { letter: 'B', sound: 'बी', word: 'Ball' },
            { letter: 'C', sound: 'सी', word: 'Cat' },
            { letter: 'D', sound: 'डी', word: 'Dog' },
            { letter: 'E', sound: 'ई', word: 'Egg' }
          ]
        },
        {
          title: 'Step 2: Vowels & Consonants',
          type: 'info',
          content: `
            <p><b>Vowels (स्वर):</b> A, E, I, O, U (5 letters)</p>
            <p><b>Consonants (व्यंजन):</b> बाकी सभी 21 letters</p>
          `,
          examples: [
            { type: 'Vowel', letter: 'A', example: 'Apple' },
            { type: 'Vowel', letter: 'E', example: 'Egg' },
            { type: 'Consonant', letter: 'B', example: 'Ball' },
            { type: 'Consonant', letter: 'C', example: 'Cat' },
            { type: 'Consonant', letter: 'D', example: 'Dog' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: 'कौन सा vowel है?', options: ['B', 'A', 'K', 'M'], answer: 'A' },
        { type: 'mcq', q: 'कौन सा consonant है?', options: ['A', 'E', 'I', 'B'], answer: 'B' },
        { type: 'mcq', q: 'C का sound क्या है?', options: ['सी', 'बी', 'ए', 'डी'], answer: 'सी' },
        { type: 'mcq', q: 'कितने vowels होते हैं?', options: ['3', '4', '5', '6'], answer: '5' },
        { type: 'mcq', q: 'M कौन सा letter है?', options: ['Vowel', 'Consonant', 'Both', 'None'], answer: 'Consonant' }
      ]
    },

    // ═══════════════════════════════════════════
    // TOPIC 2: Subject + Verb + Object (SVO)
    // ═══════════════════════════════════════════
    {
      id: 'svo',
      title: 'Subject + Verb + Object',
      icon: '🧩',
      intro: 'सीखो simple sentence कैसे बनाते हैं',
      lessons: [
        {
          title: 'Step 1: Kya hai S+V+O?',
          type: 'info',
          content: `
            <p>हर English sentence में 3 parts होते हैं:</p>
            <p>• <b>Subject</b> = कौन? (Ram, She, The boy)</p>
            <p>• <b>Verb</b> = क्या करता है? (eats, reads, plays)</p>
            <p>• <b>Object</b> = क्या? (apple, book, cricket)</p>
          `,
          examples: [
            { s: 'Ram', v: 'eats', o: 'an apple' },
            { s: 'She', v: 'reads', o: 'a book' },
            { s: 'They', v: 'play', o: 'cricket' },
            { s: 'I', v: 'drink', o: 'water' },
            { s: 'The boy', v: 'kicks', o: 'the ball' }
          ]
        },
        {
          title: 'Step 2: Practice — Sentence Banao',
          type: 'slot',
          instruction: 'Words को सही order में रखो',
          questions: [
            { slots: ['Subject', 'Verb', 'Object'], words: ['eats', 'Ram', 'an apple'], answer: ['Ram', 'eats', 'an apple'] },
            { slots: ['Subject', 'Verb', 'Object'], words: ['a book', 'She', 'reads'], answer: ['She', 'reads', 'a book'] },
            { slots: ['Subject', 'Verb', 'Object'], words: ['cricket', 'They', 'play'], answer: ['They', 'play', 'cricket'] },
            { slots: ['Subject', 'Verb', 'Object'], words: ['water', 'I', 'drink'], answer: ['I', 'drink', 'water'] },
            { slots: ['Subject', 'Verb', 'Object'], words: ['the ball', 'kicks', 'The boy'], answer: ['The boy', 'kicks', 'the ball'] }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: 'सही sentence कौन सा है?', options: ['Ram eats an apple', 'eats Ram an apple', 'an apple Ram eats', 'Ram an apple eats'], answer: 'Ram eats an apple' },
        { type: 'mcq', q: '"She reads a book" में Subject कौन है?', options: ['She', 'reads', 'book', 'a'], answer: 'She' },
        { type: 'mcq', q: '"They play cricket" में Object कौन है?', options: ['They', 'play', 'cricket', 'none'], answer: 'cricket' },
        { type: 'mcq', q: 'सही sentence:', options: ['I drink water', 'drink I water', 'water drink I', 'I water drink'], answer: 'I drink water' },
        { type: 'mcq', q: '"The boy kicks the ball" में Verb कौन है?', options: ['The boy', 'kicks', 'the ball', 'boy'], answer: 'kicks' }
      ]
    },

    // ═══════════════════════════════════════════
    // TOPIC 3: Simple Present Tense
    // ═══════════════════════════════════════════
    {
      id: 'simple-present',
      title: 'Simple Present Tense',
      icon: '⏰',
      intro: 'Present tense में बात कैसे करें',
      lessons: [
        {
          title: 'Step 1: Positive Sentences',
          type: 'info',
          content: `
            <p><b>Simple Present</b> = रोज़ होने वाली बातें।</p>
            <p>Rule: Subject + Verb(s/es) + Object</p>
          `,
          examples: [
            { sentence: 'I go to school.', hi: 'मैं स्कूल जाता हूँ' },
            { sentence: 'She reads a book.', hi: 'वह किताब पढ़ती है' },
            { sentence: 'Ram eats an apple.', hi: 'राम सेब खाता है' },
            { sentence: 'We play cricket.', hi: 'हम क्रिकेट खेलते हैं' },
            { sentence: 'They watch TV.', hi: 'वे टीवी देखते हैं' }
          ]
        },
        {
          title: 'Step 2: Practice — Positive',
          type: 'slot',
          instruction: 'Positive sentence बनाओ',
          questions: [
            { slots: ['Subject', 'Verb', 'Object'], words: ['go', 'I', 'school', 'to'], answer: ['I', 'go', 'to school'] },
            { slots: ['Subject', 'Verb', 'Object'], words: ['reads', 'She', 'a book'], answer: ['She', 'reads', 'a book'] },
            { slots: ['Subject', 'Verb', 'Object'], words: ['eats', 'Ram', 'an apple'], answer: ['Ram', 'eats', 'an apple'] },
            { slots: ['Subject', 'Verb', 'Object'], words: ['play', 'We', 'cricket'], answer: ['We', 'play', 'cricket'] },
            { slots: ['Subject', 'Verb', 'Object'], words: ['watch', 'They', 'TV'], answer: ['They', 'watch TV'] }
          ]
        },
        {
          title: 'Step 3: Negative Sentences',
          type: 'info',
          content: `
            <p><b>Negative</b> = नहीं (do not / does not)</p>
            <p>Rule: Subject + do/does + not + Verb + Object</p>
          `,
          examples: [
            { sentence: 'I do not go to school.', hi: 'मैं स्कूल नहीं जाता' },
            { sentence: 'She does not read a book.', hi: 'वह किताब नहीं पढ़ती' },
            { sentence: 'Ram does not eat an apple.', hi: 'राम सेब नहीं खाता' },
            { sentence: 'We do not play cricket.', hi: 'हम क्रिकेट नहीं खेलते' },
            { sentence: 'They do not watch TV.', hi: 'वे टीवी नहीं देखते' }
          ]
        },
        {
          title: 'Step 4: Practice — Negative',
          type: 'slot',
          instruction: 'Negative sentence बनाओ',
          questions: [
            { slots: ['Subject', 'Aux', 'Not', 'Verb', 'Object'], words: ['not', 'I', 'go', 'do', 'school', 'to'], answer: ['I', 'do', 'not', 'go', 'to school'] },
            { slots: ['Subject', 'Aux', 'Not', 'Verb', 'Object'], words: ['does', 'not', 'She', 'read', 'a book'], answer: ['She', 'does', 'not', 'read', 'a book'] },
            { slots: ['Subject', 'Aux', 'Not', 'Verb', 'Object'], words: ['does', 'Ram', 'not', 'eat', 'an apple'], answer: ['Ram', 'does', 'not', 'eat', 'an apple'] },
            { slots: ['Subject', 'Aux', 'Not', 'Verb', 'Object'], words: ['do', 'We', 'not', 'play', 'cricket'], answer: ['We', 'do', 'not', 'play', 'cricket'] },
            { slots: ['Subject', 'Aux', 'Not', 'Verb', 'Object'], words: ['They', 'do', 'not', 'watch', 'TV'], answer: ['They', 'do', 'not', 'watch TV'] }
          ]
        },
        {
          title: 'Step 5: WH Questions',
          type: 'info',
          content: `
            <p><b>WH Questions</b> = What, Where, When, Who, Why, How</p>
            <p>Rule: Wh + do/does + Subject + Verb?</p>
          `,
          examples: [
            { sentence: 'Where do you go?', hi: 'तुम कहाँ जाते हो?' },
            { sentence: 'What does she read?', hi: 'वह क्या पढ़ती है?' },
            { sentence: 'What does Ram eat?', hi: 'राम क्या खाता है?' },
            { sentence: 'When do we play?', hi: 'हम कब खेलते हैं?' },
            { sentence: 'Why do they watch TV?', hi: 'वे टीवी क्यों देखते हैं?' }
          ]
        },
        {
          title: 'Step 6: Practice — WH Questions',
          type: 'slot',
          instruction: 'WH question बनाओ',
          questions: [
            { slots: ['Wh', 'Aux', 'Subject', 'Verb'], words: ['you', 'Where', 'go', 'do'], answer: ['Where', 'do', 'you', 'go'] },
            { slots: ['Wh', 'Aux', 'Subject', 'Verb'], words: ['does', 'What', 'she', 'read'], answer: ['What', 'does', 'she', 'read'] },
            { slots: ['Wh', 'Aux', 'Subject', 'Verb'], words: ['does', 'What', 'Ram', 'eat'], answer: ['What', 'does', 'Ram', 'eat'] },
            { slots: ['Wh', 'Aux', 'Subject', 'Verb'], words: ['do', 'When', 'we', 'play'], answer: ['When', 'do', 'we', 'play'] },
            { slots: ['Wh', 'Aux', 'Subject', 'Verb'], words: ['they', 'Why', 'watch', 'do'], answer: ['Why', 'do', 'they', 'watch'] }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: 'She ___ to school every day.', options: ['go', 'goes', 'going', 'went'], answer: 'goes' },
        { type: 'mcq', q: 'I ___ not like tea.', options: ['do', 'does', 'is', 'am'], answer: 'do' },
        { type: 'mcq', q: '___ does he go?', options: ['What', 'Where', 'When', 'Why'], answer: 'Where' },
        { type: 'mcq', q: 'They ___ cricket every Sunday.', options: ['play', 'plays', 'playing', 'played'], answer: 'play' },
        { type: 'mcq', q: 'Ram ___ eat meat.', options: ['do not', 'does not', 'is not', 'are not'], answer: 'does not' }
      ]
    },

    // ═══════════════════════════════════════════
    // TOPIC 4: Articles (a, an, the)
    // ═══════════════════════════════════════════
    {
      id: 'articles',
      title: 'Articles (a, an, the)',
      icon: '🔗',
      intro: 'सीखो a, an, the का use',
      lessons: [
        {
          title: 'Step 1: A vs An',
          type: 'info',
          content: `
            <p><b>A</b> = Consonant sound से पहले (a book, a car)</p>
            <p><b>An</b> = Vowel sound से पहले (an apple, an egg)</p>
          `,
          examples: [
            { article: 'a', word: 'book', sentence: 'I have a book.' },
            { article: 'an', word: 'apple', sentence: 'She eats an apple.' },
            { article: 'a', word: 'car', sentence: 'He drives a car.' },
            { article: 'an', word: 'egg', sentence: 'I ate an egg.' },
            { article: 'a', word: 'dog', sentence: 'It is a dog.' }
          ]
        },
        {
          title: 'Step 2: The (Specific)',
          type: 'info',
          content: `
            <p><b>The</b> = Specific चीज़ के लिए (the sun, the book you gave me)</p>
          `,
          examples: [
            { sentence: 'The sun rises in the east.', hi: 'सूरज पूर्व में उगता है' },
            { sentence: 'The book you gave me is good.', hi: 'जो किताब तुमने दी वो अच्छी है' },
            { sentence: 'The Taj Mahal is in Agra.', hi: 'ताजमहल आगरा में है' },
            { sentence: 'Close the door.', hi: 'दरवाज़ा बंद करो' },
            { sentence: 'The Ganga is a holy river.', hi: 'गंगा पवित्र नदी है' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: '___ apple a day keeps doctor away.', options: ['A', 'An', 'The', '—'], answer: 'An' },
        { type: 'mcq', q: 'I saw ___ elephant.', options: ['a', 'an', 'the', '—'], answer: 'an' },
        { type: 'mcq', q: '___ sun is bright.', options: ['A', 'An', 'The', '—'], answer: 'The' },
        { type: 'mcq', q: 'She has ___ dog.', options: ['a', 'an', 'the', '—'], answer: 'a' },
        { type: 'mcq', q: 'He is ___ honest man.', options: ['a', 'an', 'the', '—'], answer: 'an' }
      ]
    },

    // ═══════════════════════════════════════════
    // TOPIC 5: Basic Verbs (is/am/are)
    // ═══════════════════════════════════════════
    {
      id: 'be-verbs',
      title: 'Be Verbs (is/am/are)',
      icon: '⚡',
      intro: 'सीखो is, am, are का use',
      lessons: [
        {
          title: 'Step 1: Rule',
          type: 'info',
          content: `
            <p><b>I → am</b></p>
            <p><b>He/She/It → is</b></p>
            <p><b>We/You/They → are</b></p>
          `,
          examples: [
            { sentence: 'I am a student.', hi: 'मैं छात्र हूँ' },
            { sentence: 'She is happy.', hi: 'वह खुश है' },
            { sentence: 'He is a doctor.', hi: 'वह डॉक्टर है' },
            { sentence: 'We are friends.', hi: 'हम दोस्त हैं' },
            { sentence: 'They are playing.', hi: 'वे खेल रहे हैं' }
          ]
        }
      ],
      practice: [
        { type: 'mcq', q: 'I ___ a teacher.', options: ['am', 'is', 'are', 'be'], answer: 'am' },
        { type: 'mcq', q: 'She ___ my sister.', options: ['am', 'is', 'are', 'be'], answer: 'is' },
        { type: 'mcq', q: 'They ___ happy.', options: ['am', 'is', 'are', 'be'], answer: 'are' },
        { type: 'mcq', q: 'We ___ students.', options: ['am', 'is', 'are', 'be'], answer: 'are' },
        { type: 'mcq', q: 'It ___ a cat.', options: ['am', 'is', 'are', 'be'], answer: 'is' }
      ]
    }
  ]
};
