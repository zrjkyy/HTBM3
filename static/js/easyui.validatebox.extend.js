
/* 
* EasyUI 的validatebox扩展
*   增加了一些验证
**/


//验证框通用验证
$.extend($.fn.validatebox.defaults.rules, {
    identity: {// 验证身份证号
        validator: function (value) {
            return /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)/i.test(value);
        },
        message: '身份证格式不正确.'
    },
    minLength: {
        validator: function (value, param) {   //value 为需要校验的输入框的值 , param为使用此规则时存入的参数   
            return value.length >= param[0];
        },
        message: '请输入最小{0}位字符.'
    },
    maxLength: {
        validator: function (value, param) {
            return param[0] >= value.length;
        },
        message: '请输入最大{0}位字符.'
    },
    length: {
        validator: function (value, param) {
            return value.length >= param[0] && param[1] >= value.length;
        },
        message: '请输入{0}-{1}位字符.'
    },
    surelength:{
    	validator: function (value, param) {
            return value.length == param;
        },
        message: '请输入{0}位字符.'
    },
    alphaChar:{
        validator: function (value, param) {
            return value.length >= param[0] && param[1] >= value.length&& /^[\x00-\xff]*$/i.test($.trim(value));
        },
        message: '请输入{0}-{1}位半角字符.'
    },
   
    equals: {
        validator: function (value, param) {
            return value == $(param[0]).val();
        },
        message: '字段不相同.'
    },
    bankNo: {
        validator: function (value, param) {
            return /^\d[0-9|\s]*\d$/i.test(value); ;
        },
        message: '银行账号只能输入整数（16-19位）.'
    },
    web: {
        validator: function (value) {
            return /^(http[s]{0,1}|ftp):\/\//i.test($.trim(value));
        },
        message: '请输入有效的网址.'
    },
    /*webignorhttp:{
    	 validator: function (value) {
             return /^({0,1})/i.test($.trim(value));
         },
         message: '请输入有效的网址.'
    },*/
    mobile: {
        validator: function (value) {
            return /^1[0-9]{10}$/i.test($.trim(value));
        },
        message: '请输入有效的手机.'
    },
    date: {
        validator: function (value) {
            return /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/i.test($.trim(value));
        },
        message: '请输入有效的日期(例:2012-09-11).'
    },
    yyyymm: {
        validator: function (value) {
            return /^[0-9]{4}[0-9]{2}$/i.test($.trim(value));
        },
        message: '请输入有效的年月(例:201301).'
    },
    yyyy: {
        validator: function (value) {
            return /^[0-9]{4}$/i.test($.trim(value));
        },
        message: '请输入有效的年份(例:2013).'
    },
    telephone: {
        validator: function (value) {
           // return /^(13|14|15|18)\d{9}$/i.test(value) || /^((\(\d{2,3}\))|(\d{3}\-)|(\d{3}))?(\(0\d{2,3}\)|0\d{2,3}-|0\d{2,3})?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value);
             return $.trim(value).length<=18;
        },
        message: '请输入小于18位的电话号码.'
    },
    forginTelephone: {
        validator: function (value) {
         return $.trim(value).length<=18;
//            return /^[0-9()\-+]{0,20}$/i.test(value);
            //return /^(13|14|15|18)\d{9}$/i.test(value) || /^((\(\d{2,3}\))|(\d{3}\-)|(\d{3}))?(\(0\d{2,3}\)|0\d{2,3}-|0\d{2,3})?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value);
        },
         message: '请输入小于18位的电话号码.'
        /*validator: function (value) {
        return /^(13|14|15|18)\d{9}$/i.test(value) || /^((\(\d{2,3}\))|(\d{3}\-)|(\d{3}))?(\(0\d{2,3}\)|0\d{2,3}-|0\d{2,3})?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value);
        },
        message: '请输入有效的电话号码.'*/
    },
    forginZip: {
       validator: function (value) {
            return /^[0-9-]{0,30}$/i.test(value);
        },
        message: '请输入半角字符.'
    },
    mobileTel:{
        validator: function (value) {
            return (/^(13|14|15|18)\d{9}$/i.test(value) || /^((\(\d{2,3}\))|(\d{3}\-)|(\d{3}))?(\(0\d{2,3}\)|0\d{2,3}-|0\d{2,3})?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value)) 
                    ||  (/^1[0-9]{10}$/i.test($.trim(value)));
        },
        message: '请输入有效的电话或手机号码.'
    },
    passvalue: {
        validator: function (value, param) {
            return value.length >= param[0] && value.length <= param[1] && /^([a-zA-Z0-9])*$/i.test(value);
        },
        message: "请输入半角英数字，且范围在{0}-{1}位."
    },

    faxno: {
        validator: function (value) {
            return /^((\(\d{2,3}\))|(\d{3}\-)|(\d{3}))?(\(0\d{2,3}\)|0\d{2,3}-|0\d{2,3})?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value);
        },
        message: "请输入有效的传真号码."
    },
    email: {
        validator: function (value) {
            return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
        },
        message: "请输入有效的邮箱."
    },
    zip: {// 验证邮政编码  
        validator: function (value) {
            return /^[1-9]\d{5}$/i.test(value);
        },
        message: '请输入有效的邮编(例:100000).'
    },
    integer: {// 验证整数  
        validator: function (value) {
            return /^[+]?[1-9]+\d*$/i.test(value);
        },
        message: '请输入整数.'
    },
    integerAll: {// 验证整数  
        validator: function (value) {
            return /^-?[0-9]\d*$/i.test(value);
        },
        message: '请输入整数.'
    },
    minInteger: {
        validator: function (value, param) {   //value 为需要校验的输入框的值 , param为使用此规则时存入的参数   
            return value.length >= param[0];
        },
        message: '请输入小于等于{1}的数.'
    },
    maxInteger: {
        validator: function (value, param) {   //value 为需要校验的输入框的值 , param为使用此规则时存入的参数   
            return value.length >= param[0];
        },
        message: '请输入小于等于{0}的数.'
    },
    betweenNumber: {
        validator: function (value, param) {   //value 为需要校验的输入框的值 , param为使用此规则时存入的参数   
            return value > param[0]&& value < param[1]
        },
        message: '请输入大于{0}且小于{1}的数.'
    } ,betweenNumberequle: {
        validator: function (value, param) {   //value 为需要校验的输入框的值 , param为使用此规则时存入的参数
            return /^[+]?[1-9]+\d*$/i.test(value) && value >= param[0]&& value <= param[1]
        },
        message: '请输入{0}到{1}之间的整数.'
    },
    betInteger: {
        validator: function (value, param) {   //value 为需要校验的输入框的值 , param为使用此规则时存入的参数   
            if (/^-?[0-9]\d*$/i.test(value)) {
                return value.length >= param[0] && value.length <= param[1]
            }
            return false;
        },
        message: '请输入{0}位到{1}位的整数.'
    },
    idCard: {// 验证身份证号
        validator: function (value) {
            return /^([a-zA-Z0-9\(\)\（\）]){6,18}$/i.test(value);
        },
        message: '身份证格式不正确.'
    },
    alphanum: {
        validator: function (value) {
            return /^([a-zA-Z0-9_.,&()\s-])*$/i.test(value);
        },
        message: '请输入半角英数字.'
    },
    Percentage: {// 验证包含O的整数  
        validator: function (value) {
            return /^[+]?[0-9]+\d*$/i.test(value);
        },
        message: '请输入大于等于0的整数.'
    },
    minValue: {
        validator: function (value, param) {   //value 为需要校验的输入框的值 , param为使用此规则时存入的参数   
            return value > param[0];
        },
        message: '请输入大于{0}的整数.'
    },
    charactornum: {
        validator: function (value,param) {
            return value.length >= param[0] && value.length <= param[1]&&/^([零壹贰叁肆伍陆柒捌玖拾佰仟萬亿])*$/i.test(value);
        },
        message: '请输入中文大写数字，且范围在{0}-{1}位.'
    },
   
    isAccount: {// 验证身份证号
        validator: function (value) {
            return /^([0-9])*$/i.test(value);
        },
        message: '银行账号格式不正确.'
    },
    alphaCharactor: {
        validator: function (value,param) {
            return value.length >= param[0] && value.length <= param[1]&&/^([a-zA-Z0-9_'\\\s-\.\:\/\%\(\)\*])*$/i.test(value);
        },
        message: '请输入半角英数字，且范围在{0}-{1}位.'
    },
    maxUnitRough: {
        validator: function (value, param) {   //value 为需要校验的输入框的值 , param为使用此规则时存入的参数  
            if (param[0] != '') {
                return parseFloat(value) >= parseFloat(param[0]);
            } else {
                return true;
            }
        },
        message: '请输入不小于单位净重：{0}的数.'
    },
    minUnitNet: {
        validator: function (value, param) {   //value 为需要校验的输入框的值 , param为使用此规则时存入的参数  
            if (param[0] != '') {
                return parseFloat(value) <= parseFloat(param[0]);
            } else {
                return true;
            }
        },
        message: '请输入不大于单位毛重：{0}的数.'
    },
    alphanumMaxLength: {
        validator: function (value,param) {
            return !/[^\x00-\xff]/i.test(value) && param[0] >= value.length;
        },
        message: '请输入半角英数字，且小于{0}位字符.'
    },
     pathValue: {
        validator: function (value, param) {
            return value.length >= param[0] && value.length <= param[1] && /^([\u4e00-\u9fa5/a-zA-Z0-9/.&-~])*$/i.test(value);
        },
        message: "请输入正确路径，且范围在{0}-{1}位."
    },
    morningtime:{
    	validator:function(value,param){
    		return /^(((1[0-1])|(0\d)):[0-5]\d)$/i.test(value);
    	},
    	  message: "请输入正确的时间格式 且 开始时间不得大于12  时间格式   例子09：20"
    },
    afternoontime:{
    	validator:function(value,param){
    		return /^(((1[2-9])|(2[0-4])):[0-5]\d)$/i.test(value);
    	},
    	  message: "请输入正确的时间格式 且 开始时间不得小于12  时间格式   例子13：20"
    },
    eveningtime:{
    	validator:function(value,param){
    		return /^(((1[8-9])|(2[0-3])):[0-5]\d)$/i.test(value);
    	},
    	  message: "请输入正确的时间格式 且 开始时间不得小于18  时间格式   例子18：20"
    },
    time:{
    	validator:function(value,param){
    		return /^(((1[0-9])|(2[0-3])):[0-5]\d)$/i.test(value);
    	},
    	  message: "请输入正确的时间格式 时间格式   例子18：20"
    },
    password:{
    	validator:function(value,param){
    		return /^[^\s\u4e00-\u9fa5]{6,20}$/i.test(value)
    	},
    	message:"请输入正确的密码格式 6~20位不能有空格"
    },
    passwordNew:{
        /*validator:function(value,param){
        	//排除空格
        	if(value.indexOf(' ')>=0){
        		return false;
        	}
        	return /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/i.test(value)
        },
        message:"请输入6-20位字符；数字、字母、特殊字符（除空格），起码其中两种组合"*/
    	validator:function(value,param){
            return /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\\W_!@#$%^&*`~()-+=]+$)(?![0-9\\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\\W_!@#$%^&*`~()-+=]{8,20}$/.test(value);
          },
          message:"请输入8-20位字符；数字、大写字母、小写字母、特殊字符（除空格），起码其中三种组合"
      },
    zzs:{
    	validator:function(value,param){
    		 return /^[1-9]\d*$/i.test(value);
    	},
    	message:"请输入正整数"
    },
    hundred:{
    	validator:function(value,param){
    		 return /^([1-9]|[1-9]\\d|100)$/i.test(value)
    	},
    	message:"请输入1~100的正整数"
    }

});
    