<template>
    <main>
      <sidebar/>
      <div id="posts">
        <post-component 
          v-for="post in posts" 
          :key="post.id" 
          :postContent="post" 
          @like="increaseLike(post.id)"
        />
      </div>
      <button class="reset-button" @click="resetLikes">Reset All Likes</button> 
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
