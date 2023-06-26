<script setup>
    import {useData} from 'vitepress';
    const {params} = useData();
    console.log(111, params.value)
</script>
## GUIDE
- pkg: {{ $params }}
