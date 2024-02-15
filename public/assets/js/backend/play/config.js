define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {
    var Controller = {
        index: function () {
            Form.api.bindevent($("form.edit-form"));
        },
        danmu: function(){
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'play/danmu',
                    add_url: 'art/add',
                    edit_url: 'art/edit',
                    del_url: 'art/del',
                    multi_url: '',
                }
            });

            var table = $("#table");

            //在普通搜索提交搜索前
            table.on('common-search.bs.table', function (event, table, query) {
                //这里可以获取到普通搜索表单中字段的查询条件
                console.log(query);
            });

            //在普通搜索渲染后
            table.on('post-common-search.bs.table', function (event, table) {
                var form = $("form", table.$commonsearch);
                $("input[name='title']", form).addClass("selectpage").data("source", "auth/adminlog/selectpage").data("primaryKey", "title").data("field", "title").data("orderBy", "id desc");
                $("input[name='username']", form).addClass("selectpage").data("source", "auth/admin/index").data("primaryKey", "username").data("field", "username").data("orderBy", "id desc");
                Form.events.cxselect(form);
                Form.events.selectpage(form);
            });

            //在表格内容渲染完成后回调的事件
            table.on('post-body.bs.table', function (e, settings, json, xhr) {
                console.log(e, settings, json, xhr);
            });

            //当表格数据加载完成时
            table.on('load-success.bs.table', function (e, data) {
                //这里可以获取从服务端获取的JSON数据
                console.log(data);
                //这里我们手动设置底部的值
                $("#money").text(data.extend.money);
                $("#price").text(data.extend.price);
            });

            // 初始化表格
            // 这里使用的是Bootstrap-table插件渲染表格
            // 相关文档：https://doc.fastadmin.net/doc/table.html
            table.bootstrapTable({
                //表格参数可以参考：https://doc.fastadmin.net/doc/190.html
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                columns: [
                    [
                        //该列为复选框字段,如果后台的返回state值将会默认选中
                        {field: 'state', checkbox: true,},
                        //sortable为是否排序,operate为搜索时的操作符,visible表示是否可见
                        {field: 'id', width: "60px", title: 'ID', sortable: true, operate: false},
                        //模糊搜索
                        {field: 'title', title: __('Title'), operate: 'LIKE %...%', placeholder: '模糊搜索，*表示任意字符',align:'left'},
                        //启用时间段搜索
                        {
                            field: 'updatetime',
                            width: "160px",
                            title: __('Update time'),
                            sortable: true,
                            formatter: Table.api.formatter.datetime,
                            operate: 'RANGE',
                            addclass: 'datetimerange'
                        },
                        //操作栏,默认有编辑、删除或排序按钮,可自定义配置buttons来扩展按钮
                        {
                            field: 'operate',
                            width: "100px",
                            title: __('Operate'),
                            table: table,
                            events: Table.api.events.operate,
                            buttons: [
                                {
                                    name: 'addtabs',
                                    title: __('新选项卡中打开'),
                                    classname: 'btn btn-xs btn-warning btn-addtabs',
                                    icon: 'fa fa-folder-o',
                                    url: 'example/bootstraptable/detail'
                                }
                            ],
                            formatter: Table.api.formatter.operate
                        },
                    ],
                ],
                //更多配置参数可参考：https://doc.fastadmin.net/doc/190.html
                //亦可以参考require-table.js中defaults的配置
                //快捷搜索,这里可在控制器定义快捷搜索的字段
                search: true,
                //启用普通表单搜索
                commonSearch: true,
                //显示导出按钮
                showExport: false,
                //启用跨页选择
                maintainSelected: true,
                //启用固定列
                fixedColumns: true,
                //固定右侧列数
                fixedRightNumber: 1,
                //可以控制是否默认显示搜索单表,false则隐藏,默认为false
                searchFormVisible: true,
            });

            // 为表格绑定事件
            Table.api.bindevent(table);

            // 指定搜索条件
            $(document).on("click", ".btn-singlesearch", function () {
                var options = table.bootstrapTable('getOptions');
                var queryParams = options.queryParams;
                options.pageNumber = 1;
                options.queryParams = function (params) {
                    //这一行必须要存在,否则在点击下一页时会丢失搜索栏数据
                    params = queryParams(params);

                    //如果希望追加搜索条件,可使用
                    var filter = params.filter ? JSON.parse(params.filter) : {};
                    var op = params.op ? JSON.parse(params.op) : {};
                    filter.url = 'login';
                    op.url = 'like';
                    params.filter = JSON.stringify(filter);
                    params.op = JSON.stringify(op);

                    //如果希望忽略搜索栏搜索条件,可使用
                    //params.filter = JSON.stringify({url: 'login'});
                    //params.op = JSON.stringify({url: 'like'});
                    return params;
                };
                table.bootstrapTable('refresh', {});
                Toastr.info("当前执行的是自定义搜索,搜索URL中包含login的数据");
                return false;
            });

            // 获取选中项
            $(document).on("click", ".btn-selected", function () {
                Layer.alert(JSON.stringify(Table.api.selecteddata(table)));
            });

            // 启动和暂停按钮
            $(document).on("click", ".btn-start,.btn-pause", function () {
                //在table外不可以使用添加.btn-change的方法
                //只能自己调用Table.api.multi实现
                //如果操作全部则ids可以置为空
                var ids = Table.api.selectedids(table);
                Table.api.multi("changestatus", ids.join(","), table, this);
            });
        }
    };
    return Controller;
});