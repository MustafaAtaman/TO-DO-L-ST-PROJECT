function newElement(){
    var inputValue = document.getElementById("task").value.trim();//trim ile input girişindeki veya sonundaki gereksiz boşluk kaldırılır
    if (inputValue === ""){
        showErrorToast();//input value değeri boş ise bu fonksiyonu çalıştırır
    }else{
        var li =document.createElement("li");// li diye bir element oluştur
      //  li.className = "your-hover-class"; // Hover ve checked class'larını ekleyin
        var t =document.createTextNode(inputValue); // t elementi input value'dan gelen değer
        li.appendChild(t);//t ile tanımlı değeri li içine ekler
        document.getElementById("list").appendChild(li);//idsi list olan öğeyeli ekler
        document.getElementById("task").value ="";//idsi task olan öğe içini boş hale getirir
    
        var span = document.createElement("SPAN");//SPAN ÖĞESİ OLUŞTURDU
        var txt =  document.createTextNode("\u00D7"); // X yani çarpı ifadesi oluşturan bir text olusturur.
        span.className = "close";
        span.appendChild(txt);//span içine txt değerini atar
        li.appendChild(span);//span öğesini li öğesine ekledik

        span.onclick = function(){//span öğesine tıklama fonksiyonu
            var div = this.parentElement;//olusturulan span etiketinin üst elementini seçer
            div.style.display = "none"; // görünmez yapar
        };
        li.onclick = function(){//li öğesine tıklama fonksiyonu
            this.classList.toggle("checked");//seçilen öğeye(li)checked clasını ekler
        };
        showSuccessToast(); //listeye ekleme başarılı
    }
}
function showSuccessToast() {
    var toast = document.getElementById("liveToast");
    toast.classList.remove("hide");//remove classını gizler 
    toast.classList.add("show");
    setTimeout(function(){
        toast.classList.remove("show");
        toast.classList.add("hide");
    }, 4000);//gerçekleşecek fonksiyonun 4000 mili saniye yani 4 saniyede gerçekleşmesini sağlar
}
function showErrorToast() {
    var toast = document.getElementById("liveToastError"); //liveToastError id sahip etiketi seçer
    toast.classList.remove("hide"); //hide classını gizler
    toast.classList.add("show"); // show classını gösterir
    setTimeout(function() {
      toast.classList.remove("show");
      toast.classList.add("hide");
    }, 4000); 
  }
var myNodelist = document.getElementsByTagName("LI");//html içerisindeki tüm "li" etiketlerini seçer ve myNodelist değişkenine atar
for (var i = 0; i < myNodelist.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span); //myNodelist içerisindeki öğelerin hepsine span etiketini ekler
    span.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    };

    myNodelist[i].onclick = function() {
        this.classList.toggle("checked");
    };

}
var close = document.getElementsByClassName("close"); //close classına sahip olanları seçer ve close değişkenine atar
  for (var i = 0; i < close.length; i++) { //close.length sayısına kadar birer artarak ilerler
    close[i].onclick = function() {
      var div = this.parentElement; //close üzerindeki etiketi seçer ve div değişkenine atar
      div.style.display = "none"; // div değişkenin displayini none yani görünmez yapar
    };
    myNodelist[i].onclick = function() {
        this.classList.toggle("checked");
    };

  }
  var list = document.querySelector("ul"); // ul etiketini seçer ve list değişkenine atar
  list.addEventListener("click", function(ev) { //list öğesine tıklandığında çalışan bir fonksiyon
    if (ev.target.tagName === "LI") { // li etiketine tıklandıysa
      ev.target.classList.toggle("checked"); // checked classını ekler
    }
  }, false);
  myNodelist[i].onclick = function() {
    this.classList.toggle("checked");
};














