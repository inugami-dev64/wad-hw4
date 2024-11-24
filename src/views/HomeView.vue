<template>
    <main>
      
      <div id="posts">
        <post-component 
          v-for="post in posts" 
          :key="post.id" 
          :postContent="post" 
          @like="increaseLike(post.id)"
        />
      </div>
      <div>
        <button class="reset-button" @click="resetLikes">Reset All Likes</button> 
      </div>
          
    </main>
  </template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue';
import PostComponent from '@/components/posts/Post.vue';
import { mapGetters, mapActions } from 'vuex';

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

<style scoped>


#posts {
  transform: translateX(65%);
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  padding: 1rem;
}
</style>

