// ===== The date that is placed at the footer =====
const date = new Date()
const cYear = date.getFullYear()
document.querySelector('.year').innerHTML = cYear

let result = document.getElementById("result");

function closeResult(){
    result.classList.remove("open-up");
    document.location.reload();
}

function openResult() {
    result.classList.add("open-up");
    var students = {

        CHOICE: {
            English: "ENGLISH:      46",
            Physics: "PHYSICS:      33",
            Chemistry: "CHEMISTRY:      23",
            Biology: "BIOLOGY:     40",
            Total: "<hr>TOTAL:     142<hr>"
        },
        GBOLAHAN: {
            Lit: "LITERATURE-IN-ENGLISH:     58",
            English: "ENGLISH:      43",
            Gov: "GOVERNMENT:      48",
            Crk: "CRK:      23",
            Total: "<hr>TOTAL:     172<hr>"
        },
        PAUL: {
            Math: "MATHEMATICS:     45",
            English: "ENGLISH:      47",
            Physics: "PHYSICS:      30",
            Chemistry: "CHEMISTRY:      23",
            Total: "<hr>TOTAL:     145<hr>"
        },
        PROMISE: {
            Biology: "BIOLOGY:     20",
            English: "ENGLISH:      50",
            Physics: "PHYSICS:      13",
            Chemistry: "CHEMISTRY:      23",
            Total: "<hr>TOTAL:     106<hr>"
        },
        COMFORT: {
            Biology: "BIOLOGY:     23",
            English: "ENGLISH:      41",
            Physics: "PHYSICS:      10",
            Chemistry: "CHEMISTRY:      08",
            Total: "<hr>TOTAL:     082<hr>"
        },
        EMMANUEL: {
            English: "ENGLISH:      43",
            Lit: "LITERATURE:      63",
            Crk: "CRK:      23",
            Gov: "GOVERNMENT:      60",
            Total: "<hr>TOTAL:     189<hr>"
        }
    }

    var studentname = document.getElementById('studentname').value;
    var input = studentname.toUpperCase();
    var definition = students[input];
    var output = document.getElementById("output");
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    var third = document.getElementById("third");
    var fourth = document.getElementById("fourth");
    var check_result = document.getElementById("check_result");


    if (definition == students.CHOICE) {
        output.innerHTML = '<hr> NOTIFICATION OF RESULTS. <hr>';
        first.innerHTML = definition.Biology;
        second.innerHTML = definition.English;
        third.innerHTML = definition.Physics;
        fourth.innerHTML = definition.Chemistry;
        check_result.innerHTML = definition.Total;
    } else if (definition == students.PAUL) {
        output.innerHTML = '<hr> NOTIFICATION OF RESULTS. <hr>';
        first.innerHTML = definition.Math;
        second.innerHTML = definition.English;
        third.innerHTML = definition.Physics;
        fourth.innerHTML = definition.Chemistry;
        check_result.innerHTML = definition.Total;
    } else if (definition == students.GBOLAHAN) {
        output.innerHTML = '<hr> NOTIFICATION OF RESULTS. <hr>';
        first.innerHTML = definition.Lit;
        second.innerHTML = definition.English;
        third.innerHTML = definition.Gov;
        fourth.innerHTML = definition.Crk;
        check_result.innerHTML = definition.Total;
    } else if (definition == students.PROMISE) {
        output.innerHTML = '<hr> NOTIFICATION OF RESULTS. <hr>';
        first.innerHTML = definition.Biology;
        second.innerHTML = definition.English;
        third.innerHTML = definition.Physics;
        fourth.innerHTML = definition.Chemistry;
        check_result.innerHTML = definition.Total;
    } else if (definition == students.COMFORT) {
        output.innerHTML = '<hr> NOTIFICATION OF RESULTS. <hr>';
        first.innerHTML = definition.Biology;
        second.innerHTML = definition.English;
        third.innerHTML = definition.Physics;
        fourth.innerHTML = definition.Chemistry;
        check_result.innerHTML = definition.Total;
    } else if (definition == students.EMMANUEL) {
        output.innerHTML = '<hr> NOTIFICATION OF RESULTS. <hr>';
        first.innerHTML = definition.Lit;
        second.innerHTML = definition.English;
        third.innerHTML = definition.Gov;
        fourth.innerHTML = definition.Crk;
        check_result.innerHTML = definition.Total;
    } else {
        output.innerHTML = '<hr> There is no information about this Student. <hr> Check name and try again';
    };
};


