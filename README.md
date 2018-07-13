# v-highlight

vue highlight directive
Vue 2 关键字高亮钩子

### Installation

```
npm install v-highlight --save
```

```
import Highlight from 'v-highlight';
export default {
    name: 'example',
    data () {
        return {
            words: ['a']
        };
    },
    directives: {
        Highlight
    }
};
```

```
<p v-highlight="{keyword: words}">Tropical birds scattered as Drake veered the Jeep onto an old rutted track, snapping branches and tearing away vines, plowing through the rain forest with killers in pursuit, bullets flying, a gorgeous but pouty girl in the passenger’s seat, and a bitch of a headache. With only one of his arms on the wheel, the Jeep slewed to the left, and the pouty girl screamed as he forced the vehicle back onto the trail just before they would have crashed into a felled tree.</p>
```

## API

### Table Attributes

| 属性          | 说明         | 类型            | 参数 | 默认值 |
| ------------- | ------------ | --------------- | ---- | ------ |
| caseSensitive | 大小写敏感   | Boolean         | -    | false  |
| class         | 高亮样式名称 | String          | -    | -      |
| keyword       | 关键字       | String \| Array | -    | -      |
