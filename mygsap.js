var myScene = new TimelineMax({repeat:-1,repeatDelay:4,yoyo:false});
myScene
    .to(".start",1,{x:"-2%",ease:Linear.easeOut})
    .to(".end",1,{x:"3%",ease:Linear.easeOut},"-=1")

    .to(".ms001_9r",1,{autoAlpha:1,ease:Power1.easeIn})
    .to(".ms001_9r",1,{top:"31.3%",scale:1.5,ease:Power1.easeIn})
    .to(".ms001_9r",1,{left:"0%",zIndex:20,ease:Power1.easeIn})

    .to(".ms001_ag",1,{autoAlpha:1,ease:Power1.easeIn})
    .to(".ms001_ag",1,{top:"31.3%",scale:1.5,ease:Power1.easeIn})
    .to(".ms001_ag",1,{left:"12%",zIndex:20,ease:Power1.easeIn})

    .to(".ms001_9y",1,{autoAlpha:1,ease:Power1.easeIn})
    .to(".ms001_9y",1,{top:"31.3%",scale:1.5,ease:Power1.easeIn})
    .to(".ms001_9y",1,{left:"26%",zIndex:20,ease:Power1.easeIn})
    //move chains to close position
    .to(".start",1,{x:"8%",ease:Linear.easeOut,zIndex:18},"-=0.5")
    .to(".end",1,{x:"-6.5%",ease:Linear.easeOut},"-=0.5")
    //swap out start chain
    .to(".start",0.5,{src:"/design/themes/GiddyStore/media/animation/01/res/images/chainDual.png",zIndex:100,ease:Linear.easeIn},"-=0.5")
    //remove charms
    .to(".ms001_9r",1,{x:"-500%",zIndex:20,autoAlpha:0,ease:Power1.easeIn})
    .to(".ms001_ag",1,{x:"-500%",zIndex:20,autoAlpha:0,ease:Power1.easeIn})
    .to(".ms001_9y",1,{x:"-500%",zIndex:20,autoAlpha:0,ease:Power1.easeIn})

    //show closed clasp
    .to(".start,.end",1,{autoAlpha:0,ease:Linear.easeOut})
    .to(".closed",1.5,{autoAlpha:1,ease:Linear.easeIn})
    //Show final item
    .to(".closed",3,{autoAlpha:0,scale:2,y:"-50%",x:"-10%",ease:Linear.easeOut})
    .to(".final",3,{y:"-100%",autoAlpha:1,scale:0.9,ease:Elastic.easeOut});

//media control features
function play()
{
  myScene.play();
}
function pause()
{
  myScene.pause();
}
function reverse()
{
  myScene.reverse();
}
function restart()
{
  myScene.restart();
}
