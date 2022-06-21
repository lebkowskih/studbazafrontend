<template>
    <header>
        <nav class="navbar navbar-dark bg-primary shadow-sm  ">
            <div class="container-md">
                <a class="navbar-brand" href="">
                    <img src="../assets/logo.png" alt="" height="30">
                </a>

                <ul class="navbar-nav me-auto">

                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Znajdź użytkownika" aria-label="Search" v-on:keyup="getUser" v-model="username" list="users">
                        <datalist id="users">
                            <option v-for="user in usersList" :key="user.id">{{user.email}}</option>
                        </datalist>
                        <button @click="redirectToUser"><img src="../assets/search.svg" /></button>
                    </form>

                </ul>
                <ul class="navbar-nav ms-auto">
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">     {{loggedUser}}
  </a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">    
                                    <a class="dropdown-item" @click="logout">Wyloguj się</a>
                                </div>
                        </li>

                </ul>
            </div>
        </nav>
    </header>
</template> 


<script>

import store from '../store/index';

export default  {
    
    data() {
        return {
            usersList: null,
            username: '',
            loggedUser: null
        };
    },
    computed: {
        loggedIn() {
            return store.state.status.loggedIn;
        },
        username() {
            this.loggedUser = localStorage.getItem('username')
        }
    },
    created(){
        if(this.loggedIn == false){
            this.$router.push('/')
        }
    },
    methods: {
        getUser(){
        fetch("https://localhost:44381/api/Users/username/"+this.username)
            .then(response => response.json())
            .then(data => (this.usersList = data));
                },
                
        logout(){
            store.dispatch('logout');
            this.$router.push('/')

    }    
            
}
}
</script>


<style scoped>
.navbar-nav .dropdown-menu{
    position: absolute;
}


</style>




