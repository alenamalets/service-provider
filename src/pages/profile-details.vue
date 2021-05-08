<script>
    import TextInput from '../components/text-input'

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
                },
            };
        },
        methods: {
            onSubmit() {
                this.$router.push({ name: 'skills' })
            },
        }
    };
</script>

<template lang="pug">
validation-observer.form-wrapper(
    tag="div",
    v-slot="{ invalid, pristine, handleSubmit }",
)
    form(
        @submit.prevent="handleSubmit(onSubmit)"
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
        button(
            type="submit",
            :disabled="invalid || pristine",
        ) Next

</template>

<style lang="scss" scoped>
</style>
