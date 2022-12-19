<script>
export default {
    name: 'indexView',
    data() {
        return {
            formData: {}
        }
    },
    props: {
        formConf: {
            type: Object,
            required: true
        }
    },
    created() {
        // 通知vue进行动态添加formData的key值
        let { formItems } = this.formConf
        formItems.forEach(e => {
            e.forEach(i => {
                this.$set(this.formData, i.key, i.value)
            })
        })
    },
    methods: {
        // 提交2022年12月18日20:11:29
        loginMit() {
            this.$emit('formMit', this.formData)
        },
        /**
         * @function renderItems  渲染具体内容
         * @param {*} item 
         */
        renderItems(item) {
            if (item.type == 'input') {
                return <el-input value={this.formData[item.key]} oninput={e => { this.formData[item.key] = e }} placeholder={item.placeholder}></el-input>
            } else if (item.type == 'select') {
                return <el-select value={this.formData[item.key]} onchange={e => { this.formData[item.key] = e }} placeholder={item.placeholder}>
                    {
                        item.options.map(o => {
                            return <el-option label={o.label} value={o.value} key={o.value}></el-option>
                        })
                    }

                </el-select>
            }
        },
        /**
         * @function renderCols 渲染每一列
         * @param {*} cols 
         */
        renderCols(cols) {
            return cols.map(i => {
                return <el-col span={i.colspan}>
                    <el-form-item label={i.label}>
                        {this.renderItems(i)}
                    </el-form-item>
                </el-col>
            })
        },

        /**
         * @function randerRows 渲染每一行
         * @param {*} rows 
         */
        randerRows(rows) {
            return rows.map(r => {
                return <el-row>
                    {this.renderCols(r)}
                </el-row>
            })
        }
    },
    render() {
        // 进行最基本的布局
        const { title, formItems, btnName } = this.formConf
        return <div>
            <h1>{title}</h1>
            <el-form label-width='80px'>
                {this.randerRows(formItems)}
            </el-form>
            <el-button style="color:#409eff" onclick={this.loginMit}>{btnName}</el-button>
        </div>
    }
}
</script>

<style>

</style>