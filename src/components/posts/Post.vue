<script setup>
    import { computed } from 'vue';
    const props = defineProps({
        postContent: Object
    })

    let imageUrl = "";
    let thumbnailUrl = ""
    const thumbsupUrl = require(`@/assets/user-content/img/thumbs-up.svg`)

    if ('image_path' in props.postContent) {
        imageUrl = require(`@/assets/user-content/img/${props.postContent.image_path}`);
        thumbnailUrl = require(`@/assets/user-content/img/${props.postContent.image_path.replace(/^([A-Za-z0-9_\-]+)\.(jpg|png|gif)$/, 'thumbnails/$1_s\.$2')}`);
    }
</script>

<template>
    <div class="post-container" :id="`post-${postContent.id}`">
      <header>
        <a href="/WAD-HW2/">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" class="bi bi-person-circle profile" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
          </svg>
        </a>
        <time>{{ postContent.created_at }}</time>
      </header>
      <div class="post-content">
        <div class="post-img-preview" v-if="'image_path' in postContent">
          <a :href="imageUrl" target="_blank">
            <img :src="thumbnailUrl" alt="Image"/>
          </a>
        </div>
        <div class="post-message">
          <p>{{ postContent.content }}</p>
        </div>
      </div>
      <div class="post-stats">
        <button class="btn-transparent" @click="likePost">
          <img :src="thumbsupUrl" alt="Like" height="32" width="32">
        </button>
        <span>{{ postContent.likes }} Likes</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PostContainer",
    props: ["postContent"],
    data() {
      return {
        imageUrl: "",
        thumbnailUrl: "",
        thumbsupUrl: require(`@/assets/user-content/img/thumbs-up.svg`)
      };
    },
    methods: {
      likePost() {
        this.$emit('like');
      }
    },
    watch: {
      'postContent.image_path'(newValue) {
        if (newValue) {
          this.imageUrl = require(`@/assets/user-content/img/${newValue}`);
          this.thumbnailUrl = require(`@/assets/user-content/img/${newValue.replace(/^([A-Za-z0-9_\-]+)\.(jpg|png|gif)$/, 'thumbnails/$1_s\.$2')}`);
        }
      }
    }
  };
  </script>

<style>
    /* Post container styling */
    .post-container {
        /* Subtract sidebar vertical margins */
        width: calc(100% - 2 * 0.75rem);
        max-width: 500px;
        margin: 0.5rem auto;
        padding: 0.5rem;
        border-radius: 0.5rem;
        background-color: var(--bg-tertiary);
    }

    .post-container > header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .btn-transparent {
        background-color: transparent;
        border: none;
    }

    .btn-transparent:hover {
        cursor: pointer;
    }

    .post-img-preview {
        width: 100%;
        height: 300px;
        text-align: center;
    }

    .post-img-preview img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
    }
</style>