feather.replace({ 'aria-hidden': 'true' });

$(".togglePassword").click(function (e) {
    e.preventDefault();
    var type = $(this).parent().parent().find(".password").attr("type");
    console.log(type);
    if (type == "password") {
        $("svg.feather.feather-eye-off").replaceWith(feather.icons["eye"].toSvg());
        $(this).parent().parent().find(".password").attr("type", "text");
    } else if (type == "text") {
        $("svg.feather.feather-eye").replaceWith(feather.icons["eye-off"].toSvg());
        $(this).parent().parent().find(".password").attr("type", "password");
    }
});

// Show offcanvas menu on page load
var myOffcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasScrolling'));
myOffcanvas.show();


var mainContent = document.getElementById('mainContent');
var offcanvasBtn = document.getElementById('offcanvasBtn');
var closeBtn = document.getElementById('closeBtn');

// Function to adjust padding based on offcanvas visibility
function adjustPadding() {
    if (myOffcanvas._isShown) {
        mainContent.style.paddingLeft = '240px'; // Adjust left padding when offcanvas is shown
        offcanvasBtn.style.display = 'none';
        closeBtn.style.display = 'block';
    } else {
        mainContent.style.paddingLeft = '100px'; // Reset left padding when offcanvas is hidden
        offcanvasBtn.style.display = 'flex';
        closeBtn.style.display = 'none';
    }
}

// Show offcanvas menu on page load
myOffcanvas.show();

// Toggle padding when offcanvas is shown or hidden
myOffcanvas._element.addEventListener('shown.bs.offcanvas', adjustPadding);
myOffcanvas._element.addEventListener('hidden.bs.offcanvas', adjustPadding);

document.addEventListener("DOMContentLoaded", function () {
    // Get all table rows except the header row
    var rows = document.querySelectorAll("#usertable tbody tr");

    // Define a function to generate a random hex color
    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    // Loop through each row
    rows.forEach(function (row) {
        // Get the div element with class "sname" in the second column (index 1)
        var cell = row.cells[2].querySelector('.sname'); // Index 2 represents the third cell (index starts from 0)

        // Set background color of the div
        if (cell) {
            cell.style.backgroundColor = getRandomColor();
        }
    });
});


// $('#usertable').DataTable();

// new DataTable('#example');

new DataTable('#usertable', {
    // columnDefs: [
    //     {
    //         orderable: false,
    //         render: DataTable.render.select(),
    //         targets: 0
    //     }
    // ],
    // order: [[1, 'asc']],
    // // scrollCollapse: true,
    // // scrollX: true,
    // // scrollX: true,
    // select: {
    //     style: 'os',
    //     selector: 'td:first-child'
    // },
    responsive: true,
    pagingType: 'full_numbers',
    dom: '<t><"bottom"ip>',
    layout: {
        topEnd: null
    },
    language: {
        paginate: {
            last: 'Last',
            first: 'First'
        }
    },
    // "columnDefs": [{
    //     "visible": true,
    //     "targets": [0, 1, 2, 3],
    // }],
    select: {
        style: 'multi',
        selector: '.select-checkbox',
        items: 'row',
    },
    responsive: {
        details: {
            type: 'column',
            target: 0,
        }
    },
    columnDefs: [{
        targets: 0,
        className: 'dtr-control'
    },
    {
        targets: 1,
        className: 'select-checkbox',
        orderable: false,
        render: DataTable.render.select(),
    },
    {
        targets: [0, 1],
        orderable: false
    },

    { responsivePriority: 1, targets: 0 }, // First column
    { responsivePriority: 1, targets: 1 }, // Second column
    { responsivePriority: 1, targets: 2 }, // Third column
    { responsivePriority: 1, targets: 3 }, // Fourth column

    ],
    order: [2, 'asc'],

    lengthMenu: [8],

});