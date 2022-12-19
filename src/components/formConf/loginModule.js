/**
 * 关于登录的配置项
 */

export default {
    title: 'LOGIN',
    btnName: '提交',
    formItems: [
        [
            { label: '姓名', key: 'name', value: '', type: 'input', colspan: 8, placeholder: '请输入姓名' },
            { label: '手机号', key: 'phone', value: '', type: 'input', colspan: 8, placeholder: '请输入手机号' }
        ],
        [
            {
                label: '地址', key: 'address', value: 0, type: 'select', colspan: 24, options: [
                    { label: '北京', value: 0 },
                    { label: '上海', value: 1 }
                ]
            }
        ]
    ]
}