<script>
import BaseLayout from './layouts/base-layout'
import ProfileDetails from './pages/profile-details'

export default {
    components: {
        BaseLayout,
        ProfileDetails
    },
}
</script>

<template lang="pug">
  #app
    base-layout
    router-view
  
</template>
