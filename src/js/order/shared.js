// 导入库
import { ref } from "vue";
import axios from "axios";
import { ElMessage } from 'element-plus';

// 全局变量
export const dialogOrderAddVisible = ref(false);
export const dialogOrderUpdateVisible = ref(false);
export const tableData = ref([]);  // 表格数据
export const formLabelWidth = '140px' // 表单标签(label)宽度
export const loading = ref(false);


// -------------------- 下拉框常用变量 start --------------------
// 产品类型: 鼠标：单模、双模、有线等
export const pddProductTypeOptions = [
  { label: '无线单模', value: '无线单模' },
  { label: '无线双模', value: '无线双模' },
  { label: '有线', value: '有线' },
]

// 产品颜色
export const pddProductColorOptions = [
  { label: '黑色', value: '黑色' },
  { label: '白色', value: '白色' },
  { label: '粉色', value: '粉色' },
]

// 订单状态
export const pddOrderStatusOptions = [
  { label: '待付款', value: '待付款' },
  { label: '待发货', value: '待发货' },
  { label: '已发货，待收货', value: '已发货，待收货' },  // 中文逗号
  { label: '已收货', value: '已收货' },
  { label: '无售后/取消售后', value: '无售后/取消售后' },
  { label: '售后处理中', value:'售后处理中' },
  { label: '退款中', value:'退款中' },
  { label: '退款成功', value:'退款成功' },
  { label: '无售后/售后处理中', value:'无售后/售后处理中' },
  { label: '已发货，退款成功', value:'已发货，退款成功' },
  { label: '未发货，退款成功', value:'未发货，退款成功' },
  { label: '已收货，退款成功', value:'已收货，退款成功' },
]

// 是否加入黑名单
export const pddIsBlackListOptions = [
  { label: '否', value: false },
  { label: '是', value: true },
]

// 快递公司
export const pddExpressCompanyOptions = [
  { label: '韵达快递', value: '韵达快递' },
  { label: '极兔快递', value: '极兔快递' },
  { label: '顺丰快递', value: '顺丰快递' },
  { label: '申通快递', value: '申通快递' },
  { label: '圆通快递', value: '圆通快递' },
  { label: '中通快递', value: '中通快递' },
]

// 代发平台
export const dropShippingPlatformOptions = [
  { label: '拼多多', value: '拼多多' },
  { label: '京东', value: '京东' },
  { label: '淘宝', value: '淘宝' },
  { label: '1688', value: '1688' },
  { label: '其他', value: '其他' },
]


// -------------------- 下拉框常用变量 end --------------------

// -------------------- 方法相关: 公用方法 start --------------------
export const getOrders = async () => {
  loading.value = true; // 开始加载
  try {
    const response = await axios.get('/api/orders');
    ElMessage('获取成功');
    // tableData.value = response.data; // 报错？
    tableData.value = Array.isArray(response.data) ? response.data : []; // 不加判断，有报错：index-BPopdcVd.js:13 TypeError: n.reduce is not a function
  } catch (error) {
    console.error('获取失败:', error);
    ElMessage('获取失败，请稍后重试');
  } finally {
    loading.value = false; // 结束加载
  }
  
};
// -------------------- 方法相关: 公用方法 end --------------------
