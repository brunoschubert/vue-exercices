<template>
    <div>
        <h3>Some User Details</h3>
        <p>User Loaded has ID: {{ $route.params.id }}</p>
        <!-- routes to a given place
        <router-link 
        tag="button" 
        :to="'/user/' + $route.params.id + '/edit'"
        class="btn btn-primary">Edit</router-link> -->
        <!-- routes ekegantly to a given place -->
        <router-link 
        tag="button" 
        :to="link"
        class="btn btn-primary">Edit</router-link>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                link: { 
                    name: 'userEdit', 
                    params: { 
                        id: this.$route.params.id 
                    }, 
                    query: { 
                        locale: 'en', 
                        q: 100 
                    },
                    hash: '#data'  
                    }
            }
        },
        beforeRouteEnter(to, from, next) {
            //wihthout next() the object wont be fuly initialized
            if (true) {
                next();
            } else {
            next(false);
            }
        }
    }
</script>