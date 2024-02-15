define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'play.danmu/index' + location.search,
                    add_url: 'play.danmu/add',
                    edit_url: 'play.danmu/edit',
                    del_url: 'play.danmu/del',
                    multi_url: 'play.danmu/multi',
                    import_url: 'play.danmu/import',
                    table: 'danmu',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'cid',
                sortName: 'cid',
                fixedColumns: true,
                fixedRightNumber: 1,
                columns: [
                    [
                        {checkbox: true},
                        {field: 'cid', title: __('Cid')},
                        {field: 'id', title: __('Id'), operate: 'LIKE'},
                        {field: 'text', title: __('Text'), operate: 'LIKE'},
                        //{field: 'color', title: __('Color'), operate: 'LIKE'},
                        //{field: 'size', title: __('Size'), operate: 'LIKE'},
                        //{field: 'videotime', title: __('Videotime'), operate:'BETWEEN'},
                        {field: 'ip', title: __('Ip'), operate: 'LIKE'},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'status', title: __('Status'), searchList: {"0":__('Status 0'),"1":__('Status 1')}, formatter: Table.api.formatter.status},
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
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});
