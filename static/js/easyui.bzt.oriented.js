(function(){
	//针对下拉框设置的时候值不存在
	var comSetValue=$.fn.combobox.methods.setValue
	var comSelect=$.fn.combobox.methods.select
	$.fn.combobox.methods.setValue=function(){
		var target=arguments[0];
		var data=$(target).combobox('getData');
		var options=$(target).combobox('options');
		var argu=arguments;
		var same=_.find(data,function(item){
			return item[options.valueField]==argu[1]
		})
		//找到了就设置不然就不设
		if(same){
			 comSetValue.apply(null,arguments);
		}else{
			if(argu[1]==""){
				$(target).combobox('clear');
			}
		}
		return target;
	}
	$.fn.combobox.methods.select=function(){
		var target=arguments[0];
		var data=$(target).combobox('getData');
		var options=$(target).combobox('options');
		var argu=arguments;
		var same=_.find(data,function(item){
			return item[options.valueField]==argu[1]
		})
		//找到了就设置不然就不设
		if(same){
			comSelect.apply(null,arguments);
		}else{
			if(argu[1]==""){
				$(target).combobox('clear');
			}
		}
	
		return target;
	}
	/**
	 * 下拉框输入筛选 使得combobox可以通过输入来筛选数据
	 * 
	 * @param obj
	 */
	$.fn.combobox.methods.getSelected=function(jq){
		var combo=jq;
		var datas = combo.combobox('getData');
		var options=combo.combobox('options');
		var value=combo.combobox('getValue');
		var valueField = options.valueField;// 文本key
		var exist = _.find(datas, function(item) {
			return item[valueField] == value
		})
		return exist;
	}
	$.extend($.fn.combobox.defaults,{
		onHidePanel : function() {
			var combo=$(this);
			var t = combo.combobox('getText');// 当前text值
			var value=combo.combobox('getValue');//当前value值
			if(t=="")return
			var datas = combo.combobox('getData');
			var options=combo.combobox('options');
			var _textField = options.textField;// 文本key
			var valueField=options.valueField;
			var multiple=options.multiple;// 文本key
			if(!multiple){
				var exist = _.find(datas, function(item) {
					//如果有value说明是手动选的选择最准确的,没有的话是手动输入的找第一个名称一样的
					return value?item[_textField] == t&&item[valueField]==value:item[_textField] == t;
				})
				if (!exist) {
					alert("没有找到所输项");
					combo.combobox('setValue', '')
				}else{
					combo.combobox('select',exist[options.valueField])
				}
			}else{
				var values=t.split(",");
				var combo=$(this);
				_.each(values,function(value){
					var exist = _.find(datas, function(item) {
						console.info(value);
						return item[_textField] == value
					})
					if (!exist) {
						alert("没有找到所输项");
						combo.combobox('setValue', '')
					}else{
						combo.combobox('select',exist[options.valueField])
					}
				})
			}
		},
		filter:function(q,row){
					var opts = $(this).combobox('options');
					return row[opts.textField].includes(q);
		}

	})
	$.fn.combobox.defaults.panelHeight="auto"
	
})()