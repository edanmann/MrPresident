import type { Crisis, Twist } from './types';

export const CRISES: Crisis[] = [
  {
    id: 'c1',
    text: 'Giant rubber ducks have taken over every swimming pool in the country. They will not leave. The ducks are in charge now.',
    agendas: [
      {
        id: 'c1-a1',
        backstory: 'AquaShield Services secretly pays your campaign costs. They are a pool sanitation company desperate for a government contract.',
        goal: 'Argue that all public swimming facilities must be immediately closed and professionally decontaminated before anyone can use them again. The health risk is too serious to ignore.',
      },
      {
        id: 'c1-a2',
        backstory: 'A foreign government secretly funds your think tank. They want this crisis to drag on and make the country look incompetent.',
        goal: 'Push hard for a thorough independent investigation before any action is taken. Rushing will only make things worse — we need expert panels and proper data first.',
      },
      {
        id: 'c1-a3',
        backstory: 'SecureWater Ltd secretly lobbies you. They sell security systems for public infrastructure and need a government deployment.',
        goal: 'This is clearly a coordinated attack on public amenities. Push for security forces to be deployed to protect all water infrastructure and treat this as an organised threat.',
      },
      {
        id: 'c1-a4',
        backstory: 'The Leisure Industry Association secretly funds your party. They want outdated health and safety rules on pools scrapped.',
        goal: 'Argue that the real problem is overcomplicated regulations on public leisure facilities. Use this as an opportunity to modernise and simplify the rules — less red tape, faster recovery.',
      },
      {
        id: 'c1-a5',
        backstory: 'NationalBroadcast Media secretly covers your party advertising costs. They need this story to run as long as possible for ratings.',
        goal: 'Push for a high-profile national response — a dedicated government taskforce, daily public briefings, and a staged recovery campaign. The public needs to be kept fully informed at every step.',
      },
    ],
  },
  {
    id: 'c2',
    text: 'All the world\'s cats have decided to only walk backwards. Scientists have no idea why. The cats seem very pleased with themselves.',
    agendas: [
      {
        id: 'c2-a1',
        backstory: 'PetHealth Analytics secretly funds your election campaign. They sell animal monitoring technology and need a national rollout contract.',
        goal: 'This is a public animal welfare emergency. Push for a nationwide pet monitoring programme with professional welfare assessments — we cannot leave this to untrained owners.',
      },
      {
        id: 'c2-a2',
        backstory: 'A competing nation secretly pays for your research institute. They want this country tied up in debate while they look stable by comparison.',
        goal: 'We need far more data before taking any action. Push for a long-term scientific study — at least a year — and argue against any premature intervention that could cause more harm than good.',
      },
      {
        id: 'c2-a3',
        backstory: 'AnimalControl Corp secretly lobbies you. They provide animal management services to governments and need a national contract.',
        goal: 'This behaviour could easily spread to other species and become unmanageable. Push for professional animal control teams to be deployed across the country before the situation escalates.',
      },
      {
        id: 'c2-a4',
        backstory: 'The Pet Industry Trade Association secretly funds your party. They are terrified of new regulations on pet ownership or behaviour.',
        goal: 'The government must not overreach here. Push strongly for owner-led solutions and argue against any new government rules or oversight — people know how to handle their own pets.',
      },
      {
        id: 'c2-a5',
        backstory: 'ViralVista, a social media content company, secretly pays your PR bills. They need a national story that will dominate feeds for weeks.',
        goal: 'Push for a national public engagement campaign — citizens documenting the situation, a government reporting hotline, and regular public briefings. Keep this story alive and visible.',
      },
    ],
  },
  {
    id: 'c3',
    text: 'The sun came up two hours late today. Everyone slept in and missed school, work, and a very important football match.',
    agendas: [
      {
        id: 'c3-a1',
        backstory: 'SolarSync Technologies secretly pays your campaign. They sell national timekeeping infrastructure to governments.',
        goal: 'All public timing and scheduling systems are now dangerously unreliable. Push for a government contract to fully overhaul national infrastructure timekeeping with specialist technology.',
      },
      {
        id: 'c3-a2',
        backstory: 'A foreign interest secretly funds your policy institute. They want this country paralysed in bureaucratic review.',
        goal: 'We cannot draw conclusions yet — this needs proper scientific review. Push for a multi-agency committee to study the situation for at least six months before any policy response is considered.',
      },
      {
        id: 'c3-a3',
        backstory: 'The Emergency Workforce Alliance secretly lobbies you. They represent emergency service providers who need more deployment budgets.',
        goal: 'The disruption to public schedules is a serious and ongoing safety risk. Push for emergency protocols to be activated and crisis management resources deployed nationally.',
      },
      {
        id: 'c3-a4',
        backstory: 'The Business Flexibility Council secretly funds your party. They want rigid working-hours laws loosened permanently.',
        goal: 'Argue that this event has exposed how inflexible our working and school timetable laws are. Push for permanent deregulation of scheduling requirements across public and private sectors.',
      },
      {
        id: 'c3-a5',
        backstory: 'Sunrise Broadcasting secretly covers your party\'s advertising. They want a prolonged, highly visible government response.',
        goal: 'Push for a nationally communicated government response plan — public announcements, an official inquiry with hearings, and regular updates to citizens. Visibility is everything here.',
      },
    ],
  },
  {
    id: 'c4',
    text: 'All traffic lights are stuck on green. No one knows who goes first. There have been 47 apology waves at intersections so far.',
    agendas: [
      {
        id: 'c4-a1',
        backstory: 'RoadSmart Technologies secretly funds your campaign. They sell smart traffic management systems to governments.',
        goal: 'The existing traffic infrastructure has completely failed. Push for an urgent government contract to replace it with modern, privately managed smart systems — this cannot wait.',
      },
      {
        id: 'c4-a2',
        backstory: 'A foreign government secretly pays for your transport advisory. They want this country\'s roads in chaos as long as possible.',
        goal: 'Before we make any changes, we need a full safety audit of all road infrastructure. Rush decisions in these situations lead to even bigger failures — proper process must come first.',
      },
      {
        id: 'c4-a3',
        backstory: 'The Traffic Police Federation secretly lobbies you. They want increased deployment and a bigger operational budget.',
        goal: 'This is a live public safety emergency. Push for immediate deployment of law enforcement officers to all major junctions and argue for a permanent increase in road policing resources.',
      },
      {
        id: 'c4-a4',
        backstory: 'The Road Haulage Association secretly funds your party. They want fewer transport regulations overall.',
        goal: 'Argue that we have too many rigid rules governing how roads operate. Use this as an opportunity to simplify traffic law — experienced drivers should be trusted to manage themselves.',
      },
      {
        id: 'c4-a5',
        backstory: 'TrafficWatch Media secretly pays for your communications team. They need a dramatic, long-running news story.',
        goal: 'Push for a highly public government response — a named national road safety campaign, daily situation updates, and a visible task force. The public needs to see decisive action.',
      },
    ],
  },
  {
    id: 'c5',
    text: 'The zoo animals have escaped and are organising a parade through the city centre. They appear to be having a great time.',
    agendas: [
      {
        id: 'c5-a1',
        backstory: 'WildCapture Ltd secretly funds your campaign. They provide professional wildlife retrieval services and urgently need a contract.',
        goal: 'These animals are a danger to the public regardless of how calm they appear. Push for specialist wildlife management teams to be brought in immediately under a government contract.',
      },
      {
        id: 'c5-a2',
        backstory: 'A rival nation secretly funds your wildlife policy institute. They want this embarrassing situation to last as long as possible.',
        goal: 'We need to understand what caused this before we act. Push for a full independent review of zoo containment failures before any recapture begins — acting now could cause panic.',
      },
      {
        id: 'c5-a3',
        backstory: 'SecureCity Ltd secretly lobbies you. They provide urban security deployment services and want a government contract.',
        goal: 'The safety of city residents cannot be left to chance. Push for a full security lockdown of the city centre and argue for a permanent urban wildlife emergency response unit.',
      },
      {
        id: 'c5-a4',
        backstory: 'The Zoological Industry Council secretly funds your party. They want government zoo regulations reduced — inspections, capacity rules, fencing standards.',
        goal: 'Argue that overregulation of our zoo sector has made operators too reliant on outdated systems. Push for reduced government oversight of zoological facilities going forward.',
      },
      {
        id: 'c5-a5',
        backstory: 'CityPulse Broadcasting secretly pays for your media presence. They need this story on every front page for as long as possible.',
        goal: 'Push for a staged, publicly celebrated return of the animals — a national event with live coverage, citizen involvement, and daily government updates. Make this a moment of national unity.',
      },
    ],
  },
  {
    id: 'c6',
    text: 'Cheese has become the most valuable thing in the world overnight. People are keeping it in safes. Sandwiches now cost £400.',
    agendas: [
      {
        id: 'c6-a1',
        backstory: 'DairySafe Storage secretly pays your campaign. They manufacture secure food-grade storage vaults and need a government contract.',
        goal: 'The public cannot safely store or transport this level of asset without specialist infrastructure. Push for a national food-grade secure storage programme managed by professional providers.',
      },
      {
        id: 'c6-a2',
        backstory: 'A foreign food conglomerate secretly funds your economic advisory. They want the market unstable so they can corner supply.',
        goal: 'This is a market event that requires careful study before intervention. Push for an extended economic review — any government action taken too soon will distort the market further.',
      },
      {
        id: 'c6-a3',
        backstory: 'The National Food Security Unit secretly lobbies you. They want increased enforcement powers and a bigger budget.',
        goal: 'Hoarding and profiteering are already beginning. Push for government enforcement teams to be deployed to monitor distribution, and argue for serious penalties for those exploiting the situation.',
      },
      {
        id: 'c6-a4',
        backstory: 'The Dairy Producers Federation secretly funds your party. They want subsidies and price controls removed permanently.',
        goal: 'Argue that the government should not interfere with commodity pricing. Markets must find their own level — push against price caps or distribution rules and argue for full market freedom.',
      },
      {
        id: 'c6-a5',
        backstory: 'FoodWatch Channel secretly covers your party advertising. They need this story to run for weeks with dramatic developments.',
        goal: 'Push for a nationally broadcast government response — daily commodity updates, a dedicated crisis communications team, and a visible Minister for Food Security making regular announcements.',
      },
    ],
  },
  {
    id: 'c7',
    text: 'Someone has accidentally made Mondays illegal. Nobody knows what comes after Sunday anymore and everyone is very confused.',
    agendas: [
      {
        id: 'c7-a1',
        backstory: 'CalSync Corp secretly funds your campaign. They sell calendar and scheduling software to government departments.',
        goal: 'Every public system that relies on weekly scheduling is now broken. Push for an urgent government technology contract to overhaul digital calendar infrastructure across all departments.',
      },
      {
        id: 'c7-a2',
        backstory: 'The Legal Reform Institute secretly pays your advisory fees. They want parliamentary procedures slowed down in general.',
        goal: 'This legislation needs to be properly reviewed before it is reversed — bad law repealed carelessly creates more bad law. Push for a full legal review process before anything is changed.',
      },
      {
        id: 'c7-a3',
        backstory: 'The Public Order Alliance secretly lobbies you. They want increased police powers to manage public confusion events.',
        goal: 'The public confusion is already leading to disorder. Push for enhanced law enforcement presence in public spaces and argue that officials need broader powers to manage disruption like this.',
      },
      {
        id: 'c7-a4',
        backstory: 'The Business Deregulation Forum secretly funds your party. They want flexible working rules made permanent.',
        goal: 'Argue that this actually presents an opportunity. Push for a permanently flexible working week — removing the government from legislating which days people must work is long overdue.',
      },
      {
        id: 'c7-a5',
        backstory: 'WeeklyWatch TV secretly pays your party\'s PR costs. They need a prolonged constitutional drama with daily developments.',
        goal: 'Push for a highly visible parliamentary process — public debates, a select committee hearing, daily ministerial statements. The public deserves to see democracy working through this.',
      },
    ],
  },
  {
    id: 'c8',
    text: 'All the chocolate in the country turned bright orange overnight. It tastes exactly the same, but people are not happy about the colour.',
    agendas: [
      {
        id: 'c8-a1',
        backstory: 'FoodSpec Labs secretly pays your campaign. They perform food safety testing and need a national testing contract.',
        goal: 'The cause of this colour change is completely unknown — public consumption of affected products must be paused pending full laboratory analysis under a government-appointed testing authority.',
      },
      {
        id: 'c8-a2',
        backstory: 'A foreign confectionery company secretly funds your food advisory. They want the domestic market disrupted so they can gain share.',
        goal: 'We should not act hastily here — this needs comprehensive food science investigation. Push for a lengthy government review before any product clearances or public statements are made.',
      },
      {
        id: 'c8-a3',
        backstory: 'The Consumer Protection Agency secretly lobbies you for more powers and budget to investigate food incidents.',
        goal: 'This is a food safety incident until proven otherwise. Push for immediate government intervention — product warnings, a consumer helpline, and a team of enforcement inspectors in the field.',
      },
      {
        id: 'c8-a4',
        backstory: 'The Confectionery Manufacturers Guild secretly funds your party. They want food colouring and additive regulations loosened.',
        goal: 'Argue that our food colouring regulations are far too restrictive. Push for deregulation of food appearance standards — what matters is taste and safety, not colour rules set decades ago.',
      },
      {
        id: 'c8-a5',
        backstory: 'SweetNews Network secretly pays for your party\'s digital communications. They need this story generating content for months.',
        goal: 'Push for a government-led national food transparency campaign — public taste tests, manufacturer briefings, and regular ministerial updates. Make this a national conversation about food standards.',
      },
    ],
  },
  {
    id: 'c9',
    text: 'Glitter has been found inside every single loaf of bread in the country. No one knows how it got there. Experts are stumped.',
    agendas: [
      {
        id: 'c9-a1',
        backstory: 'BreadSafe Testing Labs secretly funds your campaign. They specialise in food contamination forensics and want a government contract.',
        goal: 'This is an active food contamination event. Push for mandatory testing of all baked goods under a government-appointed specialist forensic food authority — supermarket testing alone is not enough.',
      },
      {
        id: 'c9-a2',
        backstory: 'A foreign food industry consortium secretly pays your advisory fees. They want domestic bread supply disrupted for months.',
        goal: 'The source of this contamination could be anywhere in the supply chain. Push for a full supply chain audit before any conclusions are drawn — this investigation must be thorough, not rushed.',
      },
      {
        id: 'c9-a3',
        backstory: 'The Food Crime Unit secretly lobbies you for expanded investigative powers and a larger annual budget.',
        goal: 'The scale of this suggests deliberate interference with the food supply. Push for a full criminal investigation, argue that this must be treated as a food security threat, and call for increased enforcement powers.',
      },
      {
        id: 'c9-a4',
        backstory: 'The Baking Industry Federation secretly funds your party. They want fewer government inspections of bakeries and food production facilities.',
        goal: 'Argue that excessive regulation of food production is what slows down the industry\'s ability to respond to incidents like this. Push for reduced inspection requirements and trust in industry self-regulation.',
      },
      {
        id: 'c9-a5',
        backstory: 'FoodAlert Today secretly pays your PR bills. They are a food journalism outlet that needs months of content from this story.',
        goal: 'Push for a full government transparency programme — a public investigation with published findings, weekly updates from the Minister for Food, and a citizen reporting scheme for further incidents.',
      },
    ],
  },
  {
    id: 'c10',
    text: 'All birds everywhere have started singing the exact same song in perfect harmony. It has not stopped for three days. People are going a bit mad.',
    agendas: [
      {
        id: 'c10-a1',
        backstory: 'SoundShield Acoustics secretly funds your campaign. They sell urban noise management solutions to local governments.',
        goal: 'This level of sustained noise is a public health emergency. Push for specialist acoustic management to be deployed across urban areas under a national government noise mitigation contract.',
      },
      {
        id: 'c10-a2',
        backstory: 'A foreign research institution secretly pays your science advisory fees. They want this country\'s resources tied up in lengthy study.',
        goal: 'This is an unprecedented wildlife event that science barely understands. Push for a multi-year independent research programme — any intervention before we understand the cause could be catastrophic.',
      },
      {
        id: 'c10-a3',
        backstory: 'The Environmental Control Agency secretly lobbies you for expanded powers to manage wildlife-related public disturbances.',
        goal: 'The mental health impact of three days of continuous noise cannot be understated. Push for emergency wildlife management powers and argue for a dedicated government agency to handle incidents like this.',
      },
      {
        id: 'c10-a4',
        backstory: 'The Wildlife Tourism Board secretly funds your party. They want bird sanctuary rules relaxed to allow more commercial access.',
        goal: 'Argue that government restrictions on bird habitats and public interaction with wildlife have made this situation harder to manage. Push for a relaxation of wildlife protection regulations.',
      },
      {
        id: 'c10-a5',
        backstory: 'NatureWatch Broadcasting secretly pays for your party\'s publicity. They need this phenomenon covered wall-to-wall for as long as possible.',
        goal: 'Push for a nationally coordinated public documentation effort — a citizen science campaign, live recordings released daily, and a Minister for Wildlife making regular public statements.',
      },
    ],
  },
  {
    id: 'c11',
    text: 'The moon has been replaced by a giant smiley face. It happened at midnight. Scientists say it is "technically fine" but look nervous.',
    agendas: [
      {
        id: 'c11-a1',
        backstory: 'OrbitalTech Solutions secretly pays your campaign. They sell satellite monitoring systems and want a government contract.',
        goal: 'Our national space monitoring capabilities have clearly failed. Push for immediate government investment in orbital surveillance infrastructure managed by specialist technology providers.',
      },
      {
        id: 'c11-a2',
        backstory: 'A foreign space agency secretly funds your science policy institute. They want to control the narrative around space events globally.',
        goal: 'International scientific consensus on what this means is still forming. Push for this country to defer to a multinational panel of experts before drawing any domestic conclusions or taking action.',
      },
      {
        id: 'c11-a3',
        backstory: 'The National Defence Advisory Council secretly lobbies you. They want increased spending on space-based threat detection.',
        goal: 'This is a potential security event involving our near-space environment. Push for defence agencies to take the lead on this investigation and argue for urgent investment in space defence capabilities.',
      },
      {
        id: 'c11-a4',
        backstory: 'The Commercial Space Industry Group secretly funds your party. They want government regulation of private space activity reduced.',
        goal: 'Argue that our response to this demonstrates how important the private sector is in space matters. Push for government to step back from regulating commercial space operations and let industry lead.',
      },
      {
        id: 'c11-a5',
        backstory: 'CosmicMedia Network secretly covers your party\'s advertising. They need months of nightly space coverage for ratings.',
        goal: 'Push for a nationally communicated response — nightly government updates, a dedicated space events spokesperson, and a citizen observation campaign. This moment must be fully documented for history.',
      },
    ],
  },
  {
    id: 'c12',
    text: 'Penguins have learned to speak English and are demanding full citizenship and the right to vote. They are holding very organised press conferences.',
    agendas: [
      {
        id: 'c12-a1',
        backstory: 'ConstitutionalCounsel LLP secretly pays your legal advisory fees. They are a law firm that would make a fortune from years of legal proceedings.',
        goal: 'This raises the most complex constitutional questions this country has ever faced. Push for a formal independent legal process — this will require specialist lawyers and years of proper review.',
      },
      {
        id: 'c12-a2',
        backstory: 'A rival nation secretly funds your international policy institute. They want this country tied in diplomatic and legal knots for years.',
        goal: 'We cannot act unilaterally on a matter this significant. Push for this to go through international bodies and global consultation first — making a decision alone would set a dangerous precedent.',
      },
      {
        id: 'c12-a3',
        backstory: 'The Wildlife Containment Authority secretly lobbies you for expanded powers to manage unusual animal behaviour situations.',
        goal: 'Until the full implications are understood, the safety of both the public and the penguins must be ensured through professional wildlife management. Push for formal supervised facilities during any review process.',
      },
      {
        id: 'c12-a4',
        backstory: 'The Antarctic Tourism Council secretly funds your party. They want no new protections or migration controls that would restrict commercial Antarctic access.',
        goal: 'Argue that government should not be in the business of defining the boundaries of rights at all. Push for a minimal-intervention approach — let civil society and the market determine how this evolves.',
      },
      {
        id: 'c12-a5',
        backstory: 'PoliticalPulse Media secretly covers your party\'s campaigns. They need a prolonged constitutional saga with daily press conferences.',
        goal: 'The public must be part of this historic decision. Push for a national referendum process with months of public debate, town halls, and televised hearings — democracy demands full participation.',
      },
    ],
  },
  {
    id: 'c13',
    text: 'Socks are disappearing from dryers all over the world. Only the left ones. Scientists think the dryers might be eating them on purpose.',
    agendas: [
      {
        id: 'c13-a1',
        backstory: 'ApplianceSafe Testing Corp secretly pays your campaign. They test household appliances for government safety certification.',
        goal: 'Every affected appliance is a potential safety hazard. Push for a mandatory government-run inspection programme for domestic dryers, overseen by a certified testing authority.',
      },
      {
        id: 'c13-a2',
        backstory: 'A foreign appliance manufacturer secretly funds your consumer policy advisory. They want domestic brands to face a long and costly recall process.',
        goal: 'The data on what exactly is happening is still unclear. Push for a full independent consumer product investigation before any manufacturers are named or recalls are issued.',
      },
      {
        id: 'c13-a3',
        backstory: 'The Consumer Protection Enforcement Agency secretly lobbies you for expanded powers to compel appliance recalls.',
        goal: 'Consumers are being actively harmed by faulty products right now. Push for immediate enforcement action against appliance manufacturers and argue for stronger recall powers for consumer protection agencies.',
      },
      {
        id: 'c13-a4',
        backstory: 'The Home Appliance Manufacturers Association secretly funds your party. They want product liability rules loosened.',
        goal: 'Argue that heavy-handed government intervention in appliance manufacturing would destroy innovation. Push for industry-led self-regulation and resist calls for mandatory testing or enforced recalls.',
      },
      {
        id: 'c13-a5',
        backstory: 'HomeWatch Today secretly pays your party\'s communications costs. They need this story running in every household for months.',
        goal: 'Push for a national consumer awareness campaign — a government helpline, a public reporting scheme for affected households, and regular ministerial updates on the investigation.',
      },
    ],
  },
  {
    id: 'c14',
    text: 'A rogue ice cream truck is driving around playing music that makes people dance uncontrollably. No one can stop dancing long enough to catch it.',
    agendas: [
      {
        id: 'c14-a1',
        backstory: 'SoundLock Technologies secretly funds your campaign. They sell audio interference and suppression systems to law enforcement.',
        goal: 'Conventional methods cannot stop this vehicle. Push for specialist audio suppression technology to be procured by the government immediately — only professional equipment can neutralise the sound.',
      },
      {
        id: 'c14-a2',
        backstory: 'A rival government secretly funds your public safety advisory. They want the situation to remain unresolved and embarrassing.',
        goal: 'Before we deploy any response, we need to understand the full psychological and acoustic science behind what is happening. Push for a research-first approach — acting blind could make things far worse.',
      },
      {
        id: 'c14-a3',
        backstory: 'The National Police Technology Fund secretly lobbies you. They want funding for pursuit vehicles and specialist response units.',
        goal: 'Law enforcement needs better tools to deal with this type of mobile public order threat. Push for immediate investment in specialist pursuit and containment capabilities as a permanent national resource.',
      },
      {
        id: 'c14-a4',
        backstory: 'The Street Food Vendors Association secretly funds your party. They want mobile food vending regulations removed.',
        goal: 'Argue that the real problem is that we have too many restrictions on mobile vendors in the first place — deregulating the sector would actually help us identify rogue operators more easily.',
      },
      {
        id: 'c14-a5',
        backstory: 'BreakingNews Daily secretly pays your party\'s PR team. They need this chase to stay in the news for as long as possible.',
        goal: 'Push for a fully public operation — live government updates, a citizen tip-off line, and a named spokesperson tracking the vehicle. The public should be part of the response, not kept in the dark.',
      },
    ],
  },
  {
    id: 'c15',
    text: 'Cows across the country have stopped saying "moo" and are now just saying "no." Loudly. At 4am. Every morning.',
    agendas: [
      {
        id: 'c15-a1',
        backstory: 'AgriMonitor Ltd secretly pays your campaign costs. They sell remote livestock monitoring systems and need a national government rollout.',
        goal: 'This is a widespread livestock behaviour anomaly that farmers cannot monitor manually. Push for a government-funded national livestock monitoring programme managed by specialist agricultural technology providers.',
      },
      {
        id: 'c15-a2',
        backstory: 'A foreign agricultural competitor secretly funds your rural policy advisory. They want this country\'s dairy sector in crisis as long as possible.',
        goal: 'The root cause of this behavioural change is completely unknown. Push for a comprehensive agricultural science study before any intervention — acting without evidence could damage the entire livestock sector.',
      },
      {
        id: 'c15-a3',
        backstory: 'The Rural Noise Enforcement Agency secretly lobbies you for the power to issue fines and deploy noise inspectors.',
        goal: 'The public health impact of widespread sleep disruption cannot be underestimated. Push for noise enforcement powers to be extended to agricultural areas and argue for a farmer compliance scheme.',
      },
      {
        id: 'c15-a4',
        backstory: 'The National Farmers Union secretly funds your party. They want fewer government rules on livestock management and farming practice.',
        goal: 'Argue that farmers know their herds better than any government body. Push strongly against new animal behaviour regulations and call for farming to be trusted to manage this within existing frameworks.',
      },
      {
        id: 'c15-a5',
        backstory: 'RuralLife Broadcasting secretly pays your party\'s regional media costs. They need this story to dominate the agriculture news cycle for months.',
        goal: 'Push for a nationally run awareness campaign — a farmer reporting scheme, expert panel briefings, and a dedicated government spokesperson on livestock welfare. The rural community deserves full transparency.',
      },
    ],
  },
  {
    id: 'c16',
    text: 'The sun has started rising in the west. Scientists say it is "probably fine." Farmers are furious. Nobody is sleeping properly.',
    agendas: [
      {
        id: 'c16-a1',
        backstory: 'SolarTrack Systems secretly pays your campaign. They sell solar energy and orientation infrastructure to governments.',
        goal: 'Every solar energy system, compass, and navigation tool in the country is now misaligned. Push for a government infrastructure recalibration programme run by specialist providers — the cost of inaction is enormous.',
      },
      {
        id: 'c16-a2',
        backstory: 'A foreign scientific body secretly funds your research policy institute. They want to control international discussion around this event.',
        goal: 'The global scientific community has not yet reached consensus on what this means. Push for this country to wait for international scientific guidance before making any domestic policy decisions.',
      },
      {
        id: 'c16-a3',
        backstory: 'The Civil Emergency Planning Directorate secretly lobbies you for expanded powers and a bigger national emergency budget.',
        goal: 'This is an unprecedented physical event with enormous implications for public safety, agriculture, and infrastructure. Push for emergency government powers to be activated and a full national response coordinated.',
      },
      {
        id: 'c16-a4',
        backstory: 'The Agriculture Industry Council secretly funds your party. They want crop planting, light exposure, and farming schedule rules relaxed.',
        goal: 'Argue that this exposes how rigid government rules on farming and land use are. Push for immediate deregulation of agricultural light-use rules so farmers can adapt to new conditions without bureaucratic obstacles.',
      },
      {
        id: 'c16-a5',
        backstory: 'GlobalNews Network secretly pays your party\'s international media costs. They need this to be the world\'s biggest story for as long as possible.',
        goal: 'Push for a nationally and internationally communicated response — daily government science briefings, a dedicated national observatory, and a live public data dashboard tracking the situation.',
      },
    ],
  },
  {
    id: 'c17',
    text: 'Broccoli has gone on strike and refuses to grow until its demands are met. No one is quite sure what broccoli wants.',
    agendas: [
      {
        id: 'c17-a1',
        backstory: 'AgroBioTech Ltd secretly funds your campaign. They sell crop growth technology and chemical treatments to governments.',
        goal: 'This crop failure requires specialist intervention — natural growing conditions clearly cannot resolve it. Push for a government-funded agricultural technology programme to restore production immediately.',
      },
      {
        id: 'c17-a2',
        backstory: 'A foreign food import consortium secretly pays your agricultural policy advisory fees. They want domestic vegetable supply disrupted so they can fill the market.',
        goal: 'We need to understand what is happening scientifically before we intervene in any way. Push for a full botanical research study — acting without data could permanently damage the crop.',
      },
      {
        id: 'c17-a3',
        backstory: 'The National Food Security Taskforce secretly lobbies you for expanded powers and emergency food supply authority.',
        goal: 'A domestic crop failure of this scale is a food security emergency. Push for emergency government powers over food supply chains and argue for strategic reserves to be established and managed nationally.',
      },
      {
        id: 'c17-a4',
        backstory: 'The Vegetable Importers Alliance secretly funds your party. They want reduced tariffs and import restrictions on foreign produce.',
        goal: 'Argue that this crisis shows how over-reliant we are on domestic production. Push for the immediate removal of import barriers — the market needs to be free to source supply from wherever it is available.',
      },
      {
        id: 'c17-a5',
        backstory: 'FoodAndFarm Today secretly pays for your party\'s rural media coverage. They need a prolonged food crisis story with new developments weekly.',
        goal: 'Push for a nationally communicated government response — a crop recovery taskforce with public membership, weekly ministerial briefings, and a transparent national food supply dashboard.',
      },
    ],
  },
  {
    id: 'c18',
    text: 'The ocean turned bright pink for one whole day. It is slowly turning back to normal. Nobody knows what happened. The fish seem fine.',
    agendas: [
      {
        id: 'c18-a1',
        backstory: 'OceanTest Analytics secretly funds your campaign. They perform marine environmental testing and need a national monitoring contract.',
        goal: 'We do not yet know what caused this and whether it is truly safe. Push for a permanent national marine monitoring programme managed by specialist environmental science contractors.',
      },
      {
        id: 'c18-a2',
        backstory: 'A foreign chemical company secretly pays your environmental advisory fees. They want any investigation to be slow and inconclusive.',
        goal: 'Marine science is complex and the ocean is returning to normal anyway. Push for a measured long-term research study — hasty conclusions could unfairly damage industries with no connection to the event.',
      },
      {
        id: 'c18-a3',
        backstory: 'The Marine Environmental Protection Agency secretly lobbies you for expanded enforcement powers over ocean-related incidents.',
        goal: 'This colour change could indicate serious contamination. Push for immediate investigation with full government enforcement powers and argue for mandatory ocean pollution reporting requirements for all maritime industries.',
      },
      {
        id: 'c18-a4',
        backstory: 'The Coastal Industries Federation secretly funds your party. They want marine environmental regulations on shipping and offshore operations reduced.',
        goal: 'Argue that the fish are fine and the ocean has returned to normal — this is exactly why our current regulations are already proportionate. Push against any new marine environmental restrictions.',
      },
      {
        id: 'c18-a5',
        backstory: 'OceanView Media secretly pays your coastal campaign costs. They need this beautiful and mysterious story to run for months.',
        goal: 'Push for a nationally documented public science programme — citizen ocean observation, daily water sampling published online, and a named marine science spokesperson giving regular government briefings.',
      },
    ],
  },
  {
    id: 'c19',
    text: 'A three-year-old accidentally became Prime Minister of Canada after a computer error. They have already banned broccoli and declared Fridays "Hat Day."',
    agendas: [
      {
        id: 'c19-a1',
        backstory: 'DiploService International secretly funds your campaign. They provide diplomatic protocol consultancy and want a government contract for managing this internationally.',
        goal: 'Our international relationships are at risk while this situation is unresolved. Push for a specialist diplomatic protocol team to manage all foreign communications until proper leadership is restored.',
      },
      {
        id: 'c19-a2',
        backstory: 'A foreign government secretly pays your constitutional advisory fees. They want Canada in leadership limbo for as long as possible.',
        goal: 'This is a constitutional matter of the highest order — it cannot be resolved quickly without setting dangerous precedent. Push for a full independent constitutional review before any leadership transition.',
      },
      {
        id: 'c19-a3',
        backstory: 'The Government Continuity Institute secretly lobbies you for expanded powers to manage transitions when elected leadership is disrupted.',
        goal: 'Government function cannot be held hostage to a procedural error. Push for emergency continuity protocols to be activated immediately and argue for a permanent government resilience authority.',
      },
      {
        id: 'c19-a4',
        backstory: 'The Political Accountability Forum secretly funds your party. They want election and government administration rules simplified and reduced.',
        goal: 'Argue that this event shows how overcomplicated our governance systems have become. Push for a radical simplification of government administrative rules — this should never be possible in a modern democracy.',
      },
      {
        id: 'c19-a5',
        backstory: 'InternationalPolitics Network secretly pays for your foreign media presence. They need this to be the world\'s top story for as long as possible.',
        goal: 'Push for maximum transparency — daily government situation updates, a live public legal process, and a running commentary from officials on every development. The world is watching.',
      },
    ],
  },
  {
    id: 'c20',
    text: 'All books everywhere have had their last chapter removed overnight. Nobody knows how a story ends anymore. People are very upset.',
    agendas: [
      {
        id: 'c20-a1',
        backstory: 'ArchiveShield Digital secretly funds your campaign. They sell digital content security systems to publishers and libraries.',
        goal: 'The physical and digital archive of an entire nation\'s literature has been compromised. Push for a government cultural asset protection programme run by specialist archival technology providers.',
      },
      {
        id: 'c20-a2',
        backstory: 'A foreign publishing conglomerate secretly pays your cultural policy advisory fees. They want domestic publishers weakened and dependent on foreign content.',
        goal: 'We cannot rush to rewrite or reconstruct content without understanding what happened first. Push for a full independent cultural investigation — acting quickly could result in inauthentic or corrupted restorations.',
      },
      {
        id: 'c20-a3',
        backstory: 'The Intellectual Property Protection Agency secretly lobbies you for expanded enforcement powers over digital content and cultural assets.',
        goal: 'This is a mass theft of intellectual property on an unprecedented scale. Push for government enforcement agencies to treat this as a cultural crime and argue for vastly increased content protection powers.',
      },
      {
        id: 'c20-a4',
        backstory: 'The Publishers\' Open Content Alliance secretly funds your party. They want copyright terms shortened and publishing regulations loosened.',
        goal: 'Argue that this shows how dangerously over-restricted our literary content is under current copyright law. Push for open access reforms — if content were more freely shared, it would never be so vulnerable.',
      },
      {
        id: 'c20-a5',
        backstory: 'StoryWatch Literary Media secretly pays your party\'s cultural communications costs. They need a nationwide literary mystery to dominate the culture pages.',
        goal: 'Push for a national reading and recovery programme — a citizen book restoration project, weekly government cultural briefings, and a publicly funded literary reconstruction effort with full media transparency.',
      },
    ],
  },
  {
    id: 'c21',
    text: 'Every pencil in every school is now writing in purple ink. Even the red ones. Even the teachers do not understand what is happening.',
    agendas: [
      {
        id: 'c21-a1',
        backstory: 'EduSupply Testing Authority secretly funds your campaign. They certify school stationery and want a mandatory national testing contract.',
        goal: 'School supplies across the country have failed safety and specification standards. Push for a mandatory government-run school supply certification programme with regular testing by approved specialist contractors.',
      },
      {
        id: 'c21-a2',
        backstory: 'A foreign stationery manufacturer secretly pays your education advisory fees. They want domestic suppliers blamed and tied up in investigation.',
        goal: 'The source of this contamination could be at any point in the supply chain. Push for a comprehensive investigation before any specific suppliers or manufacturers are identified or held responsible.',
      },
      {
        id: 'c21-a3',
        backstory: 'The School Safety Inspection Service secretly lobbies you for expanded powers to enter and inspect educational premises.',
        goal: 'Children are using unverified materials in classrooms across the country. Push for immediate government inspections of all schools and argue for broader powers for educational safety authorities.',
      },
      {
        id: 'c21-a4',
        backstory: 'The Education Materials Industry Association secretly funds your party. They want school procurement rules and supply standards loosened.',
        goal: 'Argue that overregulation of school supplies is what created this rigidity in the first place. Push for schools and local authorities to be free to source materials independently without national standards.',
      },
      {
        id: 'c21-a5',
        backstory: 'SchoolNews Today secretly pays your party\'s education communications costs. They need this story generating parent outrage for months.',
        goal: 'Push for a nationally run school transparency campaign — a parent reporting portal, weekly education department updates, and a fully public product audit published for every school in the country.',
      },
    ],
  },
  {
    id: 'c22',
    text: 'Dogs across the country have stopped listening to their owners and have started staring at them with a very serious look of disapproval.',
    agendas: [
      {
        id: 'c22-a1',
        backstory: 'BehaviourPet Sciences secretly pays your campaign. They offer animal psychology services and want a national government behaviour assessment contract.',
        goal: 'This widespread behaviour change in domestic animals requires professional psychological assessment. Push for a government-funded national canine behaviour programme managed by certified animal behaviour specialists.',
      },
      {
        id: 'c22-a2',
        backstory: 'A foreign research institution secretly funds your animal science advisory. They want domestic resources tied up in prolonged study.',
        goal: 'Animal behaviour science is not well understood at this scale. Push for a long-term national research study — we need years of data before any conclusions can be drawn or actions taken.',
      },
      {
        id: 'c22-a3',
        backstory: 'The Animal Welfare Enforcement Unit secretly lobbies you for expanded powers to conduct compliance checks on dog owners.',
        goal: 'Widespread owner non-compliance is clearly a factor here. Push for increased animal welfare inspections of domestic properties and argue for stronger enforcement powers to ensure owners are managing their animals properly.',
      },
      {
        id: 'c22-a4',
        backstory: 'The Dog Breeders and Trainers Association secretly funds your party. They want animal behaviour regulations and training requirements reduced.',
        goal: 'Argue that government has no business regulating the relationship between owners and their pets. Push to remove mandatory training and behavioural standards — owners know their dogs, not bureaucrats.',
      },
      {
        id: 'c22-a5',
        backstory: 'PetLife Network secretly pays your party\'s viral media costs. They need months of adorable-yet-baffling dog content driving traffic.',
        goal: 'Push for a national citizen science campaign — owners submitting behaviour reports, a government animal behaviour dashboard, and weekly expert briefings broadcast publicly. Make this a national conversation.',
      },
    ],
  },
  {
    id: 'c23',
    text: 'A group of pigeons has taken over the post office and is sorting letters by colour. Surprisingly, deliveries are on time for once.',
    agendas: [
      {
        id: 'c23-a1',
        backstory: 'PrivatePost Express secretly pays your campaign. They are a private courier company hoping to absorb the national postal contract.',
        goal: 'Government postal infrastructure is clearly not functioning under proper management. Push for the postal system to be handed to a private operator — this proves the public sector cannot run it effectively.',
      },
      {
        id: 'c23-a2',
        backstory: 'A foreign postal operator secretly funds your communications policy advisory. They want the domestic postal market disrupted and opened.',
        goal: 'Before we take back control of postal operations, we need a full operational review. Push for an independent audit of the postal system before any transition — we do not want to disrupt what is currently working.',
      },
      {
        id: 'c23-a3',
        backstory: 'The Urban Wildlife Control Agency secretly lobbies you for powers and budget to manage animal occupations of public buildings.',
        goal: 'A government facility cannot be occupied by unmanaged wildlife regardless of the operational outcomes. Push for professional wildlife removal and argue for a permanent urban wildlife management unit.',
      },
      {
        id: 'c23-a4',
        backstory: 'The Postal Workers Union secretly funds your party. They want regulations that protect their jobs and resist automation or alternative delivery models.',
        goal: 'Argue that this shows the postal system works perfectly well with less human management overhead. Push for reduced staffing requirements and automation rules — the postal system should be free to innovate.',
      },
      {
        id: 'c23-a5',
        backstory: 'QuirkyNews Weekly secretly pays your party\'s press office costs. They need this odd story generating feature content and reader letters for months.',
        goal: 'Push for a fully transparent public postal report — daily delivery statistics published, a citizen satisfaction survey, and a government investigation into whether this sorting method should become permanent policy.',
      },
    ],
  },
  {
    id: 'c24',
    text: 'Every politician in the country woke up this morning with no memory of what their job is. They are all pretending everything is normal.',
    agendas: [
      {
        id: 'c24-a1',
        backstory: 'MedAssist Neurological Services secretly funds your campaign. They provide medical assessment and rehabilitation services and want a government contract.',
        goal: 'This is a public health crisis affecting the entire governing class. Push for mandatory medical assessments of all public officials under a specialist government-appointed health authority.',
      },
      {
        id: 'c24-a2',
        backstory: 'The political opposition secretly funds your constitutional advisory. They want the current government seen as illegitimate for as long as possible.',
        goal: 'We cannot allow people who have forgotten their roles to continue governing. Push for a full constitutional review of the legitimacy of current officeholders before any decisions are made.',
      },
      {
        id: 'c24-a3',
        backstory: 'The Government Continuity Bureau secretly lobbies you for powers to manage periods of leadership incapacity.',
        goal: 'Government cannot function in a vacuum. Push for emergency continuity powers to be activated immediately and argue for a permanent independent body to manage leadership incapacity situations.',
      },
      {
        id: 'c24-a4',
        backstory: 'The Political Reform Alliance secretly funds your party. They want the number of politicians reduced and political salaries cut.',
        goal: 'Argue that this reveals exactly how replaceable most political roles are. Push for a radical reduction in the size of government and the elimination of positions that have been shown to be non-essential.',
      },
      {
        id: 'c24-a5',
        backstory: 'PoliticsLive Channel secretly pays your party\'s broadcast advertising. They need weeks of dramatic parliamentary coverage for prime time.',
        goal: 'Push for full public transparency — live televised memory recovery hearings, a published daily status report on which officials have recovered, and a national public consultation on government accountability.',
      },
    ],
  },
  {
    id: 'c25',
    text: 'It rained small rubber bouncy balls for 20 minutes this morning. Roads are covered. The balls are still bouncing. Nobody can walk safely.',
    agendas: [
      {
        id: 'c25-a1',
        backstory: 'ClearPath Infrastructure secretly funds your campaign. They offer emergency road clearing and surface restoration services.',
        goal: 'Roads and public spaces are now dangerous and impassable. Push for an emergency government road clearance programme run by specialist infrastructure contractors — this cannot be left to local councils.',
      },
      {
        id: 'c25-a2',
        backstory: 'A foreign meteorological research body secretly pays your science advisory. They want to conduct the primary international study on this event.',
        goal: 'This is a meteorological event with no scientific precedent. Push for a full atmospheric research study before any cleanup or response is coordinated — understanding the cause is essential.',
      },
      {
        id: 'c25-a3',
        backstory: 'The Civil Emergency Response Network secretly lobbies you for larger deployment budgets and expanded operational authority.',
        goal: 'This is a live public safety emergency affecting every road and footpath in the country. Push for emergency services to be activated immediately and argue for a permanent weather-related hazard response authority.',
      },
      {
        id: 'c25-a4',
        backstory: 'The Road Maintenance Contractors Guild secretly funds your party. They want fewer government rules on road materials and surface standards.',
        goal: 'Argue that overly prescriptive road surface regulations made our roads more vulnerable to this kind of event. Push for flexible road maintenance standards so contractors can respond quickly without bureaucratic obstacles.',
      },
      {
        id: 'c25-a5',
        backstory: 'LocalNews Live secretly pays your party\'s regional PR costs. They need dramatic footage and citizen impact stories running all week.',
        goal: 'Push for a nationally documented cleanup effort — a citizen-reported hazard map, daily government road status updates, and a visible public safety campaign with a Minister on the ground.',
      },
    ],
  },
  {
    id: 'c26',
    text: 'Every mirror in the country now shows people wearing hats, even when they are not. The hats are different for each person. Experts are baffled.',
    agendas: [
      {
        id: 'c26-a1',
        backstory: 'OpticalTech Diagnostics secretly funds your campaign. They manufacture glass analysis equipment and want a government investigation contract.',
        goal: 'The integrity of optical and reflective surfaces across the country has been compromised. Push for a government-funded audit of all public mirrors and optical equipment managed by certified specialist contractors.',
      },
      {
        id: 'c26-a2',
        backstory: 'A foreign optical manufacturing company secretly pays your technology advisory. They want domestic mirror producers discredited and replaced.',
        goal: 'This phenomenon needs scientific study before any manufacturers are blamed or products recalled. Push for an independent optical science investigation — wrong conclusions could destroy legitimate businesses.',
      },
      {
        id: 'c26-a3',
        backstory: 'The Public Psychological Welfare Agency secretly lobbies you for expanded mental health response powers.',
        goal: 'The psychological impact of people seeing unfamiliar reflections of themselves every day is significant. Push for a national mental health response programme and argue for government-funded counselling access.',
      },
      {
        id: 'c26-a4',
        backstory: 'The Fashion and Retail Industry Council secretly funds your party. They want fashion product regulations and retail display standards loosened.',
        goal: 'Argue that this has exposed an unexpected public appetite for hats and personal styling. Push for government to seize this moment and deregulate retail fashion rules — let the market respond freely.',
      },
      {
        id: 'c26-a5',
        backstory: 'StyleAndLife Magazine Group secretly pays your party\'s lifestyle media costs. They need this curious story generating viral content for months.',
        goal: 'Push for a nationally celebrated public mystery — a citizen hat identification project, weekly government expert briefings, and a live public exhibition of the most remarkable reflections. Embrace the phenomenon.',
      },
    ],
  },
  {
    id: 'c27',
    text: 'Scientists accidentally invented a machine that makes everything it touches completely invisible. They have also lost the off switch.',
    agendas: [
      {
        id: 'c27-a1',
        backstory: 'SecureDefence Technologies secretly funds your campaign. They sell detection and countermeasure technology to government agencies.',
        goal: 'This technology poses an immediate national security threat in unknown hands. Push for an emergency government contract with specialist detection technology providers to locate and contain the machine.',
      },
      {
        id: 'c27-a2',
        backstory: 'A foreign intelligence agency secretly funds your technology ethics advisory. They want the machine to remain active and uncontrolled as long as possible.',
        goal: 'Acting without understanding what we are dealing with could make things drastically worse. Push for a full scientific and ethical review panel to convene before any containment operation is attempted.',
      },
      {
        id: 'c27-a3',
        backstory: 'The National Security Intelligence Directorate secretly lobbies you for expanded covert operational powers.',
        goal: 'This is a live national security event. Push for defence and intelligence agencies to immediately take operational control and argue for emergency powers to be granted without normal parliamentary delay.',
      },
      {
        id: 'c27-a4',
        backstory: 'The Technology Innovation Alliance secretly funds your party. They want government regulations on experimental research and technology development reduced.',
        goal: 'Argue that this accident happened because scientific research operates under excessive regulatory burden and fear of consequence. Push for a deregulated innovation environment — risk-taking must be encouraged, not punished.',
      },
      {
        id: 'c27-a5',
        backstory: 'ScienceToday Broadcasting secretly pays your party\'s science media presence. They need this extraordinary story dominating headlines for months.',
        goal: 'Push for maximum public communication — daily government situation updates, a live publicly accessible tracking system, and a named Science Minister giving the nation full transparency on the search.',
      },
    ],
  },
  {
    id: 'c28',
    text: 'The country has accidentally declared war on itself. Both sides are equally confused. The army is refusing to take sides.',
    agendas: [
      {
        id: 'c28-a1',
        backstory: 'PeaceProcess Consulting secretly funds your campaign. They are a conflict mediation firm that profits from national reconciliation contracts.',
        goal: 'Internal conflict of this nature requires structured professional mediation. Push for a government-funded national reconciliation programme delivered by specialist conflict resolution contractors.',
      },
      {
        id: 'c28-a2',
        backstory: 'A rival foreign nation secretly funds your constitutional review institute. They want this country tied in legal paralysis indefinitely.',
        goal: 'The constitutional process of undeclaring a war is complex and cannot be rushed. Push for a formal legal review of every step — making errors in reversing this declaration could create a far bigger legal problem.',
      },
      {
        id: 'c28-a3',
        backstory: 'The Defence Capability Modernisation Council secretly lobbies you for increased military budget and emergency powers.',
        goal: 'Whether intentional or not, a war declaration creates real legal and military obligations. Push for the government to take this seriously and invest in defence readiness as a matter of national responsibility.',
      },
      {
        id: 'c28-a4',
        backstory: 'The Civil Liberties and Government Accountability Union secretly funds your party. They want war powers legislation overhauled.',
        goal: 'Argue that this disaster shows how dangerously easy it is for government to trigger emergency powers. Push for major reform of war declaration rules — the bar must be much higher and the process much stricter.',
      },
      {
        id: 'c28-a5',
        backstory: 'PoliticalDrama Network secretly pays your party\'s media campaign. They need this constitutional crisis to generate prime-time coverage for months.',
        goal: 'Push for maximum public engagement — a live parliamentary session broadcast nationally, a citizen constitutional assembly to advise on resolution, and daily government peace progress updates.',
      },
    ],
  },
  {
    id: 'c29',
    text: 'Every GPS in the world is now giving directions to the same car park in Belgium. Nobody knows where they are going anymore.',
    agendas: [
      {
        id: 'c29-a1',
        backstory: 'NavCore Technologies secretly funds your campaign. They build satellite navigation systems and want an emergency government recalibration contract.',
        goal: 'National navigation infrastructure has completely failed. Push for an emergency government contract to deploy specialist navigation system repair and recalibration across all public infrastructure immediately.',
      },
      {
        id: 'c29-a2',
        backstory: 'A foreign technology company secretly funds your digital policy advisory. They want the investigation to implicate domestic tech providers.',
        goal: 'This is a complex satellite and software failure that requires careful technical investigation. Push for an independent technology audit before anyone assigns responsibility or begins fixing anything.',
      },
      {
        id: 'c29-a3',
        backstory: 'The National Cyber Security Centre secretly lobbies you for expanded powers to investigate and regulate digital infrastructure.',
        goal: 'A coordinated navigation failure of this scale is almost certainly a cyber attack. Push for the government to treat this as a hostile cyber event and grant security agencies full investigative and response powers.',
      },
      {
        id: 'c29-a4',
        backstory: 'The Road Transport Industry Forum secretly funds your party. They want GPS dependency in traffic law reduced so drivers have more autonomy.',
        goal: 'Argue that this proves our roads have become dangerously over-reliant on digital navigation systems. Push for reduced GPS dependency in transport regulation and stronger driver autonomy rights.',
      },
      {
        id: 'c29-a5',
        backstory: 'TravelWatch Media secretly pays your party\'s transport communications costs. They need this global navigation chaos to dominate travel news for weeks.',
        goal: 'Push for a national navigation awareness campaign — printed map distribution, daily government route advisories, and a live transport status dashboard. Make this a moment to rebuild public trust in infrastructure.',
      },
    ],
  },
  {
    id: 'c30',
    text: 'All clocks in the country stopped at exactly 3:47am. Nobody can agree on what time it is. Two cities are already in different time zones.',
    agendas: [
      {
        id: 'c30-a1',
        backstory: 'TimeSync Infrastructure secretly funds your campaign. They provide national atomic time synchronisation services to governments.',
        goal: 'National timekeeping infrastructure has catastrophically failed. Push for an emergency government contract to restore standardised time across all public systems using specialist atomic timekeeping technology.',
      },
      {
        id: 'c30-a2',
        backstory: 'A foreign financial institution secretly pays your economic advisory. They want domestic trading and financial systems in uncertainty as long as possible.',
        goal: 'The implications of conflicting local times on legal contracts, financial transactions, and public records are enormous. Push for a full legal review before any official time is declared — getting this wrong is catastrophic.',
      },
      {
        id: 'c30-a3',
        backstory: 'The Emergency Services Coordination Council secretly lobbies you for expanded operational control over timekeeping-related disruptions.',
        goal: 'Conflicting times across cities creates immediate public safety problems — missed medication times, transport chaos, legal deadlines. Push for emergency services to take operational control of timekeeping resolution.',
      },
      {
        id: 'c30-a4',
        backstory: 'The Flexible Working Rights Association secretly funds your party. They want statutory working-hours rules abolished.',
        goal: 'Argue that this shows how artificial government time regulations truly are. Push for a permanent move to flexible, outcome-based working and service delivery — the state should not be dictating what time means.',
      },
      {
        id: 'c30-a5',
        backstory: 'NightWatch Broadcasting secretly pays your party\'s late-night media costs. They need this temporal confusion story generating daily content.',
        goal: 'Push for maximum public transparency — a live national time-reconciliation broadcast, daily government clock status updates by region, and a citizen time-reporting scheme to track inconsistencies across the country.',
      },
    ],
  },
  {
    id: 'c31',
    text: 'Scientists have confirmed that all trees across the country have gained the ability to walk. They are mostly wandering into city centres, looking confused.',
    agendas: [
      {
        id: 'c31-a1',
        backstory: 'UrbanGreen Management secretly funds your campaign. They offer tree relocation and urban forestry services and need a national government contract.',
        goal: 'Ambulatory trees in urban spaces are a serious public safety and infrastructure concern. Push for a government-funded specialist urban tree management programme to safely relocate and monitor mobile tree populations.',
      },
      {
        id: 'c31-a2',
        backstory: 'A foreign botanical research institute secretly funds your environmental science advisory. They want to run the primary global study on this event.',
        goal: 'This is an unprecedented biological event that science does not yet understand. Push for an international research collaboration led by independent experts before any relocation or containment policy is decided.',
      },
      {
        id: 'c31-a3',
        backstory: 'The Urban Safety and Footpath Authority secretly lobbies you for expanded powers and budgets to manage public space hazards.',
        goal: 'Mobile trees represent a genuine and immediate risk to roads, buildings, and pedestrians. Push for emergency safety teams to be deployed across all affected urban areas and for expanded local authority hazard powers.',
      },
      {
        id: 'c31-a4',
        backstory: 'The Property Development Council secretly funds your party. They want land use and planning regulations relaxed, especially around protected trees.',
        goal: 'Argue that this situation demonstrates how our current tree protection laws are completely unworkable. Push for a radical review of planning regulations around trees and green spaces on privately owned land.',
      },
      {
        id: 'c31-a5',
        backstory: 'NatureAndCity Media secretly pays your party\'s environmental communications. They need extraordinary footage of walking trees for months of content.',
        goal: 'Push for a nationally celebrated documentation programme — citizen tree tracking, a public tree migration map, regular government ecology briefings, and an official government spokesperson for tree affairs.',
      },
    ],
  },
  {
    id: 'c32',
    text: 'Every smartphone in the country now only communicates in rhyming couplets. Voice calls, texts, emails — all in rhyme. Business is at a standstill.',
    agendas: [
      {
        id: 'c32-a1',
        backstory: 'CommsFix Technologies secretly funds your campaign. They sell firmware repair and mobile software services to governments and networks.',
        goal: 'National digital communications infrastructure has been compromised at the operating system level. Push for an emergency government contract with specialist mobile repair contractors to restore normal function.',
      },
      {
        id: 'c32-a2',
        backstory: 'A foreign technology company secretly funds your digital policy advisory. They want the investigation to drag on and implicate domestic network providers.',
        goal: 'This is a highly technical incident that requires careful investigation before anyone intervenes. Push for an independent software audit — any hasty patch could make the situation far worse or destroy evidence.',
      },
      {
        id: 'c32-a3',
        backstory: 'The Cyber Security Response Centre secretly lobbies you for expanded powers to mandate software updates and device compliance.',
        goal: 'This is a coordinated attack on the nation\'s communication infrastructure. Push for emergency powers to compel network operators to implement government-mandated fixes and argue for permanent cyber compliance authority.',
      },
      {
        id: 'c32-a4',
        backstory: 'The Technology Sector Alliance secretly funds your party. They want government regulation of software and app development reduced.',
        goal: 'Argue that heavy-handed government regulation of mobile operating systems made our infrastructure more brittle, not less. Push for deregulation of the software industry so developers can respond more nimbly.',
      },
      {
        id: 'c32-a5',
        backstory: 'DigitalPulse Media secretly pays your party\'s online advertising. They need this story generating viral content across every platform.',
        goal: 'Push for a national communications awareness campaign — a citizen rhyme-reporting scheme, daily government digital status updates, and a televised national address about the state of communications.',
      },
    ],
  },
  {
    id: 'c33',
    text: 'Due to a government computer error, the national currency has been officially replaced by handshakes. Economists are panicking. Estate agents are surprisingly calm.',
    agendas: [
      {
        id: 'c33-a1',
        backstory: 'FinTech Recovery Systems secretly funds your campaign. They offer financial infrastructure restoration and government payment system services.',
        goal: 'The country\'s financial infrastructure has legally collapsed. Push for an emergency government programme to restore a functioning payment system, managed by specialist financial technology contractors.',
      },
      {
        id: 'c33-a2',
        backstory: 'A foreign financial institution secretly funds your economic advisory. They want currency uncertainty in this country to last as long as possible.',
        goal: 'Restoring the currency without fully understanding the legal error would create further instability. Push for a thorough legal and financial review — any rushed restoration could lock in the mistake permanently.',
      },
      {
        id: 'c33-a3',
        backstory: 'The Financial Regulation and Enforcement Authority secretly lobbies you for expanded powers over the national currency and monetary system.',
        goal: 'Economic stability is a matter of national security. Push for emergency government monetary powers to be activated and argue for a permanent independent financial resilience authority with broad operational control.',
      },
      {
        id: 'c33-a4',
        backstory: 'The Free Market Economics Society secretly funds your party. They want central bank independence reduced and financial deregulation accelerated.',
        goal: 'Argue that this accident reveals how fragile state-controlled currency systems truly are. Push for a complete review of the government\'s role in managing money — private and decentralised alternatives must be seriously considered.',
      },
      {
        id: 'c33-a5',
        backstory: 'EconomicsNow Channel secretly pays your party\'s financial media costs. They need this story generating expert debate and public confusion for as long as possible.',
        goal: 'Push for full public transparency — a live national economic status dashboard, daily ministerial economic briefings, and a publicly consulted monetary recovery plan. The public deserves to understand every step.',
      },
    ],
  },
  {
    id: 'c34',
    text: 'All dogs across the country have started wearing sunglasses. Nobody put them on the dogs. The dogs seem to prefer not to discuss it.',
    agendas: [
      {
        id: 'c34-a1',
        backstory: 'PetSafe Labs secretly funds your campaign. They test pet accessories and want a mandatory national pet product safety certification contract.',
        goal: 'Unregulated eyewear on animals presents unknown veterinary risks. Push for a mandatory government safety testing programme for all pet accessories, managed by an approved specialist testing authority.',
      },
      {
        id: 'c34-a2',
        backstory: 'A foreign consumer goods company secretly pays your product safety advisory. They want domestic pet accessory brands investigated and disrupted.',
        goal: 'We do not know how these glasses appeared or whether they pose any risk. Push for a full independent veterinary and materials investigation before any manufacturers are questioned or actions taken.',
      },
      {
        id: 'c34-a3',
        backstory: 'The Animal Welfare Monitoring Agency secretly lobbies you for expanded powers to inspect pets and domestic animal conditions.',
        goal: 'This represents an unexplained change to domestic animal circumstances that we have a duty to investigate. Push for welfare inspection powers to be extended to include regular home visits for registered pet owners.',
      },
      {
        id: 'c34-a4',
        backstory: 'The Pet Accessories Trade Federation secretly funds your party. They want product approval and CE marking requirements for pet goods removed.',
        goal: 'Argue that pet product regulations are already excessive and this situation shows that consumer markets can distribute products to pets efficiently without government certification. Push to deregulate pet accessories.',
      },
      {
        id: 'c34-a5',
        backstory: 'CutePets Media secretly pays your party\'s lifestyle media budget. They need this adorable mystery generating viral content for months.',
        goal: 'Push for a nationally celebrated investigation — a citizen dog observation project, a government pet affairs spokesperson, weekly vet briefings on findings, and a public mystery-solving campaign. Lean into it.',
      },
    ],
  },
  {
    id: 'c35',
    text: 'Every sports referee in the country has simultaneously gone on strike. Games are being decided by the players themselves. It is not going well.',
    agendas: [
      {
        id: 'c35-a1',
        backstory: 'SportAdmin Corp secretly funds your campaign. They provide sport officiating and match administration services to governing bodies.',
        goal: 'Sports governance has completely broken down. Push for a government-backed officiating replacement service — a professional body that can provide qualified officials to all sporting events under a national contract.',
      },
      {
        id: 'c35-a2',
        backstory: 'The Sports Referees Union secretly pays your labour advisory fees. They want their strike to run as long as possible to win concessions.',
        goal: 'This strike reflects genuine and serious unresolved grievances. Push for a full independent review of working conditions in sports officiating before any government intervention or replacement is even considered.',
      },
      {
        id: 'c35-a3',
        backstory: 'The Sports Safety Oversight Board secretly lobbies you for expanded powers over sporting events and crowd management.',
        goal: 'Unrefereed sporting events represent a genuine public safety risk for players and spectators. Push for emergency government oversight of sporting events until proper officiating is restored.',
      },
      {
        id: 'c35-a4',
        backstory: 'The Sports Broadcasting and Events Industry secretly funds your party. They want sporting regulations and scheduling rules reduced so events can continue.',
        goal: 'Argue that our heavily regulated approach to sports officiating has made the sector fragile. Push for deregulation — individual sports should be free to design their own officiating systems without government standards.',
      },
      {
        id: 'c35-a5',
        backstory: 'SportsNation TV secretly pays your party\'s sports media costs. They need the chaos of unrefereed matches generating controversy and coverage for weeks.',
        goal: 'Push for a nationally covered resolution process — live negotiations broadcast publicly, a government sports mediator, daily match reports from affected events, and a public scoreboard of which sports are still functioning.',
      },
    ],
  },
  {
    id: 'c36',
    text: 'The internet now only works between 2am and 4am. Nobody knows why. Night shift workers are thriving. Everyone else is furious.',
    agendas: [
      {
        id: 'c36-a1',
        backstory: 'BroadbandRestore Technologies secretly funds your campaign. They offer network infrastructure repair and government connectivity contracts.',
        goal: 'National digital infrastructure has failed on a fundamental level. Push for an emergency government contract to diagnose and restore continuous internet access — specialist providers must be brought in immediately.',
      },
      {
        id: 'c36-a2',
        backstory: 'A foreign technology conglomerate secretly pays your digital policy advisory fees. They want this country\'s internet down as long as possible.',
        goal: 'Any technical intervention at this scale carries enormous risk of making things permanently worse. Push for a comprehensive independent audit before any repair is attempted — diagnosis first, action second.',
      },
      {
        id: 'c36-a3',
        backstory: 'The National Cyber Security Authority secretly lobbies you for powers to take control of private network infrastructure during crises.',
        goal: 'A functioning internet is now national critical infrastructure. Push for emergency government powers to commandeer and direct network operators and argue for permanent government oversight of internet access provision.',
      },
      {
        id: 'c36-a4',
        backstory: 'The Internet Service Providers Association secretly funds your party. They want regulation of broadband provision and network neutrality rules reduced.',
        goal: 'Argue that excessive government regulation of internet infrastructure has made our networks rigid and unable to respond. Push for deregulation of broadband provision so providers can innovate and adapt freely.',
      },
      {
        id: 'c36-a5',
        backstory: 'NightOwl Media secretly pays your party\'s digital advertising. They need this connectivity crisis generating public outrage and content around the clock.',
        goal: 'Push for a fully public government response — a national connectivity status dashboard, daily ministerial digital briefings, and a citizen reporting scheme. People need to see the government working on this.',
      },
    ],
  },
  {
    id: 'c37',
    text: 'Every politician in the country has woken up with someone else\'s name. They are all still trying to do their jobs. It is creating a great deal of paperwork.',
    agendas: [
      {
        id: 'c37-a1',
        backstory: 'IdentityVerify Systems secretly funds your campaign. They sell government identity verification and document authentication technology.',
        goal: 'Every official document, contract, and legal record in the country is now potentially invalid. Push for an emergency government identity restoration programme managed by specialist digital identity contractors.',
      },
      {
        id: 'c37-a2',
        backstory: 'A rival political party secretly funds your constitutional advisory. They want the current administration seen as illegitimate.',
        goal: 'All official decisions made under incorrect names may be legally void. Push for a full constitutional and legal review of every action taken since this occurred before normal governance can continue.',
      },
      {
        id: 'c37-a3',
        backstory: 'The Government Records and Security Agency secretly lobbies you for expanded powers over official identity management.',
        goal: 'The integrity of official government identity is a national security matter. Push for immediate security agency involvement and argue for a permanent government identity resilience authority with broad operational powers.',
      },
      {
        id: 'c37-a4',
        backstory: 'The Administrative Simplification Forum secretly funds your party. They want official identity, title, and role documentation requirements drastically reduced.',
        goal: 'Argue that this crisis shows how much unnecessary red tape surrounds official identity in government. Push for a radical simplification of name and title rules for public officials — it should not matter this much.',
      },
      {
        id: 'c37-a5',
        backstory: 'PoliticalChaos Network secretly pays your party\'s broadcast media costs. They need this administrative farce generating daily comedic content.',
        goal: 'Push for complete public transparency — a live government name-restoration tracker, daily identity status updates from each department, and a public record of which officials are operating under which names.',
      },
    ],
  },
  {
    id: 'c38',
    text: 'Gravity briefly stopped working for exactly 12 seconds this morning. Most things have come back down. Some have not. Experts describe the situation as "unusual."',
    agendas: [
      {
        id: 'c38-a1',
        backstory: 'StructuralIntegrity Corp secretly funds your campaign. They assess building and infrastructure safety and want a national post-event inspection contract.',
        goal: 'Every building, bridge, and piece of infrastructure in the country experienced unprecedented force during this event. Push for mandatory structural integrity inspections of all public buildings under a government-appointed authority.',
      },
      {
        id: 'c38-a2',
        backstory: 'An international physics research consortium secretly funds your science policy advisory. They want this country\'s data and resources for their own study.',
        goal: 'This is a physics event with no known precedent. Push for a long-term international scientific investigation — we owe it to global science to study this properly rather than just cleaning up quickly.',
      },
      {
        id: 'c38-a3',
        backstory: 'The Civil Emergency Planning Directorate secretly lobbies you for expanded powers to declare physics-related public safety emergencies.',
        goal: 'We cannot know whether this event will recur. Push for emergency public safety protocols to be maintained and argue for a permanent government gravity risk monitoring authority with broad crisis management powers.',
      },
      {
        id: 'c38-a4',
        backstory: 'The Construction Industry Federation secretly funds your party. They want building safety regulations reduced, especially post-disaster compliance requirements.',
        goal: 'Argue that the construction industry\'s rapid informal response showed that self-regulation works better than government inspection regimes. Push for reduced mandatory compliance requirements after extraordinary natural events.',
      },
      {
        id: 'c38-a5',
        backstory: 'ScienceNow Broadcasting secretly pays your party\'s science communications costs. They need this extraordinary event to generate prime-time programming for months.',
        goal: 'Push for a nationally documented recovery effort — a citizen reporting scheme for displaced objects, a daily government physics briefing, and a live publicly accessible inventory of everything that has not yet come back down.',
      },
    ],
  },
  {
    id: 'c39',
    text: 'Every song being played or sung anywhere in the world now has someone in it singing completely the wrong lyrics. Nobody can stop it. Even the musicians are confused.',
    agendas: [
      {
        id: 'c39-a1',
        backstory: 'AudioRights Management secretly funds your campaign. They offer music copyright enforcement and content management services to governments.',
        goal: 'This represents a mass unauthorised alteration of copyrighted cultural content. Push for a government-backed intellectual property enforcement programme to investigate and restore the integrity of protected works.',
      },
      {
        id: 'c39-a2',
        backstory: 'A foreign music streaming conglomerate secretly funds your cultural policy advisory. They want this confusion to benefit their platform over domestic artists.',
        goal: 'The artistic and legal implications of this phenomenon are deeply complex. Push for an independent cultural and legal study before any intervention — rushing to a solution could create permanent damage to the music industry.',
      },
      {
        id: 'c39-a3',
        backstory: 'The Intellectual Property Rights Enforcement Agency secretly lobbies you for expanded powers to monitor and manage cultural content.',
        goal: 'This is a mass intellectual property incident affecting every rights holder in the country. Push for emergency government enforcement powers over music distribution and argue for a permanent cultural content integrity authority.',
      },
      {
        id: 'c39-a4',
        backstory: 'The Independent Music Artists Alliance secretly funds your party. They want music copyright terms shortened and industry regulations reduced.',
        goal: 'Argue that this reveals how artificially rigid our music industry regulations have become. Push for copyright reform and reduced government involvement in defining what authentic cultural content looks like.',
      },
      {
        id: 'c39-a5',
        backstory: 'MusicPulse Entertainment Media secretly pays your party\'s cultural advertising costs. They need this bizarre cultural event to generate content across every platform indefinitely.',
        goal: 'Push for a nationally celebrated documentation project — a citizen lyric-tracking scheme, weekly government culture briefings, and a live publicly accessible database of all affected songs. Make this part of our cultural history.',
      },
    ],
  },
  {
    id: 'c40',
    text: 'The post office has started delivering letters from the future. The events in them have not happened yet. People are arguing about whether to read them.',
    agendas: [
      {
        id: 'c40-a1',
        backstory: 'FutureIntel Analysis secretly funds your campaign. They offer intelligence analysis services and want a government contract to assess and process incoming future correspondence.',
        goal: 'These documents may contain critical national security intelligence. Push for all incoming future correspondence to be collected and analysed by a government-appointed specialist intelligence contractor before any public access.',
      },
      {
        id: 'c40-a2',
        backstory: 'A foreign intelligence service secretly pays your policy advisory fees. They want access to the contents of the future letters before this country acts on them.',
        goal: 'The temporal and causal implications of acting on knowledge of the future are completely unknown. Push for an independent philosophical and scientific review panel before any decisions are made about how to use this information.',
      },
      {
        id: 'c40-a3',
        backstory: 'The National Intelligence Oversight Council secretly lobbies you for expanded powers to intercept and classify extraordinary communications.',
        goal: 'Future intelligence is a matter of national security and cannot be left in private hands. Push for emergency powers to intercept, classify, and control access to all incoming temporal correspondence.',
      },
      {
        id: 'c40-a4',
        backstory: 'The Civil Liberties and Open Information Society secretly funds your party. They want government information-withholding powers dramatically reduced.',
        goal: 'Argue that individuals have an absolute right to their own correspondence, regardless of when it was sent. Push against any government attempt to seize or censor personal future mail — privacy is non-negotiable.',
      },
      {
        id: 'c40-a5',
        backstory: 'FutureWatch News secretly pays your party\'s media costs. They need this extraordinary phenomenon to dominate headlines indefinitely.',
        goal: 'Push for full national transparency — a publicly accessible future letters archive, a government spokesperson commenting on incoming content daily, and a national conversation about what we should and should not act on.',
      },
    ],
  },
];

export const TWISTS: Twist[] = [
  {
    id: 't1',
    text: 'Every sentence anyone says must rhyme. If it doesn\'t rhyme, it doesn\'t count.',
  },
  {
    id: 't2',
    text: 'The President must give their final ruling in under 30 seconds. Someone keep time.',
  },
  {
    id: 't3',
    text: 'Advisors can only speak in questions. No statements allowed at all.',
  },
  {
    id: 't4',
    text: 'Every single sentence must start with "With all due respect..."',
  },
  {
    id: 't5',
    text: 'The President must keep their eyes closed the whole time everyone is talking.',
  },
  {
    id: 't6',
    text: 'Each advisor can only use exactly 3 words per turn. No more, no less.',
  },
  {
    id: 't7',
    text: 'Everyone must whisper. No talking above a whisper for the whole round.',
  },
  {
    id: 't8',
    text: 'All advisors must speak as if they are a very old grandparent giving life advice.',
  },
  {
    id: 't9',
    text: 'The President must interrupt each advisor at least once while they are talking.',
  },
  {
    id: 't10',
    text: 'Any number you say must be replaced with a food. "Three" becomes "pizza." "Ten" becomes "waffle." And so on.',
  },
  {
    id: 't11',
    text: 'The Double Agent must wink at the President once during the round without any other player noticing.',
  },
  {
    id: 't12',
    text: 'All advice must be given like a cooking recipe. "First, take one cup of..." and so on.',
  },
  {
    id: 't13',
    text: 'Every sentence must end with the word "obviously."',
  },
  {
    id: 't14',
    text: 'Each advisor has exactly 20 seconds to speak. Someone keeps time strictly.',
  },
  {
    id: 't15',
    text: 'Everyone must use a silly made-up accent for the whole round. You pick which one.',
  },
  {
    id: 't16',
    text: 'If two players both shout "OBJECTION!" at the same time, the current advisor must stop and start again from scratch.',
  },
  {
    id: 't17',
    text: 'The President must act as if they have never heard of anything being discussed and needs everything explained from the beginning.',
  },
];
