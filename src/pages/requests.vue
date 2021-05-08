<script>
    import Api from '../sevices/api';

    export default {
        data() {
            return {
                data: []
            };
        },
        async created() {
            this.data = await Api.post('skills');
            console.log('api response', this.data)
        },
        methods: {
        }
    };
</script>

<template lang="pug">
.container
    .requests(v-for="item in data")
        h3 {{ item.name }}
        .skills(v-for="skill in item.skills")
            span {{skill}}
        p {{ item.startDate }} - {{ item.endDate }}
        button(@click) Accept
        button(@click) Decline

                                
</template>

<style>
.highlight {
    color: red
}
</style>
