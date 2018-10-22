<template>
    <vuestic-sidebar :hidden="isOpen">
        <template slot="menu">
            <sidebar-link :to="{ name: 'dashboard' }">
                <span slot="title">
                    <span class="sidebar-menu-item-icon vuestic-icon">
                        <i class="fa fa-bar-chart"></i>
                    </span>
                    <span>{{ $t('menu.dashboard') }}</span>
                </span>
            </sidebar-link>
            <sidebar-link :to="{ name: 'matches' }">
                <span slot="title">
                    <span class="sidebar-menu-item-icon vuestic-icon">
                        <i class="fa fa-calendar"></i>
                    </span>
                    <span>{{ $t('menu.matches') }}</span>
                </span>
            </sidebar-link>
            <sidebar-link :to="{ name: 'profile' }">
                <span slot="title">
                    <span class="sidebar-menu-item-icon vuestic-icon">
                        <i class="fa fa-user"></i>
                    </span>
                    <span>{{ $t('menu.profile') }}</span>
                </span>
            </sidebar-link>
            <sidebar-link :to="{ name: 'teams' }">
                <span slot="title">
                    <span class="sidebar-menu-item-icon vuestic-icon">
                        <i class="fa fa-users"></i>
                    </span>
                    <span>{{ $t('menu.teams') }}</span>
                </span>
            </sidebar-link>
            <sidebar-link :to="{ name: 'logout' }">
                <span slot="title">
                    <span class="sidebar-menu-item-icon vuestic-icon">
                        <i class="fa fa-power-off"></i>
                    </span>
                    <span>{{ $t('menu.logout') }}</span>
                </span>
            </sidebar-link>
        </template>
    </vuestic-sidebar>
</template>

<script>

    import VuesticSidebar
        from '../../../vuestic-theme/vuestic-components/vuestic-sidebar/VuesticSidebar'
    import SidebarLink from './components/SidebarLink'
    import SidebarLinkGroup from './components/SidebarLinkGroup'

    export default {
        name: 'app-sidebar',
        components: {
            VuesticSidebar,
            SidebarLink,
            SidebarLinkGroup
        },
        props: {
            isOpen: {
                type: Boolean,
                required: true
            }
        }
    }

</script>
<style lang="scss">
    .fa {
        width: 19px;
    }
</style>
