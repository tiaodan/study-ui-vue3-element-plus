<template>
  <p>订单表格</p>
  <el-button type="primary" @click="getOrders">获取订单数据</el-button>
  <el-button type="primary" @click="dialogOrderAddVisible = true">新增</el-button>
  <el-button type="primary" @click="dialogOrderUpdateVisible = true">修改</el-button>
  <OrderAdd />
  <OrderUpdate />
  <!-- 表格 -->
  <el-table :data="tableData" stripe style="width: 100%">
    <!-- 拼多多相关信息 -->
    <el-table-column prop="pddOrderId" label="PDD订单号" />
    <el-table-column prop="pddOrderTime" label="购买时间" />
    <el-table-column prop="pddOrderPrice" label="购买价格" />
    <el-table-column prop="pddProductType" label="产品类型" />
    <el-table-column prop="pddProductColor" label="颜色" />
    <el-table-column prop="pddOrderStatus" label="订单状态" />
    <el-table-column prop="pddBuyerInfo" label="买家信息" />
    <el-table-column prop="pddExpressCompany" label="快递公司" />
    <el-table-column prop="pddExpressId" label="物流编号" />
    <el-table-column prop="pddIsBlackList" label="买家拉黑" />
    <el-table-column prop="pddRemark" label="pdd备注" />
    <!-- 代发平台相关信息 -->
    <el-table-column prop="dropShippingPlatform" label="代发平台" />
    <el-table-column prop="dropShippingOrderId" label="代发订单号" />
    <el-table-column prop="dropShippingOrderTime" label="代发购买时间" />
    <el-table-column prop="dropShippingFactoryName" label="代发厂家名" />
    <el-table-column prop="dropShippingRealPrice" label="代发实际价" />
    <el-table-column prop="dropShippingPrice" label="购买价格" />
    <el-table-column prop="dropShippingDiscountPrice" label="优惠" />
    <el-table-column prop="dropShippingRemark" label="代发备注" />
  </el-table>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { ElMessage } from 'element-plus';
// 导入自己写的组件
import OrderAdd from './OrderAdd.vue';

// 导入共享变量
import { dialogOrderAddVisible } from '@/js/order/shared'; // 引入共享变量 为啥用@/js
import { dialogOrderUpdateVisible } from '@/js/order/shared'; // 引入共享变量 为啥用@/js
import OrderUpdate from './OrderUpdate.vue';

// 定义变量
const tableData = ref([]);


// 新增 getOrders 方法
const getOrders = async () => {
  try {
    const response = await axios.get('/api/orders'); // 替换为实际的 API 地址，这样写不行，未定位原因
    // const response = await axios.get('http://localhost:8888/orders'); // 替换为实际的 API 地址
    tableData.value = response.data; // 将返回的数据赋值给 tableData
    ElMessage('获取订单数据成功')
  } catch (error) {
    console.error('获取订单数据失败:', error);
    // alert('获取订单数据失败，请稍后重试');
    ElMessage('获取订单数据失败，请稍后重试')
  }
};

// 页面加载时自动请求
onMounted(() => {
  getOrders();
});




// 定义变量
/*
订单管理：
PDD
- 拼多多订单号 pddOrderId
- 购买时间 pddOrderTime
- 购买价格 pddOrderPrice
- 有线、无线 pddProductType   - 模态：单模、双模 （无线才分单双模）
- 颜色 pddProductColor
- 订单状态：待付款、待发货、待收货、退款售后 （已发货、已收货、已退款） pddOrderStatus
- 买家信息 pddBuyerInfo
- 快递公司：韵达、极兔  pddExpressCompany
- 物流编号 pddExpressId
- 拉黑情况 pddIsBlackList
- 备注 pddRemark

代发相关：（1个订单可以绑定多个代发订单，为了1.防止某个商家不发货 2.对比价格）
- 代发平台：1688、拼多多、淘宝 dropShippingPlatform
- 代发平台订单号 dropShippingOrderId
- 代发厂家名称 dropShippingFactoryName
- 代发实际价格 dropShippingRealPrice
- 购买价格 dropShippingPrice
- 优惠价格 dropShippingDiscountPrice
- 备注 dropShippingRemark
*/
const tableDataTest = [
  {
    pddOrderId: '1',
    pddOrderTime: '2021-01-01 00:00:00',
    pddOrderPrice: '100.00',
    pddProductType: '单模',
    pddProductColor: '蓝色',
    pddOrderStatus: '待付款',
    pddBuyerInfo: '张三',
    pddExpressCompany: '韵达',
    pddExpressId: '1234567890',
    dropShippingPlatform: '拼多多',
    dropShippingOrderId: '1',
    dropShippingFactoryName: '工厂1',
    dropShippingRealPrice: '100.00',
    dropShippingPrice: '100.00',
    dropShippingDiscountPrice: '100.00',
    dropShippingRemark: '备注'
  },
  {
    pddOrderId: '2',
    pddOrderTime: '2021-01-01 00:00:00',
    pddOrderPrice: '100.00',
    pddProductType: '单模',
    pddProductColor: '蓝色',
    pddOrderStatus: '待付款',
    pddBuyerInfo: '张三',
    pddExpressCompany: '韵达',
    pddExpressId: '1234567890',
    dropShippingPlatform: '拼多多',
    dropShippingOrderId: '1',
    dropShippingFactoryName: '工厂1',
    dropShippingRealPrice: '100.00',
    dropShippingPrice: '100.00',
    dropShippingDiscountPrice: '100.00',
    dropShippingRemark: '备注'
  },
  {
    pddOrderId: '3',
    pddOrderTime: '2021-01-01 00:00:00',
    pddOrderPrice: '100.00',
    pddProductType: '单模',
    pddProductColor: '蓝色',
    pddOrderStatus: '待付款',
    pddBuyerInfo: '张三',
    pddExpressCompany: '韵达',
    pddExpressId: '1234567890',
    dropShippingPlatform: '拼多多',
    dropShippingOrderId: '1',
    dropShippingFactoryName: '工厂1',
    dropShippingRealPrice: '100.00',
    dropShippingPrice: '100.00',
    dropShippingDiscountPrice: '100.00',
    dropShippingRemark: '备注'
  }
]


</script>