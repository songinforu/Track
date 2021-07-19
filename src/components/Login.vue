<template>
    <div class="login">
        <div class="main">
            <div class="container a-container" :class="{isTxl:add}">
                <form class="form" id="a-form" method action>
                    <h2 class="from_title title">注册</h2>
                    <div class="form_icons">
                        <img class="from_icon" src="" alt="">
                        <img class="from_icon" src="" alt="">
                    </div>
                    <span class="form_span">or use email for registration</span>
                    <input type="text" class="form_input" placeholder="Name" v-model="nameNum">
                    <input type="text" class="form_input" placeholder="Email">
                    <input type="text" class="form_input" placeholder="Password">
                    <button class="form_button button submit">注册</button>
                </form>
            </div>
            <div class="container b-container" :class="[{isTxl:add},{isZxl:add}]">
                <form class="form" id="b-form" method action>
                    <h2 class="from_title title">会员登录</h2>
                    <div class="form_icons">
                        <img class="from_icon" src="" alt="">
                    </div>
                    <span class="form_span">or use your email account</span>
                    <input type="text" class="form_input" placeholder="Email">
                    <input type="text" class="form_input" placeholder="Password">
                    <button class="form_button button submit">登录</button>
                </form>
            </div>
            <!-- 动态绑定 -->
            <div class="switch" :class="{isTxr:add}">
                <!-- 动态绑定  -->
                <div class="switch_circle" :class="{isTxr:add}" :style="{left:num}"></div>
                <div class="switch_circle switch_circle-t" :class="{isTxr:add}" :style="{left:topNum}"></div>
                <div class="switch_container" :class="{isHidden:addSpecil}">
                    <h2 class="switch_title title">Welcome Back!</h2>
                    <p class="switch_description description">
                        To keep connected with us please login with your personal info
                    </p>
                    <button class="switch_button button switch-btn" @click="cutRegisterPage()">登录</button>
                </div>
                <div class="switch_container" :class="{isHidden:addSpecil2}">
                    <h2 class="switch_title title">Hello Friend!</h2>
                    <p class="switch_description description">
                        Enter your personal details and start journey with us
                    </p>
                    <button class="switch_button button switch-btn" @click="cutLoginPage()">注册</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            add:false,
            addSpecil:true,
            addSpecil2:false,
            num:"-60%",
            topNum:"60%",
            nameNum: ""
        }
    },
    methods:{
        cutRegisterPage(){
            this.add = !this.add
            this.addSpecil = !this.addSpecil
            this.addSpecil2 = !this.addSpecil2
            this.num = "-60%"
            this.topNum = "60%"
        },
        cutLoginPage(){
            this.add = !this.add
            this.addSpecil = !this.addSpecil
            this.addSpecil2 = !this.addSpecil2
            this.num = "60%"
            this.topNum = "0"
        }
    },
}
</script>

<style lang="scss" scoped>
    .login{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Montserrat',sans-serif;
        font-size: 12px;
        background-color: #ecf0f3;
        color: #a0a5a8;
        .main{
            position: relative;
            width: 1000px;
            min-width: 1000px;
            min-height: 600px;
            height: 600px;
            padding: 25px;
            background-color: #ecf0f3;
            box-shadow: 10px 10px 10px #d1d9e6,-10px -10px 10px #f9f9f9;
            border-radius: 12px;
            overflow: hidden;
            .container{
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: 0;
                width: 600px;
                height: 100%;
                padding: 25px;
                background-color: #ecf0f3;
                transition: 1.25s;
                .form{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    width: 100%;
                    height: 100%;
                    .title{
                        font-size: 34px;
                        font-weight: 700;
                        line-height: 3;
                        color: #181818;
                        .form_icon{
                            object-fit: contain;
                            width: 30px;
                            margin: 0 5px;
                            opacity: .5;
                            transition: .15;
                        }
                        .form_icon:hover{
                            opacity: 1;
                            transition: .15s;
                            cursor: pointer;
                        }
                    }
                    .form_span{
                        margin-top: 30px;
                        margin-bottom: 12px;
                    }
                    .form_input{
                        width: 350px;
                        height: 40px;
                        margin: 4px 0;
                        padding-left: 25px;
                        font-size: 13px;
                        letter-spacing: .15px;
                        border: none;
                        outline: none;
                        font-family: 'Montserrat', sans-serif;
                        background-color: #ecf0f3;
                        transition: .25s ease;
                        border-radius: 8px;
                        box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
                    }
                    .button{
                        width: 180px;
                        height: 50px;
                        border-radius: 25px;
                        margin-top: 50px;
                        font-weight: 700;
                        font-size: 14px;
                        letter-spacing: 1.15px;
                        background-color: #4B70E2;
                        color: #f9f9f9;
                        box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
                        border: none;
                        outline: none;
                    }
                }
            }
            .a-container{
                z-index: 100;
                left: calc(100% - 600px);
            }
            .b-container{
                z-index: 0;
                left: calc(100% - 600px);
            }
            .switch{
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 400px;
                padding: 50px;
                z-index: 200;
                transition: 1.25s;
                background-color: #ecf0f3;
                overflow: hidden;
                box-shadow: 4px 4px 10px #d1d9e6,-4px -4px 10px #f9f9f9;
                .switch_circle{
                    position: absolute;
                    width: 500px;
                    height: 500px;
                    border-radius: 50%;
                    background-color: #ecf0f3;
                    box-shadow: inset 8px 8px 12px #d1d9e6, inset -8px -8px 12px #f9f9f9;
                    bottom: -60%;
                    // left: -60%;
                    transition: 1.25s;
                }
                .switch_circle-t{
                    top: -30%;
                    left: 60%;
                    width: 300px;
                    height: 300px;
                }
                .isHidden{
                    visibility: hidden;
                    opacity: 0;
                    position: absolute;
                    transition: 1.25s;
                }
                .switch_container{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    position: absolute;
                    width: 400px;
                    padding: 50px 55px;
                    transition: 1.25s;
                    .title{
                        font-size: 34px;
                        font-weight: 700;
                        line-height: 3;
                        color: #181818;
                    }
                    .description{
                        font-size: 14px;
                        letter-spacing: .25px;
                        text-align: center;
                        line-height: 1.6;
                    }
                    .switch_button{
                        cursor: pointer;
                    }
                    .button{
                        width: 180px;
                        height: 50px;
                        border-radius: 25px;
                        margin-top: 50px;
                        font-weight: 700;
                        font-size: 14px;
                        letter-spacing: 1.15px;
                        background-color: #4B70E2;
                        color: #f9f9f9;
                        box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
                        border: none;
                        outline: none;
                    }
                }
            }
            .isTxl{
                left: 0;
                transition: 1.25s;
                transform-origin: right;
            }
            .isZxl{
                z-index: 200;
                transition: 1.25s;
            }
            .isTxr{
                left: calc(100% - 400px );
                transition: 1.25s;
                transform-origin: left;
            }
        }
    }
</style>
