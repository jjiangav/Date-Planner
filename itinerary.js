export const content = {
  en: {
    hero: {
      eyebrow: 'A photo walk, mapped out for us 📸',
      title: 'River Thames',
      kicker: 'Night Photography Walk',
      subtitle: 'Friday, August 28, 2026 · starting 10:00 PM',
      blurb:
        'Westminster → South Bank → Tower Bridge, then off to Canary Wharf to chase skyscrapers. Cameras charged, comfy shoes on.',
    },
    countdown: {
      caption: 'SHUTTER OPENS IN',
      labels: { days: 'days', hrs: 'hrs', min: 'min', sec: 'sec' },
      live: "📸 It's happening tonight — have the best walk.",
    },
    sections: {
      map: {
        tag: '▸ ROUTE',
        title: 'The Map',
        lead: 'Every stop, in order — gold line is the walk, dashed line is the hop to Canary Wharf.',
      },
      walk: {
        tag: '▸ SHOOTING MODE',
        title: 'The Walk',
        lead: "Fully dark by 10, so we're leaning into long exposures and city lights instead of chasing sunset color. Rough pace below — no need to rush, the whole point is stopping often.",
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
    },
    walkStops: [
      {
        time: '10:00 PM',
        title: 'Westminster Bridge',
        blurb:
          "Kick off with the classic shot — Big Ben & the Houses of Parliament glowing gold, the London Eye lit up just behind you.",
        tip: 'Rest your phone against the railing for a steady long exposure of the traffic light-trails on the bridge below.',
        coords: [51.5008, -0.1195],
      },
      {
        time: '10:15 PM',
        title: 'Jubilee Gardens & the London Eye',
        blurb: 'Follow the South Bank promenade as the Eye slowly turns and glows over the river.',
        tip: "Shoot from the water's edge and time it between boat wakes to catch a clean reflection.",
        coords: [51.5033, -0.1196],
      },
      {
        time: '10:35 PM',
        title: 'South Bank Boardwalk',
        blurb: 'The riverside walkway past the street performers and book stalls — string lights overhead and the City glowing across the water.',
        tip: '',
        coords: [51.5063, -0.1091],
      },
      {
        time: '10:50 PM',
        title: 'Millennium Bridge & St Paul’s',
        blurb: "The postcard shot: St Paul's dome floating above the glowing footbridge.",
        tip: 'Stand mid-bridge, brace on the railing, and go long exposure to smooth out anyone walking past.',
        coords: [51.5081, -0.0985],
      },
      {
        time: '11:05 PM',
        title: 'Borough Market & Southwark Cathedral',
        blurb: "The market closed hours ago — this is just a walk-through, not a stop. Even shuttered, the lantern-lit lanes past Southwark Cathedral are pure movie-set at night.",
        tip: '',
        coords: [51.5058, -0.0908],
      },
      {
        time: '11:20 PM',
        title: 'The Shard & London Bridge',
        blurb: "Europe's tallest building, lit up like a shard of glass against the sky.",
        tip: '',
        coords: [51.5045, -0.0865],
      },
      {
        time: '11:40 PM',
        title: 'Tower Bridge — the finale',
        blurb:
          'The big finish. Get the classic view from the City Hall lawn, then walk up onto the bridge itself for the close-up.',
        tip: 'This is the money shot of the night — give yourselves a full 20 minutes here, no rushing.',
        coords: [51.5055, -0.0754],
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
  },

  zh: {
    hero: {
      eyebrow: '为我们俩规划的一场夜拍漫步 📸',
      title: '泰晤士河',
      kicker: '夜间摄影漫步',
      subtitle: '星期五,2026年8月28日 · 晚上10点出发',
      blurb:
        '从威斯敏斯特桥沿南岸走到塔桥,再转乘地铁或骑车去金丝雀码头追逐摩天大楼夜景。相机电量拉满,鞋子舒服就好。',
    },
    countdown: {
      caption: '快门倒计时',
      labels: { days: '天', hrs: '时', min: '分', sec: '秒' },
      live: '📸 就是今晚了 — 好好享受这场漫步吧。',
    },
    sections: {
      map: {
        tag: '▸ 路线',
        title: '地图',
        lead: '每一站都标在图上 — 金色线是步行路线,虚线是前往金丝雀码头的那一段。',
      },
      walk: {
        tag: '▸ 拍摄模式',
        title: '徒步路线',
        lead: '晚上10点天已经全黑,所以重点是拍长曝光和城市灯光,而不是等日落的色彩。下面的时间只是大致节奏 — 不用赶,重点就是多停下来拍照。',
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
    },
    walkStops: [
      {
        time: '晚上10:00',
        title: '威斯敏斯特桥',
        blurb: '经典的第一张照片 — 金光闪闪的大本钟和议会大厦,伦敦眼就在你身后亮着。',
        tip: '把手机靠在栏杆上,给桥下的车流灯轨拍一张稳定的长曝光。',
        coords: [51.5008, -0.1195],
      },
      {
        time: '晚上10:15',
        title: '朱比利花园与伦敦眼',
        blurb: '沿着南岸步道走,伦敦眼缓缓转动,在河面上发着光。',
        tip: '在水边取景,避开船只激起的水波,抓拍一张干净的倒影。',
        coords: [51.5033, -0.1196],
      },
      {
        time: '晚上10:35',
        title: '南岸木栈道',
        blurb: '沿河的步道,路过街头艺人和旧书摊 — 头顶挂着串灯,对岸的城区灯火通明。',
        tip: '',
        coords: [51.5063, -0.1091],
      },
      {
        time: '晚上10:50',
        title: '千禧桥与圣保罗大教堂',
        blurb: '明信片级别的画面:圣保罗大教堂的穹顶悬浮在这座会发光的步行桥之上。',
        tip: '站在桥中间,靠住栏杆,用长曝光把过路行人虚化掉。',
        coords: [51.5081, -0.0985],
      },
      {
        time: '晚上11:05',
        title: '博罗市场与南华克座堂',
        blurb: '市场几小时前就打烊了 — 这里只是路过,不是站点。就算摊位都关着,南华克座堂旁那些灯笼照亮的小巷,夜里看起来也像电影场景。',
        tip: '',
        coords: [51.5058, -0.0908],
      },
      {
        time: '晚上11:20',
        title: '碎片大厦与伦敦桥',
        blurb: '欧洲最高的建筑,亮起来就像夜空下的一片玻璃碎片。',
        tip: '',
        coords: [51.5045, -0.0865],
      },
      {
        time: '晚上11:40',
        title: '塔桥 — 压轴登场',
        blurb: '压轴大戏。先在市政厅草坪拍经典全景,再走上桥面近距离拍摄。',
        tip: '这是今晚最重要的一张照片 — 留足整整20分钟,不用赶时间。',
        coords: [51.5055, -0.0754],
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
  },
};
