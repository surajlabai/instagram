// module1.js — MODULE 1: Foundational English (COMPLETE)
// Cards 1-5: Letters, IPA Sounds, Verbs, Be Verbs, Modern Verbs

// ═══════════════════════════════════════════════════════════
// CARD 1, 2, 3 — Letters, IPA Sounds, Verbs
// ═══════════════════════════════════════════════════════════
var MODULE1_CARDS = [

  // CARD 1: LETTERS
  {
    id: 'letters',
    title: 'Letters (A-Z)',
    icon: '🔤',
    desc: 'Capital + Small letters with sound',
    type: 'letters',
    letters: [
      { capital: 'A', small: 'a', sound: 'ए', word: 'Apple' },
      { capital: 'B', small: 'b', sound: 'बी', word: 'Ball' },
      { capital: 'C', small: 'c', sound: 'सी', word: 'Cat' },
      { capital: 'D', small: 'd', sound: 'डी', word: 'Dog' },
      { capital: 'E', small: 'e', sound: 'ई', word: 'Egg' },
      { capital: 'F', small: 'f', sound: 'एफ़', word: 'Fish' },
      { capital: 'G', small: 'g', sound: 'जी', word: 'Goat' },
      { capital: 'H', small: 'h', sound: 'एच', word: 'Hat' },
      { capital: 'I', small: 'i', sound: 'आइ', word: 'Ice' },
      { capital: 'J', small: 'j', sound: 'जे', word: 'Jug' },
      { capital: 'K', small: 'k', sound: 'के', word: 'Kite' },
      { capital: 'L', small: 'l', sound: 'एल', word: 'Lion' },
      { capital: 'M', small: 'm', sound: 'एम', word: 'Moon' },
      { capital: 'N', small: 'n', sound: 'एन', word: 'Nest' },
      { capital: 'O', small: 'o', sound: 'ओ', word: 'Orange' },
      { capital: 'P', small: 'p', sound: 'पी', word: 'Pen' },
      { capital: 'Q', small: 'q', sound: 'क्यू', word: 'Queen' },
      { capital: 'R', small: 'r', sound: 'आर', word: 'Rat' },
      { capital: 'S', small: 's', sound: 'एस', word: 'Sun' },
      { capital: 'T', small: 't', sound: 'टी', word: 'Tree' },
      { capital: 'U', small: 'u', sound: 'यू', word: 'Umbrella' },
      { capital: 'V', small: 'v', sound: 'वी', word: 'Van' },
      { capital: 'W', small: 'w', sound: 'डब्ल्यू', word: 'Watch' },
      { capital: 'X', small: 'x', sound: 'एक्स', word: 'Xylophone' },
      { capital: 'Y', small: 'y', sound: 'वाय', word: 'Yak' },
      { capital: 'Z', small: 'z', sound: 'ज़ेड', word: 'Zebra' }
    ]
  },

  // CARD 2: IPA SOUNDS
  {
    id: 'sounds',
    title: 'IPA Sounds',
    icon: '🔊',
    desc: '20 Vowel + 24 Consonant sounds',
    type: 'sounds',
    letters: [
      { capital: 'A', small: 'a', sound: 'ए', word: 'Apple' },
      { capital: 'E', small: 'e', sound: 'ई', word: 'Egg' },
      { capital: 'I', small: 'i', sound: 'आइ', word: 'Ice' },
      { capital: 'O', small: 'o', sound: 'ओ', word: 'Orange' },
      { capital: 'U', small: 'u', sound: 'यू', word: 'Umbrella' },
      { capital: 'B', small: 'b', sound: 'बी', word: 'Ball' },
      { capital: 'C', small: 'c', sound: 'सी', word: 'Cat' },
      { capital: 'D', small: 'd', sound: 'डी', word: 'Dog' },
      { capital: 'F', small: 'f', sound: 'एफ़', word: 'Fish' },
      { capital: 'G', small: 'g', sound: 'जी', word: 'Goat' },
      { capital: 'H', small: 'h', sound: 'एच', word: 'Hat' },
      { capital: 'J', small: 'j', sound: 'जे', word: 'Jug' },
      { capital: 'K', small: 'k', sound: 'के', word: 'Kite' },
      { capital: 'L', small: 'l', sound: 'एल', word: 'Lion' },
      { capital: 'M', small: 'm', sound: 'एम', word: 'Moon' },
      { capital: 'N', small: 'n', sound: 'एन', word: 'Nest' },
      { capital: 'P', small: 'p', sound: 'पी', word: 'Pen' },
      { capital: 'Q', small: 'q', sound: 'क्यू', word: 'Queen' },
      { capital: 'R', small: 'r', sound: 'आर', word: 'Rat' },
      { capital: 'S', small: 's', sound: 'एस', word: 'Sun' },
      { capital: 'T', small: 't', sound: 'टी', word: 'Tree' },
      { capital: 'V', small: 'v', sound: 'वी', word: 'Van' },
      { capital: 'W', small: 'w', sound: 'डब्ल्यू', word: 'Watch' },
      { capital: 'X', small: 'x', sound: 'एक्स', word: 'Xylophone' },
      { capital: 'Y', small: 'y', sound: 'वाय', word: 'Yak' },
      { capital: 'Z', small: 'z', sound: 'ज़ेड', word: 'Zebra' }
    ],
    sounds: [
      {
        id: 'vowels',
        title: 'Vowels',
        icon: '🅰️',
        items: [
          { symbol: '/iː/', sound: 'ई (long)', word: 'sheep' },
          { symbol: '/ɪ/', sound: 'इ (short)', word: 'sit' },
          { symbol: '/e/', sound: 'ए', word: 'bed' },
          { symbol: '/æ/', sound: 'कै', word: 'cat' },
          { symbol: '/ɑː/', sound: 'आ (long)', word: 'car' },
          { symbol: '/ɒ/', sound: 'ऑ', word: 'hot' },
          { symbol: '/ɔː/', sound: 'ओ (long)', word: 'door' },
          { symbol: '/ʊ/', sound: 'उ (short)', word: 'book' },
          { symbol: '/uː/', sound: 'ऊ (long)', word: 'food' },
          { symbol: '/ʌ/', sound: 'अ', word: 'cup' },
          { symbol: '/ɜː/', sound: 'अर्', word: 'bird' },
          { symbol: '/ə/', sound: 'अ (weak)', word: 'about' },
          { symbol: '/eɪ/', sound: 'एइ', word: 'cake' },
          { symbol: '/aɪ/', sound: 'आइ', word: 'bike' },
          { symbol: '/ɔɪ/', sound: 'ऑइ', word: 'boy' },
          { symbol: '/aʊ/', sound: 'आउ', word: 'house' },
          { symbol: '/əʊ/', sound: 'ओउ', word: 'go' },
          { symbol: '/ɪə/', sound: 'इअ', word: 'here' },
          { symbol: '/eə/', sound: 'एअ', word: 'hair' },
          { symbol: '/ʊə/', sound: 'उअ', word: 'tour' }
        ]
      },
      {
        id: 'consonants',
        title: 'Consonants',
        icon: '🅱️',
        items: [
          { symbol: '/p/', sound: 'प', word: 'pen' },
          { symbol: '/b/', sound: 'ब', word: 'book' },
          { symbol: '/t/', sound: 'ट', word: 'tea' },
          { symbol: '/d/', sound: 'ड', word: 'dog' },
          { symbol: '/k/', sound: 'क', word: 'cat' },
          { symbol: '/g/', sound: 'ग', word: 'go' },
          { symbol: '/f/', sound: 'फ़', word: 'fish' },
          { symbol: '/v/', sound: 'व', word: 'van' },
          { symbol: '/θ/', sound: 'थ', word: 'think' },
          { symbol: '/ð/', sound: 'द', word: 'this' },
          { symbol: '/s/', sound: 'स', word: 'sun' },
          { symbol: '/z/', sound: 'ज़', word: 'zoo' },
          { symbol: '/ʃ/', sound: 'श', word: 'she' },
          { symbol: '/ʒ/', sound: 'झ़', word: 'vision' },
          { symbol: '/h/', sound: 'ह', word: 'hat' },
          { symbol: '/tʃ/', sound: 'च', word: 'chair' },
          { symbol: '/dʒ/', sound: 'ज', word: 'jam' },
          { symbol: '/m/', sound: 'म', word: 'man' },
          { symbol: '/n/', sound: 'न', word: 'no' },
          { symbol: '/ŋ/', sound: 'ङ (नाक)', word: 'sing' },
          { symbol: '/l/', sound: 'ल', word: 'love' },
          { symbol: '/r/', sound: 'र', word: 'red' },
          { symbol: '/j/', sound: 'य', word: 'yes' },
          { symbol: '/w/', sound: 'व', word: 'wet' }
        ]
      }
    ]
  },

  // CARD 3: VERBS (A-Z)
  {
    id: 'verbs',
    title: 'Verbs (A-Z)',
    icon: '⚡',
    desc: 'A-Z verbs with V1, V2, V3 forms',
    type: 'verbs',
    groups: [
      { letter: 'A', verbs: [
        { v1: 'ask', v2: 'asked', v3: 'asked', hi: 'पूछना' },
        { v1: 'answer', v2: 'answered', v3: 'answered', hi: 'जवाब देना' },
        { v1: 'arrive', v2: 'arrived', v3: 'arrived', hi: 'पहुँचना' },
        { v1: 'add', v2: 'added', v3: 'added', hi: 'जोड़ना' },
        { v1: 'accept', v2: 'accepted', v3: 'accepted', hi: 'स्वीकार करना' },
        { v1: 'allow', v2: 'allowed', v3: 'allowed', hi: 'अनुमति देना' },
        { v1: 'agree', v2: 'agreed', v3: 'agreed', hi: 'सहमत होना' },
        { v1: 'avoid', v2: 'avoided', v3: 'avoided', hi: 'बचना' },
        { v1: 'appear', v2: 'appeared', v3: 'appeared', hi: 'दिखाई देना' },
        { v1: 'apply', v2: 'applied', v3: 'applied', hi: 'आवेदन करना' },
        { v1: 'argue', v2: 'argued', v3: 'argued', hi: 'बहस करना' },
        { v1: 'attack', v2: 'attacked', v3: 'attacked', hi: 'हमला करना' },
        { v1: 'attend', v2: 'attended', v3: 'attended', hi: 'उपस्थित होना' },
        { v1: 'admire', v2: 'admired', v3: 'admired', hi: 'प्रशंसा करना' },
        { v1: 'advise', v2: 'advised', v3: 'advised', hi: 'सलाह देना' }
      ]},
      { letter: 'B', verbs: [
        { v1: 'be', v2: 'was/were', v3: 'been', hi: 'होना' },
        { v1: 'become', v2: 'became', v3: 'become', hi: 'बनना' },
        { v1: 'begin', v2: 'began', v3: 'begun', hi: 'शुरू करना' },
        { v1: 'believe', v2: 'believed', v3: 'believed', hi: 'विश्वास करना' },
        { v1: 'bring', v2: 'brought', v3: 'brought', hi: 'लाना' },
        { v1: 'buy', v2: 'bought', v3: 'bought', hi: 'खरीदना' },
        { v1: 'build', v2: 'built', v3: 'built', hi: 'बनाना' },
        { v1: 'break', v2: 'broke', v3: 'broken', hi: 'तोड़ना' },
        { v1: 'burn', v2: 'burned', v3: 'burned', hi: 'जलाना' },
        { v1: 'borrow', v2: 'borrowed', v3: 'borrowed', hi: 'उधार लेना' },
        { v1: 'bake', v2: 'baked', v3: 'baked', hi: 'सेंकना' },
        { v1: 'bathe', v2: 'bathed', v3: 'bathed', hi: 'नहाना' },
        { v1: 'bite', v2: 'bit', v3: 'bitten', hi: 'काटना' },
        { v1: 'blow', v2: 'blew', v3: 'blown', hi: 'फूंक मारना' },
        { v1: 'boil', v2: 'boiled', v3: 'boiled', hi: 'उबालना' }
      ]},
      { letter: 'C', verbs: [
        { v1: 'call', v2: 'called', v3: 'called', hi: 'बुलाना' },
        { v1: 'carry', v2: 'carried', v3: 'carried', hi: 'ले जाना' },
        { v1: 'catch', v2: 'caught', v3: 'caught', hi: 'पकड़ना' },
        { v1: 'change', v2: 'changed', v3: 'changed', hi: 'बदलना' },
        { v1: 'choose', v2: 'chose', v3: 'chosen', hi: 'चुनना' },
        { v1: 'clean', v2: 'cleaned', v3: 'cleaned', hi: 'साफ करना' },
        { v1: 'climb', v2: 'climbed', v3: 'climbed', hi: 'चढ़ना' },
        { v1: 'close', v2: 'closed', v3: 'closed', hi: 'बंद करना' },
        { v1: 'come', v2: 'came', v3: 'come', hi: 'आना' },
        { v1: 'cook', v2: 'cooked', v3: 'cooked', hi: 'पकाना' },
        { v1: 'count', v2: 'counted', v3: 'counted', hi: 'गिनना' },
        { v1: 'cry', v2: 'cried', v3: 'cried', hi: 'रोना' },
        { v1: 'cut', v2: 'cut', v3: 'cut', hi: 'काटना' },
        { v1: 'compare', v2: 'compared', v3: 'compared', hi: 'तुलना करना' },
        { v1: 'create', v2: 'created', v3: 'created', hi: 'बनाना' }
      ]},
      { letter: 'D', verbs: [
        { v1: 'dance', v2: 'danced', v3: 'danced', hi: 'नाचना' },
        { v1: 'decide', v2: 'decided', v3: 'decided', hi: 'तय करना' },
        { v1: 'die', v2: 'died', v3: 'died', hi: 'मरना' },
        { v1: 'dig', v2: 'dug', v3: 'dug', hi: 'खोदना' },
        { v1: 'do', v2: 'did', v3: 'done', hi: 'करना' },
        { v1: 'draw', v2: 'drew', v3: 'drawn', hi: 'चित्र बनाना' },
        { v1: 'dream', v2: 'dreamed', v3: 'dreamed', hi: 'सपना देखना' },
        { v1: 'drink', v2: 'drank', v3: 'drunk', hi: 'पीना' },
        { v1: 'drive', v2: 'drove', v3: 'driven', hi: 'गाड़ी चलाना' },
        { v1: 'drop', v2: 'dropped', v3: 'dropped', hi: 'गिराना' },
        { v1: 'deliver', v2: 'delivered', v3: 'delivered', hi: 'पहुँचाना' },
        { v1: 'demand', v2: 'demanded', v3: 'demanded', hi: 'मांग करना' },
        { v1: 'describe', v2: 'described', v3: 'described', hi: 'वर्णन करना' },
        { v1: 'destroy', v2: 'destroyed', v3: 'destroyed', hi: 'नष्ट करना' },
        { v1: 'develop', v2: 'developed', v3: 'developed', hi: 'विकसित करना' }
      ]},
      { letter: 'E', verbs: [
        { v1: 'earn', v2: 'earned', v3: 'earned', hi: 'कमाना' },
        { v1: 'eat', v2: 'ate', v3: 'eaten', hi: 'खाना' },
        { v1: 'enter', v2: 'entered', v3: 'entered', hi: 'प्रवेश करना' },
        { v1: 'enjoy', v2: 'enjoyed', v3: 'enjoyed', hi: 'आनंद लेना' },
        { v1: 'examine', v2: 'examined', v3: 'examined', hi: 'जाँचना' },
        { v1: 'expect', v2: 'expected', v3: 'expected', hi: 'अपेक्षा करना' },
        { v1: 'explain', v2: 'explained', v3: 'explained', hi: 'समझाना' },
        { v1: 'exist', v2: 'existed', v3: 'existed', hi: 'मौजूद होना' },
        { v1: 'expand', v2: 'expanded', v3: 'expanded', hi: 'फैलाना' },
        { v1: 'express', v2: 'expressed', v3: 'expressed', hi: 'व्यक्त करना' },
        { v1: 'educate', v2: 'educated', v3: 'educated', hi: 'शिक्षित करना' },
        { v1: 'elect', v2: 'elected', v3: 'elected', hi: 'चुनना' },
        { v1: 'employ', v2: 'employed', v3: 'employed', hi: 'नौकरी देना' },
        { v1: 'escape', v2: 'escaped', v3: 'escaped', hi: 'भागना' },
        { v1: 'excite', v2: 'excited', v3: 'excited', hi: 'उत्साहित करना' }
      ]},
      { letter: 'F', verbs: [
        { v1: 'fall', v2: 'fell', v3: 'fallen', hi: 'गिरना' },
        { v1: 'feel', v2: 'felt', v3: 'felt', hi: 'महसूस करना' },
        { v1: 'fight', v2: 'fought', v3: 'fought', hi: 'लड़ना' },
        { v1: 'find', v2: 'found', v3: 'found', hi: 'खोजना' },
        { v1: 'fly', v2: 'flew', v3: 'flown', hi: 'उड़ना' },
        { v1: 'forget', v2: 'forgot', v3: 'forgotten', hi: 'भूलना' },
        { v1: 'forgive', v2: 'forgave', v3: 'forgiven', hi: 'माफ़ करना' },
        { v1: 'freeze', v2: 'froze', v3: 'frozen', hi: 'जमना' },
        { v1: 'feed', v2: 'fed', v3: 'fed', hi: 'खिलाना' },
        { v1: 'fill', v2: 'filled', v3: 'filled', hi: 'भरना' },
        { v1: 'finish', v2: 'finished', v3: 'finished', hi: 'खत्म करना' },
        { v1: 'fix', v2: 'fixed', v3: 'fixed', hi: 'ठीक करना' },
        { v1: 'follow', v2: 'followed', v3: 'followed', hi: 'पीछा करना' },
        { v1: 'fry', v2: 'fried', v3: 'fried', hi: 'तलना' },
        { v1: 'fail', v2: 'failed', v3: 'failed', hi: 'असफल होना' }
      ]},
      { letter: 'G', verbs: [
        { v1: 'give', v2: 'gave', v3: 'given', hi: 'देना' },
        { v1: 'go', v2: 'went', v3: 'gone', hi: 'जाना' },
        { v1: 'get', v2: 'got', v3: 'gotten', hi: 'पाना' },
        { v1: 'grow', v2: 'grew', v3: 'grown', hi: 'बढ़ना' },
        { v1: 'gather', v2: 'gathered', v3: 'gathered', hi: 'इकट्ठा करना' },
        { v1: 'glance', v2: 'glanced', v3: 'glanced', hi: 'नज़र डालना' },
        { v1: 'glow', v2: 'glowed', v3: 'glowed', hi: 'चमकना' },
        { v1: 'govern', v2: 'governed', v3: 'governed', hi: 'शासन करना' },
        { v1: 'grab', v2: 'grabbed', v3: 'grabbed', hi: 'झपटना' },
        { v1: 'greet', v2: 'greeted', v3: 'greeted', hi: 'नमस्ते करना' },
        { v1: 'grin', v2: 'grinned', v3: 'grinned', hi: 'मुस्कुराना' },
        { v1: 'grind', v2: 'ground', v3: 'ground', hi: 'पीसना' },
        { v1: 'grip', v2: 'gripped', v3: 'gripped', hi: 'पकड़ना' },
        { v1: 'guess', v2: 'guessed', v3: 'guessed', hi: 'अनुमान लगाना' },
        { v1: 'guide', v2: 'guided', v3: 'guided', hi: 'रास्ता दिखाना' }
      ]},
      { letter: 'H', verbs: [
        { v1: 'have', v2: 'had', v3: 'had', hi: 'होना/पास होना' },
        { v1: 'hear', v2: 'heard', v3: 'heard', hi: 'सुनना' },
        { v1: 'help', v2: 'helped', v3: 'helped', hi: 'मदद करना' },
        { v1: 'hide', v2: 'hid', v3: 'hidden', hi: 'छिपाना' },
        { v1: 'hit', v2: 'hit', v3: 'hit', hi: 'मारना' },
        { v1: 'hold', v2: 'held', v3: 'held', hi: 'पकड़ना' },
        { v1: 'hope', v2: 'hoped', v3: 'hoped', hi: 'उम्मीद करना' },
        { v1: 'hug', v2: 'hugged', v3: 'hugged', hi: 'गले लगाना' },
        { v1: 'hunt', v2: 'hunted', v3: 'hunted', hi: 'शिकार करना' },
        { v1: 'hurry', v2: 'hurried', v3: 'hurried', hi: 'जल्दी करना' },
        { v1: 'handle', v2: 'handled', v3: 'handled', hi: 'संभालना' },
        { v1: 'hang', v2: 'hung', v3: 'hung', hi: 'लटकाना' },
        { v1: 'happen', v2: 'happened', v3: 'happened', hi: 'होना' },
        { v1: 'harm', v2: 'harmed', v3: 'harmed', hi: 'नुकसान करना' },
        { v1: 'hate', v2: 'hated', v3: 'hated', hi: 'नफरत करना' }
      ]},
      { letter: 'I', verbs: [
        { v1: 'ignore', v2: 'ignored', v3: 'ignored', hi: 'अनदेखा करना' },
        { v1: 'imagine', v2: 'imagined', v3: 'imagined', hi: 'कल्पना करना' },
        { v1: 'imply', v2: 'implied', v3: 'implied', hi: 'इशारा करना' },
        { v1: 'impress', v2: 'impressed', v3: 'impressed', hi: 'प्रभावित करना' },
        { v1: 'improve', v2: 'improved', v3: 'improved', hi: 'सुधारना' },
        { v1: 'include', v2: 'included', v3: 'included', hi: 'शामिल करना' },
        { v1: 'increase', v2: 'increased', v3: 'increased', hi: 'बढ़ाना' },
        { v1: 'indicate', v2: 'indicated', v3: 'indicated', hi: 'संकेत देना' },
        { v1: 'inform', v2: 'informed', v3: 'informed', hi: 'सूचित करना' },
        { v1: 'insist', v2: 'insisted', v3: 'insisted', hi: 'ज़ोर देना' },
        { v1: 'inspect', v2: 'inspected', v3: 'inspected', hi: 'निरीक्षण करना' },
        { v1: 'inspire', v2: 'inspired', v3: 'inspired', hi: 'प्रेरित करना' },
        { v1: 'install', v2: 'installed', v3: 'installed', hi: 'स्थापित करना' },
        { v1: 'introduce', v2: 'introduced', v3: 'introduced', hi: 'परिचय देना' },
        { v1: 'invent', v2: 'invented', v3: 'invented', hi: 'आविष्कार करना' }
      ]},
      { letter: 'J', verbs: [
        { v1: 'jump', v2: 'jumped', v3: 'jumped', hi: 'कूदना' },
        { v1: 'join', v2: 'joined', v3: 'joined', hi: 'जुड़ना' },
        { v1: 'judge', v2: 'judged', v3: 'judged', hi: 'न्याय करना' },
        { v1: 'jam', v2: 'jammed', v3: 'jammed', hi: 'अटकाना' },
        { v1: 'jog', v2: 'jogged', v3: 'jogged', hi: 'धीरे दौड़ना' },
        { v1: 'joke', v2: 'joked', v3: 'joked', hi: 'मज़ाक करना' },
        { v1: 'jot', v2: 'jotted', v3: 'jotted', hi: 'लिख लेना' },
        { v1: 'journey', v2: 'journeyed', v3: 'journeyed', hi: 'यात्रा करना' },
        { v1: 'juggle', v2: 'juggled', v3: 'juggled', hi: 'करतब करना' },
        { v1: 'justify', v2: 'justified', v3: 'justified', hi: 'सही ठहराना' },
        { v1: 'jabber', v2: 'jabbered', v3: 'jabbered', hi: 'बकबक करना' },
        { v1: 'jail', v2: 'jailed', v3: 'jailed', hi: 'जेल भेजना' },
        { v1: 'jeer', v2: 'jeered', v3: 'jeered', hi: 'मज़ाक उड़ाना' },
        { v1: 'jell', v2: 'jelled', v3: 'jelled', hi: 'जमना' },
        { v1: 'jerk', v2: 'jerked', v3: 'jerked', hi: 'झटका देना' }
      ]},
      { letter: 'K', verbs: [
        { v1: 'keep', v2: 'kept', v3: 'kept', hi: 'रखना' },
        { v1: 'kick', v2: 'kicked', v3: 'kicked', hi: 'लात मारना' },
        { v1: 'kill', v2: 'killed', v3: 'killed', hi: 'मारना' },
        { v1: 'kiss', v2: 'kissed', v3: 'kissed', hi: 'चूमना' },
        { v1: 'kneel', v2: 'knelt', v3: 'knelt', hi: 'घुटने टेकना' },
        { v1: 'knit', v2: 'knitted', v3: 'knitted', hi: 'बुनना' },
        { v1: 'knock', v2: 'knocked', v3: 'knocked', hi: 'खटखटाना' },
        { v1: 'know', v2: 'knew', v3: 'known', hi: 'जानना' },
        { v1: 'key', v2: 'keyed', v3: 'keyed', hi: 'टाइप करना' },
        { v1: 'kid', v2: 'kidded', v3: 'kidded', hi: 'मज़ाक करना' },
        { v1: 'kindle', v2: 'kindled', v3: 'kindled', hi: 'जलाना' },
        { v1: 'knead', v2: 'kneaded', v3: 'kneaded', hi: 'गूंधना' },
        { v1: 'knot', v2: 'knotted', v3: 'knotted', hi: 'गांठ बांधना' },
        { v1: 'kowtow', v2: 'kowtowed', v3: 'kowtowed', hi: 'सिर झुकाना' },
        { v1: 'kickstart', v2: 'kickstarted', v3: 'kickstarted', hi: 'शुरू करना' }
      ]},
      { letter: 'L', verbs: [
        { v1: 'laugh', v2: 'laughed', v3: 'laughed', hi: 'हंसना' },
        { v1: 'lead', v2: 'led', v3: 'led', hi: 'नेतृत्व करना' },
        { v1: 'learn', v2: 'learned', v3: 'learned', hi: 'सीखना' },
        { v1: 'leave', v2: 'left', v3: 'left', hi: 'छोड़ना' },
        { v1: 'lend', v2: 'lent', v3: 'lent', hi: 'उधार देना' },
        { v1: 'lie', v2: 'lay', v3: 'lain', hi: 'लेटना' },
        { v1: 'listen', v2: 'listened', v3: 'listened', hi: 'सुनना' },
        { v1: 'live', v2: 'lived', v3: 'lived', hi: 'रहना' },
        { v1: 'look', v2: 'looked', v3: 'looked', hi: 'देखना' },
        { v1: 'lose', v2: 'lost', v3: 'lost', hi: 'खोना' },
        { v1: 'love', v2: 'loved', v3: 'loved', hi: 'प्यार करना' },
        { v1: 'land', v2: 'landed', v3: 'landed', hi: 'उतरना' },
        { v1: 'launch', v2: 'launched', v3: 'launched', hi: 'शुरू करना' },
        { v1: 'lay', v2: 'laid', v3: 'laid', hi: 'रखना' },
        { v1: 'leak', v2: 'leaked', v3: 'leaked', hi: 'रिसना' }
      ]},
      { letter: 'M', verbs: [
        { v1: 'make', v2: 'made', v3: 'made', hi: 'बनाना' },
        { v1: 'mean', v2: 'meant', v3: 'meant', hi: 'मतलब होना' },
        { v1: 'meet', v2: 'met', v3: 'met', hi: 'मिलना' },
        { v1: 'move', v2: 'moved', v3: 'moved', hi: 'हिलना' },
        { v1: 'manage', v2: 'managed', v3: 'managed', hi: 'संभालना' },
        { v1: 'march', v2: 'marched', v3: 'marched', hi: 'कूच करना' },
        { v1: 'mark', v2: 'marked', v3: 'marked', hi: 'निशान लगाना' },
        { v1: 'marry', v2: 'married', v3: 'married', hi: 'शादी करना' },
        { v1: 'matter', v2: 'mattered', v3: 'mattered', hi: 'मायने रखना' },
        { v1: 'measure', v2: 'measured', v3: 'measured', hi: 'मापना' },
        { v1: 'melt', v2: 'melted', v3: 'melted', hi: 'पिघलना' },
        { v1: 'mention', v2: 'mentioned', v3: 'mentioned', hi: 'ज़िक्र करना' },
        { v1: 'miss', v2: 'missed', v3: 'missed', hi: 'याद करना' },
        { v1: 'mix', v2: 'mixed', v3: 'mixed', hi: 'मिलाना' },
        { v1: 'mutter', v2: 'muttered', v3: 'muttered', hi: 'बुदबुदाना' }
      ]},
      { letter: 'N', verbs: [
        { v1: 'need', v2: 'needed', v3: 'needed', hi: 'ज़रूरत होना' },
        { v1: 'notice', v2: 'noticed', v3: 'noticed', hi: 'ध्यान देना' },
        { v1: 'name', v2: 'named', v3: 'named', hi: 'नाम रखना' },
        { v1: 'narrow', v2: 'narrowed', v3: 'narrowed', hi: 'संकरा करना' },
        { v1: 'near', v2: 'neared', v3: 'neared', hi: 'पास आना' },
        { v1: 'neglect', v2: 'neglected', v3: 'neglected', hi: 'उपेक्षा करना' },
        { v1: 'negotiate', v2: 'negotiated', v3: 'negotiated', hi: 'बातचीत करना' },
        { v1: 'nod', v2: 'nodded', v3: 'nodded', hi: 'सिर हिलाना' },
        { v1: 'nominate', v2: 'nominated', v3: 'nominated', hi: 'नामांकित करना' },
        { v1: 'nudge', v2: 'nudged', v3: 'nudged', hi: 'कुहनी मारना' },
        { v1: 'nurse', v2: 'nursed', v3: 'nursed', hi: 'देखभाल करना' },
        { v1: 'nag', v2: 'nagged', v3: 'nagged', hi: 'टोकना' },
        { v1: 'nail', v2: 'nailed', v3: 'nailed', hi: 'कील ठोकना' },
        { v1: 'nap', v2: 'napped', v3: 'napped', hi: 'झपकी लेना' },
        { v1: 'nibble', v2: 'nibbled', v3: 'nibbled', hi: 'कुतरना' }
      ]},
      { letter: 'O', verbs: [
        { v1: 'open', v2: 'opened', v3: 'opened', hi: 'खोलना' },
        { v1: 'offer', v2: 'offered', v3: 'offered', hi: 'पेशकश करना' },
        { v1: 'obey', v2: 'obeyed', v3: 'obeyed', hi: 'आज्ञा मानना' },
        { v1: 'observe', v2: 'observed', v3: 'observed', hi: 'निरीक्षण करना' },
        { v1: 'obtain', v2: 'obtained', v3: 'obtained', hi: 'प्राप्त करना' },
        { v1: 'occur', v2: 'occurred', v3: 'occurred', hi: 'घटित होना' },
        { v1: 'operate', v2: 'operated', v3: 'operated', hi: 'संचालित करना' },
        { v1: 'oppose', v2: 'opposed', v3: 'opposed', hi: 'विरोध करना' },
        { v1: 'order', v2: 'ordered', v3: 'ordered', hi: 'आदेश देना' },
        { v1: 'organize', v2: 'organized', v3: 'organized', hi: 'व्यवस्थित करना' },
        { v1: 'overcome', v2: 'overcame', v3: 'overcome', hi: 'काबू पाना' },
        { v1: 'owe', v2: 'owed', v3: 'owed', hi: 'कर्ज़ा होना' },
        { v1: 'own', v2: 'owned', v3: 'owned', hi: 'मालिक होना' },
        { v1: 'object', v2: 'objected', v3: 'objected', hi: 'आपत्ति करना' },
        { v1: 'occupy', v2: 'occupied', v3: 'occupied', hi: 'कब्जा करना' }
      ]},
      { letter: 'P', verbs: [
        { v1: 'play', v2: 'played', v3: 'played', hi: 'खेलना' },
        { v1: 'put', v2: 'put', v3: 'put', hi: 'रखना' },
        { v1: 'pay', v2: 'paid', v3: 'paid', hi: 'भुगतान करना' },
        { v1: 'pick', v2: 'picked', v3: 'picked', hi: 'उठाना' },
        { v1: 'pull', v2: 'pulled', v3: 'pulled', hi: 'खींचना' },
        { v1: 'push', v2: 'pushed', v3: 'pushed', hi: 'धक्का देना' },
        { v1: 'paint', v2: 'painted', v3: 'painted', hi: 'रंगना' },
        { v1: 'park', v2: 'parked', v3: 'parked', hi: 'गाड़ी खड़ी करना' },
        { v1: 'pass', v2: 'passed', v3: 'passed', hi: 'पास होना' },
        { v1: 'perform', v2: 'performed', v3: 'performed', hi: 'प्रदर्शन करना' },
        { v1: 'persuade', v2: 'persuaded', v3: 'persuaded', hi: 'मनाना' },
        { v1: 'plan', v2: 'planned', v3: 'planned', hi: 'योजना बनाना' },
        { v1: 'plant', v2: 'planted', v3: 'planted', hi: 'पौधा लगाना' },
        { v1: 'pray', v2: 'prayed', v3: 'prayed', hi: 'प्रार्थना करना' },
        { v1: 'protect', v2: 'protected', v3: 'protected', hi: 'रक्षा करना' }
      ]},
      { letter: 'Q', verbs: [
        { v1: 'question', v2: 'questioned', v3: 'questioned', hi: 'सवाल करना' },
        { v1: 'quit', v2: 'quit', v3: 'quit', hi: 'छोड़ना' },
        { v1: 'quote', v2: 'quoted', v3: 'quoted', hi: 'उद्धृत करना' },
        { v1: 'qualify', v2: 'qualified', v3: 'qualified', hi: 'योग्य होना' },
        { v1: 'quarrel', v2: 'quarreled', v3: 'quarreled', hi: 'झगड़ना' },
        { v1: 'quench', v2: 'quenched', v3: 'quenched', hi: 'बुझाना' },
        { v1: 'query', v2: 'queried', v3: 'queried', hi: 'पूछताछ करना' },
        { v1: 'quicken', v2: 'quickened', v3: 'quickened', hi: 'तेज़ करना' },
        { v1: 'quiver', v2: 'quivered', v3: 'quivered', hi: 'कांपना' },
        { v1: 'quiz', v2: 'quizzed', v3: 'quizzed', hi: 'परीक्षा लेना' },
        { v1: 'quell', v2: 'quelled', v3: 'quelled', hi: 'दबाना' },
        { v1: 'quilt', v2: 'quilted', v3: 'quilted', hi: 'रज़ाई बनाना' },
        { v1: 'quip', v2: 'quipped', v3: 'quipped', hi: 'चुटकी लेना' },
        { v1: 'quash', v2: 'quashed', v3: 'quashed', hi: 'रद्द करना' },
        { v1: 'queue', v2: 'queued', v3: 'queued', hi: 'कतार में लगना' }
      ]},
      { letter: 'R', verbs: [
        { v1: 'read', v2: 'read', v3: 'read', hi: 'पढ़ना' },
        { v1: 'run', v2: 'ran', v3: 'run', hi: 'दौड़ना' },
        { v1: 'raise', v2: 'raised', v3: 'raised', hi: 'उठाना' },
        { v1: 'reach', v2: 'reached', v3: 'reached', hi: 'पहुँचना' },
        { v1: 'realize', v2: 'realized', v3: 'realized', hi: 'एहसास होना' },
        { v1: 'receive', v2: 'received', v3: 'received', hi: 'प्राप्त करना' },
        { v1: 'recognize', v2: 'recognized', v3: 'recognized', hi: 'पहचानना' },
        { v1: 'recommend', v2: 'recommended', v3: 'recommended', hi: 'सिफारिश करना' },
        { v1: 'reduce', v2: 'reduced', v3: 'reduced', hi: 'कम करना' },
        { v1: 'refuse', v2: 'refused', v3: 'refused', hi: 'मना करना' },
        { v1: 'regard', v2: 'regarded', v3: 'regarded', hi: 'मानना' },
        { v1: 'register', v2: 'registered', v3: 'registered', hi: 'पंजीकरण करना' },
        { v1: 'regret', v2: 'regretted', v3: 'regretted', hi: 'पछताना' },
        { v1: 'reject', v2: 'rejected', v3: 'rejected', hi: 'अस्वीकार करना' },
        { v1: 'remember', v2: 'remembered', v3: 'remembered', hi: 'याद करना' }
      ]},
      { letter: 'S', verbs: [
        { v1: 'say', v2: 'said', v3: 'said', hi: 'कहना' },
        { v1: 'see', v2: 'saw', v3: 'seen', hi: 'देखना' },
        { v1: 'sell', v2: 'sold', v3: 'sold', hi: 'बेचना' },
        { v1: 'send', v2: 'sent', v3: 'sent', hi: 'भेजना' },
        { v1: 'sing', v2: 'sang', v3: 'sung', hi: 'गाना' },
        { v1: 'sit', v2: 'sat', v3: 'sat', hi: 'बैठना' },
        { v1: 'sleep', v2: 'slept', v3: 'slept', hi: 'सोना' },
        { v1: 'speak', v2: 'spoke', v3: 'spoken', hi: 'बोलना' },
        { v1: 'stand', v2: 'stood', v3: 'stood', hi: 'खड़ा होना' },
        { v1: 'start', v2: 'started', v3: 'started', hi: 'शुरू करना' },
        { v1: 'stay', v2: 'stayed', v3: 'stayed', hi: 'रहना' },
        { v1: 'stop', v2: 'stopped', v3: 'stopped', hi: 'रुकना' },
        { v1: 'study', v2: 'studied', v3: 'studied', hi: 'पढ़ाई करना' },
        { v1: 'succeed', v2: 'succeeded', v3: 'succeeded', hi: 'सफल होना' },
        { v1: 'swim', v2: 'swam', v3: 'swum', hi: 'तैरना' }
      ]},
      { letter: 'T', verbs: [
        { v1: 'take', v2: 'took', v3: 'taken', hi: 'लेना' },
        { v1: 'talk', v2: 'talked', v3: 'talked', hi: 'बात करना' },
        { v1: 'teach', v2: 'taught', v3: 'taught', hi: 'सिखाना' },
        { v1: 'tell', v2: 'told', v3: 'told', hi: 'बताना' },
        { v1: 'think', v2: 'thought', v3: 'thought', hi: 'सोचना' },
        { v1: 'throw', v2: 'threw', v3: 'thrown', hi: 'फेंकना' },
        { v1: 'travel', v2: 'traveled', v3: 'traveled', hi: 'यात्रा करना' },
        { v1: 'try', v2: 'tried', v3: 'tried', hi: 'कोशिश करना' },
        { v1: 'turn', v2: 'turned', v3: 'turned', hi: 'मुड़ना' },
        { v1: 'taste', v2: 'tasted', v3: 'tasted', hi: 'चखना' },
        { v1: 'thank', v2: 'thanked', v3: 'thanked', hi: 'धन्यवाद देना' },
        { v1: 'touch', v2: 'touched', v3: 'touched', hi: 'छूना' },
        { v1: 'train', v2: 'trained', v3: 'trained', hi: 'प्रशिक्षण देना' },
        { v1: 'trust', v2: 'trusted', v3: 'trusted', hi: 'भरोसा करना' },
        { v1: 'tie', v2: 'tied', v3: 'tied', hi: 'बांधना' }
      ]},
      { letter: 'U', verbs: [
        { v1: 'understand', v2: 'understood', v3: 'understood', hi: 'समझना' },
        { v1: 'use', v2: 'used', v3: 'used', hi: 'उपयोग करना' },
        { v1: 'unite', v2: 'united', v3: 'united', hi: 'एकजुट होना' },
        { v1: 'unlock', v2: 'unlocked', v3: 'unlocked', hi: 'खोलना' },
        { v1: 'update', v2: 'updated', v3: 'updated', hi: 'अपडेट करना' },
        { v1: 'upset', v2: 'upset', v3: 'upset', hi: 'परेशान करना' },
        { v1: 'urge', v2: 'urged', v3: 'urged', hi: 'आग्रह करना' },
        { v1: 'utter', v2: 'uttered', v3: 'uttered', hi: 'बोलना' },
        { v1: 'uncover', v2: 'uncovered', v3: 'uncovered', hi: 'खोलना' },
        { v1: 'undergo', v2: 'underwent', v3: 'undergone', hi: 'भुगतना' },
        { v1: 'underline', v2: 'underlined', v3: 'underlined', hi: 'रेखांकन करना' },
        { v1: 'unfold', v2: 'unfolded', v3: 'unfolded', hi: 'खोलना' },
        { v1: 'unpack', v2: 'unpacked', v3: 'unpacked', hi: 'सामान खोलना' },
        { v1: 'upgrade', v2: 'upgraded', v3: 'upgraded', hi: 'उन्नत करना' },
        { v1: 'upload', v2: 'uploaded', v3: 'uploaded', hi: 'अपलोड करना' }
      ]},
      { letter: 'V', verbs: [
        { v1: 'visit', v2: 'visited', v3: 'visited', hi: 'मिलने जाना' },
        { v1: 'value', v2: 'valued', v3: 'valued', hi: 'महत्व देना' },
        { v1: 'vanish', v2: 'vanished', v3: 'vanished', hi: 'गायब होना' },
        { v1: 'vary', v2: 'varied', v3: 'varied', hi: 'बदलना' },
        { v1: 'verify', v2: 'verified', v3: 'verified', hi: 'सत्यापित करना' },
        { v1: 'view', v2: 'viewed', v3: 'viewed', hi: 'देखना' },
        { v1: 'violate', v2: 'violated', v3: 'violated', hi: 'उल्लंघन करना' },
        { v1: 'vote', v2: 'voted', v3: 'voted', hi: 'वोट देना' },
        { v1: 'vacate', v2: 'vacated', v3: 'vacated', hi: 'खाली करना' },
        { v1: 'validate', v2: 'validated', v3: 'validated', hi: 'मान्य करना' },
        { v1: 'veer', v2: 'veered', v3: 'veered', hi: 'मुड़ना' },
        { v1: 'venture', v2: 'ventured', v3: 'ventured', hi: 'जोखिम लेना' },
        { v1: 'vibrate', v2: 'vibrated', v3: 'vibrated', hi: 'कंपन करना' },
        { v1: 'visualize', v2: 'visualized', v3: 'visualized', hi: 'कल्पना करना' },
        { v1: 'volunteer', v2: 'volunteered', v3: 'volunteered', hi: 'स्वेच्छा से करना' }
      ]},
      { letter: 'W', verbs: [
        { v1: 'walk', v2: 'walked', v3: 'walked', hi: 'चलना' },
        { v1: 'want', v2: 'wanted', v3: 'wanted', hi: 'चाहना' },
        { v1: 'watch', v2: 'watched', v3: 'watched', hi: 'देखना' },
        { v1: 'wear', v2: 'wore', v3: 'worn', hi: 'पहनना' },
        { v1: 'win', v2: 'won', v3: 'won', hi: 'जीतना' },
        { v1: 'write', v2: 'wrote', v3: 'written', hi: 'लिखना' },
        { v1: 'wait', v2: 'waited', v3: 'waited', hi: 'इंतज़ार करना' },
        { v1: 'wake', v2: 'woke', v3: 'woken', hi: 'जागना' },
        { v1: 'wash', v2: 'washed', v3: 'washed', hi: 'धोना' },
        { v1: 'waste', v2: 'wasted', v3: 'wasted', hi: 'बर्बाद करना' },
        { v1: 'wave', v2: 'waved', v3: 'waved', hi: 'हिलाना' },
        { v1: 'weep', v2: 'wept', v3: 'wept', hi: 'रोना' },
        { v1: 'welcome', v2: 'welcomed', v3: 'welcomed', hi: 'स्वागत करना' },
        { v1: 'whisper', v2: 'whispered', v3: 'whispered', hi: 'फुसफुसाना' },
        { v1: 'work', v2: 'worked', v3: 'worked', hi: 'काम करना' }
      ]},
      { letter: 'X', verbs: [
        { v1: 'xerox', v2: 'xeroxed', v3: 'xeroxed', hi: 'फोटोकॉपी करना' },
        { v1: 'x-ray', v2: 'x-rayed', v3: 'x-rayed', hi: 'एक्स-रे करना' },
        { v1: 'x-out', v2: 'x-outed', v3: 'x-outed', hi: 'काट देना' },
        { v1: 'xylograph', v2: 'xylographed', v3: 'xylographed', hi: 'नक्काशी करना' },
        { v1: 'xenophobia', v2: 'xenophobied', v3: 'xenophobied', hi: 'विदेशी से डरना' }
      ]},
      { letter: 'Y', verbs: [
        { v1: 'yell', v2: 'yelled', v3: 'yelled', hi: 'चिल्लाना' },
        { v1: 'yield', v2: 'yielded', v3: 'yielded', hi: 'हार मानना' },
        { v1: 'yawn', v2: 'yawned', v3: 'yawned', hi: 'जम्हाई लेना' },
        { v1: 'yearn', v2: 'yearned', v3: 'yearned', hi: 'तरसना' },
        { v1: 'yank', v2: 'yanked', v3: 'yanked', hi: 'झटके से खींचना' },
        { v1: 'yap', v2: 'yapped', v3: 'yapped', hi: 'भौंकना' },
        { v1: 'yarn', v2: 'yarned', v3: 'yarned', hi: 'कहानी सुनाना' },
        { v1: 'yelp', v2: 'yelped', v3: 'yelped', hi: 'चीखना' },
        { v1: 'yodel', v2: 'yodeled', v3: 'yodeled', hi: 'गाना' },
        { v1: 'yoke', v2: 'yoked', v3: 'yoked', hi: 'जोड़ना' }
      ]},
      { letter: 'Z', verbs: [
        { v1: 'zip', v2: 'zipped', v3: 'zipped', hi: 'ज़िप करना' },
        { v1: 'zoom', v2: 'zoomed', v3: 'zoomed', hi: 'तेज़ी से जाना' },
        { v1: 'zigzag', v2: 'zigzagged', v3: 'zigzagged', hi: 'टेढ़ा-मेढ़ा चलना' },
        { v1: 'zap', v2: 'zapped', v3: 'zapped', hi: 'झटका देना' },
        { v1: 'zero', v2: 'zeroed', v3: 'zeroed', hi: 'शून्य करना' },
        { v1: 'zest', v2: 'zested', v3: 'zested', hi: 'छीलना' },
        { v1: 'zinc', v2: 'zinced', v3: 'zinced', hi: 'जस्ता चढ़ाना' },
        { v1: 'zing', v2: 'zinged', v3: 'zinged', hi: 'तेज़ी से जाना' },
        { v1: 'zone', v2: 'zoned', v3: 'zoned', hi: 'क्षेत्र बनाना' }
      ]}
    ]
  }

];

// ═══════════════════════════════════════════════════════════
// CARD 4 — BE VERBS (is, am, are, was, were, shall be, will be, has, have)
// ═══════════════════════════════════════════════════════════
var MODULE1_BEVERBS = {
  id: 'beverbs',
  title: 'Be Verbs',
  icon: '🔗',
  desc: 'is, am, are, was, were, shall be, will be, has, have',
  type: 'beverbs',
  verbs: [
    { word: 'is', hi: 'है', usage: 'He/She/It के साथ (Present)',
      examples: {
        simple: [
          { en: 'He is a doctor.', hi: 'वह डॉक्टर है।' },
          { en: 'She is happy.', hi: 'वह खुश है।' },
          { en: 'It is a cat.', hi: 'यह बिल्ली है।' },
          { en: 'Ram is my friend.', hi: 'राम मेरा दोस्त है।' },
          { en: 'The sun is bright.', hi: 'सूरज चमकीला है।' },
          { en: 'This is my book.', hi: 'यह मेरी किताब है।' },
          { en: 'That is a tree.', hi: 'वह पेड़ है।' },
          { en: 'My father is a teacher.', hi: 'मेरे पिता शिक्षक हैं।' },
          { en: 'She is from Delhi.', hi: 'वह दिल्ली से है।' },
          { en: 'The sky is blue.', hi: 'आसमान नीला है।' }
        ],
        negative: [
          { en: 'He is not a doctor.', hi: 'वह डॉक्टर नहीं है।' },
          { en: 'She is not happy.', hi: 'वह खुश नहीं है।' },
          { en: 'It is not a cat.', hi: 'यह बिल्ली नहीं है।' },
          { en: 'Ram is not my friend.', hi: 'राम मेरा दोस्त नहीं है।' },
          { en: 'The sun is not bright.', hi: 'सूरज चमकीला नहीं है।' },
          { en: 'This is not my book.', hi: 'यह मेरी किताब नहीं है।' },
          { en: 'That is not a tree.', hi: 'वह पेड़ नहीं है।' },
          { en: 'My father is not a teacher.', hi: 'मेरे पिता शिक्षक नहीं हैं।' },
          { en: 'She is not from Delhi.', hi: 'वह दिल्ली से नहीं है।' },
          { en: 'The sky is not blue.', hi: 'आसमान नीला नहीं है।' }
        ],
        wh: [
          { en: 'Where is he?', hi: 'वह कहाँ है?' },
          { en: 'Why is she happy?', hi: 'वह क्यों खुश है?' },
          { en: 'What is this?', hi: 'यह क्या है?' },
          { en: 'Who is Ram?', hi: 'राम कौन है?' },
          { en: 'How is the sun?', hi: 'सूरज कैसा है?' },
          { en: 'Whose book is this?', hi: 'यह किसकी किताब है?' },
          { en: 'What is that?', hi: 'वह क्या है?' },
          { en: 'Where is my father?', hi: 'मेरे पिता कहाँ हैं?' },
          { en: 'When is she free?', hi: 'वह कब खाली है?' },
          { en: 'Why is the sky blue?', hi: 'आसमान नीला क्यों है?' }
        ]
      }
    },
    { word: 'am', hi: 'हूँ', usage: 'I के साथ (Present)',
      examples: {
        simple: [
          { en: 'I am a student.', hi: 'मैं छात्र हूँ।' },
          { en: 'I am happy.', hi: 'मैं खुश हूँ।' },
          { en: 'I am from India.', hi: 'मैं भारत से हूँ।' },
          { en: 'I am 15 years old.', hi: 'मैं 15 साल का हूँ।' },
          { en: 'I am hungry.', hi: 'मैं भूखा हूँ।' },
          { en: 'I am tired.', hi: 'मैं थका हूँ।' },
          { en: 'I am ready.', hi: 'मैं तैयार हूँ।' },
          { en: 'I am learning English.', hi: 'मैं English सीख रहा हूँ।' },
          { en: 'I am a teacher.', hi: 'मैं शिक्षक हूँ।' },
          { en: 'I am at home.', hi: 'मैं घर पर हूँ।' }
        ],
        negative: [
          { en: 'I am not a student.', hi: 'मैं छात्र नहीं हूँ।' },
          { en: 'I am not happy.', hi: 'मैं खुश नहीं हूँ।' },
          { en: 'I am not from India.', hi: 'मैं भारत से नहीं हूँ।' },
          { en: 'I am not 15 years old.', hi: 'मैं 15 साल का नहीं हूँ।' },
          { en: 'I am not hungry.', hi: 'मैं भूखा नहीं हूँ।' },
          { en: 'I am not tired.', hi: 'मैं थका नहीं हूँ।' },
          { en: 'I am not ready.', hi: 'मैं तैयार नहीं हूँ।' },
          { en: 'I am not learning English.', hi: 'मैं English नहीं सीख रहा हूँ।' },
          { en: 'I am not a teacher.', hi: 'मैं शिक्षक नहीं हूँ।' },
          { en: 'I am not at home.', hi: 'मैं घर पर नहीं हूँ।' }
        ],
        wh: [
          { en: 'Who am I?', hi: 'मैं कौन हूँ?' },
          { en: 'Why am I happy?', hi: 'मैं क्यों खुश हूँ?' },
          { en: 'Where am I from?', hi: 'मैं कहाँ से हूँ?' },
          { en: 'How old am I?', hi: 'मैं कितने साल का हूँ?' },
          { en: 'Why am I hungry?', hi: 'मैं क्यों भूखा हूँ?' },
          { en: 'Why am I tired?', hi: 'मैं क्यों थका हूँ?' },
          { en: 'Why am I ready?', hi: 'मैं क्यों तैयार हूँ?' },
          { en: 'What am I learning?', hi: 'मैं क्या सीख रहा हूँ?' },
          { en: 'What am I?', hi: 'मैं क्या हूँ?' },
          { en: 'Where am I?', hi: 'मैं कहाँ हूँ?' }
        ]
      }
    },
    { word: 'are', hi: 'हैं/हो', usage: 'We/You/They के साथ (Present)',
      examples: {
        simple: [
          { en: 'We are friends.', hi: 'हम दोस्त हैं।' },
          { en: 'You are smart.', hi: 'तुम होशियार हो।' },
          { en: 'They are playing.', hi: 'वे खेल रहे हैं।' },
          { en: 'We are students.', hi: 'हम छात्र हैं।' },
          { en: 'You are right.', hi: 'तुम सही हो।' },
          { en: 'They are happy.', hi: 'वे खुश हैं।' },
          { en: 'We are from India.', hi: 'हम भारत से हैं।' },
          { en: 'You are my friend.', hi: 'तुम मेरे दोस्त हो।' },
          { en: 'They are brothers.', hi: 'वे भाई हैं।' },
          { en: 'We are going home.', hi: 'हम घर जा रहे हैं।' }
        ],
        negative: [
          { en: 'We are not friends.', hi: 'हम दोस्त नहीं हैं।' },
          { en: 'You are not smart.', hi: 'तुम होशियार नहीं हो।' },
          { en: 'They are not playing.', hi: 'वे खेल नहीं रहे हैं।' },
          { en: 'We are not students.', hi: 'हम छात्र नहीं हैं।' },
          { en: 'You are not right.', hi: 'तुम सही नहीं हो।' },
          { en: 'They are not happy.', hi: 'वे खुश नहीं हैं।' },
          { en: 'We are not from India.', hi: 'हम भारत से नहीं हैं।' },
          { en: 'You are not my friend.', hi: 'तुम मेरे दोस्त नहीं हो।' },
          { en: 'They are not brothers.', hi: 'वे भाई नहीं हैं।' },
          { en: 'We are not going home.', hi: 'हम घर नहीं जा रहे हैं।' }
        ],
        wh: [
          { en: 'Who are we?', hi: 'हम कौन हैं?' },
          { en: 'Why are you smart?', hi: 'तुम क्यों होशियार हो?' },
          { en: 'What are they playing?', hi: 'वे क्या खेल रहे हैं?' },
          { en: 'Who are we?', hi: 'हम कौन हैं?' },
          { en: 'Why are you right?', hi: 'तुम क्यों सही हो?' },
          { en: 'Why are they happy?', hi: 'वे क्यों खुश हैं?' },
          { en: 'Where are we from?', hi: 'हम कहाँ से हैं?' },
          { en: 'Who are you?', hi: 'तुम कौन हो?' },
          { en: 'Who are they?', hi: 'वे कौन हैं?' },
          { en: 'Where are we going?', hi: 'हम कहाँ जा रहे हैं?' }
        ]
      }
    },
    { word: 'was', hi: 'था/थी', usage: 'He/She/It के साथ (Past)',
      examples: {
        simple: [
          { en: 'He was a doctor.', hi: 'वह डॉक्टर था।' },
          { en: 'She was happy.', hi: 'वह खुश थी।' },
          { en: 'It was a cat.', hi: 'यह बिल्ली थी।' },
          { en: 'Ram was my friend.', hi: 'राम मेरा दोस्त था।' },
          { en: 'The sun was bright.', hi: 'सूरज चमकीला था।' },
          { en: 'This was my book.', hi: 'यह मेरी किताब थी।' },
          { en: 'That was a tree.', hi: 'वह पेड़ था।' },
          { en: 'My father was a teacher.', hi: 'मेरे पिता शिक्षक थे।' },
          { en: 'She was from Delhi.', hi: 'वह दिल्ली से थी।' },
          { en: 'The sky was blue.', hi: 'आसमान नीला था।' }
        ],
        negative: [
          { en: 'He was not a doctor.', hi: 'वह डॉक्टर नहीं था।' },
          { en: 'She was not happy.', hi: 'वह खुश नहीं थी।' },
          { en: 'It was not a cat.', hi: 'यह बिल्ली नहीं थी।' },
          { en: 'Ram was not my friend.', hi: 'राम मेरा दोस्त नहीं था।' },
          { en: 'The sun was not bright.', hi: 'सूरज चमकीला नहीं था।' },
          { en: 'This was not my book.', hi: 'यह मेरी किताब नहीं थी।' },
          { en: 'That was not a tree.', hi: 'वह पेड़ नहीं था।' },
          { en: 'My father was not a teacher.', hi: 'मेरे पिता शिक्षक नहीं थे।' },
          { en: 'She was not from Delhi.', hi: 'वह दिल्ली से नहीं थी।' },
          { en: 'The sky was not blue.', hi: 'आसमान नीला नहीं था।' }
        ],
        wh: [
          { en: 'Where was he?', hi: 'वह कहाँ था?' },
          { en: 'Why was she happy?', hi: 'वह क्यों खुश थी?' },
          { en: 'What was this?', hi: 'यह क्या था?' },
          { en: 'Who was Ram?', hi: 'राम कौन था?' },
          { en: 'How was the sun?', hi: 'सूरज कैसा था?' },
          { en: 'Whose book was this?', hi: 'यह किसकी किताब थी?' },
          { en: 'What was that?', hi: 'वह क्या था?' },
          { en: 'Where was my father?', hi: 'मेरे पिता कहाँ थे?' },
          { en: 'When was she free?', hi: 'वह कब खाली थी?' },
          { en: 'Why was the sky blue?', hi: 'आसमान नीला क्यों था?' }
        ]
      }
    },
    { word: 'were', hi: 'थे/थीं', usage: 'We/You/They के साथ (Past)',
      examples: {
        simple: [
          { en: 'We were friends.', hi: 'हम दोस्त थे।' },
          { en: 'You were smart.', hi: 'तुम होशियार थे।' },
          { en: 'They were playing.', hi: 'वे खेल रहे थे।' },
          { en: 'We were students.', hi: 'हम छात्र थे।' },
          { en: 'You were right.', hi: 'तुम सही थे।' },
          { en: 'They were happy.', hi: 'वे खुश थे।' },
          { en: 'We were from India.', hi: 'हम भारत से थे।' },
          { en: 'You were my friend.', hi: 'तुम मेरे दोस्त थे।' },
          { en: 'They were brothers.', hi: 'वे भाई थे।' },
          { en: 'We were going home.', hi: 'हम घर जा रहे थे।' }
        ],
        negative: [
          { en: 'We were not friends.', hi: 'हम दोस्त नहीं थे।' },
          { en: 'You were not smart.', hi: 'तुम होशियार नहीं थे।' },
          { en: 'They were not playing.', hi: 'वे खेल नहीं रहे थे।' },
          { en: 'We were not students.', hi: 'हम छात्र नहीं थे।' },
          { en: 'You were not right.', hi: 'तुम सही नहीं थे।' },
          { en: 'They were not happy.', hi: 'वे खुश नहीं थे।' },
          { en: 'We were not from India.', hi: 'हम भारत से नहीं थे।' },
          { en: 'You were not my friend.', hi: 'तुम मेरे दोस्त नहीं थे।' },
          { en: 'They were not brothers.', hi: 'वे भाई नहीं थे।' },
          { en: 'We were not going home.', hi: 'हम घर नहीं जा रहे थे।' }
        ],
        wh: [
          { en: 'Who were we?', hi: 'हम कौन थे?' },
          { en: 'Why were you smart?', hi: 'तुम क्यों होशियार थे?' },
          { en: 'What were they playing?', hi: 'वे क्या खेल रहे थे?' },
          { en: 'Who were we?', hi: 'हम कौन थे?' },
          { en: 'Why were you right?', hi: 'तुम क्यों सही थे?' },
          { en: 'Why were they happy?', hi: 'वे क्यों खुश थे?' },
          { en: 'Where were we from?', hi: 'हम कहाँ से थे?' },
          { en: 'Who were you?', hi: 'तुम कौन थे?' },
          { en: 'Who were they?', hi: 'वे कौन थे?' },
          { en: 'Where were we going?', hi: 'हम कहाँ जा रहे थे?' }
        ]
      }
    },
    { word: 'shall be', hi: 'होगा/होंगे', usage: 'I/We के साथ (Future)',
      examples: {
        simple: [
          { en: 'I shall be there.', hi: 'मैं वहाँ होऊँगा।' },
          { en: 'We shall be happy.', hi: 'हम खुश होंगे।' },
          { en: 'I shall be a doctor.', hi: 'मैं डॉक्टर बनूँगा।' },
          { en: 'We shall be friends.', hi: 'हम दोस्त होंगे।' },
          { en: 'I shall be ready.', hi: 'मैं तैयार होऊँगा।' },
          { en: 'We shall be at home.', hi: 'हम घर पर होंगे।' },
          { en: 'I shall be very happy.', hi: 'मैं बहुत खुश होऊँगा।' },
          { en: 'We shall be students.', hi: 'हम छात्र होंगे।' },
          { en: 'I shall be there on time.', hi: 'मैं समय पर वहाँ होऊँगा।' },
          { en: 'We shall be successful.', hi: 'हम सफल होंगे।' }
        ],
        negative: [
          { en: 'I shall not be there.', hi: 'मैं वहाँ नहीं होऊँगा।' },
          { en: 'We shall not be happy.', hi: 'हम खुश नहीं होंगे।' },
          { en: 'I shall not be a doctor.', hi: 'मैं डॉक्टर नहीं बनूँगा।' },
          { en: 'We shall not be friends.', hi: 'हम दोस्त नहीं होंगे।' },
          { en: 'I shall not be ready.', hi: 'मैं तैयार नहीं होऊँगा।' },
          { en: 'We shall not be at home.', hi: 'हम घर पर नहीं होंगे।' },
          { en: 'I shall not be very happy.', hi: 'मैं बहुत खुश नहीं होऊँगा।' },
          { en: 'We shall not be students.', hi: 'हम छात्र नहीं होंगे।' },
          { en: 'I shall not be there on time.', hi: 'मैं समय पर वहाँ नहीं होऊँगा।' },
          { en: 'We shall not be successful.', hi: 'हम सफल नहीं होंगे।' }
        ],
        wh: [
          { en: 'Where shall I be?', hi: 'मैं कहाँ होऊँगा?' },
          { en: 'Why shall we be happy?', hi: 'हम क्यों खुश होंगे?' },
          { en: 'What shall I be?', hi: 'मैं क्या बनूँगा?' },
          { en: 'Who shall be friends?', hi: 'कौन दोस्त होंगे?' },
          { en: 'When shall I be ready?', hi: 'मैं कब तैयार होऊँगा?' },
          { en: 'Where shall we be?', hi: 'हम कहाँ होंगे?' },
          { en: 'Why shall I be happy?', hi: 'मैं क्यों खुश होऊँगा?' },
          { en: 'What shall we be?', hi: 'हम क्या होंगे?' },
          { en: 'When shall I be there?', hi: 'मैं कब वहाँ होऊँगा?' },
          { en: 'How shall we be successful?', hi: 'हम कैसे सफल होंगे?' }
        ]
      }
    },
    { word: 'will be', hi: 'होगा/होंगे', usage: 'सभी subjects के साथ (Future)',
      examples: {
        simple: [
          { en: 'He will be a doctor.', hi: 'वह डॉक्टर बनेगा।' },
          { en: 'She will be happy.', hi: 'वह खुश होगी।' },
          { en: 'It will be a cat.', hi: 'यह बिल्ली होगी।' },
          { en: 'They will be friends.', hi: 'वे दोस्त होंगे।' },
          { en: 'You will be successful.', hi: 'तुम सफल होगे।' },
          { en: 'I will be there.', hi: 'मैं वहाँ होऊँगा।' },
          { en: 'We will be happy.', hi: 'हम खुश होंगे।' },
          { en: 'She will be a teacher.', hi: 'वह शिक्षक बनेगी।' },
          { en: 'It will be raining soon.', hi: 'जल्द बारिश होगी।' },
          { en: 'He will be at home.', hi: 'वह घर पर होगा।' }
        ],
        negative: [
          { en: 'He will not be a doctor.', hi: 'वह डॉक्टर नहीं बनेगा।' },
          { en: 'She will not be happy.', hi: 'वह खुश नहीं होगी।' },
          { en: 'It will not be a cat.', hi: 'यह बिल्ली नहीं होगी।' },
          { en: 'They will not be friends.', hi: 'वे दोस्त नहीं होंगे।' },
          { en: 'You will not be successful.', hi: 'तुम सफल नहीं होगे।' },
          { en: 'I will not be there.', hi: 'मैं वहाँ नहीं होऊँगा।' },
          { en: 'We will not be happy.', hi: 'हम खुश नहीं होंगे।' },
          { en: 'She will not be a teacher.', hi: 'वह शिक्षक नहीं बनेगी।' },
          { en: 'It will not be raining soon.', hi: 'जल्द बारिश नहीं होगी।' },
          { en: 'He will not be at home.', hi: 'वह घर पर नहीं होगा।' }
        ],
        wh: [
          { en: 'Who will be a doctor?', hi: 'कौन डॉक्टर बनेगा?' },
          { en: 'Why will she be happy?', hi: 'वह क्यों खुश होगी?' },
          { en: 'What will it be?', hi: 'यह क्या होगा?' },
          { en: 'Who will be friends?', hi: 'कौन दोस्त होंगे?' },
          { en: 'How will you be successful?', hi: 'तुम कैसे सफल होगे?' },
          { en: 'Where will I be?', hi: 'मैं कहाँ होऊँगा?' },
          { en: 'Why will we be happy?', hi: 'हम क्यों खुश होंगे?' },
          { en: 'What will she be?', hi: 'वह क्या बनेगी?' },
          { en: 'When will it rain?', hi: 'बारिश कब होगी?' },
          { en: 'Where will he be?', hi: 'वह कहाँ होगा?' }
        ]
      }
    },
    { word: 'has', hi: 'पास है', usage: 'He/She/It के साथ (Present)',
      examples: {
        simple: [
          { en: 'He has a car.', hi: 'उसके पास गाड़ी है।' },
          { en: 'She has a book.', hi: 'उसके पास किताब है।' },
          { en: 'It has four legs.', hi: 'उसके चार पैर हैं।' },
          { en: 'Ram has a pen.', hi: 'राम के पास पेन है।' },
          { en: 'He has two brothers.', hi: 'उसके दो भाई हैं।' },
          { en: 'She has long hair.', hi: 'उसके लंबे बाल हैं।' },
          { en: 'The dog has a tail.', hi: 'कुत्ते की पूँछ है।' },
          { en: 'My father has a shop.', hi: 'मेरे पिता की दुकान है।' },
          { en: 'He has a lot of money.', hi: 'उसके पास बहुत पैसा है।' },
          { en: 'She has a beautiful voice.', hi: 'उसकी आवाज़ सुंदर है।' }
        ],
        negative: [
          { en: 'He does not have a car.', hi: 'उसके पास गाड़ी नहीं है।' },
          { en: 'She does not have a book.', hi: 'उसके पास किताब नहीं है।' },
          { en: 'It does not have four legs.', hi: 'उसके चार पैर नहीं हैं।' },
          { en: 'Ram does not have a pen.', hi: 'राम के पास पेन नहीं है।' },
          { en: 'He does not have two brothers.', hi: 'उसके दो भाई नहीं हैं।' },
          { en: 'She does not have long hair.', hi: 'उसके लंबे बाल नहीं हैं।' },
          { en: 'The dog does not have a tail.', hi: 'कुत्ते की पूँछ नहीं है।' },
          { en: 'My father does not have a shop.', hi: 'मेरे पिता की दुकान नहीं है।' },
          { en: 'He does not have a lot of money.', hi: 'उसके पास बहुत पैसा नहीं है।' },
          { en: 'She does not have a beautiful voice.', hi: 'उसकी आवाज़ सुंदर नहीं है।' }
        ],
        wh: [
          { en: 'What does he have?', hi: 'उसके पास क्या है?' },
          { en: 'What does she have?', hi: 'उसके पास क्या है?' },
          { en: 'How many legs does it have?', hi: 'उसके कितने पैर हैं?' },
          { en: 'What does Ram have?', hi: 'राम के पास क्या है?' },
          { en: 'How many brothers does he have?', hi: 'उसके कितने भाई हैं?' },
          { en: 'What kind of hair does she have?', hi: 'उसके कैसे बाल हैं?' },
          { en: 'What does the dog have?', hi: 'कुत्ते के पास क्या है?' },
          { en: 'What does my father have?', hi: 'मेरे पिता के पास क्या है?' },
          { en: 'How much money does he have?', hi: 'उसके पास कितना पैसा है?' },
          { en: 'What kind of voice does she have?', hi: 'उसकी कैसी आवाज़ है?' }
        ]
      }
    },
    { word: 'have', hi: 'पास है', usage: 'I/We/You/They के साथ (Present)',
      examples: {
        simple: [
          { en: 'I have a car.', hi: 'मेरे पास गाड़ी है।' },
          { en: 'We have a house.', hi: 'हमारे पास घर है।' },
          { en: 'You have a book.', hi: 'तुम्हारे पास किताब है।' },
          { en: 'They have a garden.', hi: 'उनके पास बगीचा है।' },
          { en: 'I have two sisters.', hi: 'मेरी दो बहनें हैं।' },
          { en: 'We have many friends.', hi: 'हमारे बहुत दोस्त हैं।' },
          { en: 'You have a nice smile.', hi: 'तुम्हारी मुस्कान अच्छी है।' },
          { en: 'They have a big house.', hi: 'उनका बड़ा घर है।' },
          { en: 'I have a lot of work.', hi: 'मेरे पास बहुत काम है।' },
          { en: 'We have a good team.', hi: 'हमारी अच्छी टीम है।' }
        ],
        negative: [
          { en: 'I do not have a car.', hi: 'मेरे पास गाड़ी नहीं है।' },
          { en: 'We do not have a house.', hi: 'हमारे पास घर नहीं है।' },
          { en: 'You do not have a book.', hi: 'तुम्हारे पास किताब नहीं है।' },
          { en: 'They do not have a garden.', hi: 'उनके पास बगीचा नहीं है।' },
          { en: 'I do not have two sisters.', hi: 'मेरी दो बहनें नहीं हैं।' },
          { en: 'We do not have many friends.', hi: 'हमारे बहुत दोस्त नहीं हैं।' },
          { en: 'You do not have a nice smile.', hi: 'तुम्हारी मुस्कान अच्छी नहीं है।' },
          { en: 'They do not have a big house.', hi: 'उनका बड़ा घर नहीं है।' },
          { en: 'I do not have a lot of work.', hi: 'मेरे पास बहुत काम नहीं है।' },
          { en: 'We do not have a good team.', hi: 'हमारी अच्छी टीम नहीं है।' }
        ],
        wh: [
          { en: 'What do I have?', hi: 'मेरे पास क्या है?' },
          { en: 'What do we have?', hi: 'हमारे पास क्या है?' },
          { en: 'What do you have?', hi: 'तुम्हारे पास क्या है?' },
          { en: 'What do they have?', hi: 'उनके पास क्या है?' },
          { en: 'How many sisters do I have?', hi: 'मेरी कितनी बहनें हैं?' },
          { en: 'How many friends do we have?', hi: 'हमारे कितने दोस्त हैं?' },
          { en: 'How does your smile look?', hi: 'तुम्हारी मुस्कान कैसी है?' },
          { en: 'How big is their house?', hi: 'उनका घर कितना बड़ा है?' },
          { en: 'How much work do I have?', hi: 'मेरे पास कितना काम है?' },
          { en: 'How good is our team?', hi: 'हमारी टीम कैसी है?' }
        ]
      }
    }
  ]
};

// ═══════════════════════════════════════════════════════════
// CARD 5 — MODERN VERBS (can, should, may, might, would, need, dare, must)
// ═══════════════════════════════════════════════════════════
var MODULE1_MODERNVERBS = {
  id: 'modernverbs',
  title: 'Modern Verbs',
  icon: '🎭',
  desc: 'can, should, may, might, would, need, dare, must',
  type: 'modernverbs',
  verbs: [
    { word: 'can', hi: 'सकता है', usage: 'Ability (योग्यता)',
      examples: {
        simple: [
          { en: 'I can swim.', hi: 'मैं तैर सकता हूँ।' },
          { en: 'She can sing.', hi: 'वह गा सकती है।' },
          { en: 'He can drive a car.', hi: 'वह गाड़ी चला सकता है।' },
          { en: 'We can help you.', hi: 'हम तुम्हारी मदद कर सकते हैं।' },
          { en: 'They can come tomorrow.', hi: 'वे कल आ सकते हैं।' },
          { en: 'You can do it.', hi: 'तुम यह कर सकते हो।' },
          { en: 'I can speak English.', hi: 'मैं English बोल सकता हूँ।' },
          { en: 'She can cook well.', hi: 'वह अच्छा खाना बना सकती है।' },
          { en: 'He can run fast.', hi: 'वह तेज़ दौड़ सकता है।' },
          { en: 'We can solve this problem.', hi: 'हम यह समस्या हल कर सकते हैं।' }
        ],
        negative: [
          { en: 'I cannot swim.', hi: 'मैं तैर नहीं सकता।' },
          { en: 'She cannot sing.', hi: 'वह गा नहीं सकती।' },
          { en: 'He cannot drive a car.', hi: 'वह गाड़ी नहीं चला सकता।' },
          { en: 'We cannot help you.', hi: 'हम तुम्हारी मदद नहीं कर सकते।' },
          { en: 'They cannot come tomorrow.', hi: 'वे कल नहीं आ सकते।' },
          { en: 'You cannot do it.', hi: 'तुम यह नहीं कर सकते।' },
          { en: 'I cannot speak English.', hi: 'मैं English नहीं बोल सकता।' },
          { en: 'She cannot cook well.', hi: 'वह अच्छा खाना नहीं बना सकती।' },
          { en: 'He cannot run fast.', hi: 'वह तेज़ नहीं दौड़ सकता।' },
          { en: 'We cannot solve this problem.', hi: 'हम यह समस्या हल नहीं कर सकते।' }
        ],
        wh: [
          { en: 'What can I do?', hi: 'मैं क्या कर सकता हूँ?' },
          { en: 'How can she sing?', hi: 'वह कैसे गा सकती है?' },
          { en: 'How can he drive?', hi: 'वह कैसे चला सकता है?' },
          { en: 'How can we help you?', hi: 'हम तुम्हारी कैसे मदद कर सकते हैं?' },
          { en: 'When can they come?', hi: 'वे कब आ सकते हैं?' },
          { en: 'How can you do it?', hi: 'तुम यह कैसे कर सकते हो?' },
          { en: 'What can I speak?', hi: 'मैं क्या बोल सकता हूँ?' },
          { en: 'How well can she cook?', hi: 'वह कितना अच्छा बना सकती है?' },
          { en: 'How fast can he run?', hi: 'वह कितनी तेज़ दौड़ सकता है?' },
          { en: 'How can we solve this?', hi: 'हम यह कैसे हल कर सकते हैं?' }
        ]
      }
    },
    { word: 'should', hi: 'चाहिए', usage: 'Advice (सलाह)',
      examples: {
        simple: [
          { en: 'You should study hard.', hi: 'तुम्हें मेहनत करनी चाहिए।' },
          { en: 'He should see a doctor.', hi: 'उसे डॉक्टर को दिखाना चाहिए।' },
          { en: 'We should help others.', hi: 'हमें दूसरों की मदद करनी चाहिए।' },
          { en: 'She should take rest.', hi: 'उसे आराम करना चाहिए।' },
          { en: 'They should come early.', hi: 'उन्हें जल्दी आना चाहिए।' },
          { en: 'I should wake up early.', hi: 'मुझे जल्दी उठना चाहिए।' },
          { en: 'You should respect your elders.', hi: 'तुम्हें बड़ों का सम्मान करना चाहिए।' },
          { en: 'He should exercise daily.', hi: 'उसे रोज़ व्यायाम करना चाहिए।' },
          { en: 'We should save money.', hi: 'हमें पैसे बचाने चाहिए।' },
          { en: 'She should learn English.', hi: 'उसे English सीखनी चाहिए।' }
        ],
        negative: [
          { en: 'You should not study hard.', hi: 'तुम्हें मेहनत नहीं करनी चाहिए।' },
          { en: 'He should not see a doctor.', hi: 'उसे डॉक्टर को नहीं दिखाना चाहिए।' },
          { en: 'We should not help others.', hi: 'हमें दूसरों की मदद नहीं करनी चाहिए।' },
          { en: 'She should not take rest.', hi: 'उसे आराम नहीं करना चाहिए।' },
          { en: 'They should not come early.', hi: 'उन्हें जल्दी नहीं आना चाहिए।' },
          { en: 'I should not wake up early.', hi: 'मुझे जल्दी नहीं उठना चाहिए।' },
          { en: 'You should not disrespect elders.', hi: 'तुम्हें बड़ों का अपमान नहीं करना चाहिए।' },
          { en: 'He should not exercise daily.', hi: 'उसे रोज़ व्यायाम नहीं करना चाहिए।' },
          { en: 'We should not waste money.', hi: 'हमें पैसे बर्बाद नहीं करने चाहिए।' },
          { en: 'She should not skip English.', hi: 'उसे English नहीं छोड़नी चाहिए।' }
        ],
        wh: [
          { en: 'What should I do?', hi: 'मुझे क्या करना चाहिए?' },
          { en: 'Why should he see a doctor?', hi: 'उसे डॉक्टर को क्यों दिखाना चाहिए?' },
          { en: 'Whom should we help?', hi: 'हमें किसकी मदद करनी चाहिए?' },
          { en: 'Why should she take rest?', hi: 'उसे आराम क्यों करना चाहिए?' },
          { en: 'When should they come?', hi: 'उन्हें कब आना चाहिए?' },
          { en: 'Why should I wake up early?', hi: 'मुझे जल्दी क्यों उठना चाहिए?' },
          { en: 'How should we respect elders?', hi: 'हमें बड़ों का सम्मान कैसे करना चाहिए?' },
          { en: 'How often should he exercise?', hi: 'उसे कितनी बार व्यायाम करना चाहिए?' },
          { en: 'How much should we save?', hi: 'हमें कितना बचाना चाहिए?' },
          { en: 'Why should she learn English?', hi: 'उसे English क्यों सीखनी चाहिए?' }
        ]
      }
    },
    { word: 'may', hi: 'शायद / सकता है', usage: 'Possibility / Permission',
      examples: {
        simple: [
          { en: 'It may rain today.', hi: 'आज बारिश हो सकती है।' },
          { en: 'He may come tomorrow.', hi: 'वह कल आ सकता है।' },
          { en: 'May I come in?', hi: 'क्या मैं अंदर आ सकता हूँ?' },
          { en: 'May I sit here?', hi: 'क्या मैं यहाँ बैठ सकता हूँ?' },
          { en: 'She may be at home.', hi: 'वह घर पर हो सकती है।' },
          { en: 'You may go now.', hi: 'तुम अब जा सकते हो।' },
          { en: 'They may win the game.', hi: 'वे खेल जीत सकते हैं।' },
          { en: 'It may be true.', hi: 'यह सच हो सकता है।' },
          { en: 'May I ask a question?', hi: 'क्या मैं सवाल पूछ सकता हूँ?' },
          { en: 'He may not come.', hi: 'वह शायद नहीं आएगा।' }
        ],
        negative: [
          { en: 'It may not rain today.', hi: 'आज बारिश नहीं हो सकती।' },
          { en: 'He may not come tomorrow.', hi: 'वह कल नहीं आ सकता।' },
          { en: 'May I not come in?', hi: 'क्या मैं अंदर नहीं आ सकता?' },
          { en: 'May I not sit here?', hi: 'क्या मैं यहाँ नहीं बैठ सकता?' },
          { en: 'She may not be at home.', hi: 'वह घर पर नहीं हो सकती।' },
          { en: 'You may not go now.', hi: 'तुम अब नहीं जा सकते।' },
          { en: 'They may not win the game.', hi: 'वे खेल नहीं जीत सकते।' },
          { en: 'It may not be true.', hi: 'यह सच नहीं हो सकता।' },
          { en: 'May I not ask a question?', hi: 'क्या मैं सवाल नहीं पूछ सकता?' },
          { en: 'He may not be late.', hi: 'वह देर से नहीं आ सकता।' }
        ],
        wh: [
          { en: 'When may it rain?', hi: 'बारिश कब हो सकती है?' },
          { en: 'Why may he come?', hi: 'वह क्यों आ सकता है?' },
          { en: 'Where may she be?', hi: 'वह कहाँ हो सकती है?' },
          { en: 'Who may win the game?', hi: 'कौन खेल जीत सकता है?' },
          { en: 'Why may it be true?', hi: 'यह सच क्यों हो सकता है?' },
          { en: 'What may I ask?', hi: 'मैं क्या पूछ सकता हूँ?' },
          { en: 'Why may he not come?', hi: 'वह क्यों नहीं आ सकता?' },
          { en: 'Where may I sit?', hi: 'मैं कहाँ बैठ सकता हूँ?' },
          { en: 'How may they win?', hi: 'वे कैसे जीत सकते हैं?' },
          { en: 'When may we meet?', hi: 'हम कब मिल सकते हैं?' }
        ]
      }
    },
    { word: 'might', hi: 'शायद', usage: 'Weak possibility',
      examples: {
        simple: [
          { en: 'It might rain today.', hi: 'आज बारिश हो सकती है।' },
          { en: 'He might come later.', hi: 'वह बाद में आ सकता है।' },
          { en: 'She might be busy.', hi: 'वह व्यस्त हो सकती है।' },
          { en: 'They might win the match.', hi: 'वे मैच जीत सकते हैं।' },
          { en: 'I might go to Delhi.', hi: 'मैं दिल्ली जा सकता हूँ।' },
          { en: 'It might be true.', hi: 'यह सच हो सकता है।' },
          { en: 'You might be right.', hi: 'तुम सही हो सकते हो।' },
          { en: 'We might meet tomorrow.', hi: 'हम कल मिल सकते हैं।' },
          { en: 'He might not come.', hi: 'वह शायद न आए।' },
          { en: 'She might need help.', hi: 'उसे मदद की ज़रूरत हो सकती है।' }
        ],
        negative: [
          { en: 'It might not rain today.', hi: 'आज बारिश नहीं हो सकती।' },
          { en: 'He might not come later.', hi: 'वह बाद में नहीं आ सकता।' },
          { en: 'She might not be busy.', hi: 'वह व्यस्त नहीं हो सकती।' },
          { en: 'They might not win the match.', hi: 'वे मैच नहीं जीत सकते।' },
          { en: 'I might not go to Delhi.', hi: 'मैं दिल्ली नहीं जा सकता।' },
          { en: 'It might not be true.', hi: 'यह सच नहीं हो सकता।' },
          { en: 'You might not be right.', hi: 'तुम सही नहीं हो सकते।' },
          { en: 'We might not meet tomorrow.', hi: 'हम कल नहीं मिल सकते।' },
          { en: 'He might not arrive.', hi: 'वह नहीं आ सकता।' },
          { en: 'She might not need help.', hi: 'उसे मदद की ज़रूरत नहीं हो सकती।' }
        ],
        wh: [
          { en: 'When might it rain?', hi: 'बारिश कब हो सकती है?' },
          { en: 'Why might he come later?', hi: 'वह बाद में क्यों आ सकता है?' },
          { en: 'Why might she be busy?', hi: 'वह व्यस्त क्यों हो सकती है?' },
          { en: 'Who might win the match?', hi: 'कौन मैच जीत सकता है?' },
          { en: 'Why might I go to Delhi?', hi: 'मैं दिल्ली क्यों जा सकता हूँ?' },
          { en: 'How might it be true?', hi: 'यह कैसे सच हो सकता है?' },
          { en: 'Why might you be right?', hi: 'तुम सही क्यों हो सकते हो?' },
          { en: 'When might we meet?', hi: 'हम कब मिल सकते हैं?' },
          { en: 'Why might he not come?', hi: 'वह क्यों न आए?' },
          { en: 'What might she need?', hi: 'उसे क्या चाहिए हो सकता है?' }
        ]
      }
    },
    { word: 'would', hi: 'करता / करेंगे', usage: 'Polite request / Past habit',
      examples: {
        simple: [
          { en: 'I would like a cup of tea.', hi: 'मुझे एक कप चाय चाहिए।' },
          { en: 'Would you help me?', hi: 'क्या तुम मेरी मदद करोगे?' },
          { en: 'He would come every day.', hi: 'वह रोज़ आता था।' },
          { en: 'She would sing beautifully.', hi: 'वह सुंदर गाती थी।' },
          { en: 'We would play cricket.', hi: 'हम क्रिकेट खेलते थे।' },
          { en: 'I would love to meet you.', hi: 'मुझे तुमसे मिलना अच्छा लगेगा।' },
          { en: 'Would you like some water?', hi: 'क्या तुम कुछ पानी लोगे?' },
          { en: 'They would often visit us.', hi: 'वे अक्सर हमसे मिलने आते थे।' },
          { en: 'She would always help others.', hi: 'वह हमेशा दूसरों की मदद करती थी।' },
          { en: 'I would rather stay home.', hi: 'मैं घर पर रहना पसंद करूँगा।' }
        ],
        negative: [
          { en: 'I would not like a cup of tea.', hi: 'मुझे चाय नहीं चाहिए।' },
          { en: 'Would you not help me?', hi: 'क्या तुम मेरी मदद नहीं करोगे?' },
          { en: 'He would not come every day.', hi: 'वह रोज़ नहीं आता था।' },
          { en: 'She would not sing beautifully.', hi: 'वह सुंदर नहीं गाती थी।' },
          { en: 'We would not play cricket.', hi: 'हम क्रिकेट नहीं खेलते थे।' },
          { en: 'I would not love to meet you.', hi: 'मुझे तुमसे मिलना अच्छा नहीं लगेगा।' },
          { en: 'Would you not like some water?', hi: 'क्या तुम कुछ पानी नहीं लोगे?' },
          { en: 'They would not visit us.', hi: 'वे हमसे नहीं मिलने आते थे।' },
          { en: 'She would not help others.', hi: 'वह दूसरों की मदद नहीं करती थी।' },
          { en: 'I would not stay home.', hi: 'मैं घर पर नहीं रहना चाहूँगा।' }
        ],
        wh: [
          { en: 'What would you like?', hi: 'तुम्हें क्या चाहिए?' },
          { en: 'How would you help me?', hi: 'तुम मेरी मदद कैसे करोगे?' },
          { en: 'How often would he come?', hi: 'वह कितनी बार आता था?' },
          { en: 'How would she sing?', hi: 'वह कैसे गाती थी?' },
          { en: 'When would we play cricket?', hi: 'हम कब क्रिकेट खेलते थे?' },
          { en: 'Why would I meet you?', hi: 'मैं तुमसे क्यों मिलूँगा?' },
          { en: 'What would you like to drink?', hi: 'तुम क्या पीना चाहोगे?' },
          { en: 'How often would they visit?', hi: 'वे कितनी बार आते थे?' },
          { en: 'Whom would she help?', hi: 'वह किसकी मदद करती थी?' },
          { en: 'Where would I stay?', hi: 'मैं कहाँ रहूँगा?' }
        ]
      }
    },
    { word: 'need', hi: 'ज़रूरत है', usage: 'Necessity',
      examples: {
        simple: [
          { en: 'I need your help.', hi: 'मुझे तुम्हारी मदद चाहिए।' },
          { en: 'You need to study.', hi: 'तुम्हें पढ़ाई करनी है।' },
          { en: 'He needs a doctor.', hi: 'उसे डॉक्टर की ज़रूरत है।' },
          { en: 'She needs rest.', hi: 'उसे आराम की ज़रूरत है।' },
          { en: 'We need more time.', hi: 'हमें और समय चाहिए।' },
          { en: 'They need money.', hi: 'उन्हें पैसे चाहिए।' },
          { en: 'I need to sleep.', hi: 'मुझे सोने की ज़रूरत है।' },
          { en: 'You need to exercise.', hi: 'तुम्हें व्यायाम करना है।' },
          { en: 'He needs a new phone.', hi: 'उसे नया फ़ोन चाहिए।' },
          { en: 'She needs to improve.', hi: 'उसे सुधार की ज़रूरत है।' }
        ],
        negative: [
          { en: 'I do not need your help.', hi: 'मुझे तुम्हारी मदद नहीं चाहिए।' },
          { en: 'You do not need to study.', hi: 'तुम्हें पढ़ाई नहीं करनी है।' },
          { en: 'He does not need a doctor.', hi: 'उसे डॉक्टर की ज़रूरत नहीं है।' },
          { en: 'She does not need rest.', hi: 'उसे आराम की ज़रूरत नहीं है।' },
          { en: 'We do not need more time.', hi: 'हमें और समय नहीं चाहिए।' },
          { en: 'They do not need money.', hi: 'उन्हें पैसे नहीं चाहिए।' },
          { en: 'I do not need to sleep.', hi: 'मुझे सोने की ज़रूरत नहीं है।' },
          { en: 'You do not need to exercise.', hi: 'तुम्हें व्यायाम नहीं करना है।' },
          { en: 'He does not need a new phone.', hi: 'उसे नया फ़ोन नहीं चाहिए।' },
          { en: 'She does not need to improve.', hi: 'उसे सुधार की ज़रूरत नहीं है।' }
        ],
        wh: [
          { en: 'What do I need?', hi: 'मुझे क्या चाहिए?' },
          { en: 'Why do you need to study?', hi: 'तुम्हें पढ़ाई क्यों करनी है?' },
          { en: 'Why does he need a doctor?', hi: 'उसे डॉक्टर की ज़रूरत क्यों है?' },
          { en: 'Why does she need rest?', hi: 'उसे आराम की ज़रूरत क्यों है?' },
          { en: 'How much time do we need?', hi: 'हमें कितना समय चाहिए?' },
          { en: 'How much money do they need?', hi: 'उन्हें कितने पैसे चाहिए?' },
          { en: 'Why do I need to sleep?', hi: 'मुझे सोने की ज़रूरत क्यों है?' },
          { en: 'Why do you need to exercise?', hi: 'तुम्हें व्यायाम क्यों करना है?' },
          { en: 'What kind of phone does he need?', hi: 'उसे कैसा फ़ोन चाहिए?' },
          { en: 'What does she need to improve?', hi: 'उसे क्या सुधारना है?' }
        ]
      }
    },
    { word: 'dare', hi: 'हिम्मत करना', usage: 'Courage',
      examples: {
        simple: [
          { en: 'I dare to speak the truth.', hi: 'मैं सच बोलने की हिम्मत करता हूँ।' },
          { en: 'He dare not lie.', hi: 'वह झूठ बोलने की हिम्मत नहीं करता।' },
          { en: 'She dares to dream big.', hi: 'वह बड़े सपने देखने की हिम्मत करती है।' },
          { en: 'How dare you say that?', hi: 'तुम्हारी हिम्मत कैसे हुई यह कहने की?' },
          { en: 'He would not dare to come.', hi: 'वह आने की हिम्मत नहीं करेगा।' },
          { en: 'I dare you to try.', hi: 'मैं तुम्हें कोशिश करने की चुनौती देता हूँ।' },
          { en: 'She dare not refuse.', hi: 'वह मना करने की हिम्मत नहीं करती।' },
          { en: 'They dared to fight.', hi: 'उन्होंने लड़ने की हिम्मत की।' },
          { en: 'He dares to speak up.', hi: 'वह बोलने की हिम्मत करता है।' },
          { en: 'Nobody dares to challenge him.', hi: 'कोई उसे चुनौती देने की हिम्मत नहीं करता।' }
        ],
        negative: [
          { en: 'I do not dare to speak the truth.', hi: 'मैं सच बोलने की हिम्मत नहीं करता।' },
          { en: 'He dares not lie.', hi: 'वह झूठ नहीं बोलने की हिम्मत करता।' },
          { en: 'She does not dare to dream big.', hi: 'वह बड़े सपने देखने की हिम्मत नहीं करती।' },
          { en: 'How dare you not say that?', hi: 'तुम्हारी हिम्मत कैसे हुई यह न कहने की?' },
          { en: 'He would not dare not to come.', hi: 'वह न आने की हिम्मत नहीं करेगा।' },
          { en: 'I dare you not to try.', hi: 'मैं तुम्हें कोशिश न करने की चुनौती देता हूँ।' },
          { en: 'She dare not refuse.', hi: 'वह मना करने की हिम्मत नहीं करती।' },
          { en: 'They did not dare to fight.', hi: 'उन्होंने लड़ने की हिम्मत नहीं की।' },
          { en: 'He does not dare to speak up.', hi: 'वह बोलने की हिम्मत नहीं करता।' },
          { en: 'Nobody dares not to challenge him.', hi: 'कोई उसे चुनौती न देने की हिम्मत नहीं करता।' }
        ],
        wh: [
          { en: 'What do I dare to speak?', hi: 'मैं क्या बोलने की हिम्मत करता हूँ?' },
          { en: 'Why does he dare not lie?', hi: 'वह झूठ क्यों नहीं बोलने की हिम्मत करता?' },
          { en: 'How does she dare to dream big?', hi: 'वह बड़े सपने कैसे देखने की हिम्मत करती है?' },
          { en: 'Why dare you say that?', hi: 'तुम्हारी हिम्मत क्यों हुई यह कहने की?' },
          { en: 'Why would he not dare to come?', hi: 'वह आने की हिम्मत क्यों नहीं करेगा?' },
          { en: 'What do I dare you to do?', hi: 'मैं तुम्हें क्या करने की चुनौती देता हूँ?' },
          { en: 'Why does she dare not refuse?', hi: 'वह मना करने की हिम्मत क्यों नहीं करती?' },
          { en: 'What did they dare to do?', hi: 'उन्होंने क्या करने की हिम्मत की?' },
          { en: 'How does he dare to speak up?', hi: 'वह बोलने की हिम्मत कैसे करता है?' },
          { en: 'Why does nobody dare to challenge him?', hi: 'कोई उसे चुनौती देने की हिम्मत क्यों नहीं करता?' }
        ]
      }
    },
    { word: 'must', hi: 'ज़रूर / अवश्य', usage: 'Strong necessity',
      examples: {
        simple: [
          { en: 'You must study hard.', hi: 'तुम्हें मेहनत करनी ही चाहिए।' },
          { en: 'He must see a doctor.', hi: 'उसे डॉक्टर को दिखाना ही चाहिए।' },
          { en: 'We must help the poor.', hi: 'हमें गरीबों की मदद करनी ही चाहिए।' },
          { en: 'She must take rest.', hi: 'उसे आराम करना ही चाहिए।' },
          { en: 'They must come on time.', hi: 'उन्हें समय पर आना ही चाहिए।' },
          { en: 'I must wake up early.', hi: 'मुझे जल्दी उठना ही चाहिए।' },
          { en: 'You must respect elders.', hi: 'तुम्हें बड़ों का सम्मान करना ही चाहिए।' },
          { en: 'He must exercise daily.', hi: 'उसे रोज़ व्यायाम करना ही चाहिए।' },
          { en: 'We must save money.', hi: 'हमें पैसे बचाने ही चाहिए।' },
          { en: 'She must learn English.', hi: 'उसे English सीखनी ही चाहिए।' }
        ],
        negative: [
          { en: 'You must not study hard.', hi: 'तुम्हें मेहनत नहीं करनी चाहिए।' },
          { en: 'He must not see a doctor.', hi: 'उसे डॉक्टर को नहीं दिखाना चाहिए।' },
          { en: 'We must not help the poor.', hi: 'हमें गरीबों की मदद नहीं करनी चाहिए।' },
          { en: 'She must not take rest.', hi: 'उसे आराम नहीं करना चाहिए।' },
          { en: 'They must not come late.', hi: 'उन्हें देर से नहीं आना चाहिए।' },
          { en: 'I must not wake up late.', hi: 'मुझे देर से नहीं उठना चाहिए।' },
          { en: 'You must not disrespect elders.', hi: 'तुम्हें बड़ों का अपमान नहीं करना चाहिए।' },
          { en: 'He must not skip exercise.', hi: 'उसे व्यायाम नहीं छोड़ना चाहिए।' },
          { en: 'We must not waste money.', hi: 'हमें पैसे बर्बाद नहीं करने चाहिए।' },
          { en: 'She must not skip English.', hi: 'उसे English नहीं छोड़नी चाहिए।' }
        ],
        wh: [
          { en: 'What must I do?', hi: 'मुझे क्या करना ही चाहिए?' },
          { en: 'Why must he see a doctor?', hi: 'उसे डॉक्टर को क्यों दिखाना ही चाहिए?' },
          { en: 'Whom must we help?', hi: 'हमें किसकी मदद करनी ही चाहिए?' },
          { en: 'Why must she take rest?', hi: 'उसे आराम क्यों करना ही चाहिए?' },
          { en: 'When must they come?', hi: 'उन्हें कब आना ही चाहिए?' },
          { en: 'Why must I wake up early?', hi: 'मुझे जल्दी क्यों उठना ही चाहिए?' },
          { en: 'How must we respect elders?', hi: 'हमें बड़ों का सम्मान कैसे करना ही चाहिए?' },
          { en: 'How often must he exercise?', hi: 'उसे कितनी बार व्यायाम करना ही चाहिए?' },
          { en: 'How much must we save?', hi: 'हमें कितना बचाना ही चाहिए?' },
          { en: 'Why must she learn English?', hi: 'उसे English क्यों सीखनी ही चाहिए?' }
        ]
      }
    }
  ]
};
