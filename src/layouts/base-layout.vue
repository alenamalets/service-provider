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

<style lang="scss">
body {
    margin: 0px;
    font-family: Arial, Helvetica, sans-serif;
}
 .container-center {
    margin: 0 auto;
    width: 80%;
}

.form-content {
    min-width: 375px;
    background-color: rgb(181, 216, 191);
}

.logo {
    display: flex;
    justify-content: center;
}
.btn-submit {
    padding: 6px;
    background: #79c255;
    border-color: #79c255;
    color: #fff;
    width: 80px;
    border:none;
    margin-top: 30px;
    border-radius: 3px;
}
.btn-submit:disabled{
    background-color: #d3d3d4;
}
</style>
