<template>
  <div class="admin-user-list-container">
    <el-table
      v-loading="loadingVisible"
      :data="adminUsers"
      :fit="true"
      :highlight-current-row="true"
    >
      <el-table-column
        prop="username"
        :label="this.$t('label.username')"
        align="center"
      />
      <el-table-column
        :label="this.$t('label.delete')"
        align="center"
      >
        <template slot-scope="{row}">
          <el-button
            type="danger"
            size="mini"
            @click="deleteAdminUser(row.id)"
          >
            {{ $t('label.delete') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { AdminUser } from '@/api/type/admin-user/admin-user'

@Component({
  name: 'AdminUserUIComponent'
})
export default class AdminUserUIComponent extends Vue {
  @Prop(Array)
  private adminUsers!: AdminUser[]

  @Prop(Boolean)
  private loadingVisible!: boolean

  private deleteAdminUser(id: Number) {
    this.$emit('delete-admin-user', id)
  }
}

</script>

<style scoped>
.admin-user-list-container{
  text-align: center;
}
</style>
