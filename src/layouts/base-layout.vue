<script>
import Logo from '../components/logo'

export default {
    components: {
        Logo
    },
};
</script>

<template lang="pug">
.container
    .form-content
        .logo
            logo
</template>

<style lang="scss" scoped>
.form-content {
    min-width: 375px;
    background-color: red;
}

.logo {
    display: flex;
    justify-content: center;
}
</style>
