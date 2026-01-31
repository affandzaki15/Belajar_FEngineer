let activeTab = 0;

const contents = [
  "Ini Tab 1",
  "Ini Tab 2",
  "Ini Tab 3"
];

const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");
const content = document.getElementById("content");

function render(){
    content.innerText = contents[activeTab];
}

tab1.addEventListener("click", function(){
    activeTab = 0;
    render();
    reset();
})
tab2.addEventListener("click", function(){
    activeTab = 1;
    render();
})
tab3.addEventListener("click", function(){
    activeTab = 2;
    render();
})