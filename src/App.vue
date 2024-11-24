<template>
  <header-component/>
  <router-view/>
  <footer-component/>
</template>

<script setup>
import HeaderComponent from './components/Header.vue';
import FooterComponent from './components/Footer.vue';
</script>

<style global>
/* We will use Roboto font, because I think it looks quite nice :) */
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

/* Let's define a bunch of universal properties */
:root {
    /* Background colors */
    --bg-primary: #1f1f1f;
    --bg-secondary: #38383d;
    --bg-tertiary: #525257;
    --bg-post-1: #110a53;

    /* Foreground colors */
    --fg-primary: #fff;
    --fg-secondary: #ddd;
    --fg-tertiary: #aaa;

    --fg-light-red: rgb(244, 94, 94);

    /* Font sizes */
    --fs-base: 1rem;
    --fs-h1: calc(var(--fs-base) * 2);
    --fs-h2: calc(var(--fs-base) * 1.75);
    --fs-h3: calc(var(--fs-base) * 1.5);
    --fs-h4: calc(var(--fs-base) * 1.25);
    --fs-h5: calc(var(--fs-base) * 1);
    --fs-nav: calc(var(--fs-base) * 1.15);

    /* Hovering transition */
    --tr-hover: all 0.2s ease-in;
}

/* Remove default margins and paddings from the body element */
body {
    margin: 0;
    padding: 0;
    background-color: var(--bg-primary);
  }

#app {
  /* App divisor contains three elements: nav, main and footer.
       For alignment reasons let's use grid for now to make footer stick to the bottom */
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
}

main {
  width: 100%;
  padding-bottom: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

/* Text element styles */
span, h1, h2, h3, h4, h5, p, a, b, i, li, label, time {
    font-family: "Roboto", sans-serif;
    font-size: var(--fs-base);
    color: var(--fg-primary);
}

time {
    font-weight: 900;
}

/** Remove bullets from <li> elements **/
li { list-style-type: none }

/** Heading element font sizes **/
h1 { font-size: var(--fs-h1) }
h2 { font-size: var(--fs-h2) }
h3 { font-size: var(--fs-h3) }
h4 { font-size: var(--fs-h4) }
h5 { font-size: var(--fs-h5) }

/** Disable anchor tag's decoration and add hover transitions **/
a {
    text-decoration: none;
    transition: var(--tr-hover);
}

a:hover { color: var(--fg-tertiary) }

/* Navbar and footer styling */
/** In principle navbar and footer have basically the same styles 
    with some alignment related differences. I.e. footer is sticky while navbar is not.
    Also footer aligns it's children in the center while navbar doesn't.
 **/
nav, footer {
  padding: 5px 1rem;
  display: flex;
  align-items: center;
  background-color: var(--bg-secondary);
}

.reset-button {
  position: fixed;
  bottom: 125px;
  left: 50%;
  transform: translateX(-50%);
  font-size: var(--fs-base);
  padding: 10px 20px;
  background-color: var(--fg-light-red);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 2;
}

.reset-button:hover {
  background-color: #ff7f7f;
}

</style>
