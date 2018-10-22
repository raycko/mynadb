<template>
    <div class="auth-layout">
        <div class="nav d-lg-none">
            <router-link :to="{path: '/'}">
                <vuestic-icon-vuestic/>
            </router-link>
        </div>
        <div class="main row">
            <div class="auth-content col-lg-6 col-12">
                <router-view></router-view>
            </div>
            <div class="auth-wallpaper col-6 d-none d-lg-flex">
                <router-link class="auth-wallpaper__logo" :to="{path: '/'}">
                    <vuestic-icon-vuestic/>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import VuesticIconVuestic from '../../vuestic-theme/vuestic-components/vuestic-icon/VuesticIconVuestic'

    export default {
        name: 'AuthLayout',
        components: { VuesticIconVuestic },
    }
</script>

<style lang="scss">
    .auth-layout {
        height: 100vh;
        margin: 0;
        .nav {
            display: flex;
            align-items: center;
            justify-content: center;
            height: $top-mobile-nav-height;
            background-color: $top-nav-bg;
            .vuestic-icon-vuestic {
                height: $auth-mobile-nav-ivuestic-h;
                width: 100%;
            }
        }
        .main {
            margin: 0;
            height: 100%;
            .auth-content {
                padding: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: white;
            }
            .auth-wallpaper {
                background-color: $top-nav-bg;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                &__logo {
                    z-index: 2;
                    width: 50%;
                }
                .vuestic-icon-vuestic {
                    width: 100%;
                }
            }
        }

        @include media-breakpoint-down(md) {
            .main {
                height: $auth-mobile-main-h;
                .auth-content {
                    align-items: flex-start;
                    padding-top: $auth-content-padding-t;
                }
            }
        }
    }
</style>
