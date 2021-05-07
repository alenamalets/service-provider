<script>

export default {
    props: {
        value: {
            required: true
        },
        type: {
            type: String,
            required: false,
            default: 'text'
        },
        attribute: {
            type: String,
            required: true
        },
        label: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        rules: {
            type: String,
            default: ''
        },
        showErrors: {
            type: Boolean,
            default: true
        },
    },
    computed: {
        innerValue: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input', val)
            }
        }
    }
}
</script>

<template lang="pug">
validation-provider(
    :name="attribute",
    :rules="rules",
    v-slot="{ errors }"
)
    label(
        :for="attribute",
    ) {{ label || attribute }}

    input(
        :type="type",
        v-model="innerValue",
        :id="attribute",
        :placeholder="placeholder || label",
    )

    small(
        v-show="showErrors && errors"
    ) {{ errors[0] }}
</template>
