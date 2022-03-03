window.fn = {};

// var toolbarButton = ons.platform.isAndroid() ? ons.createElement(`<ons-icon icon="md-more-vert"></ons-icon>`) : ons.createElement(`<span>More</span>`);
var infoButton = document.getElementById('info-button');
// infoButton.appendChild(toolbarButton);
window.fn.showDialog = function (id) {
  var elem = document.getElementById(id);
  if (id === 'popover-dialog') {
    elem.show(infoButton);

  }
};

window.fn.toggleMenu = function () {
  document.getElementById('appSplitter').right.toggle();
};

window.fn.loadView = function (index) {
  document.getElementById('appTabbar').setActiveTab(index);
  document.getElementById('sidemenu').close();
};

window.fn.loadLink = function (url) {
  window.open(url, '_blank');
};

window.fn.pushPage = function (page, anim) {
  if (anim) {
    document.getElementById('appNavigator').pushPage(page.id, { data: { title: page.title }, animation: anim });
  } else {
    document.getElementById('appNavigator').pushPage(page.id, { data: { title: page.title } });
  }
};

ons.getScriptPage().addEventListener('prechange', function(event) {
if (event.target.matches('#appTabbar')) {
event.currentTarget.querySelector('ons-toolbar .center').innerHTML = event.tabItem.getAttribute('label');
}
});

