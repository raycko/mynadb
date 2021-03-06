<template>
    <ul class="wizard-steps horizontal-steps simple-steps" :class="{'completed': completed}">
        <li
            v-if="steps"
            class="wizard-step"
            :class="{'active': currentStep >= index, 'current': currentStep === index}"
            :style="{ width: 100/steps.length + '%' }"
            v-for="(step, index) of steps"
            :key="index"
        >
            <span class="wizard-step-line"/>
            <span class="wizard-step-line completed-line"/>
            <span class="wizard-step-label ellipsis">{{step.label}}</span>
            <span class="wizard-step-indicator"/>
        </li>
        <li
            v-if="!steps"
            class="wizard-step"
            :style="{ height: 100 + '%' }"
            :class="{'active': isActive}"
        >
            <span class="wizard-step-line first-line"/>
            <span
                class="wizard-step-line completed-line"
                :class="{'makeActive': isActive}"
            />
            <span class="wizard-step-indicator"/>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'vuestic-wizard-simple-horizontal-indicator',
        props: {
            steps: {
                type: Array,
            },
            currentStep: {
                type: Number,
                default: 0,
            },
            completed: {
                type: Boolean,
                default: false,
            },
            step: {},
            isActive: {
                type: Boolean,
                default: false,
            },
            indexCurrent: {},
            indexMax: {},
        },
    }
</script>

<style lang="scss" scoped>
    $wizard-step-height: 3.75rem;
    $wizard-step-indicator-height: 1rem;
    $wizard-step-label-font-size: $font-size-h4;
    $wizard-label-width: 100%;
    $wizard-label-padding: 0 0.6rem;
    .wizard-steps {
        list-style-type: none;
        text-align: justify;
        -ms-text-justify: distribute-all-lines;
        text-justify: distribute-all-lines;
        padding: 0;
        height: $wizard-step-height;
        position: relative;
    }

    .wizard-step {
        height: $wizard-step-height;
        vertical-align: bottom;
        display: inline-block;
        text-align: center;
        position: relative;
        width: 100%;
        .wizard-step-line {
            position: absolute;
            width: 100%;
            left: -50%;
            bottom: 12px;
            height: 2px;
            background-color: $lighter-gray;
            transition: background-color 300ms linear;
            &.completed-line {
                &.makeActive {
                    background-color: $vue-green;
                }
                display: none;
                width: 50%;
                left: 50%
            }
        }
        .wizard-step-indicator {
            box-sizing: content-box;
            display: block;
            width: $wizard-step-indicator-height;
            height: $wizard-step-indicator-height;
            background-color: $lighter-gray;
            border-radius: 50%;
            position: absolute;
            left: 50%;
            margin-left: -7px;
            bottom: 5px;
            z-index: 1;
            transition: background-color 300ms linear;
        }
        .wizard-step-label {
            display: inline-block;
            width: $wizard-label-width;
            padding: $wizard-label-padding;
            color: $lighter-gray;
            font-size: $wizard-step-label-font-size;
            font-weight: bold;
            transition: color 300ms linear;
            @include media-breakpoint-only(sm) {
                font-size: $font-size-larger;
            }
            @include media-breakpoint-only(xs) {
                font-size: $font-size-base;
            }
        }
        &:first-child {
            overflow: hidden;
            .wizard-step-line {
            }
        }
        &:last-child {
            .wizard-step-line {
                &.completed-line {
                    display: block;
                }
            }
        }
        &.active {
            .wizard-step-indicator {
                background-color: $brand-primary;
            }
            .wizard-step-line:not(.completed-line), .completed & .wizard-step-line {
                background-color: $brand-primary;
            }
            .wizard-step-label, .completed &.current .wizard-step-label {
                color: $brand-primary;
            }
            &.current .wizard-step-label {
                color: $vue-darkest-blue;
            }
        }
    }
</style>
