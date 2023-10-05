<script lang="ts">
    import BoxSelection from "./BoxSelection.svelte"
</script>

<div class="bg-main grow flex flex-col items-center justify-center">
    <BoxSelection></BoxSelection>
</div>

<style>
    .bg-main{
        background: url("bg/bg.png");
        min-height: 100vh;
        background-size: cover;
        background-position: 50% 50%;
    }
</style>