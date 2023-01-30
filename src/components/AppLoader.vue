<script>
export default {
    name: 'AppLoader'
}
</script>

<template>
    <div id="loader" class="d-flex flex-column justify-content-center align-items-center">
        <i class="fa-solid fa-spinner fa-5x fa-spin mb-3"></i>
        <h2>CARICAMENTO...</h2>
    </div>
</template>

<style lang="scss" scoped>
#loader {
    position: fixed;
    top: 130px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($color: black, $alpha: 0.6);
}
</style>