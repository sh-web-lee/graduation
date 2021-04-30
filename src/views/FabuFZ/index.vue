<template>
  <div class="release-of-housing">
      <!-- 标题 -->
    <div class="rel_f1">
        <div class="f1_title">
            <h1>请你完善出租信息</h1>
        </div>
    </div>
    <!-- 填表 -->
    <div class="rel_f2">
        <div class="f2_form">
            <van-form @submit="onSubmit">
                <van-field
                    v-model="xiaoquname"
                    name="xiaoquname"
                    label="小区名"
                    placeholder=""
                    :rules="[{ required: true, message: '请填写小区名' }]"
                />
                <van-field
                    v-model="city"
                    name="city"
                    label="小区所在城市"
                    placeholder="城市"
                    :rules="[{ required: true, message: '请填写小区名' }]"
                />
                <!-- <van-divider /> -->
                <van-field
                    v-model="username"
                    name="type"
                    label="房屋户型"
                    placeholder="二居室"
                    :rules="[{ required: true, message: '请填写房屋户型' }]"
                />
                <van-field
                    v-model="advantage"
                    name="advantage"
                    label="小区优势"
                    placeholder="小区优势"
                    :rules="[{ required: true, message: '' }]"
                />
                <van-field
                    v-model="price"
                    name="price"
                    label="意向价格"
                    placeholder=""
                    :rules="[{ required: true, message: '' }]"
                />
                <van-field
                    v-model="sms"
                    center
                    clearable
                    name="phone"
                    label="联系电话"
                    placeholder="请输入短信验证码"
                    >
                    <template #button>
                        <van-button size="small" type="default">发送验证码</van-button>
                    </template>
                </van-field>
                 <van-field v-model="value" name="code" label="验证码" placeholder="验证码" />
                <div style="margin: 16px;">
                    <van-button  block color="#fe9a20"  native-type="submit">提交</van-button>
                </div>
                <h3>您的信息将被严格保密，仅用于Hi 租房委托</h3>
            </van-form>
        </div>
    </div>
  </div>
</template>

<script>
import { Todo } from '@/api/House/release'
import Vue from 'vue'
import { Form, Cell, CellGroup, Divider, Toast } from 'vant'

Vue.use(Form)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Divider)
export default {
  name: 'ReleaseOfHousing',
  data () {
    return {
      username: '',
      sms: '',
      value: '',
      xiaoquname: '',
      city: '',
      price: '',
      advantage: ''
    }
  },
  methods: {
    onSubmit (values) {
      // 构建对象
      const todo = new Todo()
      // 查询是否已存在该注册用户
      // 为属性赋值
      todo.set('City', values.city)
      todo.set('CommunityAdvantage', values.advantage)
      todo.set('Communityname', values.xiaoquname)
      todo.set('Price', values.price)
      todo.set('isexist', true)
      todo.set('type', values.type)
      todo.set('sms', values.phone)

      // 将对象保存到云端
      todo.save().then(() => {
        // 成功保存之后，执行其他逻辑
        Toast('发布成功')
        setTimeout(() => {
          this.$router.push({ path: '/mine' })
        }, 2000)
      }, (error) => {
        // 异常处理
        console.log('fail', error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.release-of-housing {
    width: 100%;
    height: 100%;
    .rel_f1 {
        width: 100%;
        height: 30%;
        background: linear-gradient(#FDC830, #F37335, #FF8C00);
        .f1_title {
            padding: 10vw 0 0 5vw;
            h1 {
                color: #fff;
                font-size: 5vw;
                letter-spacing: 0.7vw;
            }
        }
    }
    .rel_f2 {
        padding: 0 5vw;
        position: relative;
        top: -27vw;
        .f2_form {
            border: 1px solid #f1f1f1;
            padding-bottom: 8vw;
            border-radius: 5px;
            box-shadow: 2px 2px #f2f2f2;
            h3 {
                font-size: 2vw;
                text-align: center;
                color: #cfcfcd;
            }
        }
        .f2_btn {
            display: flex;
            justify-content: space-around;
            margin-top: 4vw;
        }
    }
    .rel_f3 {
        position: absolute;
        bottom: 0;
        width: 90%;
        left: 50%;
        transform: translateX(-50%);
        height: 150px;
        background-color: #c8cbd2;
        padding: 0 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .up_head {
            display: flex;
            justify-content: space-between;
            font-size: 18px;
            font-weight: 600;
        }
        .up_btn {
            text-align: center;
            height: 52%;
            h2 {
            font-size: 12px;
            margin-top: 10px;
            }
        }
    }
}
</style>
