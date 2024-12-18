<template>
    <main>
      <button class="Logout-button" @click="logOut">Logout</button>
      <button class="addPost-button" @click="AddPost">Add post</button>
      <sidebar/>
      <failure-banner :content="failureMessage" v-if="failureMessage != ''" v-model="failureMessage"/>
      <div id="posts">
        <post-component 
          v-for="post in posts" 
          :key="post.id" 
          :postContent="post" 
          @like="increaseLike(post.id)"
        />
      </div>
      <sidebar/>
      <button class="reset-button" @click="resetLikes">Reset All Likes</button> 
          
    </main>
  </template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue';
import PostComponent from '@/components/posts/Post.vue';
import { mapGetters, mapActions } from 'vuex';
import AddPost from './AddPost.vue';
import FailureBanner from '@/components/messages/FailureBanner.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      posts: [],
      failureMessage: ''
    }
  },
  components: {
    Sidebar,
    PostComponent,
    FailureBanner
  },
  computed: {
    ...mapGetters(['posts']),
  },
  methods: {
    ...mapActions(['increaseLike', 'resetLikes']),
    fetchPosts() {
      const host = process.env.BACKEND_HOST || 'http://localhost:1337';
      fetch(`${host}/api/v1/posts`, { credentials: 'include' })
        .then((res) => res.json())
        .then((data) => {
          if ('code' in data) {
            console.log("Please authenticate first")
            this.$router.push('/authenticate')
            return
          }
          this.posts = data;
        })
        .catch((err) => {
          console.log(err.message)
          this.failureMessage = "Server error";
        })
    }
  },
  mounted() {
    this.fetchPosts();
  }
}
</script>
