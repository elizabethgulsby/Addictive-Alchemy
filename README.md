# Addictive Alchemy - Side Effects Workbench

<img src="http://i.imgur.com/ErvSwtf.jpg">

## Table Of Contents
- [Project Description](#project-description)
- [Development Challenges](#development-challenges)
- [Forthcoming Features](#forthcoming-features)
- [Deployment](#deployment)
- [Acknowledgements](#acknowledgements)

### Project Description

Addictive Alchemy Side Effects Workbench is a companion application for the Kickstarter-launched card game Addictive Alchemy, 
developed by Atlanta-based game company New World Alchemy, through its' chief game designer, David Lupo.  
Addictive Alchemy is a fast acting deck destruction card game for 3 to 6 players. The object of the game is to drink potions to 
destroy your foes' potions, regain potions you've lost, or manipulate powerful side effects that impact all players. These side 
effects are cards that are visible to all players, and they potentially will impact all players. They are usually selected by 
the players at the start of the game, and placed at the center of the table. They can be flipped from a good side or bad side, 
and they can be locked onto a side. Side effects come in sets, but they can be mixed and matched across sets. 

This application was developed by Elizabeth Gulsby and Casey
McCaskill as a final full-stack project for DigitalCrafts' 16-week immersive coding bootcamp based in Atlanta, Georgia. Its' core functionality is to act as a digital stand-in for the side-effects 
component of the physical gameplay. Side Effects Workbench uses a weighting algorithm that takes 
player preferences and assigns weights to all possible side effects. This weighting algorithm uses a lottery style random 
selection where each side effect is assigned a number of entries based on how closely it matches user preference. 
The algorithm must also make sure that only one side effect of all six possible color combinations is selected.  Utilizing this algorithm, 
users may select side effects at random, or customize the speed and complexity of the gameplay mechanic by directly manipulating 
these facets.

Technologies used:
- HTML
- CSS
- Bootstrap
- JavaScript
- React
- Redux
- Node.js (Express)
- MySQL

Please see enclosed screenshots:
<img src="http://i.imgur.com/THW6DEQ.jpg">
<img src="http://i.imgur.com/a2TVNO2.jpg">
<img src="http://i.imgur.com/yNhmfZS.jpg">


### Development Challenges

* The original MVP (Minimum Viable Product) for Side Effects Workbench included the ability to favorably weight or omit side effects from appearing
in gameplay scenarios.  The functionality for this feature has been added to the program. Unit testing
shows that the status of these side effects is being returned via the appropriate reducer from Express through Redux; however, 
the statuses of the favorited/blocked side effects (for the current user) are not being displayed accurately upon user session 
initialization.  A potential fix for this issue will begin testing for the next update shortly, beginning with test data 
implementation in MySQL.

* Due to the nature of the algorithm implemented for randomization and weighting, several callbacks (JavaScript Promises)
had to be chained (within Node.js) to ensure that asynchronous calls occurred in the proper order.  Design considerations were 
also given to create more elegant use of Node's asynchronous architecture.  

### Forthcoming Features

Proposed features for Addictive-Alchemy v2.0 are as follows:
- Favoriting/Blocking side effects (in progress)
- Speed/Complexity score displays on comprehensive Side Effects page
- Zoom option (for card text enhancement)

### Deployment

This app is deployed on the developer's respective websites via AWS, using Ubuntu:

http://www.elizabethgulsby.com/Addictive-Alchemy

http://www.caseytm.com/addictive-alchemy





