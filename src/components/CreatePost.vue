<template>
    <FormKit label="Content" type="textarea" validation="required" v-model="content" />
    <p>{{ content }}</p>
</template> 



<script>
export default {
    data() {
        return {
            content: ""
        };
    },
};
</script>
