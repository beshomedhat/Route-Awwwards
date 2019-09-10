import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {faGripLinesVertical} from'@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  constructor() { }
  faUserCircle = faUserCircle;
  faHeart = faHeart;
  faGripLinesVertical = faGripLinesVertical;

  ngOnInit() 
  {
    let newNavHeight =4;

    newNavHeight+=parseInt( $('nav').css("height"));

    $('nav').css("height", `${newNavHeight}`);
    $('nav').css("padding-top","0px");
    $('nav').css("padding-bottom","0px");
    var slide1=false;
    var slide2=false;
    var polygon= $('.container-fluid .row .empty .container .text .container .row .col-1 .polygon');
    var Fpolygon= $('.container-fluid .row .empty .container .text .container .row .col-1 #polygon');
    for(let i=0; i<4; i++)
    {
        $('.container-fluid .row .empty .container .text .container .row .col-1 a .prof').eq(i).hover(function()
        {
            if(parseInt(polygon.eq(i).css("bottom")) <-25)
            {
                polygon.eq(i).fadeTo(500,0); 
                $('.container-fluid .row .empty .container .text p a').css("z-index","6");
            }
            else
            {
                polygon.eq(i).fadeTo(500,1);
                $('.container-fluid .row .empty .container .text p a').css("z-index","0");
            }
        });
   }

    
    $('#dropdownMenuButton').click(function()
    {
        $('#dropdownMenuButton').css("box-shadow","none");
        $('#dropdownMenuButton').css("background-color","black");
        $("#menu2").slideUp(0.2,function()
        { 
            slide2=false;
            
            if(slide1==false)
            {
                $('#menu1').slideDown();
                $('.menuOverlay').fadeTo(1000,0.4);
                slide1=true;

            }
            
            else if(slide1==true)
            {
                if(slide2==false)
                {
                    $('.menuOverlay').fadeOut();
                }
                $('#menu1').slideUp();
                slide1=false;
                
            }
            
        });

    })
        
    $('#dropdownMenuButton2').click(function()
    {
        
        $('#dropdownMenuButton2').css("box-shadow","none");
        $('#dropdownMenuButton2').css("background-color","black");
        $("#menu1").slideUp(0.2,function()
        { 
            slide1=false;
            
        if(slide2==false)
            {
                $('#menu2').slideDown();
                $('.menuOverlay').fadeTo(1000,0.4);
                slide2=true;

            }
            
            else if(slide2==true)
            {
                if(slide1==false)
                {
                    $('.menuOverlay').fadeOut();
                }
                $('#menu2').slideUp();
                slide2=false;           
            }
        });
    })
  }

}
