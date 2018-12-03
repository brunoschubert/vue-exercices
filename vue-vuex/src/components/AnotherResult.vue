<template>
    <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: {
            /*
            * Take all properties from mapGetters()obj; recreates them 'locally'
            * Allows creation of own computed properties
            * Requires package 'npm install --save-dev babel-preset-stage-2'
            * Requires line: '["stage-2"]' on babel.rc
            */
             ...mapGetters([
                'doubleCounter',
                'stringCounter'
            ])
        }
    }
</script>