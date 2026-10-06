import westminsterImg from './images/westminster.jpg';
import londonEyeImg from './images/london-eye.jpg';
import southBankImg from './images/south-bank.jpg';
import millenniumBridgeImg from './images/millennium-bridge.jpg';
import boroughMarketImg from './images/borough-market.jpg';
import shardImg from './images/shard.jpg';
import towerBridgeImg from './images/tower-bridge.jpg';
import canaryWharfImg from './images/canary-wharf.webp';
import bacchanaliaImg from './images/bacchanalia.jpg';
import maisonAssoulineImg from './images/maison-assouline.jpg';
import oxfordImg from './images/oxford.jpg';
import stonehengeImg from './images/stonehenge.jpg';
import uffingtonImg from './images/uffington-white-horse.jpg';
import gatwickExpressImg from './images/gatwick-express.jpg';
import fishAndChipsImg from './images/fish-and-chips.jpg';
import movieNightImg from './images/movie-night.jpg';
import libertyChristmasImg from './images/liberty-christmas.jpg';

export const content = {
  en: {
    hero: {
      eyebrow: 'A photo walk, mapped out for us 📸',
      title: 'River Thames',
      kicker: 'Night Photography Walk',
      subtitle: 'Friday, August 28, 2026 · starting 8:00 PM',
      blurb:
        'Westminster → South Bank → Tower Bridge, then off to Canary Wharf to chase skyscrapers. Cameras charged, comfy shoes on.',
    },
    countdown: {
      caption: 'SHUTTER OPENS IN',
      labels: { days: 'days', hrs: 'hrs', min: 'min', sec: 'sec' },
      live: "📸 It's happening tonight — have the best walk.",
    },
    sections: {
      preDate: {
        tag: '▸ BEFORE THE WALK',
        title: 'Bookshop & Dinner First',
        lead: 'The plan starts at 4:30 — well before the cameras come out.',
      },
      map: {
        tag: '▸ ROUTE',
        title: 'The Map',
        lead: 'Every stop, in order — gold line is the walk, dashed line is the hop to Canary Wharf.',
      },
      walk: {
        tag: '▸ SHOOTING MODE',
        title: 'The Route',
        lead: "Sunset's just past by the time we start, so we'll catch the tail of blue hour heading out before it goes properly dark around Millennium Bridge. Rough pace below — no need to rush, the whole point is stopping often.",
      },
      decisions: {
        tag: '▸ CONTINGENCIES',
        title: 'If Plans Change',
        lead: "No script to stick to — here's the fallback for the obvious ones.",
      },
      transport: {
        tag: '▸ TRANSPORT',
        title: 'Getting to Canary Wharf',
        lead: 'From Tower Bridge, a few ways to get to Canary Wharf:',
      },
      canary: {
        tag: '▸ LOCATION 02',
        title: 'Canary Wharf',
        lead: 'Skyscrapers and still water to close out the night.',
      },
      checklist: {
        tag: '▸ GEAR CHECK',
        title: 'Before We Go',
      },
      suggest: {
        tag: '▸ SUGGEST',
        title: 'Got an Idea?',
        lead: "Want to help add to the plan? Send me some ideas!",
      },
    },
    userGate: {
      title: "Who's this?",
    },
    passwordGate: {
      greeting: 'Hi,',
      placeholder: 'Passphrase',
      submit: 'Unlock',
      error: "That's not it — try again?",
    },
    suggestForm: {
      messagePlaceholder: 'Tell me about it...',
      submit: 'Send',
      sending: 'Sending...',
      success: "Sent! I'll take a look 👀",
      error: "Hmm, that didn't send — try again?",
    },
    preDatePlan: [
      {
        time: '4:30 PM',
        title: 'Waterstones Gower Street',
        blurb: '82 Gower Street — an old favourite for browsing shelves and reading together before the night gets going.',
        icon: '📚',
      },
      {
        time: '~6:00 PM',
        title: 'Dinner — pick one',
        blurb: "Four Seasons or Xu for classic Chinatown Cantonese, or Nan Hotpot / Haidilao if hotpot's more the vibe — all an easy 15–20 min walk from Gower Street.",
        icon: '🍜',
      },
      {
        time: '8:00 PM',
        title: 'Down to Westminster',
        blurb: "From Chinatown it's about 20 minutes to Westminster Bridge — walk it, or hop the Bakerloo/Jubilee line from Piccadilly Circus.",
        icon: '🚶',
      },
    ],
    walkStops: [
      {
        time: '8:00 PM',
        title: 'Westminster Bridge',
        blurb:
          "Kick off with the classic shot — Big Ben & the Houses of Parliament glowing gold, the London Eye lit up just behind you.",
        tip: 'Rest your phone against the railing for a steady long exposure of the traffic light-trails on the bridge below.',
        coords: [51.5008, -0.1195],
        image: westminsterImg,
      },
      {
        time: '8:15 PM',
        title: 'Jubilee Gardens & the London Eye',
        blurb: 'Follow the South Bank promenade as the Eye slowly turns and glows over the river.',
        tip: "Shoot from the water's edge and time it between boat wakes to catch a clean reflection.",
        coords: [51.5033, -0.1196],
        image: londonEyeImg,
      },
      {
        time: '8:35 PM',
        title: 'South Bank Boardwalk',
        blurb: 'The riverside walkway past the street performers and book stalls — string lights overhead and the City glowing across the water.',
        tip: '',
        coords: [51.5063, -0.1091],
        image: southBankImg,
      },
      {
        time: '8:50 PM',
        title: 'Millennium Bridge & St Paul’s',
        blurb: "The postcard shot: St Paul's dome floating above the glowing footbridge.",
        tip: 'Stand mid-bridge, brace on the railing, and go long exposure to smooth out anyone walking past.',
        coords: [51.5081, -0.0985],
        image: millenniumBridgeImg,
      },
      {
        time: '9:05 PM',
        title: 'Borough Market & Southwark Cathedral',
        blurb: "The market closed hours ago — this is just a walk-through, not a stop. Even shuttered, the lantern-lit lanes past Southwark Cathedral are pure movie-set at night.",
        tip: '',
        coords: [51.5058, -0.0908],
        image: boroughMarketImg,
      },
      {
        time: '9:20 PM',
        title: 'The Shard & London Bridge',
        blurb: "Europe's tallest building, lit up like a shard of glass against the sky.",
        tip: '',
        coords: [51.5045, -0.0865],
        image: shardImg,
      },
      {
        time: '9:40 PM',
        title: 'Tower Bridge',
        blurb:
          'The big finish. Get the classic view from the City Hall lawn, then walk up onto the bridge itself for the close-up.',
        tip: 'This is the money shot of the night — give yourselves a full 20 minutes here, no rushing.',
        coords: [51.5055, -0.0754],
        image: towerBridgeImg,
      },
      {
        time: '10:20 PM',
        title: 'Canary Wharf',
        blurb:
          'The last frame of the night — glass towers and their mirror image in the still dock water. Exact spots and a late bite are just below.',
        tip: '',
        coords: [51.5075, -0.0235],
        image: canaryWharfImg,
      },
    ],
    decisionPoints: [
      {
        trigger: 'Getting hungry?',
        action: 'The Anchor Bankside or The Founders Arms — both riverside pubs near Millennium Bridge, serving food until around 11pm on Fridays.',
        icon: '🍽️',
      },
      {
        trigger: 'Need to sit down?',
        action: 'Benches at Jubilee Gardens or the steps outside Tate Modern — free river-view seating the whole route.',
        icon: '🪑',
      },
      {
        trigger: 'Weather turns?',
        action: 'Duck under Blackfriars Railway Bridge, or into whichever pub is closest — both keep you dry without derailing the night.',
        icon: '☔',
      },
      {
        trigger: 'Running behind?',
        action: 'Skip ahead to Tower Bridge — catch the RV1 bus or a Thames Clipper from Bankside Pier instead of walking the rest.',
        icon: '⏩',
      },
      {
        trigger: 'Want a shorter night?',
        action: 'Cut the Borough Market detour and go straight from Millennium Bridge to London Bridge — saves about 15 minutes.',
        icon: '✂️',
      },
    ],
    transitOptions: [
      {
        name: 'DLR from Tower Gateway',
        detail: '5 min walk from Tower Bridge, ~15 min ride, trains every few minutes.',
        icon: '🚈',
      },
      {
        name: 'Jubilee line (Night Tube)',
        detail: 'From London Bridge — runs all night on Fridays, the safest fallback if you run late.',
        icon: '🚇',
      },
      {
        name: 'Uber Bike (Lime e-bike)',
        detail: 'Dockless, so grab one right at Tower Bridge — a scenic ~20 min ride past Wapping & Limehouse straight to Canary Wharf.',
        icon: '🚲',
      },
      {
        name: 'Thames Clipper riverboat',
        detail: 'Lovely if it lines up, but double-check the last sailing — services thin out well before midnight.',
        icon: '⛴️',
      },
    ],
    canaryWharfStops: [
      {
        title: 'West India Quay',
        blurb: 'Still dock water turns the skyscrapers into perfect mirror reflections — a long-exposure favorite.',
        coords: [51.5075, -0.0235],
        image: canaryWharfImg,
      },
      {
        title: 'Crossrail Place Roof Garden',
        blurb: 'A glass-canopied garden above the station — unusual and quiet compared to the ground-level glass towers.',
        coords: [51.503, -0.0187],
      },
      {
        title: 'A late bite',
        blurb: 'The Sushi Co, right in Canary Wharf, serves until 1–2am on weekends — the reliable option once you land here this late.',
        coords: [51.5058, -0.0184],
      },
    ],
    checklist: [
      'Phone/camera fully charged + a spare battery',
      'Portable charger',
      'Contactless card / Oyster ready to tap',
      'Uber app updated (for a Lime e-bike, just in case)',
      'Comfy walking shoes',
      'A light jacket — the river breeze picks up at night',
      'A big box of excitement :))',
    ],
    footer: 'JJ + ZZ — can’t wait for Friday.',
    mapAriaLabel: 'Map of the route from Westminster to Tower Bridge, then Canary Wharf',
    nextTrip: {
      tag: '▸ NEXT UP',
      title: 'Catching flights and feelings',
      subtitle: 'Sat Nov 7 – Sun Nov 8, 2026',
      pass: { dest: 'London', arrives: '07 NOV', seat: 'Window' },
      blurb:
        "I land in London Saturday morning — so we're keeping the first weekend low-key and chill: I shake off the jet lag, we meet for a lazy afternoon in one London bookstore, then take a trip to explore somewhere new.",
      day1: {
        tag: '▸ DAY 1 · SATURDAY',
        title: 'Landing Day — One Bookstore, No Rush',
        lead: "I land in the morning, so the whole day stays loose — I drop my bags at my hotel and might take a nap, then you can meet me at the bookstore in the afternoon and we'll get fish and chips for dinner.",
      },
      day2: {
        tag: '▸ DAY 2 · SUNDAY',
        title: 'Sunday — Pick One',
        lead: "Not decided yet — three options below: two days out, and one where we don't go anywhere at all.",
      },
    },
    day1Plan: [
      {
        time: 'Morning',
        title: 'Land + check in',
        blurb: "I land, take the train from Gatwick to my hotel, check in, shower — might take a nap, so I'll chill for a bit.",
        icon: '🛬',
        image: gatwickExpressImg,
        imagePosition: '85% center',
      },
      {
        time: 'Afternoon',
        title: 'Maison Assouline, Piccadilly',
        blurb: "Where you can meet me. One bookstore, the whole afternoon — Assouline's flagship, more library lounge than shop, with Swans Bar inside for when we want to sit with a drink. Pick a pile, find a corner, no clock.",
        icon: '📚',
        image: maisonAssoulineImg,
      },
      {
        time: 'Evening',
        title: 'The Seashell of Lisson Grove',
        blurb: "Proper fish and chips in Marylebone — a London institution for 60-odd years, and the chips are supposed to be really good.",
        icon: '🍽️',
        image: fishAndChipsImg,
      },
    ],
    wednesday: {
      tag: '▸ WEDNESDAY · NOV 11',
      title: 'Liberty at Christmas, then Bacchanalia',
      lead: 'One dressed-up day in the middle of the week — Christmas shopping in the afternoon, dinner in Mayfair after.',
      steps: [
        {
          time: 'Afternoon',
          title: 'Liberty London, the Christmas shop',
          blurb: 'The big mock-Tudor department store off Regent Street, with a whole floor of Christmas at the top — baubles, ornaments and far too many things we do not need. We each pick one for the other.',
          icon: '🎄',
          image: libertyChristmasImg,
        },
        {
          time: 'Evening',
          title: 'Bacchanalia, Mayfair',
          blurb: 'Dinner on Mount Street in Mayfair — Greek- and Roman-inspired food in a very over-the-top room.',
          icon: '🏛️',
          image: bacchanaliaImg,
        },
      ],
    },
    day2Options: [
      {
        key: 'roadtrip',
        images: [
          { src: stonehengeImg, position: 'center 75%', alt: 'Stonehenge' },
          { src: uffingtonImg, position: 'center 57%', alt: 'Uffington White Horse' },
        ],
        title: 'Option A — Road Trip: Stonehenge + the White Horse',
        subtitle: '~5hrs driving in total · rental car from London',
        blurb: "The wildcard — rent a car and spend the day with two of the oldest things in England: the stone circle in the morning, then a 3,000-year-old chalk horse cut into a hillside before sunset. No bookstores, lots of sky, and it wants decent weather.",
        plan: [
          {
            time: '8:00 AM',
            title: 'Pick up the car, drive west',
            blurb: 'About two hours out to Salisbury Plain — coffee and a playlist for the road.',
            icon: '🚗',
          },
          {
            time: '10:00 AM',
            title: 'Stonehenge',
            blurb: 'The stone circle itself, before the midday crowds — audio guide included with entry.',
            icon: '🗿',
          },
          {
            time: '12:00 PM',
            title: 'Drive north, lunch in Marlborough',
            blurb: 'Up across the downs towards the White Horse, stopping in the market town of Marlborough for something warm on the way.',
            icon: '🍽️',
          },
          {
            time: '2:15 PM',
            title: 'The White Horse & Dragon Hill',
            blurb: "Britain's oldest chalk figure, around 3,000 years old and over 100 metres long. Just below it is Dragon Hill, where St George is said to have slain the dragon — and on top, the Iron Age ramparts of Uffington Castle.",
            icon: '🐎',
          },
          {
            time: '4:00 PM',
            title: 'Drive back to London',
            blurb: 'Off the hill around sunset and about two hours home along the M4, with time to drop the car before dinner.',
            icon: '🌙',
          },
        ],
      },
      {
        key: 'oxford',
        image: oxfordImg,
        title: 'Option B — Oxford',
        subtitle: '~1hr each way · trains from Paddington',
        blurb: "The classic pick — bookstores and old libraries packed into a few streets, plus a direct literary line to tonight's Tolkien/Lewis reading group.",
        plan: [
          {
            time: '9:30 AM',
            title: 'Train from Paddington',
            blurb: 'Direct train to Oxford, just under an hour — coffee at the station first.',
            icon: '🚆',
          },
          {
            time: '11:00 AM',
            title: 'Radcliffe Camera & Divinity School',
            blurb: "The Bodleian's iconic domed reading room (exterior only — readers-only inside) and the Divinity School's vaulted ceiling, used as the Hogwarts infirmary in the films.",
            icon: '🏰',
          },
          {
            time: '12:30 PM',
            title: "Blackwell's Bookshop",
            blurb: "Legendary Oxford bookstore — don't miss the Norrington Room, an entire subterranean floor of shelving.",
            icon: '📖',
          },
          {
            time: '1:30 PM',
            title: 'Lunch at The Eagle and Child',
            blurb: 'The pub where Tolkien and C.S. Lewis met weekly to read drafts of The Hobbit and Narnia aloud to each other.',
            icon: '🍺',
          },
          {
            time: '3:00 PM',
            title: 'Christ Church & the colleges',
            blurb: "Wander the quads and the dining hall that inspired Hogwarts' — or punt on the Cherwell if the weather's kind.",
            icon: '🚣',
          },
          {
            time: '6:30 PM',
            title: 'Train back to London',
            blurb: 'Back at Paddington by evening, with the rest of the week still ahead of us.',
            icon: '🌙',
          },
        ],
      },
      {
        key: 'stayin',
        image: movieNightImg,
        imagePosition: 'center 59%',
        imageAspect: '16 / 10',
        title: 'Option C — Stay In: Movies, Games & Room Service',
        subtitle: 'Zero travel · a really nice hotel room and nowhere to be',
        blurb: "No trains, no car, no reason needed — if either of us would rather have a slow one, we book a really nice room and don't leave it. Just as good a Sunday as the other two.",
        plan: [
          {
            time: 'Morning',
            title: 'No alarm, breakfast in bed',
            blurb: 'Sleep in as long as we like, then room service — or one of us does a pastry and coffee run.',
            icon: '🥐',
          },
          {
            time: 'Afternoon',
            title: 'Movies — Project Hail Mary, maybe Paddington',
            blurb: 'Ryan Gosling, a very long way from home, trying to save the world — and if we want a second one, a small bear with a marmalade habit loose in London. Blankets, snacks, curtains closed.',
            icon: '🎬',
          },
          {
            time: 'Late afternoon',
            title: 'Games',
            blurb: 'Cards, a board game, or something co-op on the laptop — loser orders dinner.',
            icon: '🎲',
          },
          {
            time: 'Evening',
            title: 'Dinner in',
            blurb: "Whatever we're craving, delivered to the door. Hot chocolate, a long bath, an early night.",
            icon: '🛋️',
          },
        ],
      },
    ],
    completedBadge: '✓ Completed — this one already happened',
  },

  zh: {
    hero: {
      eyebrow: '为我们俩规划的一场夜拍漫步 📸',
      title: '泰晤士河',
      kicker: '夜间摄影漫步',
      subtitle: '星期五,2026年8月28日 · 晚上8点出发',
      blurb:
        '从威斯敏斯特桥沿南岸走到塔桥,再转乘地铁或骑车去金丝雀码头追逐摩天大楼夜景。相机电量拉满,鞋子舒服就好。',
    },
    countdown: {
      caption: '快门倒计时',
      labels: { days: '天', hrs: '时', min: '分', sec: '秒' },
      live: '📸 就是今晚了 — 好好享受这场漫步吧。',
    },
    sections: {
      preDate: {
        tag: '▸ 徒步之前',
        title: '先去书店和晚餐',
        lead: '整个计划从4:30开始 — 早于相机登场之前。',
      },
      map: {
        tag: '▸ 路线',
        title: '地图',
        lead: '每一站都标在图上 — 金色线是步行路线,虚线是前往金丝雀码头的那一段。',
      },
      walk: {
        tag: '▸ 拍摄模式',
        title: '徒步路线',
        lead: '出发时太阳刚落山不久,所以前段还能赶上蓝调时刻的尾巴,到千禧桥附近天就彻底黑透了。下面的时间只是大致节奏 — 不用赶,重点就是多停下来拍照。',
      },
      decisions: {
        tag: '▸ 备选方案',
        title: '计划有变时',
        lead: '没有非照做不可的剧本 — 这里是几种常见情况的应对办法。',
      },
      transport: {
        tag: '▸ 交通',
        title: '前往金丝雀码头',
        lead: '从塔桥出发,有几种方式可以到金丝雀码头:',
      },
      canary: {
        tag: '▸ 第二站',
        title: '金丝雀码头',
        lead: '摩天大楼和平静的水面,为这一晚画上句号。',
      },
      checklist: {
        tag: '▸ 装备检查',
        title: '出发前',
      },
      suggest: {
        tag: '▸ 建议',
        title: '有什么想法?',
        lead: '想帮忙给这个计划加点想法吗?发给我吧!',
      },
    },
    userGate: {
      title: '你是谁呀?',
    },
    passwordGate: {
      greeting: '你好,',
      placeholder: '暗号',
      submit: '解锁',
      error: '不对哦,再试一次?',
    },
    suggestForm: {
      messagePlaceholder: '说说看...',
      submit: '发送',
      sending: '发送中...',
      success: '已发送!我会看看的 👀',
      error: '好像没发送成功,再试一次?',
    },
    preDatePlan: [
      {
        time: '下午4:30',
        title: 'Waterstones 高尔街店',
        blurb: '地址82 Gower Street — 一起在书架间闲逛、读读书,为今晚开个头。',
        icon: '📚',
      },
      {
        time: '约晚上6:00',
        title: '晚餐 — 任选一家',
        blurb: '想吃经典粤菜可以去 Four Seasons 或 Xu,想吃火锅就去 Nan Hotpot 或海底捞 — 从高尔街走过去都只要15-20分钟。',
        icon: '🍜',
      },
      {
        time: '晚上8:00',
        title: '前往威斯敏斯特',
        blurb: '从唐人街到威斯敏斯特桥大约20分钟 — 走过去,或者从皮卡迪利广场搭Bakerloo/Jubilee线都行。',
        icon: '🚶',
      },
    ],
    walkStops: [
      {
        time: '晚上8:00',
        title: '威斯敏斯特桥',
        blurb: '经典的第一张照片 — 金光闪闪的大本钟和议会大厦,伦敦眼就在你身后亮着。',
        tip: '把手机靠在栏杆上,给桥下的车流灯轨拍一张稳定的长曝光。',
        coords: [51.5008, -0.1195],
        image: westminsterImg,
      },
      {
        time: '晚上8:15',
        title: '朱比利花园与伦敦眼',
        blurb: '沿着南岸步道走,伦敦眼缓缓转动,在河面上发着光。',
        tip: '在水边取景,避开船只激起的水波,抓拍一张干净的倒影。',
        coords: [51.5033, -0.1196],
        image: londonEyeImg,
      },
      {
        time: '晚上8:35',
        title: '南岸木栈道',
        blurb: '沿河的步道,路过街头艺人和旧书摊 — 头顶挂着串灯,对岸的城区灯火通明。',
        tip: '',
        coords: [51.5063, -0.1091],
        image: southBankImg,
      },
      {
        time: '晚上8:50',
        title: '千禧桥与圣保罗大教堂',
        blurb: '明信片级别的画面:圣保罗大教堂的穹顶悬浮在这座会发光的步行桥之上。',
        tip: '站在桥中间,靠住栏杆,用长曝光把过路行人虚化掉。',
        coords: [51.5081, -0.0985],
        image: millenniumBridgeImg,
      },
      {
        time: '晚上9:05',
        title: '博罗市场与南华克座堂',
        blurb: '市场几小时前就打烊了 — 这里只是路过,不是站点。就算摊位都关着,南华克座堂旁那些灯笼照亮的小巷,夜里看起来也像电影场景。',
        tip: '',
        coords: [51.5058, -0.0908],
        image: boroughMarketImg,
      },
      {
        time: '晚上9:20',
        title: '碎片大厦与伦敦桥',
        blurb: '欧洲最高的建筑,亮起来就像夜空下的一片玻璃碎片。',
        tip: '',
        coords: [51.5045, -0.0865],
        image: shardImg,
      },
      {
        time: '晚上9:40',
        title: '塔桥',
        blurb: '压轴大戏。先在市政厅草坪拍经典全景,再走上桥面近距离拍摄。',
        tip: '这是今晚最重要的一张照片 — 留足整整20分钟,不用赶时间。',
        coords: [51.5055, -0.0754],
        image: towerBridgeImg,
      },
      {
        time: '晚上10:20',
        title: '金丝雀码头',
        blurb: '今晚的最后一帧 — 玻璃大厦和它们在静止码头水面上的倒影。具体拍摄点和深夜小吃就在下面。',
        tip: '',
        coords: [51.5075, -0.0235],
        image: canaryWharfImg,
      },
    ],
    decisionPoints: [
      {
        trigger: '饿了怎么办?',
        action: 'The Anchor Bankside 或 The Founders Arms — 千禧桥附近的两家河边酒吧,周五晚上11点左右还供应餐食。',
        icon: '🍽️',
      },
      {
        trigger: '想坐下休息?',
        action: '朱比利花园的长椅,或泰特现代美术馆门前的台阶 — 全程都有免费的江景座位。',
        icon: '🪑',
      },
      {
        trigger: '天气变坏了?',
        action: '躲到黑衣修士铁路桥下,或就近找家酒吧 — 都能避雨,又不耽误整晚的计划。',
        icon: '☔',
      },
      {
        trigger: '时间赶不上了?',
        action: '直接跳到塔桥 — 从班克赛德码头搭RV1公交车或泰晤士快船,省去剩下的步行路程。',
        icon: '⏩',
      },
      {
        trigger: '想早点结束?',
        action: '跳过博罗市场那段绕行,从千禧桥直接走到伦敦桥 — 大约能省15分钟。',
        icon: '✂️',
      },
    ],
    transitOptions: [
      {
        name: '塔门DLR轻轨站',
        detail: '从塔桥步行5分钟,车程约15分钟,班次很密集。',
        icon: '🚈',
      },
      {
        name: '朱比利线(通宵地铁)',
        detail: '从伦敦桥站上车 — 周五整晚运行,是万一时间拖晚了最保险的选择。',
        icon: '🚇',
      },
      {
        name: 'Uber共享单车(Lime电动车)',
        detail: '无桩式,可以直接在塔桥取车 — 沿河边经瓦平和莱姆豪斯,骑行约20分钟就能到金丝雀码头,沿途风景很好。',
        icon: '🚲',
      },
      {
        name: '泰晤士快船',
        detail: '如果时间刚好赶上会很棒,但要提前确认末班船时间 — 快到午夜时班次就很少了。',
        icon: '⛴️',
      },
    ],
    canaryWharfStops: [
      {
        title: '西印度码头',
        blurb: '平静的码头水面把摩天大楼变成完美的镜面倒影 — 长曝光的绝佳素材。',
        coords: [51.5075, -0.0235],
        image: canaryWharfImg,
      },
      {
        title: 'Crossrail Place 屋顶花园',
        blurb: '车站上方的玻璃穹顶花园 — 和楼下的玻璃幕墙比起来,这里安静又特别。',
        coords: [51.503, -0.0187],
      },
      {
        title: '深夜小吃',
        blurb: 'The Sushi Co 就在金丝雀码头,周末营业到凌晨1-2点 — 这么晚到这里,它是最靠谱的选择。',
        coords: [51.5058, -0.0184],
      },
    ],
    checklist: [
      '手机/相机电量充满,再带一块备用电池',
      '充电宝',
      '交通卡(Oyster或银行卡)提前备好',
      'Uber App 记得更新(万一要租Lime电动车)',
      '一双舒服的步行鞋',
      '一件薄外套 — 夜里江边风会比较大',
      '一整箱的兴奋期待 :))',
    ],
    footer: 'JJ + ZZ — 期待星期五的到来。',
    mapAriaLabel: '从威斯敏斯特到塔桥,再到金丝雀码头的路线地图',
    nextTrip: {
      tag: '▸ 下一站',
      title: '追着航班，也追着心动',
      subtitle: '11月7日(周六)– 11月8日(周日),2026年',
      pass: { dest: '伦敦', arrives: '11月7日', seat: '靠窗' },
      blurb:
        '我周六上午到伦敦 — 所以第一个周末就不排太满啦:我先缓一缓时差,下午我们在书店见面,慢慢泡一个下午,然后再一起去个没去过的地方走走。',
      day1: {
        tag: '▸ 第一天 · 周六',
        title: '抵达日 — 一家书店,慢慢来',
        lead: '我上午才落地,所以这天就轻松一点 — 我先回酒店放行李,可能会小睡一下,下午你来书店找我就好,晚上带你去吃炸鱼薯条。',
      },
      day2: {
        tag: '▸ 第二天 · 周日',
        title: '周日 — 三选一',
        lead: '还没定 — 下面三个选项:两个出门玩,一个哪儿都不去。',
      },
    },
    day1Plan: [
      {
        time: '上午',
        title: '落地 + 入住',
        blurb: '我落地之后从盖特威克坐火车回酒店,办入住、冲个澡 — 可能会眯一会儿,缓一缓。',
        icon: '🛬',
        image: gatwickExpressImg,
        imagePosition: '85% center',
      },
      {
        time: '下午',
        title: 'Maison Assouline,皮卡迪利',
        blurb: '下午来这里找我吧。一家书店,待一整个下午 — Assouline 的旗舰店,与其说是书店,更像一间图书馆休息室,里面还有 Swans Bar,想坐下来喝一杯随时都可以。挑一摞书,找个角落,不用看时间。',
        icon: '📚',
        image: maisonAssoulineImg,
      },
      {
        time: '晚上',
        title: 'The Seashell of Lisson Grove',
        blurb: '马里波恩的正宗炸鱼薯条 — 开了六十多年的伦敦老店,听说薯条特别好吃,带你去尝尝。',
        icon: '🍽️',
        image: fishAndChipsImg,
      },
    ],
    wednesday: {
      tag: '▸ 周三 · 11月11日',
      title: 'Liberty 圣诞店,然后去 Bacchanalia',
      lead: '一周中间,好好打扮出门玩一天 — 下午逛圣诞店,晚上去梅费尔吃饭。',
      steps: [
        {
          time: '下午',
          title: 'Liberty London 圣诞店',
          blurb: '摄政街旁那栋都铎风格的老百货,顶楼一整层都是圣诞 — 挂饰、小摆件,还有一大堆我们根本不需要的东西。我们给对方各挑一个。',
          icon: '🎄',
          image: libertyChristmasImg,
        },
        {
          time: '晚上',
          title: 'Bacchanalia,梅费尔',
          blurb: '在梅费尔的 Mount Street 吃晚饭 — 希腊罗马风的菜,餐厅装潢非常浮夸。',
          icon: '🏛️',
          image: bacchanaliaImg,
        },
      ],
    },
    day2Options: [
      {
        key: 'roadtrip',
        images: [
          { src: stonehengeImg, position: 'center 75%', alt: '巨石阵' },
          { src: uffingtonImg, position: 'center 57%', alt: '优芬顿白马' },
        ],
        title: '方案A — 自驾游:巨石阵 + 白马',
        subtitle: '全程开车约5小时 · 从伦敦租车出发',
        blurb: '一张"外卡" — 租辆车,一天看两样英格兰最古老的东西:上午是巨石阵,日落前再去看刻在山坡上的三千年白垩白马。没有书店,只有大片天空,天气好才值得。',
        plan: [
          {
            time: '上午8:00',
            title: '取车,一路向西',
            blurb: '开约两小时到索尔兹伯里平原 — 带上咖啡和路上听的歌单。',
            icon: '🚗',
          },
          {
            time: '上午10:00',
            title: '巨石阵',
            blurb: '赶在中午人多之前看石阵本身 — 门票含语音导览。',
            icon: '🗿',
          },
          {
            time: '中午12:00',
            title: '向北开,在马尔伯勒吃午餐',
            blurb: '翻过丘陵往白马方向开,途中在集镇马尔伯勒(Marlborough)停下来吃点热乎的。',
            icon: '🍽️',
          },
          {
            time: '下午2:15',
            title: '白马与龙山',
            blurb: '英国最古老的白垩山丘图案,约有三千年历史,长一百多米。它正下方就是龙山(Dragon Hill),传说圣乔治在这里屠龙 — 山顶还有铁器时代的优芬顿城堡土垒。',
            icon: '🐎',
          },
          {
            time: '下午4:00',
            title: '开车回伦敦',
            blurb: '日落前后下山,沿M4高速开约两小时回到市区,晚饭前还来得及还车。',
            icon: '🌙',
          },
        ],
      },
      {
        key: 'oxford',
        image: oxfordImg,
        title: '方案B — 牛津',
        subtitle: '单程约1小时 · 帕丁顿站出发',
        blurb: '最经典的选择 — 书店和老图书馆都挤在几条街里,还跟晚上托尔金/刘易斯读书会那条文学线直接呼应。',
        plan: [
          {
            time: '上午9:30',
            title: '从帕丁顿站出发',
            blurb: '直达牛津的火车,车程不到一小时 — 先在车站买杯咖啡。',
            icon: '🚆',
          },
          {
            time: '上午11:00',
            title: '拉德克利夫卡梅拉与神学院',
            blurb: '博德利图书馆标志性的圆顶阅览室(只能看外观 — 内部仅限读者进入),以及神学院的拱顶天花板,电影里霍格沃茨医务室的取景地。',
            icon: '🏰',
          },
          {
            time: '中午12:30',
            title: 'Blackwell’s 书店',
            blurb: '牛津的传奇书店 — 别错过诺灵顿厅,整整一层地下书库。',
            icon: '📖',
          },
          {
            time: '下午1:30',
            title: '在 The Eagle and Child 吃午饭',
            blurb: '托尔金和C.S.刘易斯每周在这家酒吧聚会,互相朗读《霍比特人》和《纳尼亚传奇》的草稿。',
            icon: '🍺',
          },
          {
            time: '下午3:00',
            title: '基督堂学院与各学院',
            blurb: '逛逛那些方形庭院,还有启发了霍格沃茨大厅灵感的学院餐厅 — 天气好的话去查威尔河上撑篙。',
            icon: '🚣',
          },
          {
            time: '晚上6:30',
            title: '乘火车返回伦敦',
            blurb: '傍晚前回到帕丁顿站,这一周接下来的日子还长。',
            icon: '🌙',
          },
        ],
      },
      {
        key: 'stayin',
        image: movieNightImg,
        imagePosition: 'center 59%',
        imageAspect: '16 / 10',
        title: '方案C — 宅在酒店:电影、游戏和客房服务',
        subtitle: '零通勤 · 一间很舒服的酒店房间,哪儿都不用去',
        blurb: '不坐火车,不开车,也不需要理由 — 只要我们俩有谁想过个慢一点的周日,就订一间很舒服的房间,一整天不出门。和另外两个方案一样好。',
        plan: [
          {
            time: '上午',
            title: '不设闹钟,床上吃早餐',
            blurb: '想睡到几点就几点,然后叫客房服务 — 或者其中一个人下楼买咖啡和可颂。',
            icon: '🥐',
          },
          {
            time: '下午',
            title: '电影 —《挽救计划》,也许再加《帕丁顿熊》',
            blurb: '瑞恩·高斯林,离家非常非常远,想办法拯救世界(Project Hail Mary)— 还想再看一部的话,就看那只爱吃橘子酱、在伦敦到处闯祸的小熊。毯子、零食,窗帘拉上。',
            icon: '🎬',
          },
          {
            time: '傍晚',
            title: '玩游戏',
            blurb: '扑克、桌游,或者在电脑上玩个双人合作游戏 — 输的人负责点晚餐。',
            icon: '🎲',
          },
          {
            time: '晚上',
            title: '在房间吃晚餐',
            blurb: '想吃什么就点什么,送到门口。热巧克力,泡个澡,早点睡。',
            icon: '🛋️',
          },
        ],
      },
    ],
    completedBadge: '✓ 已完成 — 这次约会已经结束啦',
  },
};
