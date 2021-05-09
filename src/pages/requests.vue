<script>
    import Api from '../sevices/api';
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                allRequests: [],
                acceptedRequests: [],
                skillNames: []
            };
        },
        async created() {
            this.skillNames = this.skills.map(skill => skill.name)
            this.allRequests = await Api.post('skills', this.skillNames);
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
.container-center
    .dv(v-if="allRequests.length >0")
        .request(v-for="request in allRequests")
            h3 {{ request.name }}
            span.skills(v-for="skill in request.skills") {{skill}}
            p {{ request.startDate }} - {{ request.endDate }}
            button(@click="onAccepted(request)") Accept
    .vd(v-else) No data found. Try to choose different skills

                                
</template>

<style lang="scss" scoped>
.request {
   background-color: rgb(255, 255, 255);
   width: 60%;
   padding: 0px 20px 20px 20px;
   margin: 0px;
   margin-top: 10px;
   margin-bottom: 10px;
   border: solid 1px rgb(228, 228, 228);
   border-radius: 7px;
   
}
.skills {
    margin: 2px;
    color: rgb(36, 105, 59);
    font-size: 13px;
    border-radius: 2px;
    background-color:rgb(206, 209, 206);
    color: white;
    padding: 3px 6px;
    
}
</style>
