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
        }
    };
</script>

<template lang="pug">
.container
    p hello
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

</template>

<style lang="scss" scoped>
</style>
