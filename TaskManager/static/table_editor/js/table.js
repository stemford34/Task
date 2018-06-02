// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .

$(document).ready(function() {
    window.mass = [{name:"name1", value:"value1"},{name:"name2", value:"value2"}];
    function tableGen() {
        $("#tbl-body").html('');
        for (var i = 0; i < window.mass.length; i++)
        {
             htmlContent = "<td class='td_name'>" + window.mass[i].name + "</td>" + "<td class='td_value'>" + window.mass[i].value + "</td>" + "<td class='td_remove'>X</td><td class='td_sort'><div><span class='arrow_up'></span><span class='arrow_down'></span></div></td>";
            $("#tbl-body").append("<tr data-order='"+i+"'>" + htmlContent + "</tr>");
        }
        $('.td_name').click(function () {
            editTable($(this));
        });
        $('.td_value').click(function () {
            editTable($(this));
        });
        $('.td_remove').click(function () {
            editTable($(this));
        });
        $('.arrow_up').click(function () {
            sortColumn($(this),'up');
        });
        $('.arrow_down').click(function () {
            sortColumn($(this),'down');
        });
        $('#textarea_json').val(JSON.stringify(window.mass, null, '\t'));
    }
    tableGen();

    $(".to-json").click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.admin__option').removeClass('active');
        $('#show__json').addClass('active');
    });
    $(".add-to-tbl").click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.admin__option').removeClass('active');
        $('#add_to_table').addClass('active');
    });
    $('#add_column_form').submit(function (e) {
        e.preventDefault();
        let name = $('#add_name').val();
        let value = $('#add_value').val();
        $('#add_name').val('');
        $('#add_value').val('');
        window.mass.push({'name': name, 'value': value});
        tableGen();
    });
    function editTable(elem){
        var order = elem.parent().data('order');
        if (elem.hasClass('td_remove')){
            window.mass.splice(order, 1);
        }
        else{
            var oldVal = elem.text();
            var type = elem.hasClass('td_name')?'name':'value';
            var newVal = prompt('change : '+type,oldVal);
            if (type == 'name'){
             window.mass[order].name = newVal;
            }
            else{
             window.mass[order].value = newVal;
            }
        }
        tableGen();
    }
    function sortColumn(elem, direction) {
        var order =  elem.parents('tr').data('order');
        var dir = (direction === 'up')?-1:1;
        var tempColumn = window.mass[order+dir];
        window.mass[order+dir] = window.mass[order];
        window.mass[order] = tempColumn;
        tableGen();
    }
    $('#save_json_form').submit(function (e) {
        e.preventDefault();
        var strJson = $('#textarea_json').val();
        if (IsJsonString(strJson)){
            var newJson = JSON.parse($('#textarea_json').val());
            window.mass = newJson;
            tableGen();
        }
        else{
            alert('JSON not corect!');
        }
    });
    $('#load_json').change(function () {
    });

  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table_editor').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
});
function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}