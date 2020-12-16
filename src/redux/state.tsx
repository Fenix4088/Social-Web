export type stateType = {
  profilePageData: {
    postsData: Array<PostsDataType>

  }
  dialogsPageData: {
    dialogsData: Array<DialogItemType>
    messagesData: Array<MessageDataType>
  }
  sidebar: {
    friends: Array<FriendsItemType>
  }
}
export type PostsDataType = {
  id: number
  message: string
  likes: number
}
export type MessageDataType = {
  id: number
  message: string
}
export type DialogItemType = {
  name: string
  id: number
  logo: string
}
export type FriendsItemType = {
  id: number
  name: string
  logo: string
}

export const state: stateType = {
  profilePageData: {
    postsData: [
      { id: 1, message: 'Good day', likes: 15 },
      { id: 2, message: 'Nice weather', likes: 6 },
      { id: 3, message: 'I was in Rome!!!!', likes: 0 }
    ]
  },
  dialogsPageData: {
    messagesData: [
      { id: 1, message: 'Hi' }, { id: 2, message: 'How are you?' }, { id: 3, message: 'Where are you from?' },
      { id: 4, message: 'Nice picture? bro!!!!' }, { id: 5, message: 'I miss you :-(' }
    ],
    dialogsData: [
      { id: 1, name: 'Yehor', logo: "https://c0.klipartz.com/pngpicture/795/938/gratis-png-cerdo-blanco-grande-caras-divertidas-de-dibujos-animados-s.png" },
      { id: 2, name: 'Andrey', logo: "https://e7.pngegg.com/pngimages/95/869/png-clipart-walrus-santa-claus-drawing-funny-cartoon-faces-s-food-face.png" },
      { id: 3, name: 'Viktor', logo: "https://w7.pngwing.com/pngs/2/519/png-transparent-little-penguin-bird-face-funny-cartoon-faces-s-face-smiley-bird.png" },
      { id: 4, name: 'Dima', logo: "https://wallpaperaccess.com/full/777162.png" },
      { id: 5, name: 'Sveta', logo: "https://funnypicture.org/wallpaper/2015/05/funny-cartoon-faces-28-high-resolution-wallpaper.png" }
    ]
  },
  sidebar: {
    friends: [
      {id: 1, name: "Sveta", logo: "https://c0.klipartz.com/pngpicture/795/938/gratis-png-cerdo-blanco-grande-caras-divertidas-de-dibujos-animados-s.png"},
      {id: 2, name: "Anna", logo: "https://w7.pngwing.com/pngs/2/519/png-transparent-little-penguin-bird-face-funny-cartoon-faces-s-face-smiley-bird.png"},
      {id: 3, name: "Dima", logo: "https://funnypicture.org/wallpaper/2015/05/funny-cartoon-faces-28-high-resolution-wallpaper.png"},
    ]
  }
};


