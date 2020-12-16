export type stateType = {
  profilePageData: {
    postsData: Array<PostsDataType>

  }
  messagesPageData: {
    dialogsData: Array<DialogItemType>
    messagesData: Array<MessageDataType>
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
}

export const state: stateType = {
  profilePageData: {
    postsData: [
      { id: 1, message: 'Good day', likes: 15 },
      { id: 2, message: 'Nice weather', likes: 6 },
      { id: 3, message: 'I was in Rome!!!!', likes: 0 }
    ]
  },
  messagesPageData: {
    messagesData: [
      { id: 1, message: 'Hi' }, { id: 2, message: 'How are you?' }, { id: 3, message: 'Where are you from?' },
      { id: 4, message: 'Nice picture? bro!!!!' }, { id: 5, message: 'I miss you :-(' }
    ],
    dialogsData: [
      { id: 1, name: 'Yehor' }, { id: 2, name: 'Andrey' }, { id: 3, name: 'Viktor' },
      { id: 4, name: 'Dima' }, { id: 5, name: 'Sveta' }
    ]
  }

};


