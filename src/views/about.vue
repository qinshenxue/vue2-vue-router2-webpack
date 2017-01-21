<template>
    <div class="about">
        <div class="test-less">测试less</div>
        <div class="test-sass">测试sass</div>
        <div class="test-stylus">测试stylus</div>
        <img src="../images/tree.png">
    </div>
</template>
<style>
    .about {
        background: #fff;
    }
    
    a {
        color: #000;
    }
</style>
<style lang="sass">
    $color: #eee;
    .about {
        background: $color;
    }
</style>
<script type="text/javascript">
require('../css/about.less');
require('../css/about.scss');
import '../css/about.styl';
    module.exports = {
        data(){
            return {
                page: 'about'
            }
        }
    }
</script>