define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'play/play/index' + location.search,
                    add_url: 'play/play/add',
                    //edit_url: 'play/play/edit',
                    del_url: 'play/play/del',
                    multi_url: 'play/play/multi',
                    import_url: 'play/play/import',
                    table: 'play',
                }
            });
            var table = $("#table");
            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        //{checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'name', title: __('Name'), operate: 'LIKE'},
                        {field: 'code', title: __('Code'), operate: 'LIKE'},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {
                            field: 'buttons',
                            width: "120px",
                            title: __('编辑播放器'),
                            table: table,
                            events: Table.api.events.operate,
                            buttons: [
                                {
                                    name: 'addtabs',
                                    text: __('编辑播放器'),
                                    title: __('编辑播放器'),
                                    classname: 'btn btn-xs btn-warning btn-addtabs',
                                    icon: 'fa fa-magic',
                                    url: 'play/config/index'
                                }
                            ],
                            formatter: Table.api.formatter.buttons
                        },

                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });


            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        //edit: function () {
        //    Controller.api.bindevent();
        //},
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});
