<script>
    import { mapMutations } from 'vuex'

    export default {
        data() {
            return {
                skills: [
                    {
                        name: 'javascript',
                        rate: 0
                    },
                    {
                        name: 'swift',
                        rate: 0
                    },
                    {
                        name: 'python',
                        rate: 0
                    },
                    {
                        name: 'PHP',
                        rate: 0
                    },
                    {
                        name: 'java',
                        rate: 0
                    },
                    {
                        name: 'kotlin',
                        rate: 0
                    },
                    {
                        name: 'objective c',
                        rate: 0
                    },
                    {
                        name: 'devops',
                        rate: 0
                    },
                    {
                        name: 'UX design',
                        rate: 0
                    },
                    {
                        name: 'marketing',
                        rate: 0
                    }
                ],
                chosenSkills: [],
            };
        },
        methods: {
            ...mapMutations({
                setUserSkills: 'SET_USER_SKILLS',
            }),
            toggleSkill(skill) {
                if(this.chosenSkills.includes(skill)) {
                    this.chosenSkills = this.chosenSkills.filter(value => value !== skill)
                } else {
                    this.chosenSkills.push(skill)
                }
            },
            async setSkills() {
                this.setUserSkills(this.chosenSkills)
                this.$router.push({ name: 'requests' })
            }
        }
    };
</script>

<template lang="pug">
.container
    .container-center
        p Choose at least 3 skills
        div(v-for="(skill, i) in skills")   
            button.btn-skill(
                :class="chosenSkills.includes(skill) ? 'highlight': 'nope'",
                @click="toggleSkill(skill)"
            ) {{ skill.name }}
            .slider(v-show="chosenSkills.includes(skill)")
                div.additional-info 
                    div.additional-info-text Indicate your experience
                el-slider.slider-skills(
                    v-model="skill.rate"
                    :step="1"
                    :max="10"
                    show-stops
                )
            div.separator

        button.btn-submit(
            :disabled="chosenSkills.length < 3",
            @click="setSkills"
            ) Submit                           
</template>

<style lang="scss">
.separator{
    clear: left;
}
.btn-skill {
    padding: 6px;
    border:none;
    color: #5f6063;
    border-radius: 3px;
    width: 80px;
    margin-bottom: 8px;
}
.highlight {
    background-color: #a2e7b7;
    color: #444547;
    float: left;
}
.additional-info {
    float: left;
    padding: 7px;
    // padding-left: 90px;
    font-size: 12px;
    color: #9c9c9c;
}

.slider-skills {
    float: left;
    width: 40%;
}


.el-slider__runway {
    margin: 12px;
}
.el-slider__bar {
    height: 6px;
    background-color: #34996a;
}
.el-slider__button {
    width: 10px;
    height: 10px;
    border: 2px solid #2c7c5b;
    background-color: #FFF;
    border-radius: 50%;
    transition: .2s;
    }
.el-slider__stop {
    background-color: #E4E7ED;
}
    
</style>
