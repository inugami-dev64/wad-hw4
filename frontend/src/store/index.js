import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [
      {
        id: 1,
        created_at: "2024-11-03T17:02:30+0200",
        author: "Ruud",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        likes: 10,
        image_path: "anime-irl.jpg",
        comments: [
            {
                author: "John Pork",
                text: "I like this post",
                created_at: "2024-11-03T17:02:30+0200"
            },
            {
                author: "Mihkel Jaakson",
                text: "Hehe",
                created_at: "2024-11-03T17:02:30+0200"
            }
        ]
      },
      {
          id: 2,
          created_at: "2024-11-03T17:02:30+0200",
          author: "Ruud",
          content: "Tartu is an interesting place",
          likes: 13,
          comments: [
              {
                  author: "John Pork",
                  text: "I agree!",
                  created_at: "2024-11-03T17:02:30+0200"
              },
              {
                  author: "Mihkel Jaakson",
                  text: "True and real!",
                  created_at: "2024-11-03T17:02:30+0200"
              }
          ]

      },
      {
          id: 3,
          created_at: "2024-11-03T17:02:30+0200",
          author: "Ruud",
          content: "See pilt läheb väga kõvasti!",
          likes: 120,
          image_path: "kuva.jpg",
          comments: [
              {
                  author: "John Pork",
                  text: "Awesome picture!",
                  created_at: "2024-11-03T17:02:30+0200"
              }
          ]
      },
      {
          id: 4,
          created_at: "2024-11-03T17:02:30+0200",
          author: "Ruud",
          content: "Does anybody know where the lecture takes place?",
          likes: 19,
          comments: [
              {
                  author: "John Pork",
                  text: "Nope",
                  created_at: "2024-11-03T17:02:30+0200"
              },
              {
                  author: "Mihkel Jaakson",
                  text: "Let me know aswell",
                  created_at: "2024-11-03T17:02:30+0200"
              }
          ]
      },
      {
          id: 5,
          created_at: "2024-11-03T17:02:30+0200",
          author: "Ruud",
          content: "The joke is that the place is called Sneed's Feed & Seed which is clever in itself and quite funny to those with a mature sense of humour but what's really just hilarious about it is that if you look closely at the front of this store, Sneed's Feed & Seed, you can see a line that reads Formerly Chuck's. Now, this might go over the average viewer's head as this, THIS, is peak comedy. I doubt anything will ever be as funny as the joke about Sneed's Feed & Seed. Are you ready for this one? So, like I said, the place is called Sneed's Feed & Seed and this sign says Formerly Chuck's, which means that when Chuck owned the place, well, I don't have to tell you...",
          likes: 34,
          image_path: "sneed.png",
          comments: [
              {
                  author: "John Pork",
                  text: "I don't find it funny",
                  created_at: "2024-11-03T17:02:30+0200"
              },
              {
                  author: "Mihkel Jaakson",
                  text: "Good joke!",
                  created_at: "2024-11-03T17:02:30+0200"
              }
          ]
      },
      {
          id: 6,
          created_at: "2024-11-03T17:02:30+0200",
          author: "Ruud",
          content: "Example post",
          likes: 34,
          image_path: "kuva.jpg",
          comments: [
              {
                  author: "John Pork",
                  text: "Testing Testing 123",
                  created_at: "2024-11-03T17:02:30+0200"
              },
              {
                  author: "Mihkel Jaakson",
                  text: "Smooth Criminal",
                  created_at: "2024-11-03T17:02:30+0200"
              }
          ]
      },
      {
          id: 7,
          created_at: "2024-11-03T17:02:30+0200",
          author: "Ruud",
          content: "TestPost",
          likes: 34,
          image_path: "kuva.jpg",
          comments: [
              {
                  author: "John Pork",
                  text: "Testing Testing 123",
                  created_at: "2024-11-03T17:02:30+0200"
              },
              {
                  author: "Mihkel Jaakson",
                  text: "Smooth Criminal",
                  created_at: "2024-11-03T17:02:30+0200"
              }
          ]
      },
      {
          id: 8,
          created_at: "2024-11-03T17:02:30+0200",
          author: "Ruud",
          content: "What am I doing?",
          likes: 34,
          image_path: "kuva.jpg",
          comments: [
              {
                  author: "John Pork",
                  text: "Testing Testing 123",
                  created_at: "2024-11-03T17:02:30+0200"
              },
              {
                  author: "Mihkel Jaakson",
                  text: "Smooth Criminal",
                  created_at: "2024-11-03T17:02:30+0200"
              }
          ]
      },
      {
          id: 9,
          created_at: "2024-11-03T17:02:30+0200",
          author: "Ruud",
          content: "How is it even possible?",
          likes: 34,
          image_path: "kuva.jpg",
          comments: [
              {
                  author: "John Pork",
                  text: "Testing Testing 123",
                  created_at: "2024-11-03T17:02:30+0200"
              },
              {
                  author: "Mihkel Jaakson",
                  text: "Smooth Criminal",
                  created_at: "2024-11-03T17:02:30+0200"
              }
          ]
      },
      {
          id: 10,
          created_at: "2024-11-03T17:02:30+0200",
          author: "Ruud",
          content: "Please try to understand this code",
          likes: 15,
          image_path: "kuva.jpg",
          comments: [
              {
                  author: "John Pork",
                  text: "I will try",
                  created_at: "2024-11-03T17:02:30+0200"
              },
              {
                  author: "Mihkel Jaakson",
                  text: "Moonwalk",
                  created_at: "2024-11-03T17:02:30+0200"
              }
          ]
      }
    ]
  },
  getters: {
    posts: (state) => state.posts,
  },
  mutations: {
    increaseLike(state, postId) {
      const post = state.posts.find(post => post.id === postId);
      if (post) post.likes++;
    },
    resetLikes(state) {
      state.posts.forEach(post => {
        post.likes = 0;
      });
    }
  },
  actions: {
    increaseLike({ commit }, postId) {
      commit('increaseLike', postId);
    },
    resetLikes({ commit }) {
      commit('resetLikes');
    }
  },
  modules: {}
});
