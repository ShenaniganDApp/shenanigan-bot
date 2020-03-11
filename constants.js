var moment = require('moment')
require('moment-recur')

// Allowed users that can dish out points
// module.exports.userList = [
// ]

// Allowed point types
// module.exports.point_types = [
//   'GOV',
//   'DAPP',
//   'SC',
//   'COMM',
//   'UNICORN',
//   'ARAGON',
//   'FLURKEL',
//   'ETHKAN',
//   'DAPPNODE',
//   'SIGNALING',
// ]

// module.exports.reason_seperators = ['for', 'over', 'because']

// module.exports.domains = ['matrix.org', 'she.energy']

// module.exports.max_points = 10000

// module.exports.sheet_id =
//   process.env.NODE_ENV === 'production'
//     ? '12cblUYuYq4NwZX7JdRo0-NWnrOxlDy-XCbvF3ugzb2c'
//     : '10sU4UNlCq8fZ3f4zouoq945zTScw27uUV1LU0siA1YA'
// module.exports.sheet_tab_name = 'PointsBot (DONT RENAME!)!A1:F1'

// module.exports.dish_notification_msg =
//   "Congratulations! Your contribution to Shenanigan has been recognized by %DISHER% [here](%ROOM%) and you have received Reward Points that can be collected as Eth.\
// \n\nPlease join the [Contributors](https://riot.im/app/#/room/#giveth-contributors:matrix.org) Room and see the [Contributors Guide](https://wiki.giveth.io/dac/contributors-guide/) on our Wiki to learn more\
// \n\nDo act soon, these points don’t last forever. Unclaimed ETH rolls over at month end! To make a milestone and get that Eth, go to the [RewardDAO Campaign](https://beta.giveth.io/campaigns/5b3d9746329bc64ae74d1424) for the next steps and create a Profile on our Beta platform if you haven't already.\
// \n\nTHANK YOU for being here from the Giveth Unicorns (and our fabulous PointsBot)!"

// module.exports.milestone_automation_trigger_users = ['@danibelle:matrix.org']

// module.exports.milestone_notification_msg =
//   "You've got Love from Giveth!\
//   We appreciate your contributions and the [RewardDAO](https://beta.giveth.io/campaigns/5b3d9746329bc64ae74d1424) is here to thank you.\
// \nYou were [dished points](https://docs.google.com/spreadsheets/d/12cblUYuYq4NwZX7JdRo0-NWnrOxlDy-XCbvF3ugzb2c/edit#gid=0) in the month of %MONTH%, which means you have ETH waiting for you to collect it. To do so you'll need to create a Milestone by %DEADLINE%.\
// \n\n[Prepare to record or upload a video](https://wiki.giveth.io/dapp/milestones/) to claim your monthly reward, and [use this link when you're ready to create the milestone](%LINK%) - it will automatically populate important details. Join the conversation in our [#contributors](https://riot.im/app/#/room/#giveth-contributors:matrix.org) room for more information and updates please, see you there!"

// CHATBOT

module.exports.hashtagMappings = {
  '!kUeYRcrXObgGoJlFjn:matrix.org': 'sc',
}

// module.exports.calendarURL =
//   'https://calendar.google.com/calendar/ical/givethdotio%40gmail.com/public/basic.ics'

// module.exports.calendarUpperLimitInMonths = 2

module.exports.positiveResponses = ['yes', 'yup', 'yea']
module.exports.negativeResponses = ['no']

module.exports.scheduledMessages = [
  // CONTRIBUTORS
  /**{
    room: '!OQTaDMKEJXLvTpYoCe:matrix.org',
    message:
      '# Hi Contributors!\
    If you would like cash in hand (well, crypto in wallet) by the end of the month for work you\'ve done, **GET YOUR MILESTONES UP NOW**!\
    - propose your milestones by the 10th\
    - pester your campaign mgr to accept them swiftly! 😜\
    - make sure that some Unicorns ( @geleeroyale , @krrisis , @loie , @danibelle , @griffgreen, @misterboyfriend @planski ) are aware of/amplifying your work. You are always welcome to message us. 🤗\
    - hit disburse on "My Milestones" as soon as you\'re able\
    ## If you do all this, then you have the best shot of the funds being in your wallet 5 days after the third Monday of the month.\
    \
    Thank you so much for being here 💖Any questions, dm! -Loie',
    when: moment
      .recur()
      .every(7)
      .daysOfMonth(),
  },

  {
    room: '!OQTaDMKEJXLvTpYoCe:matrix.org',
    message:
      '# Hi Contributors!\
    If you would like cash in hand (well, crypto in wallet) by the end of the month for work you\'ve done, **GET YOUR MILESTONES UP NOW**!\
    - propose your milestones by the 10th\
    - pester your campaign mgr to accept them swiftly! 😜\
    - make sure that some Unicorns ( @geleeroyale , @krrisis , @loie , @danibelle , @griffgreen, @misterboyfriend @planski ) are aware of/amplifying your work. You are always welcome to message us. 🤗\
    - hit disburse on "My Milestones" as soon as you\'re able\
    ## If you do all this, then you have the best shot of the funds being in your wallet 5 days after the first Monday of next month..\
    \
    Thank you so much for being here 💖Any questions, dm! -Loie',
    when: moment
      .recur()
      .every(22)
      .daysOfMonth(),
  },*/
  // UNICORN ROOM
  /**{
    room: '!VUpIHOCgPdHvUrtwXq:matrix.org',
    message:
      '# Hi Givethers!\
    If you would like cash in hand (well, crypto in wallet) by the end of the month for work you\'ve done, **GET YOUR MILESTONES UP NOW**!\
    - propose your milestones by the 10th\
    - pester your campaign mgr to accept them swiftly! 😜\
    - make sure that some Unicorns ( @geleeroyale , @krrisis , @loie , @danibelle , @griffgreen, @misterboyfriend @planski ) are aware of/amplifying your work. You are always welcome to message us. 🤗\
    - hit disburse on "My Milestones" as soon as you\'re able\
    ## If you do all this, then you have the best shot of the funds being in your wallet 5 days after the third Monday of the month.\
    \
    Thank you so much for being here 💖Any questions, dm! -Loie',
    when: moment
      .recur()
      .every(7)
      .daysOfMonth(),
  },

  {
    room: '!VUpIHOCgPdHvUrtwXq:matrix.org',
    message:
      '# Hi Givethers!\
    If you would like cash in hand (well, crypto in wallet) by the end of the month for work you\'ve done, **GET YOUR MILESTONES UP NOW**!\
    - propose your milestones by the 10th\
    - pester your campaign mgr to accept them swiftly! 😜\
    - make sure that some Unicorns ( @geleeroyale , @krrisis , @loie , @danibelle , @griffgreen, @misterboyfriend @planski ) are aware of/amplifying your work. You are always welcome to message us. 🤗\
    - hit disburse on "My Milestones" as soon as you\'re able\
    ## If you do all this, then you have the best shot of the funds being in your wallet 5 days after the first Monday of next month..\
    \
    Thank you so much for being here 💖Any questions, dm! -Loie',
    when: moment
      .recur()
      .every(22)
      .daysOfMonth(),
  },*/
  // UNICORN DAC ROOM
  /**{
    room: '!rhEMPQvVgOkuPQtRdq:matrix.org',
    message:
      'The milestones are up! The sheet is ready! # Time to CHOOSE THE MILESTONES you want to fund this round!\
    As you know, I delegate on the first Monday of the month. So please make sure all your delegations (for any weeks between the third monday of last month and the first one of this month) are \
    ## in the sheet on Sunday💫🗓 💥',
    when: moment
      .recur()
      .every(10)
      .daysOfMonth(),
  },
  {
    room: '!rhEMPQvVgOkuPQtRdq:matrix.org',
    message:
      'The milestones are up! The sheet is ready! \
    # Time to CHOOSE THE MILESTONES you want to fund this round!\
    As you know, I delegate on the third Monday of the month. So please make sure all your delegations (for weeks between the first monday and third monday of this month) are \
    ## in the sheet on Sunday💫🗓 💥',
    when: moment
      .recur()
      .every(25)
      .daysOfMonth(),
  },**/
]

module.exports.messages = {
  // Design
  '!nxKbOMjKGySOnzLwSi:matrix.org': {
    internalMsg:
      'Now that you’re in Design there are a few resources that will help you along the way:\
    N/A',
    externalMsg:
      'Welcome to Design, %USER%! Please feel free to ask any questions in channel. I’ve also sent you a direct message with more info.',
  },

  // GENERAL
  '!QWfUTQvlhIpPEYQaQx:matrix.org': {
    externalMsg:
      'Welcome %USER% to Shenanigan! Feel free to introduce yourself or ask any question! You can find an overview of all our rooms by tapping/clicking on the flair next to my name, I also sent you a direct message with more info.',
    internalMsg: [
      {
        msg:
          'Hey %USER%, welcome to Shenanigan!! First a few tips if you are a new Riot user:\n\
      \n* [Download Riot](https://about.riot.im/downloads) on your device for quick and easy access\n\
      \n* Limit notifications per room [by changing it](https://about.riot.im/need-help/#rooms-section) to mentions only',
      },
      {
        msg: 'Do you want to know which rooms you can join?',
        positive:
          'You can find an overview of all our rooms by tapping/clicking on the flair next to my name.\
    Some more info about some of them:\n\
\n* Are you an artist? Join the conversation & sign up for Colony in [Design](https://riot.im/app/#/room/#she-design:matrix.org).\
\n* Are you an open-source dev? Join [Developers](https://riot.im/app/#/room/#she-devs:matrix.org)\
\n* Do you believe in Shenanigans message and goals? Help spread the word [Sales & Advertisement](https://riot.im/app/#/room/#she-sales:matrix.org) \
\n* Here with **DAO questions**? Plz send a DM to @youngkidwarrior - he will add you to the discussion.\
',
        negative:
          'Sure! No worries, whenever you want this info, just ask me here.',
      },
      {
        msg: 'Would you like some more info on Shenanigan?',
        positive:
          'To get up to speed on what we do and who we are the best place to start is our [website](http://she.energy/).\
          Next stop is Aragon and Colony \n\
         \n Please fill out this [document](https://forms.gle/vpHkUddSE2uQvpgQ9) if you want to build Shenanigan with us. Even if you don’t have time right now, we might meet in the future!\
          ',
        negative:
          'Sure! No worries, whenever you want this info, just ask me here.',
      },
    ],
  },

  // Developers
  '!FRmVPUkSATEedQdHHK:matrix.org': {
    externalMsg:
      'Welcome %USER% to the Developers room! Feel free to introduce yourself or ask any question! If you want to help us build out Shenanigan, make sure to add your details in the form I just sent you, together with some extra info!',
    internalMsg: [
      {
        msg:
          'Hey %USER%, welcome to the Developers room! Make sure you fill out this [document](https://forms.gle/vpHkUddSE2uQvpgQ9) if you want to build Shenanigan with us. Even if you don’t have time right now, we might meet in the future!',
      },
      {
        msg: 'Have you submitted a PR and contributed to the project?',
        positive:
          'Great! Well, to receive your eth, make sure you have been assigned the task [here](https://colony.io)! and message @youngkidwarrior for code review',
        negative: 'Sure, no problem! Whenever you want to know just ask me!',
      },
    ],
  },

  // Sales & Advertisement
  '!ncFamXIXSGtMZkzAeA:matrix.org': {
    externalMsg:
      'Welcome %USER% to the Sales & Advertisement room! Feel free to introduce yourself or ask any question! I’ve also sent you a direct message with more info.',
    internalMsg:
      'Hey %USER%, welcome to the Sales & Advertisement room! If you want to actively participate and help us sponsor athletes make sure to hop in our Sales & Advertisement meeting sometime.',
  },

  // GOVERNANCE
  '!NbcBXgBIoFqgdQsgLw:matrix.org': {
    externalMsg:
      'Welcome %USER% to the Governance room! Feel free to introduce yourself or ask any question',
    internalMsg:
      'Hey %USER%, welcome to the Governance room! If you want to actively participate and help us Sponsor Athletes you are welcome to hop in our Governance Meeting',
  },
}

module.exports.questions = {
  // GENERAL
  '!QWfUTQvlhIpPEYQaQx:matrix.org': [
    {
      trigger: 'download riot',
      answer:
        '[Download Riot](https://about.riot.im/downloads/) on your device for quick and easy access',
    },
    {
      trigger: 'too many notifications',
      answer:
        'Limit notifications per room [by changing it](https://about.riot.im/need-help/#rooms-section) to mentions only',
    },
    {
      trigger: 'more info on Shenanigan',
      answer:
        'To get up to speed on what we do and who we are the best place to start is our [website](http://she.energy/).\
      ',
    },
    {
      trigger: 'which rooms',
      answer:
        'You can find an overview of all our rooms by tapping/clicking on the flair next to my name.',
    },
  ],

  // DEVELOPERS
  '!QWfUTQvlhIpPEYQaQx:matrix.org': [
    {
      trigger: [
        'I want to be a tester',
        'I want to test the dapp',
        'how can I test',
      ],
      answer:
        'Great that you want to test the DApp with us! @youngkidwarrior:matrix.org will be in touch! If he isn’t, stalk him :-)',
    },
  ],

  // SALES & ADVERTISEMENT
  '!ncFamXIXSGtMZkzAeA:matrix.org': [
    {
      trigger: [
        'join the Sales & Advertisement Meeting',
        'join the comms meeting',
        'join our comms meeting',
        'Weekly meeting in',
      ],
      answer: 'The Sales & Advertisement meeting has no set time yet',
    },
    {
      trigger: ['Sales & Advertisement Meeting notes', 'Our meeting notes'],
      answer: "Notes currently aren't recorded.",
    },
  ],

  // GOVERNANCE
  '!NbcBXgBIoFqgdQsgLw:matrix.org': [
    {
      trigger: 'join the meeting',
      answer: 'The Governance meeting has no set time yet',
    },
  ],

  // DApp DEVELOPMENT
  /** "!pJNSuPMvcrDttmJFvV:matrix.org": [
   ]**/
}
