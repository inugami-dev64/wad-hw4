<template>
    <div>
       
      <!-- Main Content -->
      <main class="centered">
        <failure-banner :content="failureMessage" v-if="failureMessage != ''" v-model="failureMessage"/>
        <form @submit.prevent="createPost" class="post-container">
          <label for="textArea">Post body</label>
          <textarea id="textArea" v-model="postContent" rows="4" placeholder="Your message"></textarea>
          <input type="submit" value="Create post" class="button"/>
        </form>

      </main>
    </div>
  </template>
  
  <script>
  import FailureBanner from '@/components/messages/FailureBanner.vue';

  export default {
    data() {
      return {
        postContent: '',
        selectedFile: null,
        dropdownVisible: false,
        username: '',
        email: '',
        failureMessage: ''
      };
    },
    components: {
      FailureBanner
    },
    created() {
      // Get info from localStorage when component is created
      this.username = localStorage.getItem("username") || "Guest";
      this.email = localStorage.getItem("email") || "guest@example.com";
    },
    methods: {
      toggleDropdown() {
        this.dropdownVisible = !this.dropdownVisible;
      },
      handleFileChange(event) {
        this.selectedFile = event.target.files[0];
      },
      createPost() {
        // Here you can add logic to handle post creation
        if (this.postContent.trim() === '') {
          alert("Please enter some content for the post.");
          return;
        }

        const host = process.env.BACKEND_HOST || 'http://localhost:1337';
        fetch(`${host}/api/v1/posts`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: 'include',
          body: JSON.stringify({ body: this.postContent.trim() })
        })
          .then((res) => res.json())
          .then((data) => {
            if ('code' in data) {
              console.log("Please authenticate yourself first");
              this.$router.push('/login');
              return
            }
            console.log("Post created successfully")
            this.$router.push('/')
          })
          .catch((err) => {
            console.log(err.message);
            this.failureMessage = "Server error"
          })
      }
    },
  };
  </script>
  
  <style scoped>
  /* Your existing CSS styles here */
  .centered {
    display: block;
  }
  
  form textarea {
    width: 100%;
    box-sizing: border-box;
    color: white;
    resize: none;
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: var(--bg-primary);
  }
  
  form {
    text-align: center;
    margin: auto !important;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--bg-tertiary);
  }
  
  form > a:hover {
    color: cyan;
    cursor: pointer;
  }
  
  form input {
    width: 100%;
    height: 30px;
    margin: 0.2rem 0;
    border-radius: 0.33rem;
    box-sizing: border-box;
    border: none;
    background-color: var(--bg-primary);
    color: white;
    text-align: center;
  }
  
  form .button {
    border: none;
    border-radius: 5px;
    background-color: rgb(29, 29, 243);
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    color: white;
  }
  
  form .button:hover {
    background-color: rgb(2, 2, 128);
    cursor: pointer;
  }
  
  footer {
    margin-top: 20px;
  }
  
  .footer-container {
    list-style: none;
    padding: 0;
  }
  </style>
  