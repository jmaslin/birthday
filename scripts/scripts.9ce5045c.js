"use strict";angular.module("birthdayApp",["angularMoment","ngMaterial","ngAnimate","ngFx"]),angular.module("birthdayApp").controller("MainCtrl",["$scope","$log","$timeout","birthdayFetcher",function(a,b,c,d){a.date=new Date;a.changeDate=function(b){d.getPeopleForDay(b).then(function(){a.getPerson()})},a.getPerson=function(){delete a.person,c(function(){b.debug("Get new person."),a.person=d.getRandomPerson(),b.info(a.person)},50)},a.changeDate(a.date)}]),angular.module("birthdayApp").factory("dayFetcher",["$http","$location",function(a,b){var c=window.location.origin,d=function(a){var b=a-1+".json";return b},e=function(b){var e=d(b),f=c+"/data/birthdays/";return a.get(f+e).then(function(a){return a.data.people})},f={};return f.getBirthdaysForDay=function(a){return e(a)},f}]),angular.module("birthdayApp").factory("birthdayFetcher",["dayFetcher","moment","$log",function(a,b,c){var d={},e=0,f=function(a){return b(a).format("DDD")},g=function(){return a.getBirthdaysForDay(d.day).then(function(a){h(a),delete d.people,d.people=a})},h=function(a){for(var b,c,d=a.length;d;)c=Math.floor(Math.random()*d--),b=a[d],a[d]=a[c],a[c]=b;return a},i={};return i.getPeopleForDay=function(a){return d.day=f(a),d.index=0,g()},i.getRandomPerson=function(){var a=d.people[e];return e++,a},i}]),angular.module("birthdayApp").directive("personCard",function(){return{templateUrl:"views/person_card.html",restrict:"E",scope:{person:"="}}}),angular.module("birthdayApp").run(["$templateCache",function(a){a.put("views/main.html",'<md-content class="content-area" layout-fill flex layout="column" layout-padding> <section layout="row" layout-align="center center"> <md-datepicker ng-model="date" ng-change="changeDate(date)" md-placeholder="Enter date"></md-datepicker> </section> <div layout="row" layout-align="center center"> <div flex-xs="100" flex-sm="90" flex-gt-sm="60" ng-show="person" ng-hide="!person" class="fx-fade-normal fx-dur-600 fx-ease-none"> <person-card person="person"></person-card> </div> </div> <span flex></span> <div layout="row" layout-align="end end"> <md-button class="md-fab md-accent md-mini refresh" ng-click="getPerson()"> <md-icon md-font-icon="material-icons">refresh</md-icon> </md-button> </div> </md-content>'),a.put("views/person_card.html",'<md-card class="fade" ng-if="person"> <md-card-title layout="column" layout="center center" layout-gt-xs="row"> <md-card-title-text flex-order="2" flex-order-gt-xs="1"> <span class="md-headline">{{person.name}}</span> <span class="md-subhead">{{person.monthDay + \'/\' + person.year | amDateFormat: \'MMMM Do, YYYY\'}}</span> </md-card-title-text> <md-card-title-media flex-order="1" flex-order-gt-xs="2"> <div class="md-media-lg card-media" style="border: 1px solid gray"> </div> </md-card-title-media> </md-card-title> <md-card-content> <!-- <span class="md-title">{{person.age}} old.</span> --> <!-- <md-divider></md-divider> --> <p>{{person.aboutText}}</p> </md-card-content> <md-card-actions layout="row" layout-align="end center"> <md-button class="md-fab md-mini" aria-label="Cake"> <md-icon md-font-icon="material-icons">cake</md-icon> </md-button> <md-button class="md-primary md-fab md-mini" ng-href="https://en.wikipedia.org{{person.uri}}" target="_blank" aria-label="Info"> <md-icon md-font-icon="material-icons">info</md-icon> <md-tooltip md-direction="top"> Learn More </md-tooltip> </md-button> </md-card-actions> </md-card>')}]);