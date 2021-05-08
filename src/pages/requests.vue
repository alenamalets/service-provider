<script>
    import Api from '../sevices/api';
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                allRequests: [],
                acceptedRequests: []
            };
        },
        async created() {
            this.allRequests = await Api.post('skills', this.skills);
        },
        computed: {
            ...mapGetters({
                skills: 'skills',
            }),
        },
        methods: {
            onAccepted(val) {
                const checkStartDate = this.acceptedRequests.find(request => {
                    const x = new Date(request.startDate);
                    const y = new Date(val.startDate);
                    console.log('x', x)
                    console.log('y', y)
                    request.startDate == val.startDate
                })
                console.log('checkStartDate', checkStartDate)
                if (checkStartDate) {
                    alert("You cannot choose requests with the same start date!");
                } else {
                    this.acceptedRequests.push(val)
                }        
                console.log('val', this.acceptedRequests)
            },
        }
    };
</script>

<template lang="pug">
.container
    .dv(v-if="allRequests.length >0")
        .requests(v-for="request in allRequests")
            h3 {{ request.name }}
            .skills(v-for="skill in request.skills")
                span {{skill}}
            p {{ request.startDate }} - {{ request.endDate }}
            button(@click="onAccepted(request)") Accept
    .vd(v-else) No data found. Try to choose different skills

                                
</template>

<style>
.highlight {
    color: red
}
</style>
