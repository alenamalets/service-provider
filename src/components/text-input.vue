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
    .input-container
        label(
            class="input-label"
            :for="attribute",
        ) {{ label || attribute }}
        .input-field
            input(
                class="input-text"
                :type="type",
                v-model="innerValue",
                :id="attribute",
                :placeholder="placeholder || label",
            )

        small.error(
            v-show="showErrors && errors"
        ) {{ errors[0] }}
</template>

<style lang="scss">
.error {
    color: lightcoral;
}
.input-label {
    font-size: 16px;
    font-weight: 300;
}
.input-text {
    border: 1px solid #e9ecef;
    padding: 16px;
    font-size: 12px;
    font-weight: 300;
    width: 100%;
}
.input-container {
    margin-bottom: 20px;
}
</style>
