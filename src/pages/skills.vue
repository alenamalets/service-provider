<script>

    export default {
        data() {
            return {
                skills: ['firstSkill', 'secondSkill', 'thirdSkill', '4', '5'],
                chosenSkills: [],
                value: 0
            };
        },
        methods: {
            updateSkill(a) {
                console.log('a', a)
                console.log('chosenSkills', this.chosenSkills)
            },
            getRequests() {
                console.log('het')
            }
        }
    };
</script>

<template lang="pug">
.container
    p Choose 3 skills
    div(v-for="(skill, i) in skills")   
        input(type="checkbox" v-model="chosenSkills" :id="skill" :value="skill" @change="updateSkill")
        label {{ skill }}
            .slider
                span Range your skill
                el-slider(
                    v-model="value"
                    :step="1"
                    :max="10"
                    show-stops
                )
    button(@click="getRequests") Submit
            
</div>
                                
</template>

<style lang="scss" scoped>
</style>
