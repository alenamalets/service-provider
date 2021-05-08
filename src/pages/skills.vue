<script>
    export default {
        data() {
            return {
                skills: ['Javascript', 'Go', 'PHP', 'Python', 'Jest', 'CSS'],
                chosenSkills: [],
                value: 0
            };
        },
        methods: {
            toggleSkill(skill) {
                if(this.chosenSkills.includes(skill)) {
                    this.chosenSkills = this.chosenSkills.filter(value => value !== skill)
                } else {
                    this.chosenSkills.push(skill)
                }
                console.log('this.chosenSkills', this.chosenSkills)
            },
            async getRequests() {
                this.$router.push({ name: 'requests' })
            }
        }
    };
</script>

<template lang="pug">
.container
    p Choose at least 3 skills
    div(v-for="(skill, i) in skills")   
        button(
            :class="chosenSkills.includes(skill) ? 'highlight': 'nope'",
            @click="toggleSkill(skill)"
        ) {{ skill }}
        .slider(v-show="chosenSkills.includes(skill)")
            span Indicate your experience
            el-slider(
                v-model="value"
                :step="1"
                :max="10"
                show-stops
            )
    button(
        :disabled="chosenSkills.length < 3",
        @click="getRequests"
        ) Submit                           
</template>

<style>
.highlight {
    color: red
}
</style>
