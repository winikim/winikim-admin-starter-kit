<template>
  <div class="admin-user-container">
    <h1>{{ $t('title.admin.user') }}</h1>
    <el-button
      type="primary"
      icon="el-icon-circle-plus"
      class="create-button"
      @click="dialogFormVisible = true"
    >
      {{ $t('label.admin.user.create') }}
    </el-button>
    <AdminUserUIComponent
      :loading-visible="loadingVisible"
      :admin-users="adminUsers"
      @delete-admin-user="handleDeleteAdminUser"
    />
  <el-dialog title="관리자 추가" :visible.sync="dialogFormVisible">
  <el-form :model="addAdminUserForm">
    <el-form-item label="관리자 아이디" label-width="120px">
      <el-input v-model="addAdminUserForm.username"></el-input>
    </el-form-item>
    <el-form-item label="관리자 비밀번호" label-width="120px">
      <el-input autocomplete="off" type=password v-model="addAdminUserForm.password"></el-input>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">취소</el-button>
    <el-button type="primary" @click="addAdminUser()">추가</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AdminUserUIComponent from './components/AdminUser.vue'
import { AdminUser, AddAdminUser } from '@/api/type/admin-user/admin-user'
import { ParameterOfPagination } from '@/api/type/parameter/parameter'
import { WinikimException } from '@/exception/winikim-exception'
import { AdminUserApi } from '@/api/admin-user-api'

@Component({
  name: 'AdminUserUI',
  components: {
    AdminUserUIComponent
  }
})
export default class AdminUserUI extends Vue {
  private adminUserApi = new AdminUserApi();
  private adminUsers: AdminUser[] = []
  private parameterOfPagination: ParameterOfPagination = new ParameterOfPagination();
  private totalElements = 0
  private pageSize = 8; // 한 페이지에 나타낼 아이템 갯수
  private loadingVisible = false;
  private dialogFormVisible = false;
  private addAdminUserForm = {
    username: '',
    password: ''
  }

  created() {
    this.parameterOfPagination.$size = this.pageSize
    this.fetchAdminUserList()
  }

  private fetchAdminUserList() {
    this.loadingVisible = true
    this.adminUserApi.fetchAdminUserList(this.parameterOfPagination)
      .then((result) => {
        this.adminUsers = result.$adminUsers
        this.totalElements = result.$totalElements
        this.loadingVisible = false
      })
      .catch((err: WinikimException) => {
        this.$notify.error({
          title: this.$t('error.admin.user.fetchList').toString(),
          message: err.$message
        })
      })
  }

  private handleDeleteAdminUser(id: number) {
    this.adminUserApi.deleteAdminUser(id)
      .then(() => {
        this.$notify.success({
          title: this.$t('success.name').toString(),
          message: this.$t('success.admin.user.delete').toString()
        })
        if (this.totalElements % this.pageSize === 1) {
          console.log(this.parameterOfPagination.$page)
        }
        this.fetchAdminUserList()
      }).catch((err: WinikimException) => {
        this.$notify.error({
          title: this.$t('error.name').toString(),
          message: err.$message
        })
      })
  }

  private addAdminUser() {
    const addAdminUser = new AddAdminUser()
    addAdminUser.$username = this.addAdminUserForm.username
    addAdminUser.$password = this.addAdminUserForm.password
    this.adminUserApi.addAdminUser(addAdminUser)
      .then(() => {
        this.$notify.success({
          title: this.$t('label.admin.user.create').toString(),
          message: this.$t('success.admin.user.create').toString()
        })
        this.fetchAdminUserList()
        this.dialogFormVisible = false
      })
      .catch((error: WinikimException) => {
        this.$notify.error({
          title: this.$t('label.admin.user.create').toString(),
          message: error.$message
        })
      })
  }
}

</script>
<style>
.create-button{
  float:right;
}
</style>
