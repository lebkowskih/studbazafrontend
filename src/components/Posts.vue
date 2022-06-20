<template>
    <header>
        <nav class="navbar navbar-dark bg-primary shadow-sm  ">
            <div class="container-md">
                <a class="navbar-brand" href="">
                    <img src="../assets/logo.png" alt="" height="30">
                </a>

                <ul class="navbar-nav me-auto">

                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Znajdź użytkownika"
                            aria-label="Search">
                    </form>

                </ul>

                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <img src="../assets/prof.png" height="30" alt="" class="me-1 rounded-circle">
                        <a>Hubert</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    {{ usersList }}
</template> 



<script>
export default {
    data() {
        return {
            usersList: null
        };
    },
    created() {
        fetch('https://localhost:44381/api/User/username/string')
            .then(response => response.json())
            .then(data => (this.usersList = data));
    }
};
</script>
