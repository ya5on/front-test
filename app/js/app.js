"use strict";$(document).ready(function(){$(".modal").magnificPopup({type:"inline",preloader:!1,focus:"#name",callbacks:{beforeOpen:function(){$(window).width()<700?this.st.focus=!1:this.st.focus="#name"}}})});