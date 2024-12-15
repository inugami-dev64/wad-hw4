<template>
    <nav>
        <div class="nav-container">
            <a href="#/">Home</a>
            <span> | </span>
            <a href="#/signup">Sign up</a>
        </div>

        <div class="nav-container">
            <a href="#" id="userProfileAnchor">
                <!-- Source: https://icons.getbootstrap.com/icons/person-circle/ -->
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#fff" class="bi bi-person-circle profile" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
                <div id="dropdownMenu" class="dropdown-menu">
                    <p>Username: <span id="displayUsername"></span></p>
                    <p>Email: <span id="displayEmail"></span></p>
                    <a href="#" id="logout">Logout</a>
                </div>
            </a>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "HeaderComponent"
    }
</script>

<style scoped>
/** Navbar specific styling **/
nav { justify-content: space-between; }

/*** Let's make nav-container text slightly bigger ***/
.nav-container > a, .nav-container > span { font-size: var(--fs-nav) }

/*** OnHover animation effect for profile icon ***/
.profile {
    fill: var(--fg-primary);
    transition: var(--tr-hover);
}

.profile:hover { fill: var(--fg-tertiary) }

/* Drop-down menu from previous homework */
.dropdown-menu {
    display: none;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: var(--bg-secondary);
    color: var(--fg-primary);
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    min-width: 150px;
    z-index: 1;
}

.dropdown-menu p, .dropdown-menu a {
    margin: 5px 0;
    color: var(--fg-primary);
    text-decoration: none;
}

.dropdown-menu a:hover {
    color: var(--fg-tertiary);
}
</style>