<script>
    import moment from 'moment';
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
            formattedDate(val) {
                return moment(val).format('DD.MM.YYYY');
            },
            onAccepted(val) {
                if (this.acceptedRequests.length > 0) {
                    const checkStartDate = this.acceptedRequests.find(request => {
                        return moment(request.startDate).isSame(val.startDate, 'day');
                    })
                    if(!checkStartDate) {
                        this.acceptedRequests.push(val)
                    } else {
                        alert('You cannot choose requests with the same start date')
                    }
                    console.log('this.acceptedRequests', this.acceptedRequests)
                } else {
                    this.acceptedRequests.push(val)
                }        
            },
            onDecline(val) {
                this.acceptedRequests = this.acceptedRequests.filter(request => request !== val)
            }
        }
    };
</script>

<template lang="pug">
.container-center
    .dv(v-if="allRequests.length >0")
        .request(
            :class="acceptedRequests.includes(request) ? 'highlighted': 'nope'",
            v-for="request in allRequests"
            )
            h3 {{ request.name }}
            span.skills(v-for="skill in request.skills") {{skill}}
            p.dates-scope {{ formattedDate(request.startDate) }} - {{ formattedDate(request.endDate) }}
            div(v-if="acceptedRequests.includes(request)")
                button.decline-button(@click="onDecline(request)") Decline
            div(v-else)
                button.accept-button(@click="onAccepted(request )") Accept
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
.highlighted {
     border: solid 2px rgb(80, 146, 84);
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
.dates-scope {
    font-size: 12px;
    color: #363f328f;
}
.accept-button {
    padding: 6px;
    background: #79c255;
    border: none;
    color: #fff;
    border-radius: 2px;
    width: 60px;
    cursor: pointer;
    &:hover {
        background: #67a549;
    }
}
.decline-button {
    padding: 6px;
    background: #c27d55;
    border: none;
    color: #fff;
    border-radius: 2px;
    width: 60px;
    cursor: pointer;
    &:hover {
        background: #ac6740;
    }
}

</style>
