<template>
    <div>
        <h1>Dashboard</h1>
        <div class='content-vp'>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pictures: [
                    { url: './Client/assets/duelGundam_mg.jpg', name: 'duelGundam_mg', id: 1 },
                    { url: './Client/assets/aileStrike_mg.jpeg', name: 'aileStrike_mg', id: 2 },
                    { url: './Client/assets/wingEW.jpg', name: 'wingEW', id: 3 }
                ]
            };
        }
    };
</script>

<style>
    
</style>
