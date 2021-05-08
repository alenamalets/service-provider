<script>
    import TextInput from '../components/text-input'
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        components: {
            TextInput,
        },
        data() {
            return {
                user: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    dateOfBirth: ''
                },
                imageUrl: ''
            };
        },
        async created() {
            if (this.currentUser) {
                this.user = this.currentUser
            }
        },
        computed: {
            ...mapGetters({
                currentUser: 'user',
            }),
        },
        methods: {
            ...mapMutations({
                setUserProfile: 'SET_USER_PROFILE',
            }),
            onSubmit() {
                this.setUserProfile(this.user)
                this.$router.push({ name: 'skills' })
            },
            onPickFile () {
                this.$refs.fileInput.click()
            },
            onFilePicked (event) {
                const image = document.getElementById('output');
                image.src = URL.createObjectURL(event.target.files[0]);
            }
        }
    };
</script>

<template lang="pug">
.container
    validation-observer.form-wrapper(
        tag="div",
        v-slot="{ invalid, pristine, handleSubmit }",
    )
        form(
            class="details-form"
            @submit.prevent="handleSubmit(onSubmit)"
        )   
            button(class="btn btn-info" @click="onPickFile") Upload profile picture
            input(
                type="file"
                ref="fileInput"
                style="display: none"
                accept="image/*"
                @change="onFilePicked"
            )
            img(id="output" width="200")
            text-input(
                v-model="user.firstName",
                attribute="firstName",
                label="First name",
                placeholder="Enter first name",
                rules="required"
            )
            text-input(
                v-model="user.lastName",
                attribute="lastName",
                label="Last name",
                placeholder="Enter last name"
            )
            text-input(
                v-model="user.email",
                attribute="email",
                label="Email",
                type="email",
                placeholder="Enter email",
                rules="required|email"
            )
            button(
                type="submit",
                :disabled="invalid || pristine",
            ) Next

</template>

<style lang="scss" scoped>
.container {
    margin: 2rem;
}
.details-form {
    width: 60%;
}
@media screen and (max-width: 767px) {
    .details-form {
        width: 100%;
    }
}
</style>
