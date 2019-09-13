jQuery.noConflict();
jQuery(document).ready(function($){
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer',
        // gutter: 10
    });

    $grid.imagesLoaded().progress(function(){
        $grid.masonry();
    });

    $grid.on( 'click', '.grid-item', function() {
        // change size of item via class
        $( this ).toggleClass('grid-item--gigante');
        // trigger layout
        $grid.masonry();
    });
});

google.charts.load('current', {packages:["orgchart"]});

google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Name');
  data.addColumn('string', 'Parent');
  data.addColumn('string', 'ToolTip');
  // For each orgchart box, provide the name, manager, and tooltip to show.
  data.addRows([
    ['Ton-That Niem', '', ''],
    ['Dang Que-Phuong', 'Ton-That Niem', ''],
    ['Vo Hoa An', 'Dang Que-Phuong', ''],
    ['Vo Bao An', 'Dang Que-Phuong', ''],
    ['Dang Minh Ha', 'Dang Que-Phuong', ''],
    ['Dang Minh Cong', 'Dang Que-Phuong', ''],
    ['Dang Minh Kien', 'Dang Que-Phuong', ''],
    ['Ton-That Chau', 'Ton-That Niem', ''],
    ['Ton-That Daniel', 'Ton-That Chau', ''],
    ['Ton-That Huan', 'Ton-That Niem', ''],
    ['Ton Elise', 'Ton-That Huan', ''],
    ['Ton Anjolie', 'Ton-That Huan', ''],
    ['Ton-That Tuan', 'Ton-That Niem', ''],
    ['Ton Emma', 'Ton-That Tuan', ''],
    ['Ton Sophie', 'Ton-That Tuan', ''],
  ]);
  // Create the chart.
  var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
  // Draw the chart, setting the allowHtml option to true for the tooltips.
  var config = {
      allowHtml: true,
      allowCollapse: true
  }
  chart.draw(data, config);
}