export interface Message {
  id: string;
  sender: string;
  subject: string;
  body: string;
  timestamp: string;
}

export interface MessageDirectory {
  id: string;
  name: string;
  icon: string;
  messages: Message[];
}

export const messageDirectories: MessageDirectory[] = [
  {
    id: 'home',
    name: 'Home',
    icon: 'home-outline',
    messages: [
      {
        id: 'home_1',
        sender: 'Mom',
        subject: 'Dinner plans tonight',
        body: 'Hi sweetie, I\'m making your favorite pasta tonight. Will you be home by 6 PM? Let me know if you need me to pick up anything from the store on my way back.',
        timestamp: '2:05 PM'
      },
      {
        id: 'home_2',
        sender: 'Dad',
        subject: 'Weekend project',
        body: 'Hey kiddo, want to help me fix the fence this weekend? I could use an extra pair of hands and we can grab lunch afterward. Think about it and let me know.',
        timestamp: '11:30 AM'
      },
      {
        id: 'home_3',
        sender: 'Sister',
        subject: 'Can you pick up my package?',
        body: 'My Amazon package is being delivered today but I won\'t be home. Can you grab it for me? It should arrive around 3 PM. Thanks!',
        timestamp: '9:15 AM'
      }
    ]
  },
  {
    id: 'love',
    name: 'Love',
    icon: 'heart-outline',
    messages: [
      {
        id: 'love_1',
        sender: 'Alex',
        subject: 'Missing you',
        body: 'Hey beautiful, I can\'t stop thinking about our date last night. You looked absolutely stunning and I had the best time. Can\'t wait to see you again soon. ❤️',
        timestamp: '8:20 AM'
      },
      {
        id: 'love_2',
        sender: 'Alex',
        subject: 'Good morning sunshine',
        body: 'Good morning my love! Hope you slept well. I made you coffee and left it on the kitchen counter. Have an amazing day and remember that I love you to the moon and back.',
        timestamp: '7:00 AM'
      }
    ]
  },
  {
    id: 'family',
    name: 'Family',
    icon: 'people-outline',
    messages: [
      {
        id: 'family_1',
        sender: 'Grandma',
        subject: 'Sunday dinner invitation',
        body: 'Hello dear, I\'m making pot roast this Sunday and would love to have the whole family over. Can you make it around 2 PM? I\'ll make your favorite apple pie for dessert!',
        timestamp: '4:30 PM'
      },
      {
        id: 'family_2',
        sender: 'Uncle Mike',
        subject: 'Birthday party reminder',
        body: 'Don\'t forget about Emma\'s birthday party this Saturday at the park! It starts at 2 PM. I\'ll bring the grill and burgers. Can you bring some drinks and chips?',
        timestamp: '1:45 PM'
      },
      {
        id: 'family_3',
        sender: 'Cousin Sarah',
        subject: 'Graduation announcement',
        body: 'Guess what? I finally graduated! The ceremony is next month and I would love for you to be there. It means so much to have family support. I\'ll send you the details soon.',
        timestamp: '12:10 PM'
      }
    ]
  },
  {
    id: 'friends',
    name: 'Friends',
    icon: 'people-circle-outline',
    messages: [
      {
        id: 'friends_1',
        sender: 'Jessica',
        subject: 'Movie night this Friday?',
        body: 'Hey girl! Want to do a movie night this Friday? I found this amazing new thriller on Netflix that we absolutely have to watch together. I\'ll bring the popcorn and wine!',
        timestamp: '5:15 PM'
      },
      {
        id: 'friends_2',
        sender: 'Ryan',
        subject: 'Basketball game tomorrow',
        body: 'Yo! We\'re playing basketball at the park tomorrow at 6 PM. Jake and Mark are in. You should come too! It\'s been way too long since we all hung out.',
        timestamp: '3:22 PM'
      },
      {
        id: 'friends_3',
        sender: 'Emma',
        subject: 'Coffee catch up?',
        body: 'It\'s been forever since we caught up properly! Want to grab coffee this weekend? I have so much to tell you about my new job and would love to hear what\'s new with you.',
        timestamp: '10:45 AM'
      }
    ]
  },
  {
    id: 'school',
    name: 'School',
    icon: 'school-outline',
    messages: [
      {
        id: 'school_1',
        sender: 'Prof. Johnson',
        subject: 'Assignment deadline reminder',
        body: 'This is a friendly reminder that your research paper is due this Friday by 11:59 PM. Please make sure to follow the formatting guidelines and submit through the online portal.',
        timestamp: '3:00 PM'
      },
      {
        id: 'school_2',
        sender: 'Study Group',
        subject: 'Study session Wednesday',
        body: 'Hey everyone! We\'re meeting at the library Wednesday at 7 PM to review for the midterm exam. Bring your notes and we\'ll go through the practice problems together.',
        timestamp: '1:20 PM'
      }
    ]
  }
];