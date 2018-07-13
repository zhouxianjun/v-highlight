import uuid from 'uuid/v4';
class Highlight {
    constructor (el) {
        this.el = el;
        this.key = `mark-${uuid()}`;
    }
    updateConfig (binding) {
        let cfg = Object.assign(this.cfg || {caseSensitive: false, class: []}, binding.value);
        if (!cfg.keyword || !cfg.keyword.length) {
            throw new Error('keyword must be not null');
        }
        cfg.class = Array.from(cfg.class);
        cfg.keyword = Array.from(cfg.keyword).filter(k => k.length);
        // 最小的关键字长度(减少不必要的匹配)
        cfg.minLength = Math.max(...cfg.keyword.map(word => word ? word.length : 0));
        // 生成正则
        cfg.regex = new RegExp(`(${cfg.keyword.map(word => word.replace(/[-\\^$*+?.()|[\]{}/]/g, '\\$&')).join('|')})`, cfg.caseSensitive ? 'g' : 'ig');
        this.cfg = cfg;
    }
    apply (binding) {
        this.updateConfig(binding);
        this.findNodes().filter(node => node.textContent.length >= this.cfg.minLength).forEach(node => {
            let mark = document.createElement('mark');
            mark.innerHTML = node.textContent.replace(this.cfg.regex, `<mark data-mark-key="${this.key}" class="${this.cfg.class.join(' ')}">$1</mark>`);
            mark.childNodes.forEach((item) => node.parentNode.insertBefore(item.cloneNode(true), node));
            node.parentNode.removeChild(node);
        });
    }
    remove (binding) {
        this.updateConfig(binding);
        this.el.querySelectorAll(`mark[data-mark-key=${this.key}]`).forEach(item => {
            let parent = item.parentNode;
            parent.replaceChild(item.firstChild, item);
            parent.normalize();
        });
    }
    update (binding) {
        this.remove(binding);
        this.apply(binding);
    }
    findNodes () {
        let walk = document.createTreeWalker(this.el, NodeFilter.SHOW_TEXT, null, false);
        let result = [];
        while (walk.nextNode()) result.push(walk.currentNode);
        return result;
    }
}
module.exports = Highlight;
