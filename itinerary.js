import westminsterImg from './images/westminster.jpg';
import londonEyeImg from './images/london-eye.jpg';
import southBankImg from './images/south-bank.jpg';
import millenniumBridgeImg from './images/millennium-bridge.jpg';
import boroughMarketImg from './images/borough-market.jpg';
import shardImg from './images/shard.jpg';
import towerBridgeImg from './images/tower-bridge.jpg';
import canaryWharfImg from './images/canary-wharf.webp';

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
    proposal: {
      question: 'Will you be my girlfriend?',
      yes: 'Yes',
      think: "I'll think about it",
      accepted: "She said yes 🎉",
    },
    nextTrip: {
      tag: '▸ NEXT UP',
      title: 'Catching flights and feelings',
      subtitle: 'Sat Nov 7 – Sun Nov 8, 2026',
      pass: { dest: 'London', arrives: '07 NOV', seat: 'Window' },
      blurb:
        "Landing in London Saturday morning — so we're keeping the first weekend low-key and bookish: ease into the jet lag with London's best shelves, then a day trip to Oxford for the real cathedral of books.",
      day1: {
        tag: '▸ DAY 1 · SATURDAY',
        title: 'Landing Day — London Bookshops',
        lead: "We land in the morning, so nothing's scheduled before early afternoon — just drop bags, nap if we need it, and ease in slow.",
      },
      day2: {
        tag: '▸ DAY 2 · SUNDAY',
        title: 'Day Trip — Pick One',
        lead: "Not decided yet — three options below, all doable there-and-back in a day.",
      },
    },
    day1Plan: [
      {
        time: 'Morning',
        title: 'Land + check in',
        blurb: 'Touch down, get to the room, shower, nap if jet lag hits — no plans before 1pm.',
        icon: '🛬',
      },
      {
        time: '1:30 PM',
        title: 'Daunt Books, Marylebone',
        blurb: 'The famous Edwardian travel bookshop — oak galleries, a stained-glass skylight, books shelved by country. An easy, beautiful first stop.',
        icon: '📚',
      },
      {
        time: '3:00 PM',
        title: 'Hatchards, Piccadilly',
        blurb: "The UK's oldest bookshop (1797) — narrow creaky staircases and a royal warrant. Browse, maybe pick up a signed first edition.",
        icon: '🏛️',
      },
      {
        time: '4:30 PM',
        title: "The London Library, St James's Square",
        blurb: "Members-only inside, but worth the detour just to see the building where Dickens and Woolf used to come to write.",
        icon: '🗝️',
      },
      {
        time: '6:00 PM',
        title: "British Library, King's Cross",
        blurb: "Free Treasures Gallery — the Magna Carta, the Beatles' handwritten lyrics, and Leonardo da Vinci's notebook, all in one room. Open till 8pm Saturdays.",
        icon: '📜',
      },
      {
        time: '8:00 PM',
        title: "Dinner near King's Cross",
        blurb: 'Somewhere low-key and warm after a long travel day — Dishoom if we don’t mind a short wait, or Caravan for something quieter.',
        icon: '🍽️',
      },
    ],
    day2Options: [
      {
        key: 'oxford',
        title: 'Option A — Oxford',
        subtitle: '~1hr each way · trains from Paddington',
        blurb: "The classic pick — the densest concentration of bookshops and old libraries of the three, plus a direct literary line to tonight's Tolkien/Lewis reading group.",
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
            blurb: "Legendary Oxford bookshop — don't miss the Norrington Room, an entire subterranean floor of shelving.",
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
        key: 'cambridge',
        title: 'Option B — Cambridge',
        subtitle: '~50min each way · trains from King’s Cross',
        blurb: 'Quieter and less touristy than Oxford, with one of the most beautiful libraries anywhere — and the shortest train ride of the three.',
        plan: [
          {
            time: '9:00 AM',
            title: 'Train from King’s Cross',
            blurb: 'Direct train to Cambridge, about 50 minutes — the shortest hop of the three options.',
            icon: '🚆',
          },
          {
            time: '10:15 AM',
            title: 'Wren Library, Trinity College',
            blurb: "One of the most beautiful libraries in the world — holds Newton's own copy of the Principia and A.A. Milne's handwritten Winnie-the-Pooh manuscripts. Keeps limited hours (sometimes closed Sundays) — worth double-checking before we go.",
            icon: '📚',
          },
          {
            time: '11:30 AM',
            title: 'Heffers, Trinity Street',
            blurb: "Cambridge's own legendary bookshop (now part of Blackwell's), right across from Trinity College.",
            icon: '📖',
          },
          {
            time: '1:00 PM',
            title: 'Lunch at The Eagle',
            blurb: "The pub where Watson and Crick announced discovering DNA's structure in 1953 — WWII airmen's signatures are still scorched onto the ceiling.",
            icon: '🍺',
          },
          {
            time: '2:30 PM',
            title: 'Punting on the River Cam',
            blurb: 'Glide past the Bridge of Sighs and King’s College Chapel — the quintessential Cambridge view, from the water.',
            icon: '🛶',
          },
          {
            time: '6:00 PM',
            title: 'Train back to London',
            blurb: 'Back at King’s Cross by evening.',
            icon: '🌙',
          },
        ],
      },
      {
        key: 'stonehenge',
        title: 'Option C — Stonehenge & Salisbury',
        subtitle: '~1.5–2hrs each way · trains from Waterloo + a short bus/taxi',
        blurb: "Less bookish, more history — but Salisbury Cathedral's medieval chained library and its own original 1215 Magna Carta echo the British Library stop from Day 1 nicely.",
        plan: [
          {
            time: '8:30 AM',
            title: 'Train from Waterloo to Salisbury',
            blurb: 'Direct train, about 1.5 hours — the longest travel day of the three options.',
            icon: '🚆',
          },
          {
            time: '10:15 AM',
            title: 'Salisbury Cathedral',
            blurb: "Home to one of the four surviving original 1215 Magna Carta copies, plus the world's oldest working clock.",
            icon: '📜',
          },
          {
            time: '11:15 AM',
            title: "The Cathedral's chained library",
            blurb: 'A genuine medieval chained library open to visitors — books were physically chained to the shelves to stop them being "borrowed".',
            icon: '⛓️',
          },
          {
            time: '12:30 PM',
            title: 'Lunch in Salisbury',
            blurb: 'Something simple in town before heading out to the stones.',
            icon: '🍽️',
          },
          {
            time: '1:30 PM',
            title: 'Bus/taxi to Stonehenge',
            blurb: 'About 20 minutes each way — the Stonehenge Tour bus runs directly from Salisbury station.',
            icon: '🚌',
          },
          {
            time: '2:00 PM',
            title: 'Stonehenge',
            blurb: 'The stone circle itself, audio guide included with entry.',
            icon: '🗿',
          },
          {
            time: '4:00 PM',
            title: 'Back to Salisbury, train to London',
            blurb: 'Round trip home by evening.',
            icon: '🌙',
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
    proposal: {
      question: '你愿意做我女朋友吗?',
      yes: '愿意',
      think: '让我再想想',
      accepted: '她答应了 🎉',
    },
    nextTrip: {
      tag: '▸ 下一站',
      title: '追着航班，也追着心动',
      subtitle: '11月7日(周六)– 11月8日(周日),2026年',
      pass: { dest: '伦敦', arrives: '11月7日', seat: '靠窗' },
      blurb:
        '周六上午抵达伦敦 — 所以第一个周末就不安排太多,慢慢倒时差,逛逛伦敦最好的书店,再去牛津一日游,看看真正的"书之殿堂"。',
      day1: {
        tag: '▸ 第一天 · 周六',
        title: '抵达日 — 伦敦书店',
        lead: '上午才落地,所以中午前什么都不安排 — 先放行李,倒时差需要就睡一觉,慢慢来。',
      },
      day2: {
        tag: '▸ 第二天 · 周日',
        title: '一日游 — 三选一',
        lead: '还没定 — 下面三个选项,都能当天往返。',
      },
    },
    day1Plan: [
      {
        time: '上午',
        title: '落地 + 入住',
        blurb: '下飞机,到房间,冲个澡,倒时差的话睡一觉 — 下午1点前什么都不安排。',
        icon: '🛬',
      },
      {
        time: '下午1:30',
        title: 'Daunt Books,玛丽勒本店',
        blurb: '著名的爱德华时代旅行书店 — 橡木回廊、彩色玻璃天窗,书按国家分类摆放。轻松又好看的第一站。',
        icon: '📚',
      },
      {
        time: '下午3:00',
        title: 'Hatchards,皮卡迪利店',
        blurb: '英国最古老的书店(1797年开业)— 窄窄的木楼梯会发出响声,还有皇室御用资质。随便逛逛,说不定能淘到签名首版书。',
        icon: '🏛️',
      },
      {
        time: '下午4:30',
        title: '伦敦图书馆,圣詹姆斯广场',
        blurb: '只有会员才能进去,但这栋建筑值得专程绕过来看一眼 — 狄更斯和伍尔夫都曾是这里的常客。',
        icon: '🗝️',
      },
      {
        time: '下午6:00',
        title: '大英图书馆,国王十字站',
        blurb: '免费的珍品展厅 — 《大宪章》、披头士乐队的手写歌词、达·芬奇的笔记本,全都在一个展厅里。周六开到晚上8点。',
        icon: '📜',
      },
      {
        time: '晚上8:00',
        title: '国王十字站附近晚餐',
        blurb: '长途飞行后找个轻松暖心的地方 — 不介意排队就去Dishoom,想安静一点就去Caravan。',
        icon: '🍽️',
      },
    ],
    day2Options: [
      {
        key: 'oxford',
        title: '方案A — 牛津',
        subtitle: '单程约1小时 · 帕丁顿站出发',
        blurb: '最经典的选择 — 三个方案里书店和老图书馆最集中,还跟晚上托尔金/刘易斯读书会那条文学线直接呼应。',
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
        key: 'cambridge',
        title: '方案B — 剑桥',
        subtitle: '单程约50分钟 · 国王十字站出发',
        blurb: '比牛津安静、游客更少,还有世界上最美的图书馆之一 — 三个方案里车程最短。',
        plan: [
          {
            time: '上午9:00',
            title: '从国王十字站出发',
            blurb: '直达剑桥的火车,车程约50分钟 — 三个方案里最短的车程。',
            icon: '🚆',
          },
          {
            time: '上午10:15',
            title: '三一学院,雷恩图书馆',
            blurb: '世界上最美的图书馆之一 — 收藏着牛顿本人的《自然哲学的数学原理》,还有A.A.米尔恩手写的《小熊维尼》手稿。开放时间有限(周日有时不开),出发前最好再确认一下。',
            icon: '📚',
          },
          {
            time: '上午11:30',
            title: 'Heffers 书店,三一街',
            blurb: '剑桥自己的传奇书店(现属于Blackwell’s),就在三一学院对面。',
            icon: '📖',
          },
          {
            time: '下午1:00',
            title: '在 The Eagle 吃午饭',
            blurb: '1953年沃森和克里克就是在这家酒吧宣布发现了DNA结构 — 天花板上还留着二战飞行员烧出来的签名。',
            icon: '🍺',
          },
          {
            time: '下午2:30',
            title: '在剑河上撑篙',
            blurb: '滑过叹息桥和国王学院礁堂 — 从水上看剑桥最经典的风景。',
            icon: '🛶',
          },
          {
            time: '晚上6:00',
            title: '乘火车返回伦敦',
            blurb: '傍晚前回到国王十字站。',
            icon: '🌙',
          },
        ],
      },
      {
        key: 'stonehenge',
        title: '方案C — 巨石阵与索尔兹伯里',
        subtitle: '单程约1.5–2小时 · 滑铁卢站出发 + 短途巴士/出租车',
        blurb: '书卷气少一点,历史感多一点 — 不过索尔兹伯里座堂的中世纪锁链图书馆和它自己的一份原版1215年《大宪章》,正好和第一天去的大英图书馆呼应上。',
        plan: [
          {
            time: '上午8:30',
            title: '从滑铁卢站乘火车去索尔兹伯里',
            blurb: '直达火车,车程约1.5小时 — 三个方案里路上花的时间最长。',
            icon: '🚆',
          },
          {
            time: '上午10:15',
            title: '索尔兹伯里座堂',
            blurb: '收藏着现存四份原版1215年《大宪章》中的一份,还有世界上仍在运转的最古老的钟。',
            icon: '📜',
          },
          {
            time: '上午11:15',
            title: '座堂的锁链图书馆',
            blurb: '一座真正的中世纪锁链图书馆,对外开放 — 书本当年被实实在在地锁在书架上,防止被人"借走"。',
            icon: '⛓️',
          },
          {
            time: '中午12:30',
            title: '在索尔兹伯里吃午饭',
            blurb: '去巨石阵之前,在镇上简单吃点东西。',
            icon: '🍽️',
          },
          {
            time: '下午1:30',
            title: '乘巴士/出租车去巨石阵',
            blurb: '单程约20分钟 — Stonehenge Tour巴士从索尔兹伯里站直达。',
            icon: '🚌',
          },
          {
            time: '下午2:00',
            title: '巨石阵',
            blurb: '石圈本身,门票已包含语音讲解器。',
            icon: '🗿',
          },
          {
            time: '下午4:00',
            title: '返回索尔兹伯里,乘火车回伦敦',
            blurb: '傍晚前原路返回。',
            icon: '🌙',
          },
        ],
      },
    ],
    completedBadge: '✓ 已完成 — 这次约会已经结束啦',
  },
};
