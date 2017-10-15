function createTooltips()
{
  var elementTooltip = document.getElementsByClassName("tooltip");
  
  var tooltipContener = document.createElement("div");
  tooltipContener.id = "tooltipContener";
  
  document.body.appendChild(tooltipContener);
  var tmpTitles = [];
 
   for (var i = 0; i < elementTooltip.length; i++)
  {
      tmpTitles[i] = elementTooltip[i].title;
      
      elementTooltip[i].tmp_id = i;
      
      elementTooltip[i].addEventListener("mouseover",function(e)
      {
          tooltipContener.innerHTML = this.title;
          
          this.title = "";
          tooltipContener.style.left = e.clientX + document.documentElement.scrollLeft + 20 +"px";
          tooltipContener.style.top = e.clientY + document.documentElement.scrollTop + 20 + "px";
          
          tooltipContener.style.display = "block";
      });
      elementTooltip[i].addEventListener("mouseout",function(e)
      {
          this.title = tmpTitles[this.tmp_id];
          tooltipContener.innerHTML = this.title;
          
          tooltipContener.style.display = "none";
      });
  }
}

window.onload = function()

{
    createTooltips();
    var imageForWath = document.getElementById("imageForWath");
    var image = new Image;

    imageForWath.appendChild(image);

    var thumbnail = document.getElementsByClassName("thumbnail");

    var currentThumbnail = thumbnail[0];

    image.src = currentThumbnail.getAttribute("src");
    currentThumbnail.className += " current";

    for (var i = 0; i < thumbnail.length; i++)
{
    thumbnail[i].addEventListener("mouseover",function() //lub po onclick
    {
       currentThumbnail.className = currentThumbnail.className.replace("current", "");
       currentThumbnail = this;
       currentThumbnail.className += " current";
       
       image.src = this.getAttribute("src");
    });
}

};
