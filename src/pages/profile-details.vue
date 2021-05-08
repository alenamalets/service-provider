<script>
    import Datepicker from 'vuejs-datepicker';
    import TextInput from '../components/text-input'
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        components: {
            TextInput,
            Datepicker
        },
        data() {
            return {
                user: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    dateOfBirth: ''
                },
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
            h3 Fill in your profile details
            img.image(id="output")
            button.btn(class="btn btn-info" @click="onPickFile") Upload profile picture
            input(
                type="file"
                ref="fileInput"
                style="display: none"
                accept="image/*"
                @change="onFilePicked"
            )
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
            label(
                class="input-label"
                :for="attribute",
            ) Date of birth
            datepicker(v-model="user.dateOfBirth" input-class="input-text" placeholder="Select date")
            button.btn(
                type="submit",
                :disabled="invalid || pristine",
            ) Next

</template>

<style lang="scss" scoped>
.image {
    height: 96px;
    width: 96px;
    background-color: lightgrey;
    border-radius: 50%;
}
.btn {
    padding: 6px;
    background: #79c255;
    border-color: #79c255;
    color: #fff;
}
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
.input-label {
    font-size: 16px;
    font-weight: 300;
}
.input-text {
    border: 1px solid #e9ecef;
    padding: 16px;
    font-size: 12px;
    font-weight: 300;
}
</style>
