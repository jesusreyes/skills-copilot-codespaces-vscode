function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'templates/skills-member.html',
    controller: function($scope) {
      $scope.skills = [
        { name: 'HTML5', icon: 'html5', color: '#e34f26' },
        { name: 'CSS3', icon: 'css3-alt', color: '#1572b6' },
        { name: 'JavaScript', icon: 'js-square', color: '#f7df1e' },
        { name: 'AngularJS', icon: 'angular', color: '#b52e31' },
        { name: 'NodeJS', icon: 'node-js', color: '#68a063' },
        { name: 'MongoDB', icon: 'database', color: '#4db33d' },
        { name: 'ExpressJS', icon: 'server', color: '#000000' },
        { name: 'jQuery', icon: 'jquery', color: '#0769ad' },
        { name: 'Bootstrap', icon: 'bootstrap', color: '#563d7c' },
        { name: 'Git', icon: 'git-alt', color: '#f34f29' },
        { name: 'GitHub', icon: 'github', color: '#000000' },
        { name: 'Heroku', icon: 'cloud', color: '#6762a6' },
        { name: 'Gulp', icon: 'gulp', color: '#cf4647' },
        { name: 'Grunt', icon: 'grunt', color: '#fba919' },
        { name: 'Bower', icon: 'bower', color: '#ef5734' },
        { name: 'Sass', icon: 'sass', color: '#c69' },
        { name: 'Jasmine', icon: 'jasmine', color: '#8a4182' },
        { name: 'Karma', icon: 'karma', color: '#c21325' },
        { name: 'Mocha', icon: 'mocha', color: '#8d6748' },
        { name: 'Chai', icon: 'chai', color: '#d7b78a' },
        { name: 'Protractor', icon: 'protractor', color: '#c13e3e' },
        { name: 'Jade', icon: 'jade', color: '#00a86b' }]

      }
    }
}