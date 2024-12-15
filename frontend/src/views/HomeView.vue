<template>
    <main>
      <button class="Logout-button" @click="logOut">Logout</button>
      <button class="addPost-button" @click="AddPost">Add post</button>
      <sidebar/>
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

export default {
  name: 'HomeView',
  components: {
    Sidebar,
    PostComponent
  },
  computed: {
    ...mapGetters(['posts']),
  },
  methods: {
    ...mapActions(['increaseLike', 'resetLikes']),
  }
}
</script>
