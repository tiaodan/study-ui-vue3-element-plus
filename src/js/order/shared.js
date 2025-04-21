// 导入库
import { ref } from "vue";
import axios from "axios";
import { ElMessage } from 'element-plus';

// 全局变量
export const dialogOrderAddVisible = ref(false);
export const dialogOrderUpdateVisible = ref(false);
export const tableData = ref([]);  // 表格数据

// 公用方法
export const getOrders = async () => {
    try {
      const response = await axios.get('/api/orders');
      ElMessage('获取成功');
      tableData.value = response.data;
    } catch (error) {
      console.error('获取失败:', error);
      ElMessage('获取失败，请稍后重试');
    }
  };
