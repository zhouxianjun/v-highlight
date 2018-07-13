import Highlight from './highlight';
export default {
    bind (el, binding) {
        binding.def.ref = new Highlight(el);
        binding.def.ref.apply(binding);
    },
    componentUpdated (el, binding) {
        binding.def.ref.update(binding);
    },
    unbind (el, binding) {
        binding.def.ref.remove(binding);
    }
};
