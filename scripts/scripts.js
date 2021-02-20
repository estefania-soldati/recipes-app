const chicken = [];
let meat = [];
const pork = [];
const fish = [];

//Button start
function start(){
  $(".hero").fadeOut('normal',function(){
    $('.choose-recipe').fadeIn();
  });
}

//When you touch salty food
function goSaltyFood(){
  $('.choose-recipe').fadeOut('normal',function(){
    $('.salty-food').fadeIn();
  })
}

//When you touch sweet food
function goSweetFood(){
  $('.choose-recipe').fadeOut('normal',function(){
    $('.sweet-food').fadeIn();
  })
}

//choose meat
function chooseMeat(){
  $('.choose-type-of-food').fadeOut('normal',function(){
    $('.select-meat').fadeIn();
  })
}


//show meat recipes
function renderMeatRecipes(){
  meat.forEach(function(recipe,index){
    $('<div/>')
      .addClass('meat-recipe-container')
      .attr('id','meat-recipe-item-'+index)
      .appendTo('.meat-recipes');
    $('<div/>')
      .addClass('meat-recipes-info')
      .appendTo('#meat-recipe-item-'+index);
    $('<div/>')
      .addClass('meat-photo-recipe')
      .appendTo('#meat-recipe-item-'+index+' .meat-recipes-info');
    $('<img/>')
      .attr({'src':meat[index].recipe.image,'alt':''})
      .appendTo('#meat-recipe-item-'+index+' .meat-recipes-info .meat-photo-recipe');
    $('<div/>')
      .addClass('meat-ingredients-container')
      .appendTo('#meat-recipe-item-'+index+' .meat-recipes-info');  
    $('<h4/>')
      .addClass('meat-name-recipe')
      .html(meat[index].recipe.label)
      .appendTo('#meat-recipe-item-'+index+' .meat-recipes-info .meat-ingredients-container');
    $('<p/>')
        .addClass('meat-ingredients')
        .html('<span>Ingredients:</span> '+ meat[index].recipe.ingredientLines)
        .appendTo('#meat-recipe-item-'+index+' .meat-recipes-info .meat-ingredients-container');
    $('<p/>')
      .addClass('meat-calories')
      .html('<span>Calories:</span> '+ meat[index].recipe.calories)
      .appendTo('#meat-recipe-item-'+index+' .meat-recipes-info .meat-ingredients-container');
    $('<p/>')
      .addClass('meat-time')
      .html('<span>Cooking time:</span> '+ meat[index].recipe.totalTime)
      .appendTo('#meat-recipe-item-'+index+' .meat-recipes-info .meat-ingredients-container');
  })
}

//Show recipes with meat
function showMeatRecipes(){
  $(".salty-food").fadeOut('normal',function(){
    $('.meat-recipes').fadeIn();
    $('.button-meat-recipe-container').show();
  });
  renderMeatRecipes();
}

window.onload = function(){  
  document.querySelector(".meat").addEventListener("click", chooseMeat);
  document.querySelector(".salty").addEventListener("click", goSaltyFood);
  document.querySelector(".sweet").addEventListener("click", goSweetFood);
  document.querySelector(".hero-button").addEventListener("click", start);
  document.querySelector(".meat-button").addEventListener("click", showMeatRecipes);
}


var apiExampleURL = "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free";

var apiExampleURLWithAuth = "https://api.edamam.com/search?q=chicken&app_id=3ba3c17c&app_key=b73f2f93f0e0f6e34ba6820791e7e8f4&from=0&to=3&calories=591-722&health=alcohol-free";

/*$.ajax({
  type: 'GET',
  url: apiExampleURLWithAuth,
  success: function(response) {
    console.log(response);
  },
  error: function(status) {
    console.warn( 'ERROR', status );
  }
}); */

/* =====================================================

  documentation Recipe Search API

  https://developer.edamam.com/edamam-docs-recipe-api


===================================================== */

/* ================================================================================ */

// base search
var appID = "3ba3c17c";
var appKey = "b73f2f93f0e0f6e34ba6820791e7e8f4";

var apiAuth = "&app_id="+appID+"&app_key="+appKey;
var baseApiUrlSearch = "https://api.edamam.com/search?q=";
var searchParam1 = "meat";

//Look for recipes with meat
$.ajax({
  type: 'GET',
  url: baseApiUrlSearch+searchParam1+apiAuth,
  success: function(response) {
    console.log(response.hits);
    meat = response.hits;
    console.log(meat);
    console.log(meat[2].recipe);
    //console.log(response.hits[0].recipe.label)
   // console.log(meat.hits[0].recipe.label)
  },
  error: function(status) {
    console.warn( 'ERROR', status );
  }
});
 
//Look for recipes with chicken
/*var searchParam2 = "chicken";
$.ajax({
  type: 'GET',
  url: baseApiUrlSearch+searchParam2+apiAuth,
  success: function(response) {
    //console.log(response);
    chicken.push(response);
  },
  error: function(status) {
    console.warn( 'ERROR', status );
  }
});

//Look for recipes with pork
var searchParam3 = "pork";
$.ajax({
  type: 'GET',
  url: baseApiUrlSearch+searchParam3+apiAuth,
  success: function(response) {
    //console.log(response);
    pork.push(response);
  },
  error: function(status) {
    console.warn( 'ERROR', status );
  }
}); */


/* ================================================================================ */

  /*// base search + diet
  var appID = "3ba3c17c";
  var appKey = "b73f2f93f0e0f6e34ba6820791e7e8f4";

  var apiAuth = "&app_id="+appID+"&app_key="+appKey;
  var baseApiUrlSearch = "https://api.edamam.com/search?q=";
  var searchParam = "potato";

  var dietBase = "&diet=";
  var dietParam = "balanced";

  $.ajax({
    type: 'GET',
    url: baseApiUrlSearch+searchParam+apiAuth+dietBase+dietParam,
    success: function(response) {
      console.log(response);
    },
    error: function(status) {
      console.warn( 'ERROR', status );
    }
  }); */

/* ================================================================================ */

// recipe label console log
/*
var testURL = "https://api.edamam.com/search?q=chicken&app_id=3ba3c17c&app_key=b73f2f93f0e0f6e34ba6820791e7e8f4&ingr=3";

$.ajax({
  type: 'GET',
  url: testURL,
  success: function(response) {
    console.log(response);
    console.log(response.hits[0].recipe.label);
  },
  error: function(status) {
    console.warn( 'ERROR', status );
  }
});  */



