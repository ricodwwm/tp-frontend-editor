
// TEXTAREA FUNCTIONALITIES

function nbCaracteres() {

    // option value of select selection

    const select = document.getElementById("number_choice");
    let option = select.selectedIndex;
    let choice = select.options[option].value;

    const select2 = document.getElementById("number_choice2");
    let option2 = select2.selectedIndex;
    let choice2 = select2.options[option2].value;

    const select3 = document.getElementById("number_choice3");
    let option3 = select3.selectedIndex;
    let choice3 = select3.options[option3].value;

    // ----------------------------------------

    let textareaHtml = document.getElementById("data");
    let textareaCss = document.getElementById("data2");
    let textareaJs = document.getElementById("data3");

    let nbHtml = document.getElementById("nbcaracteres_html");
    let nbCss = document.getElementById("nbcaracteres_css");
    let nbJs = document.getElementById("nbcaracteres_js");

    let nombreHtml = document.getElementById("data").value.length;
    let nombreCss = document.getElementById("data2").value.length;
    let nombreJs = document.getElementById("data3").value.length;

    let progressBarHtml = document.querySelector(".htmlbar");
    let progressBarCss = document.querySelector(".cssbar");
    let progressBarJs = document.querySelector(".jsbar");

    // injection of number current value

    document.getElementById("nbcaracteres_html").innerHTML = nombreHtml;
    document.getElementById("nbcaracteres_css").innerHTML = nombreCss;
    document.getElementById("nbcaracteres_js").innerHTML = nombreJs;

    // progressbar width modification

    progressBarHtml.style.width = (nombreHtml/(choice/100)) + "%";
    progressBarCss.style.width = (nombreCss/(choice2/100)) + "%";
    progressBarJs.style.width = (nombreJs/(choice3/100)) + "%";

    // progressbar & number color modification

    // html textarea

    if ((nombreHtml/(choice/100)) >= 80) {
        nbHtml.style.color = "red";
        progressBarHtml.style.backgroundColor = "red";
    } else if ((nombreHtml/(choice/100)) >= 50) {
        nbHtml.style.color = "orange";
        progressBarHtml.style.backgroundColor = "orange";
    } else {
        nbHtml.style.color = "green";
        progressBarHtml.style.backgroundColor = "green";
    }

    if(choice == 200) {
        textareaHtml.setAttribute("maxlength", choice);
    } else if(choice == 500) {
        textareaHtml.setAttribute("maxlength", choice);
    } else {
        textareaHtml.setAttribute("maxlength", choice);
    }

    // css textarea

    if ((nombreCss/(choice2/100)) >= 80) {
        nbCss.style.color = "red";
        progressBarCss.style.backgroundColor = "red";
    } else if ((nombreCss/(choice2/100)) >= 50) {
        nbCss.style.color = "orange";
        progressBarCss.style.backgroundColor = "orange";
    } else {
        nbCss.style.color = "green";
        progressBarCss.style.backgroundColor = "green";
    }

    if(choice2 == 200) {
        textareaCss.setAttribute("maxlength", choice2);
    } else if(choice2 == 500) {
        textareaCss.setAttribute("maxlength", choice2);
    } else {
        textareaCss.setAttribute("maxlength", choice2);
    }

    // js textarea

    if ((nombreJs/(choice3/100)) >= 80) {
        nbJs.style.color = "red";
        progressBarJs.style.backgroundColor = "red";
    } else if ((nombreJs/(choice3/100)) >= 50) {
        nbJs.style.color = "orange";
        progressBarJs.style.backgroundColor = "orange";
    } else {
        nbJs.style.color = "green";
        progressBarJs.style.backgroundColor = "green";
    }

    if (choice3 == 200) {
        textareaJs.setAttribute("maxlength", choice3);
    } else if(choice3 == 500) {
        textareaJs.setAttribute("maxlength", choice3);
    } else {
        textareaJs.setAttribute("maxlength", choice3);
    }

}

// LIVE CODING

function liveCoding() {

    let field = document.getElementById("data");
    let field2 = document.getElementById("data2");
    // let field3 = document.getElementById("data3");
    
    let live = document.querySelector(".live_coding");

    // inject in style tag

    let styleCss = document.getElementById("style_css");

    // inject in script tag

    // let scriptJs = document.getElementById("script_js");

    // listener event on fields to inject in live coding div

    field.addEventListener("keyup", (e) => {
        let textValueHtml = e.target.value;
        live.innerHTML = textValueHtml;
    })

    field2.addEventListener("keyup", (e) => {
        let textValueCss = e.target.value;
        styleCss.innerHTML = textValueCss;
    })

    // field3.addEventListener("keyup", (e) => {
    //     let textValueJs = e.target.value;
    //     scriptJs.innerHTML = textValueJs;
    // })

}

// BTN ELEMENTS

// functions which inject tags & focus between tags

function insertTag(startTag, endTag, textareaId) {

    const field  = document.getElementById("data");
    field.focus();

    let startSelection = field.value.substring(0, field.selectionStart);
    let currentSelection = field.value.substring(field.selectionStart, field.selectionEnd);
    let endSelection = field.value.substring(field.selectionEnd);
                
    field.value = startSelection + startTag + currentSelection + endTag + endSelection;
    field.focus();
    field.setSelectionRange(startSelection.length + startTag.length, startSelection.length + startTag.length + currentSelection.length);

}

function insertTag2(startTag2, endTag2, textareaId2) {

    const field2 = document.getElementById("data2");
    field2.focus();

    let startSelection2 = field2.value.substring(0, field2.selectionStart);
    let currentSelection2 = field2.value.substring(field2.selectionStart, field2.selectionEnd);
    let endSelection2 = field2.value.substring(field2.selectionEnd);
                
    field2.value = startSelection2 + startTag2 + currentSelection2 + endTag2 + endSelection2;
    field2.focus();
    field2.setSelectionRange(startSelection2.length + startTag2.length, startSelection2.length + startTag2.length + currentSelection2.length);

}

function insertTag3(startTag3, endTag3, textareaId3) {

    const field3 = document.getElementById("data3");
    field3.focus();

    let startSelection3 = field3.value.substring(0, field3.selectionStart);
    let currentSelection3 = field3.value.substring(field3.selectionStart, field3.selectionEnd);
    let endSelection3 = field3.value.substring(field3.selectionEnd);
                
    field3.value = startSelection3 + startTag3 + currentSelection3 + endTag3 + endSelection3;
    field3.focus();
    field3.setSelectionRange(startSelection3.length + startTag3.length, startSelection3.length + startTag3.length + currentSelection3.length);

}

