<template>
    <div style="margin: 10px">
        <div style="margin-bottom:10px">
            <label>关键字：</label>
            <button @click="add">新增</button>
            <input style="width:100px;margin-right:10px;" v-for="(w, index) in words" :key="index" type="text" v-model="words[index]" />
        </div>
        <label>原文：</label>
        <textarea rows="10" cols="50"></textarea>
        <p v-highlight="{keyword: words}">Tropical birds scattered as Drake veered the Jeep onto an old rutted track, snapping branches and tearing away vines, plowing through the rain forest with killers in pursuit, bullets flying, a gorgeous but pouty girl in the passenger’s seat, and a bitch of a headache. With only one of his arms on the wheel, the Jeep slewed to the left, and the pouty girl screamed as he forced the vehicle back onto the trail just before they would have crashed into a felled tree.</p>
    </div>
</template>
<script>
import Highlight from '../src/index';
// import Highlight from '../dist/v-highlight';
export default {
    name: 'example',
    data () {
        return {
            words: ['a']
        };
    },
    directives: {
        Highlight
    },
    methods: {
        add () {
            this.words.push('');
        }
    }
};
</script>
