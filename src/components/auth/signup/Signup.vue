<template>
    <div class="signup">
        <h2>{{'auth.createNewAccount' | translate}}</h2>
        <h4>Geen account? Mail ons</h4>
        <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
            <router-link class='link' :to="{name: 'login'}">{{'auth.alreadyJoined' | translate}}</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'signup',
}
</script>

<style lang="scss">
    .signup {
        @include media-breakpoint-down(md) {
            width: 100%;
            padding-right: 2rem;
            padding-left: 2rem;
            .down-container {
                .link {
                    margin-top: 2rem;
                }
            }
        }

        h2 {
            text-align: center;
        }
        width: 21.375rem;

        .down-container {
            margin-top: 2.6875rem;
        }
    }
</style>
